import { useEffect, useRef, useState } from 'react'
import SectionHead from './SectionHead'
import { SERVICE_CARDS } from '../data/content'
import { SERVICE_ICONS } from './ServiceIcons'

/**
 * Service cards.
 *
 * Resting state is the material photograph with inverted type. On hover a
 * colour wash covers the photo and the type returns to the light-card
 * palette. Touch has no hover, so a tap toggles the same wash. The
 * oversized index numeral sits behind the copy.
 */
function Card({ s, i, open, onToggle }) {
  const Icon = SERVICE_ICONS[s.key]
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    const fallback = setTimeout(() => setInView(true), 2800)
    return () => {
      clearTimeout(fallback)
      io.disconnect()
    }
  }, [])

  const Wrap = s.href ? 'a' : 'div'
  const bgVer = { laminate: '2', engineered: '2', refinishing: '2', sanding: '2', bathroom: '2' }[s.key]
  const bgQ = bgVer ? `?v=${bgVer}` : ''

  const tap = (e) => {
    if (window.matchMedia('(hover: hover)').matches) return
    if (s.href) return
    e.preventDefault()
    onToggle(s.key)
  }

  return (
    <article
      className={`svcx${inView ? ' is-in' : ''}${open ? ' is-on' : ''}`}
      ref={ref}
      style={{ '--d': `${(i % 4) * 80}ms` }}
      onClick={tap}
    >
      <picture className="svcx-bg" aria-hidden="true">
        <source type="image/webp" srcSet={`/img/services/bg/${s.key}.webp${bgQ}`} />
        <img src={`/img/services/bg/${s.key}.jpg${bgQ}`} alt="" loading="lazy" decoding="async" />
      </picture>

      <Wrap className="svcx-in" {...(s.href ? { href: s.href } : {})}>
        <span className="svcx-ico">
          <Icon />
        </span>
        <h3>{s.title}</h3>
        <span className="svcx-rule" aria-hidden="true" />
        <p>{s.body}</p>
        <span className="svcx-more">
          {s.href ? 'View details' : 'Get a quote'}
          <i aria-hidden="true" />
        </span>
      </Wrap>

      <span className="svcx-num" aria-hidden="true">
        {String(i + 1).padStart(2, '0')}
      </span>
    </article>
  )
}

export default function Services({
  watermark = 'Services',
  heading = 'Every Great Space Starts',
  accent = 'From the Ground Up',
  intro = 'From removing the old floor and preparing the subfloor to installation and finishing, our team handles the entire job. No handoffs, no subcontractor runaround-just one crew responsible for getting it done right.',
  items = SERVICE_CARDS,
  showHead = true,
}) {
  const [open, setOpen] = useState(null)

  return (
    <section className="sec svcx-sec" id="services">
      <div className="wrap">
        {showHead && (
          <SectionHead watermark={watermark} accent={accent}>
            {heading}
          </SectionHead>
        )}
        {intro && <p className="svcx-intro">{intro}</p>}

        <div className="svcx-grid">
          {items.map((s, i) => (
            <Card
              key={s.key}
              s={s}
              i={i}
              open={open === s.key}
              onToggle={(key) => setOpen((cur) => (cur === key ? null : key))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
