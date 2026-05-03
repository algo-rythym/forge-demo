import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react'
import { storeInfo } from '../data/content'
import { useClickTracker } from '../hooks/useAnalytics'

export function StoreInfoBand() {
  const trackClick = useClickTracker('store_info_band')

  return (
    <section className="relative z-10 -mt-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-forge-900/60 border border-forge-800/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/20">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-ember-500/10 rounded-xl flex items-center justify-center text-ember-500/80 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono tracking-[0.15em] uppercase text-forge-500 mb-1">Location</div>
                <div className="text-sm text-forge-200 font-medium mb-2">{storeInfo.address}</div>
                <a
                  href="https://maps.google.com/?q=15121+Memorial+Dr+Houston+TX+77079"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick({ target: 'directions_top' })}
                  className="group inline-flex items-center gap-1.5 text-xs font-medium text-ember-500 hover:text-ember-400 transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  Get Directions
                  <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-ember-500/10 rounded-xl flex items-center justify-center text-ember-500/80 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-mono tracking-[0.15em] uppercase text-forge-500 mb-1">Hours</div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-forge-400">Mon – Thu</span>
                    <span className="text-forge-200 font-mono">{storeInfo.hours.monThu}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-forge-400">Friday</span>
                    <span className="text-forge-200 font-mono">{storeInfo.hours.fri}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-forge-400">Saturday</span>
                    <span className="text-forge-200 font-mono">{storeInfo.hours.sat}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-forge-400">Sunday</span>
                    <span className="text-forge-200 font-mono">{storeInfo.hours.sun}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-ember-500/10 rounded-xl flex items-center justify-center text-ember-500/80 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono tracking-[0.15em] uppercase text-forge-500 mb-1">Contact</div>
                <div className="text-sm text-forge-200 font-medium mb-1">{storeInfo.phone}</div>
                <div className="text-xs text-forge-500 mb-2">{storeInfo.email}</div>
                <a
                  href={`tel:${storeInfo.phone.replace(/\D/g, '')}`}
                  onClick={() => trackClick({ target: 'call_top' })}
                  className="group inline-flex items-center gap-1.5 text-xs font-medium text-ember-500 hover:text-ember-400 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
