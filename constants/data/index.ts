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
} from 'lucide-react';
import { Vertical, AboutContent, Service } from '@/types';

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
