'use client';

import { motion } from 'framer-motion';

export default function ServiceDeliverables() {
  const deliverables = [
    {
      service: 'Social Media Management',
      timeline: '30 Days',
      deliverables: [
        '120 custom posts (4/day)',
        'Brand voice document',
        'Content calendar (3 months)',
        'Weekly performance reports',
        'Community response templates'
      ],
      price: '$7,500/month'
    },
    {
      service: 'AI Agent Development',
      timeline: '7-14 Days',
      deliverables: [
        'Custom GPT deployment',
        'Integration with your CRM',
        'Training on your data',
        '24/7 response system',
        '30-day optimization'
      ],
      price: '$15,000 setup'
    },
    {
      service: 'Growth System',
      timeline: '90 Days',
      deliverables: [
        'Full funnel architecture',
        '5 landing pages',
        'Email automation (20 sequences)',
        'Paid ads setup & management',
        'Weekly optimization calls'
      ],
      price: '$25,000/quarter'
    }
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What You Actually <span className="text-gold">Get</span>
          </h2>
          <p className="text-xl text-gray-400">
            No vague promises. Clear deliverables. Fixed timelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray syndicate-border p-8"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gold mb-2">
                  {item.service}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm uppercase tracking-wider text-gray-500">
                    Delivery: {item.timeline}
                  </span>
                  <span className="text-lg font-bold text-gold">
                    {item.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {item.deliverables.map((deliverable, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span className="text-gray-300">{deliverable}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-black/50 border-l-2 border-gold">
                <p className="text-sm text-gray-400">
                  Week 1: Setup & strategy
                  <br />
                  Week 2-3: Implementation
                  <br />
                  Week 4+: Optimization
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-400 mb-4">
            All packages include:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 bg-gold/20 text-gold text-sm">
              Weekly Slack Updates
            </span>
            <span className="px-4 py-2 bg-gold/20 text-gold text-sm">
              Real-time Dashboard
            </span>
            <span className="px-4 py-2 bg-gold/20 text-gold text-sm">
              30-Day Guarantee
            </span>
            <span className="px-4 py-2 bg-gold/20 text-gold text-sm">
              No Setup Fees
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}