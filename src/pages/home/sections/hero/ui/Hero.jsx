import { Button, Container } from '@/shared/ui'
import heroBg from '../assets/hero-bg.png'
import { data } from '../model/data'

export function Hero() {
  return (
    <section
      className="min-h-[560px] bg-cover bg-[position:70%_bottom] lg:h-[770px]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Container className="pt-24 pb-16 lg:pt-[210px]">
        <h1 className="font-roboto text-5xl tracking-[2px] md:text-[76px] md:leading-[78px]">
          {data.title}
        </h1>
        <p className="font-work-sans mt-6 max-w-[491px] text-lg tracking-[0.5px] md:mt-8 md:text-2xl">
          {data.text}
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href={data.primaryAction.href}>{data.primaryAction.label}</Button>
          <Button variant="primary" href={data.secondaryAction.href}>
            {data.secondaryAction.label}
          </Button>
        </div>
      </Container>
    </section>
  )
}
