import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { Head } from 'vite-react-ssg'
import SectionHead from './SectionHead'
import { FAQS } from '../data/faqs'

// useLayoutEffect on the client (runs before paint, so no flicker), useEffect
// on the server (vite-react-ssg) to avoid the SSR warning.
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

/**
 * FAQ accordion.
 *
 * Every answer is in the prerendered HTML regardless of open state - the
 * panels are collapsed with CSS, not omitted from the markup - so the copy
 * is crawlable and findable with ctrl+F even while closed.
 *
 * FAQPage schema is emitted too. Worth setting expectations: since 2023
 * Google shows FAQ rich results almost exclusively for government and
 * health sites, so treat this as valid structured data that helps Google
 * understand the page, not as a route to stars in the results.
 */
export default function Faqs({ items = FAQS, watermark = 'FAQ', heading = 'Questions we get', accent = 'every week' }) {
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

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section className="sec faq" id="faqs">
      <Head>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>

      <div className="wrap">
        <SectionHead watermark={watermark} accent={accent}>
          {heading}
        </SectionHead>

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
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{f.q}</span>
                    <i className="faq-sign" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq-a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
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
