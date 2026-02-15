import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-linear-to-r from-primary/50 via-secondary to-accent border-t border-border py-6 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          {/* Logo/Brand (Optional - keeping it minimal as requested) */}
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm'>
              M
            </div>
            <span className='font-serif text-lg font-bold tracking-tight text-foreground'>
              Marching<span className='text-primary'>Frogs</span>
            </span>
          </div>

          {/* Copyright */}
          <p className='text-xs text-black'>
            © {currentYear} Marching Frogs PVT LTD. All rights reserved.
          </p>

          {/* Minimal Links */}
          <div className='flex items-center gap-6'>
            <Link
              href='#'
              className='text-xs text-black hover:text-primary transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='#'
              className='text-xs text-black hover:text-primary transition-colors'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
