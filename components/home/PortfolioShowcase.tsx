'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const portfolioItems = [
  {
    title: 'Luxury Real Estate Campaign',
    client: 'Elite Properties Dubai',
    category: 'Real Estate Marketing',
    result: '340% increase in qualified leads',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    metrics: {
      engagement: '+450%',
      leads: '+340%',
      revenue: '$2.8M',
    }
  },
  {
    title: 'Personal Brand Strategy',
    client: 'High-Net-Worth Executive',
    category: 'Executive Branding',
    result: 'Positioned as industry thought leader',
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    metrics: {
      followers: '+280%',
      mentions: '+520%',
      speaking: '12 Events',
    }
  },
  {
    title: 'Luxury Hospitality Launch',
    client: 'Premium Resort Chain',
    category: 'Hospitality Marketing',
    result: 'Sold out opening season',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    metrics: {
      bookings: '100%',
      awareness: '+680%',
      revenue: '$4.2M',
    }
  }
];

const testimonials = [
  {
    quote: "AMO transformed our luxury brand's digital presence beyond our wildest expectations. Their understanding of Gulf culture and luxury market dynamics is unparalleled.",
    author: "Sarah Al-Mahmoud",
    title: "CEO, Elite Properties Dubai",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    quote: "Working with AMO was a game-changer. They elevated my personal brand with cultural authenticity and positioned me as a thought leader in the Gulf market.",
    author: "Ahmed Hassan",
    title: "Managing Director, Luxury Investments",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    quote: "Their strategic approach to luxury marketing delivered results that exceeded our ROI expectations by 300%. Truly exceptional work.",
    author: "Fatima Al-Zahra",
    title: "Marketing Director, Premium Hospitality",
    avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  }
];

export default function PortfolioShowcase() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6">
            Proven{' '}
            <span className="luxury-gold">Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed luxury brands across the Gulf region with strategic marketing that honors heritage while delivering exceptional results
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-black border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wide">
                      {item.category}
                    </span>
                    <TrendingUp className="w-5 h-5 luxury-gold" />
                  </div>
                  
                  <h3 className="font-playfair text-xl font-bold text-white mb-2 group-hover:luxury-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {item.client}
                  </p>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.result}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-playfair text-lg font-bold luxury-gold">
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className="w-full flex items-center justify-center px-4 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          className="border-t border-[#D4AF37]/20 pt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-playfair text-3xl font-bold text-center text-white mb-12">
            Client{' '}
            <span className="luxury-gold">Testimonials</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="glass-effect rounded-2xl p-6 hover:bg-[#D4AF37]/10 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center px-8 py-4 gold-gradient text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#D4AF37]/25 transition-all duration-300 text-lg"
          >
            Explore Complete Portfolio
            <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}