import { Arrow } from './Icons'

/** Four entry points, overlapping the hero's bottom edge. */
export default function TileStrip({ tiles }) {
  return (
    <nav className="tiles" aria-label="Explore">
      {tiles.map((t) => (
        <a className="tile" key={t.href} href={t.href}>
          <span>{t.kicker}</span>
          <b>{t.label}</b>
          <Arrow />
        </a>
      ))}
    </nav>
  )
}
