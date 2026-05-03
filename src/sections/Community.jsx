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
          number="03"
          title="Built by gamers, for gamers."
          subtitle="We are more than a retail space. The Forge is a community hub — a place where campaigns are born, armies are painted, and friendships are forged over shared victories (and catastrophic critical failures)."
        />

        <div className="grid md:grid-cols-5 gap-6">
          <ScrollReveal>
            <div className="group md:col-span-3 bg-gradient-to-br from-forge-900/60 to-forge-950/60 border border-forge-800/50 hover:border-ember-500/25 rounded-2xl overflow-hidden card-hover h-full">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="/photos/forge-09.png"
                  alt="Community gathering"
                  className="w-full h-full object-cover image-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forge-950 via-forge-950/50 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-ember-500/10 rounded-full flex items-center justify-center text-ember-500">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-forge-100 font-semibold text-sm">Active Community</div>
                    <div className="text-xs text-forge-500 font-mono tracking-wide">Discord & Facebook</div>
                  </div>
                </div>
                <p className="text-sm text-forge-400 leading-relaxed mb-6">
                  Join hundreds of local players for organized play, hobby
                  meetups, and impromptu sessions. The Forge is not just a store —
                  it is where campaigns are born and armies are painted.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="#"
                    onClick={() => trackSocial({ platform: 'discord' })}
                    className="inline-flex items-center gap-2 bg-forge-800 hover:bg-forge-700 text-forge-50 text-xs font-medium px-4 py-2 rounded-lg transition-colors border border-forge-700 hover:border-forge-600"
                  >
                    Join Discord
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="#"
                    onClick={() => trackSocial({ platform: 'facebook' })}
                    className="inline-flex items-center gap-2 border border-forge-700 hover:border-forge-500 text-forge-300 text-xs font-medium px-4 py-2 rounded-lg transition-colors hover:text-forge-100"
                  >
                    Follow on Facebook
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="#"
                    onClick={() => trackSocial({ platform: 'newsletter' })}
                    className="inline-flex items-center gap-2 border border-forge-700 hover:border-forge-500 text-forge-300 text-xs font-medium px-4 py-2 rounded-lg transition-colors hover:text-forge-100"
                  >
                    <Mail className="w-3 h-3" />
                    Newsletter
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="md:col-span-2 space-y-3">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="group bg-forge-900/30 border border-forge-800/40 hover:border-forge-700/60 rounded-xl p-4 text-forge-400 leading-relaxed transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 text-ember-500 fill-ember-500" />
                    ))}
                  </div>
                  <p className="italic text-xs mb-2">{review.text}</p>
                  <p className="text-[10px] text-forge-600 font-mono tracking-wide">{review.author}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
