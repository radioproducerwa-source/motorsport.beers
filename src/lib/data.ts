export type PricingTier = {
  name: string
  price: string
  period: string
  squareUrl: string
}

export type Event = {
  slug: string
  name: string
  shortName: string
  theme: string
  dateRange: string
  venue: string
  address: string
  teamsEntered: number
  accentColor: string
  accentColorDark: string
  pricingTiers: PricingTier[]
  driverRegistrationUrl: string
  refundPolicyUrl: string
  pitCrewPayUrl: string
  pitCrewRegisterUrl: string
  aasaPitCrewIndemnityUrl: string
  status: 'upcoming' | 'past'
  youtubeEmbedIds?: string[]
}

export type PastEvent = {
  name: string
  slug: string
  date: string
  venue: string
}

export type Sponsor = {
  name: string
  tier: 'title' | 'major' | 'associate'
}

export const events2026: Event[] = [
  {
    slug: 'emerald-endurance-1000',
    name: 'BAR31 Emerald Endurance 1000',
    shortName: 'Emerald Endurance 1000',
    theme: 'A St. Patrick\'s Day Special',
    dateRange: 'Thursday 26th – Saturday 28th March 2026',
    venue: 'MotorMall Wanneroo Raceway',
    address: '440 Wattle Ave E, Neerabup WA 6031',
    teamsEntered: 22,
    accentColor: '#16a34a',
    accentColorDark: '#14532d',
    pricingTiers: [
      {
        name: 'Early Bird Entries',
        price: 'A$650',
        period: '14th Nov – 30th Nov',
        squareUrl: 'https://checkout.square.site/merchant/MLJCKMSCKTAB0/checkout/HZ2AKATEU7JHDPFOVISFMFQQ',
      },
      {
        name: 'First Release Entries',
        price: 'A$750',
        period: '1st Dec – 26th Feb',
        squareUrl: 'https://checkout.square.site/merchant/MLJCKMSCKTAB0/checkout/HZ2AKATEU7JHDPFOVISFMFQQ',
      },
      {
        name: "You're Late, Be Better",
        price: 'A$800',
        period: '26th Feb – 25th March',
        squareUrl: 'https://checkout.square.site/merchant/MLJCKMSCKTAB0/checkout/HZ2AKATEU7JHDPFOVISFMFQQ',
      },
    ],
    driverRegistrationUrl: '#',
    refundPolicyUrl: '#',
    pitCrewPayUrl: '#',
    pitCrewRegisterUrl: '#',
    aasaPitCrewIndemnityUrl: '#',
    status: 'upcoming',
    youtubeEmbedIds: [],
  },
  {
    slug: 'keelan-cup-1000',
    name: 'BAR31 Keelan Cup 1000',
    shortName: 'Keelan Cup 1000',
    theme: 'Coming Soon',
    dateRange: 'TBA — 2026',
    venue: 'TBA',
    address: 'TBA',
    teamsEntered: 0,
    accentColor: '#FFB800',
    accentColorDark: '#78350f',
    pricingTiers: [],
    driverRegistrationUrl: '#',
    refundPolicyUrl: '#',
    pitCrewPayUrl: '#',
    pitCrewRegisterUrl: '#',
    aasaPitCrewIndemnityUrl: '#',
    status: 'upcoming',
  },
  {
    slug: 'the-36-hour-day',
    name: 'BAR31 The 36 Hour Day',
    shortName: 'The 36 Hour Day',
    theme: 'Coming Soon',
    dateRange: 'TBA — 2026',
    venue: 'TBA',
    address: 'TBA',
    teamsEntered: 0,
    accentColor: '#FF6B00',
    accentColorDark: '#7c2d12',
    pricingTiers: [],
    driverRegistrationUrl: '#',
    refundPolicyUrl: '#',
    pitCrewPayUrl: '#',
    pitCrewRegisterUrl: '#',
    aasaPitCrewIndemnityUrl: '#',
    status: 'upcoming',
  },
  {
    slug: 'november-1000',
    name: 'BAR31 November 1000',
    shortName: 'November 1000',
    theme: 'Coming Soon',
    dateRange: 'November 2026 (TBA)',
    venue: 'TBA',
    address: 'TBA',
    teamsEntered: 0,
    accentColor: '#CC1100',
    accentColorDark: '#7f1d1d',
    pricingTiers: [],
    driverRegistrationUrl: '#',
    refundPolicyUrl: '#',
    pitCrewPayUrl: '#',
    pitCrewRegisterUrl: '#',
    aasaPitCrewIndemnityUrl: '#',
    status: 'upcoming',
  },
]

export const pastEvents: PastEvent[] = [
  { name: 'BAR31 1000 — Collie October 2025', slug: 'bar31-1000-collie-oct-2025', date: 'October 2025', venue: 'Collie Motorplex, WA' },
  { name: 'BAR31 2400 — Wanneroo June 2025', slug: 'bar31-2400-wanneroo-jun-2025', date: 'June 2025', venue: 'Wanneroo Raceway, WA' },
  { name: 'BAR31 1000 — Collie April 2025', slug: 'bar31-1000-collie-apr-2025', date: 'April 2025', venue: 'Collie Motorplex, WA' },
  { name: 'BAR31 1000 — Collie April 2024', slug: 'bar31-1000-collie-apr-2024', date: 'April 2024', venue: 'Collie Motorplex, WA' },
  { name: 'BAR31 2400 — Wanneroo June 2024', slug: 'bar31-2400-wanneroo-jun-2024', date: 'June 2024', venue: 'Wanneroo Raceway, WA' },
  { name: 'BAR31 1000 — Collie October 2024', slug: 'bar31-1000-collie-oct-2024', date: 'October 2024', venue: 'Collie Motorplex, WA' },
]

export const sponsors: Sponsor[] = [
  { name: 'BAR31', tier: 'title' },
  { name: 'TOLICCS Workshop Supplies', tier: 'major' },
  { name: 'Ian Jeffery Motorsport', tier: 'major' },
  { name: 'Ian Jeffery Motors', tier: 'major' },
  { name: 'Sir Henrys Northbridge', tier: 'associate' },
  { name: 'Mezzstor', tier: 'associate' },
  { name: 'Malaga Pit Inspections', tier: 'associate' },
]

export const raceFormats = [
  {
    name: 'Top 10 Shootout',
    description: 'The top 10 fastest teams in practice get to shootout for bragging rights — at the bar.',
    icon: '🏆',
  },
  {
    name: 'BEERS 1000',
    description: '1000 minutes of racing across two days — 9 hours on day one, 8 hours on day two. Pure endurance.',
    icon: '🏁',
  },
  {
    name: 'BEERS 2400',
    description: '24 hours of non-stop endurance racing. The ultimate test of car, crew and budget.',
    icon: '⏱️',
  },
]

export const tracks = [
  {
    name: 'Wanneroo Raceway',
    location: 'Neerabup, WA',
    fullName: 'MotorMall Wanneroo Raceway',
    description: "Perth's premier motorsport venue. Home to the BEERS 1000 and 2400.",
    mapsUrl: 'https://maps.google.com/?q=440+Wattle+Ave+E,+Neerabup+WA+6031',
  },
  {
    name: 'Collie Motorplex',
    location: 'Collie, WA',
    fullName: 'CARCO.com.au Raceway',
    description: 'Regional racing at its absolute finest. A true test of team endurance.',
    mapsUrl: 'https://maps.google.com/?q=Collie+Motorplex+WA',
  },
  {
    name: 'Hidden Valley Raceway',
    location: 'Darwin, NT',
    fullName: 'Hidden Valley Motor Sports Complex',
    description: 'Racing in the Territory. Speed, heat, and horizon as far as you can see.',
    mapsUrl: 'https://maps.google.com/?q=Hidden+Valley+Motor+Sports+Complex+Darwin',
  },
]

export const youtubeVideos = [
  { id: 'oLokn2bfhkQ', title: 'Bar31 Race event — Dawn Till Dusk', channel: 'Laubster Media' },
  { id: 'BEERS1000Apr22', title: 'BEERS 1000 April 2022 — Collie Motorplex', channel: 'Ian Jeffery Motors' },
  { id: 'BEERS1000Apr21', title: 'BEERS 1000 — Collie Motorplex April 2021', channel: 'Ian Jeffery Motors' },
  { id: 'BEERS2400Jul22', title: 'B.E.E.R.S 2400 — July 15th 2022', channel: 'Ian Jeffery Motors' },
]

export const faqItems = [
  {
    question: 'What is the BEERS racing series?',
    answer: 'B.E.E.R.S stands for Budget Extreme Endurance Racing Series. Born in Western Australia, we provide affordable track time for teams who love racing but want to keep costs manageable. Champagne racing for beer money.',
  },
  {
    question: 'What licence do I need to enter?',
    answer: 'All drivers must hold a current AASA (Australian Auto-Sport Alliance) General Speed Licence. We do not accept MSA licences. You must present your licence during registration sign-on on the day of the event.',
  },
  {
    question: 'What are the pit crew rules?',
    answer: 'Teams may have a maximum of five (5) pit crew. All pit crew members must register and pay a $20 fee, which covers entry and insurance for pit bay access. No persons under the age of 16 are permitted in the pit area.',
  },
  {
    question: 'What is the refund policy?',
    answer: 'Refunds are not available after either 28 days from the date of purchase, or 28 days before the scheduled event date — whichever comes first. All sales are final once this period has passed. Credits for future events may be issued at the event organiser\'s discretion.',
  },
  {
    question: 'Can I enter as a spectator?',
    answer: 'Yes! Spectators are welcome at all BEERS events. Check the Spectators page for information on gate times, what to bring, and venue details.',
  },
  {
    question: 'How do I register my pit crew?',
    answer: 'Pit crew registration is done through the specific event page. Each crew member must complete the registration form and pay the $20 fee before the event. You will need to bring a hard copy of the completed AASA Pit Crew Indemnity form to sign-on.',
  },
]
