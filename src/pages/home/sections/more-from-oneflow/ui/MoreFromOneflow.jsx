import { Container } from '@/shared/ui'
import { cards, title } from '../model/data'
import { MoreCard } from './MoreCard'

export function MoreFromOneflow() {
  return (
    <section className="bg-white">
      <Container className="pt-20 pb-24 lg:pb-36">
        <h2 className="font-roboto text-[32px] leading-10 font-bold md:text-5xl md:leading-[54px]">
          {title}
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8 lg:mt-[50px]">
          {cards.map((card) => (
            <MoreCard key={card.id} card={card} />
          ))}
        </div>
      </Container>
    </section>
  )
}
