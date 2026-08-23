import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../data/site'
import { SERVICES } from '../data/content'
import { MATERIALS, MATERIAL_ORDER } from '../data/materials'
import { Arrow } from './Icons'

const Caret = () => (
  <svg className="caret" width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
    <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.1" />
  </svg>
)

const Mark = () => (
  <svg className="mark" viewBox="0 0 34 34" aria-hidden="true">
    <circle cx="17" cy="17" r="16" fill="none" stroke="currentColor" strokeWidth="1" />
    <g stroke="currentColor" strokeWidth="1" opacity="0.85">
      <path d="M6 21.5 21.5 6M10.5 26 26 10.5M15 30 30 15" />
    </g>
  </svg>
)

/**
 * Dropdown groups. Only sections that genuinely have sub-items get a caret —
 * a caret on a link that opens nothing is a promise the menu doesn't keep.
 */
const GROUPS = {
  services: {
    label: 'Services',
    href: '#services',
    items: SERVICES.map((s) => ({ label: s.title, href: '#services', note: s.tags[0] })),
  },
  materials: {
    label: 'Materials',
    href: '#materials',
    items: MATERIAL_ORDER.map((k) => ({
      label: MATERIALS[k].label,
      href: '#materials',
      note: MATERIALS[k].sub,
    })),
  },
}

export default function Header({ location, variant = 'main', nav = [] }) {
  const [open, setOpen] = useState(false) // mobile panel
  const [menu, setMenu] = useState(null) // desktop dropdown key
  const [acc, setAcc] = useState(null) // mobile accordion key
  const barRef = useRef(null)
  const closeTimer = useRef(null)

  // Close on Escape and on any click outside the header.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenu(null)
        setOpen(false)
      }
    }
    const onDown = (e) => {
      if (barRef.current && !barRef.current.contains(e.target)) setMenu(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDown)
    }
  }, [])

  // Small delay on close so the pointer can travel from trigger to panel.
  const hoverOpen = (key) => {
    clearTimeout(closeTimer.current)
    setMenu(key)
  }
  const hoverClose = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMenu(null), 140)
  }

  const home = variant === 'second' ? '#top' : '/'
  const Wordmark = (
    <>
      <Mark />
      <span className="wm-txt">
        <b>{SITE.brand}</b>
        <small>{variant === 'second' ? location.city : 'Flooring & Renovation'}</small>
      </span>
    </>
  )

  return (
    <header className="hdr" ref={barRef} onMouseLeave={hoverClose}>
      <div className="hdr-accent" aria-hidden="true" />

      <div className="hdr-in">
        {variant === 'second' ? (
          <a className="wordmark" href={home}>{Wordmark}</a>
        ) : (
          <Link className="wordmark" to={home}>{Wordmark}</Link>
        )}

        <nav className="nav" aria-label="Main">
          {nav.map((n) => {
            const g = GROUPS[n.group]
            if (!g) {
              return (
                <a className="nav-i" key={n.href} href={n.href}>
                  {n.label}
                </a>
              )
            }
            const isOpen = menu === n.group
            return (
              <div
                className="nav-g"
                key={n.group}
                onMouseEnter={() => hoverOpen(n.group)}
                onMouseLeave={hoverClose}
              >
                <button
                  className="nav-i nav-btn"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setMenu(isOpen ? null : n.group)}
                >
                  {n.label} <Caret />
                </button>
              </div>
            )
          })}
        </nav>

        <div className="util">
          <a className="util-tel" href={`tel:${location.phoneE164}`} data-note="NAP · phone">
            {location.phone}
          </a>
          <a className="util-cta" href="#quote">
            <Arrow /> Book a free measure
          </a>
          <button
            className="burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i /><i /><i />
          </button>
        </div>
      </div>

      {/* Full-width dropdown panel, one per group. */}
      {Object.entries(GROUPS).map(([key, g]) => (
        <div
          className={`mega${menu === key ? ' open' : ''}`}
          key={key}
          onMouseEnter={() => hoverOpen(key)}
          onMouseLeave={hoverClose}
          hidden={menu !== key}
        >
          <div className="mega-in">
            <div className="mega-lead">
              <p className="eyebrow">{g.label}</p>
              <a className="tlink" href={g.href} onClick={() => setMenu(null)}>
                See all <Arrow />
              </a>
            </div>
            <div className="mega-cols">
              {g.items.map((it) => (
                <a className="mega-i" key={it.label} href={it.href} onClick={() => setMenu(null)}>
                  <b>{it.label}</b>
                  <span>{it.note}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Mobile panel — groups become accordions. */}
      <div className={`mobnav${open ? ' open' : ''}`}>
        {nav.map((n) => {
          const g = GROUPS[n.group]
          if (!g) {
            return (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            )
          }
          const isOpen = acc === n.group
          return (
            <div key={n.group}>
              <button
                className="mob-acc"
                aria-expanded={isOpen}
                onClick={() => setAcc(isOpen ? null : n.group)}
              >
                {n.label} <Caret />
              </button>
              {isOpen && (
                <div className="mob-sub">
                  {g.items.map((it) => (
                    <a key={it.label} href={it.href} onClick={() => setOpen(false)}>
                      {it.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )
        })}
        <a className="last" href="#quote" onClick={() => setOpen(false)}>
          Book a free measure
        </a>
        <a className="last" href={`tel:${location.phoneE164}`}>
          {location.phone}
        </a>
      </div>
    </header>
  )
}
