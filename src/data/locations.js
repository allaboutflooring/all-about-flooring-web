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
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214711.87716437018!2d-82.69306759999999!3d27.79405895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xedfc062775751b5%3A0x86c4f67f47e8713!2sALL%20ABOUT%20FLOORING%20ST.%20PETERSBURG!5e1!3m2!1sen!2s!4v1788335807294!5m2!1sen!2s',
  mapsShareUrl: 'https://maps.app.goo.gl/CoHyWqmuxMLeoMcb8',
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
  odessa: {
    ...makeArea({
      key: 'odessa',
      city: 'Odessa',
      path: '/locations/odessa',
      photo: 0,
      blurb:
        'Odessa sits on the northwest edge of Tampa Bay, where new builds, ranch homes, and lakefront houses all need floors that hold up to sand, pets, and Florida humidity. We install luxury vinyl plank, porcelain tile, and hardwood across Odessa and the towns next to it.',
    }),
    // Optimised Odessa location page. heroTitle is the supplied H1; metaTitle/
    // metaDescription override the generic area defaults; `seo` drives the
    // shared ServiceSeoContent flow (why-choose / featured / sections /
    // process / FAQ) exactly like the service pages. Authored Why Choose Us +
    // Our Process; the section prose/feature copy and FAQs are the supplied
    // content verbatim.
    heroTitle: 'Flooring Company in Odessa',
    metaTitle: 'Flooring Company in Odessa - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors, Flooring Company in Odessa for floor installation, replacement, and residential flooring upgrades. Call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Odessa',
        intro:
          'As a Flooring Company in Odessa, we pair careful subfloor preparation with precise installation and clear communication, so the finished floor holds up to Florida humidity and everyday family life across Starkey Ranch, Keystone, and the surrounding neighborhoods.',
        points: [
          'Moisture-tested subfloor prep suited to Odessa slabs and humidity',
          'Material guidance matched to kitchens, bedrooms, and living areas',
          'Precise plank and tile alignment for clean, consistent lines',
          'One crew from the first measure to the final walkthrough',
          'Clear written pricing and steady communication throughout',
          'Local knowledge of Odessa neighborhoods and home styles',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Odessa Homes',
        intro:
          'A clear, practical path from the first visit to the finished floor, tailored to your Odessa home.',
        steps: [
          {
            title: 'Consultation & Assessment',
            body: 'We visit your Odessa home, measure each room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Flooring & Material Planning',
            body: 'We help you choose materials suited to each room’s use, existing finishes, and maintenance expectations, with an itemised written price.',
          },
          {
            title: 'Preparation & Installation',
            body: 'We moisture-test and level the subfloor, then install each plank or tile with consistent spacing, clean cuts, and careful transitions between rooms.',
          },
          {
            title: 'Final Inspection',
            body: 'We review alignment, edges, and finish with you and clean the space before the project is complete.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Odessa Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring', d: 'Choose durable flooring that handles daily cooking, foot traffic, spills, and changing household routines while complementing your kitchen’s cabinets and finishes.' },
            { h: 'Bedroom Flooring', d: 'Create a more comfortable bedroom with flooring selected for warmth, appearance, maintenance, and the overall style of your Odessa home.' },
            { h: 'Living Space Flooring', d: 'Refresh living rooms and open areas with flooring that supports everyday activity while creating a cohesive look across connected spaces.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Odessa',
          body: [
            'Homeowners looking for a Flooring Company in Odessa can choose flooring that improves comfort, appearance, and everyday durability. We install flooring suited to busy family spaces, updated interiors, and homes preparing for resale, with careful attention to surface preparation and finishing details.',
            'From Starkey Ranch to The Eagles and the Keystone area, homes vary in style and flooring needs. We help homeowners select practical materials for kitchens, bedrooms, and living areas while considering existing finishes, room usage, and maintenance expectations. Our goal is a clean, dependable installation that complements your Odessa home.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Odessa',
          body: [
            'Experienced flooring contractors help Odessa homeowners turn worn or outdated floors into practical, attractive spaces. We focus on accurate installation, proper preparation, and finishing details that contribute to a consistent result. Whether you’re updating a family room, replacing damaged flooring, or refreshing a property before selling, our approach is tailored to your project.',
            'We serve homeowners across communities including Van Dyke Farms, Ivy Lake Estates, and areas near Lake Rogers Park. As a local Flooring Company in Odessa, we understand the varied residential styles throughout the area and help customers choose flooring that fits their home’s layout, daily use, and desired appearance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Odessa',
          body: [
            'Homeowners in Odessa can rely on All About Flooring Tampa Bay Contractors for professional flooring services designed around their property’s needs. From new flooring installations to replacements and upgrades, our team focuses on quality workmanship, dependable materials, and a finished result that complements each space.',
            'We serve Odessa and nearby communities including Trinity, Westchase, and Oldsmar. Our service area includes neighborhoods near Gunn Highway, Keystone, and the Suncoast Parkway, with convenient access to local destinations such as Starkey Ranch and Odessa Community Park.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring works well for homes in Starkey Ranch?',
          a: 'Homes in Starkey Ranch often have open layouts and active household spaces. We can help you choose flooring that suits daily foot traffic, room use, and the existing interior style.',
        },
        {
          q: 'Can you update flooring in older Odessa homes without remodeling everything?',
          a: 'Yes. If your Odessa home has worn or outdated floors, we can focus on the rooms that need attention without requiring a full-home renovation.',
        },
        {
          q: 'Do you install flooring in the Keystone-Odessa area?',
          a: 'Yes. We serve homeowners throughout the Keystone-Odessa area and can help with flooring projects based on the property’s layout, existing surfaces, and desired finish.',
        },
        {
          q: 'What should Odessa homeowners consider when replacing flooring before selling?',
          a: 'Flooring condition can affect how a home looks during showings. We can help select an attractive, practical flooring option that complements the home’s existing design without overcomplicating the project.',
        },
        {
          q: 'Can you help coordinate flooring with an Odessa kitchen or living-room update?',
          a: 'Yes. We can consider your cabinets, walls, adjoining rooms, and existing finishes when selecting flooring, helping create a more cohesive look throughout the updated space.',
        },
      ],
    },
  },
  carrollwood: {
    ...makeArea({
      key: 'carrollwood',
      city: 'Carrollwood',
      path: '/locations/carrollwood',
      photo: 1,
      blurb:
        'Carrollwood is established north Tampa - family houses, lake lots, and remodels that have to match what is already there. We install luxury vinyl, hardwood, and tile so the new floor looks like it belongs in the house, not like a showroom leftover.',
    }),
    // Optimised Carrollwood location page — same structure as the Odessa
    // template (rendered by the shared AreaPage `seo` flow). Authored Why
    // Choose Us + Our Process; section prose/feature copy and FAQs are the
    // supplied content verbatim.
    heroTitle: 'Flooring Company in Carrollwood',
    metaTitle: 'Flooring Company in Carrollwood - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in Carrollwood from All About Flooring Tampa Bay Contractors. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Carrollwood',
        intro:
          'All About Flooring Tampa Bay Contractors has spent years installing floors across Tampa Bay’s established neighborhoods. As a Flooring Company in Carrollwood, we prepare each subfloor properly, install with precision, and keep you informed from the first measure to the final walkthrough — so the result fits your home and holds up to everyday life.',
        points: [
          'Subfloor moisture testing and levelling before any flooring goes down',
          'Honest material advice for kitchens, bedrooms, and busy living areas',
          'Tight, even seams and transitions between connected rooms',
          'The same crew measures, preps, and installs — no rotating subs',
          'A fixed, itemised written price and regular progress updates',
          'Familiarity with Carrollwood’s established homes and mature neighborhoods',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Carrollwood Homes',
        intro:
          'A straightforward path from the first visit to the finished floor, planned around your Carrollwood home.',
        steps: [
          {
            title: 'Consultation & Measure',
            body: 'We walk your Carrollwood rooms, take exact measurements, and talk through how each space is used before suggesting materials.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you compare flooring suited to traffic, style, and budget, then put an itemised, fixed price in writing.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with tight seams, clean cuts, and careful transitions between rooms.',
          },
          {
            title: 'Walkthrough & Completion',
            body: 'We review the finished floor with you, handle any final details, and leave the space clean and ready to use.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Carrollwood Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring', d: 'Choose flooring that complements your Carrollwood kitchen while handling everyday foot traffic, spills, and active household routines. We consider the room’s layout and existing finishes to create a practical, cohesive result.' },
            { h: 'Bedroom Flooring', d: 'Refresh Carrollwood bedrooms with flooring that supports comfort and complements the home’s interior style. We help homeowners select options suited to personal preferences, room use, and the desired look.' },
            { h: 'Living Space Flooring', d: 'Update living rooms and open areas with flooring designed around daily activity and the surrounding interior. Our installation approach emphasizes consistent transitions, clean finishes, and a cohesive appearance throughout connected spaces.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Carrollwood',
          body: [
            'Choosing the right flooring can improve how a Carrollwood home looks, feels, and functions every day. All About Flooring Tampa Bay Contractors provides professional installation for homeowners replacing worn floors, updating interiors, or preparing a property for sale. As a Flooring Company in Carrollwood, we focus on dependable installation, careful preparation, and finishes that complement each room.',
            'From Carrollwood Village to Forest Hills and areas near Lake Carroll, homes have different layouts and flooring needs. We help homeowners select practical options for busy family spaces, renovated rooms, and established properties while considering durability, appearance, and maintenance for everyday living.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Carrollwood',
          body: [
            'Experienced flooring contractors can make a noticeable difference when replacing outdated surfaces or completing a home renovation. All About Flooring Tampa Bay Contractors focuses on proper preparation, accurate installation, and attention to finishing details. Whether you’re updating a family room, refreshing an older property, or replacing flooring before listing your home, we tailor the work to your goals.',
            'We serve homeowners throughout Carrollwood, including areas near Carrollwood Village, Forest Hills, and Veterans Expressway. As a local Flooring Company in Carrollwood, we understand the variety of established homes and residential properties in the area and help customers choose flooring suited to their space, lifestyle, and design preferences.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Carrollwood',
          body: [
            'All About Flooring Tampa Bay Contractors provides Carrollwood homeowners with dependable flooring solutions for renovations, replacements, and property improvements. We help customers choose practical flooring options that suit their lifestyle while delivering careful installation and professional results throughout homes and commercial spaces.',
            'Our Carrollwood service area extends into nearby communities such as Northdale, Tampa Palms, and Westchase. We work throughout neighborhoods around Dale Mabry Highway and Linebaugh Avenue, including areas near Carrollwood Village Park, Carrollwood Country Club, and local shopping destinations.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you provide flooring services in Carrollwood Village?',
          a: 'Yes. We provide flooring services for homeowners in Carrollwood Village and surrounding Carrollwood communities, with options based on each home’s layout, existing surfaces, and renovation goals.',
        },
        {
          q: 'Can you replace flooring in an established Carrollwood home?',
          a: 'Yes. Many established Carrollwood homes need flooring updates without a complete renovation. We can focus on the rooms or areas requiring new flooring while considering how the new material works with the home’s existing interior.',
        },
        {
          q: 'What flooring should I consider for a busy Carrollwood family home?',
          a: 'The best option depends on household traffic, room usage, maintenance preferences, and design goals. We can help compare suitable flooring choices for active kitchens, living areas, bedrooms, and other frequently used spaces.',
        },
        {
          q: 'Can you help update flooring before selling a Carrollwood property?',
          a: 'Yes. If worn or outdated flooring is affecting the home’s presentation, we can help you select a practical replacement that complements the existing interior and creates a more refreshed appearance for prospective buyers.',
        },
        {
          q: 'Do you serve homes near Veterans Expressway in Carrollwood?',
          a: 'Yes. We serve residential properties throughout Carrollwood, including areas conveniently located near Veterans Expressway. Contact us to confirm service availability for your specific project.',
        },
      ],
    },
  },
  'temple-terrace': {
    ...makeArea({
      key: 'temple-terrace',
      city: 'Temple Terrace',
      path: '/locations/temple-terrace',
      photo: 2,
      blurb:
        'Temple Terrace sits between the university and the river, with ranch homes and mid-century plans that need a floor that can take traffic. We moisture-test the slab, level where it needs it, and install LVP, hardwood, and tile with one crew.',
    }),
    // Optimised Temple Terrace location page — same structure as the Odessa
    // template (shared AreaPage `seo` flow). Authored Why Choose Us + Our
    // Process; section prose/feature copy and FAQs are the supplied content
    // verbatim.
    heroTitle: 'Flooring Company in Temple Terrace',
    metaTitle: 'Flooring Company in Temple Terrace - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in Temple Terrace from All About Flooring Tampa Bay Contractors. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Temple Terrace',
        intro:
          'All About Flooring Tampa Bay Contractors knows the ranch homes and mid-century layouts common between the university and the river. As a Flooring Company in Temple Terrace, we test and prep the subfloor, fit each board and tile precisely, and keep the plan clear from the first measure to the final walkthrough.',
        points: [
          'Moisture testing and levelling built for Temple Terrace slabs',
          'Straightforward material advice for kitchens, bedrooms, and living areas',
          'Even seams and clean transitions between connected rooms',
          'One dedicated crew handling prep through installation',
          'A fixed, itemised written quote before any work begins',
          'Real familiarity with Riverhills and Temple Terrace Estates homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Temple Terrace Homes',
        intro:
          'A clear path from the first visit to the finished floor, shaped around your Temple Terrace home.',
        steps: [
          {
            title: 'In-Home Consultation',
            body: 'We visit your Temple Terrace home, measure each room, and review traffic, conditions, and goals before suggesting an approach.',
          },
          {
            title: 'Material & Layout Planning',
            body: 'We match flooring to how each room is used and to your existing finishes, then confirm it all in an itemised written price.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions room to room.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We check alignment, edges, and finish together and leave the space clean before we call the project done.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Temple Terrace Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring', d: 'Refresh your Temple Terrace kitchen with flooring that complements existing cabinets and finishes while handling everyday activity. We consider room layout, household use, and desired appearance when planning the installation.' },
            { h: 'Bedroom Flooring', d: 'Create a more comfortable bedroom with flooring selected around your preferred style and daily needs. Our installation work helps give Temple Terrace bedrooms a clean, finished appearance that fits the surrounding interior.' },
            { h: 'Living Space Flooring', d: 'Update living rooms and shared areas with flooring that supports everyday foot traffic while complementing connected spaces. We focus on clean layouts, consistent transitions, and finishing details for a cohesive result.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Temple Terrace',
          body: [
            'Updating your floors can give a Temple Terrace home a cleaner appearance while improving comfort and everyday functionality. All About Flooring Tampa Bay Contractors provides professional installation for homeowners replacing worn flooring, refreshing older interiors, or preparing a property for sale. As a Flooring Company in Temple Terrace, we focus on dependable workmanship, careful preparation, and flooring choices suited to each room.',
            'From Riverhills to Temple Terrace Estates and areas near the Hillsborough River, local homes have varied styles and layouts. We help homeowners select practical flooring for busy family rooms, renovated spaces, and established properties while considering durability, appearance, and maintenance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Temple Terrace',
          body: [
            'Professional flooring installation can help transform outdated or worn interiors without requiring a complete home renovation. All About Flooring Tampa Bay Contractors emphasizes proper preparation, accurate installation, and careful finishing. Whether you’re replacing flooring in a family room, updating an older property, or improving a home before selling, we tailor the work to your specific needs.',
            'We serve homeowners throughout Temple Terrace, including Riverhills, Temple Terrace Estates, and neighborhoods near Busch Boulevard. As a local Flooring Company in Temple Terrace, we understand the area’s mix of established residences and updated homes and help customers choose flooring that complements their property’s layout and everyday lifestyle.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Temple Terrace',
          body: [
            'Residents of Temple Terrace can turn to All About Flooring Tampa Bay Contractors for professional flooring installation and replacement services. Whether updating a single room or completing a larger renovation, our team provides quality-focused workmanship and flooring solutions selected for durability, appearance, and everyday use.',
            'We serve Temple Terrace and nearby areas including Tampa, Brandon, and Thonotosassa. Customers throughout neighborhoods near 56th Street, Fowler Avenue, and the Hillsborough River can access our flooring services, including properties close to Temple Terrace Nature Preserve and Riverhills Park.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you provide flooring services in Riverhills, Temple Terrace?',
          a: 'Yes. We provide flooring services throughout Temple Terrace, including Riverhills and surrounding residential communities. We can discuss your home’s existing flooring, room layout, and goals before recommending suitable options.',
        },
        {
          q: 'Can you update flooring in an older Temple Terrace home?',
          a: 'Yes. Many established homes can benefit from targeted flooring updates without undergoing a complete remodel. We can focus on specific rooms while helping the new flooring work with the home’s existing interior.',
        },
        {
          q: 'Can you replace flooring in a Temple Terrace home before selling?',
          a: 'Yes. If outdated or worn flooring affects your home’s presentation, we can help you choose a practical replacement that gives key living areas a more refreshed and appealing appearance.',
        },
        {
          q: 'What should Temple Terrace homeowners consider when choosing flooring?',
          a: 'Consider the room’s purpose, household traffic, maintenance preferences, existing interior finishes, and desired appearance. We can help you evaluate flooring options based on how each space is used.',
        },
        {
          q: 'Do you serve homes near Busch Boulevard in Temple Terrace?',
          a: 'Yes. We serve residential properties throughout Temple Terrace, including neighborhoods and homes near Busch Boulevard. Contact All About Flooring Tampa Bay Contractors to discuss your specific flooring project.',
        },
      ],
    },
  },
  'citrus-park': {
    ...makeArea({
      key: 'citrus-park',
      city: 'Citrus Park',
      path: '/locations/citrus-park',
      photo: 3,
      blurb:
        'Citrus Park is northwest Tampa growth - newer builds, open plans, and lots of tile and LVP. We work through the house so kitchens, living rooms, and wet areas match, with a written price before a plank goes down.',
    }),
    // Optimised Citrus Park location page — same structure as the Odessa
    // template (shared AreaPage `seo` flow). Authored Why Choose Us + Our
    // Process; section prose/feature copy and FAQs are the supplied content
    // verbatim.
    heroTitle: 'Flooring Company in Citrus Park',
    metaTitle: 'Flooring Company in Citrus Park - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in Citrus Park from All About Flooring Tampa Bay Contractors. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Citrus Park',
        intro:
          'Citrus Park is northwest Tampa growth — open-plan new builds alongside established homes. As a Flooring Company in Citrus Park, we work through the whole house so kitchens, living rooms, and wet areas match, moisture-test and level before we start, and put a fixed price in writing.',
        points: [
          'Whole-house planning so open-plan rooms and wet areas line up',
          'Moisture testing and levelling before the first plank goes down',
          'Practical LVP, tile, and hardwood advice for newer and older builds',
          'One crew from the first measure through the final walkthrough',
          'A fixed, itemised written price with no surprise add-ons',
          'Local knowledge of Citrus Park’s newer developments and layouts',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Citrus Park Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Citrus Park home.',
        steps: [
          {
            title: 'Home Visit & Measure',
            body: 'We visit your Citrus Park home, measure every room, and review layout, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material & Layout Planning',
            body: 'We help you choose flooring for open-plan and wet areas that suits daily use and existing finishes, confirmed in a written itemised price.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the slab, then install with consistent spacing, clean cuts, and matched transitions between connected rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We check alignment, transitions, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Citrus Park Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring', d: 'Give your Citrus Park kitchen a refreshed foundation with flooring suited to frequent foot traffic, spills, and everyday activity. We consider existing cabinets, finishes, and room layouts when planning your flooring installation.' },
            { h: 'Bedroom Flooring', d: 'Create a comfortable, polished bedroom with flooring that complements your home’s interior style. We help Citrus Park homeowners choose options suited to personal preferences, room use, and the overall appearance they want.' },
            { h: 'Living Space Flooring', d: 'Update living rooms and shared spaces with flooring designed for everyday household activity. Our installation focuses on clean layouts, consistent transitions, and finishing details that help connected areas feel cohesive.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Citrus Park',
          body: [
            'Fresh flooring can change the feel of a Citrus Park home while making everyday rooms easier to enjoy and maintain. All About Flooring Tampa Bay Contractors provides professional installation for homeowners replacing worn surfaces, updating dated interiors, or preparing a property for sale. As a Flooring Company in Citrus Park, we focus on careful preparation, accurate installation, and finishes that complement each room.',
            'From Carrollwood to Westchase and homes near Citrus Park Town Center, properties vary in age, layout, and design. We help homeowners choose practical flooring for busy family areas, remodeled rooms, and established homes while considering appearance, durability, and daily use.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Citrus Park',
          body: [
            'Professional flooring installation can refresh a home without requiring a complete interior renovation. All About Flooring Tampa Bay Contractors focuses on proper preparation, accurate fitting, and careful finishing details. Whether you’re updating a family room, replacing worn flooring, or improving a property before putting it on the market, we tailor the work to your home’s needs.',
            'We serve homeowners throughout Citrus Park, including Carrollwood, Westchase, and areas near Veterans Expressway. As a local Flooring Company in Citrus Park, we understand the area’s mix of established homes and newer residential properties and help customers select flooring that suits their space, lifestyle, and design preferences.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Citrus Park',
          body: [
            'All About Flooring Tampa Bay Contractors helps Citrus Park homeowners transform their interiors with reliable flooring services. From replacing worn surfaces to installing new flooring during remodeling projects, our team delivers professional workmanship and practical solutions that enhance comfort, appearance, and long-term property value.',
            'Our Citrus Park service area includes nearby communities such as Carrollwood, Westchase, and Town ’n’ Country. We serve neighborhoods surrounding Citrus Park Town Center, Gunn Highway, and Veterans Expressway, as well as homes near Upper Tampa Bay Park and local residential developments.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you provide flooring services near Citrus Park Town Center?',
          a: 'Yes. We provide flooring services throughout Citrus Park and nearby residential areas, including homes located near Citrus Park Town Center. We can discuss your property’s layout, existing flooring, and project goals.',
        },
        {
          q: 'Can you update flooring in an older Citrus Park home?',
          a: 'Yes. We can help homeowners update individual rooms or larger areas without requiring a complete home renovation. The new flooring can be selected to complement existing finishes and the home’s current design.',
        },
        {
          q: 'Can you replace flooring before selling a Citrus Park home?',
          a: 'Yes. If worn or outdated flooring is affecting the appearance of your property, we can help you select a practical replacement that gives important living spaces a cleaner, more refreshed look.',
        },
        {
          q: 'What should I consider when choosing flooring for a Citrus Park family home?',
          a: 'Consider household traffic, room function, maintenance preferences, existing finishes, and the appearance you want to achieve. We can help you compare suitable flooring options based on how your family uses each space.',
        },
        {
          q: 'Do you serve homes near Veterans Expressway in Citrus Park?',
          a: 'Yes. We serve residential properties throughout Citrus Park, including neighborhoods and homes near Veterans Expressway. Contact All About Flooring Tampa Bay Contractors to discuss your specific flooring project.',
        },
      ],
    },
  },
  brandon: {
    ...makeArea({
      key: 'brandon',
      city: 'Brandon',
      path: '/locations/top-flooring-companies-brandon',
      top: true,
      photo: 4,
      blurb:
        'Brandon is east of Tampa and full of family homes that need a floor that survives kids, dogs, and a Florida summer. We install luxury vinyl plank, hardwood, and porcelain tile across Brandon with a local crew, not a rotating sub.',
    }),
    // Optimised Brandon location page — same structure as the Odessa template
    // (shared AreaPage `seo` flow). Authored Why Choose Us + Our Process;
    // section prose/feature copy and FAQs are the supplied content verbatim.
    heroTitle: 'Flooring Company in Brandon',
    metaTitle: 'Flooring Company in Brandon - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors, Flooring Company in Brandon for floor installation, replacement, and residential flooring upgrades. Call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Brandon',
        intro:
          'Brandon spans everything from established family homes to newer FishHawk Ranch communities. As a Flooring Company in Brandon, we prep each subfloor properly, install with precision, and keep the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Subfloor moisture testing and levelling before installation begins',
          'Down-to-earth material advice for kitchens, bedrooms, and living areas',
          'Even seams and matched transitions across connected rooms',
          'One crew handling prep through installation — no rotating subs',
          'A fixed, itemised written quote before work starts',
          'Familiarity with Brandon, Bloomingdale, and FishHawk Ranch homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Brandon Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Brandon home.',
        steps: [
          {
            title: 'Consultation & Measure',
            body: 'We visit your Brandon home, measure each room, and review traffic, layout, and goals before recommending materials.',
          },
          {
            title: 'Material & Quote',
            body: 'We help you compare flooring suited to daily use and your budget, then confirm everything in an itemised written price.',
          },
          {
            title: 'Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with clean cuts, consistent spacing, and tidy room-to-room transitions.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before we call it done.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Brandon Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring', d: 'Refresh your Brandon kitchen with flooring that complements existing cabinets while handling spills, foot traffic, and daily household activity. We consider room layout and interior finishes for a cohesive result.' },
            { h: 'Bedroom Flooring', d: 'Create a comfortable bedroom with flooring that matches your preferred style and everyday needs. We help Brandon homeowners select options that complement existing interiors while providing a polished, inviting finish.' },
            { h: 'Living Space Flooring', d: 'Update living rooms and shared areas with flooring suited to everyday activity. We focus on clean layouts, consistent transitions, and finishing details that help connected spaces look cohesive.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Brandon',
          body: [
            'Fresh flooring can improve the comfort, appearance, and functionality of a Brandon home. All About Flooring Tampa Bay Contractors provides professional installation for homeowners replacing worn surfaces, updating dated interiors, or preparing a property for sale. As a Flooring Company in Brandon, we focus on careful preparation, accurate installation, and finishes suited to each room.',
            'From Bloomingdale to FishHawk Ranch and homes near Brandon Town Center, properties have different layouts and flooring needs. We help homeowners choose practical options for busy family spaces, renovated rooms, and established homes while considering durability, appearance, and everyday maintenance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Brandon',
          body: [
            'Professional flooring installation can refresh a Brandon home without requiring a complete renovation. All About Flooring Tampa Bay Contractors focuses on proper preparation, accurate fitting, and careful finishing details. Whether you’re updating a family room, replacing worn flooring, or improving a property before selling, we tailor the work around your home’s needs.',
            'We serve homeowners throughout Brandon, including Bloomingdale, FishHawk Ranch, and areas near State Road 60. As a local Flooring Company in Brandon, we understand the area’s mix of established residences and newer communities and help customers choose flooring suited to their property’s layout, lifestyle, and design preferences.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Brandon',
          body: [
            'Brandon homeowners can count on All About Flooring Tampa Bay Contractors for professional flooring installation, replacement, and remodeling support. We provide carefully planned flooring solutions for homes and businesses, with attention to material selection, installation quality, and the overall look and function of each space.',
            'We proudly serve Brandon and surrounding areas including Riverview, Valrico, and Seffner. Our service area covers communities near Brandon Town Center, Bloomingdale Avenue, and State Road 60, including neighborhoods close to Paul Saunders Park and local commercial districts.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you provide flooring services for homes in Bloomingdale near Brandon?',
          a: 'Yes. We serve homeowners throughout Brandon and nearby residential communities such as Bloomingdale. We can evaluate your flooring needs and help you select options that fit your home’s layout and renovation goals.',
        },
        {
          q: 'Can you update flooring in an established Brandon home without remodeling every room?',
          a: 'Yes. Flooring updates can be focused on specific areas that need attention, such as a worn living room, outdated bedroom, or heavily used portion of the home, without requiring a complete renovation.',
        },
        {
          q: 'Can you replace flooring in a Brandon home before putting it on the market?',
          a: 'Yes. If worn flooring makes your property feel dated, we can help you choose a practical replacement that creates a cleaner, more refreshed appearance in important living areas.',
        },
        {
          q: 'What should FishHawk Ranch homeowners consider when choosing new flooring?',
          a: 'Consider the room’s function, household traffic, maintenance preferences, existing finishes, and overall design. We can help you compare suitable flooring options based on how your household uses each space.',
        },
        {
          q: 'Do you serve homes near Brandon Town Center?',
          a: 'Yes. We provide flooring services throughout Brandon, including residential areas near Brandon Town Center. Contact All About Flooring Tampa Bay Contractors to discuss your flooring project.',
        },
      ],
    },
  },
  'palm-harbor': {
    ...makeArea({
      key: 'palm-harbor',
      city: 'Palm Harbor',
      path: '/locations/top-flooring-companies-palm-harbor',
      top: true,
      photo: 5,
      blurb:
        'Palm Harbor sits on the Pinellas side, where humidity, sand, and sliders punish the wrong floor. LVP and porcelain are our first recommendations here; hardwood goes down where the room can take it, specified per job.',
    }),
    // Optimised Palm Harbor location page — same structure as the Odessa
    // template (shared AreaPage `seo` flow). Authored Why Choose Us + Our
    // Process; section prose/feature copy and FAQs are the supplied content
    // verbatim.
    heroTitle: 'Flooring Company in Palm Harbor',
    metaTitle: 'Flooring Company in Palm Harbor - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in Palm Harbor from All About Flooring Tampa Bay Contractors. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Palm Harbor',
        intro:
          'Palm Harbor sits on the Pinellas side, where humidity, sand, and sliders punish the wrong floor. As a Flooring Company in Palm Harbor, we recommend materials that suit a Gulf-side climate, prep and level the subfloor properly, and keep the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Waterproof-first material advice for humidity, sand, and sliders',
          'Subfloor moisture testing and levelling before installation',
          'Even seams and clean transitions across connected rooms',
          'One crew from the first measure through the final walkthrough',
          'A fixed, itemised written quote before any work begins',
          'Local knowledge of Lansbrook, Crystal Beach, and East Lake homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Palm Harbor Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Palm Harbor home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Palm Harbor home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to a Gulf-side climate and your budget, then confirm it in an itemised written price.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Palm Harbor Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring', d: 'Refresh your Palm Harbor kitchen with flooring suited to daily foot traffic, spills, and household activity. We consider existing cabinets, finishes, and room layouts to create a practical, cohesive result.' },
            { h: 'Bedroom Flooring', d: 'Create a comfortable bedroom with flooring that complements your home’s interior style and daily needs. We help Palm Harbor homeowners choose options that provide a polished appearance while fitting their preferences.' },
            { h: 'Living Space Flooring', d: 'Update living rooms and shared areas with flooring designed for everyday activity. We focus on clean layouts, consistent transitions, and finishing details that help connected spaces feel cohesive.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Palm Harbor',
          body: [
            'New flooring can refresh the appearance and everyday comfort of a Palm Harbor home. All About Flooring Tampa Bay Contractors provides professional installation for homeowners replacing worn surfaces, updating older interiors, or preparing a property for sale. As a Flooring Company in Palm Harbor, we focus on careful preparation, accurate installation, and finishes that complement each room.',
            'From Lansbrook to Crystal Beach and homes near John Chesnut Sr. Park, properties vary in age, layout, and style. We help homeowners select practical flooring for busy family areas, renovated rooms, and established homes while considering durability, appearance, and everyday maintenance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Palm Harbor',
          body: [
            'Professional flooring installation can transform an outdated Palm Harbor interior without requiring a complete renovation. All About Flooring Tampa Bay Contractors emphasizes proper preparation, accurate fitting, and careful finishing. Whether you’re updating a family room, replacing worn flooring, or improving a property before selling, we tailor the work to your home’s needs.',
            'We serve homeowners throughout Palm Harbor, including Lansbrook, Crystal Beach, and areas near U.S. Highway 19. As a local Flooring Company in Palm Harbor, we understand the area’s mix of established neighborhoods and newer residences and help customers choose flooring suited to their property’s layout, lifestyle, and design preferences.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Palm Harbor',
          body: [
            'Homeowners in Palm Harbor choose All About Flooring Tampa Bay Contractors for dependable flooring services that support renovations, replacements, and interior upgrades. Our team works with customers to create flooring solutions that balance style, durability, maintenance needs, and the demands of everyday household activity.',
            'We serve Palm Harbor and nearby communities including Dunedin, Safety Harbor, and Tarpon Springs. Flooring services are available throughout neighborhoods near U.S. Highway 19, East Lake Road, and downtown Palm Harbor, including areas around John Chesnut Sr. Park and local shopping centers.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you provide flooring services in Lansbrook and surrounding Palm Harbor neighborhoods?',
          a: 'Yes. We serve homeowners throughout Palm Harbor, including Lansbrook and nearby residential communities. We can discuss your home’s existing flooring, room layout, and goals to determine suitable options for your project.',
        },
        {
          q: 'Can you update flooring in an established Palm Harbor home?',
          a: 'Yes. We can focus on specific rooms or areas that need attention rather than requiring a complete home renovation. New flooring can also be selected to complement existing finishes and interior features.',
        },
        {
          q: 'Can you replace flooring before selling a Palm Harbor property?',
          a: 'Yes. If worn or outdated floors are affecting your home’s presentation, we can help you select a practical replacement that gives important living spaces a cleaner, more updated appearance.',
        },
        {
          q: 'What should Palm Harbor homeowners consider when choosing flooring?',
          a: 'Consider each room’s purpose, household traffic, maintenance preferences, existing finishes, and desired appearance. We can help you compare appropriate flooring options based on how your household uses the space.',
        },
        {
          q: 'Do you serve homes near U.S. Highway 19 in Palm Harbor?',
          a: 'Yes. We provide flooring services throughout Palm Harbor, including residential areas near U.S. Highway 19. Contact All About Flooring Tampa Bay Contractors to discuss your specific flooring needs.',
        },
      ],
    },
  },
  clearwater: {
    ...makeArea({
      key: 'clearwater',
      city: 'Clearwater',
      path: '/locations/top-flooring-companies-clearwater',
      top: true,
      photo: 0,
      blurb:
        'Clearwater homes and condos see beach traffic, salt air, and tight install windows. We install waterproof luxury vinyl, tile, and hardwood, and we work around building rules when the job is in a stacked unit.',
    }),
    // Optimised Clearwater location page — same structure as the Odessa
    // template (shared AreaPage `seo` flow). Authored Why Choose Us + Our
    // Process; section prose/feature copy and FAQs are the supplied content
    // verbatim.
    heroTitle: 'Flooring Company in Clearwater',
    metaTitle: 'Flooring Company in Clearwater - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in Clearwater from All About Flooring Tampa Bay Contractors. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Clearwater',
        intro:
          'Clearwater homes and condos live with beach traffic, salt air, and tight install windows. As a Flooring Company in Clearwater, we recommend materials that hold up near the Gulf, prep and level the subfloor properly, and keep the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Waterproof-first material advice for salt air and beach traffic',
          'Subfloor moisture testing and levelling before installation',
          'Work scheduled around condo and HOA building rules',
          'Even seams and clean transitions across connected rooms',
          'One crew from the first measure through the final walkthrough',
          'Local knowledge of Clearwater Beach, Island Estates, and Countryside homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Clearwater Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Clearwater home or condo.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Clearwater home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to a coastal climate and your budget, then confirm it in an itemised written price.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Clearwater Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring', d: 'Refresh your Clearwater kitchen with flooring suited to everyday activity, spills, and frequent foot traffic. We consider existing cabinets, finishes, and room layouts to create a practical, cohesive result.' },
            { h: 'Bedroom Flooring', d: 'Create a comfortable bedroom with flooring that complements your home’s interior style and daily needs. We help Clearwater homeowners select options that provide a polished appearance while fitting their preferences.' },
            { h: 'Living Space Flooring', d: 'Update living rooms and shared areas with flooring designed for everyday household activity. We focus on clean layouts, consistent transitions, and finishing details that help connected spaces feel cohesive.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Clearwater',
          body: [
            'New flooring can refresh a Clearwater home while improving comfort and everyday functionality. All About Flooring Tampa Bay Contractors provides professional installation for homeowners replacing worn surfaces, updating dated interiors, or preparing a property for sale. As a Flooring Company in Clearwater, we focus on careful preparation, accurate installation, and finishes suited to each room.',
            'From Clearwater Beach to Island Estates and homes near Coachman Park, properties vary in age, layout, and style. We help homeowners choose practical flooring for busy family areas, remodeled rooms, and established homes while considering durability, appearance, and daily maintenance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Clearwater',
          body: [
            'Professional flooring installation can transform an outdated Clearwater interior without requiring a complete renovation. All About Flooring Tampa Bay Contractors emphasizes proper preparation, accurate fitting, and careful finishing details. Whether you’re updating a family room, replacing worn flooring, or improving a property before selling, we tailor the work to your home’s needs.',
            'We serve homeowners throughout Clearwater, including Clearwater Beach, Island Estates, and areas near Gulf to Bay Boulevard. As a local Flooring Company in Clearwater, we understand the area’s mix of established neighborhoods, coastal properties, and newer residences and help customers choose flooring suited to their property’s layout, lifestyle, and design preferences.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Clearwater',
          body: [
            'All About Flooring Tampa Bay Contractors provides Clearwater residents with professional flooring services for residential improvements and commercial projects. Whether replacing outdated flooring or completing a full interior renovation, our team focuses on reliable installation, suitable materials, and a polished finish built for everyday use.',
            'Our Clearwater service area reaches nearby communities such as Largo, Safety Harbor, and Dunedin. We serve properties around Gulf-to-Bay Boulevard, U.S. Highway 19, and Clearwater Beach, including neighborhoods near Coachman Park, Countryside Mall, and other established local shopping areas.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you provide flooring services for homes near Clearwater Beach?',
          a: 'Yes. We serve homeowners throughout Clearwater, including residential properties near Clearwater Beach. We can discuss your home’s existing flooring, room usage, and project goals to help determine suitable options.',
        },
        {
          q: 'Can you update flooring in an older Clearwater home?',
          a: 'Yes. We can focus on specific rooms or areas that need attention without requiring a complete renovation. New flooring can also be selected to complement existing finishes and the home’s current interior.',
        },
        {
          q: 'Can you replace flooring before selling a Clearwater property?',
          a: 'Yes. If worn or outdated flooring affects your home’s presentation, we can help you select a practical replacement that gives key living spaces a cleaner, more refreshed appearance.',
        },
        {
          q: 'What should Clearwater homeowners consider when choosing flooring?',
          a: 'Consider the room’s purpose, household traffic, maintenance preferences, existing finishes, and desired appearance. We can help compare suitable flooring options based on how each space is used.',
        },
        {
          q: 'Do you serve homes in Island Estates and nearby Clearwater communities?',
          a: 'Yes. We provide flooring services throughout Clearwater, including Island Estates and surrounding residential areas. Contact All About Flooring Tampa Bay Contractors to discuss your specific flooring project.',
        },
      ],
    },
  },
  dunedin: makeArea({
    key: 'dunedin',
    city: 'Dunedin',
    path: '/locations/top-flooring-companies-dunedin',
    top: true,
    photo: 1,
    blurb:
      'Dunedin bungalows, cottages, and downtown condos need floors that look right in an older house and still live like a new one. We install LVP, hardwood, and tile, and we match transitions so rooms do not fight each other.',
  }),
  'wesley-chapel': {
    ...makeArea({
      key: 'wesley-chapel',
      city: 'Wesley Chapel',
      path: '/locations/top-flooring-companies-wesley-chapel',
      top: true,
      photo: 2,
      blurb:
        'Wesley Chapel is new construction and open-plan living. Builders leave a slab; we moisture-test it, level it, and install luxury vinyl, tile, or engineered hardwood so the floor stays flat through August.',
    }),
    // Optimised Wesley Chapel location page — same structure as the Odessa
    // template (shared AreaPage `seo` flow). Authored Why Choose Us + Our
    // Process; section prose/feature copy and FAQs are the supplied content
    // verbatim.
    heroTitle: 'Flooring Company in Wesley Chapel',
    metaTitle: 'Flooring Company in Wesley Chapel - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in Wesley Chapel from All About Flooring Tampa Bay Contractors. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Wesley Chapel',
        intro:
          'Wesley Chapel is new construction and open-plan living, where builder slabs and wide sightlines demand a floor that lays flat and reads clean room to room. As a Flooring Company in Wesley Chapel, we moisture-test and level before we install, personalise builder finishes, and keep the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Slab moisture testing and levelling before installation',
          'Flooring choices that suit open-plan, builder-grade homes',
          'Even seams and clean transitions across large sightlines',
          'Options to personalise builder finishes room by room',
          'One crew from the first measure through the final walkthrough',
          'Local knowledge of Seven Oaks, Wiregrass Ranch, and SR-56 homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Wesley Chapel Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Wesley Chapel home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Wesley Chapel home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring that suits open-plan living and your budget, then confirm it in an itemised written price.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the slab, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Wesley Chapel Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring', d: 'Refresh your Wesley Chapel kitchen with flooring suited to spills, frequent foot traffic, and everyday household activity. We consider existing cabinets, finishes, and room layouts to create a practical, cohesive result.' },
            { h: 'Bedroom Flooring', d: 'Create a comfortable bedroom with flooring that complements your home’s interior style and daily needs. We help Wesley Chapel homeowners select options that provide a polished appearance while fitting their preferences.' },
            { h: 'Living Space Flooring', d: 'Update living rooms and shared areas with flooring designed for everyday activity. We focus on clean layouts, consistent transitions, and finishing details that help connected spaces feel cohesive.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Wesley Chapel',
          body: [
            'New flooring can refresh a Wesley Chapel home while improving comfort, appearance, and everyday functionality. All About Flooring Tampa Bay Contractors provides professional installation for homeowners replacing worn surfaces, updating dated interiors, or preparing a property for sale. As a Flooring Company in Wesley Chapel, we focus on careful preparation, accurate installation, and finishes suited to each room.',
            'From Seven Oaks to Wiregrass Ranch and homes near The Shops at Wiregrass, properties vary in age, layout, and style. We help homeowners choose practical flooring for busy family areas, remodeled rooms, and established homes while considering durability, appearance, and daily maintenance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Wesley Chapel',
          body: [
            'Professional flooring installation can transform an outdated Wesley Chapel interior without requiring a complete renovation. All About Flooring Tampa Bay Contractors emphasizes proper preparation, accurate fitting, and careful finishing details. Whether you’re updating a family room, replacing worn flooring, or improving a property before selling, we tailor the work to your home’s needs.',
            'We serve homeowners throughout Wesley Chapel, including Seven Oaks, Wiregrass Ranch, and areas near State Road 56. As a local Flooring Company in Wesley Chapel, we understand the area’s mix of established neighborhoods and newer communities and help customers choose flooring suited to their property’s layout, lifestyle, and design preferences.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Wesley Chapel',
          body: [
            'All About Flooring Tampa Bay Contractors serves Wesley Chapel homeowners with professional flooring solutions for new construction, renovations, replacements, and interior updates. Our team provides quality-focused installation and helps customers select flooring that complements modern homes while meeting practical needs for durability and everyday living.',
            'We serve Wesley Chapel and nearby communities including Lutz, Land O’ Lakes, and Zephyrhills. Our service area includes neighborhoods around State Road 54, Bruce B. Downs Boulevard, and Wiregrass Ranch, with properties near The Shops at Wiregrass and Wesley Chapel District Park.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you provide flooring services in Seven Oaks and surrounding Wesley Chapel neighborhoods?',
          a: 'Yes. We serve homeowners throughout Wesley Chapel, including Seven Oaks and nearby residential communities. We can discuss your home’s existing flooring, room layout, and renovation goals to identify suitable options.',
        },
        {
          q: 'Can you update flooring in a newer Wiregrass Ranch home?',
          a: 'Yes. Even newer homes may benefit from flooring upgrades when homeowners want to personalize builder finishes or create a different look. We can help select flooring that complements the home’s existing design.',
        },
        {
          q: 'Can you replace flooring before selling a Wesley Chapel home?',
          a: 'Yes. If worn or outdated flooring affects your home’s presentation, we can help you select a practical replacement that gives important living spaces a cleaner, more refreshed appearance.',
        },
        {
          q: 'What should Wesley Chapel homeowners consider when choosing flooring?',
          a: 'Consider the room’s purpose, household traffic, maintenance preferences, existing finishes, and desired appearance. We can help compare suitable flooring options based on how your family uses each space.',
        },
        {
          q: 'Do you serve homes near State Road 56 in Wesley Chapel?',
          a: 'Yes. We provide flooring services throughout Wesley Chapel, including residential areas near State Road 56. Contact All About Flooring Tampa Bay Contractors to discuss your specific flooring project.',
        },
      ],
    },
  },
  'pinellas-park': {
    ...makeArea({
      key: 'pinellas-park',
      city: 'Pinellas Park',
      path: '/locations/top-flooring-companies-pinellas-park',
      top: true,
      photo: 3,
      blurb:
        'Pinellas Park is central Pinellas - ranch homes, additions, and full-house re-floors. We pull the old floor, prep the substrate, and install LVP, hardwood, or tile with one crew from demolition to baseboards.',
    }),
    // Optimised Pinellas Park location page — same structure as the Odessa
    // template (shared AreaPage `seo` flow). Authored Why Choose Us + Our
    // Process; section prose/feature copy and FAQs are the supplied content
    // verbatim.
    heroTitle: 'Flooring Company in Pinellas Park',
    metaTitle: 'Flooring Company in Pinellas Park - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in Pinellas Park from All About Flooring Tampa Bay Contractors. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Pinellas Park',
        intro:
          'Pinellas Park is central Pinellas — ranch homes, additions, and full-house re-floors. As a Flooring Company in Pinellas Park, we pull the old floor, prep the substrate properly, and install with one crew from demolition to baseboards, keeping the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Old-floor removal and substrate prep handled in-house',
          'Subfloor moisture testing and levelling before installation',
          'Even seams and clean transitions across additions and re-floors',
          'One crew from demolition through baseboards and walkthrough',
          'A fixed, itemised written quote before any work begins',
          'Local knowledge of Bonnie Glynn, Mainlands, and Park Boulevard homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Pinellas Park Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Pinellas Park home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Pinellas Park home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to your home and budget, then confirm it in an itemised written price before work starts.',
          },
          {
            title: 'Removal, Prep & Installation',
            body: 'We pull the old floor, prep and level the substrate, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Pinellas Park Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring', d: 'Refresh your Pinellas Park kitchen with flooring suited to spills, frequent foot traffic, and everyday household activity. We consider existing cabinets, finishes, and room layouts to create a practical, cohesive result.' },
            { h: 'Bedroom Flooring', d: 'Create a comfortable bedroom with flooring that complements your home’s interior style and daily needs. We help Pinellas Park homeowners select options that provide a polished appearance while fitting their preferences.' },
            { h: 'Living Space Flooring', d: 'Update living rooms and shared areas with flooring designed for everyday activity. We focus on clean layouts, consistent transitions, and finishing details that help connected spaces feel cohesive.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Pinellas Park',
          body: [
            'New flooring can refresh a Pinellas Park home while improving comfort, appearance, and everyday functionality. All About Flooring Tampa Bay Contractors provides professional installation for homeowners replacing worn surfaces, updating dated interiors, or preparing a property for sale. As a Flooring Company in Pinellas Park, we focus on careful preparation, accurate installation, and finishes suited to each room.',
            'From Bonnie Glynn to Mainlands and homes near England Brothers Park, properties vary in age, layout, and style. We help homeowners choose practical flooring for busy family areas, remodeled rooms, and established homes while considering durability, appearance, and everyday maintenance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Pinellas Park',
          body: [
            'Professional flooring installation can transform an outdated Pinellas Park interior without requiring a complete renovation. All About Flooring Tampa Bay Contractors emphasizes proper preparation, accurate fitting, and careful finishing details. Whether you’re updating a family room, replacing worn flooring, or improving a property before selling, we tailor the work to your home’s needs.',
            'We serve homeowners throughout Pinellas Park, including Bonnie Glynn, Mainlands, and areas near Park Boulevard. As a local Flooring Company in Pinellas Park, we understand the area’s mix of established neighborhoods and residential properties and help customers choose flooring suited to their property’s layout, lifestyle, and design preferences.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Pinellas Park',
          body: [
            'Residents of Pinellas Park can depend on All About Flooring Tampa Bay Contractors for professional flooring installation and replacement services. We handle flooring projects with careful preparation and attention to detail, helping homeowners and businesses improve the appearance, functionality, and durability of their interiors.',
            'Our Pinellas Park service area includes nearby communities such as Largo, Clearwater, and St. Petersburg. We serve neighborhoods around Park Boulevard, U.S. Highway 19, and 66th Street, including properties near Helen Howarth Community Park and the Shoppes at Park Place.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you provide flooring services in Bonnie Glynn and surrounding Pinellas Park neighborhoods?',
          a: 'Yes. We serve homeowners throughout Pinellas Park, including Bonnie Glynn and nearby residential communities. We can discuss your home’s existing flooring, room layout, and renovation goals to identify suitable options.',
        },
        {
          q: 'Can you update flooring in an established Pinellas Park home?',
          a: 'Yes. We can focus on specific rooms or areas that need attention without requiring a complete renovation. New flooring can also be selected to complement existing finishes and the home’s current interior.',
        },
        {
          q: 'Can you replace flooring before selling a Pinellas Park property?',
          a: 'Yes. If worn or outdated flooring affects your home’s presentation, we can help you select a practical replacement that gives key living spaces a cleaner, more refreshed appearance.',
        },
        {
          q: 'What should Pinellas Park homeowners consider when choosing flooring?',
          a: 'Consider the room’s purpose, household traffic, maintenance preferences, existing finishes, and desired appearance. We can help compare suitable flooring options based on how each space is used.',
        },
        {
          q: 'Do you serve homes near Park Boulevard in Pinellas Park?',
          a: 'Yes. We provide flooring services throughout Pinellas Park, including residential areas near Park Boulevard. Contact All About Flooring Tampa Bay Contractors to discuss your specific flooring project.',
        },
      ],
    },
  },
  'spring-hill': {
    ...makeArea({
      key: 'spring-hill',
      city: 'Spring Hill',
      path: '/locations/top-flooring-companies-spring-hill',
      top: true,
      photo: 4,
      blurb:
        'Spring Hill sits north of Tampa Bay, a drive we make regularly for whole-house luxury vinyl, hardwood, and tile. Same measure, same written price, same crew - we do not treat it as a distant add-on.',
    }),
    // Optimised Spring Hill location page — same structure as the Odessa
    // template (shared AreaPage `seo` flow). Authored Why Choose Us + Our
    // Process; section prose/feature copy and FAQs are the supplied content
    // verbatim.
    heroTitle: 'Flooring Company in Spring Hill',
    metaTitle: 'Flooring Company in Spring Hill - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in Spring Hill from All About Flooring Tampa Bay Contractors. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Spring Hill',
        intro:
          'Spring Hill sits north of Tampa Bay, a drive we make regularly for whole-house flooring. As a Flooring Company in Spring Hill, you get the same measure, the same written price, and the same crew we bring anywhere else — we prep and level the subfloor properly and keep the plan clear from the first visit to the final walkthrough.',
        points: [
          'The same crew, measure, and written price we bring to every job',
          'Subfloor moisture testing and levelling before installation',
          'Whole-house luxury vinyl, hardwood, and tile handled in one pass',
          'Even seams and clean transitions across connected rooms',
          'A fixed, itemised written quote before any work begins',
          'Local knowledge of Sterling Hill, Seven Hills, and SR-50 homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Spring Hill Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Spring Hill home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Spring Hill home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to your home and budget, then confirm it in an itemised written price before work starts.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Spring Hill Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring', d: 'Refresh your Spring Hill kitchen with flooring suited to spills, frequent foot traffic, and everyday household activity. We consider existing cabinets, finishes, and room layouts to create a practical, cohesive result.' },
            { h: 'Bedroom Flooring', d: 'Create a comfortable bedroom with flooring that complements your home’s interior style and daily needs. We help Spring Hill homeowners select options that provide a polished appearance while fitting their preferences.' },
            { h: 'Living Space Flooring', d: 'Update living rooms and shared areas with flooring designed for everyday activity. We focus on clean layouts, consistent transitions, and finishing details that help connected spaces feel cohesive.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Spring Hill',
          body: [
            'New flooring can refresh a Spring Hill home while improving comfort, appearance, and everyday functionality. All About Flooring Tampa Bay Contractors provides professional installation for homeowners replacing worn surfaces, updating dated interiors, or preparing a property for sale. As a Flooring Company in Spring Hill, we focus on careful preparation, accurate installation, and finishes suited to each room.',
            'From Sterling Hill to Seven Hills and homes near Weeki Wachee Gardens, properties vary in age, layout, and style. We help homeowners choose practical flooring for busy family areas, remodeled rooms, and established homes while considering durability, appearance, and everyday maintenance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Spring Hill',
          body: [
            'Professional flooring installation can transform an outdated Spring Hill interior without requiring a complete renovation. All About Flooring Tampa Bay Contractors emphasizes proper preparation, accurate fitting, and careful finishing details. Whether you’re updating a family room, replacing worn flooring, or improving a property before selling, we tailor the work to your home’s needs.',
            'We serve homeowners throughout Spring Hill, including Sterling Hill, Seven Hills, and areas near State Road 50. As a local Flooring Company in Spring Hill, we understand the area’s mix of established neighborhoods and newer communities and help customers choose flooring suited to their property’s layout, lifestyle, and design preferences.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Spring Hill',
          body: [
            'All About Flooring Tampa Bay Contractors provides Spring Hill customers with dependable flooring services for remodeling projects, replacements, and property upgrades. Our team delivers professional installation while helping customers choose flooring materials that fit their home’s style, maintenance requirements, and everyday demands.',
            'We serve Spring Hill and nearby areas including Brooksville, Hudson, and Weeki Wachee. Our local service area includes neighborhoods along Spring Hill Drive and U.S. Highway 19, with properties near Weeki Wachee Springs State Park, Nature Coast Commons, and local shopping areas.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you provide flooring services in Sterling Hill and surrounding Spring Hill neighborhoods?',
          a: 'Yes. We serve homeowners throughout Spring Hill, including Sterling Hill and nearby residential communities. We can discuss your home’s existing flooring, room layout, and renovation goals to identify suitable options.',
        },
        {
          q: 'Can you update flooring in an established Spring Hill home?',
          a: 'Yes. We can focus on specific rooms or areas that need attention without requiring a complete renovation. New flooring can also be selected to complement existing finishes and the home’s current interior.',
        },
        {
          q: 'Can you replace flooring before selling a Spring Hill property?',
          a: 'Yes. If worn or outdated flooring affects your home’s presentation, we can help you select a practical replacement that gives key living spaces a cleaner, more refreshed appearance.',
        },
        {
          q: 'What should Spring Hill homeowners consider when choosing flooring?',
          a: 'Consider the room’s purpose, household traffic, maintenance preferences, existing finishes, and desired appearance. We can help compare suitable flooring options based on how each space is used.',
        },
        {
          q: 'Do you serve homes near State Road 50 in Spring Hill?',
          a: 'Yes. We provide flooring services throughout Spring Hill, including residential areas near State Road 50. Contact All About Flooring Tampa Bay Contractors to discuss your specific flooring project.',
        },
      ],
    },
  },
  riverview: {
    ...makeArea({
      key: 'riverview',
      city: 'Riverview',
      path: '/locations/top-flooring-companies-riverview',
      top: true,
      photo: 5,
      blurb:
        'Riverview is south Hillsborough growth - new builds, big great rooms, and plenty of LVP. We install luxury vinyl, porcelain tile, and hardwood, and we sequence the job so you are not living on plywood for a month.',
    }),
    // Optimised Riverview location page — same structure as the Odessa
    // template (shared AreaPage `seo` flow). Authored Why Choose Us + Our
    // Process; section prose/feature copy and FAQs are the supplied content
    // verbatim.
    heroTitle: 'Flooring Company in Riverview',
    metaTitle: 'Flooring Company in Riverview - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors, Flooring Company in Riverview for floor installation, replacement, and residential flooring upgrades. Call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Riverview',
        intro:
          'Riverview is south Hillsborough growth — new builds, big great rooms, and plenty of open-plan living. As a Flooring Company in Riverview, we prep and level before we install, sequence the job so you are not living on plywood for a month, and keep the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Job sequencing that keeps your home livable during the work',
          'Subfloor moisture testing and levelling before installation',
          'Flooring choices that suit new builds and big great rooms',
          'Even seams and clean transitions across large sightlines',
          'One crew from the first measure through the final walkthrough',
          'Local knowledge of Panther Trace, FishHawk Ranch, and US-301 homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Riverview Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Riverview home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Riverview home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to open-plan living and your budget, then confirm it in an itemised written price.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Riverview Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring', d: 'Refresh your Riverview kitchen with flooring suited to spills, frequent foot traffic, and everyday household activity. We consider existing cabinets, finishes, and room layouts to create a practical, cohesive result.' },
            { h: 'Bedroom Flooring', d: 'Create a comfortable bedroom with flooring that complements your home’s interior style and daily needs. We help Riverview homeowners select options that provide a polished appearance while fitting their preferences.' },
            { h: 'Living Space Flooring', d: 'Update living rooms and shared areas with flooring designed for everyday activity. We focus on clean layouts, consistent transitions, and finishing details that help connected spaces feel cohesive.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Riverview',
          body: [
            'New flooring can refresh a Riverview home while improving comfort, appearance, and everyday functionality. All About Flooring Tampa Bay Contractors provides professional installation for homeowners replacing worn surfaces, updating dated interiors, or preparing a property for sale. As a Flooring Company in Riverview, we focus on careful preparation, accurate installation, and finishes suited to each room.',
            'From Panther Trace to FishHawk Ranch and homes near Riverview Town Center, properties vary in age, layout, and style. We help homeowners choose practical flooring for busy family areas, remodeled rooms, and established homes while considering durability, appearance, and everyday maintenance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Riverview',
          body: [
            'Professional flooring installation can transform an outdated Riverview interior without requiring a complete renovation. All About Flooring Tampa Bay Contractors emphasizes proper preparation, accurate fitting, and careful finishing details. Whether you’re updating a family room, replacing worn flooring, or improving a property before selling, we tailor the work to your home’s needs.',
            'We serve homeowners throughout Riverview, including Panther Trace, FishHawk Ranch, and areas near U.S. Highway 301. As a local Flooring Company in Riverview, we understand the area’s mix of established neighborhoods and newer communities and help customers choose flooring suited to their property’s layout, lifestyle, and design preferences.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Riverview',
          body: [
            'Riverview homeowners can turn to All About Flooring Tampa Bay Contractors for reliable flooring installation, replacement, and remodeling services. We provide practical flooring solutions for individual rooms and larger projects, combining careful workmanship with material choices suited to modern residential and commercial spaces.',
            'We serve Riverview and surrounding communities including Brandon, Apollo Beach, and Valrico. Our service area covers neighborhoods near U.S. Highway 301, Big Bend Road, and Boyette Road, including areas around Riverview Town Center, Alafia Scrub Nature Preserve, and local residential developments.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you provide flooring services in Panther Trace and surrounding Riverview neighborhoods?',
          a: 'Yes. We serve homeowners throughout Riverview, including Panther Trace and nearby residential communities. We can discuss your home’s existing flooring, room layout, and renovation goals to identify suitable options.',
        },
        {
          q: 'Can you update flooring in a newer FishHawk Ranch home?',
          a: 'Yes. Newer homes may still need flooring updates when homeowners want to personalize builder finishes or create a different interior style. We can help select flooring that works with the home’s existing design.',
        },
        {
          q: 'Can you replace flooring before selling a Riverview property?',
          a: 'Yes. If worn or outdated flooring affects your home’s presentation, we can help you select a practical replacement that gives key living spaces a cleaner, more refreshed appearance.',
        },
        {
          q: 'What should Riverview homeowners consider when choosing flooring?',
          a: 'Consider the room’s purpose, household traffic, maintenance preferences, existing finishes, and desired appearance. We can help compare suitable flooring options based on how each space is used.',
        },
        {
          q: 'Do you serve homes near U.S. Highway 301 in Riverview?',
          a: 'Yes. We provide flooring services throughout Riverview, including residential areas near U.S. Highway 301. Contact All About Flooring Tampa Bay Contractors to discuss your specific flooring project.',
        },
      ],
    },
  },
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
  largo: {
    ...makeArea({
      key: 'largo',
      city: 'Largo',
      path: '/locations/largo',
      photo: 1,
      blurb:
        'Largo is central Pinellas - family homes, open plans and a lot of luxury vinyl. We drive from Tampa for whole-house LVP, hardwood and tile, with the same written price and the same crew that measured the rooms.',
    }),
    // Optimised Largo location page — same structure as the Odessa template
    // (shared AreaPage `seo` flow). Authored Why Choose Us + Our Process;
    // section prose/feature copy and FAQs are the supplied content verbatim,
    // except the closing "All About Flooring – Largo" section, which was
    // supplied as St. Petersburg content by mistake and was adapted to Largo
    // (per the user) to match the pattern used on the other towns.
    heroTitle: 'Flooring Company in Largo',
    metaTitle: 'Flooring Company in Largo - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors, Flooring Company in Largo for floor installation, replacement, and residential flooring upgrades. Call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Largo',
        intro:
          'Largo is central Pinellas — family homes, open plans, and a lot of luxury vinyl. As a Flooring Company in Largo, you get the same written price and the same crew that measured the rooms; we prep and level the subfloor properly and keep the plan clear from the first visit to the final walkthrough.',
        points: [
          'The same crew and written price from measure to walkthrough',
          'Subfloor moisture testing and levelling before installation',
          'Whole-house luxury vinyl, hardwood, and tile handled in one pass',
          'Even seams and clean transitions across open-plan rooms',
          'A fixed, itemised written quote before any work begins',
          'Local knowledge of Harbor Bluffs, Bay Hills, and East Bay Drive homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Largo Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Largo home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Largo home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to your home and budget, then confirm it in an itemised written price before work starts.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Largo Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring', d: 'Refresh your Largo kitchen with flooring suited to spills, frequent foot traffic, and everyday household activity. We consider existing cabinets, finishes, and room layouts to create a practical, cohesive result.' },
            { h: 'Bedroom Flooring', d: 'Create a comfortable bedroom with flooring that complements your home’s interior style and daily needs. We help Largo homeowners select options that provide a polished appearance while fitting their preferences.' },
            { h: 'Living Space Flooring', d: 'Update living rooms and shared areas with flooring designed for everyday activity. We focus on clean layouts, consistent transitions, and finishing details that help connected spaces feel cohesive.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Largo',
          body: [
            'New flooring can refresh a Largo home while improving comfort, appearance, and everyday functionality. All About Flooring Tampa Bay Contractors provides professional installation for homeowners replacing worn surfaces, updating dated interiors, or preparing a property for sale. As a Flooring Company in Largo, we focus on careful preparation, accurate installation, and finishes suited to each room.',
            'From Harbor Bluffs to Bay Hills and homes near Largo Central Park, properties vary in age, layout, and style. We help homeowners choose practical flooring for busy family areas, remodeled rooms, and established homes while considering durability, appearance, and everyday maintenance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Largo',
          body: [
            'Professional flooring installation can transform an outdated Largo interior without requiring a complete renovation. All About Flooring Tampa Bay Contractors emphasizes proper preparation, accurate fitting, and careful finishing details. Whether you’re updating a family room, replacing worn flooring, or improving a property before selling, we tailor the work to your home’s needs.',
            'We serve homeowners throughout Largo, including Harbor Bluffs, Bay Hills, and areas near East Bay Drive. As a local Flooring Company in Largo, we understand the area’s mix of established neighborhoods and residential properties and help customers choose flooring suited to their property’s layout, lifestyle, and design preferences.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Largo',
          body: [
            'All About Flooring Tampa Bay Contractors offers Largo homeowners professional flooring services for renovations, replacements, and interior improvements. From refreshing older floors to installing new surfaces throughout a property, our team emphasizes dependable workmanship, appropriate materials, and results designed for long-term use.',
            'We serve Largo and nearby communities including Clearwater, Pinellas Park, and Seminole. Our service area includes neighborhoods near East Bay Drive, Ulmerton Road, and Seminole Boulevard, as well as properties close to Largo Central Park, Harbor Bluffs, and Bay Hills.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you provide flooring services in Harbor Bluffs and surrounding Largo neighborhoods?',
          a: 'Yes. We serve homeowners throughout Largo, including Harbor Bluffs and nearby residential communities. We can discuss your home’s existing flooring, room layout, and renovation goals to identify suitable options.',
        },
        {
          q: 'Can you update flooring in an established Largo home?',
          a: 'Yes. We can focus on specific rooms or living areas that need attention without requiring a complete renovation. New flooring can also be selected to complement your home’s existing finishes.',
        },
        {
          q: 'Can you replace flooring before selling a Largo property?',
          a: 'Yes. If worn or outdated flooring affects your home’s presentation, we can help you select a practical replacement that gives important living spaces a cleaner, more refreshed appearance.',
        },
        {
          q: 'What should Largo homeowners consider when choosing flooring?',
          a: 'Consider the room’s purpose, household traffic, maintenance preferences, existing finishes, and desired appearance. We can help compare suitable flooring options based on how your family uses each space.',
        },
        {
          q: 'Do you serve homes near East Bay Drive in Largo?',
          a: 'Yes. We provide flooring services throughout Largo, including residential areas near East Bay Drive. Contact All About Flooring Tampa Bay Contractors to discuss your specific flooring project.',
        },
      ],
    },
  },
  'tarpon-springs': {
    ...makeArea({
      key: 'tarpon-springs',
      city: 'Tarpon Springs',
      path: '/locations/tarpon-springs',
      photo: 2,
      blurb:
        'Tarpon Springs bungalows, sponge-dock cottages and newer builds north of the bridges all take Gulf humidity. We install waterproof LVP, porcelain tile and hardwood specified for the room, not a catalogue default.',
    }),
    // Optimised Tarpon Springs location page — same structure as the Odessa
    // template (shared AreaPage `seo` flow). Authored Why Choose Us + Our
    // Process; section prose/feature copy and FAQs are the supplied content
    // verbatim.
    heroTitle: 'Flooring Company in Tarpon Springs',
    metaTitle: 'Flooring Company in Tarpon Springs - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in Tarpon Springs from All About Flooring Tampa Bay Contractors. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Tarpon Springs',
        intro:
          'Tarpon Springs bungalows, sponge-dock cottages, and newer builds north of the bridges all take Gulf humidity. As a Flooring Company in Tarpon Springs, we specify waterproof-ready materials for the room, prep and level the subfloor properly, and keep the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Waterproof-ready material advice for Gulf humidity and salt air',
          'Subfloor moisture testing and levelling before installation',
          'Flooring specified for each room, not a catalogue default',
          'Even seams and clean transitions across older and newer homes',
          'One crew from the first measure through the final walkthrough',
          'Local knowledge of Forest Ridge, Beckett Bay, and US-19 homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Tarpon Springs Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Tarpon Springs home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Tarpon Springs home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to a Gulf-side climate and your budget, then confirm it in an itemised written price.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Tarpon Springs Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring', d: 'Refresh your Tarpon Springs kitchen with flooring suited to spills, frequent foot traffic, and everyday household activity. We consider existing cabinets, finishes, and room layouts to create a practical, cohesive result.' },
            { h: 'Bedroom Flooring', d: 'Create a comfortable bedroom with flooring that complements your home’s interior style and daily needs. We help Tarpon Springs homeowners select options that provide a polished appearance while fitting their preferences.' },
            { h: 'Living Space Flooring', d: 'Update living rooms and shared areas with flooring designed for everyday activity. We focus on clean layouts, consistent transitions, and finishing details that help connected spaces feel cohesive.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Tarpon Springs',
          body: [
            'New flooring can refresh a Tarpon Springs home while improving comfort, appearance, and everyday functionality. All About Flooring Tampa Bay Contractors provides professional installation for homeowners replacing worn surfaces, updating dated interiors, or preparing a property for sale. As a Flooring Company in Tarpon Springs, we focus on careful preparation, accurate installation, and finishes suited to each room.',
            'From Forest Ridge to Beckett Bay and homes near Fred Howard Park, properties vary in age, layout, and style. We help homeowners choose practical flooring for busy family areas, remodeled rooms, and established homes while considering durability, appearance, and everyday maintenance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Tarpon Springs',
          body: [
            'Professional flooring installation can transform an outdated Tarpon Springs interior without requiring a complete renovation. All About Flooring Tampa Bay Contractors emphasizes proper preparation, accurate fitting, and careful finishing details. Whether you’re updating a family room, replacing worn flooring, or improving a property before selling, we tailor the work to your home’s needs.',
            'We serve homeowners throughout Tarpon Springs, including Forest Ridge, Beckett Bay, and areas near U.S. Highway 19. As a local Flooring Company in Tarpon Springs, we understand the area’s mix of established neighborhoods and residential properties and help customers choose flooring suited to their property’s layout, lifestyle, and design preferences.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Tarpon Springs',
          body: [
            'Homeowners in Tarpon Springs can choose All About Flooring Tampa Bay Contractors for dependable flooring solutions during renovations, replacements, and property improvements. Our team focuses on professional installation and flooring choices that provide the right balance of appearance, durability, comfort, and everyday practicality.',
            'We serve Tarpon Springs and nearby communities including Palm Harbor, Holiday, and New Port Richey. Our service area covers neighborhoods around U.S. Highway 19 and Klosterman Road, including properties near Fred Howard Park, Sunset Beach, and the historic downtown Sponge Docks district.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you provide flooring services in Forest Ridge and surrounding Tarpon Springs neighborhoods?',
          a: 'Yes. We serve homeowners throughout Tarpon Springs, including Forest Ridge and nearby residential communities. We can discuss your home’s existing flooring, room layout, and renovation goals to identify suitable options.',
        },
        {
          q: 'Can you update flooring in an established Tarpon Springs home?',
          a: 'Yes. We can focus on specific rooms or living areas that need attention without requiring a complete renovation. New flooring can also be selected to complement your home’s existing finishes.',
        },
        {
          q: 'Can you replace flooring before selling a Tarpon Springs property?',
          a: 'Yes. If worn or outdated flooring affects your home’s presentation, we can help you select a practical replacement that gives important living spaces a cleaner, more refreshed appearance.',
        },
        {
          q: 'What should Tarpon Springs homeowners consider when choosing flooring?',
          a: 'Consider the room’s purpose, household traffic, maintenance preferences, existing finishes, and desired appearance. We can help compare suitable flooring options based on how each space is used.',
        },
        {
          q: 'Do you serve homes near U.S. Highway 19 in Tarpon Springs?',
          a: 'Yes. We provide flooring services throughout Tarpon Springs, including residential areas near U.S. Highway 19. Contact All About Flooring Tampa Bay Contractors to discuss your specific flooring project.',
        },
      ],
    },
  },
  'safety-harbor': {
    ...makeArea({
      key: 'safety-harbor',
      city: 'Safety Harbor',
      path: '/locations/safety-harbor',
      photo: 3,
      blurb:
        'Safety Harbor sits on the north bay - downtown bungalows and waterfront houses that need a floor that looks right in an older plan. We install luxury vinyl, tile and hardwood with one Tampa Bay crew from measure to walkthrough.',
    }),
    // Optimised Safety Harbor location page — same structure as the Odessa
    // template (shared AreaPage `seo` flow). Authored Why Choose Us + Our
    // Process; section prose/feature copy and FAQs are the supplied content
    // verbatim.
    heroTitle: 'Flooring Company in Safety Harbor',
    metaTitle: 'Flooring Company in Safety Harbor - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in Safety Harbor from All About Flooring Tampa Bay Contractors. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Safety Harbor',
        intro:
          'Safety Harbor sits on the north bay — downtown bungalows and waterfront houses that need a floor that looks right in an older plan. As a Flooring Company in Safety Harbor, we specify materials that suit the home, prep and level the subfloor properly, and keep the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Flooring specified to look right in older, established plans',
          'Subfloor moisture testing and levelling before installation',
          'Waterproof-ready options for north-bay and waterfront homes',
          'Even seams and clean transitions across connected rooms',
          'One Tampa Bay crew from the first measure to the walkthrough',
          'Local knowledge of Harbor Woods, Country Villas, and Main Street homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Safety Harbor Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Safety Harbor home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Safety Harbor home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to your home and budget, then confirm it in an itemised written price before work starts.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Safety Harbor Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring', d: 'Refresh your Safety Harbor kitchen with flooring suited to spills, frequent foot traffic, and everyday household activity. We consider existing cabinets, finishes, and room layouts to create a practical, cohesive result.' },
            { h: 'Bedroom Flooring', d: 'Create a comfortable bedroom with flooring that complements your home’s interior style and daily needs. We help Safety Harbor homeowners select options that provide a polished appearance while fitting their preferences.' },
            { h: 'Living Space Flooring', d: 'Update living rooms and shared areas with flooring designed for everyday activity. We focus on clean layouts, consistent transitions, and finishing details that help connected spaces feel cohesive.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Safety Harbor',
          body: [
            'New flooring can refresh a Safety Harbor home while improving comfort, appearance, and everyday functionality. All About Flooring Tampa Bay Contractors provides professional installation for homeowners replacing worn surfaces, updating dated interiors, or preparing a property for sale. As a Flooring Company in Safety Harbor, we focus on careful preparation, accurate installation, and finishes suited to each room.',
            'From Harbor Woods to Country Villas and homes near Philippe Park, properties vary in age, layout, and style. We help homeowners choose practical flooring for busy family areas, remodeled rooms, and established homes while considering durability, appearance, and everyday maintenance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Safety Harbor',
          body: [
            'Professional flooring installation can transform an outdated Safety Harbor interior without requiring a complete renovation. All About Flooring Tampa Bay Contractors emphasizes proper preparation, accurate fitting, and careful finishing details. Whether you’re updating a family room, replacing worn flooring, or improving a property before selling, we tailor the work to your home’s needs.',
            'We serve homeowners throughout Safety Harbor, including Harbor Woods, Country Villas, and areas near Main Street. As a local Flooring Company in Safety Harbor, we understand the area’s mix of established neighborhoods and residential properties and help customers choose flooring suited to their property’s layout, lifestyle, and design preferences.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Safety Harbor',
          body: [
            'All About Flooring Tampa Bay Contractors provides Safety Harbor homeowners with reliable flooring services for remodeling, replacement, and interior enhancement projects. We help customers select flooring suited to their spaces while delivering careful installation that supports a clean appearance, comfortable living environment, and lasting performance.',
            'We serve Safety Harbor and surrounding communities including Clearwater, Palm Harbor, and Oldsmar. Our service area includes neighborhoods near Main Street, McMullen-Booth Road, and Enterprise Road, with properties close to Philippe Park, downtown Safety Harbor, and local waterfront areas.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you provide flooring services in Harbor Woods and surrounding Safety Harbor neighborhoods?',
          a: 'Yes. We serve homeowners throughout Safety Harbor, including Harbor Woods and nearby residential communities. We can discuss your home’s existing flooring, room layout, and renovation goals to identify suitable options.',
        },
        {
          q: 'Can you update flooring in an established Safety Harbor home?',
          a: 'Yes. We can focus on specific rooms or living areas that need attention without requiring a complete renovation. New flooring can also be selected to complement your home’s existing finishes.',
        },
        {
          q: 'Can you replace flooring before selling a Safety Harbor property?',
          a: 'Yes. If worn or outdated flooring affects your home’s presentation, we can help you select a practical replacement that gives important living spaces a cleaner, more refreshed appearance.',
        },
        {
          q: 'What should Safety Harbor homeowners consider when choosing flooring?',
          a: 'Consider the room’s purpose, household traffic, maintenance preferences, existing finishes, and desired appearance. We can help compare suitable flooring options based on how your family uses each space.',
        },
        {
          q: 'Do you serve homes near Main Street in Safety Harbor?',
          a: 'Yes. We provide flooring services throughout Safety Harbor, including residential areas near Main Street. Contact All About Flooring Tampa Bay Contractors to discuss your specific flooring project.',
        },
      ],
    },
  },
  'new-port-richey': {
    ...makeArea({
      key: 'new-port-richey',
      city: 'New Port Richey',
      path: '/locations/new-port-richey',
      photo: 4,
      blurb:
        'New Port Richey is west Pasco - ranch homes, river lots and re-floors we run as a regular Tampa Bay job, not a distant add-on. Luxury vinyl, hardwood and tile, itemised before a plank goes down.',
    }),
    // Optimised New Port Richey location page — same structure as the Odessa
    // template (shared AreaPage `seo` flow). Authored Why Choose Us + Our
    // Process; section prose/feature copy and FAQs are the supplied content
    // verbatim.
    heroTitle: 'Flooring Company in New Port Richey',
    metaTitle: 'Flooring Company in New Port Richey | All About',
    metaDescription:
      'Flooring installation, replacement & upgrades in New Port Richey from All About Flooring Tampa Bay Contractors. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in New Port Richey',
        intro:
          'New Port Richey is west Pasco — ranch homes, river lots, and re-floors we run as a regular Tampa Bay job, not a distant add-on. As a Flooring Company in New Port Richey, we prep and level the subfloor properly, itemise the price before a plank goes down, and keep the plan clear from the first measure to the final walkthrough.',
        points: [
          'Treated as a regular Tampa Bay job, not a distant add-on',
          'Subfloor moisture testing and levelling before installation',
          'Waterproof-ready options for river lots and older ranch homes',
          'Even seams and clean transitions across connected rooms',
          'A fixed, itemised written quote before a plank goes down',
          'Local knowledge of Gulf Harbors, Beacon Square, and US-19 homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for New Port Richey Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your New Port Richey home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your New Port Richey home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to your home and budget, then confirm it in an itemised written price before work starts.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for New Port Richey Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring', d: 'Refresh your New Port Richey kitchen with flooring suited to spills, frequent foot traffic, and everyday household activity. We consider existing cabinets, finishes, and room layouts to create a practical, cohesive result.' },
            { h: 'Bedroom Flooring', d: 'Create a comfortable bedroom with flooring that complements your home’s interior style and daily needs. We help New Port Richey homeowners select options that provide a polished appearance while fitting their preferences.' },
            { h: 'Living Space Flooring', d: 'Update living rooms and shared areas with flooring designed for everyday activity. We focus on clean layouts, consistent transitions, and finishing details that help connected spaces feel cohesive.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout New Port Richey',
          body: [
            'New flooring can refresh a New Port Richey home while improving comfort, appearance, and everyday functionality. All About Flooring Tampa Bay Contractors provides professional installation for homeowners replacing worn surfaces, updating dated interiors, or preparing a property for sale. As a Flooring Company in New Port Richey, we focus on careful preparation, accurate installation, and finishes suited to each room.',
            'From Gulf Harbors to Beacon Square and homes near Sims Lane, properties vary in age, layout, and style. We help homeowners choose practical flooring for busy family areas, remodeled rooms, and established homes while considering durability, appearance, and everyday maintenance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout New Port Richey',
          body: [
            'Professional flooring installation can transform an outdated New Port Richey interior without requiring a complete renovation. All About Flooring Tampa Bay Contractors emphasizes proper preparation, accurate fitting, and careful finishing details. Whether you’re updating a family room, replacing worn flooring, or improving a property before selling, we tailor the work to your home’s needs.',
            'We serve homeowners throughout New Port Richey, including Gulf Harbors, Beacon Square, and areas near U.S. Highway 19. As a local Flooring Company in New Port Richey, we understand the area’s mix of established neighborhoods and residential properties and help customers choose flooring suited to their property’s layout, lifestyle, and design preferences.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – New Port Richey',
          body: [
            'New Port Richey homeowners can depend on All About Flooring Tampa Bay Contractors for professional flooring installation, replacement, and renovation services. We help transform outdated interiors with flooring solutions selected for durability, visual appeal, and practical use, supported by careful preparation and experienced installation.',
            'We serve New Port Richey and nearby communities including Trinity, Holiday, and Tarpon Springs. Our service area reaches neighborhoods near U.S. Highway 19, Little Road, and State Road 54, including properties close to Sims Lane Park, Gulf View Square Mall, and downtown New Port Richey.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you provide flooring services in Gulf Harbors and surrounding New Port Richey neighborhoods?',
          a: 'Yes. We serve homeowners throughout New Port Richey, including Gulf Harbors and nearby residential communities. We can discuss your home’s existing flooring, room layout, and renovation goals to identify suitable options.',
        },
        {
          q: 'Can you update flooring in an established New Port Richey home?',
          a: 'Yes. We can focus on specific rooms or living areas that need attention without requiring a complete renovation. New flooring can also be selected to complement your home’s existing finishes.',
        },
        {
          q: 'Can you replace flooring before selling a New Port Richey property?',
          a: 'Yes. If worn or outdated flooring affects your home’s presentation, we can help you select a practical replacement that gives important living spaces a cleaner, more refreshed appearance.',
        },
        {
          q: 'What should New Port Richey homeowners consider when choosing flooring?',
          a: 'Consider the room’s purpose, household traffic, maintenance preferences, existing finishes, and desired appearance. We can help compare suitable flooring options based on how your family uses each space.',
        },
        {
          q: 'Do you serve homes near U.S. Highway 19 in New Port Richey?',
          a: 'Yes. We provide flooring services throughout New Port Richey, including residential areas near U.S. Highway 19. Contact All About Flooring Tampa Bay Contractors to discuss your specific flooring project.',
        },
      ],
    },
  },
  lutz: {
    ...makeArea({
      key: 'lutz',
      city: 'Lutz',
      path: '/locations/lutz',
      photo: 5,
      blurb:
        'Lutz sits on the north edge of Tampa - suburban houses, lake lots and open plans that want one floor through the living areas. We moisture-test the slab and install LVP, hardwood and porcelain with the crew that priced it.',
    }),
    // Optimised Lutz location page — same structure as the Odessa template
    // (shared AreaPage `seo` flow). Authored Why Choose Us + Our Process;
    // section prose/feature copy and FAQs are the supplied content verbatim
    // (feature-grid H3s here carry the supplied longer headings).
    heroTitle: 'Flooring Company in Lutz',
    metaTitle: 'Flooring Company in Lutz - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors, Flooring Company in Lutz for floor installation, replacement, and residential flooring upgrades. Call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Lutz',
        intro:
          'Lutz sits on the north edge of Tampa — suburban houses, lake lots, and open plans that want one floor running through the living areas. As a Flooring Company in Lutz, we moisture-test the slab, install with the same crew that priced the job, and keep the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'One continuous floor carried cleanly across open-plan living areas',
          'Slab moisture testing and levelling before installation',
          'The same crew that priced the job does the install',
          'Even seams and clean transitions between connected rooms',
          'A fixed, itemised written quote before any work begins',
          'Local knowledge of Cheval, Lutz Nature Park, and US-41 homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Lutz Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Lutz home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Lutz home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to open-plan living and your budget, then confirm it in an itemised written price.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the slab, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Lutz Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring for Everyday Living', d: 'Choose practical flooring that handles cooking, spills, foot traffic, and frequent cleaning while complementing cabinets and countertops. We help Lutz homeowners create kitchens that look polished without sacrificing everyday durability.' },
            { h: 'Comfortable Bedroom Flooring', d: 'Refresh bedrooms with flooring that adds warmth, comfort, and visual consistency. From a quiet retreat near Cheval to a growing family bedroom, we install flooring that supports the room’s purpose and overall home design.' },
            { h: 'Stylish Living Room Flooring', d: 'Create a welcoming foundation for entertaining, relaxing, and family activities. For homes near Lutz Nature Park or throughout the surrounding residential communities, we install flooring designed to complement furniture, décor, and daily use.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Lutz',
          body: [
            'Choosing the right flooring can make everyday spaces feel more comfortable, durable, and inviting. All About Flooring Tampa Bay Contractors provides professional installation for homeowners seeking dependable results and a clean finished appearance. As a trusted Flooring Company in Lutz, we help with upgrades ranging from worn living room floors to complete flooring projects for newly renovated homes.',
            'We serve homes near Lutz Nature Park, Cheval, and the US-41 corridor, adapting recommendations to each space. Whether replacing dated flooring before selling or updating a busy family home, our team focuses on careful preparation, accurate installation, and lasting performance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Lutz',
          body: [
            'Professional installation requires more than placing new flooring. All About Flooring Tampa Bay Contractors carefully considers the existing surface, room conditions, transitions, and layout before installation. Our experience helps homeowners avoid common issues such as uneven finishes, visible gaps, and poorly aligned materials.',
            'For properties around Land O’ Lakes Boulevard, US-41, and Lutz, we tailor each project to the home rather than relying on a one-size-fits-all approach. Whether you are remodeling a kitchen, preparing a home for new occupants, or replacing flooring damaged through everyday wear, our team works with attention to detail from preparation through completion.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Lutz',
          body: [
            'Lutz residents can rely on All About Flooring Tampa Bay Contractors for professional flooring services that support home renovations, replacements, and interior upgrades. Our team delivers carefully installed flooring designed to complement each property while providing practical performance for families, rental properties, and commercial spaces.',
            'We serve Lutz and surrounding communities including Wesley Chapel, Land O’ Lakes, and Carrollwood. Our service area includes neighborhoods around State Road 54, U.S. Highway 41, and Lutz-Lake Fern Road, with properties near Lake Park, Veterans Expressway, and local shopping areas.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring works well for busy Lutz family homes?',
          a: 'We can recommend flooring based on household traffic, room use, maintenance preferences, and the specific conditions of your home.',
        },
        {
          q: 'Can you replace flooring during a Lutz home renovation?',
          a: 'Yes. We can coordinate flooring installation as part of a broader kitchen, bedroom, or living-space renovation and help create a consistent finished look.',
        },
        {
          q: 'Do you install flooring in homes around Cheval and nearby Lutz communities?',
          a: 'Yes. We provide residential flooring services throughout Lutz, including homes in and around established communities such as Cheval.',
        },
        {
          q: 'Can you help replace older flooring before selling a Lutz home?',
          a: 'Yes. If worn or dated flooring is affecting the appearance of your home, we can help select and install an updated option suited to the property.',
        },
        {
          q: 'Can you install different flooring types throughout one Lutz home?',
          a: 'Yes. We can help homeowners choose flooring suited to individual rooms while maintaining a coordinated appearance across connected living spaces.',
        },
      ],
    },
  },
  'land-o-lakes': {
    ...makeArea({
      key: 'land-o-lakes',
      city: "Land O' Lakes",
      path: '/locations/land-o-lakes',
      photo: 0,
      blurb:
        "Land O' Lakes is Pasco growth - new construction, big great rooms and plenty of luxury vinyl over slab. We test moisture, level where it needs it, and install LVP, tile or engineered hardwood so the floor stays flat through August.",
    }),
    // Optimised Land O' Lakes location page — same structure as the Odessa
    // template (shared AreaPage `seo` flow). Authored Why Choose Us + Our
    // Process; section prose/feature copy and FAQs are the supplied content
    // verbatim (curly apostrophe in "Land O’ Lakes" preserved as supplied).
    heroTitle: 'Flooring Company in Land O’ Lakes',
    metaTitle: 'Flooring Company in Land O’ Lakes - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in Land O’ Lakes from All About Flooring Tampa Bay Contractors. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Land O’ Lakes',
        intro:
          'Land O’ Lakes is Pasco growth — new construction, big great rooms, and plenty of luxury vinyl over slab. As a Flooring Company in Land O’ Lakes, we test moisture, level where it needs it, and install with the same crew that priced the job so the floor stays flat and reads clean room to room.',
        points: [
          'Slab moisture testing and levelling before installation',
          'Flooring choices that suit new construction and big great rooms',
          'One continuous look carried cleanly across open-plan living areas',
          'Even seams and clean transitions between connected rooms',
          'The same crew that priced the job does the install',
          'Local knowledge of Connerton, Bexley, and Lake Padgett homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Land O’ Lakes Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Land O’ Lakes home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Land O’ Lakes home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to open-plan living and your budget, then confirm it in an itemised written price.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the slab, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Land O’ Lakes Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Practical Kitchen Flooring', d: 'Give your kitchen a durable, attractive foundation for daily cooking, spills, and frequent foot traffic. We help homeowners select flooring that works with existing cabinets, counters, and the practical demands of an active household.' },
            { h: 'Comfortable Bedroom Flooring', d: 'Create bedrooms that feel warm, comfortable, and cohesive with the rest of the home. Whether updating a primary suite or refreshing a child’s room, we install flooring with careful attention to fit, transitions, and finish quality.' },
            { h: 'Inviting Living Room Flooring', d: 'Upgrade living spaces with flooring that complements furniture and handles everyday family activity. For homes in communities such as Connerton and Bexley, we provide flooring solutions designed around the room’s style, layout, and regular use.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Land O’ Lakes',
          body: [
            'A well-installed floor can improve how a home looks, feels, and functions every day. All About Flooring Tampa Bay Contractors provides professional flooring installation for homeowners updating worn surfaces, remodeling rooms, or finishing newer properties. As a reliable Flooring Company in Land O’ Lakes, we focus on proper preparation, accurate installation, and a clean finished result suited to each space.',
            'From homes near Land O’ Lakes Heritage Park to communities around Connerton and Lake Padgett, flooring needs can vary by room and household. We help with busy family areas, bedrooms, and living spaces while considering traffic, maintenance, and the overall design of the home.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Land O’ Lakes',
          body: [
            'Quality flooring installation starts with understanding the surface underneath and the way each room will be used. All About Flooring Tampa Bay Contractors considers preparation, measurements, transitions, and material placement to help create an even, professional-looking result. Our approach is built around careful workmanship rather than rushed installation.',
            'Homeowners near US-41, Land O’ Lakes Boulevard, and Lake Padgett can rely on a process tailored to their property. Whether replacing aging flooring before listing a home, remodeling a kitchen, or refreshing heavily used living areas, we work carefully from preparation through final installation.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Land O’ Lakes',
          body: [
            'All About Flooring Tampa Bay Contractors serves Land O’ Lakes homeowners with dependable flooring installation and replacement solutions. Whether updating one area or renovating an entire property, our team provides professional workmanship and helps customers select flooring that matches their design preferences, lifestyle, and maintenance expectations.',
            'We serve Land O’ Lakes and nearby communities including Lutz, Wesley Chapel, and Odessa. Our service area covers neighborhoods near State Road 54, U.S. Highway 41, and Suncoast Parkway, including properties around Conner Preserve, Land O’ Lakes Heritage Park, and local shopping centers.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring is a good choice for busy Land O’ Lakes households?',
          a: 'We recommend options based on traffic levels, room use, maintenance preferences, and the specific needs of your household rather than using the same flooring for every home.',
        },
        {
          q: 'Can you install flooring during a Land O’ Lakes kitchen renovation?',
          a: 'Yes. We can provide flooring installation as part of a kitchen update and help coordinate the new floor with the room’s cabinets, counters, and overall design.',
        },
        {
          q: 'Do you provide flooring services in Connerton and Bexley?',
          a: 'Yes. Our residential flooring services are available throughout Land O’ Lakes, including established and newer communities such as Connerton and Bexley.',
        },
        {
          q: 'Can you replace worn flooring before selling a Land O’ Lakes home?',
          a: 'Yes. We can help update dated or heavily worn flooring with an option that improves the appearance and functionality of the home before it goes on the market.',
        },
        {
          q: 'Can different flooring types be used throughout one Land O’ Lakes home?',
          a: 'Yes. Different rooms can have flooring selected for their individual needs while still maintaining a coordinated appearance between connected spaces.',
        },
      ],
    },
  },
  'apollo-beach': {
    ...makeArea({
      key: 'apollo-beach',
      city: 'Apollo Beach',
      path: '/locations/apollo-beach',
      photo: 1,
      blurb:
        'Apollo Beach is south Hillsborough waterfront - sliders, sand and humidity that punish the wrong floor. Waterproof LVP and porcelain are the usual call; hardwood goes down where the room can take it, after a reading, not before.',
    }),
    // Optimised Apollo Beach location page — same structure as the Odessa
    // template (shared AreaPage `seo` flow). Authored Why Choose Us + Our
    // Process; section prose/feature copy and FAQs are the supplied content
    // verbatim.
    heroTitle: 'Flooring Company in Apollo Beach',
    metaTitle: 'Flooring Company in Apollo Beach - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in Apollo Beach from All About Flooring Tampa Bay Contractors. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Apollo Beach',
        intro:
          'Apollo Beach is south Hillsborough waterfront — sliders, sand, and humidity that punish the wrong floor. As a Flooring Company in Apollo Beach, waterproof LVP and porcelain are the usual call; we take a moisture reading before hardwood goes down, prep and level properly, and keep the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Waterproof-first material advice for sliders, sand, and humidity',
          'Moisture readings taken before hardwood goes down',
          'Subfloor levelling and prep before installation',
          'Even seams and clean transitions across connected rooms',
          'One crew from the first measure through the final walkthrough',
          'Local knowledge of Waterset, MiraBay, and Big Bend Road homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Apollo Beach Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Apollo Beach home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Apollo Beach home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to a waterfront climate and your budget, then confirm it in an itemised written price.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Apollo Beach Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Durable Kitchen Flooring', d: 'Give your kitchen a practical foundation for cooking, spills, meals, and everyday foot traffic. We help Apollo Beach homeowners choose flooring that complements cabinets and countertops while providing the durability and easy maintenance needed for an active household.' },
            { h: 'Comfortable Bedroom Flooring', d: 'Create a more inviting bedroom with flooring selected for comfort, appearance, and everyday use. Whether refreshing a primary suite in MiraBay or updating a child’s bedroom in Waterset, we pay attention to room dimensions, transitions, and installation details.' },
            { h: 'Stylish Living Room Flooring', d: 'Refresh living areas with flooring that supports family gatherings, entertaining, and daily activity. For homes throughout Apollo Beach, we install flooring that works with existing décor and creates a cohesive look while maintaining a durable, professionally finished surface.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Apollo Beach',
          body: [
            'A well-installed floor can transform the comfort and appearance of your home while providing dependable performance for everyday living. All About Flooring Tampa Bay Contractors delivers professional flooring installation for homeowners updating worn surfaces, remodeling rooms, or completing a new interior. As a trusted Flooring Company in Apollo Beach, we focus on careful preparation, accurate measurements, and a clean finished result.',
            'From homes near Apollo Beach Nature Park to communities around Waterset and MiraBay, flooring needs can vary by room and lifestyle. We help homeowners handle busy family spaces, outdated floors, and renovation projects with practical flooring solutions suited to their homes.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Apollo Beach',
          body: [
            'Professional flooring installation depends on more than fitting materials into a room. All About Flooring Tampa Bay Contractors evaluates the existing surface, room layout, transitions, and installation requirements before beginning work. This careful approach helps reduce visible gaps, uneven areas, and other problems that can affect the finished floor.',
            'Homeowners near Big Bend Road, Apollo Beach Boulevard, and Apollo Beach Nature Park can receive flooring solutions tailored to their property. Whether replacing worn flooring after years of family use, updating a kitchen, or preparing a home for sale, our team works carefully from preparation through final installation.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Apollo Beach',
          body: [
            'Apollo Beach homeowners can count on All About Flooring Tampa Bay Contractors for professional flooring services during renovations, replacements, and property upgrades. We provide flooring solutions designed to handle everyday household activity while enhancing the appearance, comfort, and functionality of residential interiors.',
            'We serve Apollo Beach and surrounding communities including Riverview, Ruskin, and Brandon. Our service area includes neighborhoods near U.S. Highway 41, Big Bend Road, and Apollo Beach Boulevard, with properties close to Apollo Beach Nature Preserve, MiraBay, and local waterfront communities.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring works well for active Apollo Beach households?',
          a: 'We consider household traffic, room function, maintenance preferences, and the conditions of your home when helping you choose a flooring option suited to everyday use.',
        },
        {
          q: 'Can you install flooring during an Apollo Beach kitchen remodel?',
          a: 'Yes. We can install new flooring as part of a kitchen renovation and help ensure the finished floor works well with the room’s existing design and layout.',
        },
        {
          q: 'Do you provide flooring services in Waterset and MiraBay?',
          a: 'Yes. We provide residential flooring services throughout Apollo Beach, including established and newer communities such as Waterset and MiraBay.',
        },
        {
          q: 'Can you replace dated flooring before selling an Apollo Beach home?',
          a: 'Yes. Replacing worn or outdated flooring can refresh the appearance of a home. We can help you select and install an option appropriate for the property.',
        },
        {
          q: 'Can you use different flooring in separate rooms of an Apollo Beach home?',
          a: 'Yes. Flooring can be selected according to the needs of each room while maintaining a coordinated appearance throughout connected living spaces.',
        },
      ],
    },
  },
  ruskin: {
    ...makeArea({
      key: 'ruskin',
      city: 'Ruskin',
      path: '/locations/ruskin',
      photo: 2,
      blurb:
        'Ruskin sits on the south bay, between agricultural land and new subdivisions. We install luxury vinyl, tile and hardwood in both, sequenced so you are not living on plywood for a month.',
    }),
    // Optimised Ruskin location page — same structure as the Odessa template
    // (shared AreaPage `seo` flow). Authored Why Choose Us + Our Process;
    // section prose/feature copy and FAQs are the supplied content verbatim.
    heroTitle: 'Flooring Company in Ruskin',
    metaTitle: 'Flooring Company in Ruskin - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors, Flooring Company in Ruskin for floor installation, replacement, and residential flooring upgrades. Call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Ruskin',
        intro:
          'Ruskin sits on the south bay, between agricultural land and new subdivisions. As a Flooring Company in Ruskin, we work in both older homes and new builds, prep and level the subfloor properly, and sequence the job so you are not living on plywood for a month — keeping the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Experience across older homes and new south-bay subdivisions',
          'Subfloor moisture testing and levelling before installation',
          'Job sequencing that keeps your home livable during the work',
          'Even seams and clean transitions across connected rooms',
          'A fixed, itemised written quote before any work begins',
          'Local knowledge of Ruskin Park, Wimauma Road, and US-41 homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Ruskin Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Ruskin home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Ruskin home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to your home and budget, then confirm it in an itemised written price before work starts.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Ruskin Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Practical Kitchen Flooring', d: 'Choose flooring that can handle cooking, spills, daily foot traffic, and regular cleaning. We help Ruskin homeowners select attractive options that complement kitchen cabinets and countertops while fitting the demands of an active household.' },
            { h: 'Comfortable Bedroom Flooring', d: 'Refresh bedrooms with flooring that creates a comfortable and cohesive atmosphere. Whether updating a primary suite or preparing a child’s room for a growing family, we consider the room layout, transitions, and installation details.' },
            { h: 'Inviting Living Room Flooring', d: 'Give your living room a fresh foundation for relaxing, entertaining, and everyday family activity. We install flooring that complements existing décor while providing the durability and finished appearance homeowners want throughout their Ruskin properties.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Ruskin',
          body: [
            'A professionally installed floor can improve the comfort, appearance, and everyday function of a Ruskin home. All About Flooring Tampa Bay Contractors provides dependable flooring installation for homeowners replacing worn surfaces, updating older interiors, or completing renovation projects. As a trusted Flooring Company in Ruskin, we focus on proper preparation, precise installation, and a polished finished result.',
            'From homes near Ruskin Park to communities around Wimauma Road and College Avenue, flooring needs can differ by household and room. We help with busy family areas, outdated floors, and home improvement projects using solutions selected for practical use and lasting appeal.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Ruskin',
          body: [
            'Effective flooring installation begins with evaluating the space before materials are installed. All About Flooring Tampa Bay Contractors considers the existing surface, measurements, room layout, transitions, and installation requirements to help produce a level, consistent result. Careful preparation also helps prevent avoidable finishing issues.',
            'Homeowners near US-41, Ruskin Park, and College Avenue can receive flooring solutions tailored to their property. Whether replacing heavily worn floors, updating a kitchen, or refreshing an interior before selling, our team handles each project with attention to detail from preparation through completion.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Ruskin',
          body: [
            'All About Flooring Tampa Bay Contractors provides Ruskin residents with dependable flooring installation, replacement, and remodeling services. We work with homeowners and property owners to improve outdated interiors using flooring solutions chosen for durability, appearance, comfort, and the practical requirements of each individual space.',
            'Our Ruskin service area includes nearby communities such as Apollo Beach, Wimauma, and Riverview. We serve neighborhoods around U.S. Highway 41, College Avenue, and I-75, including properties near E.G. Simmons Regional Park, Ruskin Inlet, and local shopping areas.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring works well for busy Ruskin households?',
          a: 'We consider household traffic, room function, maintenance preferences, and the existing space when helping you select flooring suited to everyday living.',
        },
        {
          q: 'Can you install flooring during a Ruskin kitchen renovation?',
          a: 'Yes. We can install new flooring as part of a kitchen update and help ensure the finished surface works with the room’s layout and overall design.',
        },
        {
          q: 'Do you provide flooring services near Wimauma Road and US-41?',
          a: 'Yes. We provide residential flooring services throughout Ruskin, including homes located near major local routes and surrounding residential communities.',
        },
        {
          q: 'Can you replace worn flooring before selling a Ruskin home?',
          a: 'Yes. We can help replace dated or heavily worn flooring with an option that improves the appearance and functionality of the property.',
        },
        {
          q: 'Can different flooring styles be used throughout one Ruskin home?',
          a: 'Yes. Individual rooms can use flooring selected for their specific needs while maintaining a coordinated appearance between connected areas.',
        },
      ],
    },
  },
  valrico: {
    ...makeArea({
      key: 'valrico',
      city: 'Valrico',
      path: '/locations/valrico',
      photo: 3,
      blurb:
        'Valrico is east of Brandon - family homes that need a floor that survives kids, dogs and a Florida summer. Same Tampa crew, same itemised price, luxury vinyl, hardwood and porcelain tile.',
    }),
    // Optimised Valrico location page — same structure as the Odessa template
    // (shared AreaPage `seo` flow). Authored Why Choose Us + Our Process;
    // section prose/feature copy and FAQs are the supplied content verbatim.
    heroTitle: 'Flooring Company in Valrico',
    metaTitle: 'Flooring Company in Valrico - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors, Flooring Company in Valrico for floor installation, replacement, and residential flooring upgrades. Call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Valrico',
        intro:
          'Valrico is east of Brandon — family homes that need a floor to survive kids, dogs, and a Florida summer. As a Flooring Company in Valrico, we recommend durable, easy-care materials, prep and level the subfloor properly, and send the same Tampa crew at the same itemised price from the first measure to the final walkthrough.',
        points: [
          'Durable, easy-care material advice for kids, dogs, and daily wear',
          'Subfloor moisture testing and levelling before installation',
          'The same Tampa crew that priced the job does the install',
          'Even seams and clean transitions across connected rooms',
          'A fixed, itemised written quote before any work begins',
          'Local knowledge of Bloomingdale, FishHawk, and Lithia Springs Road homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Valrico Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Valrico home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Valrico home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to a busy family home and your budget, then confirm it in an itemised written price.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Valrico Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Durable Kitchen Flooring', d: 'Give your kitchen a dependable surface for cooking, spills, family meals, and daily foot traffic. We help Valrico homeowners choose flooring that complements cabinets and countertops while fitting the practical demands of an active household.' },
            { h: 'Comfortable Bedroom Flooring', d: 'Create a more comfortable bedroom with flooring selected around the room’s purpose and design. Whether updating a primary suite or refreshing a child’s room, we focus on proper fitting, transitions, and a polished installation.' },
            { h: 'Stylish Living Room Flooring', d: 'Upgrade your living room with flooring that complements furniture, décor, and everyday activity. For homes throughout Valrico, we install flooring designed to provide a cohesive appearance while standing up to regular family use.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Valrico',
          body: [
            'A professionally installed floor can refresh the look of a Valrico home while providing dependable performance for everyday routines. All About Flooring Tampa Bay Contractors helps homeowners replace worn surfaces, update dated rooms, and complete renovation projects with careful installation and quality-focused workmanship. As a trusted Flooring Company in Valrico, we prioritize proper preparation, accurate measurements, and a clean finished appearance.',
            'From homes near Bloomingdale Regional Library to communities around FishHawk Boulevard and Lithia Springs Road, flooring needs vary by household. We help families dealing with high-traffic living areas, remodeling projects, and aging floors choose practical solutions suited to their space and lifestyle.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Valrico',
          body: [
            'Quality flooring installation starts with understanding the condition and layout of the space. All About Flooring Tampa Bay Contractors considers the existing surface, room measurements, transitions, and material placement before installation. This careful process helps create a consistent finish and reduces avoidable installation problems.',
            'Homeowners near FishHawk Boulevard, Lithia Springs Road, and Bloomingdale Regional Library can receive flooring solutions tailored to their property. Whether replacing worn flooring in a busy family room, updating a kitchen, or improving an older home before listing, we approach each project with attention to detail.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Valrico',
          body: [
            'Valrico homeowners can turn to All About Flooring Tampa Bay Contractors for reliable flooring installation and replacement services. Our team supports renovation projects of different sizes, providing professional workmanship and helping customers select attractive, durable flooring that works well with their home’s layout and lifestyle.',
            'We serve Valrico and nearby areas including Brandon, Lithia, and Plant City. Our local service area covers neighborhoods near State Road 60, Lithia Pinecrest Road, and Bloomingdale Avenue, including properties close to Twin Lakes Park, FishHawk Ranch, and local retail centers.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring works well for busy Valrico family homes?',
          a: 'We consider traffic levels, room function, maintenance preferences, and household needs to help you choose flooring that fits how your Valrico home is actually used.',
        },
        {
          q: 'Can you install new flooring during a Valrico kitchen remodel?',
          a: 'Yes. We can install flooring as part of a kitchen renovation and help ensure the finished surface complements the room’s layout, cabinetry, and overall design.',
        },
        {
          q: 'Do you provide flooring services near FishHawk Boulevard and Lithia Springs Road?',
          a: 'Yes. We provide residential flooring services throughout Valrico, including homes near these major local roads and surrounding residential communities.',
        },
        {
          q: 'Can you replace outdated flooring before selling a Valrico home?',
          a: 'Yes. We can help update worn or dated floors with an appropriate replacement that gives the interior a cleaner, more current appearance.',
        },
        {
          q: 'Can you coordinate flooring between different rooms in a Valrico home?',
          a: 'Yes. We can help select flooring for individual rooms while keeping colors, materials, transitions, and overall design visually coordinated throughout the home.',
        },
      ],
    },
  },
  lithia: {
    ...makeArea({
      key: 'lithia',
      city: 'Lithia',
      path: '/locations/lithia',
      photo: 4,
      blurb:
        'Lithia is further east Hillsborough - newer builds and larger lots where a whole-house LVP or hardwood job is the norm. We measure, write the price, and install with one crew so the handoff never happens.',
    }),
    // Optimised Lithia location page — same structure as the Odessa template
    // (shared AreaPage `seo` flow). Authored Why Choose Us + Our Process;
    // section prose/feature copy and FAQs are the supplied content verbatim.
    heroTitle: 'Flooring Company in Lithia',
    metaTitle: 'Flooring Company in Lithia - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors, Flooring Company in Lithia for floor installation, replacement, and residential flooring upgrades. Call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Lithia',
        intro:
          'Lithia is further east Hillsborough — newer builds and larger lots where a whole-house LVP or hardwood job is the norm. As a Flooring Company in Lithia, we measure, write the price, and install with one crew so the handoff never happens, prepping and levelling the subfloor properly before a plank goes down.',
        points: [
          'One crew from the first measure through the final walkthrough',
          'Set up for whole-house LVP and hardwood on larger lots',
          'Subfloor moisture testing and levelling before installation',
          'Even seams and clean transitions across connected rooms',
          'A fixed, itemised written quote before any work begins',
          'Local knowledge of FishHawk Ranch, Lithia Springs, and Alafia River homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Lithia Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Lithia home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Lithia home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to your home and budget, then confirm it in an itemised written price before work starts.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Lithia Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring for Active Lithia Homes', d: 'Choose flooring that balances appearance, durability, and easy maintenance for kitchens where meals, gatherings, and daily family activity happen. We install flooring with careful attention to edges, transitions, and surrounding surfaces.' },
            { h: 'Comfortable Bedroom Flooring', d: 'Create quieter, more comfortable bedrooms with flooring that suits your preferred style and daily routine. Our installation work focuses on accurate measurements, smooth transitions, and a finished surface that complements the room.' },
            { h: 'Durable Living Room Flooring', d: 'Give busy living spaces a refreshed appearance with flooring designed around everyday traffic. Whether updating a family room near FishHawk Ranch or renovating an older Lithia home, we focus on dependable installation and a polished final result.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Lithia',
          body: [
            'A Flooring Company in Lithia can help homeowners create comfortable, durable interiors with flooring selected for each room’s needs. From busy family areas near FishHawk Ranch to established homes around Lithia Springs, we install flooring with attention to proper preparation, layout, transitions, and finishing details. Our approach helps create a clean, consistent result that complements your home.',
            'Whether you are replacing worn flooring before selling, updating a kitchen, or refreshing bedrooms for a growing family, we provide practical installation solutions. We also serve homeowners near FishHawk Boulevard and Alafia River, helping Lithia properties achieve a finished look built for everyday use.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Lithia',
          body: [
            'Our flooring contractors bring careful installation practices to Lithia homes, from newer residences in FishHawk Ranch to properties near Lithia Springs. We assess the existing surface, account for room conditions, and plan layouts so the finished flooring looks balanced and performs properly. Attention to preparation and transitions helps prevent avoidable installation issues.',
            'Homeowners may need new flooring after years of family traffic, a kitchen remodel, or preparation for a home sale. We provide practical solutions suited to the property and intended use, including projects near Alafia River and FishHawk Boulevard. Our goal is straightforward: quality workmanship and flooring that feels right for your home.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Lithia',
          body: [
            'Residents of Lithia can rely on All About Flooring Tampa Bay Contractors for professional flooring services supporting home renovations, replacements, and interior upgrades. We focus on quality installation and flooring choices that complement residential spaces while providing the durability and maintenance characteristics customers need.',
            'We serve Lithia and surrounding communities including Valrico, FishHawk, and Riverview. Our service area includes neighborhoods around Lithia Pinecrest Road and FishHawk Boulevard, with properties near Alafia River State Park, FishHawk Ranch, and local shopping and dining areas.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring works well for busy family homes in Lithia?',
          a: 'Flooring should match the room’s traffic, moisture exposure, maintenance needs, and household routine. We can help Lithia homeowners compare practical options for kitchens, living areas, bedrooms, and other frequently used spaces.',
        },
        {
          q: 'Can you install new flooring in homes around FishHawk Ranch?',
          a: 'Yes. We provide residential flooring installation throughout Lithia, including homes around FishHawk Ranch. Each project is planned around the existing rooms, surface conditions, layout, and flooring selected by the homeowner.',
        },
        {
          q: 'Do you replace flooring during a Lithia kitchen renovation?',
          a: 'Yes. If you are updating a kitchen, we can install replacement flooring as part of the renovation. Proper measurements, preparation, and transitions are important when new flooring meets cabinets, adjoining rooms, or other surfaces.',
        },
        {
          q: 'Can you replace worn flooring before I put my Lithia home on the market?',
          a: 'Yes. Replacing visibly worn flooring can help give rooms a cleaner, more updated appearance before a home is listed. We can discuss flooring choices that fit the property, room use, and desired finished look.',
        },
        {
          q: 'Do you serve homes near Lithia Springs and the Alafia River area?',
          a: 'Yes. Our flooring services are available throughout Lithia, including residential areas near Lithia Springs and the Alafia River. Contact us to discuss your project and determine the right installation approach for your home.',
        },
      ],
    },
  },
  oldsmar: {
    ...makeArea({
      key: 'oldsmar',
      city: 'Oldsmar',
      path: '/locations/oldsmar',
      photo: 5,
      blurb:
        'Oldsmar sits between Tampa and the north bay - ranch homes, townhouses and remodels that have to match what is already there. We install luxury vinyl, tile and hardwood so the new floor belongs in the house, not a showroom leftover.',
    }),
    // Optimised Oldsmar location page — same structure as the Odessa template
    // (shared AreaPage `seo` flow). Authored Why Choose Us + Our Process;
    // section prose/feature copy and FAQs are the supplied content verbatim.
    heroTitle: 'Flooring Company in Oldsmar',
    metaTitle: 'Flooring Company in Oldsmar - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors, Flooring Company in Oldsmar for floor installation, replacement, and residential flooring upgrades. Call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Oldsmar',
        intro:
          'Oldsmar sits between Tampa and the north bay — ranch homes, townhouses, and remodels that have to match what is already there. As a Flooring Company in Oldsmar, we help the new floor belong in the house rather than look like a showroom leftover, prepping and levelling properly and keeping the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Flooring matched to the home’s existing look, not a showroom default',
          'Subfloor moisture testing and levelling before installation',
          'Experience across ranch homes, townhouses, and remodels',
          'Even seams and clean transitions across connected rooms',
          'One crew from the first measure through the final walkthrough',
          'Local knowledge of Forest Lakes, Oldsmar Town Center, and Tampa Road homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Oldsmar Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Oldsmar home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Oldsmar home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring that matches your home and budget, then confirm it in an itemised written price before work starts.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Oldsmar Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring for Busy Oldsmar Homes', d: 'Choose flooring that combines practical maintenance with an attractive finish for kitchens used for cooking, dining, and family gatherings. We focus on accurate installation around cabinets, appliances, and adjoining rooms.' },
            { h: 'Comfortable Flooring for Bedrooms', d: 'Refresh bedrooms with flooring that supports a comfortable, inviting atmosphere. We carefully plan layouts, measurements, and transitions to create a smooth finished surface that complements the room’s existing design.' },
            { h: 'Durable Flooring for Living Spaces', d: 'Update living rooms and family areas with flooring suited to regular foot traffic and everyday activities. Whether your home is near Forest Lakes or Oldsmar Town Center, we focus on a clean, consistent installation.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Oldsmar',
          body: [
            'A Flooring Company in Oldsmar can help homeowners improve their interiors with flooring selected for comfort, durability, and everyday use. We provide careful installation for homes throughout the community, including properties near Oldsmar Town Center and the Forest Lakes area. Each project receives attention to surface preparation, accurate measurements, transitions, and finishing details.',
            'Whether you are replacing worn flooring after years of household traffic, updating a kitchen, or preparing a home near Tampa Road for sale, we provide practical installation solutions. Our goal is to create attractive, functional floors that complement Oldsmar homes while delivering dependable workmanship for daily living.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Oldsmar',
          body: [
            'Our flooring contractors understand that Oldsmar homes can have different layouts, existing surfaces, and renovation needs. From established properties near Veterans Memorial Park to newer residences around Forest Lakes, we approach each installation with careful preparation and attention to detail. Proper planning helps ensure flooring fits the space and transitions cleanly between rooms.',
            'Homeowners may contact us when floors become worn, a remodeling project changes the room layout, or a property needs a refreshed appearance before listing. As a Flooring Company in Oldsmar, we provide practical recommendations and quality installation designed around each home’s needs, helping homeowners achieve a finished result they can enjoy.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring Tampa Bay Contractors – Oldsmar',
          body: [
            'All About Flooring Tampa Bay Contractors offers Oldsmar homeowners dependable flooring installation, replacement, and renovation services. Whether updating an individual room or improving an entire property, our team provides practical flooring recommendations and professional workmanship focused on attractive, durable, and functional results.',
            'We serve Oldsmar and nearby communities including Safety Harbor, Palm Harbor, and Westchase. Our service area includes neighborhoods near Tampa Road, Race Track Road, and Veterans Expressway, with properties close to Oldsmar Trail, Mobbly Bayou Wilderness Preserve, and local shopping destinations.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you replace flooring in older Oldsmar homes?',
          a: 'Yes. We can assess existing flooring and the underlying surface before installing new materials. This is especially useful when older Oldsmar homes have worn flooring, uneven areas, or transitions that need careful attention during replacement.',
        },
        {
          q: 'Do you install flooring in homes near Forest Lakes?',
          a: 'Yes. We provide residential flooring installation throughout Oldsmar, including the Forest Lakes area. We plan each project around the home’s layout, existing conditions, selected flooring, and the way each room is used.',
        },
        {
          q: 'What flooring should I consider for an Oldsmar kitchen renovation?',
          a: 'The right choice depends on the kitchen’s traffic, maintenance requirements, design, and connection to nearby rooms. We can help homeowners compare suitable flooring options and plan an installation that works with existing cabinets and transitions.',
        },
        {
          q: 'Can new flooring help refresh an Oldsmar home before selling?',
          a: 'Yes. Replacing visibly worn flooring can give living spaces a cleaner, more updated appearance. We can discuss practical flooring options based on the condition of the existing floors and the look you want before listing your property.',
        },
        {
          q: 'Do you serve homes around Tampa Road and Veterans Memorial Park?',
          a: 'Yes. Our flooring services are available throughout Oldsmar, including residential areas near Tampa Road and Veterans Memorial Park. Contact us to discuss your flooring needs and plan the next steps for your home.',
        },
      ],
    },
  },
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

