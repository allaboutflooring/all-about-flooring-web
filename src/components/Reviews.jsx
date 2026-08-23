import { useCallback, useEffect, useRef, useState } from 'react'
import SectionHead from './SectionHead'
import { GOOGLE_REVIEWS } from '../data/reviews'
import { googleReviewLinks } from '../data/locations'

/**
 * Google reviews widget.
 *
 * Rating, count and cards come from Places API (`/api/google-reviews`).
 * The location record is only a fallback if the key is missing or Google
 * is down. Do not emit AggregateRating schema: self-serving review markup
 * on your own site is against Google's guidelines.
 */
function GoogleMark({ size = 36 }) {
  return (
    <svg className="grw-g" viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

function formatReviewDate(value) {
  if (!value) return ''
  if (/ago|yesterday|today|hour|min|week|month|year/i.test(value)) return value
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [y, m, d] = value.split('-').map(Number)
    return new Date(y, m - 1, d).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return ''
  return parsed.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function Reviews({ location, items = GOOGLE_REVIEWS }) {
  const links = googleReviewLinks(location)
  const [live, setLive] = useState(null)
  const cards = (live?.reviews?.length ? live.reviews : items).filter((r) => (r.stars || 5) >= 4)
  const count = Number(live?.count) || Number(location.reviewCount) || cards.length
  const average = Number(live?.rating) || Number(location.reviewAverage)
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const sync = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    sync()
    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync, cards.length])

  useEffect(() => {
    let cancelled = false
    fetch(`/api/google-reviews?l=${encodeURIComponent(location.key)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.count) setLive(data)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [location.key])

  const nudge = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.grw-rev')
    const step = card ? card.offsetWidth + 14 : el.clientWidth * 0.85
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <section className="sec sec-dark tst" id="reviews">
      <div className="wrap">
        <SectionHead watermark="Reviews" accent="say">
          What clients
        </SectionHead>

        <div className="grw">
          <div className="grw-top">
            <span className="grw-logo">
              <GoogleMark />
            </span>
            <div className="grw-meta">
              <p className="grw-name">{location.name}</p>
              <div className="grw-score">
                <b className="grw-avg">{average}</b>
                <span className="grw-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
                <span className="grw-cnt">
                  {count} reviews on Google
                </span>
              </div>
            </div>
            {links.write ? (
              <a className="grw-write" href={links.write} target="_blank" rel="noreferrer">
                Write a review
              </a>
            ) : null}
          </div>

          <div className="grw-strip">
            <button
              className="grw-arw grw-prev"
              type="button"
              onClick={() => nudge(-1)}
              disabled={atStart}
              aria-label="Previous reviews"
            >
              ‹
            </button>
            <div className="grw-row" ref={trackRef}>
              {cards.map((r) => (
                <figure className="grw-rev" key={`${r.by}-${r.date}`}>
                  <div className="grw-head">
                    <span className="grw-avatar" aria-hidden="true">
                      {r.by.slice(0, 1)}
                    </span>
                    <div className="grw-who">
                      <b>{r.by}</b>
                      <span className="grw-date">{r.when || formatReviewDate(r.date)}</span>
                    </div>
                    <GoogleMark size={18} />
                  </div>
                  <span className="grw-rev-stars" aria-hidden="true">
                    {'★'.repeat(r.stars || 5)}
                  </span>
                  <blockquote>{r.body}</blockquote>
                  <figcaption>
                    {links.view ? (
                      <a className="grw-via" href={links.view} target="_blank" rel="noreferrer">
                        Posted on Google
                      </a>
                    ) : (
                      <span className="grw-via">Posted on Google</span>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
            <button
              className="grw-arw grw-next"
              type="button"
              onClick={() => nudge(1)}
              disabled={atEnd}
              aria-label="Next reviews"
            >
              ›
            </button>
          </div>

          <div className="grw-acts">
            {links.view ? (
              <a className="grw-see" href={links.view} target="_blank" rel="noreferrer">
                See all reviews on Google <span aria-hidden="true">→</span>
              </a>
            ) : (
              <span className="grw-see is-inert">See all reviews on Google</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
