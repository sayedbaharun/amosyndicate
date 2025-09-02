'use client';

import { motion } from 'framer-motion';
import { Crown, Zap, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const serviceTiers = [
  {
    name: 'Content Mastery',
    icon: Crown,
    description: 'Elevate your brand with premium content creation and social media management',
    features: [
      'Social media management',
      'Content creation & curation',
      'Basic analytics & reporting',
      'Arabic content excellence',
      'Community management',
    ],
    gradient: 'from-emerald-teal/20 to-luxury-gold/20',
    borderGradient: 'from-emerald-teal to-luxury-gold',
  },
  {
    name: 'Campaign Excellence',
    icon: Zap,
    description: 'Comprehensive digital marketing campaigns that drive luxury brand awareness',
    features: [
      'Everything in Content Mastery',
      'Ramadan campaign specialists',
      'Advanced analytics & optimization',
      'Multi-platform campaigns',
      'Regional events marketing',
    ],
    gradient: 'from-luxury-gold/30 to-dubai-sand/30',
    borderGradient: 'from-luxury-gold to-dubai-sand',
    popular: true,
  },
  {
    name: 'Luxury Authority',
    icon: Rocket,
    description: 'Complete luxury brand transformation and market dominance strategy',
    features: [
      'Everything in Campaign Excellence',
      'Complete brand strategy',
      'National Day & Eid campaigns',
      'Cultural adaptation expertise',
      'Royal family campaign management',
    ],
    gradient: 'from-emerald-teal/40 to-pearl-white/20',
    borderGradient: 'from-emerald-teal to-pearl-white',
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
                
                <div className={`relative h-full bg-gradient-to-br ${tier.gradient} backdrop-blur-sm border border-transparent bg-clip-padding rounded-2xl p-8 hover:border-emerald-teal/50 transition-all duration-500`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${tier.borderGradient} rounded-2xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <div className="w-full h-full bg-black rounded-2xl"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 glass-effect rounded-xl">
                        <IconComponent className="w-8 h-8 luxury-gold" />
                      </div>
                      {tier.popular && (
                        <div className="text-luxury-gold text-sm font-semibold">
                          ⭐ Premium Choice
                        </div>
                      )}
                    </div>

                    <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    

                    <p className="text-gray-300 mb-8 leading-relaxed">
                      {tier.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-emerald-teal rounded-full mt-2 flex-shrink-0" />
                          <span className="text-pearl-white text-sm leading-relaxed">
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
                        className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-luxury-gold to-emerald-teal text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-luxury-gold/25 transition-all duration-300"
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
            className="inline-flex items-center text-luxury-gold hover:text-emerald-teal transition-colors duration-300 font-semibold"
          >
            Explore All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}