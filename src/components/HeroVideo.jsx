import { useEffect, useRef, useState } from 'react'
import { Arrow, Play, Pause } from './Icons'

/**
 * Module-level, deliberately. As a default parameter this object was
 * rebuilt on every render, so the effect below - keyed on it - re-ran on
 * every timeupdate and called load(), resetting playback to frame 0 about
 * four times a second. The video looked frozen because it was restarting
 * continuously.
 */
const DEFAULT_SOURCES = {
  webmLarge: '/video/hero-1440.webm',
  mp4Large: '/video/hero-1440.mp4',
  webm: '/video/hero-1080.webm',
  mp4: '/video/hero-1080.mp4',
  webmSmall: '/video/hero-720.webm',
  mp4Small: '/video/hero-720.mp4',
}

/**
 * Picks a source by CSS width so a phone never pulls 1080p/1440p on the
 * LCP path. 720p on small or constrained connections, 1080p otherwise,
 * 1440p only on genuinely wide desktops.
 */
function pickSource(s) {
  const cssW = window.innerWidth
  const net = navigator.connection || {}
  const thrifty =
    net.saveData === true || ['slow-2g', '2g', '3g'].includes(net.effectiveType)

  const pair =
    thrifty || cssW < 700
      ? { webm: s.webmSmall, mp4: s.mp4Small }
      : cssW >= 1800
        ? { webm: s.webmLarge, mp4: s.mp4Large }
        : { webm: s.webm, mp4: s.mp4 }

  const probe = document.createElement('video')
  const webmOk =
    probe.canPlayType('video/webm; codecs="vp9"') || probe.canPlayType('video/webm')
  return webmOk && pair.webm ? pair.webm : pair.mp4
}

/**
 * Full-bleed video hero.
 *
 * Autoplay notes - this is what was keeping it stuck on the poster:
 *  1. React does not reliably set the `muted` DOM *property* from the
 *     `muted` JSX attribute. Browsers check the property, not the
 *     attribute, so an unmuted-looking video gets its autoplay blocked.
 *     Both are now set imperatively before play() is ever called.
 *  2. play() was being called immediately after load(), before the
 *     element had enough data, so the promise rejected. We now wait for
 *     `canplay`.
 *  3. `preload="none"` in the markup keeps the prerendered page from
 *     fetching video, but it also means `canplay` never fires - the
 *     browser was told not to buffer. Gating play() on canplay therefore
 *     deadlocked on the poster. The effect now flips preload to 'auto'
 *     before load(), and play is attempted from several signals, not one.
 *  4. If autoplay is still refused (some mobile power-saving modes), the
 *     first user interaction anywhere on the page retries it once.
 *
 * The poster still ships in the prerendered HTML and the source is only
 * chosen on the client, so the LCP paint never waits on a download,
 * phones get the 720p file, and reduced-motion never loads video at all.
 */
export default function HeroVideo({
  eyebrow,
  headline,
  sub,
  ctaPrimary = { label: 'See our work', href: '#work' },
  ctaSecondary,
  sources = DEFAULT_SOURCES,
}) {
  const videoRef = useRef(null)
  const progRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let retried = false
    let settled = false
    let cancelled = false
    let kick
    let idleId
    const listeners = []
    const on = (el, ev, fn) => {
      el.addEventListener(ev, fn)
      listeners.push(() => el.removeEventListener(ev, fn))
    }

    const start = () => {
      if (cancelled) return
      const net = navigator.connection || {}
      if (net.saveData === true || net.effectiveType === 'slow-2g' || net.effectiveType === '2g') return

      v.muted = true
      v.defaultMuted = true
      v.playsInline = true
      v.setAttribute('muted', '')
      v.setAttribute('playsinline', '')
      v.preload = 'auto'
      v.src = pickSource(sources)
      v.load()
      setEnabled(true)

      const attempt = () => {
        if (settled || !v.paused) return Promise.resolve()
        return v.play().then(
          () => {
            settled = true
            setPlaying(true)
          },
          () => {
            setPlaying(false)
            if (!retried) {
              retried = true
              const once = () => {
                v.play().then(() => setPlaying(true)).catch(() => {})
              }
              on(window, 'pointerdown', once)
              on(window, 'touchstart', once)
            }
          }
        )
      }

      on(v, 'loadeddata', attempt)
      on(v, 'canplay', attempt)
      on(v, 'canplaythrough', attempt)
      on(v, 'play', () => setPlaying(true))
      on(v, 'pause', () => setPlaying(false))
      attempt()
      kick = setTimeout(attempt, 400)
    }

    const idle = (fn) => {
      if (window.requestIdleCallback) {
        idleId = window.requestIdleCallback(fn, { timeout: 1600 })
      } else {
        idleId = setTimeout(fn, 200)
      }
    }
    if (document.readyState === 'complete') idle(start)
    else on(window, 'load', () => idle(start))

    on(v, 'timeupdate', () => {
      if (progRef.current && v.duration) {
        progRef.current.style.width = `${(v.currentTime / v.duration) * 100}%`
      }
    })

    return () => {
      cancelled = true
      clearTimeout(kick)
      clearTimeout(idleId)
      if (window.cancelIdleCallback) window.cancelIdleCallback(idleId)
      listeners.forEach((fn) => fn())
    }
  }, [sources.webm, sources.mp4, sources.webmSmall, sources.mp4Small, sources.webmLarge, sources.mp4Large])

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }

  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <picture>
          <source
            type="image/webp"
            srcSet="/img/hero-poster-960.webp 960w, /img/hero-poster-1600.webp 1600w"
            sizes="100vw"
          />
          <img
            className="poster"
            src="/img/hero-poster-960.jpg"
            srcSet="/img/hero-poster-960.jpg 960w, /img/hero-poster-1600.jpg 1600w"
            sizes="100vw"
            width="1920"
            height="1080"
            alt=""
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <video
          ref={videoRef}
          className={playing ? 'is-on' : undefined}
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className="hero-scrim" />
      </div>

      <div className="hero-in">
        <div className="hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{headline}</h1>
          <p className="hero-sub">{sub}</p>
          <div className="hero-acts">
            <a className="btn btn-primary btn-lg" href={ctaPrimary.href}>
              {ctaPrimary.label} <Arrow />
            </a>
            {ctaSecondary && (
              <a className="btn btn-ghost btn-lg" href={ctaSecondary.href}>
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
          <i ref={progRef} />
        </div>
      )}
    </section>
  )
}
