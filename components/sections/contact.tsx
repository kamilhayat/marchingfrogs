import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { CONTACT_DATA } from '@/constants';
import Link from 'next/link';
import { ContactForm } from '@/components/forms/ContactForm';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email Us',
    value: CONTACT_DATA.email,
    sub: 'We reply within 24 hours',
    color: 'from-violet-500 to-primary',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    text: 'text-violet-400',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: CONTACT_DATA.phone,
    sub: 'Mon–Fri, 9am–6pm IST',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
  },
  {
    icon: MapPin,
    label: 'Our Offices',
    value: 'New Delhi & Patna',
    sub: 'Two global hubs',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-400',
  },
];

const Contact = () => {
  return (
    <section
      className='relative overflow-hidden bg-linear-to-br from-primary/5 via-primary/10 to-primary/5'
      id='contact'
    >
      <div className='max-container padding-container-sm relative z-10'>
        {/* Header – Centered */}
        <div className='text-center mb-16 space-y-3'>
          <div className='section-subtitle mx-auto'>Contact Us</div>
          <h2 className='text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight'>
            Let&apos;s{' '}
            <span className='text-primary italic'>Start a Conversation</span>
          </h2>
          <p className='text-muted-foreground text-lg font-light max-w-xl mx-auto'>
            Have a project in mind? Reach out — we typically respond within one
            business day.
          </p>
        </div>

        <div className='grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto'>
          {/* Left — contact methods + quick links */}
          <div className='lg:col-span-2 flex flex-col gap-5'>
            {/* Contact method cards */}
            {contactMethods.map((m) => (
              <div
                key={m.label}
                className={`flex items-start gap-4 p-5 rounded-2xl ${m.bg} border ${m.border} hover:scale-[1.02] transition-all duration-300`}
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-linear-to-br ${m.color} flex items-center justify-center shrink-0 shadow-lg`}
                >
                  <m.icon className='w-5 h-5 text-white' />
                </div>
                <div className='min-w-0'>
                  <div className='text-xs font-black text-muted-foreground uppercase tracking-widest mb-0.5'>
                    {m.label}
                  </div>
                  <div className={`font-bold ${m.text} text-sm truncate`}>
                    {m.value}
                  </div>
                  <div className='text-xs text-muted-foreground/60 mt-0.5'>
                    {m.sub}
                  </div>
                </div>
              </div>
            ))}

            {/* Quote CTA card */}
            <div className='mt-2 p-6 rounded-2xl bg-primary/5 border border-primary/15 text-center space-y-3'>
              <div className='w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto'>
                <MessageSquare className='w-6 h-6 text-primary' />
              </div>
              <p className='text-sm text-muted-foreground font-light'>
                Need a detailed proposal? Use our structured quote form.
              </p>
              <Link
                href='/request-quote'
                className='inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all duration-300'
              >
                Request a Quote
                <ArrowRight className='w-4 h-4' />
              </Link>
            </div>
          </div>

          {/* Right — form */}
          <div className='lg:col-span-3'>
            <div className='relative'>
              <div className='absolute -inset-1 bg-linear-to-r from-primary/20 to-primary/20 rounded-[2.5rem] blur-2xl opacity-50' />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
