"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const refills = [
  { id: "rose", name: "Rose", price: 199, color: "#E53E3E", description: "Floral & Romantic", image: "/images/wax/strawberry.png" },
  { id: "lavender", name: "Lavender", price: 199, color: "#805AD5", description: "Calming & Relaxing", image: "/images/wax/lavender.png" },
  { id: "jasmine", name: "Jasmine", price: 199, color: "#556B2F", description: "Floral & Soothing", image: "/images/wax/jasmine.png" },
  { id: "lime", name: "Lime", price: 199, color: "#68D391", description: "Fresh & Zesty", image: "/images/wax/lemongrass.png" },
  { id: "lemongrass", name: "Lemongrass", price: 199, color: "#6B8E23", description: "Fresh & Uplifting", image: "/images/wax/lemongrass.png" },
  { id: "strawberry", name: "Strawberry", price: 199, color: "#DC143C", description: "Sweet & Fruity", image: "/images/wax/strawberry.png" },
  { id: "lemon", name: "Lemon", price: 199, color: "#DAA520", description: "Citrusy & Energizing", image: "/images/wax/lemon.png" },
  { id: "sandalwood", name: "Sandalwood", price: 199, color: "#8B4513", description: "Warm & Woody", image: "/images/wax/strawberry.png" },
]

const fragranceTypes = ["All", "Floral", "Fresh", "Sweet", "Woody"]

export default function RefillWaxPage() {
  const [selectedType, setSelectedType] = useState("All")

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          {/* Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-10 bg-secondary">
            <div className="p-8 lg:p-12">
              <h1 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Refill Wax Discs
              </h1>
              <p className="text-muted-foreground max-w-xl">
                Long-lasting fragrance wax discs. Compatible with all AuraPod units. Each disc lasts 2-4 weeks.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-card rounded-xl p-6 shadow-sm sticky top-24">
                <h2 className="font-serif text-xl font-semibold mb-6">Filters</h2>
                
                {/* Fragrance Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-sm mb-3">Fragrance</h3>
                  <div className="space-y-2">
                    {fragranceTypes.map((type) => (
                      <div key={type} className="flex items-center gap-2">
                        <Checkbox
                          id={type}
                          checked={selectedType === type}
                          onCheckedChange={() => setSelectedType(type)}
                        />
                        <Label htmlFor={type} className="text-sm cursor-pointer">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Color Swatches */}
                <div className="mb-6">
                  <h3 className="font-medium text-sm mb-3">Quick Select</h3>
                  <div className="flex flex-wrap gap-2">
                    {refills.map((refill) => (
                      <button
                        key={refill.id}
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform"
                        style={{ backgroundColor: refill.color }}
                        title={refill.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  {refills.length} fragrances available
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {refills.map((refill) => (
                  <Card 
                    key={refill.id}
                    className="group bg-card border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <CardContent className="p-4">
                      <Link href={`/refill-wax/${refill.id}`}>
                        <div className="relative aspect-square bg-white rounded-lg overflow-hidden mb-4">
                          <Image
                            src={refill.image}
                            alt={refill.name}
                            fill
                            className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h3 
                          className="font-semibold text-lg mb-1"
                          style={{ color: refill.color }}
                        >
                          {refill.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{refill.description}</p>
                        <p className="text-xl font-semibold text-primary">
                          ₹{refill.price}
                        </p>
                      </Link>
                      <Button 
                        className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                        size="sm"
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
