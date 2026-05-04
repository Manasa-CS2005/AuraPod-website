import { Users, Flag, Leaf, Star } from "lucide-react"

const trustItems = [
  {
    icon: Users,
    label: "Loved by 5000+ Customers",
    highlight: "5000+"
  },
  {
    icon: Flag,
    label: "Made in India",
    highlight: ""
  },
  {
    icon: Leaf,
    label: "Eco-Friendly Packaging",
    highlight: ""
  }
]

export function TrustSection() {
  return (
    <section className="py-8 lg:py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}
