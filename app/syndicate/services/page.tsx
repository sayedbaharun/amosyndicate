'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ServiceDeliverables from '@/components/syndicate/ServiceDeliverables';

export default function ServicesPage() {
  const services = [
    {
      title: 'Social Media Management',
      icon: '📱',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop&q=90',
      description: 'We run your brand\'s digital frontlines — Instagram, TikTok, YouTube, and LinkedIn — with results that compound.',
      details: [
        'Multi-platform content strategy',
        'Community management & engagement',
        'Performance analytics & reporting',
        'Brand voice systemization'
      ],
      cta: 'Scale Your Presence'
    },
    {
      title: 'Campaigns & Paid Advertising',
      icon: '🚀',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=500&fit=crop&q=90',
      description: 'End-to-end campaigns that drive engagement, traffic, and sales. From Dubai to the world.',
      details: [
        'Performance marketing (Meta, Google, TikTok)',
        'Creative strategy & production',
        'A/B testing & optimization',
        'ROI-focused campaign management'
      ],
      cta: 'Launch Campaigns'
    },
    {
      title: 'Digital Marketing Systems',
      icon: '⚙️',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop&q=90',
      description: 'Landing pages, automations, email flows — built to convert attention into revenue.',
      details: [
        'High-converting funnel architecture',
        'Marketing automation setup',
        'CRM integration & optimization',
        'Email marketing sequences'
      ],
      cta: 'Build Your System'
    },
    {
      title: 'Social Media Consultancy',
      icon: '🎯',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&q=90',
      description: 'Strategic audits, growth blueprints, and monetization models for scaling with clarity.',
      details: [
        'Platform opportunity analysis',
        'Content strategy workshops',
        'Monetization roadmaps',
        'Team training & SOPs'
      ],
      cta: 'Get Strategic'
    },
    {
      title: 'Social Media App Development',
      icon: '🤖',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop&q=90',
      description: 'Custom AI agents, schedulers, dashboards — tools built under license, by design.',
      details: [
        'Custom social media tools',
        'AI-powered content assistants',
        'Analytics dashboards',
        'Automation workflows'
      ],
      cta: 'Deploy Technology'
    },
    {
      title: 'AI-Powered Content Ops',
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop&q=90',
      description: 'We use smart automation to scale your content production while staying human-led.',
      details: [
        'AI content generation systems',
        'Bulk content creation pipelines',
        'Smart scheduling & distribution',
        'Performance optimization loops'
      ],
      cta: 'Automate Content'
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-navy overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=600&fit=crop&q=90"
            alt="Modern office space"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 to-navy" />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              What We\'re Licensed to Do —
            </h1>
            <p className="text-3xl md:text-4xl text-gold">
              And Elite At.
            </p>
          </motion.div>
          
          <motion.div
            className="flex items-center justify-center gap-2 text-sm text-gold/60 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>All services fully licensed under SHAMS Media City</span>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-gray syndicate-border overflow-hidden hover:syndicate-glow transition-all duration-300 group"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray via-gray/95 to-gray/80" />
                </div>
                
                {/* Content */}
                <div className="relative p-12">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-3 text-gold">
                        {service.title}
                      </h2>
                      <p className="text-xl text-gray-300 mb-8">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-gold mt-1">→</span>
                            <span className="text-gray-400">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link href="/syndicate#leadgen-form">
                        <motion.button
                          className="bg-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {service.cta}
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <ServiceDeliverables />

      {/* Process Section */}
      <section className="relative py-24 px-4 bg-gray overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&h=800&fit=crop&q=90"
            alt="Office workspace"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We <span className="text-gold">Execute</span>
            </h2>
            <p className="text-xl text-gray-400">
              Systems. Not services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                phase: '01',
                title: 'Discovery',
                description: 'Deep dive into your business, market position, and growth blockers.'
              },
              {
                phase: '02',
                title: 'Architecture',
                description: 'Design custom systems and automations specific to your leverage points.'
              },
              {
                phase: '03',
                title: 'Implementation',
                description: 'Rapid deployment with weekly sprints and measurable milestones.'
              },
              {
                phase: '04',
                title: 'Optimization',
                description: 'Continuous refinement based on performance data and market feedback.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-8 items-center"
              >
                <div className="text-5xl font-bold text-gold">
                  {step.phase}
                </div>
                <div className="flex-1 syndicate-border p-6 bg-black">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Call CTA */}
      <section className="relative py-16 px-4 bg-black border-y border-gold/20 overflow-hidden">
        {/* Background Dubai Skyline */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&h=400&fit=crop&q=90"
            alt="Dubai skyline"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black" />
        </div>
        
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Not sure what you need?
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              Book a 15-min strategy call. We\'ll design your roadmap together.
            </p>
            <Link href="/syndicate#leadgen-form">
              <motion.button
                className="bg-transparent border-2 border-gold text-gold px-12 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Strategy Call
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-navy overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=600&fit=crop&q=90"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        </div>
        
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to build your <span className="text-gold">machine</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              We\'re systems partners. Not service providers.
            </p>
            <Link href="/syndicate#leadgen-form">
              <motion.button
                className="bg-gold text-black px-12 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Building
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}