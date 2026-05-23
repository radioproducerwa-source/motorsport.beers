import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Information — BEERS',
  description: 'AASA licensing, officials, awards, and EOI BEERS Pit Garage information.',
}

const sections = [
  {
    id: 'aasa',
    title: 'AASA Licensing',
    content: [
      'All drivers must hold a current AASA (Australian Auto-Sport Alliance) General Speed Licence to participate in BEERS events.',
      'We do not accept MSA licences.',
      'You must present your AASA licence during the registration/sign-on process on the day of the event.',
      'Visit the AASA website to apply for or renew your General Speed Licence before your event.',
    ],
  },
  {
    id: 'officials',
    title: 'Officials',
    content: [
      'All BEERS events are run in accordance with AASA regulations and supervised by qualified officials.',
      'Officials have the final say on all on-track and pit lane decisions.',
      'Any queries regarding officiating should be directed to the Event Director at the venue.',
    ],
  },
  {
    id: 'awards',
    title: 'Awards',
    content: [
      'Awards are presented at the conclusion of each event, typically at the designated post-event celebration.',
      'Categories include: Overall Winner, Class Winners, Top 10 Shootout Champion, and Spirit of BEERS award.',
      'The Top 10 Shootout determines grid positions for the fastest teams — and earns serious bragging rights at the bar.',
    ],
  },
  {
    id: 'pit-garage',
    title: 'EOI — BEERS Pit Garage',
    content: [
      'The BEERS Pit Garage is an expression of interest programme for teams who require pit garage access at events.',
      'Pit garage spaces are limited and allocated on a first-come, first-served basis.',
      'To express your interest in a pit garage space, contact the event organisers via the registration process.',
      'Garage spaces include power, lighting, and a designated area for your team setup.',
    ],
  },
]

export default function InformationPage() {
  return (
    <div className="min-h-screen bg-beers-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-beers-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">Everything you need</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-beers-white tracking-wide">
            INFORMATION
          </h1>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-8 rounded-full bg-beers-gold" />
                <h2 className="font-display text-3xl sm:text-4xl text-beers-white tracking-wide">
                  {section.title}
                </h2>
              </div>
              <div className="bg-beers-surface border border-beers-green/20 rounded-2xl p-6 space-y-3">
                {section.content.map((para, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-beers-gold/40 mt-2 shrink-0" />
                    <p className="text-beers-white/70 text-sm leading-relaxed">{para}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
