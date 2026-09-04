import { Link } from 'react-router-dom'
import { SITE } from '../data/site'

/**
 * Brand mark, two artworks.
 *
 * Over the video the header is transparent, and the logo's dark brown
 * would sit on graded footage at poor contrast - so a white knockout is
 * shown there and the full-colour mark takes over once the bar goes
 * solid. CSS swaps them, so there is no flash and no JS involved.
 *
 * Both files are trimmed to the artwork: the supplied PNG was 500×500
 * with the mark occupying 369×239 of it, meaning over half the rendered
 * height was empty padding.
 */
export default function Logo({ to = '/', sub, className = '', alt = SITE.brand }) {
  return (
    <Link className={`logo ${className}`} to={to} aria-label={`${SITE.brand} - home`}>
      <span className="logo-stack">
        {/* WebP artwork (visually identical to the retained PNGs). The white
            knockout is a decorative duplicate, hidden from assistive tech; the
            accessible name lives on the colour mark's alt. */}
        <img className="logo-img logo-img--colour" src="/img/logo.webp" alt={alt} width="369" height="239" />
        <img className="logo-img logo-img--white" src="/img/logo-white.webp" alt="" aria-hidden="true" width="369" height="239" />
      </span>
      {sub && <span className="logo-sub">{sub}</span>}
    </Link>
  )
}
