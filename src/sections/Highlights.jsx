import { Swords, Package, Calendar, Star } from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { AnimatedCounter } from '../components/ui/AnimatedCounter'
import { highlights } from '../data/content'

const iconMap = {
  Swords,
  Package,
  Calendar,
  Star,
}

export function Highlights() {
  return (
    <section className="border-y border-forge-800/50 bg-forge-900/40">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((h, i) => {
            const Icon = iconMap[h.iconName] || Star
            return (
              <ScrollReveal key={h.label} delay={i * 0.1}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-forge-800/70 rounded-lg flex items-center justify-center text-ember-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-forge-50 font-semibold text-sm">
                      <AnimatedCounter value={h.value} />
                    </div>
                    <div className="text-forge-400 text-xs">{h.label}</div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
