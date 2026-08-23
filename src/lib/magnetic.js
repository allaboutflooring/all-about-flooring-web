/**
 * Magnetic buttons.
 *
 * Primary actions drift a few pixels toward the cursor as it approaches
 * and spring back on leave. It is a small thing, but it is the kind of
 * response people read as "considered" rather than "templated".
 *
 * Pointer devices only, and the travel is capped well below the button's
 * own padding so the hit area never drifts away from the cursor.
 */
const SELECTOR = '.btn-primary, .btn-oak, .ctaN-btn, .cf-btn, .qform-btn, .stop'
const PULL = 0.28
const MAX = 9

export function initMagnetic() {
  if (typeof window === 'undefined') return () => {}
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return () => {}

  const els = [...document.querySelectorAll(SELECTOR)]
  const cleanups = []

  for (const el of els) {
    el.classList.add('is-magnetic')
    let raf = 0
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        el.style.setProperty('--mx', `${Math.max(-MAX, Math.min(MAX, dx * PULL)).toFixed(1)}px`)
        el.style.setProperty('--my', `${Math.max(-MAX, Math.min(MAX, dy * PULL)).toFixed(1)}px`)
      })
    }
    const reset = () => {
      cancelAnimationFrame(raf)
      el.style.setProperty('--mx', '0px')
      el.style.setProperty('--my', '0px')
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', reset)
    cleanups.push(() => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', reset)
      el.classList.remove('is-magnetic')
    })
  }
  return () => cleanups.forEach((fn) => fn())
}
