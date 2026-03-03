export interface NavLink {
  title: string;
  href: string;
  items?: {
    title: string;
    href: string;
    description?: string;
  }[];
}

export interface Vertical {
  title: string;
  description: string;
  icon: any; // Type as any for Lucide icons or import them if possible, but any is common for data files
  color: string;
  link: string;
}

export interface AboutContent {
  badge: string;
  title: {
    main: string;
    highlight: string;
  };
  descriptions: string[];
  features: string[];
  integratedApproach: {
    title: string;
    description: string;
    cta: string;
  };
}

export interface Service {
  title: string;
  description: string;
  icon: any;
  features?: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  locations: {
    city: string;
    details: string;
  }[];
}

export interface ValueItem {
  title: string;
  description: string;
  icon: any;
}

export interface CompanyValues {
  mission: {
    title: string;
    description: string;
  };
  vision: {
    title: string;
    description: string;
  };
  values: ValueItem[];
}

export interface EventCard {
  id: string;
  title: string;
  date: string;
  location: string;
  area?: string;
  image: string;
  description?: string;
  href: string;
}

export interface FutureEventsProps {
  events: EventCard[];
  heading?: string;
  subheading?: string;
  showBuyPass?: boolean;
}
