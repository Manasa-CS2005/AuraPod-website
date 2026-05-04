"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export interface CartItem {
  id: string
  productId: string
  name: string
  price: number
  quantity: number
  image: string
  variant?: string
}

export interface OrderData {
  id: string
  items: CartItem[]
  userInfo: {
    name: string
    phone: string
    email: string
    address: string
    addressLine2?: string
    city: string
    state: string
    pincode: string
  }
  subtotal: number
  shipping: number
  total: number
  paymentMethod?: string
  transactionId?: string
  status: "pending" | "confirmed" | "shipped" | "delivered"
  createdAt: string
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  subtotal: number
  shipping: number
  total: number
  currentOrder: OrderData | null
  setCurrentOrder: (order: OrderData) => void
  orders: OrderData[]
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [currentOrder, setCurrentOrder] = useState<OrderData | null>(null)
  const [orders, setOrders] = useState<OrderData[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("auropod-cart")
    const savedOrders = localStorage.getItem("auropod-orders")
    const savedCurrentOrder = localStorage.getItem("auropod-current-order")

    if (savedCart) setItems(JSON.parse(savedCart))
    if (savedOrders) setOrders(JSON.parse(savedOrders))
    if (savedCurrentOrder) setCurrentOrder(JSON.parse(savedCurrentOrder))
    setIsLoaded(true)
  }, [])

  // Save to localStorage whenever items change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("auropod-cart", JSON.stringify(items))
    }
  }, [items, isLoaded])

  // Save orders
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("auropod-orders", JSON.stringify(orders))
    }
  }, [orders, isLoaded])

  // Save current order
  useEffect(() => {
    if (isLoaded && currentOrder) {
      localStorage.setItem("auropod-current-order", JSON.stringify(currentOrder))
    }
  }, [currentOrder, isLoaded])

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 999 ? 0 : 50
  const total = subtotal + shipping

  const addToCart = (item: CartItem) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(i => i.productId === item.productId && i.variant === item.variant)
      if (existingItem) {
        return prevItems.map(i =>
          i.productId === item.productId && i.variant === item.variant
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }
      return [...prevItems, item]
    })
  }

  const removeFromCart = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.productId !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setItems(prevItems =>
        prevItems.map(item =>
          item.productId === productId ? { ...item, quantity } : item
        )
      )
    }
  }

  const clearCart = () => {
    setItems([])
  }

  const handleSetCurrentOrder = (order: OrderData) => {
    setCurrentOrder(order)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        shipping,
        total,
        currentOrder,
        setCurrentOrder: handleSetCurrentOrder,
        orders
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
