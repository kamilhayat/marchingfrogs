'use client';
import { cn } from '@/lib/utils';
import Navbar from './navbar';

const Header = () => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border',
      )}
    >
      <Navbar />
    </header>
  );
};

export default Header;
