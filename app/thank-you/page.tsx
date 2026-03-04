import Link from 'next/link';
import { CheckCircle2, ArrowRight, Home, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ThankYouPage() {
  return (
    <main className='min-h-screen flex items-center justify-center bg-slate-50 px-6 relative overflow-hidden'>
      {/* Dynamic Background Elements */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-10'>
        <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse' />
        <div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-700' />
      </div>

      <div className='max-w-2xl w-full text-center space-y-10 relative z-10'>
        {/* Success Icon Animation */}
        <div className='relative inline-flex'>
          <div className='absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-ping' />
          <div className='relative w-24 h-24 bg-white rounded-full flex items-center justify-center border border-slate-100 shadow-2xl'>
            <CheckCircle2 className='w-12 h-12 text-primary' />
          </div>
        </div>

        <div className='space-y-4'>
          <h1 className='text-4xl md:text-6xl font-serif font-black text-slate-900 tracking-tight'>
            Request <span className='text-primary italic'>Received</span>
          </h1>
          <p className='text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto'>
            Thank you for reaching out to Marching Frogs. Our strategic team has
            been notified and we will review your requirements immediately.
          </p>
        </div>

        <div className='pt-6 flex flex-col sm:flex-row items-center justify-center gap-4'>
          <Link href='/' className='w-full sm:w-auto'>
            <Button
              size='lg'
              className='w-full sm:w-auto rounded-full px-8 gap-2 shadow-xl shadow-primary/20'
            >
              <Home className='w-4 h-4' />
              Back to Home
            </Button>
          </Link>
          <Link href='/#verticals' className='w-full sm:w-auto'>
            <Button
              variant='outline'
              size='lg'
              className='w-full sm:w-auto rounded-full px-8 gap-2 border-slate-200'
            >
              Explore Services
              <ArrowRight className='w-4 h-4' />
            </Button>
          </Link>
        </div>

        <p className='text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black'>
          Global Excellence · Marching Frogs Enterprise
        </p>
      </div>
    </main>
  );
}
