export default function ServicesMinimal() {
  const services = [
    {
      title: 'Strategy',
      description: 'Brand positioning and market analysis for the Gulf luxury sector.'
    },
    {
      title: 'Content',
      description: 'Bilingual content creation with cultural authenticity.'
    },
    {
      title: 'Growth',
      description: 'Performance marketing and measurable business outcomes.'
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-medium mb-16">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8">
              <h3 className="text-xl font-medium mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}