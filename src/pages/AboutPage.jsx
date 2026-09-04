import MainLayout from '../layouts/MainLayout'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Tick from '../components/Tick'
import Process from '../components/Process'
import Services from '../components/Services'
import Cta from '../components/Cta'
import { ABOUT, ABOUT_PAGE } from '../data/about'
import { MAIN } from '../data/locations'
import { ABOUT_PATH } from '../data/site'
import { CTA_LATE } from '../data/cta'

const owner = ABOUT.tabs.find((t) => t.key === 'owner')

/**
 * About us. The homepage keeps a short tabbed teaser; this page is the
 * full story - history, how a job runs, the owner, then a measure form.
 */
export default function AboutPage() {
  const { hero, story, commitment } = ABOUT_PAGE

  return (
    <MainLayout>
      <Seo
        path={ABOUT_PATH}
        location={MAIN}
        title={`About All About Flooring | ${MAIN.city} Flooring Contractor`}
        description={`Meet All About Flooring and owner Amanda Neve — a Tampa crew that measures, prices and installs hardwood, tile and vinyl. Free in-home measure.`}
      />

      <PageHero
        title={hero.title}
        crumbs={hero.crumbs}
        image={hero.image}
        alt={hero.alt}
      />

      <section className="sec sec-dark abpg-block" id="story">
        <div className="wrap abpg-grid">
          <div className="ab-media is-scene">
            <picture>
              <source
                type="image/webp"
                srcSet={story.img.replace(/\.(png|jpe?g)(\?.*)?$/i, '.webp$2')}
              />
              <img
                className="ab-media-img"
                src={story.img}
                alt={story.alt}
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <div className="abpg-copy">
            <Tick>{story.tick}</Tick>
            <h2>{story.heading}</h2>
            {story.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="sec abpg-block" id="commitment">
        <div className="wrap abpg-approach">
          <div className="abpg-copy">
            <Tick>{commitment.tick}</Tick>
            <h2>{commitment.heading}</h2>
            {commitment.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="ab-points abpg-points">
            {ABOUT.points.map((t) => (
              <li key={t}>
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
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {owner && (
        <section className="sec sec-dark abpg-block" id="owner">
          <div className="wrap abpg-grid is-flip">
            <div className="ab-media is-owner">
              <picture>
                <source
                  type="image/webp"
                  srcSet={owner.img.replace(/\.(png|jpe?g)(\?.*)?$/i, '.webp$2')}
                />
                <img
                  className="ab-media-img"
                  src={owner.img}
                  alt={owner.alt}
                  width="800"
                  height="1000"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="abpg-copy">
              <Tick>{owner.label}</Tick>
              <h2>{owner.heading}</h2>
              {owner.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      <Process />

      <Services heading="Featured" accent="Services" intro={null} />

      <Cta content={CTA_LATE} location={MAIN} />
    </MainLayout>
  )
}
