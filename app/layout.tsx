import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const montserrat = Montserrat({
  variable: '--font-sans',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Marching Frogs',
  description: 'A premium digital agency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased font-sans`}
      >
        <div className='flex flex-col min-h-screen overflow-x-hidden'>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
