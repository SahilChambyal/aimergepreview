import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BestSelfSection } from "@/components/best-self-section"
import { MirrorSection } from "@/components/mirror-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BestSelfSection />
        <MirrorSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
