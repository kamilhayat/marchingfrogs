'use client';

import React from 'react';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className='relative min-h-[90vh] flex items-center pt-28 lg:pt-24 overflow-hidden'>
      {/* Background Decor */}
      <div className='absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10' />
      <div className='absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -z-10' />

      <div className='container mx-auto'>
        <div className='max-w-4xl mx-auto text-center space-y-2'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-secondary/50 text-secondary-foreground text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-500'>
            <Globe className='w-4 h-4 text-primary animate-pulse' />
            Global Multi-Disciplinary Enterprise
          </div>

          {/* Heading */}
          <h1 className='section-title text-5xl! md:text-7xl!'>
            Empowering Global <br />
            <span className='text-transparent bg-clip-text bg-linear-to-r from-primary to-primary bg-size-[200%_auto] animate-gradient-x'>
              Excellence.
            </span>
          </h1>

          {/* Subheading */}
          <p className='section-desc max-w-3xl mx-auto'>
            Marching Frogs is driven by a client-first philosophy, delivering
            solutions that go beyond conventional service models. We work as
            strategic partners to help organisations grow, adapt, and succeed.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300'>
            <Button
              size='lg'
              className='h-14 px-8 rounded-2xl text-lg font-semibold shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all group'
            >
              Explore Our Verticals
              <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='h-14 px-8 rounded-2xl text-lg font-semibold border-2'
            >
              Contact Our Experts
            </Button>
          </div>

          {/* Core Pillars */}
          <div className='pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-in fade-in duration-1000 delay-500'>
            {[
              {
                label: 'Strategic',
                icon: Shield,
                color: 'bg-primary/10 text-primary',
              },
              {
                label: 'Global',
                icon: Globe,
                color: 'bg-accent/10 text-accent',
              },
              {
                label: 'Efficient',
                icon: Zap,
                color: 'bg-primary/10 text-primary',
              },
              {
                label: 'Scalable',
                icon: Globe,
                color: 'bg-accent/10 text-accent',
              },
            ].map((pillar) => (
              <div
                key={pillar.label}
                className='flex flex-col items-center gap-2'
              >
                <div
                  className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center',
                    pillar.color,
                  )}
                >
                  <pillar.icon className='w-6 h-6' />
                </div>
                <span className='text-sm font-semibold text-muted-foreground'>
                  {pillar.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
