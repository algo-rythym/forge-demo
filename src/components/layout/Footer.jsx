import { Link } from 'react-router-dom'
import { Flame, MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import { storeInfo } from '../../data/content'

const quickLinks = [
  { label: 'Games', to: '/#games' },
  { label: 'Events', to: '/#events' },
  { label: 'Community', to: '/#community' },
  { label: 'Visit', to: '/#visit' },
]

const pageLinks = [
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
  { label: 'Analytics', to: '/analytics' },
]

const socialLinks = [
  { label: 'Discord', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
]

export function Footer() {
  return (
    <footer className="relative bg-forge-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-ember-500/15 rounded-lg flex items-center justify-center">
                <Flame className="w-4 h-4 text-ember-500" />
              </div>
              <span className="font-serif text-lg font-semibold tracking-widest text-forge-50 uppercase">
                The Forge
              </span>
            </Link>
            <p className="text-sm text-forge-500 leading-relaxed mb-6 max-w-xs">
              Houston's epicenter for tabletop wargaming, RPGs, trading cards, and board games.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-[10px] font-mono tracking-widest uppercase text-forge-600 hover:text-ember-400 transition-colors inline-flex items-center gap-1"
                >
                  {s.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-forge-400 mb-5">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-forge-500 hover:text-ember-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-forge-500 hover:text-ember-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-forge-400 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-forge-500">
                <MapPin className="w-4 h-4 text-ember-500/70 shrink-0 mt-0.5" />
                <span>{storeInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-forge-500">
                <Phone className="w-4 h-4 text-ember-500/70 shrink-0" />
                <span>{storeInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-forge-500">
                <Mail className="w-4 h-4 text-ember-500/70 shrink-0" />
                <span>{storeInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-forge-400 mb-5">Hours</h4>
            <ul className="space-y-2.5 text-sm text-forge-500">
              <li className="flex justify-between items-center py-1 border-b border-forge-800/30">
                <span>Mon – Thu</span>
                <span className="text-forge-300 font-mono text-xs">{storeInfo.hours.monThu}</span>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-forge-800/30">
                <span>Friday</span>
                <span className="text-forge-300 font-mono text-xs">{storeInfo.hours.fri}</span>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-forge-800/30">
                <span>Saturday</span>
                <span className="text-forge-300 font-mono text-xs">{storeInfo.hours.sat}</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span>Sunday</span>
                <span className="text-forge-300 font-mono text-xs">{storeInfo.hours.sun}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forge-800/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-forge-600 font-mono tracking-wide">
            © 2026 The Forge Hobbies & Games
          </div>
          <div className="flex items-center gap-6 text-xs text-forge-600">
            <a href="#" className="hover:text-forge-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-forge-400 transition-colors">Terms</a>
            <Link to="/contact" className="hover:text-forge-400 transition-colors">Contact</Link>
            <Link to="/analytics" className="hover:text-ember-400 transition-colors font-mono tracking-wider uppercase">Stats</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
