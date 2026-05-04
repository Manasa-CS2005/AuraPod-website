import { Zap, Droplets, Clock, RefreshCw } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "No Electricity",
    description: "Completely passive operation"
  },
  {
    icon: Droplets,
    title: "Spill-Free",
    description: "Safe and mess-free design"
  },
  {
    icon: Clock,
    title: "Long Lasting",
    description: "2-4 weeks of fragrance"
  },
  {
    icon: RefreshCw,
    title: "Refillable",
    description: "Easy wax disc replacement"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="flex flex-col items-center text-center p-4 lg:p-6"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
