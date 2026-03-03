import { Globe, Users, Award, Zap, TrendingUp, Shield } from 'lucide-react';

const stats = [
  {
    value: '7+',
    label: 'Years of Excellence',
    description: 'Operating globally since 2017',
    icon: Award,
    color: 'text-primary',
    glow: 'from-primary/20',
  },
  {
    value: '50+',
    label: 'Global Clients',
    description: 'Across 20+ countries worldwide',
    icon: Globe,
    color: 'text-sky-400',
    glow: 'from-sky-400/20',
  },
  {
    value: '1000+',
    label: 'IP Projects Delivered',
    description: 'Patents, searches & analyses',
    icon: Shield,
    color: 'text-accent',
    glow: 'from-accent/20',
  },
  {
    value: '4',
    label: 'Specialised Verticals',
    description: 'Focused business engines',
    icon: TrendingUp,
    color: 'text-secondary',
    glow: 'from-secondary/20',
  },
  {
    value: '200+',
    label: 'Experts Worldwide',
    description: 'Multidisciplinary professionals',
    icon: Users,
    color: 'text-violet-400',
    glow: 'from-violet-400/20',
  },
  {
    value: '24/7',
    label: 'Global Operations',
    description: 'Round-the-clock delivery',
    icon: Zap,
    color: 'text-emerald-400',
    glow: 'from-emerald-400/20',
  },
];

const Stats = () => {
  return (
    <section
      className='py-20 relative overflow-hidden'
      id='stats'
      style={{
        background:
          'linear-gradient(135deg, oklch(0.12 0.05 280) 0%, oklch(0.14 0.06 260) 40%, oklch(0.11 0.04 300) 100%)',
      }}
    >
      {/* Background decorations */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.5_0.2_283/0.15)_0%,transparent_60%)]' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.6_0.1_150/0.1)_0%,transparent_60%)]' />
      <div className='absolute inset-0 opacity-10'>
        <svg
          className='absolute inset-0 w-full h-full'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <pattern
              id='stats-grid'
              width='40'
              height='40'
              patternUnits='userSpaceOnUse'
            >
              <path
                d='M 40 0 L 0 0 0 40'
                fill='none'
                stroke='white'
                strokeWidth='0.5'
              />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#stats-grid)' />
        </svg>
      </div>

      <div className='container mx-auto px-4 md:px-0 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black tracking-[0.2em] uppercase mb-4'>
            Our Impact
          </div>
          <h2 className='text-3xl md:text-5xl font-serif font-bold text-white leading-tight'>
            Numbers That{' '}
            <span className='text-transparent bg-clip-text bg-linear-to-r from-primary via-violet-300 to-accent'>
              Define Us
            </span>
          </h2>
          <p className='text-white/60 max-w-xl mx-auto text-lg font-light'>
            A decade of excellence, measured in milestones and meaningful
            outcomes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className='group relative p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden'
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${stat.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className='relative z-10 space-y-4'>
                {/* Icon */}
                <div className='w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>

                {/* Value */}
                <div
                  className={`text-4xl md:text-5xl font-black ${stat.color} leading-none`}
                >
                  {stat.value}
                </div>

                {/* Label & Description */}
                <div>
                  <div className='text-white font-bold text-base md:text-lg'>
                    {stat.label}
                  </div>
                  <div className='text-white/40 text-sm mt-1 font-light'>
                    {stat.description}
                  </div>
                </div>
              </div>

              {/* Decorative number backdrop */}
              <div
                className={`absolute -bottom-4 -right-2 text-8xl font-black ${stat.color} opacity-5 pointer-events-none select-none`}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
