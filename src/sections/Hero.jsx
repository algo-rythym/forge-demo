import { ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useABTest } from '../hooks/useABTest'
import { useClickTracker } from '../hooks/useAnalytics'
import { useEffect } from 'react'

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
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(249,115,22,0.4) 0%, transparent 70%)',
          }}
        />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-ember-400 text-sm font-medium tracking-widest uppercase mb-6"
          >
            Houston's Gaming Haven
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-semibold text-forge-50 leading-[1.1] tracking-tight mb-8"
          >
            {headlineVariant === "Houston's Tabletop HQ." ? (
              <>
                Houston's
                <br />
                <span className="text-ember-400">Tabletop HQ.</span>
              </>
            ) : (
              <>
                Where hobbyists
                <br />
                <span className="text-ember-400">forge legends.</span>
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-forge-300 leading-relaxed max-w-xl mb-10"
          >
            Your epicenter for tabletop wargaming, RPGs, trading cards, and
            board games. Premium hobby supplies. Dedicated play space. A
            community built on shared passion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              onClick={handleExplore}
              className={`inline-flex items-center gap-2 font-medium px-6 py-3 rounded transition-colors ${
                ctaVariant === 'primary'
                  ? 'bg-ember-600 hover:bg-ember-500 text-white'
                  : 'border border-forge-700 hover:border-forge-500 text-forge-200'
              }`}
            >
              Explore the Arsenal
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-forge-700 hover:border-forge-500 text-forge-200 font-medium px-6 py-3 rounded transition-colors"
              onClick={() => trackHeroCta({ target: 'view_events' })}
            >
              <Calendar className="w-4 h-4" />
              View Events
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
