import { MapPin, Clock, Phone, Users } from 'lucide-react'
import { storeInfo } from '../data/content'

export function TrustBand() {
  return (
    <section className="border-b border-forge-800/30">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3 text-sm text-forge-500">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-3.5 h-3.5 text-ember-500/70" />
            <span className="font-mono text-xs tracking-wide">{storeInfo.address}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-3.5 h-3.5 text-ember-500/70" />
            <span className="font-mono text-xs tracking-wide">{storeInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="w-3.5 h-3.5 text-ember-500/70" />
            <span className="font-mono text-xs tracking-wide">Open today: 12PM – 10PM</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Users className="w-3.5 h-3.5 text-ember-500/70" />
            <span className="font-mono text-xs tracking-wide">400+ Reviews · 4.9 Stars</span>
          </div>
        </div>
      </div>
    </section>
  )
}
