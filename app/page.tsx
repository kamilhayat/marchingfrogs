import Hero from '@/components/sections/hero';
import Process from '@/components/sections/process';
import Verticals from '@/components/sections/verticals';
import About from '@/components/sections/about';
import Footprint from '@/components/sections/footprint';
import Services from '@/components/sections/services';
import Contact from '@/components/sections/contact';
import Values from '@/components/sections/values';
import Stats from '@/components/sections/stats';
import Testimonials from '@/components/sections/testimonials';
import EventsSection from '@/components/sections/events';

export default function Home() {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Verticals />
      <EventsSection />
      <Process />
      <Values />
      <Footprint />
      <Contact />
    </div>
  );
}
