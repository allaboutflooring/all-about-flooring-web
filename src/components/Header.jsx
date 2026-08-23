import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Logo from './Logo'

const Caret = () => (
  <svg className="caret" width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
    <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.1" />
  </svg>
)

/**
 * Transparent over the hero, solid once scrolled.
 * Items with `children` open a dropdown on desktop and an accordion on
 * mobile - used for Services and Locations.
 */
export default function Header({ location, variant = 'main', nav = [], homeHref = '/' }) {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const [menu, setMenu] = useState(null)
  const [acc, setAcc] = useState(null)
  const barRef = useRef(null)
  const closeTimer = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    let ticking = false
    const read = () => {
      ticking = false
      setSolid(window.scrollY > 8)
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(read)
    }
    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('nav-open', open)
    return () => document.documentElement.classList.remove('nav-open')
  }, [open])

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

  const hoverOpen = (key) => {
    clearTimeout(closeTimer.current)
    setMenu(key)
  }
  const hoverClose = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMenu(null), 140)
  }

  const cls = [
    'hdr',
    variant === 'second' ? 'hdr--second' : '',
    solid || open ? 'is-solid' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const isOn = (href, hasKids = false) =>
    href === pathname ||
    (hasKids && href !== '/' && pathname.startsWith(`${href}/`))
  const onChild = (href) => href === pathname
  const onClass = (on) => (on ? 'is-on' : undefined)

  return (
    <header className={cls} ref={barRef}>
      <div className="hdr-in">
        <Logo to={homeHref} />

        <nav className="nav" aria-label="Main">
          {nav.map((n) => {
            const kids = n.children
            const on = isOn(n.href, Boolean(kids?.length))
            if (!kids?.length) {
              return (
                <a
                  key={n.href}
                  href={n.href}
                  className={onClass(on)}
                  aria-current={on ? 'page' : undefined}
                >
                  {n.label}
                </a>
              )
            }
            const openDrop = menu === n.href
            const menuClass = kids.length > 8 ? 'nav-drop is-wide' : 'nav-drop'
            return (
              <div
                className="nav-g"
                key={n.href}
                onMouseEnter={() => hoverOpen(n.href)}
                onMouseLeave={hoverClose}
              >
                <a
                  href={n.href}
                  className={on ? 'nav-parent is-on' : 'nav-parent'}
                  aria-expanded={openDrop}
                  aria-haspopup="true"
                  aria-current={on ? 'page' : undefined}
                >
                  {n.label} <Caret />
                </a>
                {openDrop && (
                  <div className={menuClass}>
                    {kids.map((item) => {
                      const marked = onChild(item.href)
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          className={onClass(marked)}
                          onClick={() => setMenu(null)}
                        >
                          {item.label}
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="hdr-cta">
          <a className="btn btn-primary" href={`tel:${location.phoneE164}`}>
            Call now
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

      <div className={`mobnav${open ? ' open' : ''}`}>
        {nav.map((n) => {
          const kids = n.children
          const on = isOn(n.href, Boolean(kids?.length))
          if (!kids?.length) {
            return (
              <a
                key={n.href}
                href={n.href}
                className={onClass(on)}
                aria-current={on ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            )
          }
          const isOpen = acc === n.href
          return (
            <div key={n.href}>
              <button
                className={`mob-acc${on ? ' is-on' : ''}`}
                aria-expanded={isOpen}
                onClick={() => setAcc(isOpen ? null : n.href)}
              >
                {n.label} <Caret />
              </button>
              {isOpen && (
                <div className="mob-sub">
                  {kids.map((c) => (
                    <a key={c.href} href={c.href} onClick={() => setOpen(false)}>
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )
        })}
        <a className="last" href={`tel:${location.phoneE164}`} onClick={() => setOpen(false)}>
          Call now →
        </a>
      </div>
    </header>
  )
}
