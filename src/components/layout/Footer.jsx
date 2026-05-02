import { Link } from 'react-router-dom'
import { Flame } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-forge-800/50 bg-forge-950 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-ember-500 rounded-sm flex items-center justify-center">
            <Flame className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-serif text-sm font-semibold tracking-wide text-forge-400">
            THE FORGE
          </span>
        </div>
        <div className="text-sm text-forge-500">
          © 2026 The Forge Hobbies & Games. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm text-forge-500">
          <a href="#" className="hover:text-forge-300 transition-colors">Privacy</a>
          <a href="#" className="hover:text-forge-300 transition-colors">Terms</a>
          <Link to="/contact" className="hover:text-forge-300 transition-colors">Contact</Link>
          <Link to="/analytics" className="hover:text-ember-400 transition-colors font-mono">Stats</Link>
        </div>
      </div>
    </footer>
  )
}
