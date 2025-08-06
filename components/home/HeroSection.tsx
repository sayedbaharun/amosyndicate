'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Users, Award } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8"
        >
          <motion.h1 
            className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 text-shadow-luxury"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            The Middle East's{' '}
            <span className="luxury-gold">Premier</span>{' '}
            Luxury Marketing Authority
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Transforming luxury brands through sophisticated content and strategic digital marketing excellence in the MENA region
          </motion.p>
        </motion.div>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 gold-gradient text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#D4AF37]/25 transition-all duration-300 text-lg"
            >
              Elevate Your Brand
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-lg"
            >
              <Play className="mr-3 w-5 h-5" />
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="glass-effect rounded-2xl p-6 hover:bg-[#D4AF37]/10 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="w-8 h-8 luxury-gold" />
            </div>
            <div className="font-playfair text-3xl font-bold luxury-gold mb-1">$12.8B</div>
            <div className="text-gray-300 text-sm font-medium">GCC Luxury Market</div>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 hover:bg-[#D4AF37]/10 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Users className="w-8 h-8 luxury-gold" />
            </div>
            <div className="font-playfair text-3xl font-bold luxury-gold mb-1">100K+</div>
            <div className="text-gray-300 text-sm font-medium">Premium Followers</div>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 hover:bg-[#D4AF37]/10 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Award className="w-8 h-8 luxury-gold" />
            </div>
            <div className="font-playfair text-3xl font-bold luxury-gold mb-1">85%</div>
            <div className="text-gray-300 text-sm font-medium">Client Retention</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#D4AF37] rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}