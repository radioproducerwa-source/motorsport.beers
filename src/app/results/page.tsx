import type { Metadata } from 'next'
import { pastEvents } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Results — BEERS',
  description: 'Results from all past Budget Extreme Endurance Racing Series events.',
}

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-beers-black pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-beers-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">On the board</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-beers-white tracking-wide">
            RESULTS
          </h1>
        </div>

        <div className="space-y-4">
          {pastEvents.map((event) => (
            <div
              key={event.slug}
              className="bg-beers-surface border border-beers-green/20 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div>
                <h3 className="text-beers-white font-medium">{event.name}</h3>
                <p className="text-beers-white/40 text-sm mt-0.5">{event.venue} · {event.date}</p>
              </div>
              <div className="text-beers-white/20 text-xs font-medium tracking-widest uppercase border border-beers-white/10 px-3 py-1.5 rounded-lg w-fit">
                Results TBA
              </div>
            </div>
          ))}
        </div>

        <p className="text-beers-white/30 text-sm text-center mt-12">
          Full results archives are being compiled. Check back soon.
        </p>
      </div>
    </div>
  )
}
