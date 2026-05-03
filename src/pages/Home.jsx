import { Helmet } from 'react-helmet-async'
import { Hero } from '../sections/Hero'
import { StoreInfoBand } from '../sections/StoreInfoBand'
import { Highlights } from '../sections/Highlights'
import { TrustBand } from '../sections/TrustBand'
import { GamesGrid } from '../sections/GamesGrid'
import { EventsCalendar } from '../sections/EventsCalendar'
import { PhotoStrip } from '../sections/PhotoStrip'
import { Community } from '../sections/Community'
import { VisitCTA } from '../sections/VisitCTA'
import { Newsletter } from '../sections/Newsletter'
import { usePageAnalytics, useScrollDepth } from '../hooks/useAnalytics'

export function Home() {
  usePageAnalytics()
  useScrollDepth()

  return (
    <>
      <Helmet>
        <title>The Forge — Hobbies & Games</title>
        <meta
          name="description"
          content="Houston's epicenter for tabletop wargaming, RPGs, trading cards, and board games. Premium hobby supplies, dedicated play space, and a thriving community."
        />
      </Helmet>
      <Hero />
      <StoreInfoBand />
      <Highlights />
      <TrustBand />
      <GamesGrid />
      <EventsCalendar />
      <PhotoStrip />
      <Community />
      <VisitCTA />
      <Newsletter />
    </>
  )
}
