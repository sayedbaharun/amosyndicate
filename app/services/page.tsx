import MinimalLayout from '@/components/minimal/Layout';

export default function Services() {
  const services = [
    {
      title: 'Strategy',
      description: 'Brand positioning and market analysis for the Gulf luxury sector. We develop comprehensive strategies that align with Vision 2030 and regional business objectives.'
    },
    {
      title: 'Content',
      description: 'Bilingual content creation with cultural authenticity. From royal protocol communications to Ramadan campaigns, we craft messages that resonate.'
    },
    {
      title: 'Growth',
      description: 'Performance marketing and measurable business outcomes. We deliver 340% average increase in qualified leads through data-driven campaigns.'
    }
  ];

  return (
    <MinimalLayout>
      {/* Strategic Hero Image */}
      <div className="w-full h-[300px] bg-gray-100 mb-16">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=300&fit=crop&q=90"
          alt="Modern office workspace"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      
      <div className="max-w-[800px] mx-auto px-6 py-16">
        <h1 className="text-5xl font-medium mb-16">Services</h1>
        
        <div className="space-y-16">
          {services.map((service) => (
            <div key={service.title} className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-medium mb-4">{service.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-24">
          <a 
            href="/contact" 
            className="inline-block px-12 py-4 bg-black text-white font-medium hover:opacity-90 transition-opacity duration-200"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </MinimalLayout>
  );
}