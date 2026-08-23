import { TRUST } from '../data/content'

export default function TrustStrip({ items = TRUST }) {
  return (
    <div className="trust">
      <div className="trust-in">
        {items.map((t, i) => (
          <div className="trust-i" key={t}>
            <b>{String(i + 1).padStart(2, '0')}</b> {t}
          </div>
        ))}
      </div>
    </div>
  )
}
