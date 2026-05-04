import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <p className="text-sm font-medium tracking-widest text-brand-brown uppercase mb-3">
                Functional Fragrance Décor
              </p>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-balance">
                Transform Your Space with{" "}
                <span className="text-primary">Passive Fragrance Décor</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              No electricity. No sprays. Just natural ambience. Stylish décor that keeps your space feeling fresh, calm and beautifully you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                <Link href="/shop">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-foreground/20 text-foreground hover:bg-foreground/5">
                <Link href="/refill-wax">Explore Refills</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image - positioned left and down */}
          <div className="relative lg:-ml-8 lg:mt-8">
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              <Image
                src="/images/hero-product.png"
                alt="AuraPod - Passive Fragrance Décor"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
