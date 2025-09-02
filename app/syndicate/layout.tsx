import type { Metadata } from 'next';
import SyndicateHeader from '@/components/layout/SyndicateHeader';
import SyndicateFooter from '@/components/layout/SyndicateFooter';

export const metadata: Metadata = {
  title: 'AMO Syndicate - We Build Machines Behind Media Empires',
  description: 'From luxury media to automated funnels, AMO Syndicate is your unfair advantage in the MENA digital arena.',
  keywords: 'AMO Syndicate, digital marketing, automation, AI agents, MENA, luxury brands, media strategy',
  openGraph: {
    title: 'AMO Syndicate - We Build Machines Behind Media Empires',
    description: 'From luxury media to automated funnels, AMO Syndicate is your unfair advantage in the MENA digital arena.',
    images: ['/og-syndicate.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMO Syndicate',
    description: 'We build machines behind media empires',
  },
};

export default function SyndicateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SyndicateHeader />
      <main className="pt-20">{children}</main>
      <SyndicateFooter />
    </>
  );
}