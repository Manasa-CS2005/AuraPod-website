import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, Package, Box, Clock, MapPin, AlertCircle } from "lucide-react"

const shippingInfo = [
  {
    icon: Truck,
    title: "Delivery Timeline",
    content: "Standard delivery takes 3-5 business days across India. Express delivery (1-2 days) is available in major cities at checkout."
  },
  {
    icon: MapPin,
    title: "Shipping Locations",
    content: "We currently ship to all locations across India. For international shipping, please contact us at hello@aurapod.in"
  },
  {
    icon: Package,
    title: "Packaging",
    content: "All orders are carefully packed in eco-friendly materials to ensure your AuraPod arrives in perfect condition."
  },
  {
    icon: AlertCircle,
    title: "Delivery Instructions",
    content: "We deliver during 9am-6pm. Please ensure someone is available at the delivery address. You'll receive an SMS with the delivery time window."
  }
]

const shippingCosts = [
  { location: "All India", standard: "Free", express: "₹149", delivery: "3-5 days / 1-2 days" },
  { location: "Metro Cities", standard: "Free", express: "₹99", delivery: "2-3 days / Next day" },
]

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-12 lg:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
              Shipping Policy
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn about our shipping options, timelines, and how we ensure your order arrives safely
            </p>
          </div>
        </section>

        {/* Shipping Info Cards */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {shippingInfo.map((info, idx) => {
                const Icon = info.icon
                return (
                  <Card key={idx} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <Icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Shipping Costs Table */}
        <section className="py-12 lg:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-8">Shipping Costs</h2>
            <Card className="border-0 shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary/10 border-b border-border">
                        <th className="text-left px-6 py-4 font-semibold">Location</th>
                        <th className="text-left px-6 py-4 font-semibold">Standard Shipping</th>
                        <th className="text-left px-6 py-4 font-semibold">Express Shipping</th>
                        <th className="text-left px-6 py-4 font-semibold">Delivery Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shippingCosts.map((row, idx) => (
                        <tr key={idx} className="border-b border-border last:border-0">
                          <td className="px-6 py-4 font-medium">{row.location}</td>
                          <td className="px-6 py-4">{row.standard}</td>
                          <td className="px-6 py-4">{row.express}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.delivery}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Detailed Shipping Information */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">How We Ship Your Orders</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All AuraPod orders are packed with care using eco-friendly packaging materials. We partner with reliable courier services to ensure timely and safe delivery.
                </p>
                <p>
                  Once your order is dispatched, you'll receive a tracking number via email and SMS. You can use this number to track your shipment in real-time.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Delivery Timeframes</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Standard Delivery (3-5 Days)</h4>
                  <p>Available across India. Processing typically takes 1-2 days, followed by 2-3 days of transit time.</p>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Express Delivery (1-2 Days)</h4>
                  <p>Available in major metropolitan areas. Delivery within 24-48 hours of order confirmation.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Track Your Order</h2>
              <p className="text-muted-foreground mb-4">
                Stay updated with real-time tracking. Once your order ships, you'll receive a tracking link via email.
              </p>
              <Link href="/track-order">
                <Button className="bg-primary hover:bg-primary/90">
                  Track Your Order
                </Button>
              </Link>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Handling Delays</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  While we aim to deliver on time, unforeseen circumstances may occasionally cause delays. In case of any delay:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>We'll notify you immediately with updated timelines</li>
                  <li>You'll receive tracking updates throughout the process</li>
                  <li>Contact our customer support for assistance</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Damaged or Lost Shipments</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If your package arrives damaged or is lost in transit, please contact us immediately:
                </p>
                <div className="bg-secondary p-4 rounded-lg space-y-2">
                  <p><strong>Email:</strong> support@aurapod.in</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p className="text-sm">Include your order number and tracking number for quick resolution.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <h3 className="font-semibold mb-2">Questions About Shipping?</h3>
              <p className="text-muted-foreground mb-4">
                Check our FAQ or reach out to our customer support team.
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
        </section>
      </main>
      <Footer />
    </div>
  )
}
