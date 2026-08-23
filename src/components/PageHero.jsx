/**
 * Inner-page banner. Full-bleed photograph, centred uppercase title,
 * breadcrumb sitting on the bottom-right edge. Used on every page that
 * is not the homepage, so the masthead is one pattern rather than a
 * different composition each time.
 *
 * `image` is a stem without extension, same convention as the CTA
 * banners: `-1000` / `-1600` jpg+webp. Defaults to the About banner so
 * every inner page shares one masthead photograph.
 */
const HERO_IMG = '/img/cta/oakroom-banner'
const HERO_ALT = 'Oak flooring in a bright living room with a fireplace'

export default function PageHero({
  title,
  crumbs = [],
  image = HERO_IMG,
  alt = HERO_ALT,
  long = false,
}) {
  return (
    <section className="pghero" id="top">
      <picture className="pghero-media" aria-hidden={!alt}>
        <source
          type="image/webp"
          srcSet={`${image}-1000.webp 1000w, ${image}-1600.webp 1600w`}
          sizes="100vw"
        />
        <img
          src={`${image}-1600.jpg`}
          srcSet={`${image}-1000.jpg 1000w, ${image}-1600.jpg 1600w`}
          sizes="100vw"
          alt={alt}
        />
      </picture>

      <div className="pghero-in">
        <h1 className={long ? 'is-long' : undefined}>{title}</h1>
      </div>

      {crumbs.length > 0 && (
        <nav className="pghero-bc" aria-label="Breadcrumb">
          <ol>
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1
              return (
                <li key={c.label}>
                  {i > 0 && <span aria-hidden="true"> / </span>}
                  {last || !c.href ? (
                    <span aria-current={last ? 'page' : undefined}>{c.label}</span>
                  ) : (
                    <a href={c.href}>{c.label}</a>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
      )}
    </section>
  )
}
