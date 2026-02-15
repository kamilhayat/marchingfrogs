import { TESTIMONIALS } from '@/constants';
import { Quote, Star } from 'lucide-react';
import { GridPattern } from '@/components/sections/svg';

const Testimonials = () => {
  return (
    <section
      className='py-24 bg-secondary/5 relative overflow-hidden'
      id='testimonials'
    >
      <GridPattern />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Header */}
        <div className='max-w-4xl mb-20'>
          <div className='section-subtitle'>Global Voices</div>
          <h2 className='text-4xl md:text-5xl lg:text-7xl font-sans font-bold text-foreground leading-tight tracking-tight mb-8'>
            Trust Built on{' '}
            <span className='text-primary italic font-serif'>Excellence</span>
          </h2>
          <p className='text-xl md:text-2xl text-muted-foreground font-light leading-relaxed'>
            Hear from the organizations and leaders we empower through our
            specialized strategic partnerships.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {TESTIMONIALS.map((t, index) => (
            <div
              key={index}
              className='group relative p-10 rounded-[3rem] bg-card border border-border hover:border-primary/40 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between'
            >
              {/* Quote Icon */}
              <div className='absolute top-8 right-10 text-secondary group-hover:text-primary/10 transition-colors duration-700'>
                <Quote className='w-16 h-16' />
              </div>

              <div className='space-y-8 relative z-10'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-4 h-4 fill-primary text-primary'
                    />
                  ))}
                </div>
                <p className='text-xl md:text-2xl text-foreground font-light leading-relaxed italic'>
                  "{t.quote}"
                </p>
              </div>

              <div className='pt-10 mt-10 border-t border-border flex items-center gap-4'>
                <div className='w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg'>
                  {t.avatar}
                </div>
                <div>
                  <h4 className='text-lg font-bold text-foreground group-hover:text-primary transition-colors'>
                    {t.author}
                  </h4>
                  <p className='text-xs text-muted-foreground uppercase tracking-widest'>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Badge */}
        <div className='mt-24 flex justify-center'>
          <div className='px-10 py-5 rounded-4xl bg-card border border-border flex items-center gap-10 shadow-xl group hover:border-primary/30 transition-all'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-foreground'>500+</div>
              <div className='text-[10px] font-black text-muted-foreground/30 uppercase tracking-[0.2em]'>
                Global Partners
              </div>
            </div>
            <div className='w-px h-10 bg-border' />
            <div className='text-center'>
              <div className='text-3xl font-bold text-foreground'>25+</div>
              <div className='text-[10px] font-black text-muted-foreground/30 uppercase tracking-[0.2em]'>
                Active Countries
              </div>
            </div>
            <div className='w-px h-10 bg-border' />
            <div className='text-center'>
              <div className='text-3xl font-bold text-foreground'>98%</div>
              <div className='text-[10px] font-black text-muted-foreground/30 uppercase tracking-[0.2em]'>
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
