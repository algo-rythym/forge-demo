import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Flame, Menu, X, ArrowRight, User } from 'lucide-react'
import { cn } from '../../lib/utils'
import { useClickTracker } from '../../hooks/useAnalytics'
import { useAuth } from '../../hooks/useAuth'

const navLinks = [
  { label: 'Games', href: '/#games' },
  { label: 'Events', href: '/#events' },
  { label: 'Community', href: '/#community' },
  { label: 'Visit', href: '/#visit' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const trackNavClick = useClickTracker('navbar_link')
  const { user, logout } = useAuth()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = location.pathname === '/'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-forge-950/90 backdrop-blur-md border-b border-forge-800/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => trackNavClick({ target: 'logo' })}
        >
          <div className="w-8 h-8 bg-ember-500 rounded-sm flex items-center justify-center">
            <Flame className="w-4 h-4 text-white" />
          </div>
          <span className="font-serif text-lg font-semibold tracking-wide text-forge-50">
            THE FORGE
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-forge-300">
          {isHome ? (
            navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-forge-50 transition-colors"
                onClick={() => trackNavClick({ target: link.label })}
              >
                {link.label}
              </a>
            ))
          ) : (
            <>
              <Link
                to="/"
                className="hover:text-forge-50 transition-colors"
                onClick={() => trackNavClick({ target: 'home' })}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-forge-50 transition-colors"
                onClick={() => trackNavClick({ target: 'about' })}
              >
                About
              </Link>
              <Link
                to="/gallery"
                className="hover:text-forge-50 transition-colors"
                onClick={() => trackNavClick({ target: 'gallery' })}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="hover:text-forge-50 transition-colors"
                onClick={() => trackNavClick({ target: 'contact' })}
              >
                Contact
              </Link>
            </>
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/analytics"
            className="text-xs text-forge-400 hover:text-ember-400 transition-colors font-mono"
            onClick={() => trackNavClick({ target: 'analytics' })}
          >
            Stats
          </Link>
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                to="/profile"
                className="flex items-center gap-2 text-sm text-forge-200 hover:text-forge-50 transition-colors"
                onClick={() => trackNavClick({ target: 'profile' })}
              >
                <div className="w-7 h-7 bg-ember-500 rounded-full flex items-center justify-center text-white">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span className="hidden lg:inline">{user.name}</span>
              </Link>
              <button
                onClick={() => { logout(); trackNavClick({ target: 'logout' }) }}
                className="text-xs text-forge-400 hover:text-forge-200 transition-colors"
              >
                Log out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center gap-2 bg-ember-600 hover:bg-ember-500 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
              onClick={() => trackNavClick({ target: 'login' })}
            >
              Log In
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        <button
          className="md:hidden text-forge-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-forge-950 border-b border-forge-800/50 px-6 py-4">
          <div className="flex flex-col gap-3 text-sm font-medium text-forge-200">
            {isHome
              ? navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:text-forge-50 transition-colors"
                    onClick={() => {
                      setMenuOpen(false)
                      trackNavClick({ target: link.label })
                    }}
                  >
                    {link.label}
                  </a>
                ))
              : [
                  { label: 'Home', to: '/' },
                  { label: 'About', to: '/about' },
                  { label: 'Gallery', to: '/gallery' },
                  { label: 'Contact', to: '/contact' },
                  { label: 'Analytics', to: '/analytics' },
                  ...(user
                    ? [
                        { label: 'Profile', to: '/profile' },
                        { label: 'Log Out', action: () => logout() },
                      ]
                    : [{ label: 'Log In', to: '/login' }]),
                ].map((link) =>
                  link.action ? (
                    <button
                      key={link.label}
                      onClick={() => {
                        setMenuOpen(false)
                        link.action()
                        trackNavClick({ target: 'logout' })
                      }}
                      className="text-left hover:text-forge-50 transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="hover:text-forge-50 transition-colors"
                      onClick={() => {
                        setMenuOpen(false)
                        trackNavClick({ target: link.label })
                      }}
                    >
                      {link.label}
                    </Link>
                  )
                )}
          </div>
        </div>
      )}
    </header>
  )
}
