import { SERVICES } from '@/constants';
import { ArrowUpRight, Target } from 'lucide-react';
import { GridPattern } from '@/components/sections/svg';

const Services = () => {
  return (
    <section
      className='py-8 bg-secondary/5 relative overflow-hidden'
      id='services'
    >
      <GridPattern />

      <div className='container mx-auto px-4 md:px-0 relative z-10'>
        {/* Header - High Impact */}
        <div className='max-w-4xl mb-12'>
          <div className='section-subtitle'>Our Expertise</div>
          <h2 className='section-title font-sans font-bold text-foreground leading-none tracking-tight mb-8'>
            Specialized Solutions for <br className='hidden md:flex' />
            <span className='text-primary italic font-serif'>
              IP & Legal Professionals
            </span>
          </h2>
          <div className='h-1 w-24 bg-primary/20 rounded-full' />
        </div>

        {/* Dynamic Service Explorer Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className='group relative p-6 rounded-3xl bg-white border border-border hover:border-primary/30 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-3 overflow-hidden'
            >
              {/* Background Glow */}
              <div className='absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all duration-700' />

              <div className='relative z-10 h-full flex flex-col'>
                {/* Icon Wrapper */}
                <div className='mb-10 relative'>
                  <div className='absolute inset-0 bg-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                  <div className='relative w-16 h-16 rounded-3xl bg-secondary/50 border border-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm'>
                    <service.icon className='w-8 h-8' />
                  </div>
                </div>

                <div className='space-y-4 grow'>
                  <h4 className='text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight'>
                    {service.title}
                  </h4>
                  <p className='text-base text-muted-foreground leading-relaxed font-light  group-hover:text-foreground transition-colors duration-500'>
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
          <div className='relative p-8 rounded-3xl bg-linear-to-br from-primary/5 to-accent/5 border border-primary/20 hover:border-primary/50 transition-all duration-700 flex flex-col justify-center items-center text-center overflow-hidden group cursor-pointer'>
            <div className='absolute inset-0 bg-linear-to-b from-transparent via-white/40 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-2000' />
            <div className='relative z-10 space-y-6'>
              <div className='w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary mx-auto shadow-xl border border-primary/10 group-hover:scale-110 transition-transform'>
                <Target className='w-8 h-8' />
              </div>
              <h4 className='text-2xl font-bold text-foreground'>
                Need a Tailored Strategy?
              </h4>
              <p className='text-muted-foreground'>
                Unlock potential with our multi-disciplinary expert team.
              </p>
              <button className='px-8 py-3 bg-primary text-white rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/20'>
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
