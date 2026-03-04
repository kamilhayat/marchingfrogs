import { VERTICALS } from '@/constants';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GridPattern } from '@/components/sections/svg';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Verticals = () => {
  return (
    <section className='relative overflow-hidden' id='verticals'>
      <GridPattern />

      <div className='max-container padding-container-sm relative z-10'>
        {/* Header Section */}
        <div className='mb-12'>
          <div className='section-subtitle'>Our Business Engines</div>
          <h2 className='section-title font-sans font-bold text-foreground leading-tight tracking-tight mb-4'>
            Focused{' '}
            <span className='text-primary italic font-serif'>
              Specialised Verticals
            </span>
          </h2>
          <p className='text-lg md:text-xl text-muted-foreground font-light leading-relaxed'>
            Delivering industry-leading excellence through dedicated business
            units, each a leader in its respective domain.
          </p>
        </div>

        {/* Verticals Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {VERTICALS.map((vertical) => (
            <Link
              key={vertical.title}
              href={vertical.link}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative p-6 rounded-3xl bg-card border border-border hover:border-primary/40 transition-all duration-700 hover:shadow-2xl overflow-hidden'
            >
              {/* Background Decor */}
              <div className='absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[100px] bg-primary/10 transition-all duration-700' />

              <div className='relative z-10 space-y-4'>
                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6'>
                  <div
                    className={cn(
                      'w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 shadow-xl group-hover:scale-110 group-hover:rotate-3',
                      vertical.color,
                    )}
                  >
                    <vertical.icon className='w-8 h-8' />
                  </div>
                  <div className='flex items-center gap-4 text-primary transition-colors font-black uppercase tracking-[0.4em] text-[10px]'>
                    Strategic Vertical <ArrowRight className='w-4 h-4' />
                  </div>
                </div>

                <div className='space-y-4'>
                  <h3 className='text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300'>
                    {vertical.title}
                  </h3>
                  <p className='text-base text-muted-foreground leading-relaxed font-light group-hover:text-muted-foreground transition-colors duration-500'>
                    {vertical.description}
                  </p>
                </div>

                <div className='pt-4'>
                  <div className='inline-flex items-center gap-2 text-sm font-bold text-muted-foreground/50 group-hover:text-foreground transition-all border-b border-transparent group-hover:border-primary pb-1'>
                    Learn More About This Vertical{' '}
                    <ExternalLink className='w-4 h-4' />
                  </div>
                </div>
              </div>

              {/* Vertical Indicator */}
              <div className='absolute top-0 right-12 h-24 w-px bg-linear-to-b from-primary/50 to-transparent' />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
