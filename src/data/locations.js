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
  hours: [
    { d: 'Mon-Fri', h: '07:00 - 17:00' },
    { d: 'Sat', h: '08:00 - 13:00' },
    { d: 'Sun', h: 'Closed' },
  ],
  hoursSchema: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], open: '07:00', close: '17:00' },
    { days: ['Saturday'], open: '08:00', close: '13:00' },
  ],
  geo: { lat: 27.8918945, lng: -82.6262675 },
  mapEmbed:
    'https://maps.google.com/maps?q=All+About+Flooring+Tampa+Bay+Contractors,+Tampa,+FL&z=10&output=embed',
  mapsShareUrl: 'https://maps.app.goo.gl/3RiTe9zUQBCvXxFb6',
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
  hours: [
    { d: 'Mon-Fri', h: '07:00 - 17:00' },
    { d: 'Sat', h: '08:00 - 13:00' },
    { d: 'Sun', h: 'Closed' },
  ],
  hoursSchema: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], open: '07:00', close: '17:00' },
    { days: ['Saturday'], open: '08:00', close: '13:00' },
  ],
  geo: { lat: 27.757261, lng: -82.665253 },
  mapEmbed:
    'https://maps.google.com/maps?q=2400+13th+Ave+S,+St.+Petersburg,+FL+33712&z=13&output=embed',
  mapsShareUrl: 'https://maps.app.goo.gl/CoHyWqmuxMLeoMcb8',
  gbpProfileUrl: 'https://maps.app.goo.gl/CoHyWqmuxMLeoMcb8',
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
  reviewCount: 0,
  reviewAverage: 4.9,
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

const AREA_PHOTOS = [
  {
    workKey: 'star-pebble-shower',
    alt: 'Walk-in shower with star mosaic feature wall, pebble floor and oak plank bathroom flooring',
    webp: false,
  },
  {
    workKey: 'farmhouse-range-kitchen',
    alt: 'White farmhouse kitchen with stone mosaic backsplash, wood range hood and wide-plank flooring',
    webp: false,
  },
  {
    workKey: 'wood-look-plank-tile',
    alt: 'Newly installed wood-look luxury vinyl plank in an empty room with white baseboards',
    webp: true,
  },
  {
    workKey: 'checkerboard-open-plan',
    alt: 'Open-plan room with checkerboard porcelain tile meeting wood-look plank flooring',
    webp: true,
  },
  {
    workKey: 'navy-backsplash-kitchen',
    alt: 'Kitchen with a navy subway-tile backsplash, white Shaker cabinets and oak flooring',
    webp: false,
  },
  {
    workKey: 'dark-kitchen-bronze-glass',
    alt: 'Charcoal kitchen with bronze glass subway backsplash and wood-look plank flooring',
    webp: true,
  },
]

const AREA_CLOSE =
  'One crew from the first measure to the last baseboard. You get a written itemised price, a date we actually keep, and a floor built to live in, not just photograph. Licensed, insured, and local.'

function makeArea({ key, city, path, top, blurb, photo = 0, skipRoute = false }) {
  const shot = AREA_PHOTOS[photo % AREA_PHOTOS.length]
  return {
    key,
    city,
    path,
    skipRoute,
    heroTitle: top
      ? `Top Flooring Company in ${city}`
      : `Expert Flooring Company in ${city}`,
    crumb: city,
    description: `Luxury vinyl, tile, and hardwood installed in ${city} homes by a Tampa Bay crew that measures, prices, and installs the job themselves.`,
    tick: `${city}, Florida`,
    heading: `Flooring for ${city} homes, installed by the people who priced it.`,
    workKey: shot.workKey,
    alt: shot.alt,
    webp: shot.webp,
    body: [blurb, AREA_CLOSE],
    pointsTick: `Working in ${city}`,
    pointsHeading: 'The same crew that measures the job installs it.',
    pointsBody: [
      `We are not a franchise sending a different installer each week. The people who walk your ${city} rooms are the people who cut, set, and walk it with you at the end.`,
    ],
    points: [
      `Free in-home measure in ${city}, no obligation`,
      'Itemised written price within 48 hours',
      'Luxury vinyl, tile, and hardwood, one crew',
      'Fifteen-plus years across Tampa Bay homes',
    ],
  }
}

/**
 * Town pages. Simple slugs for the first four; the rest keep the indexed
 * "top-flooring-companies-" URLs from the old site.
 */
export const AREA_PAGES = {
  odessa: makeArea({
    key: 'odessa',
    city: 'Odessa',
    path: '/locations/odessa',
    photo: 0,
    blurb:
      'Odessa sits on the northwest edge of Tampa Bay, where new builds, ranch homes, and lakefront houses all need floors that hold up to sand, pets, and Florida humidity. We install luxury vinyl plank, porcelain tile, and hardwood across Odessa and the towns next to it.',
  }),
  carrollwood: makeArea({
    key: 'carrollwood',
    city: 'Carrollwood',
    path: '/locations/carrollwood',
    photo: 1,
    blurb:
      'Carrollwood is established north Tampa - family houses, lake lots, and remodels that have to match what is already there. We install luxury vinyl, hardwood, and tile so the new floor looks like it belongs in the house, not like a showroom leftover.',
  }),
  'temple-terrace': makeArea({
    key: 'temple-terrace',
    city: 'Temple Terrace',
    path: '/locations/temple-terrace',
    photo: 2,
    blurb:
      'Temple Terrace sits between the university and the river, with ranch homes and mid-century plans that need a floor that can take traffic. We moisture-test the slab, level where it needs it, and install LVP, hardwood, and tile with one crew.',
  }),
  'citrus-park': makeArea({
    key: 'citrus-park',
    city: 'Citrus Park',
    path: '/locations/citrus-park',
    photo: 3,
    blurb:
      'Citrus Park is northwest Tampa growth - newer builds, open plans, and lots of tile and LVP. We work through the house so kitchens, living rooms, and wet areas match, with a written price before a plank goes down.',
  }),
  brandon: makeArea({
    key: 'brandon',
    city: 'Brandon',
    path: '/locations/top-flooring-companies-brandon',
    top: true,
    photo: 4,
    blurb:
      'Brandon is east of Tampa and full of family homes that need a floor that survives kids, dogs, and a Florida summer. We install luxury vinyl plank, hardwood, and porcelain tile across Brandon with a local crew, not a rotating sub.',
  }),
  'palm-harbor': makeArea({
    key: 'palm-harbor',
    city: 'Palm Harbor',
    path: '/locations/top-flooring-companies-palm-harbor',
    top: true,
    photo: 5,
    blurb:
      'Palm Harbor sits on the Pinellas side, where humidity, sand, and sliders punish the wrong floor. LVP and porcelain are our first recommendations here; hardwood goes down where the room can take it, specified per job.',
  }),
  clearwater: makeArea({
    key: 'clearwater',
    city: 'Clearwater',
    path: '/locations/top-flooring-companies-clearwater',
    top: true,
    photo: 0,
    blurb:
      'Clearwater homes and condos see beach traffic, salt air, and tight install windows. We install waterproof luxury vinyl, tile, and hardwood, and we work around building rules when the job is in a stacked unit.',
  }),
  dunedin: makeArea({
    key: 'dunedin',
    city: 'Dunedin',
    path: '/locations/top-flooring-companies-dunedin',
    top: true,
    photo: 1,
    blurb:
      'Dunedin bungalows, cottages, and downtown condos need floors that look right in an older house and still live like a new one. We install LVP, hardwood, and tile, and we match transitions so rooms do not fight each other.',
  }),
  'wesley-chapel': makeArea({
    key: 'wesley-chapel',
    city: 'Wesley Chapel',
    path: '/locations/top-flooring-companies-wesley-chapel',
    top: true,
    photo: 2,
    blurb:
      'Wesley Chapel is new construction and open-plan living. Builders leave a slab; we moisture-test it, level it, and install luxury vinyl, tile, or engineered hardwood so the floor stays flat through August.',
  }),
  'pinellas-park': makeArea({
    key: 'pinellas-park',
    city: 'Pinellas Park',
    path: '/locations/top-flooring-companies-pinellas-park',
    top: true,
    photo: 3,
    blurb:
      'Pinellas Park is central Pinellas - ranch homes, additions, and full-house re-floors. We pull the old floor, prep the substrate, and install LVP, hardwood, or tile with one crew from demolition to baseboards.',
  }),
  'spring-hill': makeArea({
    key: 'spring-hill',
    city: 'Spring Hill',
    path: '/locations/top-flooring-companies-spring-hill',
    top: true,
    photo: 4,
    blurb:
      'Spring Hill sits north of Tampa Bay, a drive we make regularly for whole-house luxury vinyl, hardwood, and tile. Same measure, same written price, same crew - we do not treat it as a distant add-on.',
  }),
  riverview: makeArea({
    key: 'riverview',
    city: 'Riverview',
    path: '/locations/top-flooring-companies-riverview',
    top: true,
    photo: 5,
    blurb:
      'Riverview is south Hillsborough growth - new builds, big great rooms, and plenty of LVP. We install luxury vinyl, porcelain tile, and hardwood, and we sequence the job so you are not living on plywood for a month.',
  }),
  'st-petersburg': makeArea({
    key: 'st-petersburg',
    city: 'St. Petersburg',
    path: '/top-flooring-companies-st-petersburg',
    skipRoute: true,
    top: true,
    photo: 0,
    blurb:
      'St. Petersburg is our second listing - Pinellas homes, condos and waterfront houses across the bay. The St. Petersburg page has that crew, that phone number, and the towns we cover from there.',
  }),
  largo: makeArea({
    key: 'largo',
    city: 'Largo',
    path: '/locations/largo',
    photo: 1,
    blurb:
      'Largo is central Pinellas - family homes, open plans and a lot of luxury vinyl. We drive from Tampa for whole-house LVP, hardwood and tile, with the same written price and the same crew that measured the rooms.',
  }),
  'tarpon-springs': makeArea({
    key: 'tarpon-springs',
    city: 'Tarpon Springs',
    path: '/locations/tarpon-springs',
    photo: 2,
    blurb:
      'Tarpon Springs bungalows, sponge-dock cottages and newer builds north of the bridges all take Gulf humidity. We install waterproof LVP, porcelain tile and hardwood specified for the room, not a catalogue default.',
  }),
  'safety-harbor': makeArea({
    key: 'safety-harbor',
    city: 'Safety Harbor',
    path: '/locations/safety-harbor',
    photo: 3,
    blurb:
      'Safety Harbor sits on the north bay - downtown bungalows and waterfront houses that need a floor that looks right in an older plan. We install luxury vinyl, tile and hardwood with one Tampa Bay crew from measure to walkthrough.',
  }),
  'new-port-richey': makeArea({
    key: 'new-port-richey',
    city: 'New Port Richey',
    path: '/locations/new-port-richey',
    photo: 4,
    blurb:
      'New Port Richey is west Pasco - ranch homes, river lots and re-floors we run as a regular Tampa Bay job, not a distant add-on. Luxury vinyl, hardwood and tile, itemised before a plank goes down.',
  }),
  lutz: makeArea({
    key: 'lutz',
    city: 'Lutz',
    path: '/locations/lutz',
    photo: 5,
    blurb:
      'Lutz sits on the north edge of Tampa - suburban houses, lake lots and open plans that want one floor through the living areas. We moisture-test the slab and install LVP, hardwood and porcelain with the crew that priced it.',
  }),
  'land-o-lakes': makeArea({
    key: 'land-o-lakes',
    city: "Land O' Lakes",
    path: '/locations/land-o-lakes',
    photo: 0,
    blurb:
      "Land O' Lakes is Pasco growth - new construction, big great rooms and plenty of luxury vinyl over slab. We test moisture, level where it needs it, and install LVP, tile or engineered hardwood so the floor stays flat through August.",
  }),
  'apollo-beach': makeArea({
    key: 'apollo-beach',
    city: 'Apollo Beach',
    path: '/locations/apollo-beach',
    photo: 1,
    blurb:
      'Apollo Beach is south Hillsborough waterfront - sliders, sand and humidity that punish the wrong floor. Waterproof LVP and porcelain are the usual call; hardwood goes down where the room can take it, after a reading, not before.',
  }),
  ruskin: makeArea({
    key: 'ruskin',
    city: 'Ruskin',
    path: '/locations/ruskin',
    photo: 2,
    blurb:
      'Ruskin sits on the south bay, between agricultural land and new subdivisions. We install luxury vinyl, tile and hardwood in both, sequenced so you are not living on plywood for a month.',
  }),
  valrico: makeArea({
    key: 'valrico',
    city: 'Valrico',
    path: '/locations/valrico',
    photo: 3,
    blurb:
      'Valrico is east of Brandon - family homes that need a floor that survives kids, dogs and a Florida summer. Same Tampa crew, same itemised price, luxury vinyl, hardwood and porcelain tile.',
  }),
  lithia: makeArea({
    key: 'lithia',
    city: 'Lithia',
    path: '/locations/lithia',
    photo: 4,
    blurb:
      'Lithia is further east Hillsborough - newer builds and larger lots where a whole-house LVP or hardwood job is the norm. We measure, write the price, and install with one crew so the handoff never happens.',
  }),
  oldsmar: makeArea({
    key: 'oldsmar',
    city: 'Oldsmar',
    path: '/locations/oldsmar',
    photo: 5,
    blurb:
      'Oldsmar sits between Tampa and the north bay - ranch homes, townhouses and remodels that have to match what is already there. We install luxury vinyl, tile and hardwood so the new floor belongs in the house, not a showroom leftover.',
  }),
}

export const areaPageHref = (city) =>
  Object.values(AREA_PAGES).find((a) => a.city.toLowerCase() === city.toLowerCase())?.path ??
  null

export const MAIN_AREA_INTRO =
  'We cover Tampa Bay from New Port Richey and Spring Hill down to Ruskin and Apollo Beach, and across the bay to Clearwater, Dunedin, Tarpon Springs and St. Petersburg.'

export const NAV_AREAS = Object.values(AREA_PAGES).map((a) => ({
  href: a.path,
  label: a.city,
}))

