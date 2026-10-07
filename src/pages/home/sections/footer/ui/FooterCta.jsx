import { Button } from '@/shared/ui'
import { cta } from '../model/data'

export function FooterCta() {
  return (
    <div>
      <h3 className="font-roboto text-[22px] leading-8">{cta.title}</h3>
      <div className="mt-2.5 flex flex-col items-start gap-6 sm:flex-row sm:gap-[58px]">
        <p className="font-work-sans max-w-[358px] text-sm leading-5">{cta.text}</p>
        <Button size="sm" href={cta.action.href}>
          {cta.action.label}
        </Button>
      </div>
    </div>
  )
}
