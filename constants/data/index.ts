import {
  Scale,
  PenTool,
  Plane,
  Settings,
  SearchX,
  Gavel,
  History,
  Unlock,
  BarChart4,
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Zap,
  Award,
  Users,
  MessageSquare,
  Recycle,
  ArrowUpRight,
  Monitor,
} from 'lucide-react';
import {
  Vertical,
  AboutContent,
  Service,
  CompanyValues,
  EventCard,
} from '@/types';

// ... existing verticals and about content ...

export const COMPANY_VALUES: CompanyValues = {
  mission: {
    title: 'Our Mission',
    description:
      'To empower organizations worldwide through innovative, client-centric strategic partnerships and technology-enabled excellence.',
  },
  vision: {
    title: 'Our Vision',
    description:
      'To be the global leader in multi-disciplinary solutions, setting new benchmarks for quality, integrity, and sustainable growth.',
  },
  values: [
    {
      title: 'Integrity & Professionalism',
      description:
        'Maintain ethical standards and build trust through professional conduct.',
      icon: ShieldCheck,
    },
    {
      title: 'Excellence & Quality',
      description:
        'Deliver high-impact, relevant content and a top-tier conference experience.',
      icon: Award,
    },
    {
      title: 'Inclusivity & Diversity',
      description:
        'Champion equal access and ensure all voices are respected and heard.',
      icon: Users,
    },
    {
      title: 'Client & Community Focus',
      description:
        'Prioritize the needs of attendees and the legal community, adapting through feedback.',
      icon: Heart,
    },
    {
      title: 'Collaboration & Innovation',
      description:
        'Foster teamwork and embrace new ideas and technologies to enhance engagement.',
      icon: Zap,
    },
    {
      title: 'Sustainability & Responsibility',
      description:
        'Commit to environmentally responsible practices and promote long-term positive impact for our community and planet.',
      icon: Recycle,
    },
  ],
};

export const VERTICALS: Vertical[] = [
  {
    title: 'Bespoke Global Legal Summits',
    description:
      'Our flagship platform hosting high-level conferences in Dubai, Malaysia, India, and other global hubs for partners, counsel, and tech leaders.',
    icon: Scale,
    color: 'bg-indigo-500/15 text-indigo-500',
    link: 'https://www.bespokegls.com/',
  },
  {
    title: 'Patent Hub',
    description:
      'Technical illustrations, prior art support, and research-driven documentation ensuring precision and compliance for IP professionals globally.',
    icon: PenTool,
    color: 'bg-primary/15 text-primary',
    link: '/verticals/patent-hub',
  },
  {
    title: 'MICE Management',
    description:
      'Meetings, Incentives, Conferences, and Exhibitions management services delivering comprehensive and professional event solutions.',
    icon: Plane,
    color: 'bg-emerald-500/15 text-emerald-500',
    link: '/verticals/mice',
  },
  {
    title: 'Outsourcing & Tech Services',
    description:
      'Streamlining operations through data management, IT solutions, and customer acquisition strategies for global scalability.',
    icon: Settings,
    color: 'bg-amber-500/15 text-amber-500',
    link: '/verticals/outsourcing-tech',
  },
  {
    title: 'Digital Studio & Web Development',
    description:
      'High-performance website design, custom software development, and UI/UX solutions tailored for modern enterprises.',
    icon: Monitor,
    color: 'bg-blue-500/15 text-blue-500',
    link: '/verticals/web-dev',
  },
];

export const ABOUT_CONTENT: AboutContent = {
  badge: 'About Marching Frogs PVT LTD',
  title: {
    main: 'Global Multi-Disciplinary',
    highlight: 'Strategic Partners',
  },
  descriptions: [
    'Marching Frogs is a global, multi-disciplinary enterprise driven by a client-first philosophy and a commitment to delivering solutions that go beyond conventional service models. We place our clients at the centre of everything we do—working as strategic partners rather than service providers.',
    'As a parent company, Marching Frogs oversees and operates multiple specialised verticals, including global conference platforms, patent hubs, MICE management, and digital transformation studios.',
  ],
  features: [
    'Strategic Partnership Model',
    'Technology-Enabled Solutions',
    'Global Reach & Operations',
    'Client-Centric Excellence',
  ],
  integratedApproach: {
    title: 'Our Integrated Approach',
    description:
      'Marching Frogs provides outsourcing, IT, and operational solutions that help clients streamline processes, manage data professionally, and scale globally. Our approach combining analytics, research, technology, and skilled manpower enables clients to enhance operational efficiency and scale their businesses with confidence.',
    cta: 'Excel Everywhere',
  },
};

export const SERVICES: (Service & { color: string })[] = [
  {
    title: 'Invalidity / Opposition Search',
    description:
      'Comprehensive research to identify relevant prior art for challenging the validity of a patent in litigation or opposition proceedings.',
    icon: SearchX,
    color: 'bg-rose-500/15 text-rose-500',
  },
  {
    title: 'Infringement & Evidence of Use Search',
    description:
      'Analytical mapping of patent claims to products or standards to identify potential infringement and gather evidence of use.',
    icon: Gavel,
    color: 'bg-violet-500/15 text-violet-500',
  },
  {
    title: 'Prior Art Search',
    description:
      'Thorough investigation of existing technology and publications to determine the novelty and non-obviousness of an invention.',
    icon: History,
    color: 'bg-sky-500/15 text-sky-500',
  },
  {
    title: 'Freedom to Operate (FTO) Search',
    description:
      'Strategic analysis to identify active patents that may be infringed by the commercialization of a new product or technology.',
    icon: Unlock,
    color: 'bg-orange-500/15 text-orange-500',
  },
  {
    title: 'Patent Landscape & Competitive Intelligence',
    description:
      'In-depth analysis of patent trends and competitor portfolios to inform R&D strategy and identify market opportunities.',
    icon: BarChart4,
    color: 'bg-emerald-500/15 text-emerald-500',
  },
];

export const PROCESS_STEPS = [
  {
    title: 'Discovery & Analytics',
    description:
      'We dive deep into your operational landscape, using data-driven insights to identify growth bottlenecks and opportunities.',
    icon: Target,
  },
  {
    title: 'Strategic Integration',
    description:
      'Developing a bespoke roadmap where our technology and expert manpower integrate seamlessly with your existing workflows.',
    icon: Zap,
  },
  {
    title: 'Operational Excellence',
    description:
      'Executing with precision. Our multidisciplinary teams deploy solutions that optimize efficiency and ensure high-tier quality.',
    icon: Award,
  },
  {
    title: 'Scalable Growth',
    description:
      'Continuous monitoring and iterative improvements to ensure your organization is world-ready and future-proof.',
    icon: ArrowUpRight,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Marching Frogs has been a pivotal partner in our global IP strategy. Their precision and speed are unmatched in the industry.',
    author: 'Elena Rodriguez',
    role: 'Chief IP Counsel, TechCorp International',
    avatar: 'ER',
  },
  {
    quote:
      'The BGLS platform provided us with unprecedented access to legal leaders across the Middle East. Truly a world-class experience.',
    author: 'David Chen',
    role: 'Partner, Global Legal Solutions',
    avatar: 'DC',
  },
  {
    quote:
      'Their MICE management handled our ASEAN leadership summit with absolute professionalism and innovative flare.',
    author: 'Sarah Al-Maktoum',
    role: 'Director of Operations, Future Frontiers',
    avatar: 'SA',
  },
];

export const CONTACT_DATA = {
  title: 'Get in Touch',
  subtitle: 'Contact Us',
  description:
    "Have a project in mind or need expert advice? Reach out to us and let's explore how we can achieve excellence together.",
  email: 'info@marchingfrogs.com',
  phone: '+91 9711425481',
  address: 'Marching Frogs PVT LTD, Silicon Valley of India, Bangalore',
  locations: [
    {
      city: 'New Delhi',
      details:
        '216-A, Gautam Nagar Second Floor Above RGM Library, - 110049, India',
      coordinates: [77.5946, 12.9716],
    },
    {
      city: 'Patna',
      details: 'Head Office, Bihar',
      coordinates: [55.2708, 25.2048],
    },
  ],
};

export const events: EventCard[] = [
  {
    id: '1',
    title: 'BGLS 2025 DUBAI',
    date: '24-25 September, 2025',
    location: 'Park Regis Kris Kin',
    area: 'Dubai, UAE',
    image: '/events/1770402900977-21j28v95-dubai-event-2026.webp',
    description:
      'Successfully concluded! Join us for future editions of this premier legal Conference.',
    href: '/events/dubai-event',
  },
  {
    id: '2',
    title: 'BGLS 2025 DELHI',
    date: '13 November, 2025',
    location: 'Pride Plaza Aerocity, Delhi',
    area: 'Delhi, India',
    image: '/events/1769195655010-5k53gqeb-delhi.webp',
    description:
      'Explore emerging technologies and leadership strategies in the digital era.',
    href: '/events/delhi-event',
  },
  {
    id: '3',
    title: 'BGLS 2026 MALAYSIA',
    date: '14 January, 2026',
    location: 'AC, HOTEL BY MARRIOTT KUALA LUMPUR, MALAYSIA',
    area: 'Malaysia',
    image: '/events/1769195634563-b0toy67i-malaysia-event-new.webp',
    description:
      'Discover how artificial intelligence is transforming industries and creating new opportunities.',
    href: '/events/malaysia-event',
  },
  {
    id: '4',
    title: 'BGLS 2026 DUBAI',
    date: '30-31 March, 2026',
    location: 'Millennium Plaza Downtown Hotel, Dubai',
    area: 'Dubai, UAE',
    image: '/events/1770402900977-21j28v95-dubai-event-2026.webp',
    description:
      'Advancing excellence in legal practice and IP management, featuring discussions on legal technologies and cross-border dispute resolution.',
    href: '/events/dubai-legal-IP-event',
  },
  {
    id: '5',
    title: 'BGLS 2026  MUMBAI',
    date: '20 May, 2026',
    location: 'TBA',
    area: 'Mumbai, India',
    image: '/events/1769195712820-kdnlhfrg-mumbai-event.webp',
    description:
      'Join us for an exclusive legal Conference on Litigation, AI and Legal Tech with industry experts and networking opportunities.',
    href: '/events/mumbai-litigation-ai-legal-tech',
  },
  {
    id: '6',
    title: 'BGLS 2026  BANGALORE',
    date: '13 May, 2026',
    location: 'TBA',
    area: 'Bangalore, India',
    image: '/events/1769195699089-x8tbzdxo-bangalore.webp',
    description:
      'Join us for an exclusive legal Conference on Litigation, AI and Legal Tech with industry experts and networking opportunities.',
    href: '',
  },
  {
    id: '7',
    title: 'BGLS 2026 ADR SUMMIT DELHI',
    date: '15 July, 2026',
    location: 'TBA',
    area: 'Delhi, India',
    image: '/events/1769195587325-wdu8qf05-WhatsApp-Image-2026-01-22-at-6.webp',
    description:
      'Join us for an exclusive legal Conference on Litigation, AI and Legal Tech with industry experts and networking opportunities.',
    href: '',
  },
  {
    id: '8',
    title: 'BGLS 2026 RIYADH',
    date: '10-11 December, 2026',
    location: 'TBA',
    area: 'Riyadh, Saudi Arabia',
    image: '/events/1769195571008-u76bf4rf-WhatsApp-Image-2026-01-22-at-6.webp',
    description:
      'Join us for an exclusive legal Conference on Litigation, AI and Legal Tech with industry experts and networking opportunities.',
    href: '',
  },
  {
    id: '9',
    title: 'BGLS 2026 BANGKOK',
    date: '16-17 September, 2026',
    location: 'TBA',
    area: 'Bangkok, Thailand',
    image: '/events/1769195554427-rx9s1ffn-WhatsApp-Image-2026-01-22-at-6.webp',
    description:
      'Join us for an exclusive legal Conference on Litigation, AI and Legal Tech with industry experts and networking opportunities.',
    href: '',
  },
  {
    id: '10',
    title: 'BGLS 2026 DELHI',
    date: '26 November, 2026',
    location: 'TBA',
    area: 'Delhi, India',
    image: '/events/1769196462819-gkqbhr7u-delhi.webp',
    description:
      'Join us for an exclusive legal Conference on Litigation, AI and Legal Tech with industry experts and networking opportunities.',
    href: '',
  },
];
