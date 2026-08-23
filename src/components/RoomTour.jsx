import { useEffect, useRef, useState } from 'react'
import { ROOMS } from '../data/rooms'
import { SERVICE_ICONS } from './ServiceIcons'
import { Arrow } from './Icons'

const p = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const MARK_ICONS = {
  grid: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <g {...p}>
        <rect x="3" y="3" width="8" height="8" />
        <rect x="13" y="3" width="8" height="8" />
        <rect x="3" y="13" width="8" height="8" />
        <rect x="13" y="13" width="8" height="8" />
      </g>
    </svg>
  ),
  tiles: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <g {...p}>
        <rect x="3" y="4" width="7" height="7" />
        <rect x="12" y="4" width="9" height="7" />
        <rect x="3" y="13" width="9" height="7" />
        <rect x="14" y="13" width="7" height="7" />
      </g>
    </svg>
  ),
  house: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <g {...p}>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M6 10.5V20h12v-9.5" />
      </g>
    </svg>
  ),
  drop: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <g {...p}>
        <path d="M12 3s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11z" />
      </g>
    </svg>
  ),
}

function MarkIcon({ name }) {
  const Custom = MARK_ICONS[name]
  if (Custom) return <Custom />
  const Svc = SERVICE_ICONS[name]
  return Svc ? <Svc /> : null
}

function Marker({ m, show }) {
  return (
    <article
      className={`rmark rmark-${m.tone || 'light'} rmark-pin-${m.pin || 'right'}${show ? ' is-on' : ''}`}
      style={{ '--dx': m.x, '--dy': m.y, '--mx': m.xM || m.x, '--my': m.yM || m.y }}
    >
      <span className="rmark-node" aria-hidden="true">
        <MarkIcon name={m.icon} />
      </span>
      <h3>{m.title}</h3>
      <p className="rmark-b">{m.body}</p>
    </article>
  )
}

function RoomPhoto({ r, eager }) {
  if (r.src) {
    return (
      <picture>
        <source type="image/webp" srcSet={`${r.src}.webp?v=2`} />
        <img
          src={`${r.src}.jpg?v=2`}
          alt={r.alt}
          width={r.w || 1024}
          height={r.h || 576}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </picture>
    )
  }
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`/img/work/${r.img}-800.webp 800w, /img/work/${r.img}-1200.webp 1200w`}
        sizes="100vw"
      />
      <img
        src={`/img/work/${r.img}-1200.jpg`}
        srcSet={`/img/work/${r.img}-800.jpg 800w, /img/work/${r.img}-1200.jpg 1200w`}
        sizes="100vw"
        alt={r.alt}
        width="1200"
        height="1600"
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  )
}

/**
 * Sticky interior walkthrough.
 *
 * The track is several viewports tall; the stage pins and a scroll
 * listener walks the camera through each room. Bathroom uses the
 * supplied interior photo; kitchen and living use project shots.
 */
export default function RoomTour() {
  const trackRef = useRef(null)
  const roomRefs = useRef([])
  const [active, setActive] = useState(0)
  const [plain, setPlain] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setPlain(reduce.matches)
    sync()
    reduce.addEventListener('change', sync)
    return () => reduce.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const nodes = roomRefs.current.filter(Boolean)
    if (plain) {
      nodes.forEach((el) => {
        el.style.opacity = ''
        el.style.transform = ''
        el.style.zIndex = ''
        el.style.pointerEvents = ''
        el.classList.add('is-on')
      })
      return
    }

    const track = trackRef.current
    if (!track || !nodes.length) return

    let raf = 0
    const paint = () => {
      raf = 0
      const range = track.offsetHeight - window.innerHeight
      const scrolled = Math.min(range, Math.max(0, -track.getBoundingClientRect().top))
      const p = range > 0 ? (scrolled / range) * (nodes.length - 1) : 0

      nodes.forEach((el, i) => {
        const off = p - i
        const abs = Math.abs(off)
        const tz = off < 0 ? off * 240 : off * 140
        const sc = off < 0 ? 1 + off * 0.1 : 1 + off * 0.07
        const ken = abs < 1 ? 1 + (1 - abs) * 0.04 : 1
        el.style.opacity = String(Math.max(0, 1 - abs * 1.08))
        el.style.transform = `translate3d(${off * -6}%, 0, ${tz}px) rotateY(${off * -8}deg) scale(${sc * ken})`
        el.style.zIndex = String(Math.round((1 - abs) * 20))
        el.style.pointerEvents = abs < 0.45 ? 'auto' : 'none'
        el.classList.toggle('is-on', abs < 0.55)
      })

      const next = Math.round(p)
      setActive((cur) => (cur === next ? cur : next))
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(paint)
    }

    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [plain])

  const n = ROOMS.length

  return (
    <section className={`rooms${plain ? ' is-plain' : ''}`} id="rooms">
      <div className="rooms-track" ref={trackRef} style={{ '--rooms-n': n }}>
        {ROOMS.map((r, i) => (
          <span
            key={r.key}
            id={`room-${r.key}`}
            className="rooms-pin"
            style={{
              top: n < 2 ? 0 : `calc(${i} * (100% - 100svh) / ${n - 1})`,
            }}
            aria-hidden="true"
          />
        ))}

        <div className="rooms-sticky">
          <div className="rooms-head">
            <p className="eyebrow">Inside the home</p>
            <h2>
              A smoother path
              <br />
              to your dream home
            </h2>
            <p className="rooms-lead">
              Scroll through a bathroom, a kitchen and a living space. Each room
              is marked with the finish we install there.
            </p>
          </div>

          <nav className="rooms-nav" aria-label="Rooms in the walkthrough">
            {ROOMS.map((r, i) => (
              <a
                key={r.key}
                href={`#room-${r.key}`}
                className={active === i ? 'is-on' : ''}
                aria-current={active === i ? 'true' : undefined}
              >
                <span>{String(i + 1).padStart(2, '0')}</span>
                {r.name}
              </a>
            ))}
          </nav>

          <div className="rooms-stage" aria-live="polite">
            {ROOMS.map((r, i) => (
              <figure
                key={r.key}
                className={`room${i === 0 ? ' is-on' : ''}${r.clean ? ' is-clean' : ''}`}
                style={{
                  '--room-pos': r.position || 'center center',
                  '--room-pos-m': r.positionMobile || r.position || 'center center',
                }}
                ref={(el) => {
                  roomRefs.current[i] = el
                }}
                aria-hidden={active !== i}
              >
                <RoomPhoto r={r} eager={i === 0} />
                <figcaption className="room-name">{r.name}</figcaption>
                <div className="room-marks">
                  {r.markers.map((m) => (
                    <Marker key={m.n} m={m} show={active === i} />
                  ))}
                </div>
              </figure>
            ))}
          </div>

          <a className="rooms-cta" href="#consult">
            Book now
            <i aria-hidden="true">
              <Arrow />
            </i>
          </a>
        </div>
      </div>
    </section>
  )
}
