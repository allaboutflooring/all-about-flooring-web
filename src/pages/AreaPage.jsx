import MainLayout from '../layouts/MainLayout'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Tick from '../components/Tick'
import Services from '../components/Services'
import Cta from '../components/Cta'
import ServiceArea from '../components/ServiceArea'
import LocationMap from '../components/LocationMap'
import { AREA_PAGES, MAIN, MAIN_AREA_INTRO } from '../data/locations'
import { CTA_LATE } from '../data/cta'

function Check() {
  return (
    <svg viewBox="0 0 20 20" width="19" height="19" aria-hidden="true">
      <path
        d="M4 10.6l4 4L16.5 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const AREA_INTRO = MAIN_AREA_INTRO

/**
 * One town. Banner, what we install there, the service cards, a measure
 * CTA, the rest of the coverage list, then the map.
 */
export default function AreaPage({ slug }) {
  const area = AREA_PAGES[slug]
  if (!area) return null

  const workBase = `/img/work/${area.workKey}`

  return (
    <MainLayout>
      <Seo
        path={area.path}
        location={MAIN}
        title={`Expert Flooring Company in ${area.city} | All About Flooring`}
        description={area.description}
      />

      <PageHero
        title={area.heroTitle}
        long
        crumbs={[
          { href: '/', label: 'Home' },
          { href: '/locations', label: 'Locations' },
          { label: area.crumb },
        ]}
      />

      <section className="sec sec-dark abpg-block">
        <div className="wrap abpg-grid is-compact">
          <div className="ab-media is-scene">
            <picture>
              {area.webp !== false && (
                <source
                  type="image/webp"
                  srcSet={`${workBase}-800.webp 800w, ${workBase}-1200.webp 1200w`}
                  sizes="(max-width: 900px) 70vw, 360px"
                />
              )}
              <img
                className="ab-media-img"
                src={`${workBase}-1200.jpg`}
                srcSet={`${workBase}-800.jpg 800w, ${workBase}-1200.jpg 1200w`}
                sizes="(max-width: 900px) 70vw, 360px"
                alt={area.alt}
                width="1200"
                height="1800"
                loading="eager"
                decoding="async"
              />
            </picture>
          </div>
          <div className="abpg-copy">
            <Tick>{area.tick}</Tick>
            <h2>{area.heading}</h2>
            {area.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="sec abpg-block">
        <div className="wrap abpg-approach">
          <div className="abpg-copy">
            <Tick>{area.pointsTick}</Tick>
            <h2>{area.pointsHeading}</h2>
            {area.pointsBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="ab-points abpg-points">
            {area.points.map((t) => (
              <li key={t}>
                <Check />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Services heading="Featured" accent="Services" intro={null} />

      <Cta content={CTA_LATE} location={MAIN} />

      <ServiceArea primary={MAIN} intro={AREA_INTRO} />

      <LocationMap />
    </MainLayout>
  )
}
