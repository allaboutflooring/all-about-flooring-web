import { useEffect, useRef, useState } from 'react'
import { MATERIALS, MATERIAL_ORDER } from '../data/materials'
import { paintFloor } from '../lib/paintFloor'

function Swatch({ materialKey }) {
  const ref = useRef(null)
  useEffect(() => {
    paintFloor(ref.current, materialKey, 0.4)
  }, [materialKey])
  return <span className="chip-sw" ref={ref} aria-hidden="true" />
}

/**
 * Materials, laid in perspective, with the spec sheet alongside.
 * The showroom moment — how people actually choose a floor — and the
 * reason to stay on the page after the hero.
 */
export default function Collections() {
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
    <section className="sec" id="materials">
      <div className="wrap">
        <div className="sec-hd">
          <p className="eyebrow">Materials</p>
          <h2>See it laid before you commit to it.</h2>
          <p>
            Four of the formats we fit most. Choose one and the room below changes — the same way
            we would lay samples out on your subfloor before a single board is cut.
          </p>
        </div>

        <div className="coll">
          <div className="coll-stage">
            <div className="coll-stage-in">
              <div className="coll-floor" ref={floorRef} aria-hidden="true" />
            </div>
            <div className="coll-vig" />
          </div>

          <div className="coll-side">
            <dl className="coll-spec">
              <div>
                <dt>Material</dt>
                <dd>{spec.material}</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>{spec.format}</dd>
              </div>
              <div>
                <dt>Finish</dt>
                <dd>{spec.finish}</dd>
              </div>
              <div>
                <dt>Best for</dt>
                <dd>{spec.best}</dd>
              </div>
            </dl>

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
                    <i>{MATERIALS[k].sub}</i>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
