import { QuoteForm } from '@/components/forms/QuoteForm';

export default function RequestQuote() {
  return (
    <main className='min-h-screen pt-32 pb-20 px-6 bg-[#0a0a0a] text-white overflow-hidden relative'>
      {/* Decorative Background Elements */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse' />
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] -z-10' />

      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        {/* Left Side Content */}
        <div className='space-y-8 relative'>
          <div className='space-y-4'>
            <h1 className='text-4xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] bg-linear-to-br from-white via-white to-white/40 bg-clip-text text-transparent'>
              Elevate your{' '}
              <span className='text-primary italic'>IP strategy</span> with
              precision.
            </h1>
            <p className='text-xl text-zinc-400 leading-relaxed max-w-xl'>
              Partner with Marching Frogs for expert IP research and analysis.
              Our tailored approach ensures absolute clarity in your patent
              landscape.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4'>
            <div className='p-6 rounded-3xl bg-zinc-900/50 border border-white/5 space-y-3 hover:border-primary/50 transition-colors group'>
              <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold group-hover:scale-110 transition-transform'>
                1
              </div>
              <h3 className='font-bold text-lg text-white'>Rapid Response</h3>
              <p className='text-sm text-zinc-400 leading-relaxed'>
                Detailed preliminary quotes delivered within 24 hours.
              </p>
            </div>
            <div className='p-6 rounded-3xl bg-zinc-900/50 border border-white/5 space-y-3 hover:border-primary/50 transition-colors group'>
              <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold group-hover:scale-110 transition-transform'>
                2
              </div>
              <h3 className='font-bold text-lg text-white'>Elite Expertise</h3>
              <p className='text-sm text-zinc-400 leading-relaxed'>
                Direct collaboration with seasoned IP specialist teams.
              </p>
            </div>
            <div className='p-6 rounded-3xl bg-zinc-900/50 border border-white/5 space-y-3 hover:border-primary/50 transition-colors group'>
              <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold group-hover:scale-110 transition-transform'>
                3
              </div>
              <h3 className='font-bold text-lg text-white'>Ironclad Privacy</h3>
              <p className='text-sm text-zinc-400 leading-relaxed'>
                Your intellectual property is secured by industry-leading NDAs.
              </p>
            </div>
            <div className='p-6 rounded-3xl bg-zinc-900/50 border border-white/5 space-y-3 hover:border-primary/50 transition-colors group'>
              <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold group-hover:scale-110 transition-transform'>
                4
              </div>
              <h3 className='font-bold text-lg text-white'>Bespoke Insights</h3>
              <p className='text-sm text-zinc-400 leading-relaxed'>
                Customized reports addressing your unique technical hurdles.
              </p>
            </div>
          </div>

          <div className='pt-8'>
            <div className='flex items-center gap-4 text-sm font-medium text-zinc-500'>
              <span className='flex h-2 w-2 rounded-full bg-primary animate-ping' />
              Trusted by 500+ global law firms and innovative corporations
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className='relative'>
          <div className='absolute -inset-1 bg-linear-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur-2xl opacity-50' />
          <QuoteForm />
        </div>
      </div>
    </main>
  );
}
