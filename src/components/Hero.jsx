import { useEffect, useRef, useState } from 'react'
import { MATERIALS, MATERIAL_ORDER } from '../data/materials'
import { paintFloor } from '../lib/paintFloor'

function Swatch({ materialKey }) {
  const ref = useRef(null)
  useEffect(() => {
    paintFloor(ref.current, materialKey, 0.34)
  }, [materialKey])
  return <span className="chip-sw" ref={ref} aria-hidden="true" />
}

/**
 * SIGNATURE ELEMENT.
 * The hero renders an actual floor in perspective and the swatch rail
 * swaps the material, updating the spec readout. This is the showroom
 * moment - it is how people genuinely choose flooring, and it gives
 * visitors a reason to stay on the page.
 */
export default function Hero({ location, headline, sub, primaryCta = 'Book a free in-home measure' }) {
  const [active, setActive] = useState('oak')
  const floorRef = useRef(null)

  useEffect(() => {
    const el = floorRef.current
    if (!el) return
    paintFloor(el, active, 1)
    let t
    const onResize = () => {
      clearTimeout(t)
      t = setTimeout(() => paintFloor(el, active, 1), 260)
    }
    window.addEventListener('resize', onResize)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', onResize)
    }
  }, [active])

  const spec = MATERIALS[active].spec

  return (
    <section className="hero" id="top">
      <div className="hero-top">
        <div>
          <h1>{headline}</h1>
          <p className="hero-sub">{sub}</p>
          <div className="hero-acts">
            <a className="btn btn-oak btn-lg" href="#consult">
              {primaryCta}
            </a>
            <a className="btn btn-ghost btn-lg" href={`tel:${location.phoneE164}`}>
              Call {location.phone}
            </a>
          </div>
        </div>

        <div className="hero-side">
          <dl className="spec">
            <dt>Material</dt>
            <dd>{spec.material}</dd>
            <dt>Format</dt>
            <dd>{spec.format}</dd>
            <dt>Finish</dt>
            <dd>{spec.finish}</dd>
            <dt>Best for</dt>
            <dd>{spec.best}</dd>
          </dl>
        </div>
      </div>

      <div className="stage" aria-hidden="true">
        <div className="floor" ref={floorRef} />
      </div>

      <div className="rail">
        <p className="rail-lbl">Tap a sample - see the floor</p>
        <div className="chips" role="group" aria-label="Flooring samples">
          {MATERIAL_ORDER.map((k) => (
            <button
              key={k}
              type="button"
              className="chip"
              aria-pressed={active === k}
              onClick={() => setActive(k)}
            >
              <Swatch materialKey={k} />
              <span className="chip-nm">
                {MATERIALS[k].label}
                <br />
                <i>{MATERIALS[k].sub}</i>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
