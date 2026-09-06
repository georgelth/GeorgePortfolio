'use client'

import { useEffect, useRef, useState } from 'react'
import { MusicPlayer } from './audio-engine'
import type { MusicTrack } from './tracks'
import SignalField from './signal-field'
import './music.css'

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return '0:00'
  const whole = Math.max(0, Math.floor(seconds))
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`
}

export default function MusicRoom({ tracks }: { tracks: MusicTrack[] }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const engine = useRef<MusicPlayer | null>(null)
  const request = useRef(0)
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(0)
  const [volume, setVolume] = useState(60)
  const [position, setPosition] = useState(0)
  const [duration, setDuration] = useState(0)
  const [motion, setMotion] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [error, setError] = useState('')
  const track = tracks[selected]
  const initialSource = tracks[0]?.src

  useEffect(() => {
    const audio = audioRef.current
    if (audio && initialSource) audio.src = initialSource
    return () => {
      request.current++
      engine.current?.dispose()
      engine.current = null
      if (audio) { audio.pause(); audio.removeAttribute('src'); audio.load() }
    }
  }, [initialSource])

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(preference.matches)
    update()
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])

  useEffect(() => { engine.current?.setVolume(volume) }, [volume])

  async function play() {
    const audio = audioRef.current
    if (!audio || !tracks.length) return
    const currentRequest = ++request.current
    setLoading(true)
    setError('')
    try {
      if (!engine.current) engine.current = new MusicPlayer(audio)
      engine.current.setVolume(volume)
      await engine.current.play()
      if (request.current === currentRequest) setLoading(false)
    } catch (cause) {
      if (request.current !== currentRequest) return
      setLoading(false)
      setPlaying(false)
      if (!(cause instanceof DOMException && cause.name === 'AbortError')) {
        setError('This track could not be played. Please try again or select another track.')
      }
    }
  }

  function togglePlayback() {
    if (playing || loading) {
      request.current++
      engine.current?.pause()
      setLoading(false)
    } else {
      void play()
    }
  }

  function selectTrack(index: number) {
    const audio = audioRef.current
    if (!audio) return
    if (index !== selected) {
      request.current++
      engine.current?.pause()
      setSelected(index)
      setPosition(0)
      setDuration(0)
      audio.src = tracks[index].src
      audio.load()
    }
    void play()
  }

  return (
    <section className="music-study mb-14" aria-labelledby="study-title">
      <div className="music-section-heading">
        <h2 id="study-title" className="font-sans text-4xl font-bold tracking-tighter">tracks & mixes</h2>
        <span className="font-mono font-bold text-[30px] text-neutral-600">[{String(tracks.length).padStart(2, '0')}]</span>
      </div>
      <p className="font-mono text-base music-muted mt-5">
        {tracks.length ? 'A few things I have been working on. Pick a track and listen.' : 'New music is on the way. Check back soon.'}
      </p>

      <audio
        ref={audioRef}
        preload="metadata"
        onPlaying={() => { setPlaying(true); setLoading(false); setError('') }}
        onPause={() => setPlaying(false)}
        onWaiting={() => setLoading(true)}
        onTimeUpdate={event => setPosition(event.currentTarget.currentTime)}
        onDurationChange={event => setDuration(Number.isFinite(event.currentTarget.duration) ? event.currentTarget.duration : 0)}
        onEnded={() => { setPlaying(false); setLoading(false) }}
        onError={() => {
          request.current++
          setPlaying(false)
          setLoading(false)
          setError('This track is unavailable. Please try another track or come back later.')
        }}
      />

      <figure className="music-signal">
        <div className="music-signal-label font-mono music-muted">
          <span>signal / {loading ? 'loading' : playing ? 'listening' : 'idle'}</span>
          <button
            type="button"
            onClick={() => setMotion(!motion)}
            aria-pressed={!motion}
            aria-label={motion ? 'Pause visual motion' : 'Enable visual motion'}
            disabled={reducedMotion}
          >
            {reducedMotion ? 'reduced motion' : motion ? 'pause motion' : 'resume motion'}
          </button>
        </div>
        <SignalField engine={engine} motion={motion && !reducedMotion} />
        <figcaption className="music-signal-label font-mono music-muted">
          <span className="music-current-title">{track?.title ?? 'sound, drawn in real time'}</span>
          <span className="music-time">{formatTime(position)} / {formatTime(duration)}</span>
        </figcaption>
        {track && (
          <input
            className="music-progress"
            type="range"
            aria-label="Playback position"
            aria-valuetext={`${formatTime(position)} of ${formatTime(duration)}`}
            min="0"
            max={duration || 1}
            step="0.1"
            value={Math.min(position, duration)}
            disabled={!duration}
            onChange={event => {
              const nextPosition = Number(event.target.value)
              if (audioRef.current) audioRef.current.currentTime = nextPosition
              setPosition(nextPosition)
            }}
          />
        )}
      </figure>

      <div className="music-transport font-mono">
        <button type="button" className="music-play" onClick={togglePlayback} disabled={!track} aria-label={playing || loading ? 'Pause track' : 'Play track'}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            {playing || loading ? <path d="M3 2h3v12H3zm7 0h3v12h-3z" /> : <path d="M4 2v12l10-6z" />}
          </svg>
          {loading ? 'loading' : playing ? 'pause' : 'play'}
        </button>
        <span className="music-muted music-transport-note">
          {track ? loading ? 'getting your track ready.' : playing ? 'now playing.' : 'press play to listen.' : 'no tracks yet.'}
        </span>
      </div>

      {tracks.length > 0 && (
        <div className="music-tracks font-mono" role="group" aria-label="Choose a track">
          {tracks.map((item, index) => (
            <button type="button" key={item.src} className="music-track" onClick={() => selectTrack(index)} aria-pressed={selected === index}>
              <span className="music-muted">{String(index + 1).padStart(2, '0')}</span>
              <span className="music-track-name">{item.title}</span>
              <span className="music-muted">mp3</span>
              <span className="music-track-marker" aria-hidden="true">{selected === index ? '\u2190' : '\u2197'}</span>
            </button>
          ))}
        </div>
      )}

      <div className="music-controls font-mono">
        <label>
          <span>volume <output>{volume}%</output></span>
          <input aria-label="Output volume" type="range" min="0" max="100" value={volume} onChange={e => setVolume(Number(e.target.value))} />
        </label>
      </div>
      {error && <p className="font-mono text-sm mt-4" role="alert">{error}</p>}
    </section>
  )
}
