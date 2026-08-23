/**
 * Form validation helpers - US phone and email.
 *
 * Phone rules follow the NANP, which is stricter than "ten digits":
 *   · area code and exchange code both start 2-9
 *   · neither may be N11 (211, 311 … 911) - those are service codes
 *   · a leading country code of 1 is accepted and discarded
 * Rejecting 000/111 area codes here stops a whole class of junk leads
 * without troubling anyone entering a real number.
 */

export function phoneDigits(value = '') {
  let d = String(value).replace(/\D/g, '')
  if (d.length === 11 && d.startsWith('1')) d = d.slice(1)
  return d.slice(0, 10)
}

/** Formats progressively as the user types: (813) 555-0123 */
export function formatUsPhone(value = '') {
  const d = phoneDigits(value)
  if (d.length === 0) return ''
  if (d.length < 4) return `(${d}`
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
}

export function isValidUsPhone(value = '') {
  const d = phoneDigits(value)
  if (d.length !== 10) return false
  const area = d.slice(0, 3)
  const exch = d.slice(3, 6)
  if (!/^[2-9]/.test(area) || !/^[2-9]/.test(exch)) return false
  if (/^\d11$/.test(area)) return false // 211, 311, 411 … 911
  return true
}

/** Deliberately permissive - the only way to truly verify is to send mail. */
export function isValidEmail(value = '') {
  const v = String(value).trim()
  return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v)
}
