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
    <section className="border-y border-forge-800/30 bg-forge-900/30">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((h, i) => {
            const Icon = iconMap[h.iconName] || Star
            return (
              <ScrollReveal key={h.label} delay={i * 0.1}>
                <div className="relative bg-forge-900/40 border border-forge-800/40 rounded-xl px-5 py-5 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember-500/40 to-transparent" />
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-ember-500/10 rounded-lg flex items-center justify-center text-ember-500/80">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-forge-50 font-semibold text-lg">
                        <AnimatedCounter value={h.value} />
                      </div>
                      <div className="text-forge-500 text-[10px] font-mono tracking-widest uppercase">{h.label}</div>
                    </div>
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
