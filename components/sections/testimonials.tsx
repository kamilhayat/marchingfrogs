import { TESTIMONIALS } from '@/constants';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section
      className='py-20 relative overflow-hidden'
      id='testimonials'
      style={{
        background:
          'linear-gradient(155deg, oklch(0.96 0.025 280) 0%, oklch(0.94 0.03 260) 50%, oklch(0.95 0.02 300) 100%)',
      }}
    >
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.8_0.1_280/0.15)_0%,transparent_60%)]' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.7_0.08_300/0.1)_0%,transparent_60%)]' />
      <div className='absolute inset-0 opacity-10'>
        <svg
          className='absolute inset-0 w-full h-full'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <pattern
              id='t-grid'
              width='40'
              height='40'
              patternUnits='userSpaceOnUse'
            >
              <path
                d='M 40 0 L 0 0 0 40'
                fill='none'
                stroke='var(--primary)'
                strokeWidth='0.5'
              />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#t-grid)' />
        </svg>
      </div>

      <div className='container mx-auto px-4 md:px-0 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16 space-y-4'>
          <div className='section-subtitle mx-auto'>Global Voices</div>
          <h2 className='text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight'>
            Trust Built on{' '}
            <span className='text-primary italic'>Excellence</span>
          </h2>
          <p className='text-muted-foreground max-w-xl mx-auto text-lg font-light'>
            Hear from the organizations and leaders we empower through our
            specialized strategic partnerships.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {TESTIMONIALS.map((t, index) => (
            <div
              key={index}
              className='group relative p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 flex flex-col justify-between overflow-hidden'
            >
              {/* Corner glow */}
              <div className='absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

              {/* Quote icon */}
              <div className='absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-500'>
                <Quote className='w-12 h-12' />
              </div>

              <div className='relative z-10 space-y-5'>
                {/* Stars */}
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-4 h-4 fill-amber-400 text-amber-400'
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className='text-lg text-foreground font-serif italic font-light leading-relaxed'>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className='pt-8 mt-8 border-t border-primary/10 flex items-center gap-4 relative z-10'>
                <div className='w-12 h-12 rounded-2xl bg-linear-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20 shrink-0'>
                  {t.avatar}
                </div>
                <div>
                  <h4 className='font-bold text-foreground group-hover:text-primary transition-colors'>
                    {t.author}
                  </h4>
                  <p className='text-xs text-muted-foreground'>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
