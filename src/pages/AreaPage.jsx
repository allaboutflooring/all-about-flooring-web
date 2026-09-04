import MainLayout from '../layouts/MainLayout'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Tick from '../components/Tick'
import Services from '../components/Services'
import { WhyChoose, ProcessSteps, ContentSection, SeoFaqs } from '../components/ServiceSeoContent'
import Reviews from '../components/Reviews'
import Cta from '../components/Cta'
import ServiceArea from '../components/ServiceArea'
import LocationMap from '../components/LocationMap'
import { AREA_PAGES, MAIN, MAIN_AREA_INTRO } from '../data/locations'
import { CTA_MID, CTA_LATE } from '../data/cta'

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

  const hero = (
    <PageHero
      title={area.heroTitle}
      long
      crumbs={[
        { href: '/', label: 'Home' },
        { href: '/locations', label: 'Locations' },
        { label: area.crumb },
      ]}
    />
  )

  // Optimised (seo) location pages use a white intro so it alternates into the
  // bone Why-Choose section; other towns keep the original bone intro.
  const introClass = area.seo ? 'sec abpg-block' : 'sec sec-dark abpg-block'

  const introBlock = (
    <section className={introClass}>
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
  )

  const featured = <Services heading="Featured" accent="Services" intro={null} />

  // Optimised location pages (those with an `seo` block, e.g. Odessa) reuse
  // the shared service-page content flow + homepage testimonials, while
  // keeping the location hero, Featured Services, Service Areas, and map.
  // Other towns keep the original generic layout untouched.
  const s = area.seo
  const body = s ? (
    <div className="svcseo-page">
      {hero}
      {introBlock}
      <WhyChoose data={s.whyChoose} />
      {featured}
      <Reviews location={MAIN} />
      <ContentSection section={s.sections[0]} />
      <Cta content={CTA_LATE} location={MAIN} />
      <ContentSection section={s.sections[1]} wall />
      <ProcessSteps data={s.process} />
      <ServiceArea primary={MAIN} intro={AREA_INTRO} />
      <ContentSection section={s.sections[2]} />
      <Cta content={CTA_MID} location={MAIN} />
      <ContentSection section={s.sections[3]} wall />
      <SeoFaqs items={s.faqs} />
      <LocationMap />
    </div>
  ) : (
    <>
      {hero}
      {introBlock}

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

      {featured}

      <Cta content={CTA_LATE} location={MAIN} />

      <ServiceArea primary={MAIN} intro={AREA_INTRO} />

      <LocationMap />
    </>
  )

  return (
    <MainLayout>
      <Seo
        path={area.path}
        location={MAIN}
        title={area.metaTitle || `Expert Flooring Company in ${area.city} | All About Flooring`}
        description={area.metaDescription || area.description}
      />
      {body}
    </MainLayout>
  )
}
