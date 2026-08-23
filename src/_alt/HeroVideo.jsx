import { useEffect, useRef, useState } from 'react'
import { Arrow, Play, Pause } from './Icons'

/**
 * Full-bleed video hero.
 *
 * Source selection happens in useEffect, never in the markup:
 *  - the prerendered HTML ships only the poster, so the LCP paint does not
 *    wait on a video download
 *  - phones get the 720p file instead of the 1080p one
 *  - `prefers-reduced-motion: reduce` leaves the poster in place and never
 *    loads the video at all
 *
 * The clip is trimmed and crossfade-looped, so playback has no visible seam.
 * Audio is stripped deliberately — a short loop makes a music bed stutter,
 * and autoplay must be muted anyway.
 */
export default function HeroVideo({
  eyebrow,
  headline,
  sub,
  ctaPrimary = { label: 'See our work', href: '#work' },
  ctaSecondary,
  sources = {
    webm: '/video/hero-1080.webm',
    mp4: '/video/hero-1080.mp4',
    mp4Small: '/video/hero-720.mp4',
    poster: '/img/hero-poster.jpg',
    posterSmall: '/img/hero-poster-sm.jpg',
  },
}) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const small = window.matchMedia('(max-width: 900px)').matches
    const canWebm = v.canPlayType('video/webm; codecs="vp9"')
    v.src = small ? sources.mp4Small : canWebm ? sources.webm : sources.mp4
    v.load()
    setEnabled(true)

    v.play().then(
      () => setPlaying(true),
      () => setPlaying(false) // autoplay blocked — poster stays, control offers play
    )

    const onTime = () => v.duration && setProgress((v.currentTime / v.duration) * 100)
    v.addEventListener('timeupdate', onTime)
    return () => v.removeEventListener('timeupdate', onTime)
  }, [sources])

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play().then(() => setPlaying(true))
    else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <video
          ref={videoRef}
          poster={sources.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          data-note="Hero video"
        />
        <div className="hero-scrim" />
      </div>

      <div className="hero-in">
        <div className="hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{headline}</h1>
          <p className="hero-sub">{sub}</p>
          <div className="hero-acts">
            <a className="btn btn-light" href={ctaPrimary.href}>
              {ctaPrimary.label} <Arrow />
            </a>
            {ctaSecondary && (
              <a className="btn btn-light" href={ctaSecondary.href}>
                {ctaSecondary.label} <Arrow />
              </a>
            )}
          </div>
        </div>
      </div>

      {enabled && (
        <div className="hero-ctrl">
          <button
            className="vbtn"
            onClick={toggle}
            aria-label={playing ? 'Pause background video' : 'Play background video'}
          >
            {playing ? <Pause /> : <Play />}
          </button>
        </div>
      )}

      {enabled && (
        <div className="hero-prog" aria-hidden="true">
          <i style={{ width: `${progress}%` }} />
        </div>
      )}
    </section>
  )
}
