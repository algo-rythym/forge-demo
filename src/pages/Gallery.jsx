import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
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
  Store: 'bg-ember-600/80',
  Events: 'bg-forge-700/80',
  Miniatures: 'bg-forge-800/80',
  Community: 'bg-ember-700/80',
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

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            number="Gallery"
            title="Moments from the Forge."
            subtitle="Photos from events, painted armies, store life, and community gatherings."
          />

          <div className="flex flex-wrap gap-2 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setLightboxIndex(null) }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-ember-500 text-forge-950 shadow-[0_0_16px_rgba(212,168,83,0.15)]'
                    : 'bg-white/5 text-forge-500 border border-forge-800/50 hover:border-forge-700 hover:text-forge-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((photo, i) => (
              <ScrollReveal key={photo.id} delay={i * 0.05}>
                <div
                  className="break-inside-avoid bg-forge-900/30 border border-forge-800/40 rounded-2xl overflow-hidden group cursor-pointer card-hover hover:border-ember-500/20"
                  onClick={() => openLightbox(i)}
                >
                  <div
                    className={`relative ${aspectClasses[photo.aspect]} overflow-hidden`}
                  >
                    {photo.src ? (
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover image-zoom saturate-[0.8] group-hover:saturate-100"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-forge-800 flex items-center justify-center">
                        <span className="text-forge-500 text-sm">{photo.title}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-forge-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3">
                      <span className={`text-[10px] font-mono tracking-[0.15em] uppercase text-white/90 px-2.5 py-1 rounded-full ${categoryColors[photo.category] || 'bg-forge-800/80'}`}>
                        {photo.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-forge-200 text-xs group-hover:text-ember-400 transition-colors">{photo.title}</h3>
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
