'use client'

import Image, { type StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent, KeyboardEvent } from 'react'
import './project-carousel.css'

const modulo = (value: number, length: number) => ((value % length) + length) % length

export function ProjectCarousel({ images, title }: {
  images: StaticImageData[]
  title: string
}) {
  const viewport = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const position = useRef(0)
  const target = useRef(0)
  const frame = useRef(0)
  const selected = useRef(0)
  const reducedMotion = useRef(false)
  const gesture = useRef<{
    id: number; startX: number; startY: number; lastX: number
    lastTime: number; velocity: number; dragging: boolean
  } | null>(null)
  const [active, setActive] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [size, setSize] = useState({ width: 0, height: 0, gap: 24 })
  const count = images.length
  const canMove = count > 1
  const widths = images.map((image) => size.height * image.width / image.height)
  const starts = widths.map((_, index) => widths.slice(0, index).reduce((sum, width) => sum + width + size.gap, 0))
  const centers = widths.map((width, index) => starts[index] + width / 2)
  const cycle = widths.reduce((sum, width) => sum + width + size.gap, 0)
  const buffer = cycle ? Math.ceil(size.width / cycle) + 1 : 2
  const copies = canMove ? buffer * 2 + 1 : 1

  function paint() {
    if (!track.current || !cycle) return
    // Rebase to an identical copy on every frame, including during a long drag.
    // The rendered neighbors stay identical when crossing either loop boundary.
    const offset = canMove ? buffer * cycle + modulo(position.current, cycle) : centers[0]
    track.current.style.transform = `translate3d(${size.width / 2 - offset}px, 0, 0)`
  }

  function stop() {
    cancelAnimationFrame(frame.current)
    frame.current = 0
  }

  function animate() {
    stop()
    if (reducedMotion.current) {
      position.current = target.current
      paint()
      return
    }
    let previous = performance.now()
    const tick = (now: number) => {
      const elapsed = Math.min(now - previous, 64)
      previous = now
      position.current += (target.current - position.current) * (1 - Math.exp(-elapsed / 65))
      if (Math.abs(target.current - position.current) < 0.2) {
        position.current = target.current
        paint()
        frame.current = 0
        return
      }
      paint()
      frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
  }

  function select(index: number) {
    selected.current = index
    setActive(index)
  }

  function step(direction: number) {
    if (!canMove || gesture.current || !cycle) return
    const index = selected.current
    const next = modulo(index + direction, count)
    const distance = direction > 0
      ? (widths[index] + widths[next]) / 2 + size.gap
      : -((widths[index] + widths[next]) / 2 + size.gap)
    target.current += distance
    select(next)
    animate()
  }

  function snap(projected: number) {
    let nearest = 0
    let destination = 0
    let distance = Infinity
    centers.forEach((center, index) => {
      const candidate = center + Math.round((projected - center) / cycle) * cycle
      if (Math.abs(candidate - projected) < distance) {
        nearest = index
        destination = candidate
        distance = Math.abs(candidate - projected)
      }
    })
    target.current = destination
    select(nearest)
    animate()
  }

  useEffect(() => {
    const element = viewport.current
    if (!element) return
    const measure = () => {
      setSize({ width: element.clientWidth, height: element.clientHeight,
        gap: parseFloat(getComputedStyle(element).getPropertyValue('--gallery-gap')) })
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => { reducedMotion.current = preference.matches }
    updateMotion()
    preference.addEventListener('change', updateMotion)
    return () => {
      observer.disconnect()
      preference.removeEventListener('change', updateMotion)
      cancelAnimationFrame(frame.current)
    }
  }, [])

  useEffect(() => {
    stop()
    gesture.current = null
    setDragging(false)
    position.current = centers[selected.current] ?? 0
    target.current = position.current
    paint()
    // Resizing changes all geometry; preserve the selected screenshot.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size.width, size.height, size.gap, images])

  function pointerDown(event: PointerEvent<HTMLDivElement>) {
    if (!canMove || !cycle || !event.isPrimary || event.button !== 0 || gesture.current) return
    if ((event.target as HTMLElement).closest('button')) return
    stop()
    gesture.current = {
      id: event.pointerId, startX: event.clientX, startY: event.clientY,
      lastX: event.clientX, lastTime: event.timeStamp, velocity: 0, dragging: false,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function pointerMove(event: PointerEvent<HTMLDivElement>) {
    const current = gesture.current
    if (!current || current.id !== event.pointerId) return
    const dx = event.clientX - current.startX
    const dy = event.clientY - current.startY
    if (!current.dragging) {
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 6) return
      if (Math.abs(dy) > Math.abs(dx)) {
        finish(event, true)
        return
      }
      current.dragging = true
      setDragging(true)
    }
    const delta = event.clientX - current.lastX
    current.velocity = delta / Math.max(1, event.timeStamp - current.lastTime)
    current.lastX = event.clientX
    current.lastTime = event.timeStamp
    position.current -= delta
    paint()
  }

  function finish(event: PointerEvent<HTMLDivElement>, cancelled = false) {
    const current = gesture.current
    if (!current || current.id !== event.pointerId) return
    gesture.current = null
    setDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    if (cancelled || !current.dragging) {
      snap(position.current)
      return
    }
    const velocity = event.timeStamp - current.lastTime < 100 ? current.velocity : 0
    const momentum = Math.max(-size.width * 0.65, Math.min(size.width * 0.65, velocity * 180))
    snap(position.current - momentum)
  }

  function keyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      step(event.key === 'ArrowLeft' ? -1 : 1)
    }
  }

  if (!count) return null

  return (
    <section className="project-carousel" aria-label={`${title} screenshots`} aria-roledescription="carousel"
      style={{ '--gallery-ratio': Math.max(...images.map((image) => image.width / image.height)) } as CSSProperties}>
      <div className="project-carousel__viewport" ref={viewport}
        data-draggable={canMove} data-dragging={dragging} data-ready={size.width > 0}
        tabIndex={canMove ? 0 : undefined} aria-label={canMove ? 'Use left and right arrow keys to browse screenshots' : undefined}
        onKeyDown={keyDown} onPointerDown={pointerDown} onPointerMove={pointerMove}
        onPointerUp={(event) => finish(event)} onPointerCancel={(event) => finish(event, true)}
        onLostPointerCapture={(event) => finish(event, true)}>
        <div className="project-carousel__track" ref={track}>
          {Array.from({ length: copies }, (_, copy) => images.map((image, index) => (
            <div className="project-carousel__slide" key={`${copy}-${index}`}
              style={{ width: size.height ? widths[index] : undefined, aspectRatio: `${image.width} / ${image.height}` }}
              role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${count}`}
              aria-hidden={copy !== (canMove ? buffer : 0)}>
              <Image src={image} alt={`${title} screenshot ${index + 1}`} fill
                sizes={size.height ? `${Math.ceil(widths[index])}px` : '80vw'} draggable={false}
                priority={copy === (canMove ? buffer : 0) && index === 0} />
            </div>
          )))}
        </div>
        {canMove && ([-1, 1] as const).map((direction) => (
          <button key={direction} type="button" className={`project-carousel__edge project-carousel__edge--${direction < 0 ? 'left' : 'right'}`}
            aria-label={direction < 0 ? 'Previous screenshot' : 'Next screenshot'} onClick={() => step(direction)}>
            <span className="project-carousel__arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d={direction < 0 ? 'M14 6l-6 6 6 6M8 12h12' : 'M10 6l6 6-6 6M16 12H4'} stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          </button>
        ))}
      </div>
      <div className="project-carousel__footer font-mono">
        <span>{canMove ? 'drag or swipe to explore' : 'project screenshot'}</span>
        <span aria-live="polite" aria-atomic="true"><span className="project-carousel__current">{String(active + 1).padStart(2, '0')}</span> / {String(count).padStart(2, '0')}</span>
      </div>
    </section>
  )
}
