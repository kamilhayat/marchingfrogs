import Link from 'next/link';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DottedConstellation, SectionDivider } from '@/components/sections/svg';

const Hero = () => {
  return (
    <section className='relative flex items-center pt-24 pb-12 overflow-hidden bg-primary/10'>
      <DottedConstellation />
      <SectionDivider />

      <div className='container mx-auto'>
        <div className='max-w-4xl mx-auto text-center space-y-6 relative'>
          {/* Experience Stamp */}
          <div className='absolute top-0 -right-12 hidden lg:flex flex-col items-center justify-center w-32 h-32 rounded-full border-2 border-primary/20 bg-background/50 backdrop-blur-md shadow-xl animate-in fade-in zoom-in duration-1000 delay-500 hover:rotate-12 transition-all group'>
            <div className='absolute inset-0 rounded-full border border-primary/10 animate-ping' />
            <div className='text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-1'>
              EST.
            </div>
            <div className='text-4xl font-serif font-bold text-foreground group-hover:scale-110 transition-transform'>
              2017
            </div>
            <div className='w-10 h-px bg-primary/30 my-1' />
            <div className='text-[9px] font-bold text-muted-foreground uppercase tracking-widest'>
              7+ Years Excellence
            </div>
          </div>

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
            <Link href='#contact'>
              <Button
                variant='outline'
                size='lg'
                className='h-14 px-8 rounded-2xl text-lg font-semibold border-2'
              >
                Contact Our Experts
              </Button>
            </Link>
          </div>

          {/* Core Pillars */}
          {/* <div className='pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-in fade-in duration-1000 delay-500'>
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
