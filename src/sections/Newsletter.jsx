import { useState } from 'react'
import { Mail, Loader2, CheckCircle } from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { useClickTracker } from '../hooks/useAnalytics'
import { useToast } from '../context/ToastContext'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const trackClick = useClickTracker('newsletter')
  const { addToast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    trackClick({ action: 'subscribe' })
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      addToast('Please enter a valid email address.', 'error')
      return
    }
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
    addToast('Welcome to the Forge newsletter!', 'success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-forge-900 to-forge-800 border border-forge-700/50 p-10 md:p-14 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(249,115,22,0.5) 0%, transparent 70%)',
                }}
              />
            </div>

            <div className="relative max-w-xl mx-auto">
              <div className="w-12 h-12 bg-ember-500/20 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Mail className="w-6 h-6 text-ember-500" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-forge-50 mb-3">
                Stay in the loop.
              </h2>
              <p className="text-forge-300 mb-8">
                Get weekly event reminders, restock alerts, and exclusive member
                offers. No spam — just the games you care about.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-forge-950 border border-forge-700 text-forge-100 placeholder:text-forge-500 focus:outline-none focus:ring-2 focus:ring-ember-500/40 text-sm"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center gap-2 bg-ember-600 hover:bg-ember-500 text-white font-medium px-6 py-3 rounded-lg transition-colors disabled:opacity-60 text-sm"
                >
                  {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                  {status === 'success' ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Subscribed
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>

              <p className="text-xs text-forge-500 mt-4">
                Join 1,200+ subscribers. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
