import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';

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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
