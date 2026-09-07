import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
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
  const sectionRef = useRef(null)
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
    const root = sectionRef.current
    if (!root) return
    let cancelled = false
    const load = () => {
      fetch(`/api/google-reviews?l=${encodeURIComponent(location.key)}`)
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (!cancelled && data?.count) setLive(data)
        })
        .catch(() => {})
    }
    if (typeof IntersectionObserver === 'undefined') {
      load()
      return () => {
        cancelled = true
      }
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          load()
          io.disconnect()
        }
      },
      { rootMargin: '240px' }
    )
    io.observe(root)
    return () => {
      cancelled = true
      io.disconnect()
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
    <section className="sec sec-dark tst" id="reviews" ref={sectionRef}>
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
            <ReviewWidget locationKey={location.key} />
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

/**
 * Client-supplied "Leave Us A Review" widget (Review Link Generator).
 *
 * The markup + <style> below are the client's HTML verbatim, rendered via
 * dangerouslySetInnerHTML so every id/class/inline style is preserved exactly.
 *
 * The client's original drop-in wired its controls imperatively inside a
 * one-shot DOMContentLoaded callback that was re-dispatched synthetically after
 * the <script> was injected. That bound listeners to a single snapshot of the
 * DOM, with no re-wiring and no cleanup, so the "Leave Us A Review" button and
 * the close (×) could end up attached to nothing while the hash-open path -
 * which resolves elements live on a window listener - kept working.
 *
 * Here the same behaviour (open/close, star rating, low-rating feedback flow,
 * tracking and the #review hash) is wired in a React effect scoped to the
 * widget's own nodes via refs, with a cleanup that removes every listener. The
 * effect re-runs on mount/remount, so the controls are always bound to the live
 * DOM and never wired more than once.
 */
const RLG_BUTTON = `<!-- Begin Review Link Generator Widget -->
<!-- Review Button -->
<div style="text-align: center;">
    <button id="rlgOpenPopup" class="rlg-review-button">Leave Us A Review</button>
</div>`

function rlgPopupHtml(businessName) {
  return `<!-- Popup Overlay -->
<div id="rlgPopup" class="rlg-popup-overlay">
    <div class="rlg-popup-content">
        <span id="rlgClosePopup" class="rlg-close">&times;</span>
        <div class="rlg-review-container">
            <h3>${businessName}</h3>
            <p>We value your feedback! Please rate our service.</p>
            <div class="rlg-star-rating-wrapper">
                <div class="rlg-star-rating">
                    <input type="radio" id="rlgStar5" name="rlgRating" value="5"/>
                    <label for="rlgStar5" title="5 stars">★</label>
                    <input type="radio" id="rlgStar4" name="rlgRating" value="4"/>
                    <label for="rlgStar4" title="4 stars">★</label>
                    <input type="radio" id="rlgStar3" name="rlgRating" value="3"/>
                    <label for="rlgStar3" title="3 stars">★</label>
                    <input type="radio" id="rlgStar2" name="rlgRating" value="2"/>
                    <label for="rlgStar2" title="2 stars">★</label>
                    <input type="radio" id="rlgStar1" name="rlgRating" value="1"/>
                    <label for="rlgStar1" title="1 star">★</label>
                </div>
                <button class="rlg-submit-btn">Submit Review</button>
            </div>
            <div class="rlg-feedback-form" id="rlgFeedbackForm">
                <p>Your Feedback</p>
                <textarea id="rlgFeedbackText" placeholder="Please let us know how we can improve our service..."></textarea>
                <button class="rlg-submit-btn">Submit Feedback</button>
            </div>
            <div class="rlg-thank-you" id="rlgThankYou">
                <p>✓</p>
                <p>Thank you for your feedback!</p>
            </div>

            <div class="rlg-positive-reviews">
                <h3>Our most recent online review:</h3>
                <div class="rlg-review">

      <div class="rlg-review-avatar rlg-review-avatar-fallback">
        <span>R</span>
        <img
          class="rlg-review-avatar-img"
          src="https://cdn.jsdelivr.net/gh/yamos28/ReviewWidget26@main/public/reviewer-images/23.jpg"
          alt="Riley Chen"
          loading="lazy"
          referrerpolicy="no-referrer"
          onerror="this.style.display='none'; this.parentNode.classList.add('rlg-avatar-fallback');"
        />
      </div>

                    <div class="rlg-review-content">
                        <strong>Riley Chen</strong>
                        <div class="rlg-stars">★★★★★</div>
                        <span class="rlg-time">2 weeks ago</span>
                        <p>Easy to work with and very professional. Thanks, All About Flooring Tampa Bay Contractors!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
/* Review Link Generator Styles - Scoped with rlg- prefix */
.rlg-popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    backdrop-filter: blur(4px);
    z-index: 999999;
    display: none;
    animation: rlgFadeIn 0.2s ease;
}
@keyframes rlgFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
.rlg-popup-content {
    background: #fff;
    margin: 5% auto;
    padding: 32px;
    width: 90%;
    max-width: 480px;
    border-radius: 16px;
    position: relative;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    animation: rlgSlideUp 0.3s ease;
}
@keyframes rlgSlideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.rlg-close {
    position: absolute;
    top: 16px;
    right: 20px;
    font-size: 28px;
    color: #9ca3af;
    cursor: pointer;
    line-height: 1;
    transition: color 0.2s;
}
.rlg-close:hover { color: #374151; }
.rlg-review-container { text-align: center; }
.rlg-review-container h1 {
    font-size: 24px;
    font-weight: 600;
    color: #111827;
    margin: 0 0 12px 0;
}
.rlg-review-container > p {
    font-size: 15px;
    color: #6b7280;
    margin: 0 0 24px 0;
}
.rlg-star-rating-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
}
.rlg-star-rating {
    display: inline-flex;
    flex-direction: row-reverse;
    font-size: 36px;
}
.rlg-star-rating input { display: none; }
.rlg-star-rating label {
    color: #e5e7eb;
    cursor: pointer;
    margin: 0 2px;
    transition: color 0.15s, transform 0.15s;
}
.rlg-star-rating label:hover { transform: scale(1.1); }
.rlg-star-rating input:checked ~ label,
.rlg-star-rating label:hover,
.rlg-star-rating label:hover ~ label {
    color: #fbbf24;
}
.rlg-review-button, .rlg-submit-btn {
    background: #7366f1;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s;
}
.rlg-review-button:hover, .rlg-submit-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.rlg-feedback-form {
    display: none;
    margin-top: 24px;
    animation: rlgFadeIn 0.3s ease;
}
.rlg-feedback-form h2 {
    font-size: 18px;
    color: #111827;
    margin: 0 0 12px 0;
}
.rlg-feedback-form textarea {
    width: 100%;
    height: 100px;
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    resize: vertical;
    margin-bottom: 12px;
}
.rlg-feedback-form textarea:focus {
    outline: none;
    border-color: #7366f1;
    box-shadow: 0 0 0 3px #7366f120;
}
.rlg-thank-you {
    display: none;
    text-align: center;
    padding: 24px;
}
.rlg-thank-you h2 {
    font-size: 48px;
    color: #10b981;
    margin: 0 0 8px 0;
}
.rlg-thank-you p {
    font-size: 16px;
    color: #374151;
    margin: 0;
}
.rlg-positive-reviews {
    margin-top: 32px;
    text-align: left;
    border-top: 1px solid #f3f4f6;
    padding-top: 24px;
}
.rlg-positive-reviews h3 {
    font-size: 14px;
    color: #000;
    margin: 0 0 16px 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
.rlg-review {
    display: flex;
    gap: 12px;
    padding: 16px;
    background: #f9fafb;
    border-radius: 12px;
}
.rlg-review-avatar {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #7366f1, #7366f1cc);
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    flex-shrink: 0;
    position: relative;
}
.rlg-review-avatar-img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 50%;
}
.rlg-review-avatar-fallback span {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
}
.rlg-review-avatar-fallback.rlg-avatar-fallback {
    background: linear-gradient(135deg, #7366f1, #7366f1cc);
}
.rlg-review-content { flex: 1; }
.rlg-review-content strong {
    display: block;
    font-size: 14px;
    color: #111827;
    margin-bottom: 4px;
}
.rlg-review-content .rlg-stars {
    color: #fbbf24;
    font-size: 14px;
    margin-bottom: 4px;
}
.rlg-review-content .rlg-time {
    font-size: 12px;
    color: #9ca3af;
    display: block;
    margin-bottom: 8px;
}
.rlg-review-content p {
    font-size: 13px;
    color: #4b5563;
    margin: 0;
    line-height: 1.5;
}
</style>
<!-- End Review Link Generator Widget -->`
}

const RLG_EMAIL = 'allaboutflooring.fl@gmail.com'
const RLG_PLATFORM = 'google'
const RLG_MIN_RATING = 4
const RLG_FEEDBACK_ENDPOINT = 'https://reviewtool.gsmarketingroup.com/api/send-feedback'
const RLG_TRACK_ENDPOINT = 'https://reviewtool.gsmarketingroup.com/api/track-event'
const RLG_PLATFORM_HASH = '#review'

function rlgResolveEndpoint(url) {
  if (!url) return ''
  try {
    return new URL(url, window.location.origin).toString()
  } catch {
    return url
  }
}

function rlgNormalizeHash(hash) {
  if (!hash) return ''
  return hash.toLowerCase().split('?')[0]
}

function rlgWidgetUrl() {
  return window.location.origin + window.location.pathname + RLG_PLATFORM_HASH
}

// Fire-and-forget analytics beacon to the client's review tool. Mirrors the
// payload the original drop-in sent for widget_open / review_redirect /
// feedback_submit events.
function rlgTrackEvent(eventType, cfg, extra) {
  const endpoint = rlgResolveEndpoint(RLG_TRACK_ENDPOINT)
  if (!endpoint) return
  const payload = {
    businessEmail: RLG_EMAIL,
    businessName: cfg.businessName,
    platform: RLG_PLATFORM,
    eventType,
    timestamp: new Date().toISOString(),
    pageUrl: window.location.href,
    referrer: document.referrer || '',
    reviewLink: cfg.reviewLink,
    widgetUrl: rlgWidgetUrl(),
  }
  if (extra) Object.assign(payload, extra)
  try {
    const body = JSON.stringify(payload)
    if (navigator.sendBeacon) {
      navigator.sendBeacon(endpoint, new Blob([body], { type: 'application/json' }))
      return
    }
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {})
  } catch {
    // ignore tracking errors
  }
}

// Per-location popup config. Only the business name and Write-a-Review URL
// differ between listings; the popup structure, styling, and JS are identical.
const RLG_CONFIG = {
  main: {
    businessName: 'All About Flooring Tampa Bay Contractors',
    reviewLink: 'https://search.google.com/local/writereview?placeid=ChIJJa3ukc6izU8Rw_oaL_6dD7c',
  },
  second: {
    businessName: 'ALL ABOUT FLOORING ST. PETERSBURG',
    reviewLink: 'https://search.google.com/local/writereview?placeid=ChIJtVFXd2LA3w4RE4d-9GdPbAg',
  },
}

function ReviewWidget({ locationKey }) {
  const cfg = RLG_CONFIG[locationKey] || RLG_CONFIG.main
  // The popup overlay is portalled to <body> so it escapes any ancestor
  // stacking context in the Reviews section and its fixed z-index (999999)
  // renders above the fixed site header. Gated on `mounted` so the portal is
  // client-only (no SSR/hydration mismatch; the portal target is document.body).
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef(null)
  const popupRef = useRef(null)
  // Memoised so the injected HTML keeps a stable identity across the Reviews
  // section's re-renders (e.g. the live-reviews fetch), leaving the portalled
  // popup nodes - and the listeners bound to them below - untouched.
  const popupHtml = useMemo(() => rlgPopupHtml(cfg.businessName), [cfg.businessName])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Wire every control on the widget's own nodes (found via refs, not global
  // ids), and tear the listeners down on unmount. Re-runs whenever the widget
  // mounts/remounts, so the button and close (×) are always bound to the live
  // DOM - no synthetic DOMContentLoaded, no one-shot global script.
  useEffect(() => {
    if (!mounted) return undefined
    const openWrap = buttonRef.current
    const root = popupRef.current
    if (!openWrap || !root) return undefined

    const openBtn = openWrap.querySelector('#rlgOpenPopup')
    const overlay = root.querySelector('#rlgPopup')
    const closeBtn = root.querySelector('#rlgClosePopup')
    if (!openBtn || !overlay || !closeBtn) return undefined

    const starWrap = root.querySelector('.rlg-star-rating-wrapper')
    const feedbackForm = root.querySelector('#rlgFeedbackForm')
    const feedbackText = root.querySelector('#rlgFeedbackText')
    const thankYou = root.querySelector('#rlgThankYou')
    const positive = root.querySelector('.rlg-positive-reviews')
    const reviewBtn = starWrap ? starWrap.querySelector('.rlg-submit-btn') : null
    const feedbackBtn = feedbackForm ? feedbackForm.querySelector('.rlg-submit-btn') : null

    let lastRating = 0

    const openPopup = (source) => {
      overlay.style.display = 'block'
      document.body.style.overflow = 'hidden'
      rlgTrackEvent('widget_open', cfg, { source: source || 'button' })
    }
    const closePopup = () => {
      overlay.style.display = 'none'
      document.body.style.overflow = 'auto'
    }
    const onOpen = () => openPopup('button')
    const onOverlay = (e) => {
      if (e.target === overlay) closePopup()
    }
    const onReviewSubmit = () => {
      const checked = overlay.querySelector('input[name="rlgRating"]:checked')
      if (!checked) {
        window.alert('Please select a rating before submitting.')
        return
      }
      lastRating = parseInt(checked.value, 10)
      if (lastRating >= RLG_MIN_RATING) {
        rlgTrackEvent('review_redirect', cfg, { rating: lastRating })
        window.location.href = cfg.reviewLink
      } else {
        if (feedbackForm) feedbackForm.style.display = 'block'
        if (starWrap) starWrap.style.display = 'none'
        if (positive) positive.style.display = 'none'
      }
    }
    const onFeedbackSubmit = () => {
      const value = feedbackText ? feedbackText.value : ''
      if (value.trim() === '') {
        window.alert('Please enter your feedback before submitting.')
        return
      }
      const endpoint = rlgResolveEndpoint(RLG_FEEDBACK_ENDPOINT)
      if (!endpoint) {
        window.alert('Feedback service is not configured. Please try again later.')
        return
      }
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: cfg.businessName,
          businessEmail: RLG_EMAIL,
          customerRating: lastRating || 0,
          customerFeedback: value,
          platform: RLG_PLATFORM,
          timestamp: new Date().toISOString(),
        }),
        keepalive: true,
      })
        .then((res) => {
          if (!res.ok) throw new Error('Failed to send feedback')
          return res.json().catch(() => ({}))
        })
        .then(() => {
          rlgTrackEvent('feedback_submit', cfg, { rating: lastRating || 0 })
          if (feedbackForm) feedbackForm.style.display = 'none'
          if (thankYou) thankYou.style.display = 'block'
        })
        .catch(() => {
          window.alert('Sorry, there was a problem sending your feedback. Please try again.')
        })
    }
    const onHashChange = () => {
      if (rlgNormalizeHash(window.location.hash) === RLG_PLATFORM_HASH) openPopup('hash')
    }

    openBtn.addEventListener('click', onOpen)
    closeBtn.addEventListener('click', closePopup)
    overlay.addEventListener('click', onOverlay)
    if (reviewBtn) reviewBtn.addEventListener('click', onReviewSubmit)
    if (feedbackBtn) feedbackBtn.addEventListener('click', onFeedbackSubmit)
    window.addEventListener('hashchange', onHashChange)
    // Open straight away if the page was loaded at /#review.
    onHashChange()

    return () => {
      openBtn.removeEventListener('click', onOpen)
      closeBtn.removeEventListener('click', closePopup)
      overlay.removeEventListener('click', onOverlay)
      if (reviewBtn) reviewBtn.removeEventListener('click', onReviewSubmit)
      if (feedbackBtn) feedbackBtn.removeEventListener('click', onFeedbackSubmit)
      window.removeEventListener('hashchange', onHashChange)
      document.body.style.overflow = 'auto'
    }
  }, [mounted, cfg])

  return (
    <>
      <div ref={buttonRef} dangerouslySetInnerHTML={{ __html: RLG_BUTTON }} />
      {mounted
        ? createPortal(
            <div ref={popupRef} dangerouslySetInnerHTML={{ __html: popupHtml }} />,
            document.body
          )
        : null}
    </>
  )
}
