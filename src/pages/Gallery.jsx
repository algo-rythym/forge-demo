import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Image } from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { Lightbox } from '../components/ui/Lightbox'
import { galleryCategories, galleryPhotos } from '../data/content'
import { usePageAnalytics, useScrollDepth } from '../hooks/useAnalytics'

const aspectClasses = {
  landscape: 'aspect-video',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
}

const categoryColors = {
  Store: 'bg-forge-800',
  Events: 'bg-ember-900',
  Miniatures: 'bg-forge-900',
  Community: 'bg-forge-800',
}

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  usePageAnalytics()
  useScrollDepth()

  const filtered =
    activeCategory === 'All'
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeCategory)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const navigateLightbox = (dir) => {
    setLightboxIndex((prev) => {
      if (prev === null) return null
      const next = prev + dir
      if (next < 0 || next >= filtered.length) return prev
      return next
    })
  }

  return (
    <>
      <Helmet>
        <title>Gallery — The Forge</title>
        <meta
          name="description"
          content="Explore photos of The Forge store, events, painted miniatures, and community gatherings."
        />
      </Helmet>

      <div className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            number="Gallery"
            title="Moments from the Forge."
            subtitle="Photos from events, painted armies, store life, and community gatherings. Your images will replace these placeholders."
            light
          />

          <div className="flex flex-wrap gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setLightboxIndex(null) }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-ember-600 text-white'
                    : 'bg-white text-forge-700 border border-forge-200 hover:border-ember-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {filtered.map((photo, i) => (
              <ScrollReveal key={photo.id} delay={i * 0.05}>
                <div
                  className="break-inside-avoid bg-white border border-forge-200 rounded-xl overflow-hidden group hover:border-ember-500/30 transition-colors cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <div
                    className={`relative ${aspectClasses[photo.aspect]} ${
                      categoryColors[photo.category] || 'bg-forge-900'
                    } flex items-center justify-center`}
                  >
                    <Image className="w-10 h-10 text-forge-400/40" />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 bg-black/30 px-2 py-1 rounded">
                        {photo.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-forge-900 text-sm">{photo.title}</h3>
                    <p className="text-xs text-forge-500 mt-1">Placeholder — photo coming soon</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </>
  )
}
