import { Fragment } from 'react'
import { PROCESS } from '../data/content'

/* The only numbered sequence on the site - an install genuinely is one. */
export default function Process() {
  return (
    <section className="sec" id="process">
      <div className="wrap">
        <div className="sec-hd">
          <p className="eyebrow">How we work</p>
          <h2>Snap the line, then don&rsquo;t move it.</h2>
          <p>You&rsquo;ll know the price before we start, and the date before we book it.</p>
        </div>
        <div className="steps">
          {PROCESS.map((p, i) => (
            <Fragment key={p.n}>
              {i > 0 && <span className="step-ar" aria-hidden="true" />}
              <div className="step">
                <b>{String(p.n).padStart(2, '0')}</b>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <span>{p.dur}</span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
