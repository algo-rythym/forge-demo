import {
  Swords,
  Shield,
  Flame,
  MapPin,
  Clock,
  Phone,
  ChevronRight,
  Users,
  Calendar,
  Package,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { useState, useEffect } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const categories = [
    {
      id: '01',
      title: 'Miniatures',
      items: ['Warhammer 40K', 'Age of Sigmar', 'Kill Team', 'Star Wars Legion', 'Marvel Crisis Protocol'],
      icon: <Swords className="w-5 h-5" />,
    },
    {
      id: '02',
      title: 'Trading Cards',
      items: ['Magic: The Gathering', 'Pokémon', 'One Piece', 'Flesh & Blood', 'Gundam TCG'],
      icon: <Shield className="w-5 h-5" />,
    },
    {
      id: '03',
      title: 'RPGs',
      items: ['Dungeons & Dragons', 'Pathfinder', 'Shadowdark', 'Dungeon Crawl Classics'],
      icon: <Flame className="w-5 h-5" />,
    },
    {
      id: '04',
      title: 'Board Games',
      items: ['Ticket to Ride', 'Catan', 'Zombicide', 'Nemesis', 'Exploding Kittens'],
      icon: <Package className="w-5 h-5" />,
    },
    {
      id: '05',
      title: 'Hobby Supplies',
      items: ['Citadel Paints', 'Vallejo', 'Army Painter', 'Terrain', 'Miniature Cases'],
      icon: <Sparkles className="w-5 h-5" />,
    },
  ]

  const events = [
    { day: 'Mon', name: 'Monday Night TCGs', time: '6:00 PM' },
    { day: 'Tue', name: 'Warhammer 40K', time: '6:30 PM' },
    { day: 'Wed', name: 'Battletech', time: '6:00 PM' },
    { day: 'Thu', name: 'Board Game Night', time: '6:00 PM' },
    { day: 'Fri', name: 'Magic Friday', time: '6:00 PM' },
    { day: 'Sat', name: 'Open Gaming', time: '10:00 AM' },
    { day: 'Sun', name: 'Paint & Hobby', time: '12:00 PM' },
  ]

  const reviews = [
    '"The best game store in Houston. Period."',
    '"Incredible selection and the staff actually plays the games."',
    '"My home away from home."',
    '"Unmatched community. You walk in a stranger, leave as kin."',
  ]

  return (
    <div className="min-h-screen bg-forge-950 text-forge-100 font-sans">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-forge-950/90 backdrop-blur-md border-b border-forge-800/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-ember-500 rounded-sm flex items-center justify-center">
              <Flame className="w-4 h-4 text-white" />
            </div>
            <span className="font-serif text-lg font-semibold tracking-wide text-forge-50">
              THE FORGE
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-forge-300">
            <a href="#games" className="hover:text-forge-50 transition-colors">Games</a>
            <a href="#events" className="hover:text-forge-50 transition-colors">Events</a>
            <a href="#community" className="hover:text-forge-50 transition-colors">Community</a>
            <a href="#visit" className="hover:text-forge-50 transition-colors">Visit</a>
          </nav>
          <a
            href="#visit"
            className="hidden md:inline-flex items-center gap-2 bg-ember-600 hover:bg-ember-500 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            Find Us
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(239,96,35,0.4) 0%, transparent 70%)',
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-3xl">
            <p className="text-ember-400 text-sm font-medium tracking-widest uppercase mb-6">
              Houston's Gaming Haven
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold text-forge-50 leading-[1.1] tracking-tight mb-8">
              Where hobbyists
              <br />
              <span className="text-ember-400">forge legends.</span>
            </h1>
            <p className="text-lg md:text-xl text-forge-300 leading-relaxed max-w-xl mb-10">
              Your epicenter for tabletop wargaming, RPGs, trading cards, and
              board games. Premium hobby supplies. Dedicated play space. A
              community built on shared passion.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#games"
                className="inline-flex items-center gap-2 bg-ember-600 hover:bg-ember-500 text-white font-medium px-6 py-3 rounded transition-colors"
              >
                Explore the Arsenal
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#events"
                className="inline-flex items-center gap-2 border border-forge-700 hover:border-forge-500 text-forge-200 font-medium px-6 py-3 rounded transition-colors"
              >
                <Calendar className="w-4 h-4" />
                View Events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Credibility band */}
      <section className="border-y border-forge-800/50 bg-forge-900/30">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 text-sm text-forge-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-ember-500" />
              <span>14520 Memorial Dr, Houston</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-ember-500" />
              <span>(832) 544-1786</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-ember-500" />
              <span>Open today: 12PM – 10PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-ember-500" />
              <span>383+ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Games / Categories */}
      <section id="games" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-ember-400 text-sm font-medium tracking-widest uppercase mb-4">
              01 — The Arsenal
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-forge-50 tracking-tight">
              Every game. Every system.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="group relative bg-forge-900/40 border border-forge-800/50 hover:border-ember-500/30 rounded-lg p-6 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-forge-800/60 rounded flex items-center justify-center text-ember-400">
                      {cat.icon}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-forge-50">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-forge-700 text-xs font-mono">
                    {cat.id}
                  </span>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-forge-300"
                    >
                      <ChevronRight className="w-3 h-3 text-ember-500/60" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-24 md:py-32 px-6 bg-forge-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-ember-400 text-sm font-medium tracking-widest uppercase mb-4">
              02 — The Calendar
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-forge-50 tracking-tight">
              Epic events await.
            </h2>
            <p className="mt-4 text-forge-300 max-w-xl">
              Your schedule for adventure. Tournaments, learn-to-play sessions,
              paint days, and casual nights.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {events.map((evt) => (
              <div
                key={evt.day}
                className="bg-forge-950 border border-forge-800/50 rounded-lg p-5 hover:border-ember-500/30 transition-colors group"
              >
                <div className="text-ember-500 text-xs font-bold tracking-widest uppercase mb-2">
                  {evt.day}
                </div>
                <div className="font-medium text-forge-50 mb-1">{evt.name}</div>
                <div className="text-sm text-forge-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {evt.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / Reviews */}
      <section id="community" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-ember-400 text-sm font-medium tracking-widest uppercase mb-4">
              03 — The Fellowship
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-forge-50 tracking-tight">
              Built by gamers, for gamers.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-forge-900/40 border border-forge-800/50 rounded-lg p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-ember-500/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-ember-400" />
                </div>
                <div>
                  <div className="text-forge-50 font-semibold">Active Community</div>
                  <div className="text-sm text-forge-400">Discord & Facebook</div>
                </div>
              </div>
              <p className="text-forge-300 leading-relaxed mb-8">
                Join hundreds of local players for organized play, hobby
                meetups, and impromptu sessions. The Forge isn't just a store —
                it's where campaigns are born and armies are painted.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-forge-800 hover:bg-forge-700 text-forge-100 text-sm font-medium px-4 py-2.5 rounded transition-colors"
                >
                  Join Discord
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border border-forge-700 hover:border-forge-500 text-forge-200 text-sm font-medium px-4 py-2.5 rounded transition-colors"
                >
                  Follow on Facebook
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-forge-950 border border-forge-800/30 rounded-lg p-5 text-forge-200 text-sm italic leading-relaxed"
                >
                  {review}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visit / CTA */}
      <section id="visit" className="py-24 md:py-32 px-6 bg-forge-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-ember-400 text-sm font-medium tracking-widest uppercase mb-4">
                04 — The Hearth
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-forge-50 tracking-tight mb-6">
                Come roll some dice.
              </h2>
              <p className="text-forge-300 leading-relaxed mb-8">
                Two RPG rooms. Dedicated paint stations. Tables loaded with
                terrain. Whether you're building your first army or running your
                hundredth session, there's a seat at the table for you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-forge-800/60 rounded flex items-center justify-center text-ember-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-forge-50 font-medium">The Forge Hobbies & Games</div>
                    <div className="text-sm text-forge-400">
                      14520 Memorial Dr, Houston, TX 77079
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-forge-800/60 rounded flex items-center justify-center text-ember-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-forge-50 font-medium">Store Hours</div>
                    <div className="text-sm text-forge-400">
                      Mon–Fri: 12PM – 10PM (Fri til 11PM)
                      <br />
                      Sat: 10AM – 10PM · Sun: 12PM – 8PM
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-forge-800/60 rounded flex items-center justify-center text-ember-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-forge-50 font-medium">Phone</div>
                    <div className="text-sm text-forge-400">(832) 544-1786</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-forge-950 border border-forge-800/50 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="font-serif text-2xl font-semibold text-forge-50 mb-2">
                  Ready to play?
                </div>
                <p className="text-forge-400 text-sm">
                  Drop by or call ahead to reserve table space.
                </p>
              </div>
              <a
                href="#"
                className="flex w-full items-center justify-center gap-2 bg-ember-600 hover:bg-ember-500 text-white font-medium px-6 py-3.5 rounded transition-colors mb-3"
              >
                Get Directions
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex w-full items-center justify-center gap-2 border border-forge-700 hover:border-forge-500 text-forge-200 font-medium px-6 py-3.5 rounded transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call the Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-forge-800/50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-ember-500 rounded-sm flex items-center justify-center">
                <Flame className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-serif text-sm font-semibold tracking-wide text-forge-50">
                THE FORGE
              </span>
            </div>
            <nav className="flex items-center gap-6 text-sm text-forge-400">
              <a href="#games" className="hover:text-forge-200 transition-colors">Games</a>
              <a href="#events" className="hover:text-forge-200 transition-colors">Events</a>
              <a href="#community" className="hover:text-forge-200 transition-colors">Community</a>
              <a href="#visit" className="hover:text-forge-200 transition-colors">Visit</a>
            </nav>
            <div className="text-sm text-forge-600">
              © {new Date().getFullYear()} The Forge Hobbies & Games
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
