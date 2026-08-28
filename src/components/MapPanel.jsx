import { useEffect, useRef, useState } from 'react'

/** Map embed for a location, with a styled placeholder until mapEmbed is set. */
export default function MapPanel({ location }) {
  const wrapRef = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!location.mapEmbed) return
    const el = wrapRef.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setShow(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [location.mapEmbed])

  return (
    <div className="map" ref={wrapRef}>
      {location.mapEmbed && show ? (
        <iframe
          src={location.mapEmbed}
          title={`Map to ${location.name}, ${location.city}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : location.mapEmbed ? null : (
        <>
          <div className="map-grid" />
          <div className="pin">
            <div className="pin-d" />
            <div className="pin-l">{location.name}</div>
          </div>
        </>
      )}
    </div>
  )
}
