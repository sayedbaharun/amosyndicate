import MinimalLayout from '@/components/minimal/Layout';

export default function CaseStudies() {
  const cases = [
    {
      title: 'Luxury Real Estate Campaign',
      metric: '340% increase in qualified leads',
      description: 'Transformed digital presence for Dubai\'s premier property developer.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=400&fit=crop&q=90'
    },
    {
      title: 'Royal Family Brand Strategy',
      metric: 'Positioned as regional thought leader',
      description: 'Developed comprehensive digital strategy for prominent Gulf family.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=400&fit=crop&q=90'
    },
    {
      title: 'Hospitality Launch',
      metric: 'Sold out opening season',
      description: 'Created anticipation campaign for luxury resort opening.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=400&fit=crop&q=90'
    },
    {
      title: 'Ramadan Campaign',
      metric: '520% social engagement increase',
      description: 'Culturally authentic campaign during holy month.',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&h=400&fit=crop&q=90'
    },
    {
      title: 'Vision 2030 Alignment',
      metric: 'Government partnership secured',
      description: 'Positioned brand as Vision 2030 contributor.',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=400&fit=crop&q=90'
    }
  ];

  return (
    <MinimalLayout>
      <div className="max-w-[800px] mx-auto px-6 py-32">
        <h1 className="text-5xl font-medium mb-16">Case Studies</h1>
        
        <div className="space-y-24">
          {cases.map((study, index) => (
            <div key={study.title} className="space-y-6">
              {/* Case Image */}
              <div className="h-[300px] bg-gray-100">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Case Details */}
              <div>
                <h2 className="text-2xl font-medium mb-2">{study.title}</h2>
                <p className="text-[#B8A06A] font-medium mb-4">{study.metric}</p>
                <p className="text-gray-600">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24">
          <a 
            href="/contact" 
            className="inline-block px-12 py-4 bg-black text-white font-medium hover:opacity-90 transition-opacity duration-200"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </MinimalLayout>
  );
}