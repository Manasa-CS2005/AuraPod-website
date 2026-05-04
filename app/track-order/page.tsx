"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CheckCircle, 
  Truck, 
  Package, 
  Home,
  Clock,
  AlertCircle
} from "lucide-react"

const mockOrders: Record<string, any> = {
  "AP001": {
    id: "AP001",
    amount: 1499,
    status: "Delivered",
    statusValue: "delivered",
    date: "20 May 2024",
    estimatedDelivery: "22 May 2024",
    actualDelivery: "22 May 2024",
    items: [
      { name: "AuraPod Gift Set", quantity: 1, price: 1499 }
    ],
    timeline: [
      { step: "Order Confirmed", date: "20 May 2024", status: "completed" },
      { step: "Processing", date: "20 May 2024", status: "completed" },
      { step: "Shipped", date: "21 May 2024", status: "completed" },
      { step: "Out for Delivery", date: "22 May 2024", status: "completed" },
      { step: "Delivered", date: "22 May 2024", status: "completed" }
    ],
    shippingAddress: "123 Main Street, Bangalore, Karnataka 560001",
    trackingNumber: "TRK123456789"
  },
  "AP002": {
    id: "AP002",
    amount: 699,
    status: "Shipped",
    statusValue: "shipped",
    date: "18 May 2024",
    estimatedDelivery: "24 May 2024",
    items: [
      { name: "AuraPod Wood", quantity: 1, price: 699 }
    ],
    timeline: [
      { step: "Order Confirmed", date: "18 May 2024", status: "completed" },
      { step: "Processing", date: "18 May 2024", status: "completed" },
      { step: "Shipped", date: "19 May 2024", status: "completed" },
      { step: "In Transit", date: "20 May 2024", status: "active" },
      { step: "Out for Delivery", date: "24 May 2024", status: "pending" }
    ],
    shippingAddress: "456 Oak Road, Mumbai, Maharashtra 400001",
    trackingNumber: "TRK987654321"
  },
  "AP003": {
    id: "AP003",
    amount: 1299,
    status: "Processing",
    statusValue: "processing",
    date: "22 May 2024",
    estimatedDelivery: "26 May 2024",
    items: [
      { name: "AuraPod PLA Cylindrical", quantity: 2, price: 599 },
      { name: "Wax Refill - Lavender", quantity: 1, price: 200 }
    ],
    timeline: [
      { step: "Order Confirmed", date: "22 May 2024", status: "completed" },
      { step: "Processing", date: "22 May 2024", status: "active" },
      { step: "Ready to Ship", date: "24 May 2024", status: "pending" },
      { step: "Shipped", date: "25 May 2024", status: "pending" },
      { step: "Delivered", date: "26 May 2024", status: "pending" }
    ],
    shippingAddress: "789 Pine Lane, Delhi, Delhi 110001",
    trackingNumber: "TRK456789123"
  }
}

const statusConfig: Record<string, { label: string; color: string; icon: any }> = {
  "confirmed": { label: "Order Confirmed", color: "text-green-600", icon: CheckCircle },
  "processing": { label: "Processing", color: "text-blue-600", icon: Package },
  "shipped": { label: "Shipped", color: "text-blue-600", icon: Truck },
  "delivered": { label: "Delivered", color: "text-green-600", icon: Home }
}

export default function TrackOrderPage() {
  const [searchId, setSearchId] = useState("")
  const [selectedOrder, setSelectedOrder] = useState<any>(null)
  const [searched, setSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchId.trim()) {
      const order = mockOrders[searchId.toUpperCase()]
      setSelectedOrder(order)
      setSearched(true)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-12 lg:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
              Track Your Order
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enter your order ID to track the status of your AuraPod shipment in real-time
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSearch} className="space-y-4">
                    <div>
                      <Label htmlFor="order-id" className="text-base font-semibold mb-2 block">
                        Order ID
                      </Label>
                      <p className="text-sm text-muted-foreground mb-3">
                        (Example: AP001, AP002, AP003)
                      </p>
                      <div className="flex gap-2">
                        <Input
                          id="order-id"
                          placeholder="Enter your Order ID"
                          value={searchId}
                          onChange={(e) => setSearchId(e.target.value)}
                          className="text-base"
                        />
                        <Button 
                          type="submit"
                          className="bg-primary hover:bg-primary/90 px-8"
                        >
                          Track
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Sample Order IDs */}
              <div className="mt-8 p-6 bg-secondary rounded-lg">
                <p className="text-sm font-semibold mb-3">Sample Order IDs to try:</p>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(mockOrders).map(id => (
                    <button
                      key={id}
                      onClick={() => {
                        setSearchId(id)
                        setSelectedOrder(mockOrders[id])
                        setSearched(true)
                      }}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors text-sm"
                    >
                      {id}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order Details Section */}
        {searched && selectedOrder && (
          <section className="py-12 lg:py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Order Header */}
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Order {selectedOrder.id}</h2>
                      <p className="text-muted-foreground">Ordered on {selectedOrder.date}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${statusConfig[selectedOrder.statusValue]?.color || 'text-foreground'} mb-1`}>
                        {selectedOrder.status}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Est. Delivery: {selectedOrder.estimatedDelivery}
                      </p>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="border-t border-border pt-6">
                    <h3 className="font-semibold mb-4">Order Items</h3>
                    <div className="space-y-3">
                      {selectedOrder.items.map((item: any, idx: number) => (
                        <div key={idx} className="flex justify-between items-center pb-3 border-b border-border last:border-0">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-semibold">₹{item.price.toLocaleString('en-IN')}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold">Total Amount</p>
                        <p className="text-2xl font-bold text-primary">₹{selectedOrder.amount.toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tracking Timeline */}
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-8">Delivery Timeline</h3>
                  <div className="space-y-6">
                    {selectedOrder.timeline.map((step: any, idx: number) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white mb-4 ${
                            step.status === 'completed' ? 'bg-green-600' :
                            step.status === 'active' ? 'bg-primary animate-pulse' :
                            'bg-gray-400'
                          }`}>
                            {step.status === 'completed' ? '✓' : idx + 1}
                          </div>
                          {idx < selectedOrder.timeline.length - 1 && (
                            <div className={`w-1 h-12 ${
                              step.status === 'completed' ? 'bg-green-600' : 'bg-gray-200'
                            }`} />
                          )}
                        </div>
                        <div className="pt-1 pb-6">
                          <p className={`font-semibold ${
                            step.status === 'completed' ? 'text-green-600' :
                            step.status === 'active' ? 'text-primary' :
                            'text-gray-600'
                          }`}>
                            {step.step}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold mb-4">Shipping Address</h3>
                    <p className="text-muted-foreground">{selectedOrder.shippingAddress}</p>
                  </div>
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold mb-4">Tracking Number</h3>
                    <p className="font-mono text-lg font-bold text-primary">{selectedOrder.trackingNumber}</p>
                    <p className="text-sm text-muted-foreground mt-2">Use this number to track with courier partner</p>
                  </div>
                </div>

                {/* Help Section */}
                <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <div className="flex gap-4">
                    <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Need Help?</h4>
                      <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                        If you have any questions about your order, please check our FAQ or contact us.
                      </p>
                      <div className="flex gap-3">
                        <Link href="/faq">
                          <Button variant="outline" size="sm">View FAQ</Button>
                        </Link>
                        <Link href="/contact">
                          <Button variant="outline" size="sm">Contact Us</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Not Found Message */}
        {searched && !selectedOrder && (
          <section className="py-12 lg:py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Order Not Found</h2>
                    <p className="text-muted-foreground mb-6">
                      We couldn't find an order with ID "{searchId}". Please check your order ID and try again.
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      Order IDs typically start with "AP" followed by numbers (e.g., AP001, AP002)
                    </p>
                    <Button 
                      onClick={() => { setSearchId(""); setSearched(false); setSelectedOrder(null); }}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Try Another Order ID
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
