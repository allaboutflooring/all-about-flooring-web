import LocationLayout from '../layouts/LocationLayout'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Tick from '../components/Tick'
import ServiceArea from '../components/ServiceArea'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import ServiceSeoContent, {
  WhyChoose,
  ProcessSteps,
  ContentSection,
  SeoFaqs,
} from '../components/ServiceSeoContent'
import Cta from '../components/Cta'
import LocationMap from '../components/LocationMap'
import { SECOND } from '../data/locations'
import { GOOGLE_REVIEWS_STPETE } from '../data/reviews'
import { CTA_MID, CTA_LATE } from '../data/cta'
import {
  STPETE_BASE,
  STPETE_SERVICE_CARDS,
  STPETE_SERVICE_PAGES,
  STPETE_AREA_PAGES,
  STPETE_AREA_INTRO,
  stPeteAreaHref,
} from '../data/stpete'

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

function ServiceAbout({ page }) {
  const work = page.workKey
  const bg = `/img/services/bg/${page.key}`
  const workBase = work ? `/img/work/${work}` : null
  const workWebp = work && page.webp !== false

  return (
    <section className="sec sec-dark abpg-block">
      <div className="wrap abpg-grid">
        <div className={`ab-media${work ? ' is-floor' : ''}`}>
          <picture>
            {work ? (
              <>
                {workWebp && (
                  <source
                    type="image/webp"
                    srcSet={`${workBase}-800.webp 800w, ${workBase}-1200.webp 1200w`}
                    sizes="(max-width: 900px) 92vw, 40vw"
                  />
                )}
                <img
                  className="ab-media-img"
                  src={`${workBase}-1200.jpg`}
                  srcSet={`${workBase}-800.jpg 800w, ${workBase}-1200.jpg 1200w`}
                  sizes="(max-width: 900px) 92vw, 40vw"
                  alt={page.alt}
                  width="1200"
                  height="1600"
                  loading="eager"
                  decoding="async"
                />
              </>
            ) : (
              <>
                <source type="image/webp" srcSet={`${bg}.webp`} />
                <img
                  className="ab-media-img"
                  src={`${bg}.jpg`}
                  alt={page.alt}
                  width="800"
                  height="1000"
                  loading="eager"
                  decoding="async"
                />
              </>
            )}
          </picture>
        </div>
        <div className="abpg-copy">
          <Tick>{page.tick}</Tick>
          <h2>{page.heading}</h2>
          {(page.body || []).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

function AreaAbout({ area }) {
  const workBase = `/img/work/${area.workKey}`

  return (
    <>
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
    </>
  )
}

/**
 * Shared inner template for the St. Petersburg listing.
 * Service pages: this service → service areas → other services → CTA → map.
 * Town pages match the main site: about → points → services → CTA → areas → map.
 * The services hub leads with the cards.
 */
export default function StPeteInner({ kind, slug }) {
  const homeCrumb = { href: STPETE_BASE, label: 'Home' }
  const servicesHref = `${STPETE_BASE}/services`
  const locationsHref = `${STPETE_BASE}/locations`

  let path = servicesHref
  let title = `Flooring Services | All About Flooring St. Petersburg`
  let description =
    'Flooring services in St. Petersburg - LVP, hardwood, tile, sanding and refinishing. One crew from prep to walkthrough. Free in-home measure.'
  let heroTitle = 'Services'
  let crumbs = [homeCrumb, { label: 'Services' }]
  let intro = STPETE_AREA_INTRO
  let long = false
  let page = null
  let area = null

  if (kind === 'service') {
    page = STPETE_SERVICE_PAGES[slug]
    if (!page) return null
    path = page.path
    title = page.metaTitle || `${page.title} in St. Petersburg | All About Flooring`
    description = page.metaDescription || page.description
    heroTitle = page.heroTitle
    crumbs = [homeCrumb, { href: servicesHref, label: 'Services' }, { label: page.crumb }]
  } else if (kind === 'locations') {
    path = locationsHref
    title = `Service Areas in St. Petersburg | All About Flooring`
    description =
      'Flooring installation across St. Petersburg and nearby Pinellas cities — St. Pete Beach, Treasure Island, Seminole, Largo, Gulfport & more.'
    heroTitle = 'Locations'
    crumbs = [homeCrumb, { label: 'Locations' }]
  } else if (kind === 'area') {
    area = STPETE_AREA_PAGES[slug]
    if (!area) return null
    path = area.path
    title = area.metaTitle || `Expert Flooring Company in ${area.city} | All About Flooring`
    description = area.metaDescription || area.description
    heroTitle = area.heroTitle
    crumbs = [homeCrumb, { href: locationsHref, label: 'Locations' }, { label: area.crumb }]
    long = true
  }

  const cards = page
    ? STPETE_SERVICE_CARDS.filter((s) => s.href !== page.path)
    : STPETE_SERVICE_CARDS
  const servicesFirst = kind === 'services'

  // A St. Petersburg service page that carries optimised SEO content renders
  // the same structure/flow as the main-site service pages (shared
  // ServiceSeoContent), while keeping St. Petersburg internal links (cards +
  // service areas), the St. Petersburg location map, and the St. Petersburg
  // shell (LocationLayout header/footer/NAP + closing form).
  const seoService = kind === 'service' && page && page.seo

  if (seoService) {
    return (
      <LocationLayout>
        <Seo path={path} location={SECOND} title={title} description={description} />
        <div className="svcseo-page">
          <PageHero title={heroTitle} crumbs={crumbs} long={long} />
          <ServiceAbout page={page} />
          <ServiceSeoContent
            seo={page.seo}
            featured={<Services heading="Featured" accent="Services" intro={null} items={cards} />}
          />
          <ServiceArea primary={SECOND} areaHref={stPeteAreaHref} intro={STPETE_AREA_INTRO} />
          <LocationMap location={SECOND} />
        </div>
      </LocationLayout>
    )
  }

  // An optimised St. Petersburg location page (area with an `seo` block, e.g.
  // St. Pete Beach) reuses the same location-page system as the completed
  // main-site Odessa template: white intro → Why Choose (bone) → Featured
  // (white) → St. Pete reviews (bone) → feature → CTA banner → prose (bone) →
  // Process (white) → service areas (bone) → prose (white) → CTA → FAQs →
  // map, all wired to the St. Petersburg (SECOND) listing. Sections alternate
  // bone/white. Other St. Pete towns keep the original AreaAbout flow until
  // they are optimised.
  const seoArea = kind === 'area' && area && area.seo

  if (seoArea) {
    const s = area.seo
    const workBase = `/img/work/${area.workKey}`
    return (
      <LocationLayout>
        <Seo path={path} location={SECOND} title={title} description={description} />
        <div className="svcseo-page">
          <PageHero title={heroTitle} crumbs={crumbs} long={long} />

          <section className="sec abpg-block">
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

          <WhyChoose data={s.whyChoose} />
          <Services heading="Featured" accent="Services" intro={null} items={cards} />
          <Reviews location={SECOND} items={GOOGLE_REVIEWS_STPETE} />
          <ContentSection section={s.sections[0]} />
          <Cta content={CTA_LATE} location={SECOND} />
          <ContentSection section={s.sections[1]} wall />
          <ProcessSteps data={s.process} />
          <ServiceArea primary={SECOND} areaHref={stPeteAreaHref} intro={STPETE_AREA_INTRO} />
          <ContentSection section={s.sections[2]} />
          <Cta content={CTA_MID} location={SECOND} />
          {s.sections[3] && <ContentSection section={s.sections[3]} wall />}
          <SeoFaqs items={s.faqs} />
          <LocationMap location={SECOND} />
        </div>
      </LocationLayout>
    )
  }

  return (
    <LocationLayout>
      <Seo path={path} location={SECOND} title={title} description={description} />

      <PageHero title={heroTitle} crumbs={crumbs} long={long} />

      {page && <ServiceAbout page={page} />}
      {area && <AreaAbout area={area} />}

      {servicesFirst && (
        <Services heading="Featured" accent="Services" intro={null} items={cards} />
      )}

      {!area && !servicesFirst && (
        <ServiceArea primary={SECOND} areaHref={stPeteAreaHref} intro={intro} />
      )}

      {!servicesFirst && (
        <Services heading="Featured" accent="Services" intro={null} items={cards} />
      )}

      <Cta content={CTA_LATE} location={SECOND} />

      {area && (
        <ServiceArea primary={SECOND} areaHref={stPeteAreaHref} intro={STPETE_AREA_INTRO} />
      )}

      {servicesFirst && (
        <ServiceArea primary={SECOND} areaHref={stPeteAreaHref} intro={intro} />
      )}

      <LocationMap location={SECOND} />
    </LocationLayout>
  )
}
