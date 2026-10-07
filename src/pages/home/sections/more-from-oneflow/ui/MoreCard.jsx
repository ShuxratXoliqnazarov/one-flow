import { Button } from '@/shared/ui'

export function MoreCard({ card }) {
  return (
    <article className="flex flex-col items-center text-center">
      <img
        src={card.image}
        alt=""
        width={560}
        height={315}
        loading="lazy"
        className="aspect-video w-full rounded-md object-cover"
      />
      <p className="font-work-sans mt-[18px] text-sm leading-5">{card.eyebrow}</p>
      <h3 className="mt-5 max-w-[480px] text-2xl leading-8 md:text-[28px] md:leading-10">
        {card.title}
      </h3>
      <Button href={card.action.href} className="mt-[22px] text-base!">
        {card.action.label}
      </Button>
    </article>
  )
}
