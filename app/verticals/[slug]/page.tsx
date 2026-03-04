'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { VERTICAL_DETAILS } from '@/constants/data/verticals_details';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function VerticalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const data = VERTICAL_DETAILS[slug as keyof typeof VERTICAL_DETAILS];

  if (!data) return notFound();

  const colorMap = {
    emerald:
      'from-emerald-500/20 to-teal-500/10 text-emerald-500 border-emerald-500/20',
    amber:
      'from-amber-500/20 to-orange-500/10 text-amber-500 border-amber-500/20',
    blue: 'from-blue-500/20 to-indigo-500/10 text-blue-500 border-blue-500/20',
  };

  const bgGradientMap = {
    emerald: 'bg-linear-to-br from-emerald-500/5 via-transparent to-teal-500/5',
    amber: 'bg-linear-to-br from-amber-500/5 via-transparent to-orange-500/5',
    blue: 'bg-linear-to-br from-blue-500/5 via-transparent to-indigo-500/5',
  };

  const activeColor = colorMap[data.color as keyof typeof colorMap];
  const activeBg = bgGradientMap[data.color as keyof typeof bgGradientMap];

  const featureColors = [
    'text-rose-500 from-rose-500/20 to-rose-500/10 border-rose-500/20',
    'text-violet-500 from-violet-500/20 to-violet-500/10 border-violet-500/20',
    'text-sky-500 from-sky-500/20 to-sky-500/10 border-sky-500/20',
    'text-amber-500 from-amber-500/20 to-amber-500/10 border-amber-500/10',
  ];

  const featureCardBgs = [
    'bg-rose-50/50 border-rose-100/50 hover:bg-rose-50 hover:border-rose-200',
    'bg-violet-50/50 border-violet-100/50 hover:bg-violet-50 hover:border-violet-200',
    'bg-sky-50/50 border-sky-100/50 hover:bg-sky-50 hover:border-sky-200',
    'bg-amber-50/50 border-amber-100/50 hover:bg-amber-50 hover:border-amber-200',
  ];

  return (
    <main className='min-h-screen pt-32 pb-20'>
      {/* Hero Section */}
      <section className='relative px-6 mb-20 overflow-hidden'>
        <div
          className={cn(
            'absolute inset-0 -z-10 blur-[120px] opacity-40',
            activeBg,
          )}
        />

        <div className='max-w-6xl mx-auto'>
          <div className='space-y-6 text-center lg:text-left'>
            <div
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border text-xs font-black tracking-[0.2em] uppercase',
                activeColor,
              )}
            >
              <data.icon className='w-4 h-4' />
              Strategic Business Vertical
            </div>

            <h1 className='text-5xl lg:text-7xl font-serif font-bold text-slate-900 leading-tight tracking-tight'>
              {(() => {
                const words = data.title.split(' ');
                const lastWord = words.pop();
                const mainPart = words.join(' ');
                return (
                  <>
                    {mainPart.split(' & ').map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className='text-primary italic'> & </span>
                        )}
                      </span>
                    ))}{' '}
                    <span className='text-primary italic'>{lastWord}</span>
                  </>
                );
              })()}
            </h1>

            <p className='text-xl lg:text-2xl text-slate-500 font-light max-w-3xl mx-auto lg:mx-0 leading-relaxed'>
              {data.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Content Split */}
      <section className='max-container padding-container-sm grid lg:grid-cols-5 gap-16 items-start'>
        <div className='lg:col-span-3 space-y-12'>
          {/* Main Description */}
          <div className='space-y-6'>
            <h2 className='text-3xl font-serif font-bold text-slate-900'>
              The Vision
            </h2>
            <p className='text-lg text-slate-600 leading-relaxed font-light'>
              {data.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {data.features.map((feature, idx) => (
              <div
                key={idx}
                className={cn(
                  'p-6 rounded-3xl border transition-all duration-500 group relative overflow-hidden',
                  featureCardBgs[idx % featureCardBgs.length],
                )}
              >
                <div className='absolute inset-0 bg-linear-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />

                <div
                  className={cn(
                    'relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm bg-linear-to-br border',
                    featureColors[idx % featureColors.length],
                  )}
                >
                  <feature.icon className='w-7 h-7' />
                </div>
                <h3 className='relative text-lg font-bold text-slate-900 mb-2'>
                  {feature.title}
                </h3>
                <p className='relative text-sm text-slate-500 leading-relaxed font-light'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Integrated Strategy */}
          <div className='p-8 lg:p-12 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]' />
            <div className='relative z-10 space-y-6'>
              <div className='flex items-center gap-3 text-primary font-black uppercase tracking-[0.3em] text-[10px]'>
                <CheckCircle2 className='w-4 h-4' />
                Integrated Strategy
              </div>
              <h3 className='text-3xl font-serif font-bold'>
                {data.strategyTitle}
              </h3>
              <p className='text-white/60 text-lg font-light leading-relaxed'>
                {data.strategyDesc}
              </p>
              <div className='flex items-center gap-4 pt-4'>
                <div className='flex -space-x-3'>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className='w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold'
                    >
                      MF
                    </div>
                  ))}
                </div>
                <span className='text-sm text-white/40'>
                  Trusted by global enterprise leaders
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className='lg:col-span-2 sticky top-32'>
          <div className='relative p-1 rounded-[2.6rem] bg-linear-to-br from-primary/20 via-transparent to-primary/20 shadow-2xl shadow-primary/5'>
            <div className='bg-white rounded-[2.5rem]'>
              <QuoteForm customProjectTypes={data.projectTypes} />
            </div>
          </div>

          <div className='mt-8 p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-between group'>
            <div className='space-y-1'>
              <div className='text-[10px] font-black uppercase tracking-[0.2em] text-slate-400'>
                {data.ctaText}
              </div>
              <div className='text-sm font-bold text-slate-900'>
                Contact Our Specialists
              </div>
            </div>
            <div className='w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm'>
              <ArrowRight className='w-5 h-5' />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
