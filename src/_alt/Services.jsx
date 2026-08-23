import { useState } from 'react'
import { SERVICES } from '../data/content'
import { useTexture } from '../lib/useTexture'
import { Arrow } from './Icons'

const Caret = () => (
  <svg className="acc-caret" width="13" height="8" viewBox="0 0 13 8" fill="none" aria-hidden="true">
    <path d="M1 1l5.5 5.5L12 1" stroke="currentColor" strokeWidth="1.1" />
  </svg>
)

/** Fallback panel for a service with no photo yet. */
function TextureFallback({ tex }) {
  const ref = useTexture(tex, 0.9)
  return <div className="svc-tex" ref={ref} aria-hidden="true" />
}

/**
 * Split section: accordion on one side, full-bleed image on the other.
 * The image tracks the open row, so opening a service shows that service —
 * the panel is not decoration sitting next to unrelated text.
 */
export default function Services({
  heading = 'Choose the floor, then the room around it.',
  intro = 'Four trades run by the same crew. Open any one to see what it covers and what is included in the price.',
}) {
  const [open, setOpen] = useState(SERVICES[0].slug)

  return (
    <section className="sec-split" id="services">
      <div className="svc-panel">
        <div className="svc-panel-in">
          <p className="eyebrow">What we do</p>
          <h2>{heading}</h2>
          <p className="svc-intro">{intro}</p>

          <div className="acc">
            {SERVICES.map((s) => {
              const isOpen = open === s.slug
              return (
                <div className={`acc-row${isOpen ? ' open' : ''}`} key={s.slug}>
                  <h3>
                    <button
                      className="acc-head"
                      aria-expanded={isOpen}
                      aria-controls={`acc-${s.slug}`}
                      onClick={() => setOpen(isOpen ? null : s.slug)}
                    >
                      <span>{s.title}</span>
                      <Caret />
                    </button>
                  </h3>
                  <div className="acc-body" id={`acc-${s.slug}`} hidden={!isOpen}>
                    <div className="acc-body-in">
                      <p>{s.body}</p>
                      <ul>
                        {s.tags.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                      <a className="tlink" href="#quote">
                        Get a price for this <Arrow />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="svc-media" data-note="Service photos — client to supply">
        {SERVICES.map((s, i) =>
          s.img ? (
            <img
              key={s.slug}
              className={`svc-img${open === s.slug ? ' on' : ''}`}
              src={s.img}
              alt={s.alt || s.title}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ) : (
            <div key={s.slug} className={`svc-img${open === s.slug ? ' on' : ''}`}>
              <TextureFallback tex={s.tex} />
            </div>
          )
        )}
      </div>
    </section>
  )
}
