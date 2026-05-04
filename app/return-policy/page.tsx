import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RotateCcw, Clock, AlertCircle, CheckCircle } from "lucide-react"

const returnProcess = [
  {
    step: 1,
    title: "Initiate Return",
    description: "Contact us within 15 days of delivery with your order number and reason for return."
  },
  {
    step: 2,
    title: "Get Return Authorization",
    description: "We'll provide you with a return authorization number and shipping instructions."
  },
  {
    step: 3,
    title: "Ship Back",
    description: "Pack the product securely and ship it back using the provided label/instructions."
  },
  {
    step: 4,
    title: "Inspection",
    description: "We'll inspect the product upon receipt to ensure it meets return conditions."
  },
  {
    step: 5,
    title: "Refund",
    description: "Once approved, your refund will be processed within 5-7 business days."
  }
]

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-12 lg:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
              Return & Refund Policy
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We want you to be completely satisfied with your AuraPod. If you're not happy, returns and refunds are simple.
            </p>
          </div>
        </section>

        {/* Key Details */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Return Window</h3>
                  <p className="text-muted-foreground">15 days from delivery date</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <RotateCcw className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Refund Time</h3>
                  <p className="text-muted-foreground">5-7 business days after approval</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Full Refund</h3>
                  <p className="text-muted-foreground">100% refund if eligible</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className="py-12 lg:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-8">Return Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {returnProcess.map((item) => (
                <div key={item.step} className="relative">
                  <Card className="border-0 shadow-sm h-full">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">
                        {item.step}
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                  {item.step < returnProcess.length && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary transform -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Policy */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Return Eligibility</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">✓ Eligible for Return</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Product not as described in the listing</li>
                    <li>Defective or damaged product (quality issue)</li>
                    <li>Wrong item received</li>
                    <li>Changed mind (within 15 days, unused condition)</li>
                    <li>Product received with original packaging intact</li>
                  </ul>
                </div>
                <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                  <h4 className="font-semibold text-destructive mb-2">✗ Not Eligible for Return</h4>
                  <ul className="space-y-2 list-disc list-inside text-destructive/90">
                    <li>Product used or tested beyond inspection</li>
                    <li>Return requested after 15 days</li>
                    <li>Missing original packaging/accessories</li>
                    <li>Damage caused by customer misuse</li>
                    <li>Return shipping damage if not properly packaged</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">How to Initiate a Return</h2>
              <div className="space-y-4 text-muted-foreground">
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Send us an email with your order number and reason for return</li>
                  <li>Wait for return authorization and shipping instructions</li>
                  <li>Pack the product securely in original packaging if available</li>
                  <li>Ship it back using the provided label or courier partner</li>
                  <li>We'll inspect and process your refund</li>
                </ol>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Refund Process</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Once we receive and inspect your returned item:
                </p>
                <div className="bg-secondary p-4 rounded-lg space-y-3">
                  <p><strong className="text-foreground">Inspection:</strong> We check the product condition (usually 2-3 days)</p>
                  <p><strong className="text-foreground">Approval:</strong> If eligible, we approve your return</p>
                  <p><strong className="text-foreground">Refund:</strong> Amount is credited to your original payment method (5-7 days)</p>
                  <p className="text-sm">Note: Refund timelines depend on your bank/payment provider</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Shipping Costs</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Free Returns:</strong> For defective products or wrong items, we cover return shipping.
                </p>
                <p>
                  <strong className="text-foreground">Paid Returns:</strong> For change of mind returns, customer covers return shipping costs.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Exchange Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you'd like to exchange your product for a different size, color, or design:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Contact us within 10 days of delivery</li>
                  <li>We'll arrange an exchange free of shipping charges</li>
                  <li>New item will be sent once we receive the return</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Damaged or Defective Products</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you receive a damaged or defective product, please contact us immediately with photos:
                </p>
                <div className="bg-secondary p-4 rounded-lg space-y-2">
                  <p><strong>Email:</strong> support@aurapod.in</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p className="text-sm">We'll arrange a replacement or refund at no cost to you.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <h3 className="font-semibold mb-2">Have Questions About Returns?</h3>
              <p className="text-muted-foreground mb-4">
                Our customer service team is here to help with any return-related questions.
              </p>
              <div className="flex gap-3">
                <Link href="/contact">
                  <Button variant="outline" size="sm">Contact Us</Button>
                </Link>
                <Link href="/faq">
                  <Button variant="outline" size="sm">View FAQ</Button>
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
