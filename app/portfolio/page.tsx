import MinimalLayout from '@/components/minimal/Layout';

export default function Portfolio() {
  const brands = [
    'Emaar Properties',
    'Emirates',
    'Jumeirah Group',
    'Majid Al Futtaim',
    'Chalhoub Group',
    'Al Habtoor Group',
    'Damac Properties',
    'Alshaya Group',
    'Landmark Group',
    'Dubai Holding',
    'Meraas',
    'ADNOC',
    'Four Seasons',
    'Cartier',
    'Bulgari',
    'Dubai Mall'
  ];

  return (
    <MinimalLayout>
      <div className="max-w-[1200px] mx-auto px-6 py-32">
        <h1 className="text-5xl font-medium mb-16">Portfolio</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {brands.map((brand) => (
            <div key={brand} className="text-center">
              {/* Placeholder for future logos */}
              <div className="h-16 flex items-center justify-center mb-4">
                <p className="text-sm text-gray-600">{brand}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Join these distinguished brands
          </p>
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