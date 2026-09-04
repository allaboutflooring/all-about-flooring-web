import { useTexture } from '../lib/useTexture'

/**
 * Call-to-action band, three variants.
 *
 *  band  - oak, full width, high contrast. Interrupts.
 *  split - dark, textured panel beside the offer. Explains before asking.
 *  quiet - light, centred, minimal. Closes.
 *
 * Every variant surfaces the phone number as well as the form link. A
 * meaningful share of contractor leads would rather call than type, and
 * the location record is the only place that number comes from.
 */
export default function Cta({ content, location }) {
  const { variant = 'band' } = content
  const texRef = useTexture(content.tex || 'walnut', 0.5)
  // Semantic heading level, driven by the content object so specific CTAs
  // (e.g. the mid/late bands on service and location pages) can render as
  // <h3> while keeping identical styling. Others stay <h2>.
  const Heading = content.headingLevel === 3 ? 'h3' : 'h2'

  if (variant === 'banner') {
    return (
      <section className="ctaN">
        <div className="ctaN-box">
          <picture className="ctaN-bg" aria-hidden="true">
            <source
              type="image/webp"
              srcSet={`${content.image}-1000.webp 1000w, ${content.image}-1600.webp 1600w`}
              sizes="(max-width: 1680px) calc(100vw - 40px), 1680px"
            />
            <img
              src={`${content.image}-1600.jpg`}
              srcSet={`${content.image}-1000.jpg 1000w, ${content.image}-1600.jpg 1600w`}
              sizes="(max-width: 1680px) calc(100vw - 40px), 1680px"
              alt={content.alt || ''}
              loading="lazy"
              decoding="async"
            />
          </picture>

          <div className="ctaN-in">
            <Heading>
              {content.headline} <em>{content.accent}</em>
            </Heading>
            {content.body && <p>{content.body}</p>}
            <a
              className="ctaN-btn"
              href={content.primary.phone ? `tel:${location.phoneE164}` : content.primary.href}
            >
              {content.primary.label}
            </a>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'split') {
    return (
      <section className="sec ctaS">
        <div className="wrap">
          <div className="ctaS-grid">
            <div className="ctaS-media">
              <div className="ctaS-tex" ref={texRef} aria-hidden="true" />
            </div>
            <div className="ctaS-body">
              {content.eyebrow && <p className="ctaS-eyebrow">{content.eyebrow}</p>}
              <Heading>{content.headline}</Heading>
              <p className="ctaS-lead">{content.body}</p>
              {content.points && (
                <ul className="ctaS-pts">
                  {content.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
              <div className="ctaS-acts">
                <a className="btn btn-oak btn-lg" href={content.primary.href}>
                  {content.primary.label}
                </a>
                <a className="btn btn-ghost btn-lg" href={`tel:${location.phoneE164}`}>
                  Call {location.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'quiet') {
    return (
      <section className="ctaQ">
        <div className="wrap ctaQ-in">
          <div>
            <Heading>{content.headline}</Heading>
            <p>{content.body}</p>
          </div>
          <div className="ctaQ-acts">
            <a className="btn btn-primary btn-lg" href={content.primary.href}>
              {content.primary.label}
            </a>
            <a className="ctaQ-tel" href={`tel:${location.phoneE164}`}>
              or call {location.phone}
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="ctaB">
      <div className="wrap ctaB-in">
        <div>
          <Heading>{content.headline}</Heading>
          {content.body && <p>{content.body}</p>}
        </div>
        <div className="ctaB-acts">
          <a className="btn btn-ink btn-lg" href={content.primary.href}>
            {content.primary.label}
          </a>
          <a className="ctaB-tel" href={`tel:${location.phoneE164}`}>
            {location.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
