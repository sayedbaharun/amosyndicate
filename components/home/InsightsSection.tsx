'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, TrendingUp, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const insights = [
  {
    title: 'Digital Transformation in the Gulf: Vision 2030 Alignment',
    excerpt: 'How luxury brands can leverage Saudi Arabia and UAE\'s digital transformation initiatives to accelerate growth and cultural resonance.',
    category: 'Gulf Strategy',
    readTime: '8 min read',
    date: 'Jan 15, 2025',
    image: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    featured: true,
  },
  {
    title: 'Luxury Marketing During Ramadan: Cultural Excellence',
    excerpt: 'Mastering the art of sophisticated campaigns that honor Gulf traditions while elevating brand prestige during holy months.',
    category: 'Cultural Marketing',
    readTime: '6 min read',
    date: 'Jan 12, 2025',
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    title: 'Royal Protocol in Digital Marketing: Heritage Meets Innovation',
    excerpt: 'Understanding the nuanced approach required when marketing to royal families and establishing protocols for digital excellence.',
    category: 'Royal Protocol',
    readTime: '10 min read',
    date: 'Jan 10, 2025',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
];

const stats = [
  { label: 'Industry Reports', value: '24', icon: BookOpen },
  { label: 'Market Insights', value: '156', icon: TrendingUp },
  { label: 'Case Studies', value: '89', icon: Calendar },
];

export default function InsightsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1A1A1A] to-black">
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
            Market{' '}
            <span className="luxury-gold">Intelligence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Exclusive insights on Gulf luxury marketing, cultural protocol, and Vision 2030 alignment from our regional heritage experts
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 glass-effect rounded-xl mb-3 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                  <IconComponent className="w-6 h-6 luxury-gold" />
                </div>
                <div className="font-playfair text-2xl font-bold luxury-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              className={`group cursor-pointer ${
                insight.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-black border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 h-full">
                <div className={`relative overflow-hidden ${insight.featured ? 'h-64' : 'h-48'}`}>
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {insight.featured && (
                    <div className="absolute top-4 left-4">
                      <div className="gold-gradient px-3 py-1 rounded-full text-black text-sm font-semibold">
                        Featured
                      </div>
                    </div>
                  )}
                </div>

                <div className={`p-6 ${insight.featured ? 'lg:p-8' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wide">
                      {insight.category}
                    </span>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{insight.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{insight.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className={`font-playfair font-bold text-white mb-3 group-hover:luxury-gold transition-colors duration-300 leading-tight ${
                    insight.featured ? 'text-2xl lg:text-3xl' : 'text-xl'
                  }`}>
                    {insight.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {insight.excerpt}
                  </p>

                  <motion.div
                    className="flex items-center text-[#D4AF37] hover:text-[#B8941F] transition-colors duration-300 font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Masterclass CTA */}
        <motion.div
          className="glass-effect rounded-2xl p-8 lg:p-12 text-center border border-[#D4AF37]/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-6">
              Luxury Marketing{' '}
              <span className="luxury-gold">Masterclass Series</span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Exclusive educational content and workshops designed for luxury brand executives and marketing professionals
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/insights"
                  className="inline-flex items-center px-8 py-4 gold-gradient text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#D4AF37]/25 transition-all duration-300"
                >
                  Access Free Resources
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                >
                  Schedule Private Session
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}