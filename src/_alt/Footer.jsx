import { Link } from 'react-router-dom'
import { SITE } from '../data/site'
import { SERVICES } from '../data/content'

export default function Footer({ location, variant = 'main', nav = [] }) {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">
          <div>
            {variant === 'second' ? (
              <a className="ftr-wm" href="#top">
                <b>{SITE.brand}</b>
                <small>{location.city}</small>
              </a>
            ) : (
              <Link className="ftr-wm" to="/">
                <b>{SITE.brand}</b>
                <small>Flooring &amp; Renovation</small>
              </Link>
            )}
            <p className="ftr-blurb">{SITE.tagline}</p>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{variant === 'second' ? 'This location' : 'Explore'}</h4>
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div data-note="NAP must match header + GBP">
            <h4>{location.isPrimary ? 'Main location' : `${location.city} location`}</h4>
            <address className="ftr-nap">
              {location.street}
              <br />
              {location.city}, {location.region} {location.postal}
              <br />
              <a href={`tel:${location.phoneE164}`}>{location.phone}</a>
              <br />
              <a href={`mailto:${location.email}`}>{location.email}</a>
              <br />
              {location.hours[0].d} {location.hours[0].h}
            </address>
          </div>
        </div>

        <div className="ftr-bar">
          <span>
            © {new Date().getFullYear()} {SITE.brand} · {location.license}
          </span>
          <span>Privacy · Terms · Sitemap</span>
        </div>
      </div>
    </footer>
  )
}
