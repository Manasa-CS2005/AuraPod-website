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
import { Slider } from "@/components/ui/slider"
import { useCart, CartItem } from "@/lib/cart-context"

const products = [
  {
    id: "pla-cylindrical",
    name: "AuraPod PLA Cylindrical",
    price: 599,
    image: "/images/products/pla-pod.png",
    category: "AuraPod Units",
    design: "PLA"
  },
  {
    id: "pla-vase",
    name: "AuraPod PLA Vase",
    price: 599,
    image: "/images/products/vase-pla.png",
    category: "AuraPod Units",
    design: "PLA"
  },
  {
    id: "wood-standard",
    name: "AuraPod Wood",
    price: 699,
    image: "/images/products/wood-cylindrical-1.png",
    category: "AuraPod Units",
    design: "Wood"
  },
  {
    id: "wood-premium",
    name: "AuraPod Wood Premium",
    price: 899,
    image: "/images/products/wood-cylindrical-1.png",
    category: "AuraPod Units",
    design: "Wood"
  },
  {
    id: "ceramic-vase",
    name: "AuraPod Ceramic Vase",
    price: 599,
    image: "/images/products/product 2- vase 1.png",
    category: "AuraPod Units",
    design: "Ceramic"
  },
  {
    id: "gift-set",
    name: "AuraPod Gift Set",
    price: 1499,
    image: "/images/products/gift-set-1.png",
    category: "AuraPod Units",
    design: "Gift Set"
  },
  {
    id: "gift-cylindrical-set",
    name: "AuraPod Cylindrical Gift Set",
    price: 1449,
    image: "/images/products/gift-cylindrical-1.png",
    category: "AuraPod Units",
    design: "Gift Set"
  }
]

const categories = ["All", "AuraPod Units", "Refill Wax"]
const designs = ["PLA", "Wood", "Ceramic", "Gift Set"]
const sizes = ["Mini", "Standard", "Premium"]

export default function ShopPage() {
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 2000])

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesCategory && matchesPrice
  })

  const handleAddToCart = (product: typeof products[0]) => {
    const cartItem: CartItem = {
      id: `${product.id}-default`,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      variant: `Design: ${product.design}`
    }
    addToCart(cartItem)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-card rounded-xl p-6 shadow-sm sticky top-24">
                <h2 className="font-serif text-xl font-semibold mb-6">Filters</h2>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-sm mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center gap-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategory === category}
                          onCheckedChange={() => setSelectedCategory(category)}
                        />
                        <Label htmlFor={category} className="text-sm cursor-pointer">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-sm mb-3">Design</h3>
                  <div className="space-y-2">
                    {designs.map((design) => (
                      <div key={design} className="flex items-center gap-2">
                        <Checkbox id={design} />
                        <Label htmlFor={design} className="text-sm cursor-pointer">
                          {design}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-sm mb-3">Price Range</h3>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={2000}
                    step={50}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                  Apply Filters
                </Button>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h1 className="font-serif text-2xl lg:text-3xl font-bold">All AuraPod Units</h1>
                <p className="text-sm text-muted-foreground">
                  {filteredProducts.length} products
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <Card 
                    key={product.id}
                    className="group bg-card border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <CardContent className="p-4">
                      <Link href={`/product/${product.id}`}>
                        <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden mb-4">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="font-medium text-foreground mb-1">{product.name}</h3>
                        <p className="text-xl font-semibold text-primary">
                          ₹{product.price.toLocaleString('en-IN')}
                        </p>
                      </Link>
                      <Button 
                        onClick={() => handleAddToCart(product)}
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
