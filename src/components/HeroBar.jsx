/**
 * Credential bar that overlaps the bottom of the hero.
 *
 * Four cells: a call action, experience, coverage, and a link through to
 * services. Two are links, two are statements - the links carry an
 * underline on hover rather than a different colour, so the bar stays
 * calm while still signalling what is clickable.
 */
export default function HeroBar({ location, items }) {
  const cells =
    items || [
      { label: 'Call now', href: `tel:${location.phoneE164}` },
      { label: '15+ years of flooring experience' },
      { label: 'Tampa Bay, FL and surrounding areas' },
      {
        label: 'Professional high-end commercial & residential flooring services',
        href: '#services',
      },
    ]

  return (
    <aside className="hbar" aria-label="At a glance">
      <ul className="hbar-in">
        {cells.map((c) => (
          <li className="hbar-c" key={c.label}>
            {c.href ? (
              <a href={c.href}>{c.label}</a>
            ) : (
              <span>{c.label}</span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}
