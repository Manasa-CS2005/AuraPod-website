import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: "pla-cylindrical",
    name: "AuraPod PLA Cylindrical",
    price: 599,
    image: "/images/products/pla-pod.png",
    description: "Eco-friendly PLA design"
  },
  {
    id: "pla-vase",
    name: "AuraPod PLA Vase",
    price: 599,
    image: "/images/products/vase-pla.png",
    description: "Elegant vase-style PLA design"
  },
  {
    id: "wood-standard",
    name: "AuraPod Wood",
    price: 699,
    image: "/images/hero-product.png",
    description: "Premium wood finish design"
  },
  {
    id: "wood-premium",
    name: "AuraPod Wood Premium",
    price: 899,
    image: "/images/products/wood-cylindrical-1.png",
    description: "Exclusive artisan wood collection"
  },
  {
    id: "ceramic-vase",
    name: "AuraPod Ceramic Vase",
    price: 599,
    image: "/images/products/product 2- vase 1.png",
    description: "Elegant ceramic vase design with natural fragrance"
  },
  {
    id: "gift-set",
    name: "AuraPod Gift Set",
    price: 1499,
    image: "/images/products/gift-set-1.png",
    description: "Complete AuraPod gift box with diffuser, fragrance wax refills, and decorative flowers"
  },
  {
    id: "gift-cylindrical-set",
    name: "AuraPod Cylindrical Gift Set",
    price: 1449,
    image: "/images/products/gift-cylindrical-1.png",
    description: "Cylindrical AuraPod gift box with diffuser unit, wax refills, and floral decor set"
  }
]

export function ProductsSection() {
  return (
    <section className="py-12 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Bestsellers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our range of beautifully crafted AuraPod units designed to complement any space
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product) => (
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
                  className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                  size="sm"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
