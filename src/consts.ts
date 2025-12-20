import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Daniel Honus',
  description:
    'A log about web development, programming, and technology.',
  href: 'https://danielhonus.com',
  author: 'dhonus',
  locale: 'en-US',
  featuredPostCount: 4,
  postsPerPage: 6,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/log',
    label: 'log',
  },
  // {
  //   href: '/authors',
  //   label: 'authors',
  // },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/dhonus',
    label: 'GitHub',
  },
  {
    href: 'mailto:hello@danielhonus.com',
    label: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/daniel-honus-5166b4361/',
    label: 'LinkedIn',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
