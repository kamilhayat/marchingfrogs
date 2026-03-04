'use client';

import { useState } from 'react';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
  relevantPatents: z.string(),
  additionalDetails: z.string(),
  referredBy: z.string(),
});

type FormValues = {
  name: string;
  email: string;
  projectType: string;
  relevantPatents: string;
  additionalDetails: string;
  referredBy: string;
};

const defaultProjectTypes = [
  'Prior Art Search',
  'Freedom to Operate (FTO) Search',
  'Patentability Search',
  'Landscape Study',
  'SEP Analysis',
  'Other',
];

interface QuoteFormProps {
  customProjectTypes?: string[];
}

export function QuoteForm({ customProjectTypes }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const types = customProjectTypes || defaultProjectTypes;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      name: '',
      email: '',
      projectType: '',
      relevantPatents: '',
      additionalDetails: '',
      referredBy: '',
    },
    mode: 'onChange',
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitQuote(values);
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
        className='space-y-6 bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl shadow-primary/5'
      >
        <div className='space-y-1'>
          <h2 className='text-2xl font-bold tracking-tight text-foreground'>
            Request a Quote
          </h2>
          <p className='text-muted-foreground text-sm'>
            Fill out the form below and we&apos;ll get back to you shortly.
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
          name='projectType'
          render={({ field }) => (
            <FormItem className='space-y-1.5'>
              <FormLabel className='text-xs font-black text-muted-foreground uppercase tracking-widest'>
                Project Type
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='bg-white border-slate-200 text-slate-900 h-12 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all shadow-sm'>
                    <SelectValue placeholder='Select a project type' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='bg-white border-slate-200 text-slate-900 rounded-xl shadow-2xl'>
                  {types.map((type) => (
                    <SelectItem
                      key={type}
                      value={type}
                      className='hover:bg-slate-50 focus:bg-slate-50 cursor-pointer'
                    >
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className='text-[10px]' />
            </FormItem>
          )}
        />

        {(!customProjectTypes || customProjectTypes.length === 0) && (
          <FormField
            control={form.control}
            name='relevantPatents'
            render={({ field }) => (
              <FormItem className='space-y-1.5'>
                <FormLabel className='text-xs font-black text-muted-foreground uppercase tracking-widest'>
                  Relevant Patents
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='e.g. US1234567, EP9876543'
                    {...field}
                    className='bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 h-12 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all shadow-sm'
                  />
                </FormControl>
                <FormMessage className='text-[10px]' />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name='additionalDetails'
          render={({ field }) => (
            <FormItem className='space-y-1.5'>
              <FormLabel className='text-xs font-black text-muted-foreground uppercase tracking-widest'>
                Additional Project Details
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Describe your project requirements...'
                  {...field}
                  className='bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all min-h-[100px] shadow-sm resize-none'
                />
              </FormControl>
              <FormMessage className='text-[10px]' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='referredBy'
          render={({ field }) => (
            <FormItem className='space-y-1.5'>
              <FormLabel className='text-xs font-black text-muted-foreground uppercase tracking-widest'>
                Referred By
              </FormLabel>
              <FormControl>
                <Input
                  placeholder='How did you hear about us?'
                  {...field}
                  className='bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 h-12 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all shadow-sm'
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
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </div>

        <p className='text-center text-[10px] text-muted-foreground/60 uppercase tracking-widest font-bold'>
          Secure & Confidential · Industry standard NDAs
        </p>
      </form>
    </Form>
  );
}
