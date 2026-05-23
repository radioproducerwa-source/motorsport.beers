import type { Metadata } from 'next'
import { Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gallery — BEERS',
  description: 'Photos and videos from Budget Extreme Endurance Racing Series events.',
}

const videos = [
  { id: 'oLokn2bfhkQ', title: 'Bar31 Race Event — Dawn Till Dusk', channel: 'Laubster Media' },
  { id: 'BEERS1000Apr22', title: 'BEERS 1000 April 2022 — Collie Motorplex', channel: 'Ian Jeffery Motors' },
  { id: 'BEERS1000Apr21', title: 'BEERS 1000 — Collie Motorplex April 2021', channel: 'Ian Jeffery Motors' },
  { id: 'BEERS2400Jul22', title: 'B.E.E.R.S 2400 — July 15th 2022', channel: 'Ian Jeffery Motors' },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-beers-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-beers-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">Media</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-beers-white tracking-wide">
            GALLERY
          </h1>
        </div>

        <h2 className="font-display text-2xl text-beers-white/60 tracking-wide mb-6">Video Highlights</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-video bg-beers-surface rounded-2xl overflow-hidden border border-beers-green/20 hover:border-beers-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-beers-green/20 to-beers-black flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-beers-red/90 group-hover:bg-beers-red flex items-center justify-center shadow-lg shadow-beers-red/30 transition-all group-hover:scale-110">
                  <Play size={24} className="text-white ml-1" fill="white" />
                </div>
              </div>

              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(#FFB800 1px, transparent 1px), linear-gradient(to right, #FFB800 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-beers-black via-beers-black/80 to-transparent p-5 pt-10">
                <p className="text-beers-white/90 font-medium leading-tight">{video.title}</p>
                <p className="text-beers-white/40 text-sm mt-1">{video.channel}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-beers-white/30 text-sm">
            Photo galleries from past events coming soon.
          </p>
        </div>
      </div>
    </div>
  )
}
