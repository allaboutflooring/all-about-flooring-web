/**
 * ─────────────────────────────────────────────────────────────
 *  NAP - SINGLE SOURCE OF TRUTH
 *
 *  Both Google Business Profile listings live here. Every header,
 *  footer, contact block, tel: link and LocalBusiness schema on the
 *  site reads from this file, so the two profiles can never drift
 *  out of sync with what Google has.
 *
 *  Copy the values EXACTLY as they appear in the GBP dashboard -
 *  including "Suite" vs "Ste", punctuation and capitalisation.
 *  Citation consistency is matched literally, not semantically.
 * ─────────────────────────────────────────────────────────────
 */

export const MAIN = {
  key: 'main',
  isPrimary: true,
  name: 'All About Flooring Tampa Bay Contractors',
  legalName: 'All About Flooring',
  street: '',
  city: 'Tampa',
  region: 'FL',
  postal: '',
  country: 'US',
  phone: '(813) 313-9466',
  phoneE164: '+18133139466',
  email: 'allaboutflooring.fl@gmail.com',
  license: '',
  founded: '2009',
  primaryCategory: 'Flooring contractor',
  secondaryCategories: ['Kitchen remodeler', 'Bathroom remodeler'],
  hours: [{ d: 'Mon-Sun', h: 'Open 24 hours' }],
  hoursSchema: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], open: '07:00', close: '17:00' },
    { days: ['Saturday'], open: '08:00', close: '13:00' },
  ],
  geo: { lat: 27.8918945, lng: -82.6262675 },
  mapEmbed:
    'https://maps.google.com/maps?q=All+About+Flooring+Tampa+Bay+Contractors,+Tampa,+FL&z=10&output=embed',
  mapsShareUrl: 'https://maps.app.goo.gl/3RiTe9zUQBCvXxFb6',
  mapUrl: 'https://maps.app.goo.gl/GmZE5mfAh23CPhga9',
  gbpProfileUrl: 'https://maps.app.goo.gl/3RiTe9zUQBCvXxFb6',
  placeId: 'ChIJJa3ukc6izU8Rw_oaL_6dD7c',
  placeCid: '0x4fcda2ce91eead25:0xb70f9dfe2f1afac3',
  gbpReviewUrl:
    'https://www.google.com/search?q=All+About+Flooring+Tampa+Bay+Contractors&lrd=0x4fcda2ce91eead25:0xb70f9dfe2f1afac3,1',
  writeReviewUrl:
    'https://www.google.com/search?q=All+About+Flooring+Tampa+Bay+Contractors&lrd=0x4fcda2ce91eead25:0xb70f9dfe2f1afac3,3',
  serviceAreas: [
    'Odessa',
    'Carrollwood',
    'Temple Terrace',
    'Citrus Park',
    'Brandon',
    'Palm Harbor',
    'Clearwater',
    'Dunedin',
    'Wesley Chapel',
    'Pinellas Park',
    'Spring Hill',
    'Riverview',
    'St. Petersburg',
    'Largo',
    'Tarpon Springs',
    'Safety Harbor',
    'New Port Richey',
    'Lutz',
    "Land O' Lakes",
    'Apollo Beach',
    'Ruskin',
    'Valrico',
    'Lithia',
    'Oldsmar',
  ],
  // Fallback only. Live values come from Places API via /api/google-reviews.
  reviewCount: 142,
  reviewAverage: 5.0,
}

export const SECOND = {
  key: 'second',
  isPrimary: false,
  name: 'All About Flooring St. Petersburg',
  legalName: 'All About Flooring',
  street: '',
  city: 'St. Petersburg',
  region: 'FL',
  postal: '',
  country: 'US',
  phone: '(727) 761-2688',
  phoneE164: '+17277612688',
  email: 'allaboutflooring.fl@gmail.com',
  license: '',
  founded: '2009',
  primaryCategory: 'Flooring contractor',
  secondaryCategories: ['Kitchen remodeler', 'Bathroom remodeler'],
  hours: [{ d: 'Mon-Sun', h: 'Open 24 hours' }],
  hoursSchema: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], open: '07:00', close: '17:00' },
    { days: ['Saturday'], open: '08:00', close: '13:00' },
  ],
  geo: { lat: 27.757261, lng: -82.665253 },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214711.87716437018!2d-82.69306759999999!3d27.79405895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xedfc062775751b5%3A0x86c4f67f47e8713!2sALL%20ABOUT%20FLOORING%20ST.%20PETERSBURG!5e1!3m2!1sen!2s!4v1788335807294!5m2!1sen!2s',
  mapsShareUrl: 'https://maps.app.goo.gl/CoHyWqmuxMLeoMcb8',
  mapUrl: 'https://maps.app.goo.gl/q3h9rv71GKRPzKbG8',
  gbpProfileUrl: 'https://maps.app.goo.gl/CoHyWqmuxMLeoMcb8',
  placeId: 'ChIJtVFXd2LA3w4RE4d-9GdPbAg',
  placeCid: '0xedfc062775751b5:0x86c4f67f47e8713',
  gbpReviewUrl:
    'https://www.google.com/search?q=ALL+ABOUT+FLOORING+ST.+PETERSBURG&lrd=0xedfc062775751b5:0x86c4f67f47e8713,1',
  writeReviewUrl:
    'https://www.google.com/search?q=ALL+ABOUT+FLOORING+ST.+PETERSBURG&lrd=0xedfc062775751b5:0x86c4f67f47e8713,3',
  serviceAreas: [
    'St. Petersburg',
    'St. Pete Beach',
    'Treasure Island',
    'Seminole',
    'Gulfport',
    'Largo',
    'Pinellas Park',
    'Madeira Beach',
    'South Pasadena',
    'Safety Harbor',
  ],
  socials: {
    facebook: 'https://www.facebook.com/allaboutflooringstpetersburg/',
    instagram: 'https://www.instagram.com/allaboutflooringstpetersburg/',
  },
  leadForm: 'new lead - St Petersburg landing page',
  reviewCount: 6,
  reviewAverage: 5.0,
}

export const LOCATIONS = { main: MAIN, second: SECOND }

export const fullAddress = (l) =>
  [l.street, [l.city, l.region].filter(Boolean).join(', '), l.postal]
    .filter((p) => p && !String(p).startsWith('['))
    .join(', ')

export const mapsDirectionsUrl = (l) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${l.name} ${fullAddress(l)}`
  )}`

/**
 * View / write URLs for the Google reviews widget.
 *
 * Prefer the listing fields. Fall back to the CID search URLs Google
 * uses for the reviews panel (`lrd=...,1` read, `lrd=...,3` write).
 */
export const googleReviewLinks = (l) => {
  const q = encodeURIComponent(l.name)
  const view =
    l.gbpReviewUrl ||
    (l.placeCid ? `https://www.google.com/search?q=${q}&lrd=${l.placeCid},1` : l.mapsShareUrl || l.gbpProfileUrl)
  const write =
    l.writeReviewUrl ||
    (l.placeCid ? `https://www.google.com/search?q=${q}&lrd=${l.placeCid},3` : view)
  return { view, write }
}

export const MAIN_AREA_INTRO =
  'We cover Tampa Bay from New Port Richey and Spring Hill down to Ruskin and Apollo Beach, and across the bay to Clearwater, Dunedin, Tarpon Springs and St. Petersburg.'
