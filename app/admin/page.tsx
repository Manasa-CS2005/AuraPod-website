"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package,
  Users,
  Settings, 
  LogOut,
  TrendingUp,
  TrendingDown,
  Search,
  Bell,
  ChevronDown,
  Eye
} from "lucide-react"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin", active: true },
  { icon: ShoppingBag, label: "Orders", href: "/admin/orders" },
  { icon: Package, label: "Products", href: "/admin/products" },
  { icon: Users, label: "Customers", href: "/admin/customers" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
]

const stats = [
  { label: "Total Orders", value: "245", change: "+12%", trending: "up" },
  { label: "Total Revenue", value: "₹1,45,230", change: "+10%", trending: "up" },
  { label: "Pending Orders", value: "18", change: "-5%", trending: "down" },
  { label: "Products", value: "12", change: "", trending: null },
]

const recentOrders = [
  { id: "AP245087", customer: "Neha Sharma", amount: 997, status: "Delivered", date: "18 May 2024" },
  { id: "AP245086", customer: "Ravi Patel", amount: 598, status: "Shipped", date: "18 May 2024" },
  { id: "AP245085", customer: "Anjali Verma", amount: 1295, status: "Pending", date: "17 May 2024" },
  { id: "AP245084", customer: "Karan Singh", amount: 1198, status: "Delivered", date: "17 May 2024" },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered": return "text-primary bg-primary/10"
    case "Shipped": return "text-blue-600 bg-blue-100"
    case "Pending": return "text-yellow-600 bg-yellow-100"
    default: return "text-muted-foreground bg-secondary"
  }
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <Link href="/">
            <Image 
              src="/images/logo.png" 
              alt="AuraPod" 
              width={140} 
              height={50}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                item.active 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 w-full transition-colors">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h1 className="font-serif text-xl font-semibold">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search..." 
                className="pl-10 w-64 rounded-full bg-secondary border-0"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <div className="flex items-center gap-2 pl-4 border-l border-border">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary">A</span>
              </div>
              <span className="text-sm font-medium">Admin</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-6 shadow-sm">
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  {stat.change && (
                    <div className={`flex items-center gap-1 text-sm ${
                      stat.trending === "up" ? "text-primary" : "text-destructive"
                    }`}>
                      {stat.trending === "up" ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      {stat.change}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Link 
              href="/admin/orders"
              className="bg-card rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Orders</p>
                <p className="text-xs text-muted-foreground">View Details</p>
              </div>
            </Link>
            <Link 
              href="/admin/products"
              className="bg-card rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">Products</p>
                <p className="text-xs text-muted-foreground">View Details</p>
              </div>
            </Link>
            <Link 
              href="/admin/products"
              className="bg-card rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="font-medium">Refill Wax</p>
                <p className="text-xs text-muted-foreground">View Details</p>
              </div>
            </Link>
            <Link 
              href="/admin/customers"
              className="bg-card rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium">Customers</p>
                <p className="text-xs text-muted-foreground">View Details</p>
              </div>
            </Link>
          </div>

          {/* Recent Orders */}
          <div className="bg-card rounded-xl shadow-sm">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="font-serif text-lg font-semibold">Recent Orders</h2>
              <Link href="/admin/orders" className="text-sm text-primary hover:underline">
                View All Orders
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Order ID</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Customer</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Amount</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Status</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Date</th>
                    <th className="text-right text-sm font-medium text-muted-foreground px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-border last:border-0 hover:bg-secondary/50">
                      <td className="px-6 py-4 font-medium">{order.id}</td>
                      <td className="px-6 py-4">{order.customer}</td>
                      <td className="px-6 py-4">₹{order.amount.toLocaleString('en-IN')}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{order.date}</td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm" className="text-primary">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
