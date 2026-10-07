import { Logo } from '@/shared/ui'
import { address } from '../model/data'

export function FooterBrand() {
  return (
    <div>
      <a href="/" aria-label="oneflow — на главную" className="inline-block">
        <Logo className="text-black" />
      </a>
      <address className="font-work-sans mt-10 text-sm leading-5 not-italic lg:mt-[67px]">
        {address.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </address>
    </div>
  )
}
