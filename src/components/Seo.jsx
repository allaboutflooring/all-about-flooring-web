import { Head } from 'vite-react-ssg'
import { SITE } from '../data/site'
import {
  LOCAL_BUSINESS_SCHEMA,
  ST_PETE_LOCAL_BUSINESS_SCHEMA,
  ORGANIZATION_SCHEMA,
} from '../data/businessSchema'
import { STPETE_BASE } from '../data/stpete'

/**
 * Per-page <head> + structured data.
 *
 * Business schema: a single Organization node is emitted site-wide, and the
 * LocalBusiness node is emitted on the homepage only. Both come verbatim from
 * data/businessSchema.js. The previous per-page HomeAndConstructionBusiness
 * node is no longer produced here.
 *
 * NOTE: children of <Head> must be flat elements. react-helmet does not
 * walk into Fragments, so anything wrapped in <>…</> is silently dropped.
 */
export default function Seo({ title, description, path = '/', location, service, noindex = false }) {
  const url = `${SITE.origin}${path}`
  // Canonicals carry a trailing slash site-wide. og:url and the Service schema
  // @id/url keep the slug-only `url` for og:url; canonical adds the slash.
  const canonical = path.endsWith('/') ? url : `${url}/`
  const isHome = path === '/'
  const isStPeteLanding = path === STPETE_BASE

  // Optional per-service structured data for a service page. The Service node
  // links to the business listing by @id only (`provider` is a bare reference,
  // not an embedded node). The page's FAQs are emitted as a FAQPage node. Both
  // are only rendered when `service` is supplied (the 20 optimised service
  // pages), which therefore carry Service + FAQPage plus the site-wide
  // Organization node.
  const serviceSchema =
    service &&
    location && {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: service.name,
      serviceType: service.name,
      ...(service.description ? { description: service.description } : {}),
      url: canonical,
      ...(service.image ? { image: service.image } : {}),
      provider: {
        '@id':
          location.key === 'second'
            ? ST_PETE_LOCAL_BUSINESS_SCHEMA['@id']
            : LOCAL_BUSINESS_SCHEMA['@id'],
      },
      areaServed: location.serviceAreas.map((a) => ({ '@type': 'Place', name: a })),
    }

  const faqSchema = service?.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
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
      <script type="application/ld+json">{JSON.stringify(ORGANIZATION_SCHEMA)}</script>
      {isHome ? (
        <script type="application/ld+json">{JSON.stringify(LOCAL_BUSINESS_SCHEMA)}</script>
      ) : null}
      {isStPeteLanding ? (
        <script type="application/ld+json">{JSON.stringify(ST_PETE_LOCAL_BUSINESS_SCHEMA)}</script>
      ) : null}
      {serviceSchema ? (
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      ) : null}
      {faqSchema ? (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      ) : null}
    </Head>
  )
}
