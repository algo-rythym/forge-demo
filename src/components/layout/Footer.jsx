import { Link } from 'react-router-dom'
import { Flame, MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import { storeInfo } from '../../data/content'

const quickLinks = [
  { label: 'Games', href: '/#games' },
  { label: 'Events', href: '/#events' },
  { label: 'Community', href: '/#community' },
  { label: 'Visit', href: '/#visit' },
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
    <footer className="border-t border-forge-800/50 bg-forge-950">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-ember-500 rounded-sm flex items-center justify-center">
                <Flame className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif text-lg font-semibold tracking-wide text-forge-50">
                THE FORGE
              </span>
            </Link>
            <p className="text-sm text-forge-500 leading-relaxed mb-4">
              Houston's epicenter for tabletop wargaming, RPGs, trading cards, and board games.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs text-forge-500 hover:text-ember-400 transition-colors inline-flex items-center gap-1"
                >
                  {s.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-forge-200 mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-forge-500 hover:text-ember-400 transition-colors"
                  >
                    {link.label}
                  </a>
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
            <h4 className="text-sm font-semibold text-forge-200 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-forge-500">
                <MapPin className="w-4 h-4 text-ember-500 shrink-0 mt-0.5" />
                <span>{storeInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-forge-500">
                <Phone className="w-4 h-4 text-ember-500 shrink-0" />
                <span>{storeInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-forge-500">
                <Mail className="w-4 h-4 text-ember-500 shrink-0" />
                <span>{storeInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-forge-200 mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-forge-500">
              <li className="flex justify-between">
                <span>Mon – Thu</span>
                <span className="text-forge-400">{storeInfo.hours.monThu}</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span className="text-forge-400">{storeInfo.hours.fri}</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-forge-400">{storeInfo.hours.sat}</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-forge-400">{storeInfo.hours.sun}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forge-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-forge-600">
            © 2026 The Forge Hobbies & Games. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-forge-600">
            <a href="#" className="hover:text-forge-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-forge-400 transition-colors">Terms</a>
            <Link to="/contact" className="hover:text-forge-400 transition-colors">Contact</Link>
            <Link to="/analytics" className="hover:text-ember-400 transition-colors font-mono">Stats</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
