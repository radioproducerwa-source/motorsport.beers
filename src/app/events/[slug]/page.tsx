import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, MapPin, Users, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react'
import { events2026 } from '@/lib/data'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return events2026.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const event = events2026.find((e) => e.slug === slug)
  if (!event) return {}
  return {
    title: `${event.name} — BEERS`,
    description: `${event.theme} | ${event.dateRange} at ${event.venue}`,
  }
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params
  const event = events2026.find((e) => e.slug === slug)
  if (!event) notFound()

  const accent = event.accentColor
  const accentDark = event.accentColorDark

  return (
    <div className="min-h-screen" style={{ backgroundColor: accentDark }}>
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden pt-20"
        style={{ backgroundColor: accentDark }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(${accent} 1px, transparent 1px),
              linear-gradient(to right, ${accent} 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Four-leaf clovers — Emerald event only */}
        {event.backgroundDecoration === 'clovers' && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {([
              { left: '4%',  top: '10%', size: 80,  opacity: 0.09, rotation: 12  },
              { left: '83%', top: '7%',  size: 52,  opacity: 0.08, rotation: -20 },
              { left: '2%',  top: '55%', size: 44,  opacity: 0.06, rotation: 48  },
              { left: '89%', top: '50%', size: 68,  opacity: 0.07, rotation: -38 },
              { left: '14%', top: '80%', size: 58,  opacity: 0.08, rotation: 25  },
              { left: '74%', top: '76%', size: 40,  opacity: 0.06, rotation: -14 },
              { left: '44%', top: '4%',  size: 34,  opacity: 0.05, rotation: 65  },
              { left: '57%', top: '87%', size: 46,  opacity: 0.07, rotation: -55 },
              { left: '28%', top: '38%', size: 30,  opacity: 0.04, rotation: 82  },
              { left: '68%', top: '28%', size: 38,  opacity: 0.05, rotation: -70 },
              { left: '38%', top: '68%', size: 26,  opacity: 0.04, rotation: 33  },
              { left: '91%', top: '22%', size: 32,  opacity: 0.05, rotation: 110 },
            ] as const).map((c, i) => (
              <svg
                key={i}
                viewBox="-22 -24 44 42"
                width={c.size}
                height={c.size}
                className="absolute"
                style={{
                  left: c.left,
                  top: c.top,
                  opacity: c.opacity,
                  transform: `rotate(${c.rotation}deg)`,
                  color: accent,
                }}
              >
                {/* Four leaves — overlapping circles */}
                <ellipse cx="0"  cy="-8" rx="8" ry="9" fill="currentColor" />
                <ellipse cx="8"  cy="0"  rx="9" ry="8" fill="currentColor" />
                <ellipse cx="0"  cy="8"  rx="8" ry="9" fill="currentColor" />
                <ellipse cx="-8" cy="0"  rx="9" ry="8" fill="currentColor" />
                {/* Stem */}
                <line x1="0" y1="12" x2="0" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            ))}
          </div>
        )}

        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-[100px]"
          style={{ backgroundColor: accent }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-beers-black to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-12 transition-colors"
          >
            <ArrowLeft size={14} />
            All 2026 Events
          </Link>

          {/* BEERS badge */}
          <div className="flex justify-center mb-8">
            <div
              className="w-24 h-24 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: `${accent}60` }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${accent}20` }}
              >
                <span className="font-display text-3xl tracking-wide" style={{ color: accent }}>
                  BEERS
                </span>
              </div>
            </div>
          </div>

          {/* Event name */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none mb-4">
            {event.shortName.split(' ').map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h1>

          {/* Theme */}
          <p className="text-white/50 text-sm tracking-[0.2em] uppercase mt-4">{event.theme}</p>
        </div>
      </section>

      {/* Main content */}
      <div className="bg-beers-black">
        {/* Event details strip */}
        <section className="py-12 border-b border-beers-green/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {/* Teams entered */}
              {event.teamsEntered > 0 && (
                <div
                  className="sm:col-span-3 flex justify-center mb-4"
                >
                  <div
                    className="inline-flex flex-col items-center px-12 py-6 rounded-2xl border-2"
                    style={{ borderColor: accent, backgroundColor: `${accent}10` }}
                  >
                    <div className="flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase mb-1">
                      <Users size={13} />
                      Teams Entered
                    </div>
                    <div className="font-display text-6xl" style={{ color: accent }}>
                      {event.teamsEntered}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: `${accent}20` }}
                >
                  <Calendar size={15} style={{ color: accent }} />
                </div>
                <div>
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-1">When</p>
                  <p className="text-white font-medium text-sm">{event.dateRange}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: `${accent}20` }}
                >
                  <MapPin size={15} style={{ color: accent }} />
                </div>
                <div>
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-1">Where</p>
                  <p className="text-white font-medium text-sm">{event.venue}</p>
                  {event.address !== 'TBA' && (
                    <p className="text-white/40 text-xs mt-0.5">{event.address}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: `${accent}20` }}
                >
                  <span className="text-xs font-bold" style={{ color: accent }}>T</span>
                </div>
                <div>
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-1">Theme</p>
                  <p className="text-white font-medium text-sm">{event.theme}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing — only if available */}
        {event.pricingTiers.length > 0 && (
          <section className="py-16 lg:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wide text-center mb-10">
                DRIVER ENTRIES
              </h2>

              <div className="space-y-4">
                {event.pricingTiers.map((tier, i) => (
                  <a
                    key={tier.name}
                    href={tier.squareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      borderColor: i === 0 ? accent : `${accent}30`,
                      backgroundColor: i === 0 ? `${accent}15` : `${accent}08`,
                    }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        {i === 0 && (
                          <span
                            className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded"
                            style={{ backgroundColor: accent, color: accentDark || '#000' }}
                          >
                            Best Value
                          </span>
                        )}
                        <p className="text-white font-semibold text-sm">{tier.name}</p>
                      </div>
                      <p className="text-white/40 text-xs">{tier.period}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl" style={{ color: accent }}>
                        {tier.price}
                      </span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                        style={{ color: accent }}
                      />
                    </div>
                  </a>
                ))}
              </div>

              {/* Registration + Refund buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                <a
                  href={event.driverRegistrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg border text-white/70 hover:text-white text-sm transition-colors"
                  style={{ borderColor: `${accent}30` }}
                >
                  <ExternalLink size={14} />
                  Driver Registration Form
                </a>
                <a
                  href={event.refundPolicyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg border text-white/70 hover:text-white text-sm transition-colors"
                  style={{ borderColor: `${accent}30` }}
                >
                  <ExternalLink size={14} />
                  Refund Policy
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Pit Crew section */}
        {event.pricingTiers.length > 0 && (
          <section
            className="py-16 lg:py-20 border-t"
            style={{ borderColor: `${accent}20` }}
          >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center mb-8">
                <div className="text-center">
                  <p
                    className="text-xs tracking-[0.3em] uppercase font-medium mb-2"
                    style={{ color: accent }}
                  >
                    AASA — Australian Auto-Sport Alliance
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wide">
                    PIT CREW
                  </h2>
                </div>
              </div>

              {/* FYI points */}
              <div
                className="rounded-2xl border p-6 mb-6 space-y-3"
                style={{ borderColor: `${accent}20`, backgroundColor: `${accent}08` }}
              >
                <h3 className="font-display text-lg text-white tracking-wide mb-4">Important FYI</h3>
                {[
                  'Teams must register their pit crew for participation in each event.',
                  'Pit crew members are required to pay a fee of $20, which includes their entry and insurance for access to the pit bay area.',
                  'During driver registration, pit crew members must sign on and complete a pit crew indemnity waiver form.',
                  'Teams may only have a maximum of five (5) pit crew. No persons under the age of sixteen (16) are allowed in the pit area.',
                  'You are required to bring a hard copy of the completed form to sign-on, where you will receive a wristband in exchange.',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: accent }}
                    />
                    <p className="text-white/60 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              {/* Pit crew action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Pay Pit Crew', href: event.pitCrewPayUrl },
                  { label: 'Register Pit Crew', href: event.pitCrewRegisterUrl },
                  { label: 'AASA Pit Crew Indemnity', href: event.aasaPitCrewIndemnityUrl },
                ].map((btn) => (
                  <a
                    key={btn.label}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: accent, color: accentDark || '#000' }}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>

              <p className="text-white/30 text-xs text-center mt-6 leading-relaxed">
                All drivers must hold a current AASA General Speed Licence and are required to present their
                AASA licence during the registration/sign-on process on the day of the event.
              </p>
            </div>
          </section>
        )}

        {/* Coming soon placeholder */}
        {event.pricingTiers.length === 0 && (
          <section className="py-20 text-center">
            <div className="max-w-md mx-auto px-4">
              <div
                className="w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto mb-6"
                style={{ borderColor: `${accent}40` }}
              >
                <span className="font-display text-2xl" style={{ color: accent }}>?</span>
              </div>
              <h2 className="font-display text-3xl text-white tracking-wide mb-3">COMING SOON</h2>
              <p className="text-white/40 text-sm mb-8">
                Details for this event are being finalised. Subscribe below to be notified when entries open.
              </p>
              <Link
                href="/#subscribe"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-lg text-sm font-medium"
                style={{ backgroundColor: accent, color: accentDark || '#000' }}
              >
                Get Notified
                <ArrowRight size={15} />
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
