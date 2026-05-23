import Link from 'next/link'
import { events2026 } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-beers-dark border-t border-beers-green/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-beers-gold text-3xl tracking-wide mb-2">BEERS</div>
            <p className="text-beers-white/40 text-xs tracking-widest uppercase mb-4">
              Budget Extreme Endurance Racing Series
            </p>
            <p className="text-beers-white/60 text-sm leading-relaxed">
              &ldquo;Champagne racing for beer money.&rdquo; Western Australia&apos;s most exciting budget endurance racing series.
            </p>
          </div>

          {/* 2026 Events */}
          <div>
            <h3 className="font-display text-beers-white text-lg tracking-wide mb-4">2026 Events</h3>
            <ul className="space-y-2">
              {events2026.map((event) => (
                <li key={event.slug}>
                  <Link
                    href={`/events/${event.slug}`}
                    className="text-beers-white/50 hover:text-beers-gold text-sm transition-colors"
                  >
                    {event.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-display text-beers-white text-lg tracking-wide mb-4">Information</h3>
            <ul className="space-y-2">
              {[
                { label: 'Spectators', href: '/spectators' },
                { label: 'Results', href: '/results' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Past Events', href: '/past-events' },
                { label: 'AASA Licensing', href: '/information#aasa' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-beers-white/50 hover:text-beers-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enter */}
          <div>
            <h3 className="font-display text-beers-white text-lg tracking-wide mb-4">Race Entry</h3>
            <p className="text-beers-white/50 text-sm mb-4 leading-relaxed">
              2026 entries are open. Secure your spot before entries sell out.
            </p>
            <Link
              href="/events"
              className="inline-block bg-beers-red hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors tracking-wide"
            >
              View 2026 Events →
            </Link>

            <div className="mt-6">
              <p className="text-beers-white/30 text-xs mb-2">Sanctioned by</p>
              <div className="font-display text-beers-white/60 text-sm tracking-widest">AASA</div>
              <p className="text-beers-white/30 text-[10px]">Australian Auto-Sport Alliance</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-beers-green/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-beers-white/30 text-xs">
            © {new Date().getFullYear()} Budget Extreme Endurance Racing Series. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/faq" className="text-beers-white/30 hover:text-beers-white/60 text-xs transition-colors">
              FAQ
            </Link>
            <span className="text-beers-white/20">·</span>
            <Link href="/information" className="text-beers-white/30 hover:text-beers-white/60 text-xs transition-colors">
              Information
            </Link>
            <span className="text-beers-white/20">·</span>
            <Link href="/spectators" className="text-beers-white/30 hover:text-beers-white/60 text-xs transition-colors">
              Spectators
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
