import { Container } from '@/shared/ui'
import { FooterBottom } from './FooterBottom'
import { FooterBrand } from './FooterBrand'
import { FooterCta } from './FooterCta'
import { FooterNav } from './FooterNav'

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container className="pt-16 pb-12 lg:pb-[72px]">
        <div className="grid gap-12 lg:grid-cols-[374px_1fr] lg:gap-0">
          <FooterBrand />
          <FooterNav />
        </div>

        <div className="mt-12 border-t border-white/15 pt-12 lg:mt-[70px]">
          <FooterCta />
        </div>

        <div className="mt-12 border-t border-white/15 pt-4 lg:mt-[77px]">
          <FooterBottom />
        </div>
      </Container>
    </footer>
  )
}
