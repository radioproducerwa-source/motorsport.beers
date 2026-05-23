import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Spectators — BEERS',
  description: 'Everything you need to know about attending a BEERS event as a spectator.',
}

export default function SpectatorsPage() {
  return (
    <div className="min-h-screen bg-beers-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-beers-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">Come watch</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-beers-white tracking-wide">
            SPECTATORS
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: 'Gates & Entry',
              items: [
                'Spectators are welcome at all BEERS events',
                'Gate times vary per event — check the specific event page',
                'General admission is free unless otherwise stated',
                'Bring a chair, sunscreen and plenty of water',
              ],
            },
            {
              title: 'What to expect',
              items: [
                'Non-stop endurance racing across 9–24 hour events',
                'Live music and entertainment at select events',
                'Food and beverage vendors on-site',
                'A genuinely brilliant community atmosphere',
              ],
            },
            {
              title: 'Safety & Rules',
              items: [
                'Stay behind spectator barriers at all times',
                'No persons under 16 in the pit lane area',
                'All children must be supervised by an adult',
                'Follow instructions from officials and marshals',
              ],
            },
            {
              title: 'Getting there',
              items: [
                'Most events are held at Wanneroo Raceway or Collie Motorplex',
                'Check the event page for the specific venue address',
                'Parking is available at all venues',
                'Carpooling is encouraged for regional events',
              ],
            },
          ].map((card) => (
            <div key={card.title} className="bg-beers-surface border border-beers-green/20 rounded-2xl p-6">
              <h2 className="font-display text-xl text-beers-gold tracking-wide mb-4">{card.title}</h2>
              <ul className="space-y-2">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-beers-gold/40 mt-2 shrink-0" />
                    <span className="text-beers-white/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-beers-white/40 text-sm mb-4">Ready to come and watch?</p>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 bg-beers-red hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            View 2026 Events <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
