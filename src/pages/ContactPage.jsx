import MainLayout from '../layouts/MainLayout'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Tick from '../components/Tick'
import ConsultForm from '../components/ConsultForm'
import MapPanel from '../components/MapPanel'
import SectionHead from '../components/SectionHead'
import { CONTACT_PAGE } from '../data/contact'
import { MAIN, mapsDirectionsUrl } from '../data/locations'
import { SITE } from '../data/site'
import Cta from '../components/Cta'
import { CTA_LATE } from '../data/cta'

/**
 * Contact. Phone, email and the map sit next to the same measure form
 * the homepage uses, so a lead from this page is attributed separately
 * in Netlify without a second form to maintain.
 */
export default function ContactPage() {
  const { hero, intro, form, visit } = CONTACT_PAGE

  const ways = [
    {
      key: 'phone',
      label: 'Call us',
      value: MAIN.phone,
      href: `tel:${MAIN.phoneE164}`,
    },
    {
      key: 'email',
      label: 'Email us',
      value: MAIN.email,
      href: `mailto:${MAIN.email}`,
      long: true,
    },
    {
      key: 'visit',
      label: 'Visit us',
      value: `${MAIN.city}, ${MAIN.region}`,
      href: mapsDirectionsUrl(MAIN),
      external: true,
    },
  ]

  return (
    <MainLayout>
      <Seo
        path="/contact"
        location={MAIN}
        title={`Contact ${MAIN.city} Flooring Contractor - All About Flooring`}
        description={`Book a free in-home flooring measure with All About Flooring in ${MAIN.city}. Call ${MAIN.phone} or send the form — we reply the same working day.`}
      />

      <PageHero
        title={hero.title}
        crumbs={hero.crumbs}
        image={hero.image}
        alt={hero.alt}
      />

      <section className="sec ctp-reach" id="reach">
        <div className="wrap">
          <header className="sec-hd">
            <Tick>{intro.tick}</Tick>
            <h2>{intro.heading}</h2>
            <p>{intro.body}</p>
          </header>

          <div className="ctp-bar">
            <span className="ctp-dots" aria-hidden="true" />
            <span className="ctp-orn" aria-hidden="true" />
            <ul className="ctp-ways">
              {ways.map((w) => (
                <li key={w.key}>
                  <a
                    className={`ctp-way${w.long ? ' is-long' : ''}`}
                    href={w.href}
                    {...(w.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    <span className="ctp-way-tile">
                      <span className="ctp-way-v">{w.value}</span>
                    </span>
                    <span className="ctp-way-k">{w.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ConsultForm
        location={MAIN}
        formName={SITE.leadForm}
        heading={form.heading}
        intro={form.intro}
      />

      <section className="sec sec-dark locpg" id="visit">
        <div className="wrap">
          <SectionHead watermark={visit.watermark} accent={visit.accent}>
            {visit.heading}
          </SectionHead>
          <p className="svca-intro">{visit.intro}</p>

          <div className="locpg-frame">
            <MapPanel location={MAIN} />
          </div>
          {MAIN.mapsShareUrl && (
            <p className="locpg-open">
              <a href={MAIN.mapsShareUrl} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </p>
          )}
        </div>
      </section>

      <Cta content={CTA_LATE} location={MAIN} />
    </MainLayout>
  )
}
