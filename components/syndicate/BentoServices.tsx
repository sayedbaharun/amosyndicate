'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function BentoServices() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const services = [
    {
      id: 'whatsapp-ai',
      title: 'WhatsApp AI Bot',
      subtitle: '3-Second Response Time',
      description: 'Responds to property inquiries instantly. Qualifies budget, books viewings, sends brochures. In Arabic & English.',
      icon: '🤖',
      stats: '147 Leads/Month',
      gradient: 'from-yellow-600 to-gold',
      size: 'large', // 2x2 grid
      features: ['Dubai Real Estate', 'Budget Qualify', 'Arabic/English', '24/7 Active'],
      cta: 'See Demo',
      price: '500 AED/lead',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=90'
    },
    {
      id: 'instagram-dm',
      title: 'Instagram DM Automation',
      subtitle: 'Never Miss a Lead',
      description: 'Auto-responds to property comments and DMs. Captures contact info.',
      icon: '📱',
      stats: '89 DMs/Day Handled',
      gradient: 'from-purple-600 to-pink-600',
      size: 'medium', // 1x2 grid
      features: ['Story Replies', 'Comment DMs', 'Lead Capture'],
      cta: 'Get Started',
      price: '5,000 AED/mo',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&q=90'
    },
    {
      id: 'lead-funnel',
      title: 'Lead Magnet Funnel',
      subtitle: 'Dubai Property Guide 2024',
      description: 'Landing page + email sequence that nurtures leads to viewings.',
      icon: '🔄',
      stats: '31% Conversion',
      gradient: 'from-blue-600 to-cyan-600',
      size: 'medium', // 1x2 grid
      features: ['Landing Page', '7-Day Emails', 'CRM Setup'],
      cta: 'Build Funnel',
      price: '15,000 AED',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=90'
    },
    {
      id: 'quick-audit',
      title: 'Free Audit',
      subtitle: '15-Min Analysis',
      description: 'We analyze your current marketing and show exactly how to 2x leads.',
      icon: '🎯',
      stats: 'No Cost',
      gradient: 'from-green-600 to-emerald-600',
      size: 'small', // 1x1 grid
      features: ['WhatsApp Call', 'Custom Plan'],
      cta: 'Book Now',
      price: 'FREE',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=400&fit=crop&q=90'
    },
    {
      id: 'done-with-you',
      title: 'Implementation',
      subtitle: '7-Day Sprint',
      description: 'We set everything up WITH you. No lengthy onboarding.',
      icon: '⚡',
      stats: '7 Days',
      gradient: 'from-orange-600 to-red-600',
      size: 'small', // 1x1 grid
      features: ['Fast Setup', 'Training'],
      cta: 'Start Sprint',
      price: 'Custom',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&q=90'
    },
    {
      id: 'pay-per-lead',
      title: 'Pure Performance',
      subtitle: 'No Retainers',
      description: 'You only pay for qualified leads. No monthly fees.',
      icon: '💰',
      stats: '20 Lead Guarantee',
      gradient: 'from-indigo-600 to-purple-600',
      size: 'small', // 1x1 grid
      features: ['Risk-Free', 'Results Only'],
      cta: 'Learn More',
      price: 'Pay Per Lead',
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
            What We <span className="text-gold">Actually Do</span>
          </h2>
          <p className="text-xl text-gray-400">
            Specific solutions for Dubai real estate. No fluff, just results.
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