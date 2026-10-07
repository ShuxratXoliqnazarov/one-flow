import globeIcon from '../assets/globe.svg'
import { legalLinks } from '../model/data'

export function FooterBottom() {
  return (
    <div className="flex flex-wrap items-center gap-x-[33px] gap-y-3">
      {legalLinks.map((link) => (
        <a
          key={link}
          href="#"
          className="font-work-sans text-sm leading-5 text-white/60 transition hover:text-white"
        >
          {link}
        </a>
      ))}
      <button type="button" aria-label="Change language" className="-ml-3.5">
        <img src={globeIcon} alt="" width={20} height={20} />
      </button>
    </div>
  )
}
