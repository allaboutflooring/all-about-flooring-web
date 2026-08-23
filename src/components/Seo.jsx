import { Head } from 'vite-react-ssg'
import { SITE } from '../data/site'

/**
 * Per-page head + LocalBusiness schema.
 *
 * Each GBP listing gets its own LocalBusiness node with its own @id,
 * address, phone and geo. That is what lets Google associate this page
 * with that specific profile instead of blending the two listings.
 *
 * NOTE: children of <Head> must be flat elements. react-helmet does not
 * walk into Fragments, so anything wrapped in <>…</> is silently dropped.
 */
export default function Seo({ title, description, path = '/', location, noindex = false }) {
  const url = `${SITE.origin}${path}`

  const schema = location && {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${url}#${location.key}`,
    name: location.name,
    legalName: location.legalName,
    description: SITE.tagline,
    url,
    telephone: location.phoneE164,
    email: location.email,
    foundingDate: location.founded,
    address: {
      '@type': 'PostalAddress',
      ...(location.street ? { streetAddress: location.street } : {}),
      addressLocality: location.city,
      addressRegion: location.region,
      ...(location.postal ? { postalCode: location.postal } : {}),
      addressCountry: location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.lat,
      longitude: location.geo.lng,
    },
    openingHoursSpecification: location.hoursSchema.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.open,
      closes: h.close,
    })),
    areaServed: location.serviceAreas.map((a) => ({ '@type': 'Place', name: a })),
    knowsAbout: [location.primaryCategory, ...location.secondaryCategories],
    sameAs: [
      location.gbpProfileUrl,
      ...(location.socials
        ? [location.socials.facebook, location.socials.instagram]
        : [SITE.socials?.facebook, SITE.socials?.instagram]),
    ].filter(Boolean),
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex ? <meta name="robots" content="noindex,follow" /> : null}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.brand} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      {location ? <meta name="geo.region" content={location.region} /> : null}
      {location ? <meta name="geo.placename" content={location.city} /> : null}
      {location ? (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      ) : null}
    </Head>
  )
}
