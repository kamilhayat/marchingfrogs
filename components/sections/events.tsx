import Image from 'next/image';
import { Calendar, MapPin, Globe } from 'lucide-react';
import { events } from '@/constants';
import { cn } from '@/lib/utils';

function getGradient(area: string = '') {
  if (area.includes('UAE') || area.includes('Dubai'))
    return { from: 'from-amber-500', to: 'to-orange-500' };
  if (
    area.includes('India') ||
    area.includes('Mumbai') ||
    area.includes('Delhi') ||
    area.includes('Bangalore')
  )
    return { from: 'from-primary', to: 'to-violet-600' };
  if (area.includes('Malaysia'))
    return { from: 'from-emerald-500', to: 'to-teal-500' };
  return { from: 'from-primary', to: 'to-accent' };
}

const EventsSection = () => {
  const today = new Date();

  const parseEventDate = (dateStr: string) => {
    const cleanDate = dateStr.includes('-')
      ? dateStr.split('-')[1].trim()
      : dateStr.trim();
    return new Date(cleanDate);
  };

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = parseEventDate(a.date);
    const dateB = parseEventDate(b.date);
    const isPastA = dateA < today;
    const isPastB = dateB < today;

    if (isPastA && !isPastB) return 1;
    if (!isPastA && isPastB) return -1;

    if (!isPastA && !isPastB) return dateA.getTime() - dateB.getTime();
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section
      className='relative overflow-hidden'
      id='events'
      style={{
        background:
          'linear-gradient(160deg, oklch(0.11 0.04 260) 0%, oklch(0.14 0.05 240) 50%, oklch(0.10 0.04 280) 100%)',
      }}
    >
      <div className='max-container padding-container-sm relative z-10'>
        {/* Header */}
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
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
              {events.length} Global Events
            </span>
          </div>
        </div>

        {/* Events — 2-column top row, horizontal scroll bottom */}
        {/* Events Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
          {sortedEvents.map((ev, index) => {
            const colors = getGradient(ev.area);
            const isFeatured = index === 0 && parseEventDate(ev.date) >= today;

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

                  <div className='absolute top-4 inset-x-4 flex items-start justify-between'>
                    <div className='text-[10px] font-black text-white/40 tracking-[0.3em]'>
                      {String(index + 1).padStart(2, '0')} /{' '}
                      {String(events.length).padStart(2, '0')}
                    </div>
                    <div
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full bg-linear-to-r px-3 py-1 text-[10px] text-white font-black tracking-wide shadow-lg',
                        colors.from,
                        colors.to,
                      )}
                    >
                      <span className='h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse' />
                      {ev.area ?? 'Global'}
                    </div>
                  </div>
                </div>

                <div
                  className='p-5 flex flex-col gap-3 h-full'
                  style={{ background: 'oklch(0.14 0.04 255 / 0.9)' }}
                >
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.2em]'>
                      <Calendar className='w-3 h-3' />
                      {ev.date}
                    </div>
                    <h3
                      className={cn(
                        'text-lg font-bold text-white transition-all duration-300 leading-snug',
                      )}
                    >
                      {ev.title}
                    </h3>
                  </div>

                  <div className='flex items-start gap-1.5 text-white/40 text-xs'>
                    <MapPin className='w-3.5 h-3.5 shrink-0 mt-0.5' />
                    <span className='line-clamp-2 leading-relaxed'>
                      {ev.location}
                    </span>
                  </div>

                  <p className='text-white/40 text-xs leading-relaxed line-clamp-2'>
                    {ev.description}
                  </p>

                  <div
                    className={cn(
                      'h-0.5 rounded-full bg-linear-to-r opacity-40 mt-auto pt-0.5',
                      colors.from,
                      colors.to,
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>

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
