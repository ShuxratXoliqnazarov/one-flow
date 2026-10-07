// Иконки табов, перерисованы с макета (24×24, цвет = currentColor)
const icons = {
  create: (
    <>
      <rect x="10" y="0" width="4" height="7" />
      <rect x="10" y="17" width="4" height="7" />
      <rect x="0" y="10" width="7" height="4" />
      <rect x="17" y="10" width="7" height="4" />
    </>
  ),
  collaborate: (
    <>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <rect key={angle} x="10" y="1" width="4" height="6" transform={`rotate(${angle} 12 12)`} />
      ))}
    </>
  ),
  sign: (
    <path
      d="M3 3l7.5 7.5M13.5 13.5L21 21M21 3l-7.5 7.5M10.5 13.5L3 21"
      stroke="currentColor"
      strokeWidth="3.5"
    />
  ),
  manage: (
    <>
      <rect x="10" y="1" width="4" height="4" />
      <rect x="10" y="19" width="4" height="4" />
      <rect x="1" y="10" width="4" height="4" />
      <rect x="19" y="10" width="4" height="4" />
      <circle cx="5.6" cy="5.6" r="2" />
      <circle cx="18.4" cy="5.6" r="2" />
      <circle cx="5.6" cy="18.4" r="2" />
      <circle cx="18.4" cy="18.4" r="2" />
    </>
  ),
  analyze: (
    <>
      <rect x="10" y="0" width="4" height="10" />
      <rect x="10" y="14" width="4" height="10" />
      <rect x="0" y="10" width="10" height="4" />
      <rect x="14" y="10" width="10" height="4" />
    </>
  ),
  integrate: (
    <path d="M3 3l5 5M21 3l-5 5M3 21l5-5M21 21l-5-5" stroke="currentColor" strokeWidth="3.5" />
  ),
}

export function TabIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}
