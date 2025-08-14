'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Crown, Zap, Rocket, ArrowRight, Check, Star } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ROICalculator = dynamic(() => import('@/components/ui/ROICalculator'), {
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-gray-900 rounded-2xl" />
});

const serviceTiers = [
  {
    name: 'Content Mastery',
    price: '$2,000-5,000',
    period: 'per month',
    icon: Crown,
    description: 'Perfect for emerging luxury brands seeking professional content creation and social media presence',
    features: [
      'Social media management (Instagram, LinkedIn, Twitter)',
      'Premium content creation and curation',
      'Basic analytics and monthly reporting',
      '2-week content bank creation',
      'Community management and engagement',
      'Brand voice development',
      'Hashtag strategy optimization',
      'Competitor analysis',
    ],
    deliverables: [
      '20-30 posts per month',
      '5-10 Stories per week',
      'Monthly performance report',
      'Content calendar planning',
    ],
    gradient: 'from-[#D4AF37]/20 to-[#B8941F]/20',
    borderGradient: 'from-[#D4AF37] to-[#B8941F]',
  },
  {
    name: 'Campaign Excellence',
    price: '$5,000-15,000',
    period: 'per month',
    icon: Zap,
    description: 'Comprehensive digital marketing for established luxury brands ready to dominate their market',
    features: [
      'Everything included in Content Mastery',
      'Influencer partnerships and collaborations',
      'Advanced analytics and optimization',
      'Multi-platform advertising campaigns',
      'Brand strategy consulting',
      'Email marketing automation',
      'Lead generation systems',
      'Conversion rate optimization',
      'Crisis management support',
    ],
    deliverables: [
      'Bi-weekly strategy sessions',
      'Custom campaign development',
      'Influencer network access',
      'Advanced performance dashboards',
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
    description: 'Complete luxury brand transformation for market leaders seeking total dominance',
    features: [
      'Everything included in Campaign Excellence',
      'Complete brand strategy overhaul',
      'Event marketing and PR management',
      'Custom app and website development',
      'Executive consulting and coaching',
      'Media relations and press coverage',
      'Strategic partnerships facilitation',
      'Market research and intelligence',
      'Dedicated account management team',
    ],
    deliverables: [
      'Weekly executive briefings',
      'Custom technology solutions',
      'Exclusive event access',
      'Personal brand development',
    ],
    gradient: 'from-[#D4AF37]/40 to-[#B8941F]/40',
    borderGradient: 'from-[#D4AF37] to-[#B8941F]',
  },
];

const additionalServices = [
  {
    title: 'Personal Brand Building',
    description: 'Transform high-net-worth individuals into thought leaders and industry authorities',
    icon: Star,
    price: 'Custom',
  },
  {
    title: 'Luxury Real Estate Marketing',
    description: 'Specialized marketing strategies for premium properties and developments',
    icon: Crown,
    price: 'Project-based',
  },
  {
    title: 'Event Management',
    description: 'Exclusive networking events and luxury brand activations',
    icon: Zap,
    price: 'Custom',
  },
  {
    title: 'Educational Workshops',
    description: 'Luxury marketing masterclasses for executives and marketing teams',
    icon: Rocket,
    price: 'Per session',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-[#1A1A1A] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 glass-effect rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-[#D4AF37] text-sm font-semibold">
                Premium Services
              </span>
            </motion.div>

            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Luxury Marketing{' '}
              <span className="luxury-gold">Excellence</span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Three sophisticated service tiers designed to elevate luxury brands at every stage of their digital transformation journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-24 bg-gradient-to-br from-[#1A1A1A] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {serviceTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <motion.div
                  key={tier.name}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="gold-gradient px-4 py-2 rounded-full text-black text-sm font-semibold">
                        Most Popular Choice
                      </div>
                    </div>
                  )}
                  
                  <div className={`relative h-full bg-gradient-to-br ${tier.gradient} backdrop-blur-sm border border-transparent bg-clip-padding rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-500`}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-4 glass-effect rounded-xl">
                        <IconComponent className="w-10 h-10 luxury-gold" />
                      </div>
                      {tier.popular && (
                        <div className="text-[#D4AF37] text-sm font-semibold">
                          ⭐ Premium
                        </div>
                      )}
                    </div>

                    <h3 className="font-playfair text-3xl font-bold text-white mb-4">
                      {tier.name}
                    </h3>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="font-playfair text-4xl font-bold luxury-gold">
                          {tier.price}
                        </span>
                        <span className="text-gray-400 ml-2">
                          {tier.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                      {tier.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-semibold text-white mb-4">Features Included:</h4>
                      <ul className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 luxury-gold mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-white mb-4">Key Deliverables:</h4>
                      <ul className="space-y-2">
                        {tier.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                            <span className="text-gray-300 text-sm">
                              {deliverable}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#D4AF37]/25 transition-all duration-300"
                      >
                        Get Started Today
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6">
              Specialized{' '}
              <span className="luxury-gold">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Bespoke solutions tailored to unique luxury market needs and opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="glass-effect rounded-2xl p-8 hover:bg-[#D4AF37]/10 transition-all duration-500 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="p-3 glass-effect rounded-xl group-hover:bg-[#D4AF37]/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent className="w-8 h-8 luxury-gold" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-playfair text-2xl font-bold text-white group-hover:luxury-gold transition-colors duration-300">
                          {service.title}
                        </h3>
                        <span className="text-[#D4AF37] font-semibold">
                          {service.price}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-8">
              All services include dedicated account management, regular strategy sessions, and premium support
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 gold-gradient text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#D4AF37]/25 transition-all duration-300 text-lg"
              >
                Discuss Custom Solutions
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-24 bg-gradient-to-br from-[#1A1A1A] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ROICalculator />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}