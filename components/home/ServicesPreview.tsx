'use client';

import { motion } from 'framer-motion';
import { Crown, Zap, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const serviceTiers = [
  {
    name: 'Content Mastery',
    price: '$2,000-5,000',
    period: 'per month',
    icon: Crown,
    description: 'Elevate your brand with premium content creation and social media management',
    features: [
      'Social media management',
      'Content creation & curation',
      'Basic analytics & reporting',
      '2-week content bank creation',
      'Community management',
    ],
    gradient: 'from-[#D4AF37]/20 to-[#B8941F]/20',
    borderGradient: 'from-[#D4AF37] to-[#B8941F]',
  },
  {
    name: 'Campaign Excellence',
    price: '$5,000-15,000',
    period: 'per month',
    icon: Zap,
    description: 'Comprehensive digital marketing campaigns that drive luxury brand awareness',
    features: [
      'Everything in Content Mastery',
      'Influencer partnerships',
      'Advanced analytics & optimization',
      'Multi-platform campaigns',
      'Brand strategy consulting',
    ],
    gradient: 'from-[#D4AF37]/30 to-[#B8941F]/30',
    borderGradient: 'from-[#D4AF37] to-[#B8941F]',
    popular: true,
  },
  {
    name: 'Luxury Authority',
    price: '$15,000+',
    period: 'per month',
    icon: Rocket,
    description: 'Complete luxury brand transformation and market dominance strategy',
    features: [
      'Everything in Campaign Excellence',
      'Complete brand strategy',
      'Event marketing & PR',
      'Custom app development',
      'Executive consulting',
    ],
    gradient: 'from-[#D4AF37]/40 to-[#B8941F]/40',
    borderGradient: 'from-[#D4AF37] to-[#B8941F]',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1A1A1A] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Luxury Marketing{' '}
            <span className="luxury-gold">Excellence</span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Three sophisticated tiers designed to elevate your luxury brand at every stage of growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <motion.div
                key={tier.name}
                className={`relative group cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="gold-gradient px-4 py-1 rounded-full text-black text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`relative h-full bg-gradient-to-br ${tier.gradient} backdrop-blur-sm border border-transparent bg-clip-padding rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-500`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${tier.borderGradient} rounded-2xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <div className="w-full h-full bg-black rounded-2xl"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 glass-effect rounded-xl">
                        <IconComponent className="w-8 h-8 luxury-gold" />
                      </div>
                      {tier.popular && (
                        <div className="text-[#D4AF37] text-sm font-semibold">
                          ⭐ Premium Choice
                        </div>
                      )}
                    </div>

                    <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="font-playfair text-3xl font-bold luxury-gold">
                          {tier.price}
                        </span>
                        <span className="text-gray-400 ml-2">
                          {tier.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-8 leading-relaxed">
                      {tier.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#D4AF37]/25 transition-all duration-300"
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/services"
            className="inline-flex items-center text-[#D4AF37] hover:text-[#B8941F] transition-colors duration-300 font-semibold"
          >
            Explore All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}