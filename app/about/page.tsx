import MinimalLayout from '@/components/minimal/Layout';

export default function About() {
  return (
    <MinimalLayout>
      {/* Hero Image */}
      <div className="w-full h-[400px] bg-gray-100 mb-16">
        <img
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&h=400&fit=crop&q=90"
          alt="Dubai luxury architecture"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-[800px] mx-auto px-6 py-16">
        <h1 className="text-5xl font-medium mb-16">About</h1>
        
        <div className="space-y-8 text-lg leading-relaxed text-gray-600">
          <p>
            AMO Marketing serves the Gulf's most prestigious brands with cultural 
            understanding and digital excellence. We are the region's premier luxury 
            marketing consultancy, combining deep regional expertise with modern 
            digital capabilities.
          </p>
          
          <p>
            Founded in Dubai, we work with royal families, sovereign wealth funds, 
            and luxury enterprises across the GCC. Our approach respects tradition 
            while embracing innovation, creating meaningful connections between 
            heritage brands and contemporary audiences.
          </p>
          
          <p>
            We understand the nuances of Gulf business culture, from royal protocol 
            to Ramadan campaigns, from Vision 2030 alignment to family office 
            communications. This cultural fluency, combined with world-class creative 
            and strategic capabilities, sets us apart.
          </p>
        </div>
        
        <div className="mt-24">
          <a 
            href="/contact" 
            className="inline-block px-12 py-4 bg-black text-white font-medium hover:opacity-90 transition-opacity duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </MinimalLayout>
  );
}