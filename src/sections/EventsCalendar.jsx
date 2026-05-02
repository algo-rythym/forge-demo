import { useState } from 'react'
import { Clock, Trophy, Palette, Dice5 } from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { events } from '../data/content'
import { rsvpToEvent } from '../lib/mockApi'
import { useClickTracker } from '../hooks/useAnalytics'
import { useToast } from '../context/ToastContext'

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
              <div className="bg-white border border-forge-200 rounded-xl p-6 hover:border-ember-500/30 transition-colors group flex flex-col h-full">
                <div className="text-ember-600 text-xs font-bold tracking-widest uppercase mb-3">
                  {evt.day}
                </div>
                <div className="font-medium text-forge-900 mb-2 text-lg">{evt.name}</div>
                <div className="text-sm text-forge-500 flex items-center gap-1.5 mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  {evt.time}
                </div>
                <p className="text-xs text-forge-500 leading-relaxed mb-4 flex-1">{evt.detail}</p>
                <button
                  onClick={() => handleRsvp(evt)}
                  disabled={rsvpStatus[evt.day] === 'loading'}
                  className={`w-full text-xs font-medium px-3 py-2 rounded transition-colors ${
                    rsvpStatus[evt.day] === 'success'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-forge-100 hover:bg-forge-200 text-forge-800'
                  }`}
                >
                  {rsvpStatus[evt.day] === 'loading'
                    ? 'RSVPing...'
                    : rsvpStatus[evt.day] === 'success'
                    ? 'RSVP Confirmed'
                    : 'RSVP'}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-sm text-forge-300">
            <Trophy className="w-4 h-4 text-ember-500" />
            <span>Monthly tournaments with prize support</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-forge-300">
            <Palette className="w-4 h-4 text-ember-500" />
            <span>Free paint-n-take demos on Sundays</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-forge-300">
            <Dice5 className="w-4 h-4 text-ember-500" />
            <span>Learn-to-play events every Thursday</span>
          </div>
        </div>
      </div>
    </section>
  )
}
