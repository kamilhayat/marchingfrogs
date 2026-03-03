'use client';

import { useState } from 'react';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitQuote } from '@/app/actions/quote';
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

const projectTypes = [
  'Prior Art Search',
  'Freedom to Operate (FTO) Search',
  'Patentability Search',
  'Landscape Study',
  'SEP Analysis',
  'Other',
];

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        className='space-y-6 bg-zinc-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl'
      >
        <div className='space-y-2 text-white'>
          <h2 className='text-2xl font-bold tracking-tight'>Request a Quote</h2>
          <p className='text-zinc-400 text-sm'>
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-zinc-300'>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder='John Doe'
                  {...field}
                  className='bg-zinc-800/50 border-white/10 text-white placeholder:text-zinc-500'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-zinc-300'>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder='john@example.com'
                  {...field}
                  className='bg-zinc-800/50 border-white/10 text-white placeholder:text-zinc-500'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='projectType'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-zinc-300'>Project Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='bg-zinc-800/50 border-white/10 text-white'>
                    <SelectValue placeholder='Select a project type' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='bg-zinc-900 border-white/10 text-white'>
                  {projectTypes.map((type) => (
                    <SelectItem
                      key={type}
                      value={type}
                      className='hover:bg-zinc-800 focus:bg-zinc-800'
                    >
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='relevantPatents'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-zinc-300'>Relevant Patents</FormLabel>
              <FormControl>
                <Input
                  placeholder='e.g. US1234567, EP9876543'
                  {...field}
                  className='bg-zinc-800/50 border-white/10 text-white placeholder:text-zinc-500'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='additionalDetails'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-zinc-300'>
                Additional Project Details
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Describe your project requirements...'
                  {...field}
                  className='bg-zinc-800/50 border-white/10 text-white placeholder:text-zinc-500 min-h-[100px]'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='referredBy'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-zinc-300'>Referred By</FormLabel>
              <FormControl>
                <Input
                  placeholder='How did you hear about us?'
                  {...field}
                  className='bg-zinc-800/50 border-white/10 text-white placeholder:text-zinc-500'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          className='w-full rounded-xl py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </Button>
      </form>
    </Form>
  );
}
