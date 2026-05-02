import { MapPin, Clock, Phone, Users } from 'lucide-react'
import { storeInfo } from '../data/content'

export function TrustBand() {
  return (
    <section className="border-b border-forge-800/50 bg-forge-900/20">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 text-sm text-forge-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-ember-500" />
            <span>{storeInfo.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-ember-500" />
            <span>{storeInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-ember-500" />
            <span>Open today: 12PM – 10PM</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-ember-500" />
            <span>400+ Reviews · 4.9 Stars</span>
          </div>
        </div>
      </div>
    </section>
  )
}
