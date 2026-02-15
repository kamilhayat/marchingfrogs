import { COMPANY_VALUES } from '@/constants';
import { Target, Eye, ArrowUpRight } from 'lucide-react';
import {
  FloatingOrbs,
  Particles,
  GridPattern,
} from '@/components/sections/svg';

const Values = () => {
  return (
    <section
      className='py-8 bg-background relative overflow-hidden'
      id='values'
    >
      <FloatingOrbs />
      <GridPattern />
      <Particles />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Headline Section - Improved spacing and typography */}
        <div className='max-w-4xl mb-8'>
          <div className='section-subtitle'>Our Foundation</div>
          <h3 className='section-title'>
            Built on{' '}
            <span className='text-primary italic relative inline-block'>
              Purpose
              <span className='absolute -bottom-2 left-0 w-full h-1 bg-primary/30 blur-sm'></span>
            </span>
            <br />
            Driven by Values.
          </h3>
        </div>

        {/* Mission & Vision - Enhanced card design */}
        <div className='grid lg:grid-cols-12 gap-6 lg:gap-8 mb-32'>
          {/* Mission Card */}
          <div className='lg:col-span-7 group relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]' />
            <div className='relative h-full p-8 md:p-12 lg:p-14 rounded-[2.5rem] bg-gradient-to-br from-card to-card/50 border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-700 shadow-lg hover:shadow-2xl hover:shadow-primary/5 backdrop-blur-sm'>
              {/* Ambient glow */}
              <div className='absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[140px] group-hover:bg-primary/10 transition-all duration-1000' />

              {/* Grid overlay */}
              <div className='absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

              <div className='relative z-10'>
                <div className='flex items-start justify-between mb-10 md:mb-14'>
                  <div className='relative'>
                    <div className='absolute inset-0 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                    <div className='relative w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary border border-primary/20 group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 shadow-lg'>
                      <Target className='w-10 h-10 md:w-12 md:h-12' />
                    </div>
                  </div>
                  <span className='text-[8rem] md:text-[12rem] font-bold text-foreground/[0.02] leading-none select-none group-hover:text-primary/[0.04] transition-colors duration-700'>
                    M
                  </span>
                </div>

                <div className='space-y-6'>
                  <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20'>
                    <div className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse' />
                    <span className='text-xs font-bold tracking-[0.3em] text-primary uppercase'>
                      The Mission
                    </span>
                  </div>

                  <h3 className='text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-[1.1] group-hover:text-primary/90 transition-colors duration-500'>
                    {COMPANY_VALUES.mission.title}
                  </h3>

                  <p className='text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl'>
                    {COMPANY_VALUES.mission.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className='lg:col-span-5 group relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]' />
            <div className='relative h-full p-8 md:p-12 lg:p-14 rounded-[2.5rem] bg-gradient-to-br from-secondary/5 to-background border border-secondary/20 overflow-hidden hover:border-secondary/40 transition-all duration-700 shadow-lg hover:shadow-xl backdrop-blur-sm'>
              {/* Ambient glow */}
              <div className='absolute -bottom-32 -left-32 w-80 h-80 bg-secondary/5 rounded-full blur-[120px] group-hover:bg-secondary/10 transition-all duration-1000' />

              <div className='relative z-10'>
                <div className='flex items-start justify-between mb-10 md:mb-14'>
                  <div className='relative'>
                    <div className='absolute inset-0 bg-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                    <div className='relative w-18 h-18 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center text-secondary-foreground border border-secondary/20 group-hover:scale-105 group-hover:-rotate-3 transition-all duration-500 shadow-lg'>
                      <Eye className='w-9 h-9 md:w-10 md:h-10' />
                    </div>
                  </div>
                  <span className='text-[6rem] md:text-[9rem] font-bold text-foreground/[0.02] leading-none select-none group-hover:text-secondary/[0.04] transition-colors duration-700'>
                    V
                  </span>
                </div>

                <div className='space-y-6'>
                  <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20'>
                    <div className='w-1.5 h-1.5 rounded-full bg-secondary-foreground animate-pulse' />
                    <span className='text-xs font-bold tracking-[0.3em] text-secondary-foreground uppercase'>
                      The Vision
                    </span>
                  </div>

                  <h3 className='text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground leading-[1.15] group-hover:text-secondary-foreground/90 transition-colors duration-500'>
                    {COMPANY_VALUES.vision.title}
                  </h3>

                  <p className='text-base md:text-lg text-muted-foreground leading-relaxed'>
                    {COMPANY_VALUES.vision.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section - Enhanced header */}
        <div className='space-y-12'>
          <div className='flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border/50 pb-10'>
            <div className='space-y-5'>
              <div className='section-subtitle m-0'>The Principles</div>
              <h3 className='section-title font-serif font-bold text-foreground leading-tight'>
                Core Values
              </h3>
            </div>
            <p className='text-muted-foreground/80 max-w-md text-base md:text-lg leading-relaxed font-serif italic border-l-2 border-accent/30 pl-6'>
              The six pillars that define our commitment to excellence and
              community.
            </p>
          </div>

          {/* Enhanced Bento Grid for Values */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
            {COMPANY_VALUES.values.map((value, index) => (
              <div
                key={value.title}
                className='group relative p-7 md:p-8 rounded-[2rem] bg-gradient-to-br from-card to-card/30 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(var(--primary-rgb),0.15)] hover:-translate-y-2 overflow-hidden backdrop-blur-sm'
              >
                {/* Decorative corner gradient */}
                <div className='absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/[0.07] to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-[1.8] group-hover:from-primary/[0.12] transition-all duration-700 blur-2xl' />

                {/* Number watermark */}
                <div className='absolute -bottom-2 -right-2 text-7xl md:text-8xl font-black text-foreground/[0.03] group-hover:text-primary/[0.08] transition-all duration-700 pointer-events-none tabular-nums leading-none'>
                  0{index + 1}
                </div>

                <div className='relative z-10 space-y-6'>
                  {/* Icon with improved styling */}
                  <div className='relative w-14 h-14 md:w-16 md:h-16'>
                    <div className='absolute inset-0 bg-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                    <div className='relative w-full h-full rounded-2xl bg-gradient-to-br from-background to-background/50 border border-border/50 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary/50 group-hover:rotate-6 transition-all duration-500 shadow-sm'>
                      <value.icon className='w-7 h-7 md:w-8 md:h-8' />
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <h4 className='text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight'>
                      {value.title}
                    </h4>

                    <p className='text-muted-foreground/90 leading-relaxed text-sm md:text-base'>
                      {value.description}
                    </p>
                  </div>

                  {/* Badge */}
                  <div className='pt-4 border-t border-border/30 group-hover:border-primary/20 transition-colors duration-500'>
                    <div className='flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.15em] text-muted-foreground/40 group-hover:text-primary/70 transition-colors duration-500 uppercase'>
                      <span className='w-1 h-1 rounded-full bg-current' />
                      Pillar {index + 1}
                      <ArrowUpRight className='w-3 h-3 ml-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300' />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
