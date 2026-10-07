import { Container } from '@/shared/ui'

// Секция «Believe your eyes»
// TODO: сверстать по макету Figma
export function DemoBanner() {
  return (
    <section className="bg-primary text-white">
      <Container className="py-16">
        <p className="text-center opacity-60">DemoBanner — «Believe your eyes»</p>
      </Container>
    </section>
  )
}
