import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Flame, Menu, X, ArrowRight, User } from 'lucide-react'
import { cn } from '../../lib/utils'
import { useClickTracker } from '../../hooks/useAnalytics'
import { useAuth } from '../../hooks/useAuth'

const homeLinks = [
  { label: 'About', to: '/about' },
  { label: 'Games', to: '/#games' },
  { label: 'Events', to: '/#events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Community', to: '/#community' },
  { label: 'Visit', to: '/#visit' },
]

const pageLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const trackNavClick = useClickTracker('navbar_link')
  const { user, logout } = useAuth()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setMenuOpen(false), 0)
    return () => clearTimeout(t)
  }, [location])

  const isHome = location.pathname === '/'
  const activeLinks = isHome ? homeLinks : pageLinks

  const isActive = (to) => {
    if (to.startsWith('/#')) return isHome && location.hash === to.slice(1)
    return location.pathname === to
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-forge-950/80 backdrop-blur-xl border-b border-forge-800/40 shadow-2xl shadow-black/30'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => trackNavClick({ target: 'logo' })}
        >
          <div className="w-9 h-9 bg-ember-500/15 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-ember-500/25 group-hover:shadow-[0_0_20px_rgba(212,154,58,0.25)]">
            <Flame className="w-4 h-4 text-ember-500" />
          </div>
          <span className="font-serif text-lg font-semibold tracking-widest text-forge-50 uppercase">
            The Forge
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-medium tracking-widest uppercase text-forge-400">
          {activeLinks.map((link) =>
            link.to.startsWith('/#') ? (
              <Link
                key={link.label}
                to={link.to}
                className={cn(
                  'relative transition-colors py-1 group',
                  isActive(link.to)
                    ? 'text-forge-50'
                    : 'hover:text-ember-400'
                )}
                onClick={() => trackNavClick({ target: link.label })}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-0.5 left-0 h-px bg-ember-500 transition-all duration-300',
                    isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={cn(
                  'relative transition-colors py-1 group',
                  isActive(link.to)
                    ? 'text-forge-50'
                    : 'hover:text-ember-400'
                )}
                onClick={() => trackNavClick({ target: link.label })}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-0.5 left-0 h-px bg-ember-500 transition-all duration-300',
                    isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <Link
            to="/analytics"
            className={cn(
              'text-xs font-mono tracking-wider hover:text-ember-400 transition-colors uppercase',
              location.pathname === '/analytics' ? 'text-ember-400' : 'text-forge-500'
            )}
            onClick={() => trackNavClick({ target: 'analytics' })}
          >
            Stats
          </Link>
          {user ? (
            <div className="flex items-center gap-4">
              <Link
                to="/profile"
                className={cn(
                  'flex items-center gap-2.5 text-sm transition-colors',
                  location.pathname === '/profile'
                    ? 'text-forge-50'
                    : 'text-forge-200 hover:text-forge-50'
                )}
                onClick={() => trackNavClick({ target: 'profile' })}
              >
                <div className="w-8 h-8 bg-ember-500/15 rounded-full flex items-center justify-center text-ember-500">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span className="hidden lg:inline font-medium">{user.name}</span>
              </Link>
              <button
                onClick={() => { logout(); trackNavClick({ target: 'logout' }) }}
                className="text-xs font-mono tracking-wider text-forge-500 hover:text-forge-200 transition-colors uppercase"
              >
                Exit
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="group inline-flex items-center gap-2 bg-ember-500 hover:bg-ember-400 text-forge-950 text-xs font-mono font-semibold tracking-wider uppercase px-5 py-2.5 rounded-lg transition-all shadow-[0_0_20px_rgba(212,154,58,0.15)] hover:shadow-[0_0_28px_rgba(212,154,58,0.25)]"
              onClick={() => trackNavClick({ target: 'login' })}
            >
              Enter
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>

        <button
          className="md:hidden text-forge-300 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-forge-950/95 backdrop-blur-xl border-b border-forge-800/50 px-6 py-6">
          <div className="flex flex-col gap-1 text-sm font-medium text-forge-300">
            {activeLinks.map((link) =>
              link.to.startsWith('/#') ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className={cn(
                    'py-2.5 transition-colors border-b border-forge-800/30 last:border-0 font-mono text-xs tracking-widest uppercase',
                    isActive(link.to) ? 'text-ember-400' : 'hover:text-forge-50'
                  )}
                  onClick={() => {
                    setMenuOpen(false)
                    trackNavClick({ target: link.label })
                  }}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className={cn(
                    'py-2.5 transition-colors border-b border-forge-800/30 last:border-0 font-mono text-xs tracking-widest uppercase',
                    isActive(link.to) ? 'text-ember-400' : 'hover:text-forge-50'
                  )}
                  onClick={() => {
                    setMenuOpen(false)
                    trackNavClick({ target: link.label })
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
            {isHome && (
              <>
                <Link
                  to="/contact"
                  className={cn(
                    'py-2.5 transition-colors border-b border-forge-800/30 font-mono text-xs tracking-widest uppercase',
                    location.pathname === '/contact' ? 'text-ember-400' : 'hover:text-forge-50'
                  )}
                  onClick={() => {
                    setMenuOpen(false)
                    trackNavClick({ target: 'contact' })
                  }}
                >
                  Contact
                </Link>
                <Link
                  to="/analytics"
                  className={cn(
                    'py-2.5 transition-colors border-b border-forge-800/30 font-mono text-xs tracking-widest uppercase',
                    location.pathname === '/analytics' ? 'text-ember-400' : 'hover:text-forge-50'
                  )}
                  onClick={() => {
                    setMenuOpen(false)
                    trackNavClick({ target: 'analytics' })
                  }}
                >
                  Stats
                </Link>
              </>
            )}
            {user ? (
              <>
                <Link
                  to="/profile"
                  className={cn(
                    'py-2.5 transition-colors border-b border-forge-800/30 font-mono text-xs tracking-widest uppercase',
                    location.pathname === '/profile' ? 'text-ember-400' : 'hover:text-forge-50'
                  )}
                  onClick={() => {
                    setMenuOpen(false)
                    trackNavClick({ target: 'profile' })
                  }}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    setMenuOpen(false)
                    logout()
                    trackNavClick({ target: 'logout' })
                  }}
                  className="text-left py-2.5 hover:text-forge-50 transition-colors font-mono text-xs tracking-widest uppercase"
                >
                  Exit
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className={cn(
                  'py-2.5 transition-colors font-mono text-xs tracking-widest uppercase',
                  location.pathname === '/login' ? 'text-ember-400' : 'hover:text-forge-50'
                )}
                onClick={() => {
                  setMenuOpen(false)
                  trackNavClick({ target: 'login' })
                }}
              >
                Enter
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
