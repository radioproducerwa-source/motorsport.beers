import Hero from '@/components/home/Hero'
import AboutSection from '@/components/home/AboutSection'
import UpcomingEvents from '@/components/home/UpcomingEvents'
import RaceFormats from '@/components/home/RaceFormats'
import TracksSection from '@/components/home/TracksSection'
import MediaSection from '@/components/home/MediaSection'
import SponsorsStrip from '@/components/home/SponsorsStrip'
import SubscribeSection from '@/components/home/SubscribeSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <UpcomingEvents />
      <RaceFormats />
      <TracksSection />
      <MediaSection />
      <SponsorsStrip />
      <SubscribeSection />
    </>
  )
}
