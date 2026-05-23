import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react'
import { events2026 } from '@/lib/data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '2026 Events — BEERS',
  description: 'All 2026 Budget Extreme Endurance Racing Series events. Enter now.',
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-beers-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-beers-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">Race Calendar</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-beers-white tracking-wide">
            2026 EVENTS
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events2026.map((event, i) => (
            <Link key={event.slug} href={`/events/${event.slug}`} className="group block">
              <div className="relative bg-beers-surface border border-beers-green/20 rounded-2xl overflow-hidden hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                {/* Accent bar */}
                <div className="h-1" style={{ backgroundColor: event.accentColor }} />

                {/* Gradient overlay */}
                <div
                  className="absolute top-0 left-0 right-0 h-32 opacity-10"
                  style={{ background: `linear-gradient(to bottom, ${event.accentColor}, transparent)` }}
                />

                <div className="relative p-8 flex flex-col sm:flex-row sm:items-center gap-6">
                  {/* Number */}
                  <div
                    className="font-display text-7xl leading-none select-none opacity-20 shrink-0"
                    style={{ color: event.accentColor }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <div className="flex-1">
                    <h2 className="font-display text-2xl lg:text-3xl text-beers-white tracking-wide leading-tight mb-4 group-hover:text-beers-white transition-colors">
                      {event.name}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={13} style={{ color: event.accentColor }} />
                        <span className="text-beers-white/50 text-xs">{event.dateRange}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={13} style={{ color: event.accentColor }} />
                        <span className="text-beers-white/50 text-xs">{event.venue}</span>
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

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm" style={{ color: event.accentColor }}>
                        {event.pricingTiers.length > 0
                          ? `From ${event.pricingTiers[0].price}`
                          : 'Details coming soon'}
                      </span>
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                        style={{ color: event.accentColor }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
