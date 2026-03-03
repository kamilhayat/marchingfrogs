import { PROCESS_STEPS } from '@/constants';
import { GridPattern } from '@/components/sections/svg';

const Process = () => {
  return (
    <section
      className='py-8 bg-background relative overflow-hidden'
      id='process'
    >
      <GridPattern />

      <div className='container mx-auto px-4 md:px-0 relative z-10'>
        {/* Header Section */}
        <div className='max-w-4xl mb-12'>
          <div className='section-subtitle'>Our Journey</div>
          <h2 className='section-title font-sans font-bold text-foreground leading-tight tracking-tight mb-4'>
            The{' '}
            <span className='text-primary italic font-serif'>
              Marching Method
            </span>
          </h2>
          <p className='text-lg text-muted-foreground font-light leading-relaxed max-w-2xl'>
            A precision-engineered lifecycle designed to transform organizations
            into global leaders through technology and strategy.
          </p>
        </div>

        {/* Process Steps List */}
        <div className='space-y-8 relative'>
          {/* Connecting Line (Vertical on mobile, horizontal logic on desktop) */}
          <div className='absolute left-8 top-10 bottom-10 w-px bg-border hidden md:block' />

          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.title}
              className='group relative flex flex-col md:flex-row items-start gap-8 md:gap-16'
            >
              {/* Step Number & Connector */}
              <div className='relative z-20'>
                <div className='w-14 h-14 rounded-full bg-secondary border border-border flex items-center justify-center text-xl font-black text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl'>
                  {index + 1}
                </div>
                {/* Glowing Pulse Effect */}
                <div className='absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
              </div>

              {/* Step Content Card */}
              <div className='grow p-8 rounded-3xl bg-card border border-border hover:border-primary/20 transition-all duration-500 hover:shadow-2xl relative overflow-hidden'>
                {/* Icon in top right */}
                <div className='absolute top-8 right-8 text-secondary group-hover:text-primary/10 transition-colors duration-700'>
                  <step.icon className='w-12 h-12' />
                </div>

                <div className='relative z-10 space-y-4'>
                  <h3 className='text-xl font-bold text-foreground group-hover:text-primary transition-colors'>
                    {step.title}
                  </h3>
                  <p className='text-base text-muted-foreground leading-relaxed font-light max-w-3xl'>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
