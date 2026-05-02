import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { LogOut, Calendar, Heart, User } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { getUserRsvps, getWishlist, toggleWishlist } from '../lib/authEngine'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { events } from '../data/content'
import { usePageAnalytics } from '../hooks/useAnalytics'

export function Profile() {
  usePageAnalytics()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [wishlist, setWishlist] = useState(() => getWishlist())

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  if (!user) return null

  const myEvents = events.filter((e) => getUserRsvps().includes(e.name))

  return (
    <>
      <Helmet>
        <title>Profile — {user.name} — The Forge</title>
      </Helmet>

      <div className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-ember-500 rounded-full flex items-center justify-center text-white">
                  <User className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="font-serif text-2xl font-semibold text-forge-50">{user.name}</h1>
                  <p className="text-sm text-forge-400">@{user.handle} · {user.email}</p>
                </div>
              </div>
              <button
                onClick={() => { logout(); navigate('/') }}
                className="inline-flex items-center gap-2 bg-forge-800 hover:bg-forge-700 text-forge-50 text-sm font-medium px-4 py-2 rounded transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Log Out
              </button>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-white border border-forge-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-ember-600" />
                  <h2 className="font-serif text-lg font-semibold text-forge-900">My Events</h2>
                </div>
                {myEvents.length === 0 && (
                  <div className="text-sm text-forge-500">
                    No RSVPs yet.{' '}
                    <Link to="/" className="text-ember-600 hover:text-ember-500 font-medium">
                      Browse events
                    </Link>
                  </div>
                )}
                <div className="space-y-3">
                  {myEvents.map((evt) => (
                    <div
                      key={evt.day}
                      className="flex items-center justify-between bg-forge-50 rounded-lg px-4 py-3"
                    >
                      <div>
                        <div className="text-sm font-medium text-forge-800">{evt.name}</div>
                        <div className="text-xs text-forge-500">{evt.day} · {evt.time}</div>
                      </div>
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                        RSVP’d
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-forge-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-ember-600" />
                  <h2 className="font-serif text-lg font-semibold text-forge-900">Wishlist</h2>
                </div>
                {wishlist.length === 0 && (
                  <p className="text-sm text-forge-500">Your wishlist is empty. Save games and supplies you want to pick up later.</p>
                )}
                <ul className="space-y-2">
                  {wishlist.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between text-sm text-forge-700 bg-forge-50 rounded-lg px-4 py-2"
                    >
                      <span>{item}</span>
                      <button
                        onClick={() => {
                          toggleWishlist(item)
                          setWishlist(getWishlist())
                        }}
                        className="text-xs text-red-600 hover:text-red-500 font-medium"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </>
  )
}
