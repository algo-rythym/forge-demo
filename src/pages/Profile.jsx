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

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-ember-500/20 to-ember-600/10 rounded-full flex items-center justify-center text-ember-500 border border-ember-500/20">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="font-serif text-2xl font-semibold text-forge-100">{user.name}</h1>
                  <p className="text-xs text-forge-500 font-mono tracking-wide">@{user.handle} · {user.email}</p>
                </div>
              </div>
              <button
                onClick={() => { logout(); navigate('/') }}
                className="group inline-flex items-center gap-2 bg-forge-800/60 hover:bg-forge-800 text-forge-300 text-xs font-mono font-medium px-4 py-2 rounded-lg transition-colors border border-forge-700/50 hover:border-forge-600 tracking-wider uppercase"
              >
                <LogOut className="w-3.5 h-3.5" />
                Exit
              </button>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            <ScrollReveal>
              <div className="bg-forge-900/40 border border-forge-800/50 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-ember-500/40 to-transparent" />
                <div className="flex items-center gap-2 mb-5">
                  <Calendar className="w-4 h-4 text-ember-500/70" />
                  <h2 className="font-serif text-base font-semibold text-forge-100">My Events</h2>
                </div>
                {myEvents.length === 0 && (
                  <div className="text-xs text-forge-500">
                    No RSVPs yet.{' '}
                    <Link to="/" className="text-ember-500 hover:text-ember-400 font-medium transition-colors">
                      Browse events
                    </Link>
                  </div>
                )}
                <div className="space-y-2.5">
                  {myEvents.map((evt) => (
                    <div
                      key={evt.day}
                      className="flex items-center justify-between bg-forge-950/60 rounded-xl px-4 py-3 border border-forge-800/50"
                    >
                      <div>
                        <div className="text-sm font-medium text-forge-200">{evt.name}</div>
                        <div className="text-[10px] text-forge-600 font-mono tracking-wide mt-0.5">{evt.day} · {evt.time}</div>
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        RSVP'd
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-forge-900/40 border border-forge-800/50 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-ember-500/40 to-transparent" />
                <div className="flex items-center gap-2 mb-5">
                  <Heart className="w-4 h-4 text-ember-500/70" />
                  <h2 className="font-serif text-base font-semibold text-forge-100">Wishlist</h2>
                </div>
                {wishlist.length === 0 && (
                  <p className="text-xs text-forge-500">Your wishlist is empty. Save games and supplies you want to pick up later.</p>
                )}
                <ul className="space-y-2">
                  {wishlist.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between text-sm text-forge-300 bg-forge-950/60 rounded-xl px-4 py-2.5 border border-forge-800/50"
                    >
                      <span>{item}</span>
                      <button
                        onClick={() => {
                          toggleWishlist(item)
                          setWishlist(getWishlist())
                        }}
                        className="text-[10px] text-red-400 hover:text-red-300 font-medium transition-colors font-mono tracking-wide uppercase"
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
