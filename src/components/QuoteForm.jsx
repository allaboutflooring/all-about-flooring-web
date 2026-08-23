import { useState } from 'react'
import Tick from './Tick'
import { SERVICE_OPTIONS } from '../data/content'

/**
 * Netlify Forms. The `name` attribute separates submissions from the two
 * locations in the dashboard, and the hidden `location` field records
 * which profile the lead came from - that attribution is how you tell
 * which listing is actually earning work.
 */
export default function QuoteForm({ location, formName = 'quote-main', heading }) {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    // Remove this handler to let Netlify Forms take the POST natively.
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="sec sec-wall2" id="quote">
      <div className="wrap">
        <div className="sec-hd">
          <Tick>Get started</Tick>
          <h2>{heading || 'Tell us the room. We\u2019ll tell you the number.'}</h2>
        </div>

        <div className="quote">
          <div className="qside">
            <p className="qlead">
              The measure is free and there&rsquo;s no obligation after it. Most quotes land in your
              inbox the next working day.
            </p>
            <ul>
              <li><span className="n">→</span><div><strong>We call you back same day</strong>
                <p>Weekdays before 16:00, you&rsquo;ll hear from us before we close.</p></div></li>
              <li><span className="n">→</span><div><strong>We bring the measure to you</strong>
                <p>Evening and Saturday slots if you work during the day.</p></div></li>
              <li><span className="n">→</span><div><strong>Fixed price, itemised</strong>
                <p>Material, labour, prep and disposal listed separately so you can compare properly.</p></div></li>
            </ul>
          </div>

          <div className="qform">
            {sent ? (
              <div className="fok" role="status">
                <strong>Request sent.</strong>
                <p>We&rsquo;ll call within one working day to book your measure. If it&rsquo;s urgent, call {location.phone}.</p>
              </div>
            ) : (
              <form name={formName} method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
                <input type="hidden" name="form-name" value={formName} />
                <input type="hidden" name="location" value={location.key} />
                <p hidden><label>Leave blank <input name="bot-field" /></label></p>

                <div className="fgrid">
                  <div className="f"><label htmlFor="nm">Your name</label>
                    <input id="nm" name="name" autoComplete="name" required /></div>
                  <div className="f"><label htmlFor="ph">Phone</label>
                    <input id="ph" name="phone" type="tel" autoComplete="tel" required /></div>
                  <div className="f full"><label htmlFor="em">Email</label>
                    <input id="em" name="email" type="email" autoComplete="email" /></div>
                  <div className="f"><label htmlFor="sv">Service</label>
                    <select id="sv" name="service" defaultValue="">
                      <option value="">Please choose…</option>
                      {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                      <option>Not sure yet</option>
                    </select></div>
                  <div className="f"><label htmlFor="sz">Approx. area</label>
                    <select id="sz" name="size" defaultValue="20 - 50 m²">
                      <option>Under 20 m²</option><option>20 - 50 m²</option>
                      <option>50 - 100 m²</option><option>Over 100 m²</option>
                      <option>Don&rsquo;t know</option>
                    </select></div>
                  <div className="f full"><label htmlFor="ms">What are you planning?</label>
                    <textarea id="ms" name="message" placeholder="Rooms, current floor, rough timeline…" /></div>
                </div>

                <button className="btn btn-primary btn-lg" type="submit" style={{ width: '100%', marginTop: 20 }}>
                  Request my free measure
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
