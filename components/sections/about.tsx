import { CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ABOUT_CONTENT } from '@/constants';
import { GridPattern } from '@/components/sections/svg';

const About = () => {
  return (
    <section className='py-8 bg-background relative overflow-hidden' id='about'>
      <GridPattern />

      <div className='container mx-auto px-4 md:px-0 relative z-10'>
        {/* Centered Header Section */}
        <div className='max-w-4xl mx-auto text-center mb-12 space-y-4'>
          <div className='section-subtitle mx-auto'>{ABOUT_CONTENT.badge}</div>
          <h2 className='section-title font-sans font-bold text-foreground leading-[1.1] tracking-tight'>
            {ABOUT_CONTENT.title.main}{' '}
            <span className='text-primary italic font-serif'>
              {ABOUT_CONTENT.title.highlight}
            </span>
          </h2>
          <div className='h-1.5 w-32 bg-primary/20 rounded-full mx-auto' />
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Main About Content - The Narrative */}
          <div className='space-y-12'>
            <div className='space-y-8'>
              {ABOUT_CONTENT.descriptions.map((desc, index) => (
                <p
                  key={index}
                  className='text-lg md:text-xl text-muted-foreground font-light leading-relaxed border-l-2 border-primary/10 pl-8'
                >
                  {desc}
                </p>
              ))}
            </div>

            <div className='grid sm:grid-cols-2 gap-4 lg:gap-6 pt-6'>
              {ABOUT_CONTENT.features.map((feature) => (
                <div
                  key={feature}
                  className='flex items-center gap-4 p-5 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 group animate-in fade-in slide-in-from-bottom-2'
                >
                  <div className='w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0'>
                    <CheckCircle2 className='w-5 h-5' />
                  </div>
                  <span className='font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Visual - Integrated Approach */}
          <div className='relative'>
            {/* Decorative Background Aura */}
            <div className='absolute inset-0 bg-primary/5 blur-[120px] rounded-full animate-pulse' />

            <div className='relative p-8 md:p-12 rounded-3xl bg-card border border-border shadow-2xl overflow-hidden group'>
              {/* Floating Elements */}
              <div className='absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-1000' />
              <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-1000' />

              <div className='relative z-10 space-y-10'>
                <div className='space-y-6'>
                  {/* <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-[10px] font-black uppercase tracking-[0.4em] text-primary'>
                    The Methodology
                  </div> */}
                  <h4 className='text-2xl md:text-4xl font-serif font-bold text-foreground leading-tight'>
                    {ABOUT_CONTENT.integratedApproach.title}
                  </h4>
                  <p className='text-base md:text-lg text-muted-foreground leading-relaxed font-light'>
                    {ABOUT_CONTENT.integratedApproach.description}
                  </p>
                </div>

                <div className='pt-10 flex flex-col sm:flex-row items-center gap-8'>
                  <div className='relative w-48 h-48 shrink-0'>
                    <div className='absolute inset-0 bg-primary/20 rounded-full animate-ping' />
                    <div className='absolute inset-4 bg-primary/10 border border-primary/20 rounded-full animate-pulse' />
                    <div className='absolute inset-8 bg-linear-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-black text-center p-6 shadow-xl transform group-hover:scale-110 transition-transform duration-700 leading-tight'>
                      {ABOUT_CONTENT.integratedApproach.cta}
                    </div>
                  </div>

                  <div className='space-y-4 text-center sm:text-left'>
                    <p className='text-sm font-bold text-muted-foreground/40 uppercase tracking-[0.2em]'>
                      Strategic Outcome
                    </p>
                    <h5 className='text-2xl font-bold text-foreground group-hover:text-primary transition-colors'>
                      Scalable Excellence
                    </h5>
                    <div className='flex items-center gap-2 text-primary font-bold text-sm cursor-pointer group/btn'>
                      Explore Approach{' '}
                      <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-2 transition-transform' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
