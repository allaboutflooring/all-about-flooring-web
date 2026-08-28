/**
 * Service hub copy plus every individual service page.
 *
 * `inNav: true` pages appear in the Services menu and the card grid.
 * Hidden pages keep indexed URLs without competing in those lists.
 * `key` is the background photo / icon in public/img/services/bg.
 */
export const SERVICES_PAGE = {
  hero: {
    title: 'Services',
    crumbs: [
      { href: '/', label: 'Home' },
      { label: 'Services' },
    ],
    image: '/img/cta/oakroom-banner',
    alt: 'Oak flooring in a bright living room with a fireplace',
  },
}

const SHARED_POINTS = {
  measure: 'Free in-home measure, no obligation',
  price: 'Itemised written price within 48 hours',
  crew: 'One crew from prep to walkthrough',
  licensed: 'Licensed and insured in Florida',
}

function page(partial) {
  return {
    inNav: true,
    webp: true,
    pointsTick: 'What you get',
    pointsHeading: 'A proper install, not a drop-and-go.',
    pointsBody: [
      'The product is only half the floor. Prep, the right adhesive or underlayment, and clean work at the walls are what keep it looking right in a Tampa summer.',
    ],
    ...partial,
  }
}

export const SERVICE_PAGES = {
  lvp: page({
    key: 'lvp',
    path: '/services/best-lvp-flooring-tampa',
    title: 'Luxury Vinyl Plank (LVP) Flooring Installation',
    heroTitle: 'LVP Flooring',
    crumb: 'LVP Flooring',
    navLabel: 'LVP Flooring Installation',
    workKey: 'wood-look-plank-tile',
    alt: 'Empty room with newly installed wood-look luxury vinyl plank flooring, white baseboards and a shaded window',
    description:
      'Best LVP flooring installation in Tampa. Waterproof luxury vinyl plank, quiet underfoot and built for Florida humidity. Free in-home measure.',
    tick: 'Luxury vinyl plank',
    heading: 'Waterproof, quiet, and built for Florida.',
    body: [
      'Waterproof, quiet underfoot and forgiving on a less-than-perfect subfloor. LVP is our first recommendation for kitchens, basements and homes with dogs - and anywhere a Tampa summer would punish a solid hardwood.',
      'We moisture-test the slab, level where it needs it, and set expansion the way the manufacturer wrote it. Click-lock or glue-down, depending on the room. You get an itemised price before a single plank goes down.',
    ],
    pointsTick: 'Why LVP',
    pointsHeading: 'What you get with a proper install.',
    pointsBody: [
      'The product is only half the floor. Subfloor prep, the right adhesive or underlayment, and clean cuts at the walls are what keep LVP flat in August.',
    ],
    points: [
      'Waterproof wear layer - kitchens, baths, laundry, sliders',
      'Quiet underfoot with the right underlayment',
      'Forgiving over a less-than-perfect concrete slab',
      'Pet- and kid-friendly, no seasonal gapping',
      'Click-lock or glue-down, specified per room',
      SHARED_POINTS.price,
    ],
  }),

  laminate: page({
    key: 'laminate',
    path: '/services/laminate-flooring-installation',
    title: 'Laminate Flooring Installation',
    heroTitle: 'Laminate Flooring',
    crumb: 'Laminate',
    navLabel: 'Laminate Flooring Installation',
    alt: 'Laminate plank flooring installed in a finished interior',
    description:
      'Laminate flooring installation in Tampa. Click-lock over a levelled base, expansion set for Florida humidity. Free in-home measure.',
    tick: 'Laminate',
    heading: 'The hardest-wearing surface per dollar.',
    body: [
      'Laminate is a photographic wear layer over a dense core. It is not vinyl and it is not hardwood - and installing it like either is how it peaks at the joints in July. We treat it as its own product.',
      'The slab has to be flat. We level, set the underlayment, and leave the expansion the manufacturer wrote. Stairs, reducers, and vent cuts are part of the price, not extras on the last day.',
    ],
    points: [
      'Click-lock over a levelled, moisture-checked base',
      'Expansion gaps set for Tampa humidity',
      'Stairs, reducers and vents in the written price',
      SHARED_POINTS.crew,
      SHARED_POINTS.measure,
    ],
  }),

  hardwood: page({
    key: 'hardwood',
    path: '/services/hardwood-flooring-installation',
    title: 'Hardwood Flooring Installation',
    heroTitle: 'Hardwood Flooring',
    crumb: 'Hardwood',
    navLabel: 'Hardwood Flooring Installation',
    workKey: 'character-hickory-floor',
    webp: true,
    alt: 'Character hickory hardwood flooring in a finished room',
    description:
      'Solid hardwood flooring installation in Tampa. Nail-down and glue-down oak, maple and hickory, acclimatised on site. Free in-home measure.',
    tick: 'Solid hardwood',
    heading: 'Nail-down and glue-down, specified for the room.',
    body: [
      'Solid oak, maple and hickory, nailed or glued to spec. Boards acclimatise on site before a single one goes down, because Tampa humidity moves wood and a floor that skipped that step will show it by September.',
      'We check subfloor moisture, pick the fastener and adhesive for the species and the room, and finish or site-finish as the job needs. This page is installation. Refinishing of a floor you already own lives on its own page.',
    ],
    points: [
      'Solid oak, maple and hickory',
      'Nail-down or glue-down, specified per room',
      'Acclimatised on site before install',
      'Moisture-tested subfloor',
      SHARED_POINTS.price,
    ],
  }),

  engineered: page({
    key: 'engineered',
    path: '/services/engineered-hardwood-installation',
    title: 'Engineered Hardwood Installation',
    heroTitle: 'Engineered Hardwood',
    crumb: 'Engineered Hardwood',
    navLabel: 'Engineered Hardwood Installation',
    alt: 'Engineered hardwood flooring with a real timber wear layer',
    description:
      'Engineered hardwood installation in Tampa. Real timber wear layer on a stable core - the right hardwood over concrete slab. Free in-home measure.',
    tick: 'Engineered hardwood',
    heading: 'Real wood, stable enough for a Florida slab.',
    body: [
      'Engineered hardwood is a real timber wear layer on a plywood or HDF core. It is the hardwood we will lay over concrete, and the one we recommend in rooms that sit against a bath or a slider.',
      'Glue-down, float, or nail - we specify it from the manufacturer and the moisture reading, not from habit. A thick wear layer can be refinished later. A thin one cannot. We tell you which you are buying before you sign.',
    ],
    points: [
      'Real timber wear layer, stable core',
      'The right hardwood over concrete slab',
      'Glue-down, float or nail, specified per job',
      'Wear-layer thickness explained before you buy',
      SHARED_POINTS.crew,
    ],
  }),

  refinishing: page({
    key: 'refinishing',
    path: '/services/hardwood-floor-refinishing',
    title: 'Hardwood Floor Refinishing & Sanding',
    heroTitle: 'Floor Refinishing',
    crumb: 'Refinishing',
    navLabel: 'Hardwood Floor Refinishing',
    alt: 'Hardwood floor being sanded and prepared for a new finish',
    description:
      'Hardwood floor refinishing in Tampa - dustless sanding, stain, and polyurethane coating. Usually a third of the cost of replacement. Free in-home measure.',
    tick: 'Sanding, stain, polyurethane',
    heading: 'Bring back a floor you already own.',
    body: [
      'Sand, stain and reseal existing hardwood, or replace the boards a leak took out. For most Tampa homes this is a third of the cost of a full replacement and none of the demolition.',
      'We sand through the grits, stain if you want a new colour, and build polyurethane - oil or water-based - in coats. Walkable in a day, furniture back within the week. Engineered floors with enough wear layer can be refinished the same way; we check that before we quote.',
    ],
    pointsTick: 'What this covers',
    pointsHeading: 'Sanding, refinishing, and the coat that protects it.',
    pointsBody: [
      'Wood floor sanding, hardwood floor refinishing, engineered refinishing, and floor polyurethane coating live on this page so the job is specified as one sequence, not three trades.',
    ],
    points: [
      'Dustless sanding through the grits',
      'Stain matching or a new colour',
      'Oil or water-based polyurethane, built in coats',
      'Board replacement where a leak took them out',
      'Engineered hardwood refinished when the wear layer allows',
      SHARED_POINTS.price,
    ],
  }),

  poly: page({
    key: 'sanding',
    path: '/services/floor-polyurethane-coat',
    title: 'Floor Polyurethane Coat in Tampa',
    heroTitle: 'Polyurethane Coat',
    crumb: 'Polyurethane',
    navLabel: 'Floor Polyurethane Coat',
    alt: 'Hardwood floor with a fresh polyurethane coat',
    description:
      'Floor polyurethane coat in Tampa. Oil or water-based polyurethane over a dustless sand, built in coats. Walkable in a day.',
    tick: 'Protective floor coating',
    heading: 'The coat that actually protects the floor.',
    body: [
      'A polyurethane coat is not a wipe-on refresh. We sand to a surface the finish can bond to, then build oil or water-based polyurethane in coats. Recoats on a sound floor are possible; failed finish has to come off.',
      'This work also lives on our hardwood floor refinishing page, because sanding and coating are one sequence. This URL stays live for people searching the coating itself.',
    ],
    points: [
      'Oil or water-based polyurethane',
      'Dustless sand before the first coat',
      'Walkable in a day, furniture within the week',
      'Recoat or full refinish, specified on site',
    ],
  }),

  tile: page({
    key: 'tile',
    path: '/services/tile-installation',
    title: 'Tile Installation',
    heroTitle: 'Tile Installation',
    crumb: 'Tile',
    navLabel: 'Tile Installation',
    workKey: 'checkerboard-open-plan',
    alt: 'Diagonal checkerboard porcelain tile meeting wood-look plank at a kitchen',
    description:
      'Tile installation in Tampa - porcelain and natural stone, large format included. Substrate levelled first so the floor stays flat. Free in-home measure.',
    tick: 'Porcelain and stone',
    heading: 'Level the substrate first. Then the tile.',
    body: [
      'Porcelain and natural stone, large format included. Lippage on a 1200mm tile is what happens when nobody levels the floor. We check flatness, pour or patch where it needs it, and set with the right mortar for the body of the tile.',
      'Floors, walls, kitchens, and wet areas. Layout is drawn before a tile is cut so grout lines land on the room, not on a sliver at the bathtub. This page is general tile. Showers and kitchen backsplashes have their own page.',
    ],
    points: [
      'Porcelain and natural stone',
      'Large-format floors, levelled first',
      'Mortar and movement joints specified per tile',
      'Layout drawn before the first cut',
      SHARED_POINTS.crew,
    ],
  }),

  bathroom: page({
    key: 'bathroom',
    path: '/services/bathroom-tile-backsplash-installation',
    title: 'Bathroom Tile & Backsplash Installation',
    heroTitle: 'Bath & Backsplash Tile',
    crumb: 'Bath & Backsplash',
    navLabel: 'Bathroom Tile & Backsplash',
    workKey: 'star-pebble-shower',
    webp: false,
    alt: 'Walk-in shower with star mosaic feature wall, pebble floor and marble-look tile',
    description:
      'Bathroom tile and kitchen backsplash installation in Tampa. Waterproof membrane, shower walls, niches, and backsplash tile. Free in-home measure.',
    tick: 'Showers, baths, kitchens',
    heading: 'Waterproof first. Tile second.',
    body: [
      'Shower walls, bathroom floors, niches, and kitchen backsplashes. The waterproof membrane goes on to spec before a single tile, because grout is not waterproof and a pretty shower that leaks is a rebuild in five years.',
      'Niches are cut to the tile module so nothing lands on a sliver. Backsplashes are laid out around outlets, windows, and the range. Same crew that does the floor tile, so the grout colour and the joint width match through the house.',
    ],
    points: [
      'Waterproof membrane before any tile',
      'Shower walls, floors and curbs',
      'Niches cut to the tile module',
      'Kitchen backsplash, outlets and range planned in',
      SHARED_POINTS.measure,
    ],
  }),

  kitchen: page({
    key: 'kitchen',
    path: '/services/kitchen-design-and-installation',
    title: 'Kitchen Design and Installation',
    heroTitle: 'Kitchen Design',
    crumb: 'Kitchen Design',
    navLabel: 'Kitchen Design and Installation',
    workKey: 'white-shaker-kitchen',
    webp: true,
    alt: 'White Shaker kitchen with marble mosaic backsplash, black hardware and stainless appliances',
    description:
      'Kitchen design and installation in Tampa. Cabinets, countertops, backsplash and flooring sequenced by one crew. Free in-home measure.',
    tick: 'Kitchens, start to finish',
    heading: 'The whole kitchen, sequenced so you are not waiting on three trades.',
    body: [
      'Cabinets, countertops, backsplash and the floor that runs through the room. We design the layout, write one itemised price, and install in an order that keeps the kitchen down for days, not months.',
      'Full gut or a targeted refresh. Hardware, appliances and lighting are planned with the cabinets so nothing is left as a leftover for a second company. Same crew that does the floor - so the plank, the grout and the toe-kick actually meet.',
    ],
    pointsTick: 'What you get',
    pointsHeading: 'A kitchen install that is one job, not a pile of quotes.',
    pointsBody: [
      'The cabinets are only half the room. Tops, splash, flooring and the gaps between them are where a kitchen either lands or looks like three different contractors passed through.',
    ],
    points: [
      'Cabinet design and installation',
      'Quartz, granite and solid-surface tops',
      'Backsplash tile laid out around outlets and the range',
      'Flooring sequenced with the cabinets',
      SHARED_POINTS.crew,
      SHARED_POINTS.price,
    ],
  }),

  cabinets: page({
    key: 'cabinets',
    path: '/services/cabinet-and-countertop-design-and-installation',
    title: 'Cabinet & Countertop Design and Installation',
    heroTitle: 'Cabinets & Countertops',
    crumb: 'Cabinets & Countertops',
    navLabel: 'Cabinet & Countertop Design',
    workKey: 'oak-double-vanity-cabinets',
    webp: true,
    alt: 'Bathroom double vanity in light oak Shaker cabinets with a white quartz top and black oval mirrors',
    description:
      'Cabinet and countertop design and installation in Tampa. Kitchens, baths, laundry and bars - Shaker cabinets and quartz tops, one crew. Free in-home measure.',
    tick: 'Cabinets and tops',
    heading: 'Cabinets and countertops measured, set, and finished by the same people.',
    body: [
      'Kitchens, bathroom vanities, laundry rooms and built-in bars. We design the cabinet layout, install the boxes and doors, and template the tops so the stone actually fits the run you signed for.',
      'Shaker, slab and custom paint or stain. Quartz, granite and marble-look surfaces. Hardware, sinks and cut-outs are in the written price - not extras the week the tops arrive.',
    ],
    pointsTick: 'What you get',
    pointsHeading: 'Boxes, doors and tops that belong to one job.',
    pointsBody: [
      'A cabinet install fails at the scribe, the filler and the top. We own those details so you are not coordinating a cabinet shop and a fabricator yourself.',
    ],
    points: [
      'Kitchen, bath, laundry and bar cabinets',
      'Quartz, granite and solid-surface countertops',
      'Hardware, sinks and cut-outs in the written price',
      'Templated tops after the cabinets are set',
      SHARED_POINTS.crew,
      SHARED_POINTS.measure,
    ],
  }),

  installation: page({
    inNav: false,
    key: 'hardwood',
    path: '/services/flooring-installation-contractors-tampa',
    title: 'Flooring Installation Contractors in Tampa',
    heroTitle: 'Flooring Installation',
    crumb: 'Flooring Installation',
    alt: 'Newly installed wood flooring in a Tampa home',
    description:
      'Flooring installation contractors in Tampa. Hardwood, LVP, laminate, engineered wood and tile - one crew from subfloor prep to walkthrough. Free in-home measure.',
    tick: 'Tampa flooring contractors',
    heading: 'Every floor we lay starts with the substrate.',
    body: [
      'This is the parent page for how we install floors in Tampa: hardwood, luxury vinyl plank, laminate, engineered wood, and tile. The product pages go deeper. This one is the job as a whole - measure, prep, install, walkthrough.',
      'Most failed floors fail in the substrate. We moisture-test, level, and choose the fastener or adhesive for the product and the room. One crew owns that sequence so you are not coordinating three trades yourself.',
    ],
    points: [
      'Hardwood, LVP, laminate, engineered, tile',
      'Subfloor moisture testing and levelling',
      SHARED_POINTS.crew,
      SHARED_POINTS.price,
      SHARED_POINTS.licensed,
    ],
  }),

  demolition: page({
    inNav: false,
    key: 'sanding',
    path: '/services/flooring-demolition-services-tampa',
    title: 'Flooring Demolition Services in Tampa',
    heroTitle: 'Flooring Demolition',
    crumb: 'Demolition',
    alt: 'Old flooring removed and the subfloor prepared for a new install',
    description:
      'Flooring demolition in Tampa. We pull the old floor, haul it, and prep the substrate for the new install - part of the same crew, not a separate contractor.',
    tick: 'Tear-out and prep',
    heading: 'The old floor comes out with the people who put the new one in.',
    body: [
      'We still offer flooring demolition as part of an install. Pulling carpet, vinyl, tile, or a failed hardwood is not a separate company - it is day one of the same job, so the substrate we leave is the one we are willing to install over.',
      'Debris leaves the house each evening. We protect paths, check for asbestos-era materials when the floor is old enough to warrant it, and we do not start the new floor until the slab or subfloor is ready.',
    ],
    points: [
      'Carpet, vinyl, tile and hardwood tear-out',
      'Daily debris removal',
      'Substrate left ready for the new floor',
      'Same crew as the install',
      SHARED_POINTS.measure,
    ],
  }),

  demolitionRoot: page({
    inNav: false,
    key: 'sanding',
    path: '/flooring-demolition-services-tampa',
    title: 'Flooring Demolition Services Tampa',
    heroTitle: 'Flooring Demolition',
    crumb: 'Demolition',
    alt: 'Subfloor after flooring demolition, ready for a new install',
    description:
      'Flooring demolition services in Tampa Bay. Old carpet, vinyl, tile or hardwood pulled, hauled, and the substrate prepped for the new floor.',
    tick: 'Tampa Bay tear-out',
    heading: 'Demolition that is part of the install, not a side hustle.',
    body: [
      'This URL still ranks for flooring demolition in Tampa. The work is the same as our install demolition: we remove what is down, protect the house, and leave a substrate we will put a new floor on.',
      'If you only need tear-out, say so on the measure. Most clients book demolition as the first day of a replacement, which is how we prefer to run it - one crew, one price, one walkthrough.',
    ],
    points: [
      'Full-house or single-room tear-out',
      'Haul-away included in the written price',
      'Prep for LVP, hardwood or tile',
      SHARED_POINTS.crew,
    ],
  }),

  company: page({
    inNav: false,
    key: 'lvp',
    path: '/services/flooring-company',
    title: 'Flooring Company in Tampa',
    heroTitle: 'Flooring Company',
    crumb: 'Flooring Company',
    workKey: 'star-pebble-shower',
    webp: false,
    alt: 'Walk-in shower with star mosaic feature wall, pebble floor and marble-look tile',
    description:
      'All About Flooring is a Tampa flooring company for LVP, hardwood, tile and refinishing. Family-owned, one crew, free in-home measure.',
    tick: 'Tampa Bay flooring company',
    heading: 'A flooring company that still sends the people who priced it.',
    body: [
      'Search "flooring company" and you get showrooms, franchises, and crews that change by the week. We are a Tampa flooring company that measures, writes the price, and installs the floor with the same people.',
      'Luxury vinyl, hardwood, engineered wood, laminate, tile, and refinishing. Kitchens and bathrooms when the tile and the floor have to land together. Licensed, insured, and local.',
    ],
    points: [
      'Family-owned Tampa flooring company',
      'LVP, hardwood, tile, refinishing',
      SHARED_POINTS.crew,
      SHARED_POINTS.licensed,
    ],
  }),

  contractors: page({
    inNav: false,
    key: 'hardwood',
    path: '/services/flooring-contractors',
    title: 'Flooring Contractors in Tampa',
    heroTitle: 'Flooring Contractors',
    crumb: 'Flooring Contractors',
    alt: 'Hardwood flooring installed by Tampa flooring contractors',
    description:
      'Flooring contractors in Tampa for hardwood, LVP, laminate and tile. One crew from demolition to walkthrough. Free in-home measure.',
    tick: 'Flooring contractors',
    heading: 'Contractors, not a showroom with a referral list.',
    body: [
      'Flooring contractors who still do the work. We are not a retail floor that books a third-party installer. The estimate you sign is the crew that shows up.',
      'That matters on a Florida slab: moisture numbers, levelling, and expansion are the contractor\'s job, not the product\'s. We take that job, write it into the price, and stand behind the floor.',
    ],
    points: [
      'In-house install crew',
      'Moisture testing and subfloor prep',
      'Hardwood, LVP, laminate, tile',
      SHARED_POINTS.price,
    ],
  }),

  remodel: page({
    inNav: false,
    key: 'bathroom',
    path: '/services/bathroom-and-kitchen-remodeling',
    title: 'Bathroom and Kitchen Remodeling in Tampa',
    heroTitle: 'Bath & Kitchen Remodel',
    crumb: 'Remodeling',
    workKey: 'farmhouse-range-kitchen',
    webp: false,
    alt: 'Farmhouse kitchen with stone backsplash, wood hood and plank flooring',
    description:
      'Bathroom and kitchen remodeling in Tampa with the flooring and tile crew - backsplashes, shower walls, and the floors that run through both rooms.',
    tick: 'Kitchens and baths',
    heading: 'The rooms on top of the floor, finished by the same crew.',
    body: [
      'We remodel kitchens and bathrooms as they sit on the floors we install: backsplash tile, shower walls, waterproofing, and the plank or porcelain that runs into the room. Cabinets and counters are sequenced with the floor so you are not waiting on a second company.',
      'This page keeps the old remodeling URL. The dedicated tile and backsplash page is the deeper spec; this one is the whole room.',
    ],
    points: [
      'Kitchen backsplash and flooring together',
      'Bathroom tile, waterproofing and floors',
      'Sequenced so the room is down for days, not months',
      SHARED_POINTS.crew,
    ],
  }),

  refinishNearMe: page({
    inNav: false,
    key: 'refinishing',
    path: '/wood-floor-refinishing-near-me',
    title: 'Wood Floor Refinishing Near Me in Tampa',
    heroTitle: 'Wood Floor Refinishing',
    crumb: 'Refinishing Near You',
    alt: 'Wood floor refinished in a Tampa Bay home',
    description:
      'Wood floor refinishing near you in Tampa Bay. Dustless sanding, stain, and polyurethane. We cover Odessa to Riverview and across the bay.',
    tick: 'Near you, Tampa Bay',
    heading: 'Wood floor refinishing across Tampa Bay, not a far-flung add-on.',
    body: [
      'If you searched "wood floor refinishing near me", we are the Tampa Bay crew that sands, stains, and coats hardwood - Odessa, Carrollwood, Brandon, Clearwater, Wesley Chapel, and the towns between.',
      'The full spec lives on our hardwood floor refinishing page. This URL stays so the old search listing still lands on a real page, not a redirect.',
    ],
    points: [
      'Dustless sanding and polyurethane',
      'Service across Tampa Bay towns',
      'Usually a third of replacement cost',
      SHARED_POINTS.measure,
    ],
  }),
}

export const NAV_SERVICES = Object.values(SERVICE_PAGES)
  .filter((p) => p.inNav)
  .map((p) => ({ href: p.path, label: p.navLabel || p.crumb }))

export const servicePageList = Object.values(SERVICE_PAGES)
