import { useEffect, useRef, useState } from 'react'

/**
 * Laminate sample fan with a 3D tilt.
 *
 * Idle: a slow orbit so the stack reads as an object in space, not a
 * flat PNG. Pointer: the rotation eases toward the cursor with a light
 * sweep across the grain. Leave: it springs back into the idle orbit.
 *
 * Tilt lives on `.fan-card`. The float keyframes stay on an inner node
 * so the two transforms never fight.
 */
export default function SampleFan({ className = '' }) {
  const sceneRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const el = sceneRef.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    setReady(true)
    if (reduce || !fine) return

    let raf = 0
    let hovering = false
    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0
    const origin = performance.now()

    const onMove = (e) => {
      hovering = true
      const r = el.getBoundingClientRect()
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2
    }
    const onLeave = () => {
      hovering = false
    }

    const tick = (now) => {
      const t = (now - origin) / 1000
      const idleX = Math.sin(t * 0.55) * 0.42
      const idleY = Math.cos(t * 0.38) * 0.22
      const ax = hovering ? tx : idleX
      const ay = hovering ? ty : idleY
      const ease = hovering ? 0.1 : 0.045
      cx += (ax - cx) * ease
      cy += (ay - cy) * ease

      el.style.setProperty('--rx', `${(-cy * 16).toFixed(2)}deg`)
      el.style.setProperty('--ry', `${(cx * 22).toFixed(2)}deg`)
      el.style.setProperty('--rz', `${(cx * 4.5).toFixed(2)}deg`)
      el.style.setProperty('--tz', `${(12 + Math.abs(cx) * 22).toFixed(1)}px`)
      el.style.setProperty('--sx', `${(cx * 18).toFixed(1)}px`)
      el.style.setProperty('--sy', `${(cy * 12).toFixed(1)}px`)
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div className={`fan-scene${ready ? ' is-ready' : ''} ${className}`} ref={sceneRef}>
      <div className="fan-shadow" aria-hidden="true" />
      <div className="fan-card">
        <div className="fan-float">
          <picture>
            <source
              type="image/webp"
              srcSet="/img/sample-fan-900.webp 900w, /img/sample-fan-1400.webp 1400w"
              sizes="(max-width: 900px) 70vw, 28vw"
            />
            <img
              className="fan-img"
              src="/img/sample-fan-900.png"
              srcSet="/img/sample-fan-900.png 900w, /img/sample-fan-1400.png 1400w"
              sizes="(max-width: 900px) 70vw, 28vw"
              width="1536"
              height="1024"
              alt="Laminate flooring samples fanned out, showing oak, walnut, whitewash and grey finishes"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </div>
  )
}
