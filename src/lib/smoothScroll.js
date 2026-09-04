/**
 * Inertial scrolling.
 *
 * The page eases toward its target instead of snapping frame-to-frame
 * with the wheel. Everything scroll-linked downstream inherits it.
 *
 * Drives the REAL scroll position rather than translating a wrapper: the
 * wrapper approach breaks `position: fixed`, and this site has a fixed
 * header and a fixed scroll-to-top control.
 *
 * Two things this has to get right, both learned the hard way:
 *
 * 1. `html { scroll-behavior: smooth }` must be off while this runs.
 *    Otherwise every scrollTo in the loop queues a browser animation that
 *    fights the loop, and the page stops responding to the wheel entirely.
 *
 * 2. Because it calls preventDefault on wheel, a failure here means the
 *    page cannot be scrolled at all. A watchdog checks that scrolling is
 *    actually happening and hands control back to the browser if not.
 */

/** Lower = heavier, more "studio site". Keep travel similar with WHEEL. */
const LERP = 0.065
const WHEEL = 1.08
const MAX_STEP = 240

export function initSmoothScroll() {
  if (typeof window === 'undefined') return () => {}
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return () => {}

  const root = document.documentElement
  const prevBehavior = root.style.scrollBehavior
  root.style.scrollBehavior = 'auto'   // must be off - see note above

  let target = window.scrollY
  let current = target
  let running = false
  let raf = 0
  let disabled = false

  const maxScroll = () => Math.max(0, root.scrollHeight - window.innerHeight)

  const inRooms = () => {
    const track = document.querySelector('.rooms-track')
    if (!track || track.closest('.rooms.is-plain')) return false
    const r = track.getBoundingClientRect()
    return r.top < window.innerHeight && r.bottom > 0
  }

  const halt = () => {
    running = false
    cancelAnimationFrame(raf)
    target = window.scrollY
    current = window.scrollY
  }

  const stop = () => {
    disabled = true
    cancelAnimationFrame(raf)
    root.style.scrollBehavior = prevBehavior
    window.removeEventListener('wheel', onWheel, { capture: true })
  }

  const tick = () => {
    const diff = target - current
    if (Math.abs(diff) < 0.35) {
      current = target
      window.scrollTo(0, current)
      running = false
      return
    }
    current += diff * LERP
    window.scrollTo(0, current)
    raf = requestAnimationFrame(tick)
  }

  function onWheel(e) {
    if (disabled) return
    if (e.ctrlKey || e.metaKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
    // An open custom listbox (the Service dropdown) manages its own scroll.
    // Let the wheel scroll it natively instead of hijacking it for the page.
    if (e.target?.closest?.('.sel-list')) return
    // Native page scroll while the walkthrough is on screen. The stage
    // is sticky, so the lerp looked like the page had jammed.
    if (inRooms()) {
      halt()
      return
    }
    e.preventDefault()
    let delta = e.deltaY
    if (e.deltaMode === 1) delta *= 16
    if (e.deltaMode === 2) delta *= window.innerHeight
    const step = Math.max(-MAX_STEP, Math.min(MAX_STEP, delta * WHEEL))
    target = Math.max(0, Math.min(maxScroll(), target + step))
    if (!running) {
      running = true
      const before = window.scrollY
      setTimeout(() => {
        if (!disabled && running && Math.abs(window.scrollY - before) < 0.5 && Math.abs(target - before) > 4) stop()
      }, 250)
      raf = requestAnimationFrame(tick)
    }
  }

  const onScroll = () => {
    if (!running) {
      target = window.scrollY
      current = window.scrollY
    }
  }

  const onClick = (e) => {
    if (disabled) return
    const a = e.target.closest?.('a[href^="#"]')
    if (!a) return
    const id = a.getAttribute('href')
    if (!id || id === '#') return
    const el = document.querySelector(id)
    if (!el) return
    e.preventDefault()
    const top = el.getBoundingClientRect().top + window.scrollY - 96
    target = Math.max(0, Math.min(maxScroll(), top))
    if (!running) {
      running = true
      raf = requestAnimationFrame(tick)
    }
  }

  window.addEventListener('wheel', onWheel, { passive: false, capture: true })
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onClick)

  return () => {
    cancelAnimationFrame(raf)
    root.style.scrollBehavior = prevBehavior
    window.removeEventListener('wheel', onWheel, { capture: true })
    window.removeEventListener('scroll', onScroll)
    document.removeEventListener('click', onClick)
  }
}
