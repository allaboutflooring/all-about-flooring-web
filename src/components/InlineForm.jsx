import { useState } from 'react'
import SelectField from './SelectField'
import { SERVICE_OPTIONS } from '../data/content'
import { formatUsPhone, isValidUsPhone, isValidEmail, phoneDigits } from '../lib/validation'

const EMPTY = { name: '', email: '', phone: '', service: [], message: '' }

/**
 * Closing band: a single-row form on a solid brand field.
 *
 * Deliberately not another photo banner - there are two of those higher
 * up the page, and a third would read as the same section repeating. A
 * flat tan field with a tile-setting-out pattern closes the page on brand
 * colour instead.
 *
 * Shorter than the form under the hero: name, email, phone and service,
 * no message. Someone who has read the whole page is being asked for the
 * minimum needed to reach them; the detailed brief is what the form at
 * the top is for.
 *
 * Same validation helpers as the main form, so a US number is enforced
 * identically in both places, and its own Netlify form name so closing
 * conversions can be told apart from opening ones.
 */
export default function InlineForm({
  location,
  formName = 'quick-quote',
  heading = 'Get started with',
  accent = 'All About Flooring',
  body = 'Free in-home measure across Tampa Bay. Written price within 48 hours.',
  showMessage = false,
}) {
  const [v, setV] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = (vals) => {
    const e = {}
    if (!vals.name.trim()) e.name = 'Enter your name.'
    if (!vals.email.trim()) e.email = 'Enter your email.'
    else if (!isValidEmail(vals.email)) e.email = 'That email does not look right.'
    if (!vals.phone.trim()) e.phone = 'Enter your phone number.'
    else if (!isValidUsPhone(vals.phone))
      e.phone = phoneDigits(vals.phone).length < 10 ? 'Needs 10 digits.' : 'Not a valid US number.'
    if (!vals.service || (Array.isArray(vals.service) && vals.service.length === 0) || vals.service === '')
      e.service = 'Choose a service.'
    return e
  }

  const set = (field) => (ev) => {
    const raw = ev.target.value
    const next = { ...v, [field]: field === 'phone' ? formatUsPhone(raw) : raw }
    setV(next)
    if (errors[field]) setErrors((p) => ({ ...p, [field]: validate(next)[field] }))
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    const e = validate(v)
    setErrors(e)
    const first = Object.keys(e)[0]
    if (first) {
      document.getElementById(`qf-${first}`)?.focus()
      return
    }
    setSent(true)
  }

  return (
    <section className="qform-band" id="get-started">
      <span className="qform-tile" aria-hidden="true" />

      <div className="wrap qform-in">
        <div className="qform-head">
          <h2>
            {heading} <em>{accent}</em>
          </h2>
          <p>{body}</p>
        </div>

        {sent ? (
          <div className="qform-ok" role="status">
            <strong>Thanks - we&rsquo;ve got it.</strong>
            <p>We&rsquo;ll call within one working day. If it&rsquo;s urgent, call {location.phone}.</p>
          </div>
        ) : (
          <form
            className="qform-row"
            name={formName}
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={onSubmit}
            noValidate
          >
            <input type="hidden" name="form-name" value={formName} />
            <input type="hidden" name="location" value={location.key} />
            <p hidden>
              <label>Leave blank <input name="bot-field" /></label>
            </p>

            <div className={`qform-f${errors.name ? ' has-err' : ''}`}>
              <label className="vh" htmlFor="qf-name">Full name</label>
              <input
                id="qf-name" name="name" value={v.name} onChange={set('name')}
                placeholder="Full name" autoComplete="name" required
                aria-invalid={errors.name ? 'true' : undefined}
                aria-describedby={errors.name ? 'qf-name-err' : undefined}
              />
              {errors.name && <span className="qform-err" id="qf-name-err" role="alert">{errors.name}</span>}
            </div>

            <div className={`qform-f${errors.email ? ' has-err' : ''}`}>
              <label className="vh" htmlFor="qf-email">Email address</label>
              <input
                id="qf-email" name="email" type="email"
                value={v.email} onChange={set('email')}
                placeholder="Email address" autoComplete="email" required
                aria-invalid={errors.email ? 'true' : undefined}
                aria-describedby={errors.email ? 'qf-email-err' : undefined}
              />
              {errors.email && <span className="qform-err" id="qf-email-err" role="alert">{errors.email}</span>}
            </div>

            <div className={`qform-f${errors.phone ? ' has-err' : ''}`}>
              <label className="vh" htmlFor="qf-phone">Phone number</label>
              <input
                id="qf-phone" name="phone" type="tel" inputMode="tel" maxLength={14}
                value={v.phone} onChange={set('phone')}
                placeholder="Phone number" autoComplete="tel" required
                aria-invalid={errors.phone ? 'true' : undefined}
                aria-describedby={errors.phone ? 'qf-phone-err' : undefined}
              />
              {errors.phone && <span className="qform-err" id="qf-phone-err" role="alert">{errors.phone}</span>}
            </div>

            <div className={`qform-f${errors.service ? ' has-err' : ''}`}>
              <label className="vh" htmlFor="qf-service">Service required</label>
              <SelectField
                id="qf-service"
                name="service"
                value={v.service}
                onChange={set('service')}
                options={SERVICE_OPTIONS}
                placeholder="Service required"
                required
                multiple
                invalid={!!errors.service}
                describedBy={errors.service ? 'qf-service-err' : undefined}
              />
              {errors.service && <span className="qform-err" id="qf-service-err" role="alert">{errors.service}</span>}
            </div>

            {showMessage && (
              <div className="qform-f">
                <label className="vh" htmlFor="qf-message">Message</label>
                <textarea
                  id="qf-message"
                  name="message"
                  value={v.message}
                  onChange={set('message')}
                  rows={1}
                  placeholder="Message (optional)"
                />
              </div>
            )}

            <button className="qform-btn" type="submit">Get my quote</button>
          </form>
        )}

        <p className="qform-alt">
          Prefer to talk? <a href={`tel:${location.phoneE164}`}>{location.phone}</a>
        </p>
      </div>
    </section>
  )
}
