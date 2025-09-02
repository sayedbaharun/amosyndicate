'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Users, Award, Crown, Globe } from 'lucide-react';
import Link from 'next/link';
import IslamicPattern from '../ui/IslamicPattern';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dubai Skyline Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-refined-black/70 via-midnight-blue/50 to-emerald-teal/30 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')`
          }}
        />
        {/* Islamic Pattern Overlay */}
        <IslamicPattern opacity={0.08} color="#C9A961" className="z-5" />
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
            className="font-playfair text-display-large text-white mb-8 text-shadow-luxury"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Where Heritage Meets{' '}
            <span className="luxury-gold">Digital Excellence</span>
          </motion.h1>
          
          <motion.p 
            className="text-body-large text-gray-200 mb-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Crafting digital legacies for visionary brands across the Gulf
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
              className="inline-flex items-center px-8 py-4 gold-gradient text-refined-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-luxury-gold/25 transition-all duration-300 text-lg"
            >
              Begin Your Journey
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 border-2 border-luxury-gold text-luxury-gold font-semibold rounded-lg hover:bg-luxury-gold hover:text-refined-black transition-all duration-300 text-lg"
            >
              <Play className="mr-3 w-5 h-5" />
              Explore Excellence
            </Link>
          </motion.div>
        </motion.div>

        {/* GCC-Specific Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="glass-refined grain-texture rounded-2xl p-6 hover-lift hover:shadow-emerald transition-luxury group">
            <div className="flex items-center justify-center mb-3">
              <Crown className="w-8 h-8 text-emerald-teal group-hover:scale-110 transition-smooth" />
            </div>
            <div className="font-playfair text-3xl font-bold text-emerald-teal mb-1">50+</div>
            <div className="text-pearl-white text-sm font-medium">Royal Family Campaigns</div>
          </div>
          
          <div className="glass-refined grain-texture rounded-2xl p-6 hover-lift hover:shadow-luxury transition-luxury group">
            <div className="flex items-center justify-center mb-3">
              <Globe className="w-8 h-8 luxury-gold group-hover:scale-110 transition-smooth" />
            </div>
            <div className="font-playfair text-3xl font-bold luxury-gold mb-1">GCC</div>
            <div className="text-pearl-white text-sm font-medium">Market Leader</div>
          </div>
          
          <div className="glass-refined grain-texture rounded-2xl p-6 hover-lift hover:shadow-midnight transition-luxury group">
            <div className="flex items-center justify-center mb-3">
              <Award className="w-8 h-8 text-dubai-sand group-hover:scale-110 transition-smooth" />
            </div>
            <div className="font-playfair text-3xl font-bold text-dubai-sand mb-1">عربي</div>
            <div className="text-pearl-white text-sm font-medium">Bilingual Excellence</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}