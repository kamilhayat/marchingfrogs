import {
  Plane,
  Settings,
  Monitor,
  Layout,
  Database,
  Code,
  Target,
  Users,
  Zap,
  Globe,
} from 'lucide-react';

export const VERTICAL_DETAILS = {
  mice: {
    title: 'MICE Management',
    tagline: 'Elevating Global Presence through Strategic Event Excellence.',
    description:
      'MICE (Meetings, Incentives, Conferences, and Exhibitions) is an integral part of the global corporate event landscape. Our expert management ensures that every event is not just an assembly, but a strategic platform for growth, branding, and industry leadership.',
    icon: Plane,
    color: 'emerald',
    features: [
      {
        title: 'Corporate Meetings',
        description:
          'Elite board meetings and executive sessions planned for absolute privacy and impact.',
        icon: Users,
      },
      {
        title: 'Incentive Programs',
        description:
          'Global reward travel and exclusive experiences to motivate and retain high-performers.',
        icon: Target,
      },
      {
        title: 'Global Conferences',
        description:
          'Large-scale industry summits with world-class speakers and ironclad logistics.',
        icon: Globe,
      },
      {
        title: 'Premium Exhibitions',
        description:
          'Technologically advanced exhibition setups designed for maximum attendee engagement.',
        icon: Layout,
      },
    ],
    strategyTitle: 'The MICE Strategy',
    strategyDesc:
      'We manage the logistics so you can focus on the impact. From conceptual planning to on-site execution, our MICE specialists bring worldwide expertise to local destinations, ensuring a seamless experience across all global hubs.',
    ctaText: 'Planning an Event?',
    projectTypes: [
      'Corporate Meeting',
      'Incentive Program',
      'Global Conference',
      'Premium Exhibition',
      'Event Technology Setup',
      'Other',
    ],
  },
  'outsourcing-tech': {
    title: 'Outsourcing & Tech Services',
    tagline: 'Seamless Operations Powered by High-Performance Technology.',
    description:
      'Our outsourcing and tech services enable global scaling through precise research, operational data management, and business process automation. We integrate our tech stacks with your team to maximize efficiency and reduce operational overhead.',
    icon: Settings,
    color: 'amber',
    features: [
      {
        title: 'Business Outsourcing',
        description:
          'Strategic BPO solutions designed to optimize cost and performance at scale.',
        icon: Zap,
      },
      {
        title: 'Data Management',
        description:
          'Professional data cleaning, migration, and real-time management for global databases.',
        icon: Database,
      },
      {
        title: 'IT Operations',
        description:
          'Full-spectrum IT support including cloud solutions and infrastructure maintenance.',
        icon: Code,
      },
      {
        title: 'Customer Acquisition',
        description:
          'Data-driven strategies to grow your customer base through technology-enabled outreach.',
        icon: Target,
      },
    ],
    strategyTitle: 'Operational Excellence',
    strategyDesc:
      "Combining analytics, research, technology, and skilled manpower, we don't just solve tasks—we institutionalize excellence at scale. Our focus is on making your organization leaner, faster, and world-ready.",
    ctaText: 'Scale Your Business?',
    projectTypes: [
      'Business Process Outsourcing',
      'Data Management & Cleaning',
      'Cloud & IT Infrastructure',
      'Technical Support Services',
      'Customer Acquisition Bot',
      'Other',
    ],
  },
  'web-dev': {
    title: 'Digital Studio & Web Development',
    tagline: 'Crafting the Future of High-Performance Digital Experiences.',
    description:
      'In the era of digital dominance, your online presence is your most powerful asset. Our studio delivers bespoke, high-performance web solutions that are engineered for speed, aesthetics, and conversions.',
    icon: Monitor,
    color: 'blue',
    features: [
      {
        title: 'UI/UX Design',
        description:
          'User-centric designs that prioritize both high-end aesthetics and intuitive functionality.',
        icon: Layout,
      },
      {
        title: 'Full-stack Development',
        description:
          'Fast, secure, and infinitely scalable web applications built with modern technologies.',
        icon: Code,
      },
      {
        title: 'Performance Optimization',
        description:
          'Fine-tuning every line of code to ensure your site is lightning-fast on all devices.',
        icon: Zap,
      },
      {
        title: 'Ongoing Maintenance',
        description:
          'Continuous updates, security checks, and support to keep your platform future-proof.',
        icon: Settings,
      },
    ],
    strategyTitle: 'Digital First Approach',
    strategyDesc:
      "Every pixel, every line of code is designed to drive impact. We don't just build websites; we create digital ecosystems that empower your business to dominate globally while delivering a premium user experience.",
    ctaText: 'Building a Product?',
    projectTypes: [
      'Custom Web Application',
      'Corporate Website Redesign',
      'E-commerce Platform',
      'UI/UX Design Workshop',
      'Ongoing Support & Maintenance',
      'Other',
    ],
  },
};
