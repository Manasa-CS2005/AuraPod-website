import { Circle } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Insert Wax Disc",
    description: "Place your chosen fragrance wax disc inside the AuraPod base"
  },
  {
    step: "02",
    title: "Close Base",
    description: "Securely close the decorative top with the plant arrangement"
  },
  {
    step: "03",
    title: "Natural Diffusion",
    description: "Natural airflow releases fragrance through the vented design"
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-12 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simple, elegant, and effective. Experience natural fragrance in three easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-serif text-xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
