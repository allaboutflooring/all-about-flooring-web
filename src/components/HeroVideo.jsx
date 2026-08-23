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
  poster: '/img/hero-poster.jpg',
}

/**
 * Picks a source by DEVICE pixels, not CSS pixels.
 *
 * The old rule dropped to 720p below 900px CSS width, which meant a
 * modern phone - 390 CSS px at DPR 3, so 1170 real pixels across a
 * full-bleed hero - was being handed a 1280-wide file to stretch. That
 * is most of why the video looked soft.
 *
 * 720p is reserved for genuinely small or bandwidth-constrained devices.
 * Above 1900 real pixels - a retina laptop or any 4K screen - the 1440p
 * tier is served instead: the browser was upscaling 1080p to fill those,
 * and measured at a 2560px-wide hero the 1440p file carries twice the
 * fine detail.
 */
function pickSource(s) {
  const dpr = window.devicePixelRatio || 1
  const cssW = window.innerWidth
  const devicePx = cssW * dpr
  const net = navigator.connection || {}
  const thrifty =
    net.saveData === true || ['slow-2g', '2g', '3g'].includes(net.effectiveType)

  const pair =
    thrifty || devicePx < 900
      ? { webm: s.webmSmall, mp4: s.mp4Small }
      : devicePx < 1600 && cssW < 1100
        ? { webm: s.webm, mp4: s.mp4 }
        : { webm: s.webmLarge, mp4: s.mp4Large }

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

    // Must be set as properties, not attributes, for autoplay to be allowed.
    v.muted = true
    v.defaultMuted = true
    v.playsInline = true
    v.setAttribute('muted', '')
    v.setAttribute('playsinline', '')

    // Must leave 'none' before load(), or the browser never buffers and
    // canplay/loadeddata never arrive.
    v.preload = 'auto'
    v.src = pickSource(sources)
    v.load()
    setEnabled(true)

    let retried = false
    let settled = false
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
              window.removeEventListener('pointerdown', once)
              window.removeEventListener('touchstart', once)
            }
            window.addEventListener('pointerdown', once, { once: true })
            window.addEventListener('touchstart', once, { once: true })
          }
        }
      )
    }

    const onCanPlay = () => attempt()
    // Written straight to the DOM node: no state, no render, no effect churn.
    const onTime = () => {
      if (progRef.current && v.duration) {
        progRef.current.style.width = `${(v.currentTime / v.duration) * 100}%`
      }
    }
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)

    // Several signals, because which one arrives first varies by browser.
    v.addEventListener('loadeddata', onCanPlay)
    v.addEventListener('canplay', onCanPlay)
    v.addEventListener('canplaythrough', onCanPlay)
    v.addEventListener('timeupdate', onTime)
    v.addEventListener('play', onPlay)
    v.addEventListener('pause', onPause)

    // And try straight away - if metadata is already there this wins.
    attempt()
    const kick = setTimeout(attempt, 400)

    return () => {
      clearTimeout(kick)
      v.removeEventListener('loadeddata', onCanPlay)
      v.removeEventListener('canplaythrough', onCanPlay)
      v.removeEventListener('canplay', onCanPlay)
      v.removeEventListener('timeupdate', onTime)
      v.removeEventListener('play', onPlay)
      v.removeEventListener('pause', onPause)
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
        <video
          ref={videoRef}
          poster={sources.poster}
          loop
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
