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
} from 'lucide-react';
import { Vertical, AboutContent, Service, CompanyValues } from '@/types';

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
    color: 'bg-blue-500/10 text-blue-500',
    link: '/verticals/bgls',
  },
  {
    title: 'Patent Drawing Hub',
    description:
      'Technical illustrations, prior art support, and research-driven documentation ensuring precision and compliance for IP professionals globally.',
    icon: PenTool,
    color: 'bg-primary/10 text-primary',
    link: '/verticals/patent-drawing-hub',
  },
  {
    title: 'MICE Management',
    description:
      'Meetings, Incentives, Conferences, and Exhibitions management services delivering comprehensive and professional event solutions.',
    icon: Plane,
    color: 'bg-accent/10 text-accent',
    link: '/verticals/mice',
  },
  {
    title: 'Outsourcing & Tech Services',
    description:
      'Streamlining operations through data management, IT solutions, and customer acquisition strategies for global scalability.',
    icon: Settings,
    color: 'bg-secondary-foreground/10 text-secondary-foreground',
    link: '/verticals/outsourcing-tech',
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
    'As a parent company, Marching Frogs oversees and operates multiple specialised verticals, including global conference platforms, patent illustration hubs, MICE management, and technology-enabled business services.',
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

export const SERVICES: Service[] = [
  {
    title: 'Invalidity / Opposition Search',
    description:
      'Comprehensive research to identify relevant prior art for challenging the validity of a patent in litigation or opposition proceedings.',
    icon: SearchX,
  },
  {
    title: 'Infringement & Evidence of Use Search',
    description:
      'Analytical mapping of patent claims to products or standards to identify potential infringement and gather evidence of use.',
    icon: Gavel,
  },
  {
    title: 'Prior Art Search',
    description:
      'Thorough investigation of existing technology and publications to determine the novelty and non-obviousness of an invention.',
    icon: History,
  },
  {
    title: 'Freedom to Operate (FTO) Search',
    description:
      'Strategic analysis to identify active patents that may be infringed by the commercialization of a new product or technology.',
    icon: Unlock,
  },
  {
    title: 'Patent Landscape & Competitive Intelligence',
    description:
      'In-depth analysis of patent trends and competitor portfolios to inform R&D strategy and identify market opportunities.',
    icon: BarChart4,
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
  phone: '+91 123 456 7890',
  address: 'Marching Frogs PVT LTD, Silicon Valley of India, Bangalore',
  locations: [
    {
      city: 'Bangalore',
      details: 'Corporate Headquarters, India',
      coordinates: [77.5946, 12.9716],
    },
    {
      city: 'Dubai',
      details: 'Strategic Hub, UAE',
      coordinates: [55.2708, 25.2048],
    },
    {
      city: 'Malaysia',
      details: 'Regional Office, SE Asia',
      coordinates: [101.6869, 3.139],
    },
  ],
};
