import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Montserrat, IBM_Plex_Sans_Arabic, Readex_Pro } from 'next/font/google';
import Script from 'next/script';
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

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const readexPro = Readex_Pro({
  subsets: ['arabic', 'latin'],
  variable: '--font-readex-pro',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amosyndicate.com'),
  title: 'AMO Marketing | Gulf Heritage Meets Digital Excellence - Dubai',
  description: 'Gulf region\'s premier luxury marketing atelier. Where heritage meets digital excellence. Serving royal families, family offices, and visionary brands across Dubai, UAE, Saudi Arabia, and the GCC with cultural authenticity and Vision 2030 alignment.',
  keywords: 'Gulf luxury marketing, Dubai digital marketing, GCC brand strategy, royal family marketing, family office marketing, Vision 2030 alignment, UAE luxury brands, Saudi Arabia marketing, cultural marketing Gulf, تسويق فاخر الخليج',
  authors: [{ name: 'AMO - Gulf Heritage Marketing Atelier' }],
  openGraph: {
    title: 'AMO | Where Gulf Heritage Meets Digital Excellence',
    description: 'Crafting digital legacies for visionary Gulf brands with cultural authenticity and global excellence',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMO | Gulf Heritage Digital Excellence',
    description: 'Gulf region\'s premier luxury marketing atelier serving royal families and visionary brands',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${ibmPlexSansArabic.variable} ${readexPro.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        
        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="font-montserrat antialiased bg-black text-white">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}