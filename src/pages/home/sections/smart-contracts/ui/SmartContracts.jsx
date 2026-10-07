import { Button, Container } from '@/shared/ui'
import collage from '../assets/contracts-collage.png'
import { data } from '../model/data'

export function SmartContracts() {
  return (
    <section className="bg-primary overflow-hidden text-white">
      <Container className="relative flex flex-col gap-10 pb-8 lg:block lg:min-h-[507px]">
        <h2 className="font-roboto text-5xl text-[#f2dce4] md:text-[72px] md:leading-[72px] md:tracking-[-0.4px] lg:-mt-[6px]">
          Turn
          <br />
          {/* «e-» поверх «si» — как в макете (эффект зачёркнутого e-signatures) */}
          <span className="relative">
            si
            <span aria-hidden="true" className="absolute top-0 left-0">
              e-
            </span>
          </span>
          gnatures
          <br />
          into smart
          <br />
          contracts
        </h2>

        <p className="font-work-sans max-w-[528px] text-lg md:text-[21px] md:leading-7 lg:mt-[39px]">
          {data.text}
        </p>

        <Button href={data.action.href} className="self-start lg:mt-5">
          {data.action.label}
        </Button>

        {/* Коллаж поднят на 122px, верх обрезается секцией (overflow-hidden) — как в макете */}
        <img
          src={collage}
          alt="Oneflow contract editor with eSign, SMS and analytics"
          width={501}
          height={626}
          loading="lazy"
          className="mx-auto lg:absolute lg:-top-[122px] lg:left-[654px] lg:mx-0"
        />
      </Container>
    </section>
  )
}
