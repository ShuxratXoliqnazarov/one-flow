import { Container } from '@/shared/ui'
import { partners, title } from '../model/data'

export function Partners() {
  return (
    <section className="bg-primary text-white">
      <Container className="pt-16 pb-20 lg:pt-[81px]">
        <h2 className="font-roboto text-center text-xl tracking-[0.7px] md:text-[25px] md:leading-[39px]">
          {title}
        </h2>
        <ul className="mt-[22px] flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
          {partners.map((partner) => (
            <li key={partner.name}>
              <img
                src={partner.logo}
                alt={partner.name}
                width={95}
                height={partner.height}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
