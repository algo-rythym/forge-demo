import { Helmet } from 'react-helmet-async'
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Star,
  Users,
  MessageCircle,
  Sparkles,
  Sword,
  Heart,
  Flame,
} from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { storeInfo, aboutImage, reviews } from '../data/content'
import { usePageAnalytics, useScrollDepth } from '../hooks/useAnalytics'

export function About() {
  usePageAnalytics()
  useScrollDepth()

  return (
    <>
      <Helmet>
        <title>About — The Forge Houston</title>
        <meta
          name="description"
          content="The Forge Houston is where hobbyists are made. A community built around the love of hobbies & games."
        />
      </Helmet>

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <ScrollReveal>
            <div className="text-center mb-24 max-w-4xl mx-auto">
              <p className="text-ember-500 text-sm font-medium tracking-widest uppercase mb-6">
                About Us
              </p>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-forge-50 tracking-tight mb-8 leading-[1.1]">
                The Forge Houston:
                <br />
                <span className="text-gradient">
                  Where Hobbyists Are Made
                </span>
              </h1>
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal>
            <div className="relative mb-24 overflow-hidden rounded-2xl border border-forge-800 bg-forge-900/60">
              <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
                <div
                  className="w-full h-full rounded-full animate-pulse-glow"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(217,119,6,0.4) 0%, transparent 70%)',
                  }}
                />
              </div>

              <div className="relative p-10 md:p-16 text-center max-w-4xl mx-auto">
                <div className="w-14 h-14 bg-ember-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Flame className="w-7 h-7 text-ember-500" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-forge-100 mb-6">
                  Our Mission: Building a Community Around the Love of Hobbies
                  & Games
                </h2>
                <p className="text-lg text-forge-300 leading-relaxed mb-6">
                  The Forge was created for hobbyists to have a place to call
                  home; a place where friendships could be forged and an
                  environment that is welcoming to all! We believe in supporting
                  and creating the best game store experience possible.
                </p>
                <p className="text-lg text-forge-300 leading-relaxed">
                  Our greatest goal is to build a community where everyone can
                  thrive, both hobbyist and employee alike. Thank you for making
                  The Forge what it is today: A space where we can share our
                  passions with each other.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Location + Photo */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <ScrollReveal>
              <div>
                <p className="text-ember-500 text-sm font-medium tracking-widest uppercase mb-4">
                  Find Us in Memorial
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-forge-50 tracking-tight mb-6">
                  Houston's FLGS!
                </h2>
                <p className="text-forge-300 leading-relaxed mb-8">
                  Our permanent home is located across the street from Fire
                  Station 78, off of Memorial and Eldridge.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-ember-500/10 rounded-lg flex items-center justify-center text-ember-500 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-forge-100 font-medium text-sm">
                        Address
                      </div>
                      <div className="text-sm text-forge-400">
                        15121 Memorial Dr.
                        <br />
                        Houston, TX 77079
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-ember-500/10 rounded-lg flex items-center justify-center text-ember-500 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-forge-100 font-medium text-sm">
                        Phone
                      </div>
                      <div className="text-sm text-forge-400">
                        {storeInfo.phone}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-ember-500/10 rounded-lg flex items-center justify-center text-ember-500 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-forge-100 font-medium text-sm">
                        Email
                      </div>
                      <div className="text-sm text-forge-400">
                        {storeInfo.email}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=15121+Memorial+Dr+Houston+TX+77079"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-ember-600 hover:bg-ember-500 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-lg shadow-ember-600/20 hover:shadow-ember-600/30"
                >
                  Get Directions
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-ember-500/10 to-transparent rounded-2xl blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-forge-800">
                  <img
                    src={aboutImage}
                    alt="The Forge store interior"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forge-950 to-transparent" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* New Home Announcement */}
          <ScrollReveal>
            <div className="mb-24 bg-gradient-to-r from-ember-600/20 to-ember-500/10 border border-ember-500/20 rounded-2xl p-10 md:p-14 text-center">
              <div className="w-14 h-14 bg-ember-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-7 h-7 text-ember-500" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-forge-50 mb-4">
                Our New Permanent Home Is Now Open!
              </h2>
              <p className="text-forge-300 leading-relaxed max-w-2xl mx-auto">
                If you haven't already, come see what everyone is talking about
                online! A brand new space that fits our style and brings a fully
                medieval-themed experience unlike anything you've seen in Houston
                before!
              </p>
            </div>
          </ScrollReveal>

          {/* Sam's Journey */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <ScrollReveal direction="right">
              <div className="relative overflow-hidden rounded-2xl border border-forge-800">
                <img
                  src="/photos/forge-05.png"
                  alt="Sam Stilley at The Forge"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forge-950 to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <p className="text-ember-500 text-sm font-medium tracking-widest uppercase mb-4">
                  Our Story
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-forge-50 tracking-tight mb-6">
                  Sam Stilley's Journey to The Forge
                </h2>
                <div className="space-y-4 text-forge-300 leading-relaxed">
                  <p>
                    Sam Stilley is not just the owner of The Forge, he's a true
                    gamer at heart and a dedicated hobbyist. He established The
                    Forge on December 3rd 2021 with a little help from our true
                    Forgemaster, the late Dallas Collett.
                  </p>
                  <p>
                    As a team, they were fueled by a passion for gaming and the
                    desire to create a community where gamers and hobbyists could
                    come together in their shared love of all things gaming.
                  </p>
                  <p>
                    Sam and Dallas worked tirelessly to provide a space for all
                    who wanted to come and play without the worries of the world
                    to bother them. They forged a path together where
                    friendships bloomed over shared adventures and where every
                    gamer can feel at home.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Personal Message */}
          <ScrollReveal>
            <div className="mb-24 max-w-4xl mx-auto">
              <div className="relative bg-forge-900/60 border border-forge-800 rounded-2xl p-10 md:p-14">
                <div className="absolute -top-6 left-10 w-12 h-12 bg-ember-500 rounded-full flex items-center justify-center text-white text-2xl font-serif">
                  &ldquo;
                </div>

                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-forge-100 mb-6">
                  A Personal Message from The Forge
                </h2>
                <div className="space-y-4 text-forge-300 leading-relaxed">
                  <p>
                    Games have always been more than just a pastime for me
                    &ndash; they're a means to connect, create, and find a sense
                    of belonging. At The Forge, we strive to create that sense of
                    community in everything we do, from our weekly events to
                    learn to plays, open play to special holidays.
                  </p>
                  <p>
                    Every single experience our community has when they come
                    through the doors is another chance for us to build lasting
                    relationships and create the best gaming environment around!
                  </p>
                  <p>
                    Join us at The Forge, where every game is celebrated.
                    Whether you're rolling dice or shuffling up cards, every
                    game is a chance to create lasting relationships;
                    friendships that will last a life-time. Our space is a
                    sanctuary for those who seek more than just a game &ndash;
                    It's a place for you to join an awesome group of
                    like-minded gamers who are passionate about their hobby.
                  </p>
                  <p className="text-forge-100 font-medium">
                    So come, be a part of our community, where each game played
                    is more than just a game &ndash; it's a part of your story,
                    woven into the vibrant tapestry of The Forge.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Reviews */}
          <div className="mb-24">
            <SectionHeader
              number="Community Buzz"
              title="Check Out Our Reviews"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((review, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="group bg-forge-900/60 border border-forge-800 hover:border-forge-700 rounded-xl p-6 text-forge-300 leading-relaxed transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className="w-3.5 h-3.5 text-ember-500 fill-ember-500"
                        />
                      ))}
                    </div>
                    <p className="italic text-sm mb-4 flex-1">
                      {review.text}
                    </p>
                    <p className="text-xs text-forge-500 font-medium">
                      {review.author}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Social */}
          <ScrollReveal>
            <div className="bg-forge-900/60 border border-forge-800 rounded-2xl p-10 md:p-14">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-ember-500/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-ember-500" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl font-semibold text-forge-100">
                        We Are Social
                      </h2>
                      <p className="text-sm text-forge-400">
                        Connect with gamers
                      </p>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-forge-100 mb-4">
                    Join Our Online Community
                  </h3>
                  <p className="text-forge-300 leading-relaxed mb-8">
                    Join The Forge's vibrant community on Facebook and Discord,
                    where the conversation never ends! Connect with fellow
                    enthusiasts, stay updated on the latest store events, and
                    share your epic gaming moments.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 bg-forge-800 hover:bg-forge-700 text-forge-50 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors border border-forge-700 hover:border-forge-600"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Join Discord
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 border border-forge-700 hover:border-forge-500 text-forge-300 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors hover:text-forge-100"
                    >
                      Follow on Facebook
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl border border-forge-800">
                  <img
                    src="/photos/forge-08.png"
                    alt="The Forge community"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forge-950/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm text-forge-200">
                      Whether you're seeking advice, looking for a gaming group,
                      or just wanting to chat about your favorite games, our
                      digital doors are always open.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  )
}
