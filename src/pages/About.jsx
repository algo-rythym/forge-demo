import { Helmet } from 'react-helmet-async'
import { Users, Paintbrush, Trophy, Heart } from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { teamMembers } from '../data/content'
import { usePageAnalytics, useScrollDepth } from '../hooks/useAnalytics'

const values = [
  {
    title: 'Community First',
    description:
      'We measure success by the number of friendships formed across our tables, not just transactions at the register.',
    Icon: Users,
  },
  {
    title: 'Craft Matters',
    description:
      'From a perfectly painted mini to a well-balanced deck, we believe the journey of creation is as rewarding as the result.',
    Icon: Paintbrush,
  },
  {
    title: 'Competition & Camaraderie',
    description:
      'Win or lose, every match teaches something. We foster healthy competition where rivals shake hands and schedule rematches.',
    Icon: Trophy,
  },
  {
    title: 'Welcome Everyone',
    description:
      'Newcomers are not outsiders — they are tomorrow\'s regulars. We teach, include, and celebrate first-timers.',
    Icon: Heart,
  },
]

export function About() {
  usePageAnalytics()
  useScrollDepth()

  return (
    <>
      <Helmet>
        <title>About — The Forge</title>
        <meta
          name="description"
          content="Learn the story behind The Forge, meet our team, and discover the values that drive Houston's favorite tabletop gaming community."
        />
      </Helmet>

      <div className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mb-20">
              <p className="text-ember-400 text-sm font-medium tracking-widest uppercase mb-4">
                Our Story
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-forge-50 tracking-tight mb-6">
                Built from a garage. Grown by passion.
              </h1>
              <p className="text-lg text-forge-300 leading-relaxed">
                The Forge started in 2018 when Marcus Cole realized Houston had plenty
                of game stores, but few that felt like home. What began as weekly
                40K nights in a two-car garage became a 4,000-square-foot community
                hub where painters, players, and storytellers gather every day of
                the week.
              </p>
            </div>
          </ScrollReveal>

          <div className="mb-20">
            <SectionHeader
              number="Values"
              title="What we stand for."
              light
            />
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 0.1}>
                  <div className="bg-white border border-forge-200 rounded-xl p-7">
                    <div className="w-10 h-10 bg-ember-50 rounded-lg flex items-center justify-center text-ember-600 mb-4">
                      <v.Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-forge-900 mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-forge-600 leading-relaxed">{v.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              number="Team"
              title="Meet the crew."
              light
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {teamMembers.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 0.1}>
                  <div className="bg-white border border-forge-200 rounded-xl p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-forge-100 flex items-center justify-center text-forge-400">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-forge-900">
                      {member.name}
                    </h3>
                    <p className="text-xs text-ember-600 font-medium uppercase tracking-wide mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-forge-600 leading-relaxed">{member.bio}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
