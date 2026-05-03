import { useState } from 'react'
import { Mail, Loader2, CheckCircle, ArrowRight, Zap } from 'lucide-react'
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
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,40,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="max-w-xl mx-auto text-center">
            <div className="w-12 h-12 bg-ember-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-5 h-5 text-ember-500" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-forge-50 mb-3">
              Stay in the loop.
            </h2>
            <p className="text-sm text-forge-500 mb-8">
              Get weekly event reminders, restock alerts, and exclusive member
              offers. No spam — just the games you care about.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 rounded-full bg-forge-950 border border-forge-800 text-forge-100 placeholder:text-forge-700 focus:outline-none focus:ring-2 focus:ring-ember-500/30 focus:border-ember-500/30 text-sm transition-all"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="group inline-flex items-center justify-center gap-2 bg-ember-500 hover:bg-ember-400 text-forge-950 font-medium px-6 py-3 rounded-full transition-all disabled:opacity-60 text-sm shadow-[0_0_20px_rgba(245,158,40,0.12)] hover:shadow-[0_0_28px_rgba(245,158,40,0.2)] whitespace-nowrap"
              >
                {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === 'success' ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Subscribed
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 mt-5">
              <Zap className="w-3 h-3 text-ember-500/60" />
              <p className="text-[10px] text-forge-600 font-mono tracking-wide">
                Join 1,200+ subscribers. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
