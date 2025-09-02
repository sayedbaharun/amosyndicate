import MinimalLayout from '@/components/minimal/Layout';

export default function Insights() {
  const insights = [
    {
      title: 'Digital Transformation in the Gulf',
      date: 'March 2025'
    },
    {
      title: 'Luxury Marketing During Ramadan',
      date: 'February 2025'
    },
    {
      title: 'Royal Protocol in Digital Marketing',
      date: 'January 2025'
    },
    {
      title: 'Vision 2030 and Brand Alignment',
      date: 'December 2024'
    },
    {
      title: 'Family Office Communications',
      date: 'November 2024'
    },
    {
      title: 'Gulf Consumer Behavior Study',
      date: 'October 2024'
    }
  ];

  return (
    <MinimalLayout>
      <div className="max-w-[800px] mx-auto px-6 py-32">
        <h1 className="text-5xl font-medium mb-16">Insights</h1>
        
        <div className="space-y-8">
          {insights.map((insight) => (
            <div key={insight.title} className="border-b border-gray-200 pb-4">
              <h2 className="text-xl font-medium mb-1">{insight.title}</h2>
              <p className="text-sm text-gray-500">{insight.date}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24">
          <p className="text-gray-600 mb-8">
            Subscribe to receive our latest insights
          </p>
          <a 
            href="/contact" 
            className="inline-block px-12 py-4 bg-black text-white font-medium hover:opacity-90 transition-opacity duration-200"
          >
            Subscribe
          </a>
        </div>
      </div>
    </MinimalLayout>
  );
}