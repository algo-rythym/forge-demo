import { ArrowRight, Navigation } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useABTest } from '../hooks/useABTest'
import { useClickTracker } from '../hooks/useAnalytics'
import { useEffect } from 'react'
import { heroImage } from '../data/content'

export function Hero() {
  const { variant: headlineVariant, recordImpression } = useABTest('hero_headline', [
    'Where hobbyists forge legends.',
    "Houston's Tabletop HQ.",
  ])

  const { variant: ctaVariant, recordConversion: recordCtaConversion } = useABTest('hero_cta', [
    'primary',
    'outline',
  ])

  const trackHeroCta = useClickTracker('hero_explore')

  useEffect(() => {
    recordImpression()
  }, [recordImpression])

  const handleExplore = () => {
    trackHeroCta()
    recordCtaConversion()
  }

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="The Forge gaming space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-forge-950/50" />
      </div>

      {/* Animated ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,40,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,40,0.08) 0%, transparent 70%)',
            animationDelay: '2.5s',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-forge-950/50 backdrop-blur-md border border-forge-800/50 rounded-full px-4 py-1.5 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-ember-500 animate-pulse" />
            <span className="text-ember-400 text-[10px] font-mono tracking-[0.2em] uppercase">
              Houston's Gaming Haven
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-semibold text-forge-50 leading-[1.02] tracking-tight mb-8"
          >
            {headlineVariant === "Houston's Tabletop HQ." ? (
              <>
                Houston's
                <br />
                <span className="text-gradient">Tabletop HQ.</span>
              </>
            ) : (
              <>
                Where hobbyists
                <br />
                <span className="text-gradient">forge legends.</span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-forge-300 leading-relaxed max-w-lg mb-12"
          >
            Your epicenter for tabletop wargaming, RPGs, trading cards, and
            board games. Premium hobby supplies. Dedicated play space. A
            community built on shared passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              onClick={handleExplore}
              className={`group inline-flex items-center gap-2.5 font-medium px-7 py-3.5 rounded-xl transition-all duration-300 text-sm ${
                ctaVariant === 'primary'
                  ? 'bg-ember-500 hover:bg-ember-400 text-forge-950 shadow-[0_0_24px_rgba(245,158,40,0.15)] hover:shadow-[0_0_32px_rgba(245,158,40,0.25)]'
                  : 'border border-forge-600 hover:border-forge-400 text-forge-200 hover:text-forge-50'
              }`}
            >
              Explore the Arsenal
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://maps.google.com/?q=15121+Memorial+Dr+Houston+TX+77079"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 border border-ember-500/40 hover:border-ember-500 text-ember-400 hover:text-ember-300 font-medium px-7 py-3.5 rounded-xl transition-all duration-300 bg-forge-950/30 backdrop-blur-sm hover:bg-ember-500/10 text-sm"
              onClick={() => trackHeroCta({ target: 'get_directions' })}
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-forge-950 to-transparent pointer-events-none" />
    </section>
  )
}
