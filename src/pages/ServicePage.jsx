import MainLayout from '../layouts/MainLayout'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Tick from '../components/Tick'
import Services from '../components/Services'
import ServiceArea from '../components/ServiceArea'
import ServiceSeoContent, { Check } from '../components/ServiceSeoContent'
import { SERVICE_PAGES } from '../data/services'
import { SERVICE_CARDS } from '../data/content'
import { MAIN, MAIN_AREA_INTRO } from '../data/locations'

/**
 * One service. Banner, the specific service, the rest of the list,
 * then where we work. The closing quote form comes from MainLayout.
 */
export default function ServicePage({ slug }) {
  const page = SERVICE_PAGES[slug]
  if (!page) return null

  const work = page.workKey
  const bg = `/img/services/bg/${page.key}`
  const workBase = work ? `/img/work/${work}` : null
  const workWebp = work && page.webp !== false

  const body = (
    <>
      <PageHero
        title={page.heroTitle}
        crumbs={[
          { href: '/', label: 'Home' },
          { href: '/services', label: 'Services' },
          { label: page.crumb },
        ]}
      />

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
            {page.body?.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="sec abpg-block">
        <div className="wrap abpg-approach">
          <div className="abpg-copy">
            <Tick>{page.pointsTick}</Tick>
            <h2>{page.pointsHeading}</h2>
            {(page.pointsBody || []).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="ab-points abpg-points">
            {page.points.map((t) => (
              <li key={t}>
                <Check />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {page.seo ? (
        <ServiceSeoContent
          seo={page.seo}
          featured={
            <Services
              heading="Featured"
              accent="Services"
              intro={null}
              items={SERVICE_CARDS.filter((s) => s.href !== page.path)}
            />
          }
        />
      ) : (
        <Services
          heading="Featured"
          accent="Services"
          intro={null}
          items={SERVICE_CARDS.filter((s) => s.href !== page.path)}
        />
      )}

      <ServiceArea
        primary={MAIN}
        intro={MAIN_AREA_INTRO}
      />
    </>
  )

  return (
    <MainLayout>
      <Seo
        path={page.path}
        location={MAIN}
        title={page.metaTitle || `${page.title} in ${MAIN.city} | All About Flooring`}
        description={page.metaDescription || page.description}
      />
      {page.seo ? <div className="svcseo-page">{body}</div> : body}
    </MainLayout>
  )
}
