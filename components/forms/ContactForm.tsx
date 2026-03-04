'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitQuote } from '@/server/actions/quote';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(2, 'Subject must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    mode: 'onChange',
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const submissionData = {
        name: values.name,
        email: values.email,
        subject: values.subject,
        additionalDetails: values.message,
      };

      const result = await submitQuote(submissionData);
      if (result.success) {
        toast.success(result.message);
        form.reset();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-primary/10 shadow-2xl shadow-primary/5'
      >
        <div className='space-y-1'>
          <h2 className='text-2xl font-bold tracking-tight text-foreground'>
            Send a Message
          </h2>
          <p className='text-muted-foreground text-sm'>
            Fill in the form and we&quot;ll get back to you shortly.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-5'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='space-y-1.5'>
                <FormLabel className='text-xs font-black text-muted-foreground uppercase tracking-widest'>
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='John Doe'
                    {...field}
                    className='bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 h-12 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all shadow-sm'
                  />
                </FormControl>
                <FormMessage className='text-[10px]' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='space-y-1.5'>
                <FormLabel className='text-xs font-black text-muted-foreground uppercase tracking-widest'>
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='john@example.com'
                    {...field}
                    className='bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 h-12 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all shadow-sm'
                  />
                </FormControl>
                <FormMessage className='text-[10px]' />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem className='space-y-1.5'>
              <FormLabel className='text-xs font-black text-muted-foreground uppercase tracking-widest'>
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  placeholder='How can we help you?'
                  {...field}
                  className='bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 h-12 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all shadow-sm'
                />
              </FormControl>
              <FormMessage className='text-[10px]' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='space-y-1.5'>
              <FormLabel className='text-xs font-black text-muted-foreground uppercase tracking-widest'>
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Tell us about your project or enquiry...'
                  {...field}
                  className='bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all min-h-[120px] resize-none shadow-sm'
                />
              </FormControl>
              <FormMessage className='text-[10px]' />
            </FormItem>
          )}
        />

        <div className='pt-2'>
          <Button
            type='submit'
            className='w-full rounded-xl py-6 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group transition-all active:scale-95'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {!isSubmitting && (
              <Send className='w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
            )}
          </Button>
        </div>

        <p className='text-center text-[10px] text-muted-foreground/60 uppercase tracking-widest font-bold'>
          Secure & Confidential · Response within 24h
        </p>
      </form>
    </Form>
  );
}
