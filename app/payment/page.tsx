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
import { Copy, Check } from "lucide-react"

export default function PaymentPage() {
  const router = useRouter()
  const { currentOrder, setCurrentOrder } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [showUPIDetails, setShowUPIDetails] = useState(false)
  const [copied, setCopied] = useState(false)
  const [transactionId, setTransactionId] = useState("")

  // Redirect if no order
  if (!currentOrder) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">No Active Order</h2>
            <p className="text-muted-foreground mb-6">Please create an order first</p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const mockUPIId = "auropod.merchant@upi"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mockUPIId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleConfirmPayment = async () => {
    if (!transactionId.trim()) {
      alert("Please enter your transaction ID before confirming payment.")
      return
    }

    setIsProcessing(true)
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Update order status
    const confirmedOrder: OrderData = {
      ...currentOrder,
      status: "confirmed",
      paymentMethod: "UPI",
      transactionId: transactionId.trim()
    }
    setCurrentOrder(confirmedOrder)

    // Redirect to confirmation
    router.push(`/order-confirmation?orderId=${currentOrder.id}`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-8">Payment</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Content */}
            <div className="lg:col-span-2">
              {/* UPI Payment */}
              <div className="bg-card rounded-xl p-6 shadow-sm space-y-6">
                <div>
                  <h2 className="font-serif text-xl font-semibold mb-4">UPI Payment</h2>
                  <p className="text-muted-foreground mb-4">
                    Scan the QR code or use the UPI ID below to complete the payment.
                  </p>
                </div>

                {/* QR Code Section */}
                <div className="bg-secondary rounded-xl p-8 flex flex-col items-center">
                  <div className="mb-6">
                    <div className="w-48 h-48 bg-white p-4 rounded-lg">
                      <img
                        src="/images/upi.png"
                        alt="UPI QR Code"
                        width={192}
                        height={192}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Amount: <span className="font-bold text-foreground">₹{currentOrder.total.toLocaleString('en-IN')}</span></p>
                  <button 
                    onClick={() => setShowUPIDetails(!showUPIDetails)}
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    {showUPIDetails ? "Hide" : "Manual UPI Entry"}
                  </button>
                </div>

                {/* Manual UPI Entry */}
                {showUPIDetails && (
                  <div className="bg-secondary rounded-xl p-4">
                    <p className="text-sm text-muted-foreground mb-3">UPI ID:</p>
                    <div className="flex items-center gap-2 bg-background p-3 rounded-lg">
                      <code className="flex-1 font-mono text-sm">{mockUPIId}</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={copyToClipboard}
                        className="gap-2"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Payment Instructions */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-medium text-blue-900 mb-2">Payment Instructions:</h3>
                  <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                    <li>Open your UPI app (Google Pay, PhonePe, Paytm, etc.)</li>
                    <li>Scan the QR code or enter the UPI ID</li>
                    <li>Verify the amount: ₹{currentOrder.total.toLocaleString('en-IN')}</li>
                    <li>Complete the payment</li>
                    <li>Click "Confirm Payment" below after completion</li>
                  </ol>
                </div>

                {/* Transaction ID */}
                <div className="bg-secondary rounded-xl p-4 space-y-2">
                  <Label htmlFor="transactionId" className="text-sm font-medium">
                    UPI Transaction ID *
                  </Label>
                  <Input
                    id="transactionId"
                    placeholder="Enter UPI transaction ID"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    className="bg-background"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter the reference/transaction ID shown in your UPI app after payment.
                  </p>
                </div>

                {/* Payment Status */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <span className="text-sm text-muted-foreground">Payment Status:</span>
                    <span className="text-sm font-medium text-yellow-600">Pending</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 rounded-full"
                  >
                    <Link href="/checkout">Back to Checkout</Link>
                  </Button>
                  <Button
                    onClick={handleConfirmPayment}
                    disabled={isProcessing || !transactionId.trim()}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                  >
                    {isProcessing ? "Processing..." : "Confirm Payment"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 shadow-sm sticky top-24 space-y-6">
                <div>
                  <h2 className="font-serif text-lg font-semibold mb-4">Order Details</h2>
                  <p className="text-xs text-muted-foreground mb-2">Order ID</p>
                  <p className="text-sm font-mono text-foreground">{currentOrder.id}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-3 text-sm">Items</h3>
                  <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
                    {currentOrder.items.map((item) => (
                      <div key={item.id} className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{item.name} x {item.quantity}</span>
                        <span className="font-medium">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-4 space-y-2">
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
                  <div className="border-t border-border pt-2 flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-lg text-primary">
                      ₹{currentOrder.total.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="bg-secondary rounded-lg p-3 text-xs text-muted-foreground">
                  <p><strong>Delivery To:</strong></p>
                  <p className="mt-1">{currentOrder.userInfo.name}</p>
                  <p>{currentOrder.userInfo.address}</p>
                  <p>{currentOrder.userInfo.city}, {currentOrder.userInfo.state}</p>
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
