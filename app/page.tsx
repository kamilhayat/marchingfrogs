import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';

export default function Home() {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <Hero />
      <Services />
      <About />
      {/* Add more sections as needed */}
    </div>
  );
}
