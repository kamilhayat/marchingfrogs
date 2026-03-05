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
      className=' bg-[#050505] dark text-white relative overflow-hidden'
      id='values'
    >
      <FloatingOrbs />
      <GridPattern />
      <Particles />

      <div className='max-container padding-container-sm relative z-10'>
        {/* Headline Section - Improved spacing and typography */}
        <div className='max-w-4xl mb-8'>
          <div className='section-subtitle bg-white/5! border-white/10! text-white!'>
            Our Foundation
          </div>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-white leading-tight'>
            Built on{' '}
            <span className='text-primary italic relative inline-block'>
              Purpose
              <span className='absolute -bottom-2 left-0 w-full h-1 bg-primary/40 blur-sm'></span>
            </span>
            <br />
            Driven by Values.
          </h3>
        </div>

        {/* Mission & Vision - Balanced High-Impact Split */}
        <div className='relative mb-20 border border-white/10 rounded-3xl bg-white/2 backdrop-blur-xl overflow-hidden group transition-all duration-1000 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30'>
          {/* Central Connecting Node (Hidden on mobile) */}
          <div className='absolute left-1/2 top-20 bottom-20 w-px bg-white/10 hidden lg:block overflow-hidden'>
            <div className='absolute top-0 w-full h-full bg-linear-to-b from-transparent via-primary/50 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-3000 ease-linear' />
          </div>

          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-20'>
            <div className='w-6 h-6 bg-primary rounded-full blur-sm shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)]' />
            <div className='absolute w-12 h-12 bg-primary/30 rounded-full animate-ping' />
          </div>

          <div className='grid lg:grid-cols-2 relative z-10'>
            {/* Mission Column */}
            <div className='p-6 md:p-8 relative overflow-hidden group/m border-b lg:border-b-0 lg:border-r border-white/10'>
              <div className='absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] transition-all duration-700 group-hover/m:bg-primary/20' />

              {/* Icon in top right corner */}
              <div className='absolute top-12 right-12 w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover/m:scale-110 group-hover/m:rotate-6 transition-all duration-500 shadow-2xl shadow-primary/40 z-20 rotate-6 md:rotate-0'>
                <Target className='w-8 h-8' />
              </div>

              <div className='relative z-10 space-y-12'>
                <div className='space-y-6'>
                  <div className='inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase text-xs font-black tracking-[0.4em]'>
                    <div className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse' />
                    The Mission
                  </div>
                  <h3 className='text-2xl md:text-3xl font-serif font-bold text-white leading-[1.05] tracking-tight pr-24'>
                    {COMPANY_VALUES.mission.title}
                  </h3>
                  <p className='text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl italic border-l-2 border-primary/40 pl-8'>
                    "{COMPANY_VALUES.mission.description}"
                  </p>
                </div>

                <div className='pt-8 flex items-center gap-4 text-white/20 font-bold tracking-[0.3em] uppercase text-[10px] group-hover/m:text-primary/60 transition-all duration-500 cursor-default'>
                  Fundamental Purpose{' '}
                  <div className='w-20 h-px bg-white/10 group-hover/m:bg-primary/40 group-hover/m:w-32 transition-all duration-500' />
                </div>
              </div>
            </div>

            {/* Vision Column */}
            <div className='p-6 md:p-8 relative overflow-hidden group/v bg-white/2'>
              <div className='absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px] transition-all duration-700 group-hover/v:bg-accent/20' />

              {/* Icon in top right corner */}
              <div className='absolute top-6 md:top-12 left-6 md:left-auto md:right-12 w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20 group-hover/v:scale-110 group-hover/v:-rotate-6 transition-all duration-500 shadow-2xl shadow-accent/40 z-20 rotate-6 md:rotate-0'>
                <Eye className='w-8 h-8' />
              </div>

              <div className='relative z-10 space-y-12 text-right lg:text-left'>
                <div className='space-y-6'>
                  <div className='inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent uppercase text-xs font-black tracking-[0.4em]'>
                    The Vision
                    <div className='w-1.5 h-1.5 rounded-full bg-accent animate-pulse' />
                  </div>
                  <h3 className='text-2xl md:text-3xl font-serif font-bold text-white leading-[1.05] tracking-tight pr-24 lg:pr-32'>
                    {COMPANY_VALUES.vision.title}
                  </h3>
                  <p className='text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl ml-auto lg:ml-0 border-r-2 lg:border-r-0 lg:border-l-2 border-accent/40 pr-8 lg:pr-0 lg:pl-8'>
                    "{COMPANY_VALUES.vision.description}"
                  </p>
                </div>

                <div className='pt-8 flex items-center gap-4 text-white/20 font-bold tracking-[0.3em] uppercase text-[10px] group-hover/v:text-accent/60 transition-all duration-500 justify-end lg:justify-start cursor-default'>
                  <div className='w-20 lg:block hidden h-px bg-white/10 group-hover/v:bg-accent/40 group-hover/v:w-32 transition-all duration-500' />{' '}
                  Strategic Future
                  <div className='w-20 lg:hidden h-px bg-white/10 group-hover/v:bg-accent/40 group-hover/v:w-32 transition-all duration-500' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section - Enhanced header */}
        <div className='space-y-12'>
          <div className='flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10'>
            <div className='space-y-5'>
              <div className='section-subtitle m-0 bg-white/5! border-white/10! text-white!'>
                The Principles
              </div>
              <h3 className='text-3xl md:text-4xl font-serif font-bold text-white leading-tight'>
                Core Values
              </h3>
            </div>
            <p className='text-white/60 max-w-md text-base md:text-lg leading-relaxed font-serif italic border-l-2 border-primary/40 pl-6'>
              The six pillars that define our commitment to excellence and
              community.
            </p>
          </div>

          {/* Enhanced Bento Grid for Values */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
            {COMPANY_VALUES.values.map((value, index) => (
              <div
                key={value.title}
                className='group relative p-7 md:p-8 rounded-4xl bg-white/3 border border-white/10 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(var(--primary-rgb),0.15)] hover:-translate-y-2 overflow-hidden backdrop-blur-sm'
              >
                {/* Decorative corner gradient */}
                <div className='absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-[1.8] group-hover:from-primary/20 transition-all duration-700 blur-2xl' />

                {/* Number watermark */}
                <div className='absolute -bottom-2 -right-2 text-7xl md:text-8xl font-black text-white/2 group-hover:text-primary/8 transition-all duration-700 pointer-events-none tabular-nums leading-none uppercase'>
                  0{index + 1}
                </div>

                <div className='relative z-10 space-y-6'>
                  {/* Icon with improved styling */}
                  <div className='relative w-14 h-14 md:w-16 md:h-16'>
                    <div className='absolute inset-0 bg-primary/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                    <div className='relative w-full h-full rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black group-hover:border-primary/50 group-hover:rotate-6 transition-all duration-500 shadow-sm'>
                      <value.icon className='w-7 h-7 md:w-8 md:h-8' />
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <h4 className='text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight'>
                      {value.title}
                    </h4>

                    <p className='text-white/70 leading-relaxed text-sm md:text-base'>
                      {value.description}
                    </p>
                  </div>

                  {/* Badge */}
                  <div className='pt-4 border-t border-white/10 group-hover:border-primary/20 transition-colors duration-500'>
                    <div className='flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.15em] text-white/20 group-hover:text-primary/70 transition-colors duration-500 uppercase'>
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
