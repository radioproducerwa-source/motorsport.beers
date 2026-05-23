import Link from 'next/link'
import { ArrowRight, Users, Calendar, MapPin } from 'lucide-react'
import { events2026 } from '@/lib/data'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function UpcomingEvents() {
  return (
    <section className="py-20 lg:py-32 bg-beers-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-beers-gold/3 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 lg:mb-16">
          <p className="text-beers-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">Race Calendar</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-beers-white tracking-wide">
              2026 EVENTS
            </h2>
            <Link
              href="/events"
              className="group flex items-center gap-2 text-beers-white/50 hover:text-beers-gold text-sm transition-colors"
            >
              View all events
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {events2026.map((event, i) => (
            <AnimatedSection key={event.slug} delay={i * 0.1}>
              <Link href={`/events/${event.slug}`} className="group block h-full">
                <div className="relative h-full bg-beers-surface border border-beers-green/20 rounded-2xl overflow-hidden hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Accent bar */}
                  <div
                    className="h-1 w-full"
                    style={{ backgroundColor: event.accentColor }}
                  />

                  {/* Coloured glow behind card */}
                  <div
                    className="absolute top-0 left-0 right-0 h-24 opacity-10"
                    style={{ background: `linear-gradient(to bottom, ${event.accentColor}, transparent)` }}
                  />

                  <div className="relative p-6 flex flex-col h-full">
                    {/* Event number */}
                    <div
                      className="font-display text-6xl lg:text-7xl leading-none mb-4 opacity-20 select-none"
                      style={{ color: event.accentColor }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    {/* Name */}
                    <h3 className="font-display text-xl lg:text-2xl text-beers-white tracking-wide leading-tight mb-4 group-hover:text-beers-white transition-colors">
                      {event.shortName}
                    </h3>

                    {/* Meta */}
                    <div className="space-y-2 mb-6 flex-1">
                      <div className="flex items-start gap-2">
                        <Calendar size={13} className="mt-0.5 shrink-0" style={{ color: event.accentColor }} />
                        <span className="text-beers-white/50 text-xs leading-tight">{event.dateRange}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: event.accentColor }} />
                        <span className="text-beers-white/50 text-xs leading-tight">{event.venue}</span>
                      </div>
                      {event.teamsEntered > 0 && (
                        <div className="flex items-center gap-2">
                          <Users size={13} style={{ color: event.accentColor }} />
                          <span className="text-beers-white/50 text-xs">
                            <span className="font-semibold" style={{ color: event.accentColor }}>
                              {event.teamsEntered}
                            </span>{' '}
                            teams entered
                          </span>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div
                      className="flex items-center justify-between pt-4 border-t"
                      style={{ borderColor: `${event.accentColor}25` }}
                    >
                      <span className="text-xs font-semibold tracking-wide" style={{ color: event.accentColor }}>
                        {event.pricingTiers.length > 0 ? `From ${event.pricingTiers[0].price}` : 'Coming Soon'}
                      </span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                        style={{ color: event.accentColor }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
