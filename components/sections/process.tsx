import { PROCESS_STEPS } from '@/constants';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Process = () => {
  return (
    <section
      className='py-24 relative overflow-hidden bg-slate-50'
      id='process'
    >
      {/* Light subtle background elements */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.9_0.05_260/0.4)_0%,transparent_50%)]' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.85_0.03_280/0.3)_0%,transparent_50%)]' />

      {/* Premium dot pattern overlay */}
      <div className='absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-40' />

      <div className='container mx-auto px-6 relative z-10 max-w-7xl'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-[10px] font-black tracking-[0.2em] uppercase shadow-sm'>
            <span className='w-2 h-2 rounded-full bg-primary animate-pulse' />
            Execution Framework
          </div>
          <h2 className='text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight'>
            The{' '}
            <span className='text-transparent bg-clip-text bg-linear-to-r from-primary via-violet-500 to-accent italic'>
              Marching Method
            </span>
          </h2>
          <p className='text-slate-500 text-base md:text-lg font-medium leading-relaxed'>
            A precision-engineered lifecycle designed to transform organizations
            into global leaders through technology and strategy.
          </p>
        </div>

        {/* Compact Horizontal Steps Grid */}
        <div className='relative mt-12'>
          {/* Continuous tracking line (Desktop) */}
          <div className='hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-slate-200'>
            <div className='absolute inset-0 bg-linear-to-r from-primary/20 via-primary/50 to-primary/20 shadow-[0_0_10px_rgba(var(--primary-rgb),0.2)]' />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6'>
            {PROCESS_STEPS.map((step, index) => {
              const numberStr = `0${index + 1}`;
              const isLast = index === PROCESS_STEPS.length - 1;

              return (
                <div
                  key={step.title}
                  className='group relative flex flex-col items-center lg:items-stretch'
                >
                  {/* Timeline Node & Icon */}
                  <div className='relative flex flex-col items-center z-10 mb-6'>
                    {/* Glowing outer ring */}
                    <div className='absolute inset-0 bg-white rounded-full scale-[1.3] shadow-md transition-transform duration-500 group-hover:scale-[1.5]' />
                    <div className='absolute inset-0 bg-primary rounded-full opacity-5 group-hover:opacity-15 scale-[1.6] transition-all duration-500' />

                    {/* The Icon Container */}
                    <div className='relative w-24 h-24 lg:w-20 lg:h-20 rounded-full bg-white border border-slate-200 shadow-xl flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-primary/20 transition-all duration-300 overflow-hidden'>
                      {/* Background Oversized Number */}
                      <div className='absolute -bottom-2 -right-1 text-[50px] font-black text-slate-100 leading-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-primary/5'>
                        {numberStr}
                      </div>

                      {/* Active Icon */}
                      <div className='relative w-12 h-12 rounded-xl bg-linear-to-br from-primary/10 to-transparent border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500'>
                        <step.icon className='w-5 h-5' />
                      </div>
                    </div>

                    {/* Mobile vertical line connector */}
                    {!isLast && (
                      <div className='lg:hidden absolute top-24 w-[2px] h-[calc(100%+2rem)] bg-slate-200' />
                    )}

                    {/* Desktop horizontal arrow connector */}
                    {!isLast && (
                      <div className='hidden lg:flex absolute top-[40px] -right-[calc(0.75rem)] translate-x-1/2 z-20 items-center justify-center '>
                        <div className='p-1 rounded-full bg-white border border-slate-200 shadow-sm text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300'>
                          <ChevronRight className='w-4 h-4' />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className='flex-1 w-full bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden'>
                    <div className='text-primary font-black text-sm tracking-widest mb-2 opacity-60'>
                      STEP {numberStr}
                    </div>

                    <h3 className='text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors'>
                      {step.title}
                    </h3>

                    <p className='text-slate-500 leading-relaxed text-sm font-medium'>
                      {step.description}
                    </p>

                    {/* Subtle hover arrow */}
                    {!isLast && (
                      <div className='absolute right-4 bottom-4 w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300 group-hover:translate-x-1'>
                        <ArrowRight className='w-3 h-3' />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
