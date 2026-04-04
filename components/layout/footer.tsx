import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight, Globe } from 'lucide-react';
import { CONTACT_DATA, NAV_LINKS } from '@/constants';
import Image from 'next/image';

const verticals = [
  {
    label: 'Bespoke Global Legal Summits',
    href: 'https://www.bespokegls.com/',
  },
  { label: 'Patent Drawing Hub', href: '/verticals/patent-hub' },
  { label: 'IP and Research Support', href: '/#services' },
  { label: 'MICE Management', href: '/verticals/mice' },
  { label: 'Outsourcing & Tech Services', href: '/verticals/outsourcing-tech' },
  { label: 'Digital Studio & Web Development', href: '/verticals/web-dev' },
];

const services = [
  'Invalidity / Opposition Search',
  'Infringement & Evidence of Use',
  'Prior Art Search',
  'Freedom to Operate (FTO)',
  'Patent Landscape & Intelligence',
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className='relative overflow-hidden'
      style={{
        background:
          'linear-gradient(160deg, oklch(0.10 0.04 270) 0%, oklch(0.13 0.05 255) 60%, oklch(0.09 0.03 285) 100%)',
      }}
    >
      {/* Ambient glow */}
      <div className='absolute top-0 left-1/4 w-[500px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none' />
      <div className='absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/6 rounded-full blur-[100px] pointer-events-none' />

      {/* Top border line with gradient */}
      <div className='h-px bg-linear-to-r from-transparent via-primary/40 to-transparent' />

      {/* Main footer content */}
      <div className='max-container padding-container-sm relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Brand column */}
          <div className='lg:col-span-1 space-y-6'>
            {/* Logo */}
            <div className='flex items-center gap-3'>
              <Image
                src='/logo-marching-frogs.png'
                alt='Marching Frogs Logo'
                width={160}
                height={100}
              />
            </div>

            {/* Tagline */}
            <p className='text-white/40 text-sm leading-relaxed font-light'>
              A global, multi-disciplinary enterprise driven by a client-first
              philosophy — your strategic partner in excellence.
            </p>

            {/* Quote CTA */}
            <Link
              href='/request-quote'
              className='inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300'
            >
              Request a Quote
              <ArrowUpRight className='w-3.5 h-3.5' />
            </Link>
          </div>

          {/* Verticals */}
          <div className='space-y-5'>
            <h4 className='text-white/80 font-black text-xs uppercase tracking-[0.2em]'>
              Our Verticals
            </h4>
            <ul className='space-y-3'>
              {verticals.map((v) => (
                <li key={v.label}>
                  <Link
                    href={v.href}
                    className='group flex items-center gap-2 text-white/40 text-sm hover:text-white transition-colors duration-300'
                  >
                    <span className='w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors shrink-0' />
                    {v.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className='space-y-5'>
            <h4 className='text-white/80 font-black text-xs uppercase tracking-[0.2em]'>
              IP Services
            </h4>
            <ul className='space-y-3'>
              {services.map((s) => (
                <li key={s}>
                  <span className='group flex items-center gap-2 text-white/40 text-sm'>
                    <span className='w-1 h-1 rounded-full bg-accent/50 shrink-0' />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className='space-y-5'>
            <h4 className='text-white/80 font-black text-xs uppercase tracking-[0.2em]'>
              Get in Touch
            </h4>
            <ul className='space-y-4'>
              <li>
                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className='flex items-start gap-3 text-white/40 text-sm hover:text-white transition-colors duration-300 group'
                >
                  <div className='w-7 h-7 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-500/25 transition-colors'>
                    <Mail className='w-3.5 h-3.5 text-violet-400' />
                  </div>
                  <span className='leading-snug pt-0.5'>
                    {CONTACT_DATA.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_DATA.phone}`}
                  className='flex items-start gap-3 text-white/40 text-sm hover:text-white transition-colors duration-300 group'
                >
                  <div className='w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/25 transition-colors'>
                    <Phone className='w-3.5 h-3.5 text-emerald-400' />
                  </div>
                  <span className='leading-snug pt-0.5'>
                    {CONTACT_DATA.phone}
                  </span>
                </a>
              </li>
              <li>
                <div className='flex items-start gap-3 text-white/40 text-sm'>
                  <div className='w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/20 flex items-center justify-center shrink-0'>
                    <MapPin className='w-3.5 h-3.5 text-amber-400' />
                  </div>
                  <div className='space-y-1 pt-0.5'>
                    {CONTACT_DATA.locations.map((loc) => (
                      <div key={loc.city} className='leading-snug'>
                        <span className='text-white/60 font-semibold'>
                          {loc.city}
                        </span>
                        <span className='text-white/30'> — {loc.details}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='my-10 h-px bg-white/5' />

        {/* Bottom bar */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-white/25 text-xs'>
            © {year} Marching Frogs PVT LTD. All rights reserved.
          </p>

          <div className='flex items-center gap-4'>
            <Link
              href='/privacy'
              className='text-white/25 text-xs hover:text-white/50 transition-colors'
            >
              Privacy Policy
            </Link>
            <div className='w-px h-3 bg-white/10' />
            <Link
              href='/terms'
              className='text-white/25 text-xs hover:text-white/50 transition-colors'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
