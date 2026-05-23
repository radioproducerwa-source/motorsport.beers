import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

const bebas = Bebas_Neue({
  weight: '400',
  variable: '--font-bebas',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BEERS — Budget Extreme Endurance Racing Series',
  description: 'Champagne racing for beer money. Western Australia\'s premier budget endurance racing series. Enter the BAR31 BEERS 1000, BEERS 2400, and more.',
  keywords: 'BEERS, Budget Extreme Endurance Racing, BAR31, motorsport, endurance racing, Western Australia, Wanneroo Raceway, Collie Motorplex',
  openGraph: {
    title: 'BEERS — Budget Extreme Endurance Racing Series',
    description: 'Champagne racing for beer money.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="bg-beers-black text-beers-white min-h-screen flex flex-col font-sans antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
