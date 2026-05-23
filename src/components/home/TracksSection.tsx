import { ExternalLink, MapPin } from 'lucide-react'
import { tracks } from '@/lib/data'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function TracksSection() {
  return (
    <section className="py-20 lg:py-32 bg-beers-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beers-green/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 lg:mb-16">
          <p className="text-beers-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">Venues</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-beers-white tracking-wide">
            TRACKS UNLOCKED
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tracks.map((track, i) => (
            <AnimatedSection key={track.name} delay={i * 0.15}>
              <div className="bg-beers-surface border border-beers-green/20 rounded-2xl overflow-hidden hover:border-beers-green/40 transition-all duration-300 group">
                {/* Track diagram placeholder */}
                <div className="h-40 bg-gradient-to-br from-beers-green/10 to-beers-black/50 flex items-center justify-center relative overflow-hidden">
                  {/* Circuit line art */}
                  <svg
                    viewBox="0 0 200 120"
                    className="w-3/4 h-3/4 opacity-20 group-hover:opacity-40 transition-opacity"
                    fill="none"
                    stroke="#FFB800"
                    strokeWidth="2"
                  >
                    {i === 0 && (
                      // Wanneroo-style oval with chicane
                      <path d="M 30 60 Q 30 20 80 20 L 140 20 Q 170 20 170 60 Q 170 100 140 100 L 80 100 Q 30 100 30 60 Z M 100 20 L 100 35 Q 95 42 105 49 Q 95 56 105 63 L 100 100" />
                    )}
                    {i === 1 && (
                      // Collie-style layout
                      <path d="M 40 80 L 160 80 Q 170 80 170 70 L 170 50 Q 170 30 150 25 L 80 20 Q 50 18 40 35 L 40 80" />
                    )}
                    {i === 2 && (
                      // Hidden Valley style
                      <path d="M 30 70 L 100 70 Q 140 70 150 50 Q 160 30 140 25 L 80 20 Q 50 20 40 35 Q 30 45 30 70 L 30 90 Q 30 100 50 100 L 130 100 Q 160 100 170 80" />
                    )}
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-t from-beers-surface to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl lg:text-2xl text-beers-white tracking-wide mb-1">
                    {track.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mb-3">
                    <MapPin size={12} className="text-beers-gold" />
                    <span className="text-beers-gold text-xs font-medium tracking-wide">{track.location}</span>
                  </div>
                  <p className="text-beers-white/50 text-sm leading-relaxed mb-4">{track.description}</p>

                  <a
                    href={track.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-beers-white/40 hover:text-beers-gold text-xs transition-colors group/link"
                  >
                    <ExternalLink size={12} className="group-hover/link:scale-110 transition-transform" />
                    View on Maps
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
