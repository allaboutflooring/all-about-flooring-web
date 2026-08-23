import { useEffect, useLayoutEffect } from 'react'
import { initScrollFx } from '../lib/scrollFx'
import { initSmoothScroll } from '../lib/smoothScroll'
import { initMagnetic } from '../lib/magnetic'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

/**
 * Mounts the scroll choreography, inertial scrolling and magnetics.
 *
 * Every one of these is decoration. None of them may ever cost the user
 * the page, so this wrapper enforces three rules:
 *
 *  1. Each module is isolated. One throwing cannot stop the others, and
 *     cannot escape into React - an uncaught error in a layout effect
 *     unmounts the tree, which is a blank screen.
 *  2. If the reveal module throws, `rv-on` comes straight back off, which
 *     removes every hidden state in one go.
 *  3. A watchdog runs regardless. If anything is still hidden after 1.8s,
 *     the whole system is switched off and the page renders plainly.
 */
function safely(label, fn) {
  try {
    return fn()
  } catch (err) {
    console.error(`[scroll-fx] ${label} failed, continuing without it:`, err)
    document.documentElement.classList.remove('rv-on')
    return () => {}
  }
}

export default function ScrollFx() {
  useIsomorphicLayoutEffect(() => {
    const teardown = [
      safely('reveals', initScrollFx),
      safely('smooth scroll', initSmoothScroll),
      safely('magnetics', initMagnetic),
    ]

    // Unconditional safety net. Whatever happened above, nothing stays
    // invisible — but "unrevealed" is only a fault for elements that are
    // ON SCREEN. Everything below the fold is legitimately waiting its
    // turn, and counting those switched the whole system off on a page
    // that was working perfectly.
    const watchdog = setTimeout(() => {
      const vh = window.innerHeight
      const stuck = [...document.querySelectorAll('[data-rv]:not(.is-in)')].filter((el) => {
        const r = el.getBoundingClientRect()
        return r.top < vh && r.bottom > 0
      })
      if (stuck.length) {
        console.warn(`[scroll-fx] ${stuck.length} on-screen element(s) never revealed - disabling reveal styling`)
        document.documentElement.classList.remove('rv-on')
      }
    }, 1800)

    return () => {
      clearTimeout(watchdog)
      teardown.forEach((fn) => typeof fn === 'function' && fn())
    }
  }, [])

  return null
}
