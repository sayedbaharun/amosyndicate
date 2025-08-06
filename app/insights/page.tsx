'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, TrendingUp, BookOpen, Download, ArrowRight, Filter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const insights = [
  {
    title: 'The Future of Luxury Marketing in the GCC: 2025 Trends Report',
    excerpt: 'Comprehensive analysis of emerging trends, consumer behavior shifts, and strategic opportunities defining the luxury market landscape across the Gulf region.',
    category: 'Market Analysis',
    readTime: '12 min read',
    date: 'Jan 15, 2025',
    image: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    featured: true,
    downloadable: true,
  },
  {
    title: 'Building Personal Brands for High-Net-Worth Individuals',
    excerpt: 'Strategic framework for elevating executive presence and establishing thought leadership in competitive luxury markets.',
    category: 'Personal Branding',
    readTime: '8 min read',
    date: 'Jan 12, 2025',
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    title: 'Luxury Real Estate Digital Marketing: Dubai Case Study',
    excerpt: 'Deep dive into our successful campaign that achieved 340% lead increase for premium properties through strategic digital marketing.',
    category: 'Case Study',
    readTime: '10 min read',
    date: 'Jan 10, 2025',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    title: 'Social Media Strategy for Luxury Brands: Middle East Focus',
    excerpt: 'Platform-specific strategies and cultural considerations for luxury brand marketing across regional social media channels.',
    category: 'Social Media',
    readTime: '7 min read',
    date: 'Jan 8, 2025',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    title: 'Influencer Marketing in the Luxury Space: ROI Optimization',
    excerpt: 'Best practices for selecting, partnering with, and measuring the impact of luxury lifestyle influencers in marketing campaigns.',
    category: 'Influencer Marketing',
    readTime: '9 min read',
    date: 'Jan 5, 2025',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    title: 'Digital Transformation for Traditional Luxury Brands',
    excerpt: 'Navigating the balance between heritage preservation and modern digital engagement for established luxury companies.',
    category: 'Digital Strategy',
    readTime: '11 min read',
    date: 'Jan 3, 2025',
    image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
];

const categories = [
  'All Insights',
  'Market Analysis',
  'Personal Branding',
  'Case Study',
  'Social Media',
  'Influencer Marketing',
  'Digital Strategy',
];

const resources = [
  {
    title: 'Luxury Marketing Playbook 2025',
    description: 'Complete guide to luxury brand marketing in the Middle East',
    type: 'PDF Guide',
    pages: '45 pages',
  },
  {
    title: 'GCC Market Analysis Report',
    description: 'In-depth analysis of luxury market trends and opportunities',
    type: 'Research Report',
    pages: '28 pages',
  },
  {
    title: 'Social Media Templates',
    description: 'Ready-to-use templates for luxury brand social content',
    type: 'Design Pack',
    pages: '15 templates',
  },
];

export default function InsightsPage() {
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
                Industry Intelligence
              </span>
            </motion.div>

            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Market{' '}
              <span className="luxury-gold">Intelligence</span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Exclusive insights, strategic guidance, and industry analysis from the Middle East's luxury marketing experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-[#1A1A1A] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  index === 0
                    ? 'gold-gradient text-black'
                    : 'text-gray-300 hover:text-[#D4AF37] border border-gray-600 hover:border-[#D4AF37]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-24 bg-gradient-to-br from-[#1A1A1A] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {insights.map((insight, index) => (
              <motion.article
                key={insight.title}
                className={`group cursor-pointer ${
                  insight.featured ? 'lg:col-span-2 lg:row-span-1' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black to-[#1A1A1A] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 h-full">
                  <div className={`relative overflow-hidden ${insight.featured ? 'h-64' : 'h-48'}`}>
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className="px-3 py-1 glass-effect rounded-full text-[#D4AF37] text-sm font-semibold">
                        {insight.category}
                      </span>
                      {insight.featured && (
                        <span className="px-3 py-1 gold-gradient rounded-full text-black text-sm font-semibold">
                          Featured
                        </span>
                      )}
                      {insight.downloadable && (
                        <Download className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>

                  <div className={`p-6 ${insight.featured ? 'lg:p-8' : ''}`}>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{insight.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{insight.date}</span>
                        </div>
                      </div>
                      <TrendingUp className="w-5 h-5 luxury-gold" />
                    </div>
                    
                    <h3 className={`font-playfair font-bold text-white mb-4 group-hover:luxury-gold transition-colors duration-300 leading-tight ${
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
        </div>
      </section>

      {/* Free Resources */}
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
              Premium{' '}
              <span className="luxury-gold">Resources</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Exclusive guides, templates, and resources to accelerate your luxury marketing success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                className="glass-effect rounded-2xl p-8 hover:bg-[#D4AF37]/10 transition-all duration-500 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="w-8 h-8 luxury-gold" />
                  <Download className="w-6 h-6 text-gray-400 group-hover:text-[#D4AF37] transition-colors duration-300" />
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:luxury-gold transition-colors duration-300">
                  {resource.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{resource.type}</span>
                  <span>{resource.pages}</span>
                </div>

                <motion.button
                  className="w-full mt-6 flex items-center justify-center px-4 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download Free
                  <Download className="ml-2 w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            className="glass-effect rounded-2xl p-8 lg:p-12 text-center border border-[#D4AF37]/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-6">
              Luxury Marketing{' '}
              <span className="luxury-gold">Masterclass</span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Get exclusive insights, industry reports, and strategic guidance delivered to your inbox monthly
            </p>

            <div className="max-w-md mx-auto mb-8">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
                />
                <motion.button
                  className="px-6 py-3 gold-gradient text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            <p className="text-gray-400 text-sm">
              Join 5,000+ luxury marketing professionals. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}