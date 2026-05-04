import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Leaf, Heart, Recycle, Award } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Natural & Eco-Friendly",
    description: "Our products use natural fragrance wax and sustainable materials, minimizing environmental impact."
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Each AuraPod is carefully crafted by skilled artisans who take pride in their work."
  },
  {
    icon: Recycle,
    title: "Sustainable Design",
    description: "Refillable wax discs mean less waste. One unit lasts for years with proper care."
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "We use only premium materials and rigorous quality checks ensure every product meets our standards."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About AuraPod
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in creating beautiful spaces through natural fragrance. AuraPod was born from a simple idea: what if home fragrance could be both beautiful and sustainable?
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    AuraPod started in 2025 with a mission to revolutionize home fragrance. We noticed that most air fresheners either used electricity, harsh chemicals, or created unnecessary waste.
                  </p>
                  <p>
                    We set out to create something different—a passive fragrance system that works with natural airflow, uses eco-friendly wax, and looks beautiful as a piece of décor.
                  </p>
                  <p>
                    Today, AuraPod is loved by thousands of customers across India who appreciate the blend of functionality and aesthetics. Every product is designed and made in India, supporting local artisans and sustainable practices.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src="/images/hero-product.png"
                  alt="AuraPod Product"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do, from product design to customer service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-card rounded-xl p-6 text-center shadow-sm">
                  <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Made in India */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Proudly Made in India
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Every AuraPod is designed and manufactured in India, supporting local craftsmen and contributing to the Make in India initiative.
            </p>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">5000+</p>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">50+</p>
                <p className="text-muted-foreground">Cities Served</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">4.9</p>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
