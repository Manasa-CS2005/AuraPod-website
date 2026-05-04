"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDown, Search, HelpCircle } from "lucide-react"
import { Input } from "@/components/ui/input"

const faqCategories = [
  {
    name: "General",
    icon: "❓",
    faqs: [
      {
        q: "What is AuraPod?",
        a: "AuraPod is a functional fragrance décor product that provides passive fragrance to your space without electricity, sprays, or batteries. It uses natural fragrance wax discs that release subtle, long-lasting scent."
      },
      {
        q: "How long does an AuraPod last?",
        a: "Each wax disc lasts approximately 2-3 weeks depending on room size and ventilation. The unit itself is reusable for years with proper care."
      },
      {
        q: "Is AuraPod safe for pets and children?",
        a: "AuraPod is safe when used as directed. Keep out of reach of small children and pets. The wax discs are non-toxic but should not be ingested."
      },
      {
        q: "Where should I place my AuraPod?",
        a: "Place AuraPod in well-ventilated areas like living rooms, bedrooms, or offices. Avoid placing it in direct sunlight, near heat sources, or in damp areas."
      }
    ]
  },
  {
    name: "Product & Usage",
    icon: "🛍️",
    faqs: [
      {
        q: "How do I replace the wax disc?",
        a: "Simply remove the old wax disc from the holder and replace it with a new one. The old disc can be disposed of or composted if made from natural materials."
      },
      {
        q: "Can I use different scents together?",
        a: "Yes, you can mix and match scents to create your own fragrance combinations. Experiment to find your perfect blend!"
      },
      {
        q: "How do I clean my AuraPod?",
        a: "Gently wipe the exterior with a dry cloth. For the holder, use a soft, slightly damp cloth. Never submerge in water."
      },
      {
        q: "What scents are available?",
        a: "We offer a range of scents including Lavender, Vanilla, Rose, Jasmine, Lemongrass, Strawberry, and Lemon. Check our shop for the latest collections."
      },
      {
        q: "Can I adjust the fragrance intensity?",
        a: "You can increase fragrance intensity by placing multiple units in the same room or keeping the unit in a smaller, more enclosed space."
      }
    ]
  },
  {
    name: "Ordering & Shipping",
    icon: "📦",
    faqs: [
      {
        q: "What is the shipping cost?",
        a: "Standard shipping is free across India on all orders. Express shipping (1-2 days) is available at ₹99-₹149 depending on your location."
      },
      {
        q: "How long does delivery take?",
        a: "Standard delivery takes 3-5 business days. Express delivery takes 1-2 business days. Times vary based on your location."
      },
      {
        q: "How can I track my order?",
        a: "You'll receive a tracking number via email and SMS once your order ships. Visit our Track Order page or use the tracking link provided."
      },
      {
        q: "Can I change my delivery address?",
        a: "Yes, if your order hasn't shipped yet, you can contact us within 2 hours of placing the order to change the address."
      },
      {
        q: "What if my order doesn't arrive?",
        a: "Contact our support team immediately at support@aurapod.in with your order number and tracking details. We'll investigate and arrange a replacement or refund."
      }
    ]
  },
  {
    name: "Returns & Refunds",
    icon: "↩️",
    faqs: [
      {
        q: "What is the return window?",
        a: "You have 15 days from the delivery date to initiate a return. Product should be in original condition with packaging."
      },
      {
        q: "How do I process a return?",
        a: "Email us at support@aurapod.in with your order number and return reason. We'll provide return instructions and a shipping label."
      },
      {
        q: "How long does a refund take?",
        a: "After we receive and inspect your return (2-3 days), processing takes 5-7 business days. Your bank may take additional time to credit the amount."
      },
      {
        q: "Do I have to pay for return shipping?",
        a: "For defective or wrong items, we cover return shipping. For change-of-mind returns, customers cover return shipping costs."
      },
      {
        q: "What if the product is damaged?",
        a: "If you receive a damaged product, contact us immediately with photos. We'll arrange a replacement or refund at no cost to you."
      }
    ]
  },
  {
    name: "Payment & Payments",
    icon: "💳",
    faqs: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. Secure payment gateway ensures your information is protected."
      },
      {
        q: "Is my payment information secure?",
        a: "Yes, all payments are processed through secure, encrypted channels. We never store your full card details."
      },
      {
        q: "Can I pay via cheque or bank transfer?",
        a: "Currently, we only accept online payments. For bulk orders, please contact our support team at hello@aurapod.in"
      },
      {
        q: "What if my payment fails?",
        a: "If your payment fails, your order won't be processed. Please try again or use a different payment method. You won't be charged until successful."
      }
    ]
  },
  {
    name: "Account & Wishlist",
    icon: "👤",
    faqs: [
      {
        q: "How do I create an account?",
        a: "You can create an account during checkout or visit the login page. Sign up with your email and create a password."
      },
      {
        q: "Can I save items to my wishlist?",
        a: "Yes, click the heart icon on any product to add it to your wishlist. Access your wishlist from your account dashboard."
      },
      {
        q: "How do I reset my password?",
        a: "Click 'Forgot Password' on the login page. Enter your email and follow the instructions sent to your inbox."
      },
      {
        q: "Can I view my order history?",
        a: "Yes, log into your account and navigate to 'My Orders' to see all past and current orders with their status."
      }
    ]
  }
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("General")

  const filteredFaqs = faqCategories
    .map(category => ({
      ...category,
      faqs: category.faqs.filter(faq =>
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => !selectedCategory || category.name === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-12 lg:py-16">
          <div className="container mx-auto px-4 text-center">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about AuraPod products, shipping, returns, and more
            </p>
          </div>
        </section>

        {/* Search & Categories */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-base"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === ""
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  All Categories
                </button>
                {faqCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === category.name
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="max-w-3xl mx-auto space-y-8">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((category) => (
                  <div key={category.name}>
                    <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3">
                      <span>{category.icon}</span>
                      {category.name}
                    </h2>
                    
                    {category.faqs.length > 0 ? (
                      <Accordion type="single" collapsible className="space-y-3">
                        {category.faqs.map((faq, idx) => (
                          <AccordionItem
                            key={idx}
                            value={`${category.name}-${idx}`}
                            className="border border-border rounded-lg px-6 py-4 data-[state=open]:bg-secondary"
                          >
                            <AccordionTrigger className="hover:no-underline">
                              <span className="text-left font-medium">{faq.q}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pt-2">
                              {faq.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    ) : (
                      <p className="text-muted-foreground">No FAQs found in this category.</p>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any FAQ matching your search. Try different keywords.
                  </p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-primary hover:underline font-medium"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>

            {/* Still Need Help? */}
            <div className="mt-16 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center max-w-2xl mx-auto">
              <h3 className="font-semibold text-lg mb-2">Still need help?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our customer support team is here to assist you.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
                </Link>
                <Link href="/track-order">
                  <Button variant="outline">Track Order</Button>
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
