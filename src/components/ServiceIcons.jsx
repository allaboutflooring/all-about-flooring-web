/** Line icons for the service cards. 48×48, 1.4 stroke, currentColor. */
const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' }
const S = ({ children }) => (
  <svg viewBox="0 0 48 48" width="46" height="46" aria-hidden="true">{children}</svg>
)

export const IconLvp = () => (
  <S><g {...p}>
    <path d="M4 30h30v10H4zM10 18h30v10H10zM16 6h28v10H16z" />
    <path d="M12 35h8M18 23h8M24 11h8" />
  </g></S>
)
export const IconLaminate = () => (
  <S><g {...p}>
    <path d="M6 14h36v9H6zM6 27h36v9H6z" />
    <path d="M20 14v9M32 27v9" />
    <path d="M42 18.5h3M3 31.5h3" />
  </g></S>
)
export const IconHardwood = () => (
  <S><g {...p}>
    <rect x="5" y="12" width="38" height="24" rx="1.5" />
    <path d="M9 18c6 2 10-2 16 0s10 2 14 0M9 24c6 2 10-2 16 0s10 2 14 0M9 30c6 2 10-2 16 0s10 2 14 0" />
  </g></S>
)
export const IconEngineered = () => (
  <S><g {...p}>
    <path d="M5 16h38v6H5zM5 22h38v5H5zM5 27h38v7H5z" />
    <path d="M11 16v-4M23 16v-4M35 16v-4" />
  </g></S>
)
export const IconRefinishing = () => (
  <S><g {...p}>
    <rect x="7" y="22" width="24" height="12" rx="2" />
    <path d="M31 28h7l4-10M11 34v4M27 34v4" />
    <path d="M12 22v-4h10v4" />
  </g></S>
)
export const IconSanding = () => (
  <S><g {...p}>
    <path d="M6 36h36" />
    <rect x="14" y="10" width="12" height="18" rx="1.5" transform="rotate(18 20 19)" />
    <path d="M28 30c4-1 7-4 8-8" />
    <path d="M8 32c4 0 6-2 8-4" />
  </g></S>
)
export const IconTile = () => (
  <S><g {...p}>
    <rect x="6" y="12" width="16" height="12" rx="1" />
    <rect x="26" y="12" width="16" height="12" rx="1" />
    <rect x="6" y="28" width="16" height="12" rx="1" />
    <rect x="26" y="28" width="16" height="12" rx="1" />
  </g></S>
)
export const IconBathroom = () => (
  <S><g {...p}>
    <path d="M6 26h36v4a10 10 0 0 1-10 10H16A10 10 0 0 1 6 30z" />
    <path d="M14 26V12a4 4 0 0 1 8 0" />
    <path d="M30 8h10v10H30zM35 13h.01" />
  </g></S>
)

export const SERVICE_ICONS = {
  lvp: IconLvp,
  laminate: IconLaminate,
  hardwood: IconHardwood,
  engineered: IconEngineered,
  refinishing: IconRefinishing,
  sanding: IconSanding,
  tile: IconTile,
  bathroom: IconBathroom,
}
