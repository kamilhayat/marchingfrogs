import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Contact from '@/components/sections/contact';
import Values from '@/components/sections/values';

export default function Home() {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <Hero />
      <Services />
      <About />
      <Values />
      <Contact />
    </div>
  );
}
