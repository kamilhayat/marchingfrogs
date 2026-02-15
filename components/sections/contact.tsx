import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT_DATA } from '@/constants';
import { GradientBlobs, Particles } from '@/components/sections/svg';

const Contact = () => {
  return (
    <section
      className='py-8 bg-secondary/5 relative overflow-hidden'
      id='contact'
    >
      <GradientBlobs />
      <Particles />

      <div className='container mx-auto px-4 md:px-0 relative z-10'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-8'>
            <h2 className='section-subtitle'>{CONTACT_DATA.subtitle}</h2>
            <h3 className='section-title mb-6'>{CONTACT_DATA.title}</h3>
            <p className='section-desc max-w-2xl mx-auto'>
              {CONTACT_DATA.description}
            </p>
          </div>

          <div className='grid lg:grid-cols-5 gap-12'>
            {/* Contact Info */}
            <div className='lg:col-span-2 space-y-8'>
              <div className='space-y-6'>
                <div className='flex gap-4 p-6 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm'>
                  <div className='w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0'>
                    <Mail className='w-6 h-6' />
                  </div>
                  <div>
                    <h4 className='font-bold text-foreground mb-1'>Email Us</h4>
                    <p className='text-muted-foreground text-sm'>
                      {CONTACT_DATA.email}
                    </p>
                  </div>
                </div>

                <div className='flex gap-4 p-6 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm'>
                  <div className='w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0'>
                    <Phone className='w-6 h-6' />
                  </div>
                  <div>
                    <h4 className='font-bold text-foreground mb-1'>Call Us</h4>
                    <p className='text-muted-foreground text-sm'>
                      {CONTACT_DATA.phone}
                    </p>
                  </div>
                </div>

                <div className='flex gap-4 p-6 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm'>
                  <div className='w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary-foreground shrink-0'>
                    <MapPin className='w-6 h-6' />
                  </div>
                  <div>
                    <h4 className='font-bold text-foreground mb-1'>
                      Our Offices
                    </h4>
                    <div className='space-y-2 mt-2'>
                      {CONTACT_DATA.locations.map((loc) => (
                        <div key={loc.city} className='text-sm'>
                          <span className='font-bold text-primary'>
                            {loc.city}:
                          </span>
                          <span className='text-muted-foreground ml-2'>
                            {loc.details}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='lg:col-span-3 p-8 md:p-10 rounded-[2.5rem] bg-card border border-border shadow-xl relative overflow-hidden'>
              <div className='absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2' />

              <form className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <label className='text-sm font-semibold ml-1'>Name</label>
                    <input
                      type='text'
                      placeholder='John Doe'
                      className='w-full px-5 py-4 rounded-2xl bg-background border border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-sm font-semibold ml-1'>Email</label>
                    <input
                      type='email'
                      placeholder='john@example.com'
                      className='w-full px-5 py-4 rounded-2xl bg-background border border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-sm font-semibold ml-1'>Subject</label>
                  <input
                    type='text'
                    placeholder='How can we help?'
                    className='w-full px-5 py-4 rounded-2xl bg-background border border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all'
                  />
                </div>

                <div className='space-y-2'>
                  <label className='text-sm font-semibold ml-1'>Message</label>
                  <textarea
                    placeholder='Your message here...'
                    rows={4}
                    className='w-full px-5 py-4 rounded-2xl bg-background border border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none'
                  />
                </div>

                <Button className='w-full h-14 rounded-2xl text-lg font-bold group shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all'>
                  Send Message
                  <Send className='ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
