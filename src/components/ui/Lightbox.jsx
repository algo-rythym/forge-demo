import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export function Lightbox({ photos, currentIndex, onClose, onNavigate }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate(-1)
      if (e.key === 'ArrowRight') onNavigate(1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNavigate])

  const photo = photos[currentIndex]
  if (!photo) return null

  return (
    <div
      className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onNavigate(-1) }}
        disabled={currentIndex === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white disabled:opacity-20 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`w-full overflow-hidden rounded-xl ${
            photo.aspect === 'portrait'
              ? 'aspect-[3/4] max-h-[70vh]'
              : photo.aspect === 'square'
              ? 'aspect-square max-h-[60vh]'
              : 'aspect-video'
          }`}
        >
          {photo.src ? (
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-contain bg-forge-950"
            />
          ) : (
            <div className="w-full h-full bg-forge-800 flex items-center justify-center">
              <span className="text-forge-500 text-lg">{photo.title}</span>
            </div>
          )}
        </div>
        <div className="mt-4 text-center">
          <p className="text-white font-medium text-lg">{photo.title}</p>
          <p className="text-white/50 text-sm mt-1">
            {currentIndex + 1} / {photos.length} · {photo.category}
          </p>
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNavigate(1) }}
        disabled={currentIndex === photos.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white disabled:opacity-20 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  )
}
