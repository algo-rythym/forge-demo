import { useState } from 'react'
import { ChevronRight, Search, Heart } from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { categories } from '../data/content'
import { useClickTracker } from '../hooks/useAnalytics'
import { useToast } from '../context/ToastContext'
import { toggleWishlist, getWishlist } from '../lib/authEngine'

export function GamesGrid() {
  const [filter, setFilter] = useState('')
  const [wishlist, setWishlist] = useState(() => getWishlist())
  const trackGameClick = useClickTracker('game_card')
  const { addToast } = useToast()

  const handleWishlist = (itemName) => {
    const isAdding = !wishlist.includes(itemName)
    toggleWishlist(itemName)
    setWishlist(getWishlist())
    addToast(
      isAdding ? `Added "${itemName}" to wishlist` : `Removed "${itemName}" from wishlist`,
      isAdding ? 'success' : 'info'
    )
  }

  const filtered = categories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (it) =>
          it.name.toLowerCase().includes(filter.toLowerCase()) ||
          it.detail.toLowerCase().includes(filter.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0)

  return (
    <section id="games" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="01 — The Arsenal"
          title="Every game. Every system."
          subtitle="We do not just stock shelves — we curate experiences. Each category below represents a dedicated play space, a knowledgeable staff member, and a community of regulars ready to teach, trade, and throw dice."
        />

        <div className="mb-10">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forge-500" />
            <input
              type="text"
              placeholder="Search games..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-forge-200 text-forge-900 placeholder:text-forge-400 focus:outline-none focus:ring-2 focus:ring-ember-500/40 text-sm"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cat) => (
            <ScrollReveal key={cat.id}>
              <div className="group relative bg-white border border-forge-200 hover:border-ember-500/40 rounded-xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-ember-900/10">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-forge-100 rounded-lg flex items-center justify-center text-ember-600">
                      <cat.Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-forge-900">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-ember-600 font-medium tracking-wide uppercase">
                        {cat.tagline}
                      </p>
                    </div>
                  </div>
                  <span className="text-forge-300 text-xs font-mono">{cat.id}</span>
                </div>
                <p className="text-sm text-forge-600 leading-relaxed mb-5">
                  {cat.description}
                </p>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-start gap-2 text-sm text-forge-700 group/item"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-ember-500 mt-0.5 shrink-0" />
                      <div className="flex-1" onClick={() => trackGameClick({ game: item.name, category: cat.title })}>
                        <span className="font-medium text-forge-800">{item.name}</span>
                        <span className="text-forge-500 ml-1.5">— {item.detail}</span>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleWishlist(item.name) }}
                        className={`shrink-0 transition-colors ${
                          wishlist.includes(item.name)
                            ? 'text-ember-500'
                            : 'text-forge-300 hover:text-ember-500 opacity-0 group-hover/item:opacity-100'
                        }`}
                        aria-label={wishlist.includes(item.name) ? 'Remove from wishlist' : 'Add to wishlist'}
                      >
                        <Heart className={`w-3.5 h-3.5 ${wishlist.includes(item.name) ? 'fill-current' : ''}`} />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
