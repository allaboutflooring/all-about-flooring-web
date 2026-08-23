/**
 * Procedural marble swatch.
 *
 * Renders a slab face using layered SVG turbulence: a mottled body, a
 * primary vein network and a finer secondary one. Deterministic - the
 * seed lives in the stone record, so a slab looks identical on every
 * render and between server and client.
 *
 * If the stone has `img`, that photo is used and nothing is generated.
 * Filter IDs are derived from `stone.key` rather than useId(), because
 * React's generated IDs contain colons which are unsafe inside url(#…).
 */
export default function StoneSwatch({ stone }) {
  if (stone.img) {
    return <img className="stone-face" src={stone.img} alt={stone.alt || `${stone.name} slab`} loading="lazy" />
  }

  const fv = `sv-${stone.key}`
  const fv2 = `sv2-${stone.key}`
  const fm = `sm-${stone.key}`
  const gb = `sg-${stone.key}`
  const [light, dark] = stone.base

  return (
    <svg
      className="stone-face"
      viewBox="0 0 400 520"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${stone.name} slab`}
    >
      <defs>
        <linearGradient id={gb} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={light} />
          <stop offset="55%" stopColor={dark} />
          <stop offset="100%" stopColor={light} />
        </linearGradient>

        {/* body mottling - broad tonal drift across the slab */}
        <filter id={fm} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.014 0.02" numOctaves="4" seed={stone.seed + 3} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.6 0 0 0 -0.12"
          />
        </filter>

        {/* primary veins - thin bands cut out of a noise field */}
        <filter id={fv} x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={stone.freq}
            numOctaves="6"
            seed={stone.seed}
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0"
            result="a"
          />
          <feComponentTransfer in="a" result="bands">
            <feFuncA type="table" tableValues={stone.table} />
          </feComponentTransfer>
          <feFlood floodColor={stone.vein} result="c" />
          <feComposite in="c" in2="bands" operator="in" result="veins" />
          <feGaussianBlur in="veins" stdDeviation="0.5" />
        </filter>

        {/* secondary veins - finer, denser, different seed */}
        <filter id={fv2} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02 0.045" numOctaves="5" seed={stone.seed + 21} result="n2" />
          <feColorMatrix
            in="n2"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0"
            result="a2"
          />
          <feComponentTransfer in="a2" result="b2">
            <feFuncA type="table" tableValues="0 0 0.1 0.55 0.1 0 0" />
          </feComponentTransfer>
          <feFlood floodColor={stone.vein2 || stone.vein} result="c2" />
          <feComposite in="c2" in2="b2" operator="in" />
        </filter>
      </defs>

      <rect width="400" height="520" fill={`url(#${gb})`} />
      <rect width="400" height="520" filter={`url(#${fm})`} opacity="0.5" />
      <rect width="400" height="520" filter={`url(#${fv2})`} opacity="0.45" />
      <rect width="400" height="520" filter={`url(#${fv})`} opacity="0.8" />
    </svg>
  )
}
