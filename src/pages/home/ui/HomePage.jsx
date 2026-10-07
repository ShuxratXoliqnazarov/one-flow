import { Blog } from '../sections/blog'
import { DemoBanner } from '../sections/demo-banner'
import { Footer } from '../sections/footer'
import { Header } from '../sections/header'
import { Hero } from '../sections/hero'
import { Integrations } from '../sections/integrations'
import { MoreFromOneflow } from '../sections/more-from-oneflow'
import { Partners } from '../sections/partners'
import { Platform } from '../sections/platform'
import { PressPlay } from '../sections/press-play'
import { ProductTabs } from '../sections/product-tabs'
import { SmartContracts } from '../sections/smart-contracts'
import { Testimonials } from '../sections/testimonials'

// Порядок секций = порядок в макете Figma (сверху вниз)
export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partners />
        <SmartContracts />
        <ProductTabs />
        <PressPlay />
        <Platform />
        <DemoBanner />
        <Testimonials />
        <Integrations />
        <Blog />
        <MoreFromOneflow />
      </main>
      <Footer />
    </>
  )
}
