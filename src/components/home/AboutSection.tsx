import AnimatedSection from '@/components/ui/AnimatedSection'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-beers-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Stats */}
          <AnimatedSection direction="left">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '1000+', label: 'Minutes of Racing' },
                { value: '3', label: 'Tracks Across Australia' },
                { value: '4', label: '2026 Events' },
                { value: '$650', label: 'Entry From' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-beers-surface border border-beers-green/20 rounded-xl p-6 hover:border-beers-gold/30 transition-colors"
                >
                  <div className="font-display text-beers-gold text-4xl lg:text-5xl tracking-wide mb-1">
                    {stat.value}
                  </div>
                  <div className="text-beers-white/40 text-xs tracking-wide uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Copy */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="space-y-6">
              <div>
                <p className="text-beers-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
                  About BEERS
                </p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-beers-white tracking-wide leading-tight">
                  INTRODUCING
                  <br />
                  <span className="text-beers-gold">B.E.E.R.S</span>
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-beers-white/70 leading-relaxed">
                  Born in Western Australia, the Budget Extreme Endurance Racing Series was created for drivers
                  who crave track time but find the costs of owning a V8 Supercar — and the track fees to
                  match — completely overwhelming.
                </p>
                <p className="text-beers-white/70 leading-relaxed">
                  We&apos;ve got the solution. Rally your friends, bring your budget-friendly car, and immerse
                  yourself in our exhilarating endurance racing series. Maximum track experience. Minimum
                  bank damage.
                </p>
                <p className="text-beers-white/50 text-sm leading-relaxed">
                  As we extend our reach, we&apos;re geared up to explore new horizons at diverse track
                  locations, aiming to set new records. Be a part of our incredible journey.
                </p>
              </div>

              <div className="pt-2 border-t border-beers-green/20">
                <p className="text-beers-white/30 text-xs tracking-[0.2em] uppercase">
                  Sanctioned by AASA — Australian Auto-Sport Alliance
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
