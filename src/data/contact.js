/**
 * Dedicated /contact page. Nav "Contact us" points here rather than
 * scrolling the closing form on whichever page the visitor is on.
 *
 * Phone, email, hours and the map all still come from locations.js -
 * this file is the page copy only, so NAP cannot drift.
 */
export const CONTACT_PAGE = {
  hero: {
    title: 'Contact us',
    crumbs: [
      { href: '/', label: 'Home' },
      { label: 'Contact us' },
    ],
    image: '/img/cta/oakroom-banner',
    alt: 'Oak flooring in a bright living room with a fireplace',
  },

  intro: {
    tick: 'Get in touch',
    heading: 'Call, write, or book a measure.',
    body: 'Most jobs start with a 45-minute visit. Leave your details and we will call the same working day to set a time. If you already know the rooms, the phone is faster.',
  },

  form: {
    heading: 'Ready to get your floors done right?',
    intro:
      'Leave your details and one of our estimators will call to arrange a free in-home measure, talk through materials, and give you an itemised written price.',
  },

  visit: {
    watermark: 'Map',
    heading: 'Find',
    accent: 'us',
    intro: 'Visits by appointment. Call ahead and we will have samples out for the rooms you are doing.',
  },
}
