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
  FileText,
} from 'lucide-react';

export const VERTICAL_DETAILS = {
  'patent-hub': {
    title: 'Patent Hub',
    tagline: 'Precision Patent Illustrations for Global IP Professionals.',
    description:
      'Patent Hub provides high-quality, technical patent drawings that meet the stringent requirements of USPTO, EPO, and other international patent offices. Our team combines legal understanding with technical precision to ensure your inventions are accurately represented.',
    icon: FileText,
    color: 'blue',
    visionTitle: 'What We Do',
    pricingTitle: 'Our Pricing',
    pricing: [
      {
        title: 'Utility Patent Drawings',
        price: '$25 per sheet',
        description: [
          'Flat Fee irrespective of number of drawings on one sheet and complexity of drawings.',
          'Drawings compliant to USPTO, EPO, IPO, JPO & other patent offices of the world.',
          'Complete care of shading, consistency and margins.',
          'No additional charge for “Replacement Sheet”.',
          'Share drawing and sketches in any format including sketches, photos, visio, videos & 3D files etc.',
          'No additional charges for iterations.',
        ],
        delivery: [
          'Expedited – within two days.',
          'Regular – 3-4 business days.',
        ],
      },
      {
        title: 'Design Patent Drawings',
        price: '$30 per sheet',
        description: [
          'Flat Fee irrespective of number of drawings on one sheet and complexity of drawings.',
          'Drawings compliant to USPTO, EPO, IPO, JPO & other patent offices of the world.',
          'Complete care of shading, consistency and margins.',
          'No additional charge for “Replacement Sheet”.',
          'Share drawing and sketches in any format including sketches, photos, visio, videos & 3D files etc.',
          'No additional charges for iterations.',
        ],
        delivery: [
          'Expedited – within two days.',
          'Regular – 3-4 business days.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Who all can benefit from our services?',
        answer:
          'Law firms,Technology Firms/In-house counsel, investment firms/investors and IP Business consultants, Licensing firms/senior executives, Universities and academia/researchers in need of prior-art searches before investing in R&D.',
      },
      {
        question:
          'Which are the industries where patentdrawinghub.com can provide Patentability search service?',
        answer:
          'Any industry be it mechanical, electrical, pharmaceuticals, bio-chemical, Enhanced Communication Technology,Semiconductor Wafer & Device Fabrication, VLSI & Chip Designing, Cellular Systems, Antennas, Signal Processing, Smartphones, Cameras, Phones, Tablets & Accessories, TV etc.',
      },
      {
        question:
          'In which all countries patentdrawinghub.com can provide IP services?',
        answer:
          'We have a wide range of country coverage in the whole IP community. For our Patent Search Services, we cover over 100 countries across the continents.',
      },
      {
        question: 'Could I see sample reports prepared by ?',
        answer: 'Yes, definitely. Contact us at email',
      },
      {
        question:
          'What confidentiality measures are in place at patentdrawinghub.com for security of client’s IP information?',
        answer:
          'We sign Non-disclosure agreement(NDA) with our client and all our employees.',
      },
      {
        question: 'What if I am not satisfied with the work?',
        answer:
          'We provide free revisions and free modifications if the work was not done as per the request, however if you are still not happy contact us via the contact form or write an email to support@patentdrawinghub.com mentioning the reason and we may issue to you the credit or refund.',
      },
    ],
    features: [
      {
        title: 'Utility Patent Drawings',
        description:
          'The drawings for a utility patent application are one of the most important parts of the patent application. The drawings are a quick, easy way to establish some understanding of what to expect if one were to spend time reading the utility patent or application. Patent rules also require the drawings show what is being claimed as the invention. Moreover, without the drawings, the text of the patent document cannot be placed into context, and its full meaning may be harder to understand. Hence, the importance of the drawings cannot be understated; they are crucial to understanding the utility patent.',
        icon: Layout,
      },
      {
        title: 'Design Patent Drawings',
        description:
          'The drawings for a design patent application is the most important part of the design patent application. The drawings define the scope of protection afforded under the design patent. The drawings for the design patent application are not designed to tell a story as in the drawings for a utility patent application. Rather, because a design patent protects the ornamentation of a product, it is primarily concerned with showing the protected design of the product. Simply put, the drawings should show the look of the product it is protecting.',
        icon: Monitor,
      },
      {
        title: 'Trademark Drawings',
        description:
          'Clean, scalable vector illustrations for trademark registrations.',
        icon: Target,
      },
      {
        title: 'IP Research Support',
        description:
          'Strategic technical research and prior art illustration analysis.',
        icon: Database,
      },
    ],
    strategyTitle: 'Precision & Compliance',
    strategyDesc:
      'We understand that in the world of IP, every line matters. Our process ensures that your patent drawings are not only accurate but also fully compliant with international patent office standards, reducing the risk of office actions.',
    ctaText: 'Need Patent Drawings?',
    projectTypes: [
      'Utility Patent Drawings',
      'Design Patent Drawings',
      'Trademark Illustrations',
      'Complex Technical Diagrams',
      'Patent Research Support',
      'Other',
    ],
  },
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
