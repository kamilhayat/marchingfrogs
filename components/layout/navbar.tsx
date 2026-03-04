'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/constants';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const mobileMenu = (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-slate-900/50 transition-all duration-300',
          isOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none',
        )}
        style={{ zIndex: 9998 }}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] p-8 flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        style={{
          zIndex: 9999,
          backgroundColor: '#ffffff',
          boxShadow: '-20px 0 60px rgba(0,0,0,0.15)',
        }}
      >
        {/* Logo + Close */}
        <div className='flex items-center justify-between mb-4 shrink-0'>
          <Link href='/' onClick={() => setIsOpen(false)}>
            <img
              src='/logo.png'
              alt='Marching Frogs Logo'
              className='w-20 h-10 object-contain'
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className='p-2.5 rounded-2xl bg-slate-100 text-slate-900 hover:bg-primary hover:text-white transition-all'
          >
            <X className='w-5 h-5' />
          </button>
        </div>

        {/* Nav Links */}
        <div className='flex-1 overflow-y-auto space-y-6 py-2'>
          {NAV_LINKS.map((link) => (
            <div key={link.title} className='space-y-3'>
              <div className='flex items-center justify-between'>
                <Link
                  href={link.href}
                  className={cn(
                    'text-lg font-serif font-bold tracking-tight transition-colors',
                    pathname === link.href ? 'text-primary' : 'text-slate-900',
                  )}
                  onClick={() => {
                    if (!link.items) setIsOpen(false);
                  }}
                >
                  {link.title}
                </Link>
                {link.items && (
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === link.title ? null : link.title,
                      )
                    }
                    className='p-2 rounded-xl bg-slate-50 text-slate-400 shrink-0'
                  >
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 transition-transform duration-300',
                        activeDropdown === link.title && 'rotate-180',
                      )}
                    />
                  </button>
                )}
              </div>

              {link.items && activeDropdown === link.title && (
                <div className='space-y-2 pl-4 border-l-2 border-primary/20'>
                  {link.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className='block text-sm font-medium text-slate-500 hover:text-primary transition-colors py-1.5'
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

        {/* Footer CTA */}
        <div className='pt-6 border-t border-slate-100 shrink-0'>
          <Link href='/request-quote' onClick={() => setIsOpen(false)}>
            <Button className='w-full rounded-2xl py-6 text-base font-bold shadow-xl shadow-primary/20'>
              Request a Quote
            </Button>
          </Link>
          <p className='text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-4'>
            Marching Frogs · Global Excellence
          </p>
        </div>
      </div>
    </>
  );

  return (
    <>
      <nav className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2 group'>
          <img
            src='/logo.png'
            alt='Marching Frogs Logo'
            className='w-40 h-12 object-cover'
          />
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
                    'w-[640px]',
                  )}
                >
                  <div className='bg-card/95 backdrop-blur-xl border border-border rounded-3xl shadow-2xl overflow-hidden p-3 grid grid-cols-2 gap-1'>
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
          <Link href='/request-quote'>
            <Button
              size='lg'
              className='rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all'
            >
              Request a Quote
            </Button>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className='lg:hidden p-2 text-foreground'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          <Menu className='w-6 h-6' />
        </button>
      </nav>

      {/* Portal: renders mobile menu directly on body, escaping header stacking context */}
      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
};

export default Navbar;
