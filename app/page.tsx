import HeaderMinimal from '@/components/layout/HeaderMinimal';
import FooterMinimal from '@/components/layout/FooterMinimal';
import HeroMinimal from '@/components/home/HeroMinimal';
import ServicesMinimal from '@/components/home/ServicesMinimal';
import BrandGrid from '@/components/portfolio/BrandGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeaderMinimal />
      
      {/* Hero with strategic image */}
      <section className="min-h-screen flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-medium leading-tight mb-8">
                Gulf Heritage
                <br />
                <span className="text-[#B8A06A]">Digital Excellence</span>
              </h1>
              <p className="text-lg text-gray-600 mb-12 max-w-md">
                The region's premier luxury marketing consultancy.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-12 py-4 bg-black text-white font-medium hover:opacity-90 transition-opacity"
              >
                Begin
              </a>
            </div>
            <div className="relative h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop&q=90"
                alt="Dubai skyline"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services - Three cards, no decoration */}
      <ServicesMinimal />
      
      {/* Portfolio - Simple grid */}
      <BrandGrid />
      
      {/* About - Single paragraph */}
      <section className="py-32 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl font-medium mb-8">About</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            AMO Marketing is the Gulf region's premier luxury marketing consultancy. 
            We combine deep cultural understanding with modern digital expertise to 
            create meaningful connections between luxury brands and discerning audiences. 
            Our work spans royal families, sovereign wealth funds, and the region's 
            most prestigious enterprises.
          </p>
        </div>
      </section>
      
      {/* Contact - Minimal CTA */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium mb-8">Let's Talk</h2>
          <p className="text-lg text-gray-600 mb-12">
            Your brand deserves excellence.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-12 py-4 bg-black text-white font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </section>
      
      <FooterMinimal />
    </main>
  );
}