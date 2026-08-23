export const Arrow = ({ size = 13 }) => (
  <svg className="ar" width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
)

export const Pause = () => (
  <svg width="13" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
    <rect x="1" y="1" width="3.2" height="12" fill="currentColor" />
    <rect x="7.8" y="1" width="3.2" height="12" fill="currentColor" />
  </svg>
)

export const Play = () => (
  <svg width="13" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
    <path d="M2 1l9 6-9 6V1z" fill="currentColor" />
  </svg>
)
