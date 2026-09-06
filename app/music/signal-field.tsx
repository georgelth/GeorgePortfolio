'use client'

import { useEffect, useRef, type RefObject } from 'react'
import type { MusicPlayer } from './audio-engine'

export default function SignalField({ engine, motion }: { engine: RefObject<MusicPlayer | null>; motion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return
    let frame = 0
    let width = 0
    let height = 0
    let visible = true
    let needsDraw = true
    let pointer = 0.5
    const samples = new Uint8Array(1024)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const theme = window.matchMedia('(prefers-color-scheme: dark)')
    let color = getComputedStyle(canvas).color

    const move = (event: PointerEvent) => {
      const box = canvas.getBoundingClientRect()
      pointer = (event.clientX - box.left) / box.width
    }
    const resize = () => {
      const box = canvas.getBoundingClientRect()
      width = box.width
      height = box.height
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      needsDraw = true
    }
    const preferenceChanged = () => {
      color = getComputedStyle(canvas).color
      needsDraw = true
    }
    const draw = (timestamp: number) => {
      const animate = motion && !reduced.matches
      if (visible && !document.hidden && (animate || needsDraw)) {
        needsDraw = false
        const time = animate ? timestamp * 0.0004 : 0
        const active = animate && engine.current?.playing
        if (active) engine.current!.analyser.getByteTimeDomainData(samples)
        context.clearRect(0, 0, width, height)
        context.strokeStyle = color
        context.lineWidth = 1

        context.globalAlpha = 0.12
        for (let x = 0; x < width; x += 24) {
          context.beginPath()
          context.moveTo(x, height / 2 - 2)
          context.lineTo(x, height / 2 + 2)
          context.stroke()
        }
        for (let line = 0; line < 7; line++) {
          context.beginPath()
          context.globalAlpha = line === 3 ? 0.75 : 0.09 + line * 0.025
          for (let x = 0; x <= width; x += 2) {
            const progress = x / width
            const envelope = Math.pow(Math.sin(progress * Math.PI), 1.8)
            const frequency = 18 + (animate ? pointer * 8 : 4)
            const idle = Math.sin(progress * frequency - time + line * 0.28)
              * Math.cos(progress * 6 + time * 0.5 + line * 0.12)
            const sample = active ? (samples[Math.min(1023, Math.floor(progress * 1023))] - 128) / 128 : 0
            const wave = active ? sample * 2.2 + idle * 0.12 : idle * 0.55
            const y = height / 2 + wave * envelope * height * 0.37 + (line - 3) * 3
            if (x === 0) context.moveTo(x, y)
            else context.lineTo(x, y)
          }
          context.stroke()
        }
        context.globalAlpha = 1
      }
      frame = requestAnimationFrame(draw)
    }
    const observer = new ResizeObserver(resize)
    const intersection = new IntersectionObserver(entries => { visible = entries[0].isIntersecting })
    observer.observe(canvas)
    intersection.observe(canvas)
    canvas.addEventListener('pointermove', move)
    reduced.addEventListener('change', preferenceChanged)
    theme.addEventListener('change', preferenceChanged)
    resize()
    frame = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      intersection.disconnect()
      canvas.removeEventListener('pointermove', move)
      reduced.removeEventListener('change', preferenceChanged)
      theme.removeEventListener('change', preferenceChanged)
    }
  }, [engine, motion])

  return <canvas ref={canvasRef} className="signal-canvas" aria-hidden="true" />
}
