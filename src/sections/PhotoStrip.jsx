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
    <section className="py-20 overflow-hidden">
      <ScrollReveal>
        <div className="flex gap-4 px-6 max-w-6xl mx-auto">
          {stripPhotos.map((photo, i) => (
            <div
              key={i}
              className="relative flex-1 min-w-0 aspect-[4/3] rounded-2xl overflow-hidden group border border-forge-800/40"
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover image-zoom saturate-[0.7] group-hover:saturate-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-forge-950/40 group-hover:bg-forge-950/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-forge-950/80 to-transparent">
                <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-forge-200">{photo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
