import { useEffect, useRef } from 'react'
import { paintFloor } from './paintFloor'

/** Paints a flooring texture into a ref'd element, repainting on resize. */
export function useTexture(materialKey, scale = 1) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    paintFloor(el, materialKey, scale)

    let t
    const onResize = () => {
      clearTimeout(t)
      t = setTimeout(() => paintFloor(el, materialKey, scale), 260)
    }
    window.addEventListener('resize', onResize)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', onResize)
    }
  }, [materialKey, scale])

  return ref
}
