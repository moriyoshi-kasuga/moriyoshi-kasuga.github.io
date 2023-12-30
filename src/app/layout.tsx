import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './provider';
import './globals.css';
import Menu from '@/components/Menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'moriyohis-kasuga Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Menu />
      </body>
    </html>
  );
}
