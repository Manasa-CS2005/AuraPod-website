import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "Insert Wax Disc",
    description: "Open the AuraPod base and place your chosen fragrance wax disc inside. The disc fits perfectly in the designated compartment.",
    tip: "Choose from 8 natural fragrances - Rose, Lavender, Jasmine, Lime, Lemongrass, Strawberry, Lemon, and Sandalwood."
  },
  {
    number: "02",
    title: "Close the Base",
    description: "Securely close the AuraPod base by placing the decorative plant top. The top clicks into place ensuring a secure fit.",
    tip: "The decorative plant not only looks beautiful but also helps mask the unit while allowing airflow."
  },
  {
    number: "03",
    title: "Place & Enjoy",
    description: "Place your AuraPod anywhere in your room. Natural airflow through the vented design will diffuse the fragrance passively.",
    tip: "For best results, place near windows or in areas with natural air movement."
  }
]

const faqs = [
  {
    question: "How long does one wax disc last?",
    answer: "Each wax disc provides fragrance for 2-4 weeks depending on room size and air circulation."
  },
  {
    question: "Is it safe around pets and children?",
    answer: "Yes! AuraPod is completely safe as it uses no electricity, heat, or flames. The wax is non-toxic and the design is spill-proof."
  },
  {
    question: "Can I use multiple AuraPods in one room?",
    answer: "Absolutely! You can use multiple units or mix different fragrances for a unique aroma experience."
  },
  {
    question: "How do I replace the wax disc?",
    answer: "Simply remove the top, take out the old disc, and insert a new one. It takes less than a minute."
  }
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  How AuraPod Works
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Experience natural fragrance diffusion in three simple steps. No electricity, no hassle, just pure aromatic bliss.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                  <Link href="/shop">Shop Now</Link>
                </Button>
              </div>
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src="/images/hero-product.png"
                  alt="AuraPod"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Simple 3-Step Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Setting up your AuraPod takes less than a minute. Here&apos;s how it works:
              </p>
            </div>

            <div className="space-y-16 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
                >
                  <div className="flex-1">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-serif text-2xl font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="bg-secondary rounded-lg p-4">
                      <p className="text-sm"><strong>Tip:</strong> {step.tip}</p>
                    </div>
                  </div>
                  <div className="flex-1 max-w-sm">
                    <div className="bg-secondary rounded-2xl p-8 aspect-square flex items-center justify-center">
                      <Image
                        src="/images/hero-product.png"
                        alt={step.title}
                        width={300}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Science Behind It */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
                The Science Behind Passive Diffusion
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                AuraPod uses the principle of natural evaporation and air circulation. The vented design allows air to flow through the unit, carrying fragrance molecules from the wax disc into your space. As the wax slowly sublimates, it releases a continuous, subtle aroma without any power source or heat.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-card rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Natural Airflow</h3>
                  <p className="text-sm text-muted-foreground">Vented design maximizes air circulation for optimal fragrance distribution.</p>
                </div>
                <div className="bg-card rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Slow Release</h3>
                  <p className="text-sm text-muted-foreground">Premium wax formula ensures consistent fragrance for 2-4 weeks.</p>
                </div>
                <div className="bg-card rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Safe & Clean</h3>
                  <p className="text-sm text-muted-foreground">No heat, no flames, no electricity means completely safe operation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="bg-card rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join thousands of happy customers who have discovered the joy of natural fragrance with AuraPod.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
