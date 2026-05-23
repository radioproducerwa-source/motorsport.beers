import { sponsors } from '@/lib/data'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function SponsorsStrip() {
  const allSponsors = [...sponsors, ...sponsors]

  return (
    <section className="py-16 lg:py-24 bg-beers-black border-y border-beers-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <AnimatedSection className="text-center">
          <p className="text-beers-white/30 text-xs tracking-[0.3em] uppercase">Our Partners & Sponsors</p>
        </AnimatedSection>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-16 whitespace-nowrap w-max">
          {allSponsors.map((sponsor, i) => (
            <div key={i} className="inline-flex items-center gap-3 shrink-0 group">
              {/* Logo placeholder */}
              <div className="w-8 h-8 rounded-full bg-beers-surface border border-beers-green/20 flex items-center justify-center">
                <span className="text-beers-gold text-xs font-bold">
                  {sponsor.name.charAt(0)}
                </span>
              </div>
              <span
                className={`font-display tracking-wider transition-colors ${
                  sponsor.tier === 'title'
                    ? 'text-beers-gold text-2xl'
                    : sponsor.tier === 'major'
                    ? 'text-beers-white/60 text-lg'
                    : 'text-beers-white/30 text-base'
                }`}
              >
                {sponsor.name}
              </span>
              <span className="text-beers-green/30 text-xl font-thin">|</span>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-beers-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-beers-black to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
