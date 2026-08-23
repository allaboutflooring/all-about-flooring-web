import { useRef, useState } from 'react'
import Tick from './Tick'
import SectionHead from './SectionHead'
import { Arrow } from './Icons'
import { ABOUT } from '../data/about'
import { useTexture } from '../lib/useTexture'

/**
 * About section.
 *
 * Structure follows the reference: ghosted watermark behind a centred
 * heading, offset-framed image on the left, tabbed copy plus proportion
 * bars on the right. Rendered in the site's own palette and type rather
 * than the reference's gold-on-charcoal, so it sits with everything else.
 *
 * Tabs are a real tablist - arrow keys move between them and the panel is
 * wired with aria-controls, because three tabs of copy hidden behind
 * mouse-only controls is content most people never reach.
 */
export default function About({ content = ABOUT, moreHref }) {
  const [active, setActive] = useState(content.tabs[0].key)
  const mediaRef = useTexture('oak', 0.72)
  const tabRefs = useRef([])

  const idx = content.tabs.findIndex((t) => t.key === active)
  const panel = content.tabs[idx]
  const photo = panel.img || content.img
  const photoAlt = panel.alt || content.alt || ''

  const onKeyDown = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next = (idx + (e.key === 'ArrowRight' ? 1 : -1) + content.tabs.length) % content.tabs.length
    setActive(content.tabs[next].key)
    tabRefs.current[next]?.focus()
  }

  return (
    <section className="sec sec-dark ab" id="about">
      <span className="ab-dots" aria-hidden="true" />

      <div className="wrap">
        <SectionHead watermark={content.watermark} accent={content.headlineAccent}>
          {content.headline}
        </SectionHead>

        <div className="ab-grid">
          <div className="ab-media">
            {photo ? (
              <picture>
                <source
                  type="image/webp"
                  srcSet={photo.replace(/\.(png|jpe?g)(\?.*)?$/i, '.webp$2')}
                />
                <img
                  className="ab-media-img"
                  src={photo}
                  alt={photoAlt}
                  width="800"
                  height="1000"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            ) : (
              <>
                <div className="ab-media-img" ref={mediaRef} aria-hidden="true" />
                <span className="ph-note">IMG 1000×1250</span>
              </>
            )}
          </div>

          <div className="ab-body">
            <Tick>{content.eyebrow}</Tick>

            <div className="ab-tabs" role="tablist" aria-label="About All About Flooring" onKeyDown={onKeyDown}>
              {content.tabs.map((t, i) => (
                <button
                  key={t.key}
                  ref={(el) => (tabRefs.current[i] = el)}
                  id={`abtab-${t.key}`}
                  role="tab"
                  type="button"
                  aria-selected={active === t.key}
                  aria-controls="abpanel"
                  tabIndex={active === t.key ? 0 : -1}
                  className="ab-tab"
                  onClick={() => setActive(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="ab-panel" id="abpanel" role="tabpanel" aria-labelledby={`abtab-${active}`} tabIndex={0}>
              {panel.heading && <h3 className="ab-owner">{panel.heading}</h3>}
              {panel.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <ul className="ab-points">
              {content.points.map((t) => (
                <li key={t}>
                  <svg viewBox="0 0 20 20" width="19" height="19" aria-hidden="true">
                    <path d="M4 10.6l4 4L16.5 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>

            {moreHref && (
              <a className="ab-more" href={moreHref}>
                Read the full story <Arrow />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
