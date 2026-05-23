'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { events2026, pastEvents } from '@/lib/data'

const navLinks = [
  {
    label: '2026 Events',
    href: '/events',
    dropdown: events2026.map((e) => ({ label: e.shortName, href: `/events/${e.slug}` })),
  },
  {
    label: 'Past Events',
    href: '/past-events',
    dropdown: pastEvents.map((e) => ({ label: e.name, href: `/past-events` })),
  },
  {
    label: 'Information',
    href: '/information',
    dropdown: [
      { label: 'AASA', href: '/information#aasa' },
      { label: 'Officials', href: '/information#officials' },
      { label: 'Awards', href: '/information#awards' },
      { label: 'EOI BEERS Pit Garage', href: '/information#pit-garage' },
    ],
  },
  { label: 'Spectators', href: '/spectators' },
  { label: 'Results', href: '/results' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-beers-black/95 backdrop-blur-md border-b border-beers-green/30 shadow-lg shadow-black/50'
          : 'bg-gradient-to-b from-beers-black/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-beers-green/30 border border-beers-gold/30 flex items-center justify-center">
              <span className="font-display text-beers-gold text-sm lg:text-base leading-none">B</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-beers-gold text-lg lg:text-xl leading-none tracking-wide">BEERS</div>
              <div className="text-beers-white/50 text-[10px] tracking-widest uppercase leading-none mt-0.5">
                Budget Extreme Endurance Racing
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-md ${
                    pathname.startsWith(link.href) && link.href !== '/'
                      ? 'text-beers-gold'
                      : 'text-beers-white/70 hover:text-beers-white'
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {link.dropdown && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-beers-dark border border-beers-green/30 rounded-lg shadow-xl shadow-black/50 overflow-hidden">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-beers-white/70 hover:text-beers-white hover:bg-beers-green/20 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/events"
              className="hidden sm:inline-flex items-center gap-2 bg-beers-red hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors tracking-wide"
            >
              Enter a Race
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-beers-white/70 hover:text-beers-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-beers-dark border-t border-beers-green/30 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-3 py-2.5 text-sm font-medium text-beers-white/80 hover:text-beers-gold hover:bg-beers-green/10 rounded-md transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 mt-1 space-y-1 border-l border-beers-green/20 ml-3">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-3 py-2 text-xs text-beers-white/50 hover:text-beers-white/80 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-beers-green/20">
              <Link
                href="/events"
                className="block text-center bg-beers-red hover:bg-red-700 text-white text-sm font-semibold px-4 py-3 rounded-md transition-colors tracking-wide"
              >
                Enter a Race
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
