'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/constants';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'relative z-50 transition-all duration-300 ease-in-out border-b px-6 py-4',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-border'
          : 'bg-transparent border-transparent',
      )}
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2 group'>
          <div className='w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:rotate-12 transition-transform duration-300'>
            M
          </div>
          <span className='font-serif text-2xl font-bold tracking-tight text-foreground'>
            Marching<span className='text-primary'>Frogs</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-8'>
          {NAV_LINKS.map((link) => (
            <div
              key={link.title}
              className='relative group'
              onMouseEnter={() => setActiveDropdown(link.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  'relative flex items-center gap-1 py-2 text-sm font-medium transition-colors hover:text-primary',
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground',
                )}
              >
                {link.title}
                {pathname === link.href && (
                  <span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full' />
                )}
                {link.items && (
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-300',
                      activeDropdown === link.title && 'rotate-180',
                    )}
                  />
                )}
              </Link>

              {/* Dropdown Menu */}
              {link.items && (
                <div
                  className={cn(
                    'absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0',
                    'w-[400px]',
                  )}
                >
                  <div className='bg-card/95 backdrop-blur-xl border border-border rounded-3xl shadow-2xl overflow-hidden p-3 grid grid-cols-1 gap-1'>
                    {link.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className='group/item flex flex-col gap-1 p-4 rounded-2xl hover:bg-secondary/30 transition-all duration-300'
                      >
                        <div className='flex items-center justify-between'>
                          <span className='text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors'>
                            {item.title}
                          </span>
                          <ArrowRight className='w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300' />
                        </div>
                        {item.description && (
                          <p className='text-xs text-muted-foreground line-clamp-2 leading-relaxed'>
                            {item.description}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className='hidden lg:flex items-center gap-4'>
          <Button
            size='lg'
            className='rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all'
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className='lg:hidden p-2 text-foreground'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          'lg:hidden fixed top-0 right-0 bottom-0 w-[70vw] max-w-sm bg-background/95 backdrop-blur-2xl z-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[-20px_0_50px_rgba(0,0,0,0.1)] p-8 pt-24',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className='absolute top-6 right-6 p-2 rounded-2xl bg-secondary/50 text-foreground hover:bg-primary hover:text-white transition-all'
        >
          <X className='w-6 h-6' />
        </button>

        <div className='flex flex-col gap-8'>
          <div className='space-y-6'>
            {NAV_LINKS.map((link) => (
              <div key={link.title} className='flex flex-col gap-4'>
                <Link
                  href={link.href}
                  className={cn(
                    'text-xl font-bold tracking-tight',
                    pathname === link.href ? 'text-primary' : 'text-foreground',
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
                {link.items && (
                  <div className='flex flex-col gap-3 pl-4 border-l border-primary/20'>
                    {link.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className='text-sm text-muted-foreground hover:text-primary transition-colors'
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className='pt-8 border-t border-border mt-auto'>
            <Button className='w-full rounded-2xl py-7 text-lg shadow-xl shadow-primary/20'>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
