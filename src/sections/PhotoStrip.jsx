import { ScrollReveal } from '../components/ui/ScrollReveal'

const stripPhotos = [
  { src: '/photos/forge-02.png', label: 'The Space' },
  { src: '/photos/forge-05.png', label: 'Battles' },
  { src: '/photos/forge-08.png', label: 'Community' },
  { src: '/photos/forge-11.png', label: 'Events' },
  { src: '/photos/forge-12.png', label: 'Armies' },
]

export function PhotoStrip() {
  return (
    <section className="py-16 overflow-hidden">
      <ScrollReveal>
        <div className="flex gap-4 px-6 max-w-6xl mx-auto">
          {stripPhotos.map((photo, i) => (
            <div
              key={i}
              className="relative flex-1 min-w-0 aspect-[4/3] rounded-xl overflow-hidden group border border-forge-800"
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover image-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-forge-950/30 group-hover:bg-forge-950/10 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-forge-950/80 to-transparent">
                <span className="text-xs font-medium text-forge-200">{photo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
