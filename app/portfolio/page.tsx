'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ExternalLink, TrendingUp, Award, Users, Target, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const portfolioItems = [
  {
    title: 'Elite Properties Dubai Campaign',
    client: 'Elite Properties Dubai',
    category: 'Luxury Real Estate',
    timeline: '6 months',
    investment: '$45,000',
    description: 'Complete digital transformation for Dubai\'s premium real estate developer, focusing on ultra-high-net-worth client acquisition.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    results: {
      'Lead Quality': '+340%',
      'Engagement Rate': '+450%',
      'Revenue Generated': '$2.8M',
      'Cost per Lead': '-65%',
    },
    features: ['Influencer Partnerships', 'Premium Content', 'Targeted Campaigns', 'CRM Integration'],
  },
  {
    title: 'Executive Personal Branding',
    client: 'High-Net-Worth Executive',
    category: 'Personal Branding',
    timeline: '12 months',
    investment: '$75,000',
    description: 'Positioned finance executive as Middle East thought leader through strategic content and networking.',
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    results: {
      'LinkedIn Followers': '+280%',
      'Media Mentions': '+520%',
      'Speaking Events': '12',
      'Industry Recognition': 'Top 10 List',
    },
    features: ['Thought Leadership', 'Media Relations', 'Event Speaking', 'Content Strategy'],
  },
  {
    title: 'Luxury Resort Launch',
    client: 'Premium Resort Chain',
    category: 'Hospitality Marketing',
    timeline: '8 months',
    investment: '$120,000',
    description: 'Full-scale launch campaign for luxury resort featuring exclusive experiences and premium amenities.',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    results: {
      'Opening Bookings': '100%',
      'Brand Awareness': '+680%',
      'Revenue (Year 1)': '$4.2M',
      'Social Following': '+890%',
    },
    features: ['Launch Strategy', 'Influencer Events', 'PR Management', 'Digital Campaigns'],
  },
  {
    title: 'Luxury Automotive Campaign',
    client: 'Premium Car Dealership',
    category: 'Automotive Luxury',
    timeline: '4 months',
    investment: '$35,000',
    description: 'Targeted marketing campaign for exclusive supercar collection targeting Gulf region collectors.',
    image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    results: {
      'Sales Volume': '+180%',
      'Inquiry Quality': '+290%',
      'Test Drives': '+150%',
      'Client Retention': '+70%',
    },
    features: ['Collector Network', 'Exclusive Events', 'VIP Experiences', 'Digital Showroom'],
  },
  {
    title: 'Luxury Watch Brand Strategy',
    client: 'Swiss Watch Distributor',
    category: 'Luxury Goods',
    timeline: '10 months',
    investment: '$85,000',
    description: 'Market penetration strategy for Swiss luxury watches in the Middle East market.',
    image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    results: {
      'Market Share': '+25%',
      'Brand Recognition': '+380%',
      'Sales Revenue': '$1.9M',
      'Collector Network': '+200%',
    },
    features: ['Market Analysis', 'Collector Events', 'Luxury Partnerships', 'Heritage Storytelling'],
  },
  {
    title: 'Private Jet Charter Marketing',
    client: 'Elite Aviation Services',
    category: 'Luxury Travel',
    timeline: '7 months',
    investment: '$60,000',
    description: 'Premium marketing strategy for private jet charter services targeting regional business leaders.',
    image: 'https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    results: {
      'Charter Bookings': '+220%',
      'Client Base': '+160%',
      'Revenue Growth': '$3.1M',
      'Repeat Clients': '+90%',
    },
    features: ['Executive Targeting', 'Luxury Partnerships', 'Exclusive Events', 'Concierge Marketing'],
  },
];

const testimonials = [
  {
    quote: "The results speak for themselves. Arab Money Official transformed our brand presence and delivered exceptional ROI that exceeded all expectations.",
    author: "Sarah Al-Mahmoud",
    title: "CEO, Elite Properties Dubai",
    result: "$2.8M revenue generated",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    quote: "Their understanding of the luxury market and strategic approach positioned me as a recognized thought leader in just 12 months.",
    author: "Ahmed Hassan",
    title: "Managing Director, Luxury Investments",
    result: "280% follower growth",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
];

export default function PortfolioPage() {
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
                Success Stories
              </span>
            </motion.div>

            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Proven{' '}
              <span className="luxury-gold">Excellence</span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover how we've transformed luxury brands across the Middle East with strategic marketing campaigns that deliver exceptional, measurable results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-gradient-to-br from-[#1A1A1A] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index % 2) * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black to-[#1A1A1A] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 glass-effect rounded-full text-[#D4AF37] text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-playfair text-2xl font-bold text-white group-hover:luxury-gold transition-colors duration-300">
                        {item.title}
                      </h3>
                      <TrendingUp className="w-6 h-6 luxury-gold" />
                    </div>
                    
                    <p className="text-gray-400 font-semibold mb-4">
                      {item.client}
                    </p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-gray-400">Timeline:</span>
                        <div className="text-white font-semibold">{item.timeline}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Investment:</span>
                        <div className="text-white font-semibold">{item.investment}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature) => (
                          <span key={feature} className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-sm rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(item.results).map(([key, value]) => (
                        <div key={key} className="text-center glass-effect rounded-lg p-3">
                          <div className="font-playfair text-xl font-bold luxury-gold">
                            {value}
                          </div>
                          <div className="text-xs text-gray-400">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      className="w-full flex items-center justify-center px-6 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6">
              Client{' '}
              <span className="luxury-gold">Success Stories</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="glass-effect rounded-2xl p-8 hover:bg-[#D4AF37]/10 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-400">
                      {testimonial.title}
                    </div>
                    <div className="text-[#D4AF37] text-sm font-semibold">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 gold-gradient text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#D4AF37]/25 transition-all duration-300 text-lg"
              >
                Start Your Success Story
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}