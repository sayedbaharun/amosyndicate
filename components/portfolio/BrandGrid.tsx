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
  'ADNOC'
];

export default function BrandGrid() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-medium mb-16">Portfolio</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {brands.map((brand) => (
            <div key={brand} className="text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                {/* Placeholder for logo */}
                <div className="w-full h-12 bg-gray-100" />
              </div>
              <p className="text-sm">{brand}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}