import { Fragment, useState, useRef, useEffect, useLayoutEffect } from 'react'
import SectionHead from './SectionHead'

// useLayoutEffect on the client (runs before paint, so no flicker), useEffect
// on the server (vite-react-ssg) to avoid the SSR warning.
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export function Check() {
  return (
    <svg viewBox="0 0 20 20" width="19" height="19" aria-hidden="true">
      <path
        d="M4 10.6l4 4L16.5 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Schema-less FAQ. Same markup and classes as the shared Faqs component,
 * but it deliberately does NOT emit FAQPage JSON-LD — schema is handled in
 * a later phase. Ids are namespaced (`svcfaq-`) so they never collide with
 * the shared component when both render on one page.
 */
export function SeoFaqs({ items }) {
  const [open, setOpen] = useState(0)
  const listRef = useRef(null)
  const mounted = useRef(false)

  // scrollFx reveals `.faq-i` by adding `is-in` straight to the DOM. Toggling
  // the accordion re-renders and React rewrites the element's className,
  // dropping `is-in` so the item snaps back to its hidden pre-reveal state
  // until the next scroll. Re-assert `is-in` before paint on every open change
  // (the items are on-screen whenever the user is clicking). The first mount is
  // skipped so the initial scroll-in still plays its reveal animation.
  useIsoLayoutEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    listRef.current?.querySelectorAll('.faq-i').forEach((el) => el.classList.add('is-in'))
  }, [open])

  return (
    <section className="sec faq" id="faqs">
      <div className="wrap">
        <SectionHead watermark="FAQ" as="h3">FAQs</SectionHead>

        <div className="faq-list" ref={listRef}>
          {items.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq-i${isOpen ? ' is-open' : ''}`} key={f.q}>
                <h3>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`svcfaq-a-${i}`}
                    id={`svcfaq-q-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{f.q}</span>
                    <i className="faq-sign" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq-a" id={`svcfaq-a-${i}`} role="region" aria-labelledby={`svcfaq-q-${i}`}>
                  <p>{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/**
 * "Why choose" checklist — the site's approach-points layout: tick + heading
 * + copy on the left, checkmark list on the right.
 */
export function WhyChoose({ data }) {
  return (
    <section className="sec sec-wall2 abpg-block">
      <div className="wrap abpg-approach">
        <div className="abpg-copy">
          <h2>{data.heading}</h2>
          <p>{data.intro}</p>
        </div>
        <ul className="ab-points abpg-points">
          {data.points.map((t) => (
            <li key={t}>
              <Check />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** Numbered install sequence — the site's existing steps pattern. */
export function ProcessSteps({ data, wall }) {
  return (
    <section className={`sec${wall ? ' sec-wall2' : ''}`}>
      <div className="wrap">
        <div className="sec-hd">
          <h2>{data.heading}</h2>
          <p>{data.intro}</p>
        </div>
        <div className="steps">
          {data.steps.map((s, i) => (
            <Fragment key={s.title}>
              {i > 0 && <span className="step-ar" aria-hidden="true" />}
              <div className="step">
                <b>{String(i + 1).padStart(2, '0')}</b>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * A narrative section in one of two layouts:
 *  - `feature`: heading + a grid of h3 + short description (oak-top-border cells)
 *  - `prose`:   heading + paragraphs, centred
 */
export function ContentSection({ section, wall }) {
  const cls = `sec${wall ? ' sec-wall2' : ''}`

  if (section.layout === 'feature') {
    return (
      <section className={cls}>
        <div className="wrap">
          <div className="sec-hd">
            <h2>{section.heading}</h2>
            {section.intro &&
              (Array.isArray(section.intro)
                ? section.intro.map((p) => <p key={p}>{p}</p>)
                : <p>{section.intro}</p>)}
          </div>
          <div className="svcseo-feat">
            {section.items.map((it) => (
              <div className="svcseo-feat-i" key={it.h}>
                <h3>{it.h}</h3>
                <p>{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={cls}>
      <div className="wrap">
        <div className="abpg-copy legal-in">
          <h2>{section.heading}</h2>
          {section.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Appended SEO content in the reflowed order:
 *   Why choose -> Featured services -> feature grid -> centred prose ->
 *   process -> feature grid -> centred prose -> FAQ.
 * Backgrounds alternate bone/white so no two sections merge. `featured` is the
 * shared Services grid, passed in so its card-filtering stays in one place.
 *
 * Shared by the main-site service template (ServicePage) and the St. Petersburg
 * service template (StPeteInner) so both render identical structure/styling.
 */
export default function ServiceSeoContent({ seo, featured }) {
  const { whyChoose, process, sections = [], faqs = [] } = seo
  const [first, second, third, fourth] = sections

  return (
    <>
      {whyChoose && <WhyChoose data={whyChoose} />}
      {featured}
      {first && <ContentSection section={first} wall />}
      {second && <ContentSection section={second} />}
      {process && <ProcessSteps data={process} wall />}
      {third && <ContentSection section={third} />}
      {fourth && <ContentSection section={fourth} wall />}
      {faqs.length > 0 && <SeoFaqs items={faqs} />}
    </>
  )
}
