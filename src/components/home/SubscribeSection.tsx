'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function SubscribeSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="py-20 lg:py-32 bg-beers-black relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] bg-beers-gold/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <p className="text-beers-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">Stay in the loop</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-beers-white tracking-wide mb-4">
            SUBSCRIBE FOR UPDATES
          </h2>
          <p className="text-beers-white/50 text-sm mb-10">
            Be first to know about new events, early bird entries, and race news.
          </p>

          {submitted ? (
            <div className="bg-beers-surface border border-beers-green/30 rounded-xl p-8">
              <div className="w-12 h-12 rounded-full bg-beers-green/20 border border-beers-gold/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-beers-gold text-xl">✓</span>
              </div>
              <p className="text-beers-white font-medium">You&apos;re on the list.</p>
              <p className="text-beers-white/40 text-sm mt-1">We&apos;ll be in touch before entries open.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First name"
                  required
                  className="bg-beers-surface border border-beers-green/20 focus:border-beers-gold/50 rounded-lg px-4 py-3 text-beers-white placeholder-beers-white/30 text-sm outline-none transition-colors w-full"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  required
                  className="bg-beers-surface border border-beers-green/20 focus:border-beers-gold/50 rounded-lg px-4 py-3 text-beers-white placeholder-beers-white/30 text-sm outline-none transition-colors w-full"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                required
                className="bg-beers-surface border border-beers-green/20 focus:border-beers-gold/50 rounded-lg px-4 py-3 text-beers-white placeholder-beers-white/30 text-sm outline-none transition-colors w-full"
              />
              <button
                type="submit"
                disabled={loading}
                className="group w-full flex items-center justify-center gap-2 bg-beers-gold hover:bg-beers-gold-light disabled:opacity-60 text-beers-black font-semibold px-6 py-3.5 rounded-lg transition-all tracking-wide text-sm"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
                {!loading && (
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
