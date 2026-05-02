import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Clock, Phone, Mail, Loader2 } from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { storeInfo } from '../data/content'
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

      <div className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            number="Contact"
            title="Say hello."
            subtitle="Table reservations are free. Questions about events? Want to schedule a demo? Fill out the form or give us a call."
            light
          />

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-forge-200 rounded-xl p-8 space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-forge-800 mb-1">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full px-3 py-2 rounded-lg border border-forge-200 text-forge-900 focus:outline-none focus:ring-2 focus:ring-ember-500/40 text-sm"
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-forge-800 mb-1">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full px-3 py-2 rounded-lg border border-forge-200 text-forge-900 focus:outline-none focus:ring-2 focus:ring-ember-500/40 text-sm"
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-forge-800 mb-1">Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    className="w-full px-3 py-2 rounded-lg border border-forge-200 text-forge-900 focus:outline-none focus:ring-2 focus:ring-ember-500/40 text-sm"
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
                  <label className="block text-sm font-medium text-forge-800 mb-1">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-3 py-2 rounded-lg border border-forge-200 text-forge-900 focus:outline-none focus:ring-2 focus:ring-ember-500/40 text-sm resize-none"
                  />
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center gap-2 bg-ember-600 hover:bg-ember-500 text-white font-medium px-6 py-2.5 rounded transition-colors disabled:opacity-60"
                >
                  {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'error' && (
                  <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
                )}
              </form>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="bg-white border border-forge-200 rounded-xl p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-forge-100 rounded-lg flex items-center justify-center text-ember-600 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-forge-900">Address</div>
                      <div className="text-sm text-forge-600">{storeInfo.address}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-forge-100 rounded-lg flex items-center justify-center text-ember-600 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-forge-900">Phone</div>
                      <div className="text-sm text-forge-600">{storeInfo.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-forge-100 rounded-lg flex items-center justify-center text-ember-600 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-forge-900">Email</div>
                      <div className="text-sm text-forge-600">{storeInfo.email}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-forge-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-ember-600" />
                    <div className="font-medium text-forge-900">Store Hours</div>
                  </div>
                  <div className="text-sm text-forge-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Mon – Thu</span>
                      <span>{storeInfo.hours.monThu}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday</span>
                      <span>{storeInfo.hours.fri}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>{storeInfo.hours.sat}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>{storeInfo.hours.sun}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-forge-800 rounded-xl p-6 text-center">
                  <p className="text-sm text-forge-300 mb-2">Map area placeholder</p>
                  <div className="h-40 bg-forge-900 rounded-lg flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-forge-600" />
                  </div>
                  <p className="text-xs text-forge-500 mt-2">Google Maps embed will go here</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </>
  )
}
