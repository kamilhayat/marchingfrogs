'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { VERTICAL_DETAILS } from '@/constants/data/verticals_details';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DottedConstellation } from '@/components/sections/svg';

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
    'text-white from-rose-400/40 to-rose-400/10 border-white/20',
    'text-white from-violet-400/40 to-violet-400/10 border-white/20',
    'text-white from-sky-400/40 to-sky-400/10 border-white/20',
    'text-white from-amber-400/40 to-amber-400/10 border-white/20',
  ];

  const featureCardBgs = [
    'bg-rose-900 border-white/5 hover:border-rose-500/30',
    'bg-violet-900 border-white/5 hover:border-violet-500/30',
    'bg-sky-900 border-white/5 hover:border-sky-500/30',
    'bg-amber-900 border-white/5 hover:border-amber-500/30',
  ];

  return (
    <main className='min-h-screen pt-10'>
      {/* Hero Section */}
      <section
        className='relative px-6 py-20 overflow-hidden shadow-2xl shadow-primary/20'
        style={{
          background:
            'linear-gradient(165deg, oklch(0.12 0.04 280) 0%, oklch(0.18 0.05 260) 40%, oklch(0.14 0.03 300) 100%)',
        }}
      >
        {/* Decorative Elements */}
        <div className='absolute inset-0 z-0 pointer-events-none'>
          <DottedConstellation />
        </div>

        <div
          className={cn(
            'absolute inset-0 -z-10 blur-[150px] opacity-30',
            activeBg,
          )}
        />

        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div className='space-y-10 text-center lg:text-left'>
              {/* Badge */}
              <div
                className={cn(
                  'inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700',
                  activeColor,
                )}
              >
                <data.icon className='w-4 h-4' />
                Business Vertical
              </div>

              {/* Heading */}
              <h1 className='text-6xl lg:text-8xl font-serif font-bold text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100'>
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
                            <span className='text-primary italic animate-pulse'> & </span>
                          )}
                        </span>
                      ))}{' '}
                      <span className='text-primary italic block lg:inline-block hover:scale-105 transition-transform cursor-default'>
                        {lastWord}
                      </span>
                    </>
                  );
                })()}
              </h1>

              {/* Tagline */}
              <p className='text-xl lg:text-2xl text-white/60 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200'>
                {data.tagline}
              </p>

              {/* Interactive Stamp for Mobile/Tablet in-line */}
              <div className='lg:hidden flex justify-center pt-4'>
                <div className='w-24 h-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center text-white/40'>
                  <div className='text-[8px] font-bold tracking-widest uppercase'>Vertical</div>
                  <div className='text-xl font-bold font-serif text-primary italic'>MF</div>
                  <div className='text-[8px] font-bold tracking-widest uppercase'>Core</div>
                </div>
              </div>
            </div>

            {/* Visual Column / Experience Stamp Desktop */}
            <div className='hidden lg:flex justify-end relative'>
              <div className='relative w-80 h-80 animate-in zoom-in fade-in duration-1000 delay-300'>
                {/* Rotating Rings */}
                <div className='absolute inset-0 rounded-full border-2 border-white/5 animate-[spin_20s_linear_infinite]' />
                <div className='absolute inset-4 rounded-full border border-primary/20 animate-[spin_15s_linear_infinite_reverse]' />

                {/* Main Content Card */}
                <div className='absolute inset-10 rounded-full bg-linear-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/20 flex flex-col items-center justify-center text-center shadow-3xl shadow-primary/20 hover:scale-110 transition-transform duration-700 group cursor-default'>
                  <div className='text-xs font-black tracking-[0.4em] text-primary uppercase mb-2 group-hover:tracking-[0.6em] transition-all'>EST. 2018</div>
                  <div className='text-6xl font-serif font-bold text-white italic mb-1'>MF</div>
                  <div className='h-px w-12 bg-white/20 my-2' />
                  <div className='text-[10px] font-bold text-white/40 uppercase tracking-widest'>Strategic <br /> Excellence</div>
                </div>

                {/* Floating Icons */}
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl animate-bounce duration-3000'>
                  <data.icon className='w-6 h-6 text-primary' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Content Split */}
      <section className='max-container padding-container-sm grid lg:grid-cols-5 gap-16 items-start'>
        <div className='lg:col-span-3 space-y-12'>
          {/* Main Description */}
          <div className='space-y-6'>
            <h2 className='text-3xl font-serif font-bold text-slate-900'>
              {(data as any).visionTitle || 'The Vision'}
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
                <div className='absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />

                <div
                  className={cn(
                    'relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl bg-slate-900/50 border border-white/10 backdrop-blur-sm',
                    featureColors[idx % featureColors.length],
                  )}
                >
                  <feature.icon className='w-7 h-7' />
                </div>
                <h3 className='relative text-lg font-bold text-white mb-2'>
                  {feature.title}
                </h3>
                <p className='relative text-base text-white/85 leading-relaxed font-light'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          {(data as any).pricing && (
            <div className='space-y-8 pt-4'>
              <h2 className='text-3xl font-serif font-bold text-slate-900'>
                {(data as any).pricingTitle || 'Our Pricing'}
              </h2>
              <div className='grid sm:grid-cols-2 gap-8'>
                {(data as any).pricing.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className='p-8 rounded-4xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col relative overflow-hidden group'
                  >
                    <div className='absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform' />
                    <div className='relative z-10'>
                      <div className='flex flex-col gap-2 mb-6'>
                        <h3 className='text-xl font-bold text-slate-900'>
                          {item.title}
                        </h3>
                        <div className='inline-flex bg-primary/10 text-primary px-3 py-1.5 rounded-xl text-sm font-black w-fit'>
                          {item.price}
                        </div>
                      </div>
                      <div className='space-y-6 grow'>
                        <div>
                          <h4 className='text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2'>
                            <div className='w-8 h-px bg-slate-200' />
                            Product Description
                          </h4>
                          <ul className='space-y-3'>
                            {item.description.map((desc: string, i: number) => (
                              <li
                                key={i}
                                className='text-base text-slate-600 flex items-start gap-2.5 leading-relaxed'
                              >
                                <div className='w-1 h-1 rounded-full bg-primary mt-2 shrink-0' />
                                {desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className='text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2'>
                            <div className='w-8 h-px bg-slate-200' />
                            Product Delivery
                          </h4>
                          <ul className='space-y-3'>
                            {item.delivery.map((del: string, i: number) => (
                              <li
                                key={i}
                                className='text-base text-slate-900 font-medium flex items-center gap-2.5 bg-slate-50/50 p-2 rounded-xl border border-slate-100'
                              >
                                <CheckCircle2 className='w-4 h-4 text-primary shrink-0' />
                                {del}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {(data as any).faqs && (
            <div className='space-y-8 pt-8'>
              <h2 className='text-3xl font-serif font-bold text-slate-900'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-4'>
                {(data as any).faqs.map((faq: any, idx: number) => (
                  <div
                    key={idx}
                    className='p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all group'
                  >
                    <h3 className='text-base font-bold text-slate-900 mb-2 flex items-center gap-3'>
                      <span className='text-primary'>Q{idx + 1}.</span>
                      {faq.question}
                    </h3>
                    <p className='text-base text-slate-800 leading-relaxed font-light pl-8'>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

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
