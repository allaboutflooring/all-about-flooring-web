import { useEffect, useState } from 'react'

/**
 * Scroll-to-top control.
 *
 * Appears once you are a screen or so down the page. The ring around it
 * fills as you progress through the document, so it doubles as a reading
 * indicator rather than just floating there.
 *
 * Visibility is driven by an IntersectionObserver sentinel; the progress
 * ring updates on a rAF-throttled scroll handler, writing to a CSS
 * variable rather than through React state.
 */
export default function ScrollTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const sentinel = document.createElement('div')
    sentinel.setAttribute('aria-hidden', 'true')
    sentinel.style.cssText = 'position:absolute;top:90vh;left:0;height:1px;width:1px;pointer-events:none'
    document.body.prepend(sentinel)
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting), { threshold: 0 })
    io.observe(sentinel)

    let ticking = false
    const el = () => document.querySelector('.stop')
    const update = () => {
      ticking = false
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0
      el()?.style.setProperty('--p', `${(p * 360).toFixed(1)}deg`)
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      io.disconnect()
      sentinel.remove()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      className={`stop${show ? ' is-on' : ''}`}
      onClick={toTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <span className="stop-ring" aria-hidden="true" />
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 14l5-5 5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
