import { useEffect, useRef, useState } from 'react'

/**
 * Accessible listbox. `multiple` keeps the menu open and toggles options
 * so a lead can name more than one service.
 */
export default function SelectField({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = 'Please choose…',
  required,
  invalid,
  describedBy,
  multiple = false,
}) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)
  const rootRef = useRef(null)
  const btnRef = useRef(null)
  const listRef = useRef(null)
  const typed = useRef({ str: '', t: 0 })

  const selected = multiple
    ? Array.isArray(value)
      ? value
      : value
        ? [value]
        : []
    : value

  const isPicked = (o) => (multiple ? selected.includes(o) : o === selected)

  const label = multiple
    ? selected.length === 0
      ? placeholder
      : selected.length === 1
        ? selected[0]
        : `${selected.length} services selected`
    : selected || placeholder

  const commit = (i) => {
    const next = options[i]
    if (multiple) {
      const set = isPicked(next)
        ? selected.filter((s) => s !== next)
        : [...selected, next]
      onChange({ target: { name, value: set } })
      return
    }
    onChange({ target: { name, value: next } })
    setOpen(false)
    btnRef.current?.focus()
  }

  useEffect(() => {
    if (!open) return
    const onDoc = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    window.addEventListener('resize', () => setOpen(false), { once: true })
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  useEffect(() => {
    if (open && listRef.current && active >= 0) {
      listRef.current.children[active]?.scrollIntoView({ block: 'nearest' })
    }
  }, [open, active])

  const onKeyDown = (e) => {
    const last = options.length - 1
    if (!open && ['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault()
      setOpen(true)
      setActive(0)
      return
    }
    if (!open) return

    switch (e.key) {
      case 'ArrowDown': e.preventDefault(); setActive((i) => (i >= last ? 0 : i + 1)); break
      case 'ArrowUp': e.preventDefault(); setActive((i) => (i <= 0 ? last : i - 1)); break
      case 'Home': e.preventDefault(); setActive(0); break
      case 'End': e.preventDefault(); setActive(last); break
      case 'Enter':
      case ' ': e.preventDefault(); if (active >= 0) commit(active); break
      case 'Escape': e.preventDefault(); setOpen(false); btnRef.current?.focus(); break
      case 'Tab': setOpen(false); break
      default:
        if (e.key.length === 1 && /\S/.test(e.key)) {
          const now = Date.now()
          typed.current.str = now - typed.current.t > 700 ? e.key : typed.current.str + e.key
          typed.current.t = now
          const q = typed.current.str.toLowerCase()
          const i = options.findIndex((o) => o.toLowerCase().startsWith(q))
          if (i >= 0) setActive(i)
        }
    }
  }

  return (
    <div className="sel" ref={rootRef}>
      <input
        type="hidden"
        name={name}
        value={multiple ? selected.join(', ') : selected || ''}
      />
      <button
        type="button"
        id={id}
        ref={btnRef}
        className={`sel-btn${(multiple ? selected.length : selected) ? ' has-value' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-required={required || undefined}
        aria-invalid={invalid ? 'true' : undefined}
        aria-describedby={describedBy}
        aria-activedescendant={open && active >= 0 ? `${id}-opt-${active}` : undefined}
        onClick={() => {
          setOpen((o) => !o)
          setActive(0)
        }}
        onKeyDown={onKeyDown}
      >
        <span>{label}</span>
        <svg className="sel-caret" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M5.5 8l4.5 4.5L14.5 8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          className="sel-list"
          role="listbox"
          ref={listRef}
          tabIndex={-1}
          aria-labelledby={id}
          aria-multiselectable={multiple || undefined}
        >
          {options.map((o, i) => (
            <li
              key={o}
              id={`${id}-opt-${i}`}
              role="option"
              aria-selected={isPicked(o)}
              className={`sel-opt${i === active ? ' is-active' : ''}${isPicked(o) ? ' is-selected' : ''}`}
              onMouseEnter={() => setActive(i)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => commit(i)}
            >
              {o}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
