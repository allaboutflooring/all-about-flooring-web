import { useState } from 'react'
import { Arrow } from './Icons'
import SelectField from './SelectField'
import SampleFan from './SampleFan'
import { SERVICE_OPTIONS } from '../data/content'
import { formatUsPhone, isValidUsPhone, isValidEmail, phoneDigits } from '../lib/validation'

const EMPTY = { name: '', email: '', phone: '', service: [], message: '' }

/**
 * Lead capture directly under the hero.
 *
 * Validation runs on submit, then live for any field already flagged -
 * so nobody is told they are wrong while still typing their first
 * character, but a corrected field clears its error immediately.
 *
 * Errors are announced properly: aria-invalid on the control,
 * aria-describedby pointing at the message, and role="alert" on the
 * message itself. The summary sets focus to the first bad field, which
 * is what keyboard and screen reader users need when a submit fails.
 *
 * The phone field is digits-only by construction - letters can never be
 * entered because the value is re-derived from digits on every keystroke
 * and reformatted as (813) 555-0123.
 */
export default function ConsultForm({
  location,
  formName = 'consult-hero',
  heading = 'Ready to get your floors done right?',
  intro = 'Leave your details and one of our estimators will call to arrange a free in-home measure, talk through materials, and give you an itemised written price.',
}) {
  const [v, setV] = useState(EMPTY)
  const [errors, setErrors] = useState({})

  const validate = (vals) => {
    const e = {}
    if (!vals.name.trim()) e.name = 'Please enter your full name.'
    else if (vals.name.trim().length < 2) e.name = 'That name looks too short.'
    if (!vals.email.trim()) e.email = 'Please enter your email address.'
    else if (!isValidEmail(vals.email)) e.email = 'That email address does not look right.'
    if (!vals.phone.trim()) e.phone = 'Please enter your phone number.'
    else if (!isValidUsPhone(vals.phone))
      e.phone =
        phoneDigits(vals.phone).length < 10
          ? 'A US number needs 10 digits.'
          : 'That is not a valid US number.'
    if (!vals.service || (Array.isArray(vals.service) && vals.service.length === 0) || vals.service === '')
      e.service = 'Please choose the service you need.'
    return e
  }

  const set = (field) => (ev) => {
    const raw = ev.target.value
    const next = { ...v, [field]: field === 'phone' ? formatUsPhone(raw) : raw }
    setV(next)
    // Only re-check fields that are already showing an error.
    if (errors[field]) {
      const e = validate(next)
      setErrors((prev) => ({ ...prev, [field]: e[field] }))
    }
  }

  const onSubmit = (ev) => {
    const e = validate(v)
    setErrors(e)
    const first = Object.keys(e)[0]
    if (first) {
      // Invalid: block the submit and move focus to the first bad field.
      ev.preventDefault()
      document.getElementById(`cf-${first}`)?.focus()
    }
    // Valid: do NOT preventDefault — Netlify Forms handles the native POST and
    // the browser navigates to Netlify's submission-received response. No inline
    // success state is shown, so "Thanks" can never appear without a real POST.
  }

  const field = (name) => ({
    id: `cf-${name}`,
    name,
    value: v[name],
    onChange: set(name),
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `cf-${name}-err` : undefined,
  })

  const Err = ({ name }) =>
    errors[name] ? (
      <span className="cf-err" id={`cf-${name}-err`} role="alert">
        {errors[name]}
      </span>
    ) : null

  return (
    <section className="cf" id="consult">
      <div className="wrap cf-grid">
        <div className="cf-left">
          <h2>{heading}</h2>

          <form
              className="cf-form"
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

              <div className={`cf-f${errors.name ? ' has-err' : ''}`}>
                <label className="vh" htmlFor="cf-name">Full name</label>
                <input {...field('name')} placeholder="Full name *" autoComplete="name" required />
                <Err name="name" />
              </div>

              <div className={`cf-f${errors.email ? ' has-err' : ''}`}>
                <label className="vh" htmlFor="cf-email">Email address</label>
                <input
                  {...field('email')}
                  type="email"
                  placeholder="Email address *"
                  autoComplete="email"
                  required
                />
                <Err name="email" />
              </div>

              <div className={`cf-f${errors.phone ? ' has-err' : ''}`}>
                <label className="vh" htmlFor="cf-phone">Phone number</label>
                <input
                  {...field('phone')}
                  type="tel"
                  inputMode="tel"
                  placeholder="Phone number *"
                  autoComplete="tel"
                  maxLength={14}
                  required
                />
                <Err name="phone" />
              </div>

              <div className={`cf-f cf-sel${errors.service ? ' has-err' : ''}`}>
                <label className="vh" htmlFor="cf-service">Service required</label>
                <SelectField
                  id="cf-service"
                  name="service"
                  value={v.service}
                  onChange={set('service')}
                  options={SERVICE_OPTIONS}
                  placeholder="Service required *"
                  required
                  multiple
                  invalid={!!errors.service}
                  describedBy={errors.service ? 'cf-service-err' : undefined}
                />
                <Err name="service" />
              </div>

              <div className="cf-f">
                <label className="vh" htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  value={v.message}
                  onChange={set('message')}
                  rows={2}
                  placeholder="Message"
                />
              </div>

              <button className="cf-btn" type="submit">
                <span>Request a free measure</span>
                <i aria-hidden="true"><Arrow /></i>
              </button>
            </form>
        </div>

        <div className="cf-right">
          <p className="cf-intro">{intro}</p>
          <div className="cf-media">
            <SampleFan />
          </div>
        </div>
      </div>
    </section>
  )
}
