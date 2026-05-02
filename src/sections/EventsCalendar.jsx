import { useState } from 'react'
import { Clock, Trophy, Palette, Dice5, CheckCircle, Loader2, CalendarCheck } from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { events } from '../data/content'
import { rsvpToEvent } from '../lib/mockApi'
import { useClickTracker } from '../hooks/useAnalytics'
import { useToast } from '../context/ToastContext'

const eventPhotos = [
  '/photos/forge-03.png',
  '/photos/forge-04.png',
  '/photos/forge-05.png',
  '/photos/forge-07.png',
  '/photos/forge-08.png',
  '/photos/forge-11.png',
  '/photos/forge-12.png',
]

export function EventsCalendar() {
  const [rsvpStatus, setRsvpStatus] = useState({})
  const trackEventClick = useClickTracker('event_card')
  const { addToast } = useToast()

  const handleRsvp = async (evt) => {
    trackEventClick({ event: evt.name })
    setRsvpStatus((prev) => ({ ...prev, [evt.day]: 'loading' }))
    try {
      await rsvpToEvent(evt.name, 'guest@example.com')
      setRsvpStatus((prev) => ({ ...prev, [evt.day]: 'success' }))
      addToast(`RSVP confirmed for ${evt.name}!`, 'success')
    } catch {
      setRsvpStatus((prev) => ({ ...prev, [evt.day]: 'error' }))
      addToast('RSVP failed. Please try again.', 'error')
    }
  }

  return (
    <section id="events" className="py-24 md:py-32 px-6 bg-forge-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="02 — The Calendar"
          title="Epic events await."
          subtitle="Your schedule for adventure. Tournaments, learn-to-play sessions, paint days, and casual nights. Most events are free to attend."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((evt, i) => (
            <ScrollReveal key={evt.day} delay={i * 0.05}>
              <div className="group bg-forge-900/60 border border-forge-800 hover:border-ember-500/30 rounded-xl overflow-hidden transition-all duration-300 card-hover flex flex-col h-full">
                {/* Photo thumbnail */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={eventPhotos[i % eventPhotos.length]}
                    alt={evt.name}
                    className="w-full h-full object-cover image-zoom"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forge-950 via-forge-950/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-ember-400 text-xs font-bold tracking-widest uppercase bg-forge-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-forge-800">
                      {evt.day}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="font-medium text-forge-100 mb-2 text-lg">{evt.name}</div>
                  <div className="text-sm text-forge-500 flex items-center gap-1.5 mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    {evt.time}
                  </div>
                  <p className="text-xs text-forge-400 leading-relaxed mb-5 flex-1">{evt.detail}</p>
                  <button
                    onClick={() => handleRsvp(evt)}
                    disabled={rsvpStatus[evt.day] === 'loading'}
                    className={`w-full text-xs font-medium px-3 py-2.5 rounded-lg transition-all duration-300 ${
                      rsvpStatus[evt.day] === 'success'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-forge-800 hover:bg-forge-700 text-forge-200 border border-forge-700 hover:border-forge-600'
                    }`}
                  >
                    {rsvpStatus[evt.day] === 'loading' ? (
                      <span className="inline-flex items-center gap-1.5">
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        RSVPing...
                      </span>
                    ) : rsvpStatus[evt.day] === 'success' ? (
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Confirmed
                      </span>
                    ) : (
                      'RSVP'
                    )}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start">
          <div className="flex items-center gap-2 text-sm text-forge-300 bg-forge-900/40 border border-forge-800/50 rounded-full px-4 py-2">
            <Trophy className="w-4 h-4 text-ember-500" />
            <span>Monthly tournaments with prize support</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-forge-300 bg-forge-900/40 border border-forge-800/50 rounded-full px-4 py-2">
            <Palette className="w-4 h-4 text-ember-500" />
            <span>Free paint-n-take demos on Sundays</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-forge-300 bg-forge-900/40 border border-forge-800/50 rounded-full px-4 py-2">
            <Dice5 className="w-4 h-4 text-ember-500" />
            <span>Learn-to-play events every Thursday</span>
          </div>
        </div>
      </div>
    </section>
  )
}
