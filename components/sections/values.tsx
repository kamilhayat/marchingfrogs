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
      className='py-16 bg-background relative overflow-hidden'
      id='values'
    >
      <FloatingOrbs />
      <GridPattern />
      <Particles />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Headline Section */}
        <div className='max-w-4xl mb-8'>
          <div className='section-subtitle'>
            Our Foundation
          </div>
          <h3 className='section-title font-serif font-bold text-foreground leading-[1.1] tracking-tight'>
            Built on{' '}
            <span className='text-primary italic animate-pulse'>Purpose</span>{' '}
            <br />
            Driven by Values.
          </h3>
        </div>

        {/* Mission & Vision - High Impact Split */}
        <div className='grid lg:grid-cols-12 gap-8 mb-24'>
          {/* Mission Card */}
          <div className='lg:col-span-7 group relative'>
            <div className='absolute inset-0 bg-linear-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]' />
            <div className='relative h-full p-10 md:p-14 rounded-[3rem] bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-700 shadow-2xl'>
              <div className='absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] group-hover:bg-primary/10 transition-colors duration-700' />

              <div className='relative z-10'>
                <div className='flex items-start justify-between mb-12'>
                  <div className='w-24 h-24 rounded-4xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-primary/20'>
                    <Target className='w-12 h-12' />
                  </div>
                  <span className='text-[10rem] font-bold text-foreground/2 leading-none select-none group-hover:text-primary/5 transition-colors duration-700'>
                    M
                  </span>
                </div>

                <h4 className='text-sm font-bold tracking-[0.5em] text-primary uppercase mb-6'>
                  The Mission
                </h4>
                <h3 className='text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight'>
                  {COMPANY_VALUES.mission.title}
                </h3>
                <p className='text-xl text-muted-foreground leading-relaxed max-w-2xl'>
                  {COMPANY_VALUES.mission.description}
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className='lg:col-span-5 group relative'>
            <div className='absolute inset-0 bg-linear-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]' />
            <div className='relative h-full p-10 md:p-14 rounded-[3rem] bg-secondary/10 border border-secondary/20 overflow-hidden hover:border-accent/50 transition-all duration-700 shadow-xl'>
              <div className='absolute -bottom-24 -left-24 w-80 h-80 bg-accent/5 rounded-full blur-[100px] group-hover:bg-accent/10 transition-colors duration-700' />

              <div className='relative z-10'>
                <div className='flex items-start justify-between mb-12'>
                  <div className='w-20 h-20 rounded-3xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-2xl shadow-accent/20'>
                    <Eye className='w-10 h-10' />
                  </div>
                  <span className='text-[8rem] font-bold text-foreground/2 leading-none select-none group-hover:text-accent/5 transition-colors duration-700'>
                    V
                  </span>
                </div>

                <h4 className='text-sm font-bold tracking-[0.5em] text-accent uppercase mb-6'>
                  The Vision
                </h4>
                <h3 className='text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 leading-tight'>
                  {COMPANY_VALUES.vision.title}
                </h3>
                <p className='text-lg text-muted-foreground leading-relaxed'>
                  {COMPANY_VALUES.vision.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className='space-y-8'>
          <div className='flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-12'>
            <div className='space-y-4'>
              <h2 className='section-subtitle text-left m-0'>The Principles</h2>
              <h3 className='section-title font-serif text-foreground'>
                Core Values
              </h3>
            </div>
            <p className='text-muted-foreground max-w-md text-lg leading-relaxed italic'>
              "The six pillars that define our commitment to excellence and
              community."
            </p>
          </div>

          {/* Bento Style Grid for Values */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {COMPANY_VALUES.values.map((value, index) => (
              <div
                key={value.title}
                className='group relative p-6 rounded-[2.5rem] bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.1)] hover:-translate-y-3 overflow-hidden'
              >
                {/* Decorative Elements */}
                <div className='absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700' />
                <div className='absolute -bottom-4 -left-4 text-8xl font-black text-foreground/10 group-hover:text-primary/20 transition-all duration-700 pointer-events-none'>
                  0{index + 1}
                </div>

                <div className='relative z-10'>
                  <div className='w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center text-primary mb-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500 shadow-sm'>
                    <value.icon className='w-8 h-8' />
                  </div>

                  <h4 className='text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300'>
                    {value.title}
                  </h4>

                  <p className='text-muted-foreground leading-relaxed text-base lg:text-lg mb-8'>
                    {value.description}
                  </p>

                  <div className='flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary/40 group-hover:text-primary transition-colors duration-500 uppercase'>
                    Fundamental Pillar{' '}
                    <ArrowUpRight className='w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
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
