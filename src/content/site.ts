import formalSmilesImg from '@/assets/photos/formal_smiles.jpg'
import heroImg from '@/assets/photos/HERO.jpg'
import informalFunImg from '@/assets/photos/informal_fun.jpg'
import ringImg from '@/assets/photos/Ring.jpg'
import selasFavImg from '@/assets/photos/Selas_Fav.jpg'

export type SiteMode = 'planning' | 'day-of' | 'after'

export type Tbd = { status: 'tbd'; note?: string }
export type Ready<T> = { status: 'ready'; value: T }
export type Maybe<T> = Ready<T> | Tbd

export function isReady<T>(item: Maybe<T>): item is Ready<T> {
  return item.status === 'ready'
}

export const site = {
  mode: 'planning' as SiteMode,
  names: {
    display: 'Wesley & Sela',
    first: 'Wesley',
    second: 'Sela',
  },
  location: {
    city: 'Waxhaw',
    region: 'North Carolina',
    display: 'Waxhaw, North Carolina',
  },
  date: {
    display: 'Early June 2027',
    confirmed: false,
    iso: null as string | null,
  },
  email: 'selaandwesleyswedding@gmail.com',
  photographer: {
    name: 'David Lara',
    creditReady: true,
  },
  images: {
    hero: {
      src: heroImg,
      alt: 'Wesley and Sela leaning against a wooden fence at golden hour',
    },
    selasFav: {
      src: selasFavImg,
      alt: 'Sela laughing on Wesley’s shoulder under tree branches',
    },
    formalSmiles: {
      src: formalSmilesImg,
      alt: 'Wesley and Sela holding hands in a sunlit field',
    },
    informalFun: {
      src: informalFunImg,
      alt: 'Wesley and Sela laughing together outdoors',
    },
    ring: {
      src: ringImg,
      alt: 'Sela on Wesley’s back showing off her engagement ring',
    },
  },
  rsvp: {
    // Swap this when the Google Form is ready; placeholder is intentional.
    formUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    placeholder: true,
    deadline: null as string | null,
  },
  venue: {
    status: 'tbd',
    note: 'Waxhaw venue still being chosen.',
  } satisfies Tbd,
  parking: {
    status: 'tbd',
    note: 'Parking and rideshare pin once we have a venue.',
  } satisfies Tbd,
  schedule: {
    status: 'tbd',
    note: 'Ceremony, cocktail hour, and reception times once the date is locked.',
  } satisfies Tbd,
  itinerary: {
    status: 'tbd',
    note: 'Welcome drinks, rehearsal dinner, Sunday brunch — and who is invited to which.',
  } satisfies Tbd,
  hotels: {
    status: 'tbd',
    note: 'Hotel block, backup neighborhoods, and whether you need a car.',
  } satisfies Tbd,
  thingsToDo: {
    status: 'tbd',
    note: 'A short list of our actual favorites, not TripAdvisor.',
  } satisfies Tbd,
  registry: {
    amazon: { status: 'tbd', note: 'Amazon registry link coming.' } satisfies Tbd,
    venmo: { status: 'tbd', note: 'Venmo handle coming.' } satisfies Tbd,
    boxedGiftsOk: true,
  },
  photos: {
    status: 'tbd',
    note: 'Full wedding gallery link will go here after the weekend.',
  } satisfies Tbd,
  faq: [
    {
      q: 'What should we wear?',
      a: 'Summer semi-formal. The ceremony is outdoors on grass, and early June in North Carolina will be hot — dress like you might actually be outside. Bug spray is not a bad idea.',
    },
    {
      q: 'Can we take photos during the ceremony?',
      a: 'Please keep phones away for the ceremony. We want to look at you, not a row of cameras. Our photographer will catch it.',
    },
    {
      q: 'Is there a bar?',
      a: 'It is a dry wedding. Come for the people, stay for the cake.',
    },
    {
      q: 'Plus-ones?',
      a: 'If a plus-one is not on your invite, it is not a plus-one. If something changed and you need to ask, email us — we would rather hear from you than guess.',
    },
    {
      q: 'Gifts?',
      a: 'Amazon registry and Venmo are coming. Boxed gifts at the venue are welcome.',
    },
    {
      q: 'Where do we fly into?',
      a: 'Charlotte (CLT) is the move.',
    },
    {
      q: 'Need to change an RSVP or ask something else?',
      a: 'Email selaandwesleyswedding@gmail.com. A follow-up text from us is enough if you already replied and something shifted.',
    },
  ],
} as const

export type NavItem = {
  to: string
  label: string
  emphasis?: boolean
  modes: SiteMode[]
}

export const navItems: NavItem[] = [
  { to: '/', label: 'Home', modes: ['planning', 'day-of', 'after'] },
  { to: '/schedule', label: 'Schedule', modes: ['planning', 'day-of'] },
  { to: '/travel', label: 'Travel', modes: ['planning', 'day-of'] },
  {
    to: '/rsvp',
    label: 'RSVP',
    emphasis: true,
    modes: ['planning'],
  },
  { to: '/registry', label: 'Registry', modes: ['planning', 'after'] },
  { to: '/faq', label: 'FAQ', modes: ['planning', 'day-of', 'after'] },
]

export function navForMode(mode: SiteMode): NavItem[] {
  return navItems.filter((item) => item.modes.includes(mode))
}
