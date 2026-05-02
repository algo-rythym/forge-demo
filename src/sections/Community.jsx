import { Users, ExternalLink, Mail, Star } from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { reviews } from '../data/content'
import { useClickTracker } from '../hooks/useAnalytics'

export function Community() {
  const trackSocial = useClickTracker('social_link')

  return (
    <section id="community" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="03 — The Fellowship"
          title="Built by gamers, for gamers."
          subtitle="We are more than a retail space. The Forge is a community hub — a place where campaigns are born, armies are painted, and friendships are forged over shared victories (and catastrophic critical failures)."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal>
            <div className="group bg-forge-900/60 border border-forge-800 hover:border-ember-500/30 rounded-xl overflow-hidden card-hover h-full">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/photos/forge-09.png"
                  alt="Community gathering"
                  className="w-full h-full object-cover image-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forge-950 via-forge-950/40 to-transparent" />
              </div>
              <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-ember-500/10 rounded-full flex items-center justify-center text-ember-500">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-forge-100 font-semibold">Active Community</div>
                  <div className="text-sm text-forge-400">Discord & Facebook</div>
                </div>
              </div>
              <p className="text-forge-300 leading-relaxed mb-8">
                Join hundreds of local players for organized play, hobby
                meetups, and impromptu sessions. The Forge is not just a store —
                it is where campaigns are born and armies are painted.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  onClick={() => trackSocial({ platform: 'discord' })}
                  className="inline-flex items-center gap-2 bg-forge-800 hover:bg-forge-700 text-forge-50 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors border border-forge-700 hover:border-forge-600"
                >
                  Join Discord
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  onClick={() => trackSocial({ platform: 'facebook' })}
                  className="inline-flex items-center gap-2 border border-forge-700 hover:border-forge-500 text-forge-300 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors hover:text-forge-100"
                >
                  Follow on Facebook
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  onClick={() => trackSocial({ platform: 'newsletter' })}
                  className="inline-flex items-center gap-2 border border-forge-700 hover:border-forge-500 text-forge-300 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors hover:text-forge-100"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Newsletter
                </a>
              </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group bg-forge-900/60 border border-forge-800 hover:border-forge-700 rounded-xl p-5 text-forge-300 leading-relaxed transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-ember-500 fill-ember-500" />
                    ))}
                  </div>
                  <p className="italic text-sm mb-2">{review.text}</p>
                  <p className="text-xs text-forge-500 font-medium">{review.author}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
