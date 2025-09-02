'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function BentoServices() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const services = [
    {
      id: 'ai-agents',
      title: 'AI Agents',
      subtitle: 'Custom GPTs That Convert',
      description: 'Deploy intelligent automation that handles customer queries, qualifies leads, and closes deals 24/7.',
      icon: '🤖',
      stats: '85% Query Automation',
      gradient: 'from-yellow-600 to-gold',
      size: 'large', // 2x2 grid
      features: ['WhatsApp Integration', 'Multi-language', 'RERA Compliant', 'Lead Scoring'],
      cta: 'Deploy AI Now',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=90'
    },
    {
      id: 'social-media',
      title: 'Social Media Management',
      subtitle: 'Content That Scales',
      description: 'Multi-platform content systems that grow your following on autopilot.',
      icon: '📱',
      stats: '340% Engagement Increase',
      gradient: 'from-purple-600 to-pink-600',
      size: 'medium', // 1x2 grid
      features: ['5 Platforms', 'Daily Posts', 'Analytics'],
      cta: 'Scale Presence',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&q=90'
    },
    {
      id: 'funnels',
      title: 'Funnels & Automation',
      subtitle: 'Machines That Sell',
      description: 'High-converting landing pages and email sequences.',
      icon: '🔄',
      stats: '47% Conversion Rate',
      gradient: 'from-blue-600 to-cyan-600',
      size: 'medium', // 1x2 grid
      features: ['Landing Pages', 'Email Flows', 'CRM Setup'],
      cta: 'Build Funnels',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=90'
    },
    {
      id: 'paid-ads',
      title: 'Paid Advertising',
      subtitle: 'ROI Focused',
      description: 'Meta, Google, TikTok campaigns that print money.',
      icon: '🚀',
      stats: '8x ROAS Average',
      gradient: 'from-green-600 to-emerald-600',
      size: 'small', // 1x1 grid
      features: ['A/B Testing', 'Retargeting'],
      cta: 'Start Ads',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=400&fit=crop&q=90'
    },
    {
      id: 'consulting',
      title: 'Strategy Consulting',
      subtitle: 'Growth Blueprints',
      description: 'Expert guidance to scale your brand in MENA.',
      icon: '🎯',
      stats: '23 Brands Scaled',
      gradient: 'from-orange-600 to-red-600',
      size: 'small', // 1x1 grid
      features: ['Audits', 'Roadmaps'],
      cta: 'Get Strategy',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&q=90'
    },
    {
      id: 'content-ops',
      title: 'Content Operations',
      subtitle: 'Scale Creation',
      description: 'End-to-end content production systems.',
      icon: '⚙️',
      stats: '500+ Posts/Month',
      gradient: 'from-indigo-600 to-purple-600',
      size: 'small', // 1x1 grid
      features: ['AI Writing', 'Scheduling'],
      cta: 'Scale Content',
      image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=400&h=400&fit=crop&q=90'
    }
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            We're not an agency.{' '}
            <span className="text-gold">We're your edge.</span>
          </h2>
          <p className="text-xl text-gray-400">
            Click any service to explore our capabilities
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
          {services.map((service, index) => {
            const isLarge = service.size === 'large';
            const isMedium = service.size === 'medium';
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`
                  relative group cursor-pointer overflow-hidden
                  ${isLarge ? 'col-span-2 row-span-2' : ''}
                  ${isMedium ? 'col-span-1 md:col-span-2 row-span-1 md:row-span-2' : ''}
                  ${service.size === 'small' ? 'col-span-1 row-span-1' : ''}
                `}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" />
                </div>

                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Border Glow */}
                <div className="absolute inset-0 border border-gold/20 group-hover:border-gold/40 transition-colors duration-500" />
                
                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  {/* Top Section */}
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        className="text-4xl"
                        animate={{ 
                          scale: hoveredCard === service.id ? [1, 1.2, 1.1] : 1,
                          rotate: hoveredCard === service.id ? [0, -10, 0] : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.icon}
                      </motion.div>
                      {service.stats && (
                        <motion.div 
                          className="px-2 py-1 bg-gold/20 text-gold text-xs uppercase tracking-wider"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ 
                            opacity: hoveredCard === service.id ? 1 : 0,
                            x: hoveredCard === service.id ? 0 : 20
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.stats}
                        </motion.div>
                      )}
                    </div>
                    
                    <h3 className={`font-bold mb-2 text-white ${isLarge ? 'text-3xl' : 'text-xl'}`}>
                      {service.title}
                    </h3>
                    <p className="text-gold text-sm mb-3">
                      {service.subtitle}
                    </p>
                    
                    {/* Description - Show on larger cards or hover */}
                    <motion.p 
                      className={`text-gray-400 text-sm mb-4 ${service.size === 'small' ? 'hidden' : ''}`}
                      initial={{ opacity: isLarge ? 1 : 0 }}
                      animate={{ 
                        opacity: (isLarge || hoveredCard === service.id) ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                    
                    {/* Features - Show on hover for medium/large */}
                    {(isLarge || isMedium) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: hoveredCard === service.id ? 1 : 0,
                          y: hoveredCard === service.id ? 0 : 10
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-wrap gap-2 mb-4"
                      >
                        {service.features.map((feature) => (
                          <span 
                            key={feature}
                            className="px-2 py-1 bg-black/50 backdrop-blur-sm text-xs text-gray-300 border border-gold/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {/* Bottom CTA */}
                  <Link href="/syndicate/services">
                    <motion.button
                      className="w-full py-2 bg-gold/10 border border-gold/30 text-gold text-sm font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {service.cta} →
                    </motion.button>
                  </Link>
                </div>

                {/* Hover Spotlight Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredCard === service.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: hoveredCard === service.id 
                      ? `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 215, 0, 0.1), transparent 50%)`
                      : 'none'
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/syndicate/services">
            <motion.span 
              className="text-gold text-lg uppercase tracking-wider hover:text-white transition-colors cursor-pointer inline-block"
              whileHover={{ x: 10 }}
            >
              Explore All Services in Detail →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}