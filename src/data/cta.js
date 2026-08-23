/**
 * The three call-to-action bands on the homepage.
 *
 * They are deliberately NOT the same block repeated. A visitor meets these
 * at three different depths, so each asks for something proportionate to
 * how much they know by that point:
 *
 *   after the hero        → low commitment, a number to call
 *   after services        → the free measure, with what it involves
 *   after the portfolio   → the quote, for someone now convinced
 */
export const CTA_EARLY = {
  variant: 'band',
  headline: 'Not sure what your floor needs?',
  body: 'Two minutes on the phone usually settles it.',
  primary: { label: 'Book a free measure', href: '#get-started' },
}

/**
 * Full-bleed banner between Services and Service Areas.
 * Replaced the split variant in that slot - two calls to action back to
 * back read as one long ask. CTA_MID below is kept for easy restore.
 */
export const CTA_BANNER = {
  variant: 'banner',
  headline: 'See it in your own light -',
  accent: 'we bring the samples to you',
  body: 'A free measure is what every contractor offers. We turn up with the full range instead, lay it in the actual room, and leave you an itemised fixed price within 48 hours.',
  primary: { label: 'Book a sample visit', href: '#consult' },
  image: '/img/cta/herringbone-banner',
  alt: '',
}

export const CTA_MID = {
  variant: 'split',
  eyebrow: 'No obligation',
  headline: 'The measure is free. So is the advice.',
  body: 'We come out, measure every room, moisture-test the subfloor and show you samples in your own light. You get an itemised written price within 48 hours. If you go elsewhere with it, that is genuinely fine.',
  points: ['45 minutes on site', 'Evening and Saturday slots', 'Fixed price, itemised'],
  primary: { label: 'Book your measure', href: '#get-started' },
  tex: 'walnut',
}

export const CTA_LATE = {
  variant: 'banner',
  headline: 'Every project started as',
  accent: 'a phone call',
  body: 'Tell us the rooms and we will bring samples, measure, and put a fixed price in writing.',
  primary: { label: 'Book a free measure', href: '#get-started' },
  image: '/img/cta/oakroom-banner',
  alt: '',
}

/**
 * Closing banner. Dials rather than scrolling back to the form - by this
 * point the visitor has read the whole page, and asking them to fill in
 * fields they already passed is friction, not conversion.
 * `phone: true` swaps the href for the location's tel: link at render.
 */
export const CTA_CLOSE = {
  variant: 'banner',
  headline: 'Get started with',
  accent: 'All About Flooring',
  body: 'Free in-home measure across Tampa Bay. Written price within 48 hours.',
  primary: { label: 'Call now', phone: true },
  image: '/img/cta/backsplash-banner',
  alt: '',
}
