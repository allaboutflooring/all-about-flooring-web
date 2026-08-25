/**
 * St. Petersburg listing - own URLs, nav, copy, and cards.
 *
 * Lives at /top-flooring-companies-st-petersburg (the indexed slug from
 * the old site). Nested under that path so Tampa keeps /locations/*.
 * Copy stays Pinellas-specific so this listing does not compete with
 * the Tampa homepage.
 */

export const STPETE_BASE = '/top-flooring-companies-st-petersburg'

const svc = (path) => `${STPETE_BASE}/services/${path}`
const loc = (path) => `${STPETE_BASE}/locations/${path}`

function service(partial) {
  return {
    inNav: true,
    webp: true,
    ...partial,
    tick: partial.tick || partial.crumb,
    heading: partial.heading || partial.title,
    body: partial.body || (partial.intro ? [partial.intro] : []),
    alt: partial.alt || `${partial.title} in St. Petersburg`,
  }
}

export const STPETE_SERVICE_PAGES = {
  lvp: service({
    key: 'lvp',
    path: svc('luxury-vinyl-plank-installation'),
    title: 'Luxury Vinyl Plank (LVP) Flooring Installation',
    heroTitle: 'LVP Flooring',
    crumb: 'LVP Flooring',
    navLabel: 'LVP Flooring Installation',
    workKey: 'wood-look-plank-tile',
    alt: 'Empty room with newly installed wood-look luxury vinyl plank flooring, white baseboards and a shaded window',
    tick: 'Luxury vinyl plank',
    heading: 'Waterproof, quiet, and built for the Gulf.',
    description:
      'LVP flooring installation in St. Petersburg. Waterproof luxury vinyl plank for beach condos, kitchens and Florida humidity. Free in-home measure.',
    intro:
      'St. Petersburg homes see sand, sliders and summer humidity. Waterproof LVP is the flooring we install most here - quiet underfoot, pet-friendly, and specified for a Gulf-side slab.',
  }),

  laminate: service({
    key: 'laminate',
    path: svc('laminate-flooring-installation'),
    title: 'Laminate Flooring Installation',
    heroTitle: 'Laminate Flooring',
    crumb: 'Laminate',
    navLabel: 'Laminate Flooring Installation',
    description:
      'Laminate flooring installation in St. Petersburg. Click-lock over a levelled base with expansion set for Pinellas humidity. Free in-home measure.',
    intro:
      'Laminate is the hardest-wearing surface per dollar in St. Petersburg ranches and condos. We level the slab, set the underlayment, and leave the expansion the manufacturer wrote so joints do not peak in July.',
  }),

  hardwood: service({
    key: 'hardwood',
    path: svc('hardwood-flooring-installation'),
    title: 'Hardwood Flooring Installation',
    heroTitle: 'Hardwood Flooring',
    crumb: 'Hardwood',
    navLabel: 'Hardwood Flooring Installation',
    workKey: 'character-hickory-floor',
    alt: 'Character hickory hardwood flooring in a finished room',
    tick: 'Solid hardwood',
    heading: 'Nail-down and glue-down, specified for the room.',
    description:
      'Hardwood flooring installation in St. Petersburg. Nail-down and glue-down oak, maple and hickory, acclimatised on site. Free in-home measure.',
    intro:
      'Solid hardwood still belongs in St. Petersburg rooms that can take it. Boards acclimatise on site, the subfloor is moisture-tested, and we specify nail-down or glue-down for the room - not from habit.',
  }),

  engineered: service({
    key: 'engineered',
    path: svc('engineered-hardwood-installation'),
    title: 'Engineered Hardwood Flooring Installation',
    heroTitle: 'Engineered Hardwood',
    crumb: 'Engineered Hardwood',
    navLabel: 'Engineered Hardwood Installation',
    description:
      'Engineered hardwood installation in St. Petersburg. Real timber wear layer on a stable core - the right hardwood over concrete slab. Free in-home measure.',
    intro:
      'Engineered hardwood is the wood we will lay over a St. Petersburg slab and in rooms that sit against a bath or a slider. Glue-down, float or nail, specified from the moisture reading.',
  }),

  refinishing: service({
    key: 'refinishing',
    path: svc('refinishing-floors-tampa'),
    title: 'Hardwood Floor Refinishing',
    heroTitle: 'Floor Refinishing',
    crumb: 'Refinishing',
    navLabel: 'Hardwood Floor Refinishing',
    description:
      'Hardwood floor refinishing in St. Petersburg - dustless sanding, stain and polyurethane. Usually a third of the cost of replacement. Free in-home measure.',
    intro:
      'Bring back a floor you already own in St. Petersburg. We sand, stain if you want a new colour, and build polyurethane in coats. Engineered floors with enough wear layer can be refinished the same way.',
  }),

  sanding: service({
    key: 'sanding',
    path: svc('wood-floor-sanding'),
    title: 'Wood Floor Sanding & Polyurethane Coating',
    heroTitle: 'Wood Floor Sanding',
    crumb: 'Wood Floor Sanding',
    navLabel: 'Wood Floor Sanding',
    description:
      'Wood floor sanding in St. Petersburg plus polyurethane coating. Dustless sanding through the grits, walkable in a day. Free in-home measure.',
    intro:
      'Wood floor sanding and the polyurethane coat that protects it, run as one sequence in St. Petersburg homes. Dustless sanding through the grits, then oil or water-based polyurethane built in coats.',
  }),

  tile: service({
    key: 'tile',
    path: svc('tile-installation'),
    title: 'Tile Installation',
    heroTitle: 'Tile Installation',
    crumb: 'Tile',
    navLabel: 'Tile Installation',
    workKey: 'checkerboard-open-plan',
    alt: 'Diagonal checkerboard porcelain tile meeting wood-look plank at a kitchen',
    tick: 'Porcelain and stone',
    heading: 'Level the substrate first. Then the tile.',
    description:
      'Tile installation in St. Petersburg - porcelain and natural stone, large format included. Substrate levelled first. Free in-home measure.',
    intro:
      'Porcelain and stone for St. Petersburg floors, walls and kitchens. We check flatness, patch where it needs it, and set with the right mortar so a large-format tile does not lip on a Gulf-side slab.',
  }),

  bathroom: service({
    key: 'bathroom',
    path: svc('tile-installers-for-floors-and-backsplashes'),
    title: 'Bathroom Tile & Backsplash Installation',
    heroTitle: 'Bath & Backsplash Tile',
    crumb: 'Bath & Backsplash',
    navLabel: 'Bathroom Tile & Backsplash',
    workKey: 'star-pebble-shower',
    webp: false,
    alt: 'Walk-in shower with star mosaic feature wall, pebble floor and marble-look tile',
    tick: 'Showers, baths, kitchens',
    heading: 'Waterproof first. Tile second.',
    description:
      'Bathroom tile and kitchen backsplash installation in St. Petersburg. Waterproof membrane, shower walls, niches and backsplash tile. Free in-home measure.',
    intro:
      'Tile installers for St. Petersburg showers, bathroom floors and kitchen backsplashes. Waterproof membrane before any tile, niches cut to the module, outlets and the range planned into the layout.',
  }),

  tileCompany: service({
    inNav: false,
    key: 'tile',
    path: svc('tile-company'),
    title: 'Tile Company in St. Petersburg',
    heroTitle: 'Tile Company',
    crumb: 'Tile Company',
    description:
      'St. Petersburg tile company for floors, showers and backsplashes. One crew from waterproofing to grout. Free in-home measure.',
    intro:
      'A St. Petersburg tile company that still sends the people who priced the job. Floors, showers, kitchen backsplashes - one crew, written price, no rotating sub.',
  }),

  contractor: service({
    inNav: false,
    key: 'hardwood',
    path: svc('flooring-contractor'),
    title: 'Flooring Contractor in St. Petersburg',
    heroTitle: 'Flooring Contractor',
    crumb: 'Flooring Contractor',
    description:
      'Flooring contractor in St. Petersburg for hardwood, LVP, laminate and tile. One crew from demolition to walkthrough. Free in-home measure.',
    intro:
      'All About Flooring is the flooring contractor in St. Petersburg that measures, writes the price, and installs the floor. Hardwood, luxury vinyl, laminate, tile and refinishing - licensed, insured, and local to Pinellas.',
  }),
}

export const STPETE_NAV_SERVICES = Object.values(STPETE_SERVICE_PAGES)
  .filter((p) => p.inNav)
  .map((p) => ({ href: p.path, label: p.navLabel || p.crumb }))

export const STPETE_SERVICE_CARDS = [
  {
    key: 'lvp',
    title: 'Luxury Vinyl Plank (LVP) Flooring Installation',
    body: 'Waterproof, quiet underfoot and built for sand, sliders and a St. Petersburg summer. Our first recommendation for kitchens, condos and homes with dogs.',
    href: STPETE_SERVICE_PAGES.lvp.path,
  },
  {
    key: 'laminate',
    title: 'Laminate Flooring Installation',
    body: 'The hardest-wearing surface per dollar. Click-lock over a levelled Pinellas slab, with expansion set so it never peaks in July.',
    href: STPETE_SERVICE_PAGES.laminate.path,
  },
  {
    key: 'hardwood',
    title: 'Hardwood Flooring Installation',
    body: 'Solid oak, maple and hickory, nailed or glued to spec. Acclimatised on site before a single board goes down.',
    href: STPETE_SERVICE_PAGES.hardwood.path,
  },
  {
    key: 'engineered',
    title: 'Engineered Hardwood Flooring Installation',
    body: 'Real timber wear layer on a stable core - the hardwood we will lay over concrete and next to a bath or a slider.',
    href: STPETE_SERVICE_PAGES.engineered.path,
  },
  {
    key: 'refinishing',
    title: 'Hardwood Floor Refinishing',
    body: 'Sand, stain and reseal a floor you already own. Usually a third of the cost of replacement, with none of the demolition.',
    href: STPETE_SERVICE_PAGES.refinishing.path,
  },
  {
    key: 'sanding',
    title: 'Wood Floor Sanding',
    body: 'Dustless sanding through the grits, then polyurethane built in coats. Walkable in a day, furniture back within the week.',
    href: STPETE_SERVICE_PAGES.sanding.path,
  },
  {
    key: 'tile',
    title: 'Tile Installation',
    body: 'Porcelain and natural stone, large format included. We level the substrate first - lippage is what happens when nobody does.',
    href: STPETE_SERVICE_PAGES.tile.path,
  },
  {
    key: 'bathroom',
    title: 'Bathroom Tile & Backsplash Installation',
    body: 'Waterproof membrane before any tile. Showers, niches and kitchen backsplashes by the same crew that does the floor.',
    href: STPETE_SERVICE_PAGES.bathroom.path,
  },
]

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
  'One St. Petersburg crew from the first measure to the last baseboard. Written itemised price, a date we keep, and a floor built for Gulf humidity - not just a photograph. Licensed, insured, and local to Pinellas.'

function makeArea({ key, city, slug, blurb, photo = 0 }) {
  const shot = AREA_PHOTOS[photo % AREA_PHOTOS.length]
  return {
    key,
    city,
    path: loc(slug),
    heroTitle: `Expert Flooring Company in ${city}`,
    crumb: city,
    description: `Flooring installation in ${city}, FL - luxury vinyl, tile and hardwood by a St. Petersburg crew that measures, prices and installs the job themselves.`,
    tick: `${city}, Florida`,
    heading: `Flooring for ${city} homes, installed by the people who priced it.`,
    intro: blurb,
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
    close: AREA_CLOSE,
  }
}

export const STPETE_AREA_PAGES = {
  'st-pete-beach': makeArea({
    key: 'st-pete-beach',
    city: 'St. Pete Beach',
    slug: 'st-pete-beach-fl',
    photo: 0,
    blurb:
      'St. Pete Beach condos and Gulf-front houses take sand, salt air and sliders. We install waterproof LVP, porcelain tile and hardwood specified for a barrier-island climate, and we work around building rules when the job is in a stacked unit.',
  }),
  'treasure-island': makeArea({
    key: 'treasure-island',
    city: 'Treasure Island',
    slug: 'treasure-island-fl',
    photo: 1,
    blurb:
      'Treasure Island sits on a thin barrier strip where humidity and beach traffic punish the wrong floor. Luxury vinyl and tile are the usual call; hardwood goes down where the room can take it, after a moisture reading, not before.',
  }),
  seminole: makeArea({
    key: 'seminole',
    city: 'Seminole',
    slug: 'seminole-fl',
    photo: 2,
    blurb:
      'Seminole is mid-Pinellas - ranch homes, additions and full-house re-floors a short drive from our St. Petersburg crew. We pull the old floor, prep the slab, and install LVP, hardwood or tile with one team from demolition to baseboards.',
  }),
  gulfport: makeArea({
    key: 'gulfport',
    city: 'Gulfport',
    slug: 'gulfport-fl',
    photo: 3,
    blurb:
      'Gulfport bungalows and waterfront cottages sit minutes from our St. Petersburg listing. We install luxury vinyl, tile and hardwood that look right in an older house and still live through a Florida summer.',
  }),
  largo: makeArea({
    key: 'largo',
    city: 'Largo',
    slug: 'largo-fl',
    photo: 4,
    blurb:
      'Largo is one of the larger cities we cover from St. Petersburg - family homes, open plans and plenty of LVP. Same measure, same written price, same crew. We do not treat it as a distant add-on.',
  }),
  'pinellas-park': makeArea({
    key: 'pinellas-park',
    city: 'Pinellas Park',
    slug: 'pinellas-park-fl',
    photo: 5,
    blurb:
      'Pinellas Park is central Pinellas, a short hop north of St. Petersburg. Ranch homes and additions get luxury vinyl, hardwood and tile from the same St. Petersburg crew that priced the rooms.',
  }),
  'madeira-beach': makeArea({
    key: 'madeira-beach',
    city: 'Madeira Beach',
    slug: 'madeira-beach-fl',
    photo: 0,
    blurb:
      'Madeira Beach condos and cottages see the same sand and salt as the rest of the barrier islands. Waterproof LVP and porcelain are our first recommendations; we sequence the job around building access and elevator windows.',
  }),
  'south-pasadena': makeArea({
    key: 'south-pasadena',
    city: 'South Pasadena',
    slug: 'south-pasadena-fl',
    photo: 1,
    blurb:
      'South Pasadena sits between St. Petersburg and the beaches - condos, villas and single-family homes that need a floor that holds up to Gulf humidity. We moisture-test the slab and install LVP, tile or hardwood with one crew.',
  }),
  'safety-harbor': makeArea({
    key: 'safety-harbor',
    city: 'Safety Harbor',
    slug: 'safety-harbor-fl',
    photo: 2,
    blurb:
      'Safety Harbor is the north edge of the area we cover from St. Petersburg - downtown bungalows and waterfront houses. Same itemised price, same crew, no franchise handoff.',
  }),
}

export const STPETE_NAV_AREAS = Object.values(STPETE_AREA_PAGES).map((a) => ({
  href: a.path,
  label: a.city,
}))

export const stPeteAreaHref = (city) =>
  Object.values(STPETE_AREA_PAGES).find((a) => a.city.toLowerCase() === city.toLowerCase())
    ?.path ?? null

export const STPETE_NAV = [
  { href: STPETE_BASE, label: 'Home' },
  { href: `${STPETE_BASE}/services`, label: 'Services', children: STPETE_NAV_SERVICES },
  { href: `${STPETE_BASE}/locations`, label: 'Locations', children: STPETE_NAV_AREAS },
]

export const STPETE_AREA_INTRO =
  'Our St. Petersburg crew covers the city and the Pinellas towns around it - St. Pete Beach, Treasure Island, Seminole, Gulfport, Largo, Pinellas Park, Madeira Beach, South Pasadena and Safety Harbor.'

export const STPETE_FAQS = [
  {
    q: 'What flooring services do you offer in St. Petersburg?',
    a: 'Flooring installation for luxury vinyl plank, laminate, hardwood, engineered hardwood and tile, plus wood floor sanding, refinishing and bathroom or kitchen backsplash tile. One St. Petersburg crew handles the job from measure to walkthrough.',
  },
  {
    q: 'Do you work as flooring installers for condos as well as houses?',
    a: 'Yes. A lot of St. Petersburg and beach-town work is stacked units. We work around building rules, elevator reservations and quiet hours, and we specify waterproof products where sand and sliders would punish a solid hardwood.',
  },
  {
    q: 'How long will my rooms be out of use?',
    a: 'A single room is usually one to two days. A whole floor is three to six. A full bathroom is around nine days because waterproofing and tile each have to cure. We give you dated stages before we book.',
  },
  {
    q: 'Do I need to move the furniture myself?',
    a: 'No. We move furniture, lift the old floor and take it away. We ask you to clear personal items, anything fragile and the contents of kitchen units before we start.',
  },
  {
    q: 'Can you lay new flooring over the existing floor?',
    a: 'Sometimes, and we will tell you honestly when it is a bad idea. It works over sound tile or a flat slab. It does not work over anything hollow, damp or uneven - covering a failing subfloor buys a year and then costs you the whole job twice.',
  },
  {
    q: 'What happens if the price changes once you start?',
    a: 'It should not. The written quote is fixed. If we missed something at the measure, that is our cost to carry. The only variations we ever raise are things you ask us to add, and those are priced and agreed in writing before we do them.',
  },
  {
    q: 'Are you a licensed flooring company and flooring contractor?',
    a: 'Yes. All About Flooring is a licensed and insured flooring company serving St. Petersburg and nearby Pinellas cities. We are happy to send insurance certificates before you commit to anything.',
  },
  {
    q: 'Which areas do you cover from St. Petersburg?',
    a: 'St. Petersburg itself, plus St. Pete Beach, Treasure Island, Seminole, Gulfport, Largo, Pinellas Park, Madeira Beach, South Pasadena and Safety Harbor. If you are just outside, call (727) 761-2688 and ask - we often can.',
  },
]

export const STPETE_ABOUT = {
  watermark: 'About us',
  eyebrow: 'Who lays your floor',
  headline: 'St. Petersburg floors,',
  headlineAccent: 'installed locally',
  tabs: [
    {
      key: 'history',
      label: 'History',
      img: '/img/about/history-tub.png',
      alt: 'Freestanding soaking tub in front of a circular mosaic feature wall and plantation shutters',
      body: [
        'All About Flooring St. Petersburg is the Pinellas crew of a family-owned flooring company that has been installing floors across Tampa Bay for more than 15 years. This listing is the St. Petersburg shop - a local number, a local measure, and the same standards we built the business on.',
        'We exist for homeowners who want a flooring company, not a showroom that books a third-party installer. The people who walk your St. Petersburg rooms are the people who cut, set, and walk it with you at the end.',
      ],
    },
    {
      key: 'approach',
      label: 'Our commitment',
      img: '/img/about/how-we-work.png',
      alt: 'Kitchen with a navy subway-tile backsplash, white Shaker cabinets, marble counters and gold hardware',
      body: [
        'Flooring installation, refinishing, and tile for showers and backsplashes - specified for Gulf humidity, sand, and the concrete slabs under most Pinellas homes. We moisture-test, write an itemised price, and stay on the job until the snag list is closed. No franchise handoff, no rotating sub.',
      ],
    },
    {
      key: 'owner',
      label: 'The owner',
      heading: 'Meet the Owner: Amanda Neve',
      img: '/img/about/amanda-neve.png?v=2',
      alt: 'Amanda Neve, owner of All About Flooring, in a cream blazer and jeans',
      body: [
        'Hi, I’m Amanda Neve, the face and heart behind our work. Interior design led me into flipping homes, then into the construction side of the trade - the part that still lights me up.',
        'From St. Petersburg houses to beach-town condos, I care that the process is clear, the price is written, and the floor is one you can live on, not just photograph. Thank you for trusting this crew with your rooms.',
      ],
    },
  ],
  points: [
    'Licensed and fully insured in Florida',
    'Free in-home measure in St. Petersburg, no obligation',
    'Itemised written price within 48 hours',
    'One crew from demolition to final detail',
  ],
}
