import { CheckCircle2, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { VERTICALS, ABOUT_CONTENT } from '@/constants';

const About = () => {
  return (
    <section
      className='py-16 bg-background relative overflow-hidden'
      id='about'
    >
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-start'>
          {/* Main About Content */}
          <div className='space-y-10'>
            <div className='space-y-4'>
              <h2 className='section-subtitle'>{ABOUT_CONTENT.badge}</h2>
              <h3 className='section-title'>
                {ABOUT_CONTENT.title.main} <br />
                <span className='italic text-primary'>
                  {ABOUT_CONTENT.title.highlight}
                </span>
              </h3>
            </div>

            <div className='space-y-6'>
              {ABOUT_CONTENT.descriptions.map((desc, index) => (
                <p key={index} className='section-desc'>
                  {desc}
                </p>
              ))}
            </div>

            <div className='grid sm:grid-cols-2 gap-6 pt-4'>
              {ABOUT_CONTENT.features.map((feature) => (
                <div
                  key={feature}
                  className='flex items-center gap-3 p-4 rounded-2xl bg-secondary/20 border border-secondary/30'
                >
                  <CheckCircle2 className='w-5 h-5 text-primary shrink-0' />
                  <span className='font-semibold text-foreground text-sm'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Specialised Verticals Grid */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <h4 className='text-2xl font-serif font-bold text-foreground'>
                Our Specialised Verticals
              </h4>
              <p className='section-desc text-base'>
                Delivering excellence across diverse industries through focused
                expertise.
              </p>
            </div>

            <div className='grid gap-4'>
              {VERTICALS.map((vertical) => (
                <div
                  key={vertical.title}
                  className='group p-6 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl'
                >
                  <div className='flex gap-6'>
                    <div
                      className={cn(
                        'w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110',
                        vertical.color,
                      )}
                    >
                      <vertical.icon className='w-7 h-7' />
                    </div>
                    <div className='space-y-2'>
                      <div className='flex items-center justify-between'>
                        <h5 className='font-bold text-lg text-foreground group-hover:text-primary transition-colors'>
                          {vertical.title}
                        </h5>
                        <ExternalLink className='w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity' />
                      </div>
                      <p className='text-sm text-muted-foreground leading-relaxed'>
                        {vertical.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Integrated Approach Section */}
        <div className='mt-24 p-12 rounded-[3rem] bg-secondary/10 border border-secondary/20 relative overflow-hidden group'>
          <div className='absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2' />
          <div className='relative z-10 grid lg:grid-cols-3 gap-12 items-center'>
            <div className='lg:col-span-2 space-y-6'>
              <h4 className='text-3xl font-serif font-bold text-foreground'>
                {ABOUT_CONTENT.integratedApproach.title}
              </h4>
              <p className='section-desc'>
                {ABOUT_CONTENT.integratedApproach.description}
              </p>
            </div>
            <div className='flex justify-center'>
              <div className='relative w-48 h-48'>
                <div className='absolute inset-0 bg-primary/20 rounded-full animate-ping' />
                <div className='absolute inset-4 bg-primary/40 rounded-full' />
                <div className='absolute inset-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-center p-4'>
                  {ABOUT_CONTENT.integratedApproach.cta}
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
