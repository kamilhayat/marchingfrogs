import { SERVICES } from '@/constants';
import { ArrowUpRight, Target } from 'lucide-react';
import { GridPattern } from '@/components/sections/svg';
import { cn } from '@/lib/utils';

const Services = () => {
  return (
    <section
      className='py-20 relative overflow-hidden'
      id='services'
      style={{
        background:
          'linear-gradient(160deg, oklch(0.15 0.04 280) 0%, oklch(0.18 0.05 260) 50%, oklch(0.14 0.03 300) 100%)',
      }}
    >
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.5_0.2_283/0.15)_0%,transparent_60%)]' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.6_0.1_150/0.1)_0%,transparent_60%)]' />
      <div className='bg-blob-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10' />
      <GridPattern />

      <div className='container mx-auto px-4 md:px-0 relative z-10'>
        {/* Header - High Impact */}
        <div className='max-w-4xl mb-12'>
          <div className='section-subtitle bg-white/10! border-white/20! text-white!'>
            Our Expertise
          </div>
          <h2 className='section-title font-sans font-bold text-white leading-none tracking-tight mb-8'>
            Specialized Solutions for <br className='hidden md:flex' />
            <span className='text-primary italic font-serif'>
              IP &amp; Legal Professionals
            </span>
          </h2>
          <div className='h-1 w-24 bg-primary/40 rounded-full' />
        </div>

        {/* Dynamic Service Explorer Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className='group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 overflow-hidden'
            >
              {/* Background Glow */}
              <div className='absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-700' />

              <div className='relative z-10 h-full flex flex-col'>
                {/* Icon Wrapper */}
                <div className='mb-10 relative'>
                  <div className='absolute inset-0 bg-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                  <div
                    className={cn(
                      'relative w-16 h-16 rounded-3xl border border-white/20 flex items-center justify-center transition-all duration-500 shadow-sm group-hover:scale-110 group-hover:rotate-6',
                      service.color,
                    )}
                  >
                    <service.icon className='w-8 h-8' />
                  </div>
                </div>

                <div className='space-y-4 grow'>
                  <h4 className='text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 tracking-tight'>
                    {service.title}
                  </h4>
                  <p className='text-base text-white/60 leading-relaxed font-light group-hover:text-white/80 transition-colors duration-500'>
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className='mt-6 pt-8 border-t border-border/50 flex items-center justify-between group-hover:border-primary/20 transition-colors'>
                  <span className='text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors'>
                    Service Block {index + 1}
                  </span>
                  <div className='w-10 h-10 rounded-full bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:scale-110 transition-all duration-300'>
                    <ArrowUpRight className='w-5 h-5' />
                  </div>
                </div>
              </div>

              {/* Number Backdrop */}
              <div className='absolute -bottom-10 -left-14 text-[10rem] font-sans italic font-bold text-accent/5 group-hover:text-primary/5 transition-colors duration-700 pointer-events-none select-none'>
                0{index + 1}
              </div>
            </div>
          ))}

          {/* Call to Action Card */}
          <div className='relative p-8 rounded-3xl bg-white/5 border border-white/15 hover:border-primary/50 transition-all duration-700 flex flex-col justify-center items-center text-center overflow-hidden group cursor-pointer'>
            <div className='absolute inset-0 bg-linear-to-br from-primary/10 to-accent/5' />
            <div className='relative z-10 space-y-6'>
              <div className='w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary mx-auto group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300'>
                <Target className='w-8 h-8' />
              </div>
              <h4 className='text-2xl font-bold text-white'>
                Need a Tailored Strategy?
              </h4>
              <p className='text-white/60'>
                Unlock potential with our multi-disciplinary expert team.
              </p>
              <button className='px-8 py-3 bg-primary text-white rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/30'>
                Consult Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
