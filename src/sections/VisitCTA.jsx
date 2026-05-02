import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { storeInfo } from '../data/content'
import { useClickTracker } from '../hooks/useAnalytics'

export function VisitCTA() {
  const trackVisitClick = useClickTracker('visit_cta')

  return (
    <section id="visit" className="py-24 md:py-32 px-6 bg-forge-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              number="04 — The Hearth"
              title="Come roll some dice."
            />
            <p className="text-forge-300 leading-relaxed mb-8">
              Two RPG rooms with adjustable lighting. Dedicated paint stations with
              built-in magnifiers. Tables loaded with modular terrain. A
              community paint rack stocked with the essentials. Whether you are
              building your first army or running your hundredth session, there is
              a seat at the table for you.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-forge-800/60 rounded-lg flex items-center justify-center text-ember-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-forge-50 font-medium">{storeInfo.name}</div>
                  <div className="text-sm text-forge-400">{storeInfo.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-forge-800/60 rounded-lg flex items-center justify-center text-ember-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-forge-50 font-medium">Store Hours</div>
                  <div className="text-sm text-forge-400">
                    Mon–Thu: {storeInfo.hours.monThu}
                    <br />
                    Fri: {storeInfo.hours.fri}
                    <br />
                    Sat: {storeInfo.hours.sat}
                    <br />
                    Sun: {storeInfo.hours.sun}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-forge-800/60 rounded-lg flex items-center justify-center text-ember-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-forge-50 font-medium">Phone</div>
                  <div className="text-sm text-forge-400">{storeInfo.phone}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-forge-800/60 rounded-lg flex items-center justify-center text-ember-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-forge-50 font-medium">Email</div>
                  <div className="text-sm text-forge-400">{storeInfo.email}</div>
                </div>
              </div>
            </div>
          </div>

          <ScrollReveal direction="left">
            <div className="bg-white border border-forge-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="font-serif text-2xl font-semibold text-forge-900 mb-2">
                  Ready to play?
                </div>
                <p className="text-sm text-forge-500">
                  Table reservations are free. Walk-ins always welcome.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <a
                  href="tel:+18325441786"
                  onClick={() => trackVisitClick({ target: 'call' })}
                  className="flex flex-col items-center gap-2 bg-forge-100 hover:bg-forge-200 border border-forge-200 hover:border-forge-300 rounded-lg p-4 transition-colors text-center"
                >
                  <Phone className="w-5 h-5 text-ember-600" />
                  <span className="text-xs font-medium text-forge-800">Call Now</span>
                </a>
                <a
                  href="https://maps.google.com/?q=14520+Memorial+Dr+Houston+TX+77079"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackVisitClick({ target: 'directions' })}
                  className="flex flex-col items-center gap-2 bg-forge-100 hover:bg-forge-200 border border-forge-200 hover:border-forge-300 rounded-lg p-4 transition-colors text-center"
                >
                  <MapPin className="w-5 h-5 text-ember-600" />
                  <span className="text-xs font-medium text-forge-800">Directions</span>
                </a>
              </div>

              <div className="space-y-3 text-sm text-forge-700">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-ember-500 shrink-0" />
                  <span>2 dedicated RPG rooms (seats 6–8 each)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-ember-500 shrink-0" />
                  <span>6×4 ft wargaming tables with terrain</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-ember-500 shrink-0" />
                  <span>Community paint station + tool library</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-ember-500 shrink-0" />
                  <span>Free Wi-Fi and charging stations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-ember-500 shrink-0" />
                  <span>Snacks and drinks available</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
