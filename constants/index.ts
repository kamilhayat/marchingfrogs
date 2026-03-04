import { NavLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Our Verticals',
    href: '#verticals',
    items: [
      {
        title: 'Bespoke Global Legal Summits',
        href: 'https://www.bespokegls.com/',
        description:
          'Flagship global events platform for legal and tech leaders.',
      },
      {
        title: 'Patent Drawing Hub',
        href: 'https://www.patentdrawinghub.com/',
        description:
          'Specialised patent illustrations and IP research support.',
      },
      {
        title: 'MICE Management',
        href: '/verticals/mice',
        description: 'Comprehensive meeting and exhibition solutions.',
      },
      {
        title: 'Outsourcing & Tech Services',
        href: '/verticals/outsourcing-tech',
        description: 'Data-driven operational and IT solutions.',
      },
      {
        title: 'Digital Studio & Web Development',
        href: '/verticals/web-dev',
        description: 'High-performance website design and software solutions.',
      },
    ],
  },
  {
    title: 'About Us',
    href: '#about',
  },
  {
    title: 'Events',
    href: '#events',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

export * from './data';
