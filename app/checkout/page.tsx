"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart, OrderData } from "@/lib/cart-context"
import { Check } from "lucide-react"

const steps = [
  { id: 1, name: "Address" },
  { id: 2, name: "Order Summary" },
  { id: 3, name: "Payment" }
]

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, shipping, total, setCurrentOrder } = useCart()
  
  const [currentStep, setCurrentStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const isAddressComplete = 
    formData.name && formData.phone && formData.email && 
    formData.address && formData.city && formData.state && formData.pincode

  const handleContinue = async () => {
    if (currentStep === 1 && !isAddressComplete) {
      alert("Please fill in all required fields")
      return
    }

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      // Create order and proceed to payment
      setIsProcessing(true)
      const order: OrderData = {
        id: `ORD-${Date.now()}`,
        items,
        userInfo: formData,
        subtotal,
        shipping,
        total,
        status: "pending",
        createdAt: new Date().toISOString()
      }
      setCurrentOrder(order)
      // Simulate processing
      setTimeout(() => {
        router.push("/payment")
      }, 500)
    }
  }

  // Redirect if no items
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add products to your cart first</p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-8">Checkout</h1>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-10">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep > step.id 
                        ? "bg-primary text-primary-foreground" 
                        : currentStep === step.id 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                  </div>
                  <span className={`ml-2 font-medium ${
                    currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? "bg-primary" : "bg-border"
                  }`} />
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Address */}
              {currentStep === 1 && (
                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Delivery Address</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="House No., Street Name"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="addressLine2">Apartment, Suite, Etc. (Optional)</Label>
                      <Input
                        id="addressLine2"
                        name="addressLine2"
                        placeholder="Apartment, Suite, etc."
                        value={formData.addressLine2}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          placeholder="Mumbai"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          name="state"
                          placeholder="Maharashtra"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        placeholder="400001"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Order Summary */}
              {currentStep === 2 && (
                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 pb-4 border-b border-border last:border-b-0">
                        <div className="w-16 h-16 bg-secondary rounded-lg flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.variant}</p>
                          <p className="text-sm font-medium">₹{item.price.toLocaleString('en-IN')} × {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-secondary rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-3">Delivery Address</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {formData.name}<br />
                      {formData.address}{formData.addressLine2 ? `, ${formData.addressLine2}` : ""}<br />
                      {formData.city}, {formData.state} - {formData.pincode}<br />
                      Phone: {formData.phone}
                    </p>
                  </div>
                </div>
              )}

              {/* Step 3: Payment Method */}
              {currentStep === 3 && (
                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Payment Method</h2>
                  
                  <div className="space-y-4">
                    <div className="border-2 border-primary rounded-lg p-4 bg-primary/5">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-primary mt-0.5 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">UPI</p>
                          <p className="text-sm text-muted-foreground">Pay using UPI (India only)</p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-border rounded-lg p-4 opacity-50">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-border mt-0.5" />
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">Credit/Debit Card</p>
                          <p className="text-sm text-muted-foreground">Coming soon</p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-border rounded-lg p-4 opacity-50">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-border mt-0.5" />
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">Cash on Delivery</p>
                          <p className="text-sm text-muted-foreground">Coming soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {currentStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                )}
                <Button
                  onClick={handleContinue}
                  disabled={isProcessing}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                >
                  {currentStep === 3 ? "Proceed to Payment" : "Continue"}
                </Button>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-4">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Order Summary</h3>
                
                <div className="space-y-3 pb-4 border-b border-border">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.name} × {item.quantity}</span>
                      <span className="font-medium">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 py-4 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? <span className="text-primary">FREE</span> : `₹${shipping}`}
                    </span>
                  </div>
                  {subtotal < 999 && shipping > 0 && (
                    <p className="text-xs text-muted-foreground">Free shipping on orders above ₹999</p>
                  )}
                </div>

                <div className="pt-4 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-xl text-primary">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
