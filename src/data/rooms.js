/**
 * Interior walkthrough.
 *
 * Three rooms. The bathroom uses the supplied clean interior photo and
 * the four service cards from the reference. Kitchen and living still
 * use project photography.
 *
 * `x` / `y` are percentages inside the room frame on desktop. `xM` /
 * `yM` retune the same pin for a phone crop. `pin` is which edge the
 * circular icon hangs off. `positionMobile` recentres a wide photo so
 * the phone crop is the finish, not a doorway.
 */
export const ROOMS = [
  {
    key: 'bath',
    name: 'Bathroom',
    src: '/img/rooms/bathroom',
    alt: 'Spa bathroom with a freestanding tub, sage-tiled walk-in shower and wood double vanity',
    position: 'center center',
    positionMobile: '32% center',
    clean: true,
    w: 1024,
    h: 439,
    markers: [
      {
        n: '01',
        title: 'Bathroom Tile Installation',
        body: 'Expertly installed floor tile for a seamless, elegant finish that lasts.',
        icon: 'grid',
        tone: 'light',
        pin: 'right',
        x: '28%',
        y: '64%',
        xM: '10%',
        yM: '66%',
      },
      {
        n: '02',
        title: 'Shower Wall Tile',
        body: 'Precision tile installation for a clean, durable, and beautiful shower surround.',
        icon: 'tiles',
        tone: 'light',
        pin: 'right',
        x: '8%',
        y: '18%',
        xM: '6%',
        yM: '26%',
      },
      {
        n: '03',
        title: 'Backsplash Installation',
        body: 'Custom backsplash tile adds style, protects your walls, and completes the look.',
        icon: 'house',
        tone: 'light',
        pin: 'left',
        x: '68%',
        y: '46%',
        xM: '52%',
        yM: '38%',
      },
      {
        n: '04',
        title: 'Waterproofing & Prep',
        body: 'Professional waterproofing and surface preparation for lasting performance.',
        icon: 'drop',
        tone: 'light',
        pin: 'right',
        x: '8%',
        y: '42%',
        xM: '6%',
        yM: '46%',
      },
    ],
  },
  {
    key: 'kitchen',
    name: 'Kitchen',
    src: '/img/rooms/kitchen',
    alt: 'Open kitchen with a marble island, cream cabinetry, tiled backsplash and stone floor',
    position: 'center center',
    clean: true,
    w: 1024,
    h: 576,
    markers: [
      {
        n: '02',
        title: 'Backsplash Installation',
        body: 'Kitchen backsplash tile installed for a clean, finished look.',
        icon: 'tiles',
        tone: 'light',
        pin: 'left',
        x: '68%',
        y: '22%',
        xM: '44%',
        yM: '26%',
      },
      {
        n: '03',
        title: 'Tile Installation',
        body: 'Durable tile flooring installed for everyday performance and style.',
        icon: 'grid',
        tone: 'light',
        pin: 'right',
        x: '8%',
        y: '68%',
        xM: '8%',
        yM: '76%',
      },
    ],
  },
  {
    key: 'living',
    name: 'Living space',
    img: 'checkerboard-open-plan',
    alt: 'Open-plan room with checkerboard porcelain tile meeting wood-look plank',
    position: 'center center',
    markers: [
      {
        n: '04',
        title: 'Tile Installation',
        body: 'Patterned or large-format porcelain, set flat so nothing lips underfoot.',
        icon: 'grid',
        tone: 'light',
        pin: 'right',
        x: '10%',
        y: '62%',
        xM: '6%',
        yM: '58%',
      },
      {
        n: '05',
        title: 'Luxury Vinyl Plank (LVP) Flooring Installation',
        body: 'Waterproof plank over a levelled subfloor, with a clean transition into the tile.',
        icon: 'lvp',
        tone: 'light',
        pin: 'left',
        x: '62%',
        y: '62%',
        xM: '46%',
        yM: '43%',
      },
    ],
  },
]
