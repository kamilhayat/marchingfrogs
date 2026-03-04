import { Flag, Rocket, MapPin, Globe, Target } from 'lucide-react';

const milestones = [
  {
    year: '2018',
    title: 'The Inception',
    description:
      'Founded with a core team in India, driven by a vision to redefine IP and legal support services globally.',
    icon: Flag,
    color: 'bg-blue-500',
    text: 'text-blue-600',
  },
  {
    year: '2020',
    title: 'Service Expansion',
    description:
      'Scaled operations and broadened our multi-disciplinary expertise to serve complex global IP requirements.',
    icon: Rocket,
    color: 'bg-violet-500',
    text: 'text-violet-600',
  },
  {
    year: '2022',
    title: 'SE Asia Presence',
    description:
      'Established a strategic hub in Malaysia to accelerate our footprint and client delivery in the APAC region.',
    icon: MapPin,
    color: 'bg-emerald-500',
    text: 'text-emerald-600',
  },
  {
    year: '2024',
    title: 'Middle East Hub',
    description:
      'Launched our Dubai operations and pioneered the prestigious Bespoke Global Legal Summits.',
    icon: Globe,
    color: 'bg-amber-500',
    text: 'text-amber-600',
  },
  {
    year: '2025+',
    title: 'Global Scale',
    description:
      'Operating across 3 major hubs, serving 50+ elite clients in 20+ countries, delivering 24/7 excellence.',
    icon: Target,
    color: 'bg-primary',
    text: 'text-primary',
  },
];

const Footprint = () => {
  return (
    <section className='relative overflow-hidden bg-white' id='footprint'>
      {/* Premium subtle background grid */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]' />
      <div className='absolute inset-0 bg-white/40' />

      {/* Subtle ambient light */}
      <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none' />

      <div className='max-container padding-container-sm relative z-10'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 tracking-tight'>
            Our Evolution &{' '}
            <span className='text-primary italic font-serif'>Footprint</span>
          </h2>
          <p className='text-slate-500 text-lg max-w-2xl mx-auto'>
            Tracing our path from a visionary startup in 2018 to a global
            powerhouse in IP, legal support, and elite summits.
          </p>
        </div>

        {/* Premium Horizontal Path Timeline */}
        <div className='relative mt-12 mb-16'>
          {/* Continuous tracking line (Desktop) */}
          <div className='hidden lg:block absolute top-[28px] left-[50px] right-[50px] h-[2px] bg-slate-100'>
            <div className='absolute inset-0 bg-linear-to-r from-blue-500 via-emerald-400 to-primary opacity-30 shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]' />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-4'>
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={milestone.year}
                  className='group relative flex flex-row lg:flex-col items-start gap-6 lg:gap-8'
                >
                  {/* Timeline Node */}
                  <div className='relative shrink-0 lg:mx-auto mt-1'>
                    {/* Permanent glowing rings */}
                    <div className='absolute inset-0 bg-white rounded-full scale-125 shadow-sm' />
                    <div
                      className={`absolute inset-0 ${milestone.color} rounded-full opacity-15 scale-[1.4]`}
                    />

                    {/* The Icon Container - now active by default */}
                    <div
                      className={`relative w-14 h-14 rounded-full ${milestone.color} shadow-lg shadow-${milestone.color}/30 flex items-center justify-center z-10 group-hover:-translate-y-1 transition-transform duration-300`}
                    >
                      <Icon className='w-6 h-6 text-white' />
                    </div>

                    {/* Mobile vertical line */}
                    {index !== milestones.length - 1 && (
                      <div className='lg:hidden absolute top-14 left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%+36px)] bg-slate-200' />
                    )}
                  </div>

                  {/* Content */}
                  <div className='flex-1 lg:text-center pt-2 lg:pt-0'>
                    <div
                      className={`inline-block px-3 py-1 rounded-full ${milestone.color} text-white font-black text-xs tracking-widest shadow-md mb-4 lg:-mt-2 lg:mb-5 transition-transform group-hover:-translate-y-1`}
                    >
                      {milestone.year}
                    </div>
                    <h3 className={`text-xl font-bold ${milestone.text} mb-3`}>
                      {milestone.title}
                    </h3>
                    <p className='text-slate-500 leading-relaxed text-sm font-medium'>
                      {milestone.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footprint;
