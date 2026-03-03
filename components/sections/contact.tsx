import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { CONTACT_DATA } from '@/constants';
import Link from 'next/link';

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
    value: 'Bangalore · Dubai · Malaysia',
    sub: 'Three global hubs',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-400',
  },
];

const Contact = () => {
  return (
    <section
      className='py-20 relative overflow-hidden'
      id='contact'
      style={{
        background:
          'linear-gradient(150deg, oklch(0.97 0.01 280) 0%, oklch(0.96 0.015 260) 50%, oklch(0.97 0.01 300) 100%)',
      }}
    >
      {/* Soft background radials */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.8_0.08_280/0.12)_0%,transparent_60%)]' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.75_0.06_300/0.08)_0%,transparent_60%)]' />

      <div className='container mx-auto px-4 md:px-0 relative z-10'>
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
            <div className='relative p-8 md:p-10 rounded-3xl bg-white/80 backdrop-blur-sm border border-primary/10 shadow-2xl shadow-primary/5 overflow-hidden'>
              {/* Decorative corner blob */}
              <div className='absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none' />
              <div className='absolute -bottom-20 -left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none' />

              <div className='relative z-10'>
                <div className='mb-8'>
                  <h3 className='text-2xl font-bold text-foreground mb-1'>
                    Send a Message
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    Fill in the form and we&apos;ll get back to you shortly.
                  </p>
                </div>

                <form className='space-y-5'>
                  <div className='grid md:grid-cols-2 gap-5'>
                    <div className='space-y-1.5'>
                      <label className='text-xs font-black text-muted-foreground uppercase tracking-widest'>
                        Full Name
                      </label>
                      <input
                        type='text'
                        placeholder='Jane Smith'
                        className='w-full px-4 py-3 rounded-xl bg-background/80 border border-border focus:border-primary/60 focus:ring-4 focus:ring-primary/8 outline-none transition-all text-sm'
                      />
                    </div>
                    <div className='space-y-1.5'>
                      <label className='text-xs font-black text-muted-foreground uppercase tracking-widest'>
                        Email Address
                      </label>
                      <input
                        type='email'
                        placeholder='jane@company.com'
                        className='w-full px-4 py-3 rounded-xl bg-background/80 border border-border focus:border-primary/60 focus:ring-4 focus:ring-primary/8 outline-none transition-all text-sm'
                      />
                    </div>
                  </div>

                  <div className='space-y-1.5'>
                    <label className='text-xs font-black text-muted-foreground uppercase tracking-widest'>
                      Subject
                    </label>
                    <input
                      type='text'
                      placeholder='How can we help you?'
                      className='w-full px-4 py-3 rounded-xl bg-background/80 border border-border focus:border-primary/60 focus:ring-4 focus:ring-primary/8 outline-none transition-all text-sm'
                    />
                  </div>

                  <div className='space-y-1.5'>
                    <label className='text-xs font-black text-muted-foreground uppercase tracking-widest'>
                      Message
                    </label>
                    <textarea
                      placeholder='Tell us about your project or enquiry...'
                      rows={4}
                      className='w-full px-4 py-3 rounded-xl bg-background/80 border border-border focus:border-primary/60 focus:ring-4 focus:ring-primary/8 outline-none transition-all resize-none text-sm'
                    />
                  </div>

                  <button
                    type='submit'
                    className='w-full flex items-center justify-center gap-2.5 h-13 py-3.5 rounded-xl bg-primary text-white font-bold text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300 group'
                  >
                    Send Message
                    <Send className='w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
                  </button>

                  <p className='text-center text-xs text-muted-foreground/50'>
                    By submitting, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
