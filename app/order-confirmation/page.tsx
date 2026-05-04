"use client"

import { Suspense, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { CheckCircle, Package, Truck, Calendar } from "lucide-react"

function OrderConfirmationContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")
  const { currentOrder, clearCart } = useCart()

  useEffect(() => {
    // Clear cart after successful order
    if (currentOrder) {
      clearCart()
    }
  }, [currentOrder])

  if (!currentOrder) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Order Not Found</h2>
            <p className="text-muted-foreground mb-6">Unable to load your order details</p>
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
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className="max-w-2xl mx-auto">
            {/* Success Icon */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
              <h1 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Thank You!
              </h1>
              <p className="text-lg text-muted-foreground">
                Your order has been placed successfully.
              </p>
            </div>

            {/* Order Details Card */}
            <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-8">
              <div className="text-center pb-6 border-b border-border mb-6">
                <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                <p className="text-2xl font-bold text-primary font-mono">{currentOrder.id}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Payment Method</p>
                    <p className="font-medium capitalize">{currentOrder.paymentMethod || "UPI"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                    <p className="font-medium">3-5 Working Days</p>
                  </div>
                </div>
              </div>

              {currentOrder.transactionId && (
                <div className="mb-6 pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-1">Transaction ID</p>
                  <p className="font-mono text-sm font-medium">{currentOrder.transactionId}</p>
                </div>
              )}

              {/* Order Items */}
              <div className="mb-6 pb-6 border-t border-border pt-6">
                <h3 className="font-medium mb-3">Order Items</h3>
                <div className="space-y-2">
                  {currentOrder.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-medium">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Summary */}
              <div className="space-y-2 pb-6 border-b border-border mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₹{currentOrder.subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {currentOrder.shipping === 0 ? (
                      <span className="text-primary">FREE</span>
                    ) : (
                      `₹${currentOrder.shipping}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-primary">₹{currentOrder.total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Delivery Address */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Delivery Address</p>
                <p className="text-sm leading-relaxed">
                  <strong>{currentOrder.userInfo.name}</strong><br />
                  {currentOrder.userInfo.address}
                  {currentOrder.userInfo.addressLine2 && <>, {currentOrder.userInfo.addressLine2}</>}
                  <br />
                  {currentOrder.userInfo.city}, {currentOrder.userInfo.state} - {currentOrder.userInfo.pincode}
                </p>
              </div>
            </div>

            {/* Payment UPI QR Code */}
            {currentOrder.paymentMethod === "UPI" && (
              <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-8">
                <div className="text-center">
                  <h2 className="font-semibold text-lg mb-4">Payment QR Code</h2>
                  <p className="text-sm text-muted-foreground mb-6">Scan to complete your payment</p>
                  <div className="flex justify-center">
                    <div className="w-64 h-64 bg-secondary rounded-lg overflow-hidden flex items-center justify-center">
                      <Image
                        src="/images/upi.png"
                        alt="UPI Payment QR Code"
                        width={256}
                        height={256}
                        className="w-full h-full object-contain p-4"
                        priority
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">UPI ID: 9148824168@ybl</p>
                </div>
              </div>
            )}

            {/* What's Next */}
            <div className="bg-secondary/50 rounded-xl p-6 mb-8">
              <h2 className="font-semibold mb-4">{"What's Next?"}</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>You will receive order updates via email ({currentOrder.userInfo.email})</span>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>Your order will be delivered within 3-5 business days</span>
                </li>
                <li className="flex items-start gap-3">
                  <Package className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>Each wax disc lasts 2-4 weeks. Set reminder to refill after 30 days.</span>
                </li>
              </ul>
            </div>

            {/* Refill Reminder */}
            <div className="bg-card rounded-xl p-6 shadow-sm mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/strawberry-wax.png"
                    alt="Refill Wax"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Remember to refill your wax!</p>
                  <p className="text-sm text-muted-foreground">Each wax disc lasts 2-4 weeks for continuous fragrance.</p>
                </div>
                <Button asChild variant="outline" className="rounded-full flex-shrink-0">
                  <Link href="/refill-wax">Shop Refills</Link>
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/shop">Continue Shopping</Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  )
}
