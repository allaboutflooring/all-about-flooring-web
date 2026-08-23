import SectionHead from './SectionHead'
import { REVIEWS } from '../data/content'

/**
 * Testimonials.
 *
 * Sits high on the page, straight after the first CTA - someone deciding
 * whether to keep reading wants evidence before they want a service list.
 *
 * The rating summary is rendered from the location record rather than
 * typed in, so it cannot contradict the Google profile. Do not add
 * AggregateRating schema off the back of it: self-serving review markup
 * on your own site is against Google's guidelines and risks a manual
 * action. The rating belongs to the GBP listing, which already shows it.
 */
export default function Reviews({ location, items = REVIEWS }) {
  return (
    <section className="sec sec-dark tst" id="reviews">
      <div className="wrap">
        <SectionHead watermark="Reviews" accent="say">
          What clients
        </SectionHead>

        <div className="tst-sum">
          <b>{location.reviewAverage}</b>
          <span className="tst-stars" aria-hidden="true">
            ★★★★★
          </span>
          <span className="tst-cnt">
            {location.reviewCount} reviews on Google
          </span>
        </div>

        <div className="tst-grid">
          {items.map((r, i) => (
            <figure className="tst-c" key={i}>
              <span className="tst-mark" aria-hidden="true">
                &rdquo;
              </span>
              <blockquote>{r.body}</blockquote>
              <figcaption>
                <b>{r.by}</b>
                <span>{r.job}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {location.gbpReviewUrl ? (
          <a className="tst-link" href={location.gbpReviewUrl} target="_blank" rel="noreferrer">
            Read all reviews on Google <span aria-hidden="true">→</span>
          </a>
        ) : (
          // No profile URL yet. href="#" jumped the page to the top, which
          // looked like the link had moved into the header.
          <span className="tst-link is-inert">
            Read all reviews on Google <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </section>
  )
}
