import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const refills = [
  { name: "Rose", color: "#E53E3E", description: "Floral & Romantic" },
  { name: "Lavender", color: "#805AD5", description: "Calming & Relaxing" },
  { name: "Jasmine", color: "#F6E05E", description: "Floral & Soothing" },
  { name: "Lime", color: "#68D391", description: "Fresh & Zesty" },
  { name: "Lemongrass", color: "#9AE6B4", description: "Fresh & Uplifting" },
  { name: "Strawberry", color: "#FC8181", description: "Sweet & Fruity" },
]

export function RefillsSection() {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Refill Wax Discs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of natural fragrances. Each disc lasts 2-4 weeks.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-10">
          <Image
            src="/images/refills.png"
            alt="AuraPod Refill Wax Discs Collection"
            width={1200}
            height={600}
            className="w-full h-auto rounded-2xl"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {refills.map((refill) => (
            <Link 
              key={refill.name}
              href={`/refill-wax?fragrance=${refill.name.toLowerCase()}`}
              className="group text-center p-4 rounded-xl bg-card hover:shadow-md transition-all duration-300"
            >
              <div 
                className="w-16 h-16 mx-auto rounded-full mb-3 shadow-sm"
                style={{ backgroundColor: refill.color }}
              />
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {refill.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{refill.description}</p>
              <p className="text-sm font-semibold text-primary mt-2">₹199</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            <Link href="/refill-wax">Explore All Fragrances</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
