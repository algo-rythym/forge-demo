import { ArrowRight, Calendar } from 'lucide-react'
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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="The Forge gaming space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-forge-950/40" />
      </div>

      {/* Animated ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(217,119,6,0.1) 0%, transparent 70%)',
            animationDelay: '2s',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-forge-950/60 backdrop-blur-md border border-forge-700/40 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-ember-500 animate-pulse" />
            <span className="text-ember-400 text-xs font-medium tracking-widest uppercase">
              Houston's Gaming Haven
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-forge-50 leading-[1.05] tracking-tight mb-6"
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-forge-200 leading-relaxed max-w-xl mb-10"
          >
            Your epicenter for tabletop wargaming, RPGs, trading cards, and
            board games. Premium hobby supplies. Dedicated play space. A
            community built on shared passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              onClick={handleExplore}
              className={`group inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-lg transition-all duration-300 ${
                ctaVariant === 'primary'
                  ? 'bg-ember-600 hover:bg-ember-500 text-white shadow-lg shadow-ember-600/25 hover:shadow-ember-600/40'
                  : 'border-2 border-forge-600 hover:border-forge-400 text-forge-200 hover:text-white'
              }`}
            >
              Explore the Arsenal
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 border border-forge-600/60 hover:border-forge-400 text-forge-200 font-medium px-7 py-3.5 rounded-lg transition-all duration-300 bg-forge-950/30 backdrop-blur-sm hover:bg-forge-950/50"
              onClick={() => trackHeroCta({ target: 'view_events' })}
            >
              <Calendar className="w-4 h-4" />
              View Events
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forge-950 to-transparent pointer-events-none" />
    </section>
  )
}
