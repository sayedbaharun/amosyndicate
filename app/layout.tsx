import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import ClientWrapper from '@/components/layout/ClientWrapper';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arab Money Official | Premier Luxury Marketing Authority - Dubai',
  description: 'The Middle East\'s leading luxury digital marketing agency. Transforming luxury brands through sophisticated content and strategic digital marketing in Dubai and the MENA region.',
  keywords: 'luxury marketing Dubai, Middle East digital marketing, luxury brand strategy UAE, Dubai social media agency, Arab Money Official',
  authors: [{ name: 'Arab Money Official LLC' }],
  openGraph: {
    title: 'Arab Money Official | Premier Luxury Marketing Authority',
    description: 'Transforming luxury brands through sophisticated content and strategic digital marketing',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arab Money Official | Premier Luxury Marketing Authority',
    description: 'The Middle East\'s leading luxury digital marketing agency',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-montserrat antialiased bg-black text-white">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}