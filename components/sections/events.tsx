import Image from 'next/image';
import { Calendar, MapPin, Globe } from 'lucide-react';
import { events } from '@/constants';

const locationColors: Record<string, string> = {
  UAE: 'from-amber-500 to-orange-500',
  India: 'from-primary to-violet-600',
  Malaysia: 'from-emerald-500 to-teal-500',
};

function getGradient(area: string = '') {
  if (area.includes('UAE') || area.includes('Dubai'))
    return locationColors['UAE'];
  if (
    area.includes('India') ||
    area.includes('Mumbai') ||
    area.includes('Delhi') ||
    area.includes('Bangalore')
  )
    return locationColors['India'];
  if (area.includes('Malaysia')) return locationColors['Malaysia'];
  return 'from-primary to-accent';
}

const EventsSection = () => {
  return (
    <section
      className='py-20 relative overflow-hidden'
      id='events'
      style={{
        background:
          'linear-gradient(160deg, oklch(0.11 0.04 260) 0%, oklch(0.14 0.05 240) 50%, oklch(0.10 0.04 280) 100%)',
      }}
    >
      {/* Ambient glows */}
      <div className='absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none' />
      <div className='absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none' />

      <div className='container mx-auto px-4 md:px-0 relative z-10'>
        {/* Header */}
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16'>
          <div className='space-y-4'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-black tracking-[0.2em] uppercase'>
              <Globe className='w-3.5 h-3.5 text-primary animate-pulse' />
              Bespoke Global Legal Summits
            </div>
            <h2 className='text-3xl md:text-5xl font-serif font-bold text-white leading-tight'>
              Summit{' '}
              <span className='text-transparent bg-clip-text bg-linear-to-r from-primary via-violet-400 to-accent'>
                Calendar 2025–26
              </span>
            </h2>
            <p className='text-white/50 text-base max-w-xl font-light'>
              Elite legal summits across Dubai, India &amp; Malaysia — where IP
              leaders, innovators and counsel connect.
            </p>
          </div>

          {/* Live indicator */}
          <div className='flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 shrink-0'>
            <div className='relative flex items-center justify-center'>
              <div className='w-2.5 h-2.5 rounded-full bg-emerald-400' />
              <div className='absolute w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-60' />
            </div>
            <span className='text-white/70 text-sm font-semibold'>
              6 Global Events
            </span>
          </div>
        </div>

        {/* Events — 2-column top row, horizontal scroll bottom */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
          {events.map((ev, index) => {
            const gradient = getGradient(ev.area);
            const isFeatured = index === 0;

            return (
              <div
                key={ev.id}
                className={`group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 ${
                  isFeatured ? 'md:col-span-2 xl:col-span-1' : ''
                }`}
              >
                {/* Image */}
                <div className='relative h-52 overflow-hidden'>
                  <Image
                    src={ev.image}
                    alt={ev.title}
                    fill
                    sizes='(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw'
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  {/* Gradient overlay */}
                  <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent' />

                  {/* Top badges */}
                  <div className='absolute top-4 inset-x-4 flex items-start justify-between'>
                    {/* Event number */}
                    <div className='text-[10px] font-black text-white/40 tracking-[0.3em]'>
                      {String(index + 1).padStart(2, '0')} /{' '}
                      {String(events.length).padStart(2, '0')}
                    </div>
                    {/* Area pill */}
                    <div
                      className={`inline-flex items-center gap-1.5 rounded-full bg-linear-to-r ${gradient} px-3 py-1 text-[10px] text-white font-black tracking-wide shadow-lg`}
                    >
                      <span className='h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse' />
                      {ev.area ?? 'Global'}
                    </div>
                  </div>

                  {/* Bottom date on image */}
                  <div className='absolute bottom-4 left-4'>
                    <div className='flex items-center gap-1.5 text-white/80 text-xs font-semibold'>
                      <Calendar className='w-3.5 h-3.5' />
                      {ev.date}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className='p-5 flex flex-col gap-3'
                  style={{ background: 'oklch(0.14 0.04 255 / 0.9)' }}
                >
                  <h3
                    className={`text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:${gradient} transition-all duration-300 leading-snug`}
                  >
                    {ev.title}
                  </h3>

                  <div className='flex items-start gap-1.5 text-white/40 text-xs'>
                    <MapPin className='w-3.5 h-3.5 shrink-0 mt-0.5' />
                    <span className='line-clamp-2 leading-relaxed'>
                      {ev.location}
                    </span>
                  </div>

                  <p className='text-white/40 text-xs leading-relaxed line-clamp-2'>
                    {ev.description}
                  </p>

                  {/* Bottom divider line */}
                  <div
                    className={`h-0.5 rounded-full bg-linear-to-r ${gradient} opacity-40 mt-1`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <div className='mt-10 text-center'>
          <p className='text-white/25 text-xs tracking-[0.3em] uppercase font-bold'>
            Bringing Global Legal Excellence to Every Continent
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
