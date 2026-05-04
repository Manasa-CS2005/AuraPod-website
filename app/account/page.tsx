"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  Settings, 
  LogOut,
  Package,
  Truck,
  CheckCircle,
  Clock,
  Eye
} from "lucide-react"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/account", active: true },
  { icon: ShoppingBag, label: "My Orders", href: "/account/orders" },
  { icon: Heart, label: "Wishlist", href: "/account/wishlist" },
  { icon: MapPin, label: "Addresses", href: "/account/addresses" },
  { icon: Settings, label: "Settings", href: "/account/settings" },
]

const orders = [
  { 
    id: "AP97.07", 
    amount: 997, 
    status: "Delivered",
    statusColor: "text-primary",
    date: "18 May 2024"
  },
  { 
    id: "AP598.00", 
    amount: 598, 
    status: "Shipped",
    statusColor: "text-blue-600",
    date: "15 May 2024"
  },
  { 
    id: "AP298.00", 
    amount: 4798, 
    status: "Pending",
    statusColor: "text-yellow-600",
    date: "10 May 2024"
  },
]

const stats = [
  { label: "Orders", value: "AP97.07" },
  { label: "Wishlists", value: "₹598.00" },
  { label: "Customers", value: "4798.00" },
  { label: "Spots", value: "" },
]

export default function AccountPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 pb-6 border-b border-border mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">JD</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">john@example.com</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  {sidebarItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        item.active 
                          ? "bg-primary/10 text-primary" 
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  ))}
                  <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 w-full transition-colors">
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
              <h1 className="font-serif text-2xl lg:text-3xl font-bold">My Dashboard</h1>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card rounded-xl p-5 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-1">Orders</p>
                  <p className="text-2xl font-bold text-foreground">AP97.07</p>
                </div>
                <div className="bg-card rounded-xl p-5 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-1">Wishlists</p>
                  <p className="text-2xl font-bold text-foreground">₹598.00</p>
                </div>
                <div className="bg-card rounded-xl p-5 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-1">Customers</p>
                  <p className="text-2xl font-bold text-foreground">4798.00</p>
                </div>
                <div className="bg-card rounded-xl p-5 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-1">Spots</p>
                  <p className="text-2xl font-bold text-foreground">-</p>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl font-semibold">My Orders</h2>
                  <Link href="/account/orders" className="text-sm text-primary hover:underline">
                    View All Orders
                  </Link>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left text-sm font-medium text-muted-foreground pb-3">Order ID</th>
                        <th className="text-left text-sm font-medium text-muted-foreground pb-3">Amount</th>
                        <th className="text-left text-sm font-medium text-muted-foreground pb-3">Status</th>
                        <th className="text-left text-sm font-medium text-muted-foreground pb-3">Date</th>
                        <th className="text-right text-sm font-medium text-muted-foreground pb-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id} className="border-b border-border last:border-0">
                          <td className="py-4 font-medium">{order.id}</td>
                          <td className="py-4">₹{order.amount.toLocaleString('en-IN')}</td>
                          <td className="py-4">
                            <span className={`${order.statusColor} font-medium`}>{order.status}</span>
                          </td>
                          <td className="py-4 text-muted-foreground">{order.date}</td>
                          <td className="py-4 text-right">
                            <Button variant="ghost" size="sm" className="text-primary">
                              <Eye className="w-4 h-4 mr-1" />
                              View Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Account Details */}
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h2 className="font-serif text-xl font-semibold mb-6">Account Details</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input value="John Doe" readOnly className="rounded-lg bg-secondary" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input value="john@example.com" readOnly className="rounded-lg bg-secondary" />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input value="+91 98765 43210" readOnly className="rounded-lg bg-secondary" />
                  </div>
                  <div className="space-y-2">
                    <Label>Member Since</Label>
                    <Input value="January 2024" readOnly className="rounded-lg bg-secondary" />
                  </div>
                </div>
              </div>

              {/* Refill Reminder */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/hero-product.png"
                      alt="AuraPod"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Your last refill wax on 18 May 2024.</p>
                    <p className="text-sm text-muted-foreground">Recommended to refill after 30 days.</p>
                    <p className="text-sm text-muted-foreground">Beepe Tomatoes</p>
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                    <Link href="/refill-wax">Shop Refills</Link>
                  </Button>
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
