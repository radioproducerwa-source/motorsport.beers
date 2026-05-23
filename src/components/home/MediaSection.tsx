import { Play } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const videos = [
  { id: 'oLokn2bfhkQ', title: 'Bar31 Race Event — Dawn Till Dusk', channel: 'Laubster Media' },
  { id: 'BEERS1000Apr22', title: 'BEERS 1000 April 2022 — Collie Motorplex', channel: 'Ian Jeffery Motors' },
  { id: 'BEERS1000Apr21', title: 'BEERS 1000 — Collie Motorplex April 2021', channel: 'Ian Jeffery Motors' },
  { id: 'BEERS2400Jul22', title: 'B.E.E.R.S 2400 — July 15th 2022', channel: 'Ian Jeffery Motors' },
]

export default function MediaSection() {
  return (
    <section className="py-20 lg:py-32 bg-beers-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-beers-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">Highlights</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-beers-white tracking-wide">
                WHY BE PART<br className="hidden sm:block" /> OF THE FUN?
              </h2>
            </div>
            <p className="text-beers-white/40 text-sm max-w-xs">
              As we extend our reach, we&apos;re geared up to explore new horizons at diverse track locations.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {videos.map((video, i) => (
            <AnimatedSection key={video.id} delay={i * 0.1}>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-video bg-beers-surface rounded-xl overflow-hidden border border-beers-green/20 hover:border-beers-gold/30 transition-all duration-300"
              >
                {/* Thumbnail (real YouTube embeds need a backend or client-side; using placeholder) */}
                <div className="absolute inset-0 bg-gradient-to-br from-beers-green/20 to-beers-black flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-beers-red/90 group-hover:bg-beers-red flex items-center justify-center shadow-lg shadow-beers-red/30 transition-colors">
                    <Play size={22} className="text-white ml-0.5" fill="white" />
                  </div>
                </div>

                {/* Grid decoration */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `linear-gradient(#FFB800 1px, transparent 1px), linear-gradient(to right, #FFB800 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-beers-black via-beers-black/80 to-transparent p-4 pt-8">
                  <p className="text-beers-white/80 text-sm font-medium leading-tight">{video.title}</p>
                  <p className="text-beers-white/40 text-xs mt-0.5">{video.channel}</p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
