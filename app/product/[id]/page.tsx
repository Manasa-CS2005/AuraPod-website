"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart, CartItem } from "@/lib/cart-context"
import { Minus, Plus, Star, Truck, Shield, RefreshCw, Check } from "lucide-react"

const products = {
  "pla-cylindrical": {
    id: "pla-cylindrical",
    name: "AuraPod PLA Cylindrical",
    price: 599,
    images: ["/images/products/pla-pod.png", "/images/products/pla-pod.png", "/images/products/pla-pod.png"],
    description: "A modular fragrance décor system that naturally diffuses long-lasting fragrance without electricity. Made from eco-friendly PLA material.",
    features: ["Passive Diffusion", "Spill-Free Wax System", "Long Lasting (2-4 Weeks)", "Refillable Design", "Eco-Friendly PLA"],
    reviews: 128
  },
  "pla-vase": {
    id: "pla-vase",
    name: "AuraPod PLA Vase",
    price: 549,
    images: ["/images/products/vase-pla.png", "/images/products/vase-pla.png", "/images/products/vase-pla.png"],
    description: "Elegant vase-style fragrance décor system. Perfect for tabletops and shelves. Made from eco-friendly PLA material.",
    features: ["Passive Diffusion", "Spill-Free Wax System", "Long Lasting (2-4 Weeks)", "Refillable Design", "Elegant Vase Design"],
    reviews: 96
  },
  "wood-standard": {
    id: "wood-standard",
    name: "AuraPod Wood",
    price: 699,
    images: ["/images/products/home page.png", "/images/products/wood-cylindrical-2.png", "/images/products/wood-cylindrical-3.png"],
    description: "A premium wood-finish fragrance décor system that naturally diffuses long-lasting fragrance without electricity.",
    features: ["Passive Diffusion", "Spill-Free Wax System", "Long Lasting (2-4 Weeks)", "Refillable Design", "Premium Wood Finish"],
    reviews: 128
  },
  "wood-premium": {
    id: "wood-premium",
    name: "AuraPod Wood Premium",
    price: 799,
    images: ["/images/products/wood-cylindrical-1.png", "/images/products/wood-cylindrical-2.png", "/images/products/wood-cylindrical-3.png"],
    description: "Exclusive artisan-crafted wood fragrance décor system with enhanced airflow design.",
    features: ["Artisan Design", "Enhanced Passive Diffusion", "Spill-Free Wax System", "Long Lasting (2-4 Weeks)", "Refillable Design"],
    reviews: 64  },
  "ceramic-vase": {
    id: "ceramic-vase",
    name: "AuraPod Ceramic Vase",
    price: 549,
    images: ["/images/products/product 2- vase 1.png", "/images/products/product 2-vase.png", "/images/products/product 2- vase 3.png"],
    description: "Beautiful ceramic vase-style fragrance décor system with elegant design. Combines functionality with stunning aesthetics.",
    features: ["Passive Diffusion", "Spill-Free Wax System", "Long Lasting (2-4 Weeks)", "Refillable Design", "Elegant Ceramic Design"],
    reviews: 56
  },
  "gift-set": {
    id: "gift-set",
    name: "AuraPod Gift Set",
    price: 1499,
    images: ["/images/products/gift-set-1.png", "/images/products/gift-set-2.png", "/images/products/gift-set-3.png"],
    description: "A complete AuraPod gift set with diffuser unit, fragrance wax refills, and decorative flowers for every mood and space.",
    features: ["Complete Gift Box", "Multiple Wax Refills", "Decorative Flowers Included", "Passive Diffusion", "No Electricity Required"],
    reviews: 24
  },
  "gift-cylindrical-set": {
    id: "gift-cylindrical-set",
    name: "AuraPod Cylindrical Gift Set",
    price: 1449,
    images: ["/images/products/gift-cylindrical-1.png", "/images/products/gift-cylindrical-2.png", "/images/products/gift-cylindrical-3.png"],
    description: "A curated cylindrical AuraPod gift set with fragrance wax refills and decorative flowers, ideal for home, office, and gifting.",
    features: ["Cylindrical AuraPod Diffuser", "Fragrance Wax Refill Collection", "Decorative Flower Set", "Reusable and Spill-Free", "No Electricity or Flame"],
    reviews: 18
  }
}

const designs = [
  { id: "standard", image: "/images/hero-product.png" },
  { id: "gold", image: "/images/hero-product.png" },
  { id: "black", image: "/images/hero-product.png" },
  { id: "white", image: "/images/hero-product.png" },
]

export default function ProductPage() {
  const router = useRouter()
  const params = useParams()
  const { addToCart } = useCart()
  
  const productId = params.id as string
  const product = products[productId as keyof typeof products] || products["pla-cylindrical"]
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedDesign, setSelectedDesign] = useState(0)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const handleAddToCart = () => {
    setIsAddingToCart(true)
    const cartItem: CartItem = {
      id: `${productId}-${selectedDesign}`,
      productId,
      name: product.name,
      price: product.price,
      quantity,
      image: product.images[0],
      variant: `Design: ${designs[selectedDesign].id}`
    }
    addToCart(cartItem)
    setTimeout(() => {
      setIsAddingToCart(false)
      // Show success toast would go here
    }, 300)
  }

  const handleBuyNow = () => {
    handleAddToCart()
    router.push("/checkout")
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/shop" className="hover:text-primary">Shop</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="flex gap-4">
              {/* Thumbnails */}
              <div className="flex flex-col gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === idx ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain bg-secondary"
                    />
                  </button>
                ))}
              </div>
              
              {/* Main Image */}
              <div className="flex-1 relative aspect-square bg-secondary rounded-2xl overflow-hidden">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                <p className="text-3xl font-bold text-primary">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Select Design */}
              <div>
                <h3 className="font-medium mb-3">Select Design</h3>
                <div className="flex gap-3">
                  {designs.map((design, idx) => (
                    <button
                      key={design.id}
                      onClick={() => setSelectedDesign(idx)}
                      className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedDesign === idx ? "border-primary" : "border-border"
                      }`}
                    >
                      <Image
                        src={design.image}
                        alt={`Design ${design.id}`}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain bg-secondary"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-medium mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-full">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button 
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  size="lg" 
                  variant="outline"
                  className="flex-1 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {isAddingToCart ? "Adding..." : "Add to Cart"}
                </Button>
                <Button 
                  onClick={handleBuyNow}
                  disabled={isAddingToCart}
                  size="lg" 
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                >
                  Buy Now
                </Button>
              </div>

              {/* Shipping Info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  <span>Free Shipping on orders above ₹999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Delivered in 3-5 working days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-12 lg:mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
                <TabsTrigger 
                  value="description"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger 
                  value="how-it-works"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  How It Works
                </TabsTrigger>
                <TabsTrigger 
                  value="whats-inside"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  {"What's Inside"}
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Reviews ({product.reviews})
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-6">
                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  AuraPod blends aesthetics with functionality. The vented design allows natural airflow to pass through the fragrance wax inside, releasing a continuous, subtle and pleasant aroma. No electricity needed, no mess, just pure passive fragrance diffusion that transforms your space naturally.
                </p>
              </TabsContent>
              <TabsContent value="how-it-works" className="pt-6">
                <div className="space-y-4 max-w-3xl">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Step 1:</strong> Open the AuraPod base and insert your chosen fragrance wax disc.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Step 2:</strong> Close the base securely with the decorative plant top.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Step 3:</strong> Place it anywhere in your room. Natural airflow through the vented design will diffuse the fragrance passively.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="whats-inside" className="pt-6">
                <ul className="list-disc list-inside text-muted-foreground space-y-2 max-w-3xl">
                  <li>1x AuraPod Unit (Base + Decorative Top)</li>
                  <li>1x Starter Fragrance Wax Disc (Lavender)</li>
                  <li>1x Product Care Guide</li>
                </ul>
              </TabsContent>
              <TabsContent value="reviews" className="pt-6">
                <p className="text-muted-foreground">Customer reviews coming soon...</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
