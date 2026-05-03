import { MapPin, Clock, Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { storeInfo } from '../data/content'
import { useClickTracker } from '../hooks/useAnalytics'

const amenities = [
  '2 dedicated RPG rooms (seats 6–8 each)',
  '6×4 ft wargaming tables with terrain',
  'Community paint station + tool library',
  'Free Wi-Fi and charging stations',
  'Snacks and drinks available',
]

export function VisitCTA() {
  const trackVisitClick = useClickTracker('visit_cta')

  return (
    <section id="visit" className="py-24 md:py-32 px-6 bg-forge-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              number="04"
              title="Come throw some dice."
            />
            <p className="text-forge-400 leading-relaxed mb-8 text-base md:text-lg">
              Two RPG rooms with adjustable lighting. Dedicated paint stations with
              built-in magnifiers. Tables loaded with modular terrain. A
              community paint rack stocked with the essentials. Whether you are
              building your first army or running your hundredth session, there is
              a seat at the table for you.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { Icon: MapPin, label: storeInfo.name, value: storeInfo.address },
                { Icon: Clock, label: 'Store Hours', value: `${storeInfo.hours.monThu} · ${storeInfo.hours.fri} Fri · ${storeInfo.hours.sat} Sat · ${storeInfo.hours.sun} Sun` },
                { Icon: Phone, label: 'Phone', value: storeInfo.phone },
                { Icon: Mail, label: 'Email', value: storeInfo.email },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-ember-500/10 rounded-lg flex items-center justify-center text-ember-500/80 shrink-0">
                    <item.Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-forge-100 font-medium text-xs">{item.label}</div>
                    <div className="text-xs text-forge-500 mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              onClick={() => trackVisitClick({ target: 'contact_page' })}
              className="group inline-flex items-center gap-2 bg-ember-500 hover:bg-ember-400 text-forge-950 font-medium px-6 py-3 rounded-xl transition-all text-sm shadow-[0_0_20px_rgba(212,154,58,0.12)] hover:shadow-[0_0_28px_rgba(212,154,58,0.2)]"
            >
              Get Directions
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-ember-500/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-forge-900/40 border border-forge-800/50 rounded-2xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/photos/forge-10.png"
                    alt="The Forge interior"
                    className="w-full h-full object-cover image-zoom"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forge-950 via-forge-950/30 to-transparent" />
                </div>
                <div className="p-7">
                  <div className="text-center mb-5">
                    <div className="font-serif text-xl font-semibold text-forge-100 mb-1">
                      Ready to play?
                    </div>
                    <p className="text-xs text-forge-500">
                      Table reservations are free. Walk-ins always welcome.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 mb-5">
                    <a
                      href={`tel:${storeInfo.phone.replace(/\D/g, '')}`}
                      onClick={() => trackVisitClick({ target: 'call' })}
                      className="flex flex-col items-center gap-1.5 bg-forge-950/60 hover:bg-forge-900 border border-forge-800/50 hover:border-forge-700 rounded-xl p-3.5 transition-all text-center group"
                    >
                      <Phone className="w-4 h-4 text-ember-500/70 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-mono tracking-wide text-forge-400">Call Now</span>
                    </a>
                    <a
                      href="https://maps.google.com/?q=14520+Memorial+Dr+Houston+TX+77079"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackVisitClick({ target: 'directions' })}
                      className="flex flex-col items-center gap-1.5 bg-forge-950/60 hover:bg-forge-900 border border-forge-800/50 hover:border-forge-700 rounded-xl p-3.5 transition-all text-center group"
                    >
                      <MapPin className="w-4 h-4 text-ember-500/70 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-mono tracking-wide text-forge-400">Directions</span>
                    </a>
                  </div>

                  <div className="space-y-2.5">
                    {amenities.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-xs text-forge-400">
                        <div className="w-4 h-4 rounded-full bg-ember-500/10 flex items-center justify-center shrink-0">
                          <CheckCircle className="w-2.5 h-2.5 text-ember-500/70" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
