// `img` is a still pulled from the client's own hero footage - a stand-in with
// the right materials in it, not a stock photo. Replace with real project
// photography when it lands; the component falls back to a generated texture
// if `img` is absent.
export const SERVICES = [
  {
    slug: 'flooring-installation',
    img: '/img/services/flooring-installation.jpg',
    alt: 'Newly laid plank flooring in a finished room',
    tex: 'oak',
    title: 'Flooring installation',
    body:
      'Hardwood, engineered, luxury vinyl plank, laminate and tile. We level the subfloor first - that is where most bad floors are actually made.',
    tags: ['Moisture testing', 'Self-levelling', 'Herringbone & chevron', 'Stair treads'],
  },
  {
    slug: 'kitchen-renovation',
    img: '/img/services/kitchen-renovation.jpg',
    alt: 'A honed stone kitchen worktop',
    tex: 'porcelain',
    title: 'Kitchen Design and Installation',
    body:
      'Full gut or a targeted refresh. Cabinetry, countertops, backsplash and flooring sequenced so the room is out of use for days, not months.',
    tags: ['Cabinet install', 'Countertops', 'Backsplash tile', 'Under-cabinet lighting'],
  },
  {
    slug: 'bathroom-renovation',
    img: '/img/services/bathroom-renovation.jpg',
    alt: 'A finished interior with large-format tile flooring',
    tex: 'porcelain',
    title: 'Bathroom renovation',
    body:
      'Waterproofing done to spec before a single tile goes on. Curbless showers, heated floors, niches cut to the tile module so nothing lands on a sliver.',
    tags: ['Waterproof membrane', 'Curbless showers', 'Heated floors', 'Vanity & fixtures'],
  },
  {
    slug: 'refinishing-repair',
    img: '/img/services/refinishing-repair.jpg',
    alt: 'Colour-matching floor samples against a fan deck',
    tex: 'walnut',
    title: 'Refinishing & repair',
    body:
      'Sand, stain and reseal existing hardwood, or replace the boards a leak took out. Usually a third of the cost of a full replacement.',
    tags: ['Dustless sanding', 'Colour matching', 'Board replacement', 'Recoat & buff'],
  },
]

export const PROCESS = [
  {
    n: 1,
    title: 'Measure',
    body: 'We come out, measure every room, check subfloor moisture and show you samples in your own light.',
    dur: 'Free · 45 min',
  },
  {
    n: 2,
    title: 'Estimate',
    body: 'An itemised written quote - material, labour, prep, disposal. No allowances that balloon later.',
    dur: 'Within 48 hrs',
  },
  {
    n: 3,
    title: 'Install',
    body: 'Furniture moved, floors protected, crew on site daily until it is done. Debris out each evening.',
    dur: '2-10 days typical',
  },
  {
    n: 4,
    title: 'Walkthrough',
    body: 'We walk it with you, fix the snag list on the spot, and hand over care instructions and leftover stock.',
    dur: 'Before final payment',
  },
]

/**
 * PORTFOLIO - real project photography.
 *
 * Every shot is portrait 3:4, so the gallery is a uniform 3:4 grid and
 * nothing gets cropped. If landscape photos arrive later, reintroduce the
 * mosaic spans rather than letting the grid crop them.
 *
 * `meta` describes material and set-out only. It does not carry areas,
 * durations or towns, because those would be invented - fill them in from
 * the actual job records before launch.
 */
export const WORK = [
  {
    key: 'white-l-kitchen-black-hardware',
    tag: 'Kitchens',
    orient: 'land',
    webp: true,
    category: 'Kitchen Design and Installation',
    title: 'White Shaker L-kitchen, black hardware',
    meta: 'White Shaker · quartz tops · matte black pulls',
    alt: 'L-shaped kitchen with white Shaker cabinets, black hardware, stainless appliances, white quartz counters and light wood-look flooring',
    href: null,
  },
  {
    key: 'white-kitchen-wood-shelves',
    tag: 'Kitchens',
    orient: 'land',
    webp: true,
    category: 'Kitchen Design and Installation',
    title: 'White kitchen with wood floating shelves',
    meta: 'White Shaker · herringbone splash · wood shelves',
    alt: 'White Shaker kitchen with stainless appliances, speckled quartz counters, herringbone tile backsplash and dark wood floating shelves',
    href: null,
  },
  {
    key: 'grey-shaker-pantry-cabinets',
    tag: 'Kitchens',
    orient: 'port',
    webp: true,
    category: 'Cabinet & Countertop Design and Installation',
    title: 'Floor-to-ceiling grey Shaker pantry',
    meta: 'Grey Shaker · gold pulls · quartz top',
    alt: 'Floor-to-ceiling light grey Shaker pantry cabinets with slim gold pulls beside a white quartz countertop and wood-look plank flooring',
    href: null,
  },
  {
    key: 'navy-bar-forest-mural',
    tag: 'Kitchens',
    orient: 'port',
    webp: true,
    category: 'Cabinet & Countertop Design and Installation',
    title: 'Navy bar cabinets, forest mural',
    meta: 'Navy Shaker · quartz top · gold pulls',
    alt: 'Navy Shaker home bar with gold pulls, white quartz counter, wood floating shelves, a forest mural backsplash and two under-counter beverage coolers',
    href: null,
  },
  {
    key: 'oak-double-vanity-cabinets',
    tag: 'Bathrooms',
    orient: 'port',
    webp: true,
    category: 'Cabinet & Countertop Design and Installation',
    title: 'Oak double vanity, quartz top',
    meta: 'Light oak Shaker · white quartz · matte black pulls',
    alt: 'Bathroom double vanity in light oak Shaker cabinets with a white quartz top, two undermount sinks, black oval mirrors and wood-look floor tile',
    href: null,
  },
  {
    key: 'white-laundry-vanity-cabinets',
    tag: 'Laundry',
    orient: 'port',
    webp: true,
    category: 'Cabinet & Countertop Design and Installation',
    title: 'White laundry vanity, marble top',
    meta: 'White Shaker · marble-look quartz · brass pulls',
    alt: 'Laundry vanity in white Shaker cabinets with a light grey marble-look counter, stainless undermount sink, brass pulls and a round wood-framed mirror',
    href: null,
  },
  {
    key: 'freestanding-tub',
    tag: 'Bathrooms',
    orient: 'port',
    category: 'Bathroom Tile & Backsplash Installation',
    title: 'Freestanding tub, mosaic feature wall',
    meta: 'Circular mosaic · large-format stone tile · floor-mount filler',
    alt: 'White freestanding soaking tub with a floor-mount filler, circular mosaic wall and plantation shutters',
    href: null,
  },
  {
    key: 'white-shaker-kitchen',
    tag: 'Kitchens',
    orient: 'port',
    category: 'Kitchen Design and Installation',
    title: 'White Shaker kitchen, marble mosaic',
    meta: 'Shaker cabinets · marble subway mosaic · under-cabinet lighting',
    alt: 'White Shaker kitchen with marble mosaic backsplash, black hardware and stainless appliances',
    href: null,
  },
  {
    key: 'hex-mosaic-shower',
    tag: 'Bathrooms',
    orient: 'port',
    category: 'Bathroom Tile & Backsplash Installation',
    title: 'Walk-in shower, hex mosaic floor',
    meta: 'Large-format wall tile · hex marble mosaic · matte black fixtures',
    alt: 'Walk-in shower with white large-format tile, grey hexagonal mosaic floor and a mosaic-lined niche',
    href: null,
  },
  {
    key: 'farmhouse-range-kitchen',
    tag: 'Kitchens',
    orient: 'port',
    category: 'Kitchen Design and Installation',
    title: 'Farmhouse kitchen with wood hood',
    meta: 'White Shaker · rustic stone backsplash · custom wood range hood',
    alt: 'Long white kitchen with stone mosaic backsplash, wood range hood and wide-plank wood flooring',
    href: null,
  },
  {
    key: 'pebble-feature-shower',
    tag: 'Bathrooms',
    orient: 'port',
    category: 'Bathroom Tile & Backsplash Installation',
    title: 'Pebble mosaic feature shower',
    meta: 'Vertical greige tile · pebble mosaic strip and floor',
    alt: 'Walk-in shower with greige vertical tile, a central pebble mosaic strip and a tall pebble-lined niche',
    href: null,
  },
  {
    key: 'herringbone-teal-shower',
    tag: 'Bathrooms',
    orient: 'port',
    category: 'Bathroom Tile & Backsplash Installation',
    title: 'Teal herringbone feature wall',
    meta: 'Vertical herringbone subway · pebble niches and floor',
    alt: 'Walk-in shower with a dark teal herringbone tile feature wall, pebble mosaic niches and pebble floor',
    href: null,
  },
  {
    key: 'checkerboard-open-plan',
    tag: 'Floors',
    orient: 'port',
    category: 'Tile Installation',
    title: 'Checkerboard tile into wood-look plank',
    meta: 'Porcelain · diagonal set · transition strip to plank',
    alt: 'Open-plan room with cream and beige checkerboard porcelain tile meeting wood-look plank flooring at a raised kitchen',
    href: null,
  },
  {
    key: 'navy-backsplash-kitchen',
    tag: 'Kitchens',
    orient: 'port',
    category: 'Kitchen Design and Installation',
    title: 'Navy subway backsplash kitchen',
    meta: 'Navy ceramic subway · white Shaker · gold hardware',
    alt: 'Kitchen with a navy subway-tile backsplash, white Shaker cabinets, marble counters and gold fixtures',
    href: null,
  },
  {
    key: 'marble-shower-niches',
    tag: 'Bathrooms',
    orient: 'port',
    category: 'Bathroom Tile & Backsplash Installation',
    title: 'Marble-look shower with stacked niches',
    meta: 'Large-format porcelain · pebble mosaic floor and niches',
    alt: 'Walk-in shower with marble-look wall tile, pebble mosaic floor and two stacked pebble-lined niches',
    href: null,
  },
  {
    key: 'kitchen-backsplash-subway',
    tag: 'Kitchens',
    orient: 'port',
    category: 'Kitchen Design and Installation',
    title: 'Grey subway backsplash, brass fittings',
    meta: 'Gloss subway · grey Shaker · brass faucet and pulls',
    alt: 'Kitchen corner with a light grey subway-tile backsplash, grey cabinets, white quartz and a brass gooseneck faucet',
    href: null,
  },
  {
    key: 'dark-kitchen-bronze-glass',
    tag: 'Kitchens',
    orient: 'port',
    category: 'Kitchen Design and Installation',
    title: 'Charcoal kitchen, bronze glass subway',
    meta: 'Dark Shaker · bronze glass subway · wood-look plank',
    alt: 'Kitchen with charcoal Shaker cabinets, bronze glass subway backsplash, light granite and wood-look plank flooring',
    href: null,
  },
  {
    key: 'wood-look-plank-tile',
    tag: 'Floors',
    orient: 'port',
    category: 'LVP Flooring Installation',
    title: 'Wood-look plank in an empty room',
    meta: 'Light oak plank · staggered set · white baseboards',
    alt: 'Empty room with light wood-look plank flooring, white walls and a window with a grey roller shade',
    href: null,
  },
  {
    key: 'corner-shower-marble',
    tag: 'Bathrooms',
    orient: 'port',
    category: 'Bathroom Tile & Backsplash Installation',
    title: 'Curved glass corner shower',
    meta: 'Vertical marble-look tile · hex mosaic niche · hex floor',
    alt: 'Bathroom with a curved glass corner shower in vertical marble-look tile, hexagonal floor tile and a mosaic niche',
    href: null,
  },
  {
    key: 'tub-surround-vertical-tile',
    tag: 'Bathrooms',
    orient: 'port',
    category: 'Bathroom Tile & Backsplash Installation',
    title: 'Alcove tub, vertical marble tile',
    meta: 'Vertical subway · hex mosaic niche · brushed nickel',
    alt: 'Alcove bathtub surrounded by vertical grey marble-look subway tile with a hexagonal mosaic niche and nickel fixtures',
    href: null,
  },
  {
    key: 'character-hickory-floor',
    tag: 'Floors',
    orient: 'port',
    category: 'Hardwood Flooring Installation',
    title: 'Character-grade hickory, arched openings',
    meta: 'Wide plank · natural grade · white baseboards',
    alt: 'Bright room with character-grade hickory hardwood, white plantation shutters and an arched opening to a stair landing',
    href: null,
  },
  {
    key: 'herringbone-hex-drain',
    tag: 'Bathrooms',
    orient: 'port',
    category: 'Bathroom Tile & Backsplash Installation',
    title: 'Herringbone walls, tiled-in hex drain',
    meta: 'Herringbone subway · hex marble mosaic · tile-in drain',
    alt: 'Shower corner with grey herringbone wall tile, hexagonal marble mosaic floor and a square tile-in drain',
    href: null,
  },
  {
    key: 'hardwood-living-teal-door',
    tag: 'Floors',
    orient: 'port',
    category: 'Hardwood Flooring Installation',
    title: 'Living room hardwood to the deck',
    meta: 'Narrow plank · natural finish · white trim',
    alt: 'Living room with polished light hardwood flooring, grey walls and a teal door opening to a wood deck',
    href: null,
  },
  {
    key: 'marble-subway-bench-shower',
    tag: 'Bathrooms',
    orient: 'port',
    category: 'Bathroom Tile & Backsplash Installation',
    title: 'Marble subway shower with bench',
    meta: 'Marble subway · slab bench · pebble mosaic floor',
    alt: 'Walk-in shower in marble subway tile with a built-in marble bench, a recessed niche and pebble mosaic floor',
    href: null,
  },
  {
    key: 'patterned-stair-risers',
    tag: 'Floors',
    orient: 'port',
    category: 'Tile Installation',
    title: 'Patterned tile stair risers',
    meta: 'Wood treads · mixed pattern risers · painted stringers',
    alt: 'Wooden staircase looking down, each riser tiled in a different black-and-white geometric or floral pattern',
    href: null,
  },
  {
    key: 'marble-walk-in-hex-shower',
    tag: 'Bathrooms',
    orient: 'port',
    category: 'Bathroom Tile & Backsplash Installation',
    title: 'Marble-look walk-in, hex mosaic floor',
    meta: 'Large-format porcelain · hex mosaic · sliding glass',
    alt: 'Walk-in shower with dramatic marble-look wall tile, hexagonal mosaic floor, sliding glass door and wood-look bathroom flooring',
    href: null,
  },
  {
    key: 'double-vanity-geometric-floor',
    tag: 'Bathrooms',
    orient: 'port',
    category: 'Bathroom Tile & Backsplash Installation',
    title: 'Double vanity, geometric wood-look floor',
    meta: 'White Shaker · quartz tops · geometric wood-look tile',
    alt: 'Bright bathroom with a white double vanity, arched black mirror, glass shower and geometric wood-look floor tile',
    href: null,
  },
  {
    key: 'oak-plank-bedroom',
    tag: 'Floors',
    orient: 'port',
    category: 'LVP Flooring Installation',
    title: 'Light oak plank bedroom',
    meta: 'Wide plank · white baseboards · tray ceiling',
    alt: 'Empty bedroom with light oak wood-look plank flooring, white walls, a tray ceiling and a window to a fenced yard',
    href: null,
  },
  {
    key: 'white-island-kitchen',
    tag: 'Kitchens',
    orient: 'port',
    category: 'Kitchen Design and Installation',
    title: 'White Shaker kitchen with island',
    meta: 'White Shaker · quartz island · wood-look plank',
    alt: 'Open kitchen with white Shaker cabinets, a quartz island with a nickel faucet, stainless appliances and wood-look plank flooring',
    href: null,
  },
  {
    key: 'vaulted-open-plan-plank',
    tag: 'Floors',
    orient: 'port',
    category: 'LVP Flooring Installation',
    title: 'Vaulted open-plan, light oak plank',
    meta: 'Wide plank · vaulted ceiling · open kitchen',
    alt: 'Empty open-plan living and kitchen with light oak plank flooring, a vaulted ceiling and a sliding door to the yard',
    href: null,
  },
  {
    key: 'marble-tub-geometric-bath',
    tag: 'Bathrooms',
    orient: 'port',
    category: 'Bathroom Tile & Backsplash Installation',
    title: 'Marble tub surround, geometric floor',
    meta: 'Large-format marble-look · geometric wood-look tile',
    alt: 'Bathroom with a white vanity, alcove tub in marble-look tile and large geometric wood-look floor tiles',
    href: null,
  },
  {
    key: 'herringbone-pebble-shower-wip',
    tag: 'Bathrooms',
    orient: 'port',
    category: 'Bathroom Tile & Backsplash Installation',
    title: 'Herringbone and stacked-bond shower',
    meta: 'Herringbone subway · vertical stack · pebble floor',
    alt: 'Shower in progress with off-white herringbone tile on one wall, vertical stacked tile on the other and a dark pebble mosaic floor',
    href: null,
  },
  {
    key: 'wood-wetbar-wine-cooler',
    tag: 'Kitchens',
    orient: 'port',
    category: 'Kitchen Design and Installation',
    title: 'Wood wet bar, marble slab splash',
    meta: 'Natural wood Shaker · full-height marble · wine cooler',
    alt: 'Kitchen wet bar with light wood Shaker cabinets, matching marble counter and full-height backsplash, and a built-in wine cooler',
    href: null,
  },
  {
    key: 'laundry-gold-hardware',
    tag: 'Laundry',
    orient: 'port',
    category: 'Tile Installation',
    title: 'Laundry with gold hardware',
    meta: 'White Shaker · marble top · grey porcelain floor',
    alt: 'Laundry with white Shaker cabinets, gold pulls, a marble-look counter, black sink and charcoal Samsung washer and dryer',
    href: null,
  },
  {
    key: 'laundry-stacked-washer',
    tag: 'Laundry',
    orient: 'port',
    category: 'LVP Flooring Installation',
    title: 'Stacked laundry, wood-look plank',
    meta: 'White Shaker · marble splash · wood-look plank',
    alt: 'L-shaped laundry with stacked charcoal washer and dryer, white Shaker cabinets, marble-look counters and wood-look plank flooring',
    href: null,
  },
  {
    key: 'waterfall-island-kitchen',
    tag: 'Kitchens',
    orient: 'port',
    category: 'Kitchen Design and Installation',
    title: 'Waterfall-edge marble island',
    meta: 'Marble waterfall · dark island base · wood-look tile',
    alt: 'Long kitchen island with a white marble waterfall counter, dark base cabinets, stainless appliances and wood-look floor tile',
    href: null,
  },
  {
    key: 'navy-island-open-kitchen',
    tag: 'Kitchens',
    orient: 'land',
    category: 'Kitchen Design and Installation',
    title: 'Navy island in an open kitchen',
    meta: 'Dark island · marble tops · wood-look plank',
    alt: 'Open-plan kitchen with a dark navy island, marble counters, wood-look flooring and a stainless range wall behind',
    href: null,
  },
  {
    key: 'forest-mural-bar',
    tag: 'Kitchens',
    orient: 'port',
    category: 'Kitchen Design and Installation',
    title: 'Dark bar with forest mural',
    meta: 'Charcoal Shaker · wood shelves · gold pulls',
    alt: 'Custom home bar in matte charcoal cabinets with gold pulls, wood floating shelves, a forest mural backsplash and two beverage coolers',
    href: null,
  },
  {
    key: 'wood-range-kitchen',
    tag: 'Kitchens',
    orient: 'port',
    category: 'Kitchen Design and Installation',
    title: 'Warm wood kitchen, marble splash',
    meta: 'Wood Shaker · full-height marble · gold pulls',
    alt: 'Straight-run kitchen in warm wood Shaker cabinets with a marble counter and full-height backsplash, stainless range and matching fridge surround',
    href: null,
  },
  {
    key: 'geometric-feature-shower',
    tag: 'Bathrooms',
    orient: 'port',
    category: 'Bathroom Tile & Backsplash Installation',
    title: 'Geometric mosaic feature shower',
    meta: 'Floral mosaic feature · marble side walls · pebble floor',
    alt: 'Frameless glass walk-in shower with a grey geometric mosaic feature wall, marble-look side walls, pebble floor and an oak vanity',
    href: null,
  },
]

/** Filter labels, same order on the homepage and the portfolio page. */
export const WORK_FILTERS = ['Bathrooms', 'Kitchens', 'Floors', 'Laundry']

/**
 * Homepage teaser: two portrait shots from each filter, plus one extra
 * kitchen so the grid fills three columns. Interleaved so it is not a
 * block of one room type.
 */
const HOME_WORK_KEYS = [
  'white-island-kitchen',
  'freestanding-tub',
  'character-hickory-floor',
  'laundry-gold-hardware',
  'waterfall-island-kitchen',
  'geometric-feature-shower',
  'hardwood-living-teal-door',
  'laundry-stacked-washer',
  'navy-backsplash-kitchen',
]

export const HOME_WORK = HOME_WORK_KEYS.map((key) => WORK.find((w) => w.key === key))

// Placeholder copy. Swap for the live GBP review feed - never hand-write
// testimonials that are attributed to real named people.
export const REVIEWS = [
  { stars: 5, body: 'They found a soft spot in the subfloor the other two quotes missed entirely. Fixed it, showed me the photos, and the price did not move.', by: '[Client name]', job: 'Kitchen + hallway' },
  { stars: 5, body: 'Herringbone in a 1930s house with not one square corner. The borders are perfect. I have had three people ask who did it.', by: '[Client name]', job: 'Living room floor' },
  { stars: 5, body: 'Nine days start to finish on a full bathroom. Site swept every evening. My neighbours did not even know there was work on.', by: '[Client name]', job: 'Bathroom renovation' },
]

export const TRUST = [
  'Licensed & fully insured',
  'Free in-home measure',
  'Written estimate in 48 hrs',
  '4.9 ★ across 000 Google reviews',
]

/**
 * Dropdown options for every enquiry form.
 *
 * Kept separate from SERVICES (the four cards on the page) because these
 * are the specific jobs a customer books, not the marketing categories.
 * Both forms read from here, so the list only ever needs editing once.
 */
export const SERVICE_OPTIONS = [
  'Luxury Vinyl Plank (LVP) Flooring Installation',
  'Laminate Flooring Installation',
  'Hardwood Flooring Installation',
  'Engineered Hardwood Flooring Installation',
  'Hardwood Floor Refinishing',
  'Floor Sanding & Polyurethane Coating',
  'Tile Installation',
  'Bathroom Tile & Backsplash Installation',
  'Kitchen Design and Installation',
  'Cabinet & Countertop Design and Installation',
]

/**
 * Service cards shown in the menu and on the services grid.
 *
 * `key` maps to both the icon in ServiceIcons.jsx and the background in
 * public/img/services/bg/. Hidden keyword URLs are in SERVICE_PAGES, not here.
 */
export const SERVICE_CARDS = [
  {
    key: 'lvp',
    title: 'Luxury Vinyl Plank (LVP) Flooring Installation',
    body: 'Waterproof, quiet underfoot and forgiving on a less-than-perfect subfloor. Our first recommendation for kitchens, basements and homes with dogs.',
    href: '/services/best-lvp-flooring-tampa',
  },
  {
    key: 'laminate',
    title: 'Laminate Flooring Installation',
    body: 'The hardest-wearing surface per dollar. Click-lock over a levelled base, with expansion gaps set properly so it never peaks in a Florida summer.',
    href: '/services/laminate-flooring-installation',
  },
  {
    key: 'hardwood',
    title: 'Hardwood Flooring Installation',
    body: 'Solid oak, maple and hickory, nailed or glued to spec. Acclimatised on site before a single board goes down, because Tampa humidity moves wood.',
    href: '/services/hardwood-flooring-installation',
  },
  {
    key: 'engineered',
    title: 'Engineered Hardwood Flooring Installation',
    body: 'Real timber wear layer on a stable core - the right call over concrete slab, and the only hardwood we will lay in a bathroom-adjacent hallway.',
    href: '/services/engineered-hardwood-installation',
  },
  {
    key: 'refinishing',
    title: 'Hardwood Floor Refinishing',
    body: 'Bring back a floor you already own. Sand, stain and reseal, usually for a third of the cost of replacement and with none of the demolition.',
    href: '/services/hardwood-floor-refinishing',
  },
  {
    key: 'sanding',
    title: 'Floor Polyurethane Coat',
    body: 'Oil or water-based polyurethane over a dustless sand, built in coats. Walkable in a day, furniture back within the week.',
    href: '/services/floor-polyurethane-coat',
  },
  {
    key: 'tile',
    title: 'Tile Installation',
    body: 'Porcelain and natural stone, large format included. We level the substrate first - lippage on a 1200mm tile is what happens when nobody does.',
    href: '/services/tile-installation',
  },
  {
    key: 'bathroom',
    title: 'Bathroom Tile & Backsplash Installation',
    body: 'Waterproof membrane to spec before any tile goes on. Niches cut to the tile module, so nothing lands on a sliver and nothing leaks in five years.',
    href: '/services/bathroom-tile-backsplash-installation',
  },
  {
    key: 'kitchen',
    title: 'Kitchen Design and Installation',
    body: 'Cabinets, countertops, backsplash and flooring sequenced as one job. Full gut or a targeted refresh, with the same crew that does the floor.',
    href: '/services/kitchen-design-and-installation',
  },
  {
    key: 'cabinets',
    title: 'Cabinet & Countertop Design and Installation',
    body: 'Kitchen, bath, laundry and bar cabinets with quartz or granite tops. Templated after the boxes are set, hardware and cut-outs in the written price.',
    href: '/services/cabinet-and-countertop-design-and-installation',
  },
]
