import MainLayout from '../layouts/MainLayout'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { LEGAL_PAGES } from '../data/legal'
import { MAIN } from '../data/locations'

export default function LegalPage({ slug }) {
  const page = LEGAL_PAGES[slug]
  if (!page) return null

  return (
    <MainLayout>
      <Seo
        path={page.path}
        location={MAIN}
        title={`${page.title} | All About Flooring`}
        description={page.description}
      />

      <PageHero
        title={page.title}
        crumbs={[
          { href: '/', label: 'Home' },
          { label: page.crumb },
        ]}
      />

      <section className="sec legal">
        <div className="wrap legal-in">
          {page.updated && <p className="legal-updated">Last updated {page.updated}</p>}
          {page.sections.map((s) => (
            <article key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </MainLayout>
  )
}
