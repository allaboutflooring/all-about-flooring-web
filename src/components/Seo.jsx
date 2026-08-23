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
    description: SITE.description,
    url,
    logo: `${SITE.origin}${SITE.logo}`,
    image: `${SITE.origin}${SITE.ogImage}`,
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
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      {noindex ? <meta name="robots" content="noindex,follow" /> : null}
      <meta name="theme-color" content="#5d3f34" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.listingName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE.origin}${SITE.ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={SITE.listingName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE.origin}${SITE.ogImage}`} />
      <meta name="twitter:image:alt" content={SITE.listingName} />
      {location ? <meta name="geo.region" content={location.region} /> : null}
      {location ? <meta name="geo.placename" content={location.city} /> : null}
      {location ? (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      ) : null}
    </Head>
  )
}
