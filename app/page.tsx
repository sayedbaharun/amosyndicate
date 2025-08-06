import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import PortfolioShowcase from '@/components/home/PortfolioShowcase';
import AboutPreview from '@/components/home/AboutPreview';
import InsightsSection from '@/components/home/InsightsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <ServicesPreview />
      <PortfolioShowcase />
      <AboutPreview />
      <InsightsSection />
      <Footer />
    </main>
  );
}