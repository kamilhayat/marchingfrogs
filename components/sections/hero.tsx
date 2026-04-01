import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VerticalChip = ({
  label,
  delay = '0s',
}: {
  label: string;
  delay?: string;
}) => (
  <div
    className='group flex items-center gap-2 px-4 py-2 rounded-full
               border border-white/10 bg-white/4 backdrop-blur
               hover:border-primary/40 hover:bg-primary/10 transition-all cursor-default
               animate-in fade-in duration-700'
    style={{ animationDelay: delay }}
  >
    <span className='w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors' />
    <span
      className='text-[11px] font-semibold tracking-[0.15em] uppercase text-white/50
                     group-hover:text-white/80 transition-colors'
    >
      {label}
    </span>
  </div>
);

const HeroCanvas = () => (
  <div className='absolute inset-0 overflow-hidden pointer-events-none select-none z-0'>
    <div
      className='absolute inset-0'
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 60% 0%, oklch(0.18 0.06 258) 0%, oklch(0.10 0.03 280) 55%, oklch(0.07 0.02 300) 100%)',
      }}
    />

    <div
      className='absolute inset-0 opacity-[0.07]'
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }}
    />

    <svg
      className='absolute inset-0 w-full h-full opacity-10'
      preserveAspectRatio='none'
    >
      <line
        x1='0'
        y1='0'
        x2='100%'
        y2='100%'
        stroke='white'
        strokeWidth='0.5'
      />
      <line
        x1='100%'
        y1='0'
        x2='0'
        y2='100%'
        stroke='white'
        strokeWidth='0.3'
      />
    </svg>

    <div
      className='absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full
                 bg-primary/25 blur-[140px] animate-pulse'
      style={{ animationDuration: '9s' }}
    />
    <div
      className='absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full
                 bg-accent/15 blur-[120px] animate-pulse'
      style={{ animationDuration: '13s', animationDelay: '2s' }}
    />

    <div
      className='absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent'
      style={{ top: '62%' }}
    />
  </div>
);

const OrbitDiagram = () => (
  <div className='relative flex items-center justify-center w-full h-full min-h-[520px]'>
    {[
      { size: 480, dur: '40s', opacity: 0.06 },
      { size: 360, dur: '28s', opacity: 0.08, reverse: true },
      { size: 240, dur: '20s', opacity: 0.1 },
    ].map(({ size, dur, opacity, reverse }, i) => (
      <div
        key={i}
        className='absolute rounded-full border border-white'
        style={{
          width: size,
          height: size,
          opacity,
          animation: `spin ${dur} linear infinite ${reverse ? 'reverse' : ''}`,
        }}
      />
    ))}

    <div
      className='relative z-10 flex flex-col items-center justify-center
                 w-48 h-48 rounded-full
                 bg-linear-to-br from-white/12 to-white/4
                 border border-white/20 backdrop-blur-3xl
                 shadow-[0_0_80px_rgba(var(--primary-rgb),0.35)]
                 hover:scale-105 transition-transform duration-700'
    >
      <span className='text-[9px] font-black tracking-[0.5em] uppercase text-primary mb-2'>
        EST.
      </span>
      <span className='text-6xl font-serif font-bold italic text-white leading-none'>
        2018
      </span>
      <div className='w-12 h-px bg-white/20 my-3' />
      <span className='text-[9px] font-bold tracking-[0.35em] uppercase text-white/35'>
        7 Years Strong
      </span>
    </div>

    {[
      { label: 'IP & Legal', angle: 50, r: 178, icon: '⚖' },
      { label: 'MICE', angle: 145, r: 178, icon: '🌐' },
      { label: 'Tech', angle: 230, r: 178, icon: '⚡' },
      { label: 'Summits', angle: 315, r: 178, icon: '🏛' },
    ].map(({ label, angle, r, icon }) => {
      const rad = (angle * Math.PI) / 180;
      const x = Math.cos(rad) * r;
      const y = Math.sin(rad) * r;
      return (
        <div
          key={label}
          className='absolute flex flex-col items-center gap-1
                     px-3 py-2 rounded-xl
                     bg-white/6 border border-white/10 backdrop-blur-xl
                     hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 cursor-default'
          style={{
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
          }}
        >
          <span className='text-xl leading-none'>{icon}</span>
          <span className='text-[9px] font-bold tracking-[0.2em] uppercase text-white/60'>
            {label}
          </span>
        </div>
      );
    })}

    <div
      className='absolute w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_4px_rgba(var(--primary-rgb),0.6)]'
      style={{
        top: '50%',
        left: '50%',
        marginTop: -120 - 6,
        marginLeft: -6,
        animation: 'spin 28s linear infinite reverse',
        transformOrigin: `6px ${120 + 6}px`,
      }}
    />
  </div>
);

const Hero = () => {
  const verticals = [
    'Bespoke Legal Summits',
    'Patent Drawing Hub',
    'IP & Research Support',
    'MICE Management',
    'Outsourcing & Tech',
    'Digital Studio',
  ];

  return (
    <section className='relative pt-20 flex items-center  overflow-hidden text-white'>
      <HeroCanvas />

      <div className='max-container padding-container-sm relative z-10 w-full'>
        <div className='grid lg:grid-cols-[1fr_480px] gap-16 xl:gap-24 items-center'>
          <div className='space-y-10'>
            <div
              className='animate-in fade-in slide-in-from-left-8 duration-700'
              style={{ animationDelay: '0.1s' }}
            >
              <h1 className='text-6xl lg:text-[5.5rem] font-serif font-bold leading-[1.02] tracking-[-0.02em]'>
                Empowering
                <br />
                <span
                  className='italic bg-clip-text text-transparent'
                  style={{
                    backgroundImage:
                      'linear-gradient(100deg, var(--primary) 0%, var(--accent) 60%, var(--primary) 100%)',
                    backgroundSize: '200% 100%',
                    animation: 'gradientShift 4s ease infinite',
                  }}
                >
                  Global Excellence
                </span>
              </h1>
            </div>

            <p
              className='text-lg lg:text-xl text-white/50 font-light max-w-lg leading-[1.75]
                         animate-in fade-in duration-700'
              style={{ animationDelay: '0.2s' }}
            >
              Marching Frogs operates as a{' '}
              <span className='text-white/80 font-medium'>
                strategic partner
              </span>
              , not just a service provider — combining IP intelligence, elite
              summits, MICE management, and digital solutions under one global
              roof.
            </p>

            <div
              className='flex flex-wrap gap-2 animate-in fade-in duration-700'
              style={{ animationDelay: '0.3s' }}
            >
              {verticals.map((v, i) => (
                <VerticalChip key={v} label={v} delay={`${0.35 + i * 0.07}s`} />
              ))}
            </div>

            <div
              className='flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2
                         animate-in fade-in slide-in-from-bottom-4 duration-700'
              style={{ animationDelay: '0.5s' }}
            >
              <Link href='#verticals'>
                <Button
                  size='lg'
                  className='h-14 px-9 rounded-full text-base font-bold
                             shadow-[0_0_40px_rgba(var(--primary-rgb),0.5)]
                             hover:shadow-[0_0_60px_rgba(var(--primary-rgb),0.7)]
                             hover:scale-[1.03] transition-all duration-300 group'
                >
                  Explore Our Verticals
                  <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform' />
                </Button>
              </Link>

              <Link href='#contact'>
                <Button
                  variant='ghost'
                  size='lg'
                  className='h-14 px-9 rounded-full text-base font-semibold
                             text-white/70 hover:text-white border border-white/10
                             hover:border-white/25 hover:bg-white/5 transition-all duration-300'
                >
                  Contact Our Experts
                </Button>
              </Link>
            </div>
          </div>

          <div
            className='hidden lg:flex items-center justify-center
                       animate-in fade-in slide-in-from-right-12 duration-1000'
            style={{ animationDelay: '0.3s' }}
          >
            <OrbitDiagram />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
