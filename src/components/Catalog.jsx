import { useCallback, useEffect, useRef, useState } from 'react'
import Tick from './Tick'
import StoneSwatch from './StoneSwatch'
import { STONES } from '../data/stones'

/**
 * Edge-bleeding stone catalogue strip.
 *
 * Native horizontal scroll with snap points - works with touch, trackpad,
 * shift+wheel and keyboard without a carousel library. The arrows are an
 * affordance on top of that, not the mechanism.
 */
export default function Catalog({
  heading = 'The surface decides the room.',
  intro = 'Porcelain and natural stone we install and template ourselves. Bring a cabinet door and we\u2019ll pull the closest matches in daylight.',
  ctaLabel = 'Browse the full catalogue',
  ctaHref = '#consult',
  stones = STONES,
}) {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const sync = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    sync()
    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync])

  const nudge = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.stone')
    const step = card ? card.offsetWidth + 14 : el.clientWidth * 0.8
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * step * 2, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <section className="sec cat" id="catalogue">
      <div className="wrap">
        <div className="cat-hd">
          <div>
            <Tick>Materials</Tick>
            <h2>{heading}</h2>
            <p>{intro}</p>
          </div>
          <a className="btn btn-ghost-ink" href={ctaHref}>
            {ctaLabel} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="cat-strip">
        <button
          className="cat-arw cat-arw--prev"
          onClick={() => nudge(-1)}
          disabled={atStart}
          aria-label="Previous materials"
        >
          ‹
        </button>

        <ul className="cat-track" ref={trackRef}>
          {stones.map((s) => (
            <li className="stone" key={s.key}>
              <div className="stone-img">
                <StoneSwatch stone={s} />
                {s.isNew && <span className="stone-badge">New</span>}
              </div>
              <div className="stone-meta">
                <strong>{s.name}</strong>
                <span>{s.finish}</span>
                <em>{s.use}</em>
              </div>
            </li>
          ))}
        </ul>

        <button
          className="cat-arw cat-arw--next"
          onClick={() => nudge(1)}
          disabled={atEnd}
          aria-label="More materials"
        >
          ›
        </button>
      </div>
    </section>
  )
}
