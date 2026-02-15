import { SERVICES } from '@/constants';
import { ArrowRight } from 'lucide-react';
import { GridPattern, WavyLines } from '@/components/sections/svg';

const Services = () => {
  return (
    <section
      className='py-8 bg-secondary/5 relative overflow-hidden'
      id='services'
    >
      {/* Background Decor */}
      <GridPattern />
      <WavyLines />
      <div className='container mx-auto'>
        <div className='max-w-2xl mb-8 text-center mx-auto'>
          <h2 className='section-subtitle'>Our Services</h2>
          <h3 className='section-title'>
            Bespoke Solutions for <br />
            <span className='italic text-primary'>
              IP & Legal Professionals
            </span>
          </h3>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className='group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between'
            >
              <div>
                <div className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform'>
                  <service.icon className='w-7 h-7' />
                </div>
                <h4 className='text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors'>
                  {service.title}
                </h4>
                <p className='text-muted-foreground leading-relaxed mb-6'>
                  {service.description}
                </p>
              </div>

              <div className='flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'>
                Learn More <ArrowRight className='w-4 h-4' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
