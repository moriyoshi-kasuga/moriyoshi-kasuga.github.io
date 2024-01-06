import type { Metadata } from 'next';
import {
  Inter as Font_Sans,
  M_PLUS_Rounded_1c,
  Noto_Sans_JP,
  Noto_Serif_JP,
} from 'next/font/google';
import { Providers } from './provider';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const NotoSansJP = Noto_Sans_JP({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-NotoSansJP',
  display: 'swap',
});

const NotoSerifJP = Noto_Serif_JP({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-NotoSerifJP',
  display: 'swap',
});

const MPlusRounded1c = M_PLUS_Rounded_1c({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-MPlusRounded1c',
  display: 'swap',
});

const FontSans = Font_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'moriyohis-kasuga Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background pt-[var(--header-height)] font-sans antialiased',
          '[--header-height:50px]',
          '[--footer-height:40px]',
          FontSans.className,
          NotoSansJP.variable,
          NotoSerifJP.variable,
          MPlusRounded1c.variable,
        )}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
