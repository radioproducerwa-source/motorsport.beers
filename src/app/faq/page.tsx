'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '@/lib/data'

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-beers-black pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-beers-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">Need to know</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-beers-white tracking-wide">
            FAQ
          </h1>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="bg-beers-surface border border-beers-green/20 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-beers-green/5 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-beers-white font-medium text-sm sm:text-base pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-beers-gold/50 shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {open === i && (
                <div className="px-5 pb-5 border-t border-beers-green/10">
                  <p className="text-beers-white/60 text-sm leading-relaxed pt-4">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
