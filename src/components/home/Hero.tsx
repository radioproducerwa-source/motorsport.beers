'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-beers-black">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#FFB800 1px, transparent 1px),
            linear-gradient(to right, #FFB800 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-beers-green/20 blur-[120px]" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/3 bg-gradient-to-t from-beers-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-32 sm:pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52">
            {/* Outer ring glow */}
            <div className="absolute inset-0 rounded-full bg-beers-gold/10 blur-xl" />
            {/* Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-beers-gold/30 animate-pulse" />
            {/* Inner circle */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-beers-surface to-beers-dark border border-beers-gold/20 flex flex-col items-center justify-center gap-1">
              <div className="font-display text-beers-gold text-4xl sm:text-5xl lg:text-6xl leading-none tracking-wider">
                BEERS
              </div>
              <div className="text-beers-white/40 text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-center px-2 leading-tight">
                Budget Extreme<br />Endurance Racing
              </div>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-wide text-beers-white leading-none mb-4"
        >
          BUDGET EXTREME
          <br />
          <span className="text-beers-gold">ENDURANCE RACING</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-beers-white/50 text-sm sm:text-base lg:text-lg tracking-[0.3em] uppercase mb-10"
        >
          &ldquo;Champagne Racing for Beer Money&rdquo;
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/events"
            className="group flex items-center gap-2 bg-beers-red hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all tracking-wide text-sm sm:text-base shadow-lg shadow-beers-red/20 hover:shadow-beers-red/40"
          >
            2026 Entries Open
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#about"
            className="flex items-center gap-2 border border-beers-white/30 hover:border-beers-gold/60 text-beers-white/80 hover:text-beers-gold font-medium px-8 py-4 rounded-lg transition-all tracking-wide text-sm sm:text-base bg-white/5 hover:bg-beers-gold/5"
          >
            Learn More
          </Link>
        </motion.div>

      </div>

      {/* Scroll indicator — fixed to section bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-beers-white/20 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-beers-white/20 to-transparent" />
      </motion.div>
    </section>
  )
}
