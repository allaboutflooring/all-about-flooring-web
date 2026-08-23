import { useState } from 'react'
import { SERVICES } from '../data/content'
import { Arrow } from './Icons'

/**
 * Netlify Forms. `name` separates submissions from the two locations in the
 * dashboard, and the hidden `location` field records which profile the lead
 * came from — that attribution tells you which listing earns work.
 */
export default function QuoteForm({ location, formName = 'quote-main', heading }) {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    // Remove this handler to let Netlify Forms take the POST natively.
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="sec sec-ink" id="quote">
      <div className="wrap">
        <div className="quote">
          <div>
            <p className="eyebrow">Get started</p>
            <h2 style={{ marginTop: 22, fontSize: 'clamp(34px,4.4vw,60px)' }}>
              {heading || 'Tell us the room. We\u2019ll tell you the number.'}
            </h2>
            <ul className="qpoints">
              <li>
                <b>We call back the same day</b>
                <p>Weekdays before 16:00, you&rsquo;ll hear from us before we close.</p>
              </li>
              <li>
                <b>We bring the measure to you</b>
                <p>Evening and Saturday slots if you work during the day.</p>
              </li>
              <li>
                <b>Fixed price, itemised</b>
                <p>Material, labour, prep and disposal listed separately, so you can compare properly.</p>
              </li>
            </ul>
          </div>

          <div>
            {sent ? (
              <div className="fok" role="status">
                <b>Request sent.</b>
                <p>
                  We&rsquo;ll call within one working day to book your measure. If it&rsquo;s urgent,
                  call {location.phone}.
                </p>
              </div>
            ) : (
              <form
                name={formName}
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={onSubmit}
              >
                <input type="hidden" name="form-name" value={formName} />
                <input type="hidden" name="location" value={location.key} />
                <p hidden>
                  <label>
                    Leave blank <input name="bot-field" />
                  </label>
                </p>

                <div className="fgrid">
                  <div className="f">
                    <label htmlFor="nm">Your name</label>
                    <input id="nm" name="name" autoComplete="name" required />
                  </div>
                  <div className="f">
                    <label htmlFor="ph">Phone</label>
                    <input id="ph" name="phone" type="tel" autoComplete="tel" required />
                  </div>
                  <div className="f full">
                    <label htmlFor="em">Email</label>
                    <input id="em" name="email" type="email" autoComplete="email" />
                  </div>
                  <div className="f">
                    <label htmlFor="sv">Service</label>
                    <select id="sv" name="service" defaultValue={SERVICES[0].title}>
                      {SERVICES.map((s) => (
                        <option key={s.slug}>{s.title}</option>
                      ))}
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="f">
                    <label htmlFor="sz">Approx. area</label>
                    <select id="sz" name="size" defaultValue="20 – 50 m²">
                      <option>Under 20 m²</option>
                      <option>20 – 50 m²</option>
                      <option>50 – 100 m²</option>
                      <option>Over 100 m²</option>
                      <option>Don&rsquo;t know</option>
                    </select>
                  </div>
                  <div className="f full">
                    <label htmlFor="ms">What are you planning?</label>
                    <textarea id="ms" name="message" placeholder="Rooms, current floor, rough timeline…" />
                  </div>
                </div>

                <button className="btn btn-light" type="submit" style={{ marginTop: 34 }}>
                  Request my free measure <Arrow />
                </button>
                <p className="fnote">We use your details to quote this job and nothing else.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
