import { raceFormats } from '@/lib/data'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function RaceFormats() {
  return (
    <section className="py-20 lg:py-32 bg-beers-black relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beers-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <p className="text-beers-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
            How it works
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-beers-white tracking-wide">
            RACE FORMATS
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {raceFormats.map((format, i) => (
            <AnimatedSection key={format.name} delay={i * 0.15} className="h-full">
              <div className="relative h-full bg-beers-surface border border-beers-green/20 rounded-2xl p-8 hover:border-beers-gold/30 transition-all duration-300 group">
                {/* Index */}
                <div className="font-display text-8xl text-beers-gold/5 absolute top-4 right-6 select-none leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Gold accent dot */}
                <div className="w-2 h-2 rounded-full bg-beers-gold mb-6" />

                <h3 className="font-display text-2xl lg:text-3xl text-beers-white tracking-wide mb-4 group-hover:text-beers-gold transition-colors">
                  {format.name}
                </h3>

                <p className="text-beers-white/60 leading-relaxed text-sm lg:text-base">
                  {format.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
