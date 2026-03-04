import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.9_0.05_260/0.4)_0%,transparent_70%)]' />

      <div className='relative z-10 text-center space-y-8 max-w-xl'>
        <div className='space-y-2'>
          <h1 className='text-8xl font-serif font-black text-slate-900 leading-none'>
            404
          </h1>
          <div className='h-1 w-24 bg-primary mx-auto rounded-full' />
          <h2 className='text-2xl md:text-3xl font-bold text-slate-800 tracking-tight'>
            Page Not Found
          </h2>
        </div>

        <p className='text-slate-500 text-lg font-light leading-relaxed'>
          The vertical or page you are looking for doesn't exist or has move to
          a new global hub.
        </p>

        <div className='pt-8'>
          <Link href='/'>
            <Button
              size='lg'
              className='rounded-full px-8 gap-2 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all'
            >
              <ArrowLeft className='w-4 h-4 transition-transform group-hover:-translate-x-1' />
              Return to Headquarters
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
