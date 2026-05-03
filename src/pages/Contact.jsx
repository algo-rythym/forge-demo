import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Clock, Phone, Mail, Loader2, Send } from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { storeInfo, visitImage } from '../data/content'
import { submitContactForm } from '../lib/mockApi'
import { usePageAnalytics, useScrollDepth, useClickTracker } from '../hooks/useAnalytics'
import { useToast } from '../context/ToastContext'

export function Contact() {
  usePageAnalytics()
  useScrollDepth()
  const trackContact = useClickTracker('contact_form')
  const { addToast } = useToast()

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Invalid email'
    if (!form.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    trackContact({ action: 'submit' })
    if (!validate()) return
    setStatus('loading')
    try {
      await submitContactForm(form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      addToast('Message sent! We will get back to you soon.', 'success')
    } catch {
      setStatus('error')
      addToast('Something went wrong. Please try again.', 'error')
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact — The Forge</title>
        <meta
          name="description"
          content="Get in touch with The Forge. Reserve a table, ask about events, or just say hello."
        />
      </Helmet>

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            number="Contact"
            title="Say hello."
            subtitle="Table reservations are free. Questions about events? Want to schedule a demo? Fill out the form or give us a call."
          />

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <form
                  onSubmit={handleSubmit}
                  className="bg-forge-900/30 border border-forge-800/50 rounded-2xl p-8 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-forge-400 mb-1.5">Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl bg-forge-950 border border-forge-800 text-forge-100 placeholder:text-forge-700 focus:outline-none focus:ring-2 focus:ring-ember-500/30 focus:border-ember-500/30 text-sm transition-all"
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-forge-400 mb-1.5">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl bg-forge-950 border border-forge-800 text-forge-100 placeholder:text-forge-700 focus:outline-none focus:ring-2 focus:ring-ember-500/30 focus:border-ember-500/30 text-sm transition-all"
                        placeholder="you@email.com"
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-forge-400 mb-1.5">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl bg-forge-950 border border-forge-800 text-forge-100 focus:outline-none focus:ring-2 focus:ring-ember-500/30 focus:border-ember-500/30 text-sm transition-all"
                    >
                      <option value="">Select a subject...</option>
                      <option>Table Reservation</option>
                      <option>Event Inquiry</option>
                      <option>Product Question</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-forge-400 mb-1.5">Message</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl bg-forge-950 border border-forge-800 text-forge-100 placeholder:text-forge-700 focus:outline-none focus:ring-2 focus:ring-ember-500/30 focus:border-ember-500/30 text-sm resize-none transition-all"
                      placeholder="How can we help?"
                    />
                    {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center gap-2 bg-ember-500 hover:bg-ember-400 text-forge-950 font-medium px-6 py-2.5 rounded-xl transition-all disabled:opacity-60 text-sm shadow-[0_0_20px_rgba(212,154,58,0.12)] hover:shadow-[0_0_28px_rgba(212,154,58,0.2)]"
                  >
                    {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                    <Send className="w-4 h-4" />
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'error' && (
                    <p className="text-xs text-red-400">Something went wrong. Please try again.</p>
                  )}
                </form>
              </ScrollReveal>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-2 space-y-5">
              <ScrollReveal direction="left">
                <div className="bg-forge-900/30 border border-forge-800/50 rounded-2xl overflow-hidden"
                >
                  <div className="relative h-44"
                  >
                    <img
                      src={visitImage}
                      alt="The Forge storefront"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forge-950 via-forge-950/40 to-transparent" />
                  </div>
                  <div className="p-6 space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-ember-500/10 rounded-lg flex items-center justify-center text-ember-500/80 shrink-0"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-forge-100">{storeInfo.name}</div>
                        <div className="text-xs text-forge-500">{storeInfo.address}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-ember-500/10 rounded-lg flex items-center justify-center text-ember-500/80 shrink-0"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-forge-100">Phone</div>
                        <div className="text-xs text-forge-500">{storeInfo.phone}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-ember-500/10 rounded-lg flex items-center justify-center text-ember-500/80 shrink-0"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-forge-100">Email</div>
                        <div className="text-xs text-forge-500">{storeInfo.email}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.1}>
                <div className="bg-forge-900/30 border border-forge-800/50 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <Clock className="w-4 h-4 text-ember-500/70" />
                    <div className="font-medium text-forge-100 text-sm">Store Hours</div>
                  </div>
                  <div className="text-xs text-forge-500 space-y-2">
                    <div className="flex justify-between items-center py-1 border-b border-forge-800/40">
                      <span>Mon – Thu</span>
                      <span className="text-forge-300 font-mono">{storeInfo.hours.monThu}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-forge-800/40">
                      <span>Friday</span>
                      <span className="text-forge-300 font-mono">{storeInfo.hours.fri}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-forge-800/40">
                      <span>Saturday</span>
                      <span className="text-forge-300 font-mono">{storeInfo.hours.sat}</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span>Sunday</span>
                      <span className="text-forge-300 font-mono">{storeInfo.hours.sun}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
