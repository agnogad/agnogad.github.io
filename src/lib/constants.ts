export const SITE = {
  title: 'Agnogad',
  description: 'Bilim, felsefe ve psikoloji uzerine kendi arguman ve fikirlerimle yazdigim makaleler.',
  url: 'https://agnogad.github.io',
  author: 'Agnogad',
  authorEmail: 'agnogad@example.com',
  language: 'tr',
  ogImage: '/og-default.png',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Anasayfa' },
  { href: '/tags', label: 'Etiketler' },
  { href: '/about', label: 'Hakkında' },
] as const;

export const BOTTOM_NAV_ITEMS = [
  { href: '/', label: 'Anasayfa', icon: 'home' },
  { href: '/tags', label: 'Etiketler', icon: 'tag' },
  { href: '/', label: 'Ara', icon: 'search', search: true },
  { href: '/about', label: 'Hakkında', icon: 'info' },
] as const;
