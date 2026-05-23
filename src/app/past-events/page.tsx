import { MapPin, Calendar } from 'lucide-react'
import { pastEvents } from '@/lib/data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Past Events — BEERS',
  description: 'Archive of all past Budget Extreme Endurance Racing Series events.',
}

export default function PastEventsPage() {
  return (
    <div className="min-h-screen bg-beers-black pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-beers-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">Archive</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-beers-white tracking-wide">
            PAST EVENTS
          </h1>
        </div>

        <div className="space-y-3">
          {pastEvents.map((event, i) => (
            <div
              key={event.slug}
              className="flex items-center gap-6 bg-beers-surface border border-beers-green/20 rounded-xl p-5 hover:border-beers-green/40 transition-colors"
            >
              <div className="font-display text-3xl text-beers-gold/20 w-10 shrink-0 text-right">
                {String(pastEvents.length - i).padStart(2, '0')}
              </div>
              <div className="flex-1">
                <h3 className="text-beers-white font-medium text-sm sm:text-base">{event.name}</h3>
                <div className="flex flex-wrap items-center gap-4 mt-1.5">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-beers-gold/50" />
                    <span className="text-beers-white/40 text-xs">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-beers-gold/50" />
                    <span className="text-beers-white/40 text-xs">{event.venue}</span>
                  </div>
                </div>
              </div>
              <div className="text-beers-white/20 text-xs font-medium tracking-wide hidden sm:block">
                Completed
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
