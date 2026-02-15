'use client';
import { CONTACT_DATA } from '@/constants';
import { MapPin, ExternalLink } from 'lucide-react';
import { GridPattern } from '@/components/sections/svg';
import InteractiveMap from './interactive-map';
import React from 'react';

const Footprint = () => {
  const locations = CONTACT_DATA.locations.map((loc) => ({
    city: loc.city,
    position: { lat: loc.coordinates[1], lng: loc.coordinates[0] },
  }));

  return (
    <section
      className='py-12 bg-background relative overflow-hidden'
      id='footprint'
    >
      <GridPattern />

      <div className='container mx-auto px-4 md:px-0 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          {/* Content Side */}
          <div className='w-full lg:w-1/2 space-y-12 lg:order-1'>
            <div className='space-y-6'>
              <div className='section-subtitle'>Global Scale</div>
              <h2 className='section-title font-sans font-bold text-foreground leading-tight tracking-tight'>
                Operational{' '}
                <span className='text-primary italic font-serif'>
                  Footprint
                </span>
              </h2>
              <p className='section-desc text-lg'>
                Leveraging strategically positioned hubs across India, UAE, and
                SE Asia to deliver 24/7 excellence and rapid-response
                scalability.
              </p>
            </div>

            <div className='grid gap-6'>
              {CONTACT_DATA.locations.map((loc) => (
                <div
                  key={loc.city}
                  className='group p-6 rounded-[2.5rem] bg-card border border-border hover:border-primary/30 transition-all duration-500 flex items-center justify-between shadow-sm hover:shadow-md'
                >
                  <div className='flex items-center gap-6'>
                    <div className='w-14 h-14 rounded-3xl bg-secondary border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500'>
                      <MapPin className='w-6 h-6' />
                    </div>
                    <div className='space-y-1'>
                      <h4 className='text-xl font-bold text-foreground group-hover:text-primary transition-colors'>
                        {loc.city} Hub
                      </h4>
                      <p className='text-muted-foreground font-medium tracking-wide uppercase text-[10px]'>
                        {loc.details}
                      </p>
                    </div>
                  </div>
                  <div className='w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground/30 group-hover:text-primary group-hover:bg-primary/10 transition-all cursor-pointer'>
                    <ExternalLink className='w-4 h-4' />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Side */}
          <div className='w-full lg:w-1/2 relative lg:order-2'>
            <div className='relative w-full aspect-square md:aspect-video lg:aspect-square bg-slate-50 rounded-[3rem] border border-border overflow-hidden shadow-2xl'>
              <InteractiveMap locations={locations} />

              {/* Legend / Overlay */}
              <div className='absolute bottom-8 right-8 p-5 bg-white/95 backdrop-blur-md rounded-4xl border border-border shadow-2xl flex flex-col gap-3 z-20'>
                <div className='flex items-center gap-3'>
                  <div className='w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]' />
                  <span className='text-[10px] font-black text-foreground uppercase tracking-widest'>
                    Active Global Hubs
                  </span>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className='absolute top-8 left-8 p-4 border border-border rounded-2xl bg-white/50 backdrop-blur-sm z-20'>
                <div className='text-[10px] font-black text-muted-foreground/50 uppercase tracking-[0.5em]'>
                  Live Network
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footprint;
