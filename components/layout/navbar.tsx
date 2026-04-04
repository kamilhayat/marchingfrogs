'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/constants';

const DesktopDropdown = ({
  items,
  open,
  onClose,
}: {
  items: { title: string; href: string; description?: string }[];
  open: boolean;
  onClose: () => void;
}) => (
  <div
    className={cn(
      'absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[580px] z-50',
      'bg-[rgba(14,13,30,0.97)] border border-white/10 rounded-3xl p-2.5',
      'grid grid-cols-2 gap-1',
      'shadow-[0_24px_80px_rgba(0,0,0,0.65),0_0_0_0.5px_rgba(255,255,255,0.06)_inset]',
      'backdrop-blur-2xl',
      'transition-all duration-350 ease-[cubic-bezier(0.23,1,0.32,1)]',
      open
        ? 'opacity-100 visible translate-y-0 pointer-events-auto'
        : 'opacity-0 invisible translate-y-2 pointer-events-none',
    )}
  >
    <div
      className='absolute -top-[5px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45
                 bg-[rgba(14,13,30,0.97)] border-l border-t border-white/10 rounded-tl-sm'
    />

    {items.map((item) => (
      <Link
        key={item.title}
        href={item.href}
        onClick={onClose}
        className='group/item relative flex flex-col gap-1 p-3.5 rounded-2xl
                   overflow-hidden transition-all duration-200
                   hover:bg-white/4'
      >
        <div
          className='absolute inset-0 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-200
                     bg-linear-to-br from-primary/12 to-accent/6'
        />
        <div className='relative flex items-center justify-between'>
          <span
            className='text-[13px] font-semibold text-white/80
                       group-hover/item:text-white transition-colors'
          >
            {item.title}
          </span>
          <ArrowRight
            className='w-3.5 h-3.5 text-primary opacity-0 -translate-x-1.5
                       group-hover/item:opacity-100 group-hover/item:translate-x-0
                       transition-all duration-200 shrink-0'
          />
        </div>
        {item.description && (
          <p className='relative text-[11.5px] text-white/30 leading-normal line-clamp-2
                        group-hover/item:text-white/50 transition-colors'>
            {item.description}
          </p>
        )}
      </Link>
    ))}

  </div>
);

const HamburgerIcon = ({ open }: { open: boolean }) => (
  <div className='relative w-[18px] h-[14px]'>
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className={cn(
          'absolute left-0 right-0 h-[1.5px] rounded-full bg-white transition-all duration-300',
          i === 0 && !open && 'top-0',
          i === 1 && 'top-1/2 -mt-[0.75px]',
          i === 2 && !open && 'bottom-0',
          open && i === 0 && 'top-1/2 -mt-[0.75px] rotate-45',
          open && i === 1 && 'opacity-0 scale-x-0',
          open && i === 2 && 'bottom-1/2 mb-[-.75px] -rotate-45',
        )}
      />
    ))}
  </div>
);

const MobileMenu = ({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) => {
  const [subOpen, setSubOpen] = useState(false);

  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          'fixed inset-0 z-300 backdrop-blur-[6px] bg-[rgba(5,4,15,0.65)] transition-all duration-350',
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none',
        )}
      />

      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-400 flex flex-col',
          'w-full sm:w-[400px]',
          'bg-[#0e0d1e] sm:border-l border-white/8',
          'shadow-[-24px_0_80px_rgba(0,0,0,0.6)]',
          'transition-transform duration-450 ease-[cubic-bezier(0.16,1,0.3,1)]',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className='flex items-center justify-between px-5 py-5 border-b border-white/6'>
          <Link href='/' onClick={onClose} className='group flex items-center gap-2.5'>
            <Image
              src='/logo-marching-frogs.png'
              alt='Marching Frogs'
              width={140}
              height={40}
              className='h-10 w-auto object-contain'
            />
          </Link>
          <button
            onClick={onClose}
            className='w-9 h-9 rounded-xl bg-white/[0.07] border border-white/10
                       flex items-center justify-center
                       hover:bg-primary transition-all duration-200'
          >
            <X className='w-4 h-4' />
          </button>
        </div>

        <div className='flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-1'>
          {NAV_LINKS.map((link) => (
            <div key={link.title}>
              <div className='flex items-center justify-between'>
                <Link
                  href={link.href}
                  onClick={() => { if (!link.items) onClose(); }}
                  className={cn(
                    'flex-1 flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[15px] font-medium transition-all duration-200',
                    'bg-white/3 border border-transparent',
                    pathname === link.href
                      ? 'text-primary bg-primary/10 border-primary/20'
                      : 'text-white/65 hover:text-white hover:bg-white/[0.07] hover:border-white/8',
                  )}
                >
                  {link.title}
                </Link>
                {link.items && (
                  <button
                    onClick={() => setSubOpen((v) => !v)}
                    className='ml-2 p-2 rounded-xl text-white/40 hover:text-white transition-colors'
                  >
                    <ChevronDown
                      className={cn('w-4 h-4 transition-transform duration-300', subOpen && 'rotate-180')}
                    />
                  </button>
                )}
              </div>

              {link.items && subOpen && (
                <div className='ml-4 mt-1 pl-3.5 border-l border-primary/25 flex flex-col gap-0.5'>
                  {link.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={onClose}
                      className='block px-3 py-2.5 rounded-xl text-[13px] text-white/45
                                 hover:text-white hover:bg-white/5 transition-all duration-150'
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='px-5 py-5 border-t border-white/6'>
          <Link
            href='/request-quote'
            onClick={onClose}
            className='flex items-center justify-center gap-2 w-full h-[52px] rounded-2xl
                       bg-primary text-white text-[15px] font-bold
                       shadow-[0_0_28px_rgba(var(--primary-rgb),0.45)]
                       hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.6)]
                       hover:scale-[1.02] transition-all duration-300'
          >
            Request a Quote
            <ArrowRight className='w-4 h-4' />
          </Link>
          <p className='text-center text-[9px] tracking-[.3em] uppercase font-bold text-white/20 mt-3.5'>
            Marching Frogs · Global Excellence
          </p>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDD, setOpenDD] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDD(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    setOpenDD(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-100 transition-all duration-400',
          scrolled ? 'py-0 lg:py-2' : 'py-0 lg:py-3',
        )}
      >
        <div className='lg:px-5'>
          <div
            ref={navRef}
            className={cn(
              'max-w-[1160px] mx-auto flex items-center justify-between gap-4 lg:gap-5',
              'h-[72px] px-5 lg:px-2.5 lg:pl-5 rounded-none lg:rounded-full',
              'border-b lg:border-x lg:border-t backdrop-blur-[28px]',
              'transition-all duration-400 relative',
              'before:absolute before:content-[""] before:top-0 before:left-[20%] before:right-[20%] before:h-px before:rounded-none lg:before:rounded-full before:pointer-events-none',
              'before:bg-linear-to-r before:from-transparent before:via-primary/55 before:to-transparent',
              scrolled
                ? 'bg-[rgba(10,9,23,0.92)] border-white/12 shadow-[0_8px_48px_rgba(0,0,0,0.55)]'
                : 'bg-[rgba(12,11,28,0.6)] border-white/8 lg:shadow-[0_0_0_0.5px_rgba(255,255,255,0.04)_inset,0_4px_24px_rgba(0,0,0,0.3)]',
            )}
          >
            <Link href='/' className='group flex items-center gap-2.5 shrink-0'>
              <Image
                src='/logo-marching-frogs.png'
                alt='Marching Frogs'
                width={240}
                height={80}
                className='h-12 lg:h-16 w-auto object-contain'
                priority
              />
            </Link>

            <nav className='hidden lg:flex items-center gap-0.5 flex-1 justify-center'>
              {NAV_LINKS.map((link) => (
                <div key={link.title} className='relative'>
                  {link.items ? (
                    <button
                      onClick={() => setOpenDD(openDD === link.title ? null : link.title)}
                      className={cn(
                        'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-250',
                        openDD === link.title
                          ? 'text-white bg-white/[0.07]'
                          : 'text-white/55 hover:text-white hover:bg-white/[0.07]',
                      )}
                    >
                      {link.title}
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 opacity-50 transition-transform duration-300',
                          openDD === link.title && 'rotate-180 opacity-80',
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        'relative inline-flex items-center px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-250',
                        pathname === link.href
                          ? 'text-primary'
                          : 'text-white/55 hover:text-white hover:bg-white/[0.07]',
                      )}
                    >
                      {link.title}
                      {pathname === link.href && (
                        <span className='absolute bottom-0.5 left-3.5 right-3.5 h-px bg-primary/70 rounded-full' />
                      )}
                    </Link>
                  )}

                  {link.items && (
                    <DesktopDropdown
                      items={link.items}
                      open={openDD === link.title}
                      onClose={() => setOpenDD(null)}
                    />
                  )}
                </div>
              ))}
            </nav>

            <div className='flex items-center gap-2 shrink-0'>
              <Link
                href='/request-quote'
                className='hidden lg:inline-flex items-center gap-1.5
                           h-[42px] px-[22px] rounded-full
                           bg-primary text-white text-[13px] font-bold
                           shadow-[0_0_24px_rgba(var(--primary-rgb),0.45)]
                           hover:shadow-[0_0_36px_rgba(var(--primary-rgb),0.65)]
                           hover:scale-[1.04] transition-all duration-300
                           relative overflow-hidden
                           after:absolute after:inset-0 after:rounded-full
                           after:bg-linear-to-br after:from-white/18 after:to-transparent after:pointer-events-none'
              >
                Request a Quote
                <ArrowRight className='w-3.5 h-3.5 transition-transform group-hover:translate-x-1' />
              </Link>

              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label='Toggle menu'
                className='lg:hidden w-10 h-10 rounded-xl flex items-center justify-center
                           bg-white/[0.07] border border-white/10
                           hover:bg-white/12 transition-all duration-200'
              >
                <HamburgerIcon open={mobileOpen} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mounted &&
        createPortal(
          <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />,
          document.body,
        )}
    </>
  );
};

export default Navbar;