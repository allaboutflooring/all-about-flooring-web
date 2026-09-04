import { Link } from 'react-router-dom'
import SectionHead from './SectionHead'
import { areaPageHref } from '../data/locations'

function AreaName({ name, hrefFor }) {
  const href = hrefFor(name)
  return href ? <Link to={href}>{name}</Link> : name
}

/**
 * Coverage list for one listing only.
 *
 * Never mix two GBP addresses on the same page - each profile gets its
 * own towns, phone, and linked area pages via `areaHref`.
 */
export default function ServiceArea({
  primary,
  areaHref = areaPageHref,
  watermark = 'Locations',
  heading = 'Where we',
  accent = 'work',
  intro,
}) {
  return (
    <section className="sec sec-dark svca" id="service-area">
      <span className="svca-dots" aria-hidden="true" />

      <div className="wrap">
        <SectionHead watermark={watermark} accent={accent} as="h3">
          {heading}
        </SectionHead>

        {intro && <p className="svca-intro">{intro}</p>}

        <ul className="svca-areas">
          {primary.serviceAreas.map((a) => (
            <li key={a}>
              <span aria-hidden="true" />
              <AreaName name={a} hrefFor={areaHref} />
            </li>
          ))}
        </ul>

        <p className="svca-note">
          Just outside these? Call {primary.phone} and ask - we often can.
        </p>
      </div>
    </section>
  )
}
