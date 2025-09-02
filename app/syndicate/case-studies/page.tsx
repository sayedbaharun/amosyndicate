'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      client: 'ArabMoneyOfficial',
      platform: 'Instagram',
      metric: '500K+',
      metricLabel: 'Followers Revived',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=90',
      problem: 'Dormant luxury media brand with declining engagement and no content pipeline.',
      ourRole: 'Built automated content distribution system across 5 platforms with AI-powered engagement optimization.',
      outcome: [
        '500K+ followers reactivated in 90 days',
        '340% increase in engagement rate',
        '7-figure brand valuation increase',
        'Zero manual posting required'
      ],
      quote: '"AMO Syndicate didn\'t just revive our brand — they built a machine that runs itself."',
      technologies: ['GPT-4 Content Engine', 'Multi-Platform Scheduler', 'Engagement Analytics AI'],
      color: 'text-gold'
    },
    {
      client: 'GetMeToDubai',
      platform: 'AI Concierge',
      metric: '7-Day',
      metricLabel: 'MVP Launch',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop&q=90',
      problem: 'Luxury travel concierge needed AI-powered booking system with human touch.',
      ourRole: 'Deployed custom GPT agent for instant recommendations with seamless handoff to human experts.',
      outcome: [
        'Launched functional MVP in 7 days',
        '85% query automation rate',
        '$2.3M in bookings first quarter',
        '24/7 availability across timezones'
      ],
      quote: '"From concept to revenue in a week. That\'s the AMO difference."',
      technologies: ['Custom GPT Model', 'CRM Integration', 'WhatsApp Business API'],
      color: 'text-gold'
    },
    {
      client: 'Aivant Realty',
      platform: 'Property Tech',
      metric: 'World\'s First',
      metricLabel: 'RERA-Qualified AI Agent',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=90',
      problem: 'Real estate brokerage needed 24/7 qualified property consultant that could legally advise.',
      ourRole: 'Created the world\'s first RERA-qualified AI property agent with full compliance framework.',
      outcome: [
        'First AI agent with RERA qualification',
        '127 qualified leads per day average',
        '43% conversion to viewing',
        'Full legal compliance maintained'
      ],
      quote: '"Real estate reimagined — AMO built us an agent that never sleeps."',
      technologies: ['RERA-Compliant AI', 'Property Database Integration', 'Legal Framework Automation'],
      color: 'text-gold'
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-navy overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=600&fit=crop&q=90"
            alt="Data visualization"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Proven <span className="text-gold">Results</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300">
              Real clients. Real revenue. Real scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Case Header */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-4xl font-bold text-gold">
                      {study.client}
                    </h2>
                    <span className="px-3 py-1 bg-gold/20 text-gold text-sm uppercase tracking-wider">
                      {study.platform}
                    </span>
                  </div>
                  
                  {/* Case Study Visual */}
                  <div className="relative mb-8 overflow-hidden rounded-lg syndicate-border">
                    <img 
                      src={study.image}
                      alt={`${study.client} case study`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                      <p className="text-6xl font-bold mb-2 text-white">{study.metric}</p>
                      <p className="text-xl text-gold">{study.metricLabel}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-gold uppercase tracking-wider">
                      Problem
                    </h3>
                    <p className="text-gray-400 text-lg">{study.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3 text-gold uppercase tracking-wider">
                      Our Role
                    </h3>
                    <p className="text-gray-400 text-lg">{study.ourRole}</p>
                  </div>
                </div>
              </div>

              {/* Outcome Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-lg font-bold mb-6 text-gold uppercase tracking-wider">
                    Outcome
                  </h3>
                  <ul className="space-y-4">
                    {study.outcome.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-gold text-xl mt-0.5">✓</span>
                        <span className="text-gray-300 text-lg">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Client Quote */}
                  <div className="bg-black syndicate-border p-8 mb-8">
                    <p className="text-xl text-gray-300 italic mb-4">
                      {study.quote}
                    </p>
                    <p className="text-sm text-gold uppercase tracking-wider">
                      — {study.client} Team
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-sm font-bold mb-3 text-gold uppercase tracking-wider">
                      Tech Stack Deployed
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray syndicate-border text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < caseStudies.length - 1 && (
                <div className="mt-32 border-b border-gold/10" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative py-24 px-4 bg-gray overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=600&fit=crop&q=90"
            alt="Data analytics"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray/90 to-gray" />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Aggregate <span className="text-gold">Impact</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '$47M+', label: 'Revenue Generated' },
              { number: '2.3M+', label: 'Followers Grown' },
              { number: '127', label: 'Systems Built' },
              { number: '340%', label: 'Avg ROI Increase' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-gold mb-2">
                  {stat.number}
                </p>
                <p className="text-sm uppercase tracking-wider text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="relative py-16 px-4 bg-black border-y border-gold/20 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=400&fit=crop&q=90"
            alt="Success pattern"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-8 h-8 text-gold mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="text-lg font-bold mb-2">SHAMS Licensed</h3>
              <p className="text-sm text-gray-400">Fully licensed by Sharjah Media City</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <svg className="w-8 h-8 text-gold mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <h3 className="text-lg font-bold mb-2">Results Guaranteed</h3>
              <p className="text-sm text-gray-400">Performance-based partnerships available</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <svg className="w-8 h-8 text-gold mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <h3 className="text-lg font-bold mb-2">Weekly Sprints</h3>
              <p className="text-sm text-gray-400">Structured onboarding & delivery</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-navy overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop&q=90"
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
              Your success story is <span className="text-gold">next</span>
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
                Start Your Machine
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}