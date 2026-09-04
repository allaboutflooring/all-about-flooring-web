import { SITE } from './site'

/**
 * Builds the `service` payload consumed by <Seo service={…}> for the optimised
 * service pages (10 Tampa + 10 St. Petersburg). Returns null for legacy/hidden
 * pages so only those 20 emit Service + FAQPage structured data.
 *
 * The image URL points at the WebP the page actually renders (via <picture>
 * <source type="image/webp">): a `workKey` page uses the /img/work 1200 WebP,
 * otherwise the /img/services/bg background WebP keyed by `key`. These WebPs
 * are the verified exact-same-image equivalents of the JPG fallbacks. Name,
 * description and FAQs come straight from the existing page data.
 */
export function serviceSchemaData(page) {
  if (!page || page.inNav === false || !page.seo) return null

  const image = page.workKey
    ? `${SITE.origin}/img/work/${page.workKey}-1200.webp`
    : `${SITE.origin}/img/services/bg/${page.key}.webp`

  return {
    name: page.title,
    description: page.description || page.metaDescription,
    image,
    faqs: page.seo.faqs || [],
  }
}
