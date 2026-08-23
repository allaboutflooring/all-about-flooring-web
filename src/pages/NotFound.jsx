import MainLayout from '../layouts/MainLayout'
import Seo from '../components/Seo'

const LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Get a quote' },
]

/**
 * Missing URL. Same inner-page photograph as About / Services, a
 * ghosted 404, and a plank joke instead of a blank text column.
 */
export default function NotFound() {
  return (
    <MainLayout>
      <Seo
        path="/404"
        title="Page not found | All About Flooring"
        description="That page has moved or no longer exists."
        noindex
      />

      <section className="nf" id="top">
        <picture className="nf-media" aria-hidden="true">
          <source
            type="image/webp"
            srcSet="/img/cta/oakroom-banner-1000.webp 1000w, /img/cta/oakroom-banner-1600.webp 1600w"
            sizes="100vw"
          />
          <img
            src="/img/cta/oakroom-banner-1600.jpg"
            srcSet="/img/cta/oakroom-banner-1000.jpg 1000w, /img/cta/oakroom-banner-1600.jpg 1600w"
            sizes="100vw"
            alt=""
          />
        </picture>

        <span className="nf-code" aria-hidden="true">
          404
        </span>

        <div className="nf-in">
          <p className="nf-tick">Page not found</p>
          <h1>This plank is missing.</h1>
          <p>
            That address isn&rsquo;t a floor we install. Head home, pick a service, or
            call &mdash; quicker than hunting the URL.
          </p>
          <div className="nf-acts">
            <a className="btn btn-primary" href="/">
              Back home
            </a>
            <a className="btn nf-ghost" href="/services">
              See services
            </a>
          </div>
          <ul className="nf-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </MainLayout>
  )
}
