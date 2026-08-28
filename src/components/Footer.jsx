import Logo from './Logo'
import { SITE } from '../data/site'
import { NAV_SERVICES } from '../data/services'

export default function Footer({
  location,
  variant = 'main',
  nav = [],
  homeHref = '/',
  serviceLinks,
  areaLinks,
}) {
  const services = serviceLinks || NAV_SERVICES
  const { facebook, instagram } = location.socials || SITE.socials
  const cityLine = [location.city, location.region].filter(Boolean).join(', ')
  const second = variant === 'second'
  const cls = ['ftr', second ? 'ftr--second' : ''].filter(Boolean).join(' ')

  return (
    <footer className={cls}>
      <div className="wrap">
        <div className="ftr-grid">
          <div>
            <Logo to={homeHref} sub="FLOORING CONTRACTOR" />
            <p className="ftr-blurb">{SITE.tagline}</p>
            {facebook && instagram && (
              <p className="ftr-socials">
                <a href={facebook} target="_blank" rel="noreferrer">Facebook</a>
                {' · '}
                <a href={instagram} target="_blank" rel="noreferrer">Instagram</a>
              </p>
            )}
          </div>

          <div>
            <p className="ftr-h">Services</p>
            <ul>
              {services.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="ftr-h">{second ? 'Locations' : 'Company'}</p>
            <ul>
              {(second && areaLinks ? areaLinks : nav).map((n) => (
                <li key={n.href}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="ftr-h">{location.isPrimary ? 'Main location' : `${location.city} location`}</p>
            <address className="ftr-nap">
              {location.street ? (
                <>
                  {location.street}
                  <br />
                </>
              ) : null}
              {cityLine}
              {location.postal ? ` ${location.postal}` : ''}
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
          <span>© {new Date().getFullYear()} {SITE.brand.toUpperCase()}</span>
          <span>
            <a href="/privacy-policy">Privacy</a>
            {' · '}
            <a href="/terms-and-conditions">Terms</a>
            {' · '}
            <a href="/cookies-policy">Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
