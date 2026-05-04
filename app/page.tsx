import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { TrustSection } from "@/components/home/trust-section"
import { ProductsSection } from "@/components/home/products-section"
import { RefillsSection } from "@/components/home/refills-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TrustSection />
        <ProductsSection />
        <RefillsSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  )
}
