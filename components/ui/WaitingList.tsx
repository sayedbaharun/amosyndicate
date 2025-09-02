'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Clock, Users, TrendingUp, Lock, CheckCircle, AlertCircle } from 'lucide-react';

interface WaitingListEntry {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
  timestamp: Date;
}

export default function WaitingList() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<WaitingListEntry>({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
    timestamp: new Date(),
  });
  const [submitted, setSubmitted] = useState(false);
  const [position, setPosition] = useState(0);
  const [totalWaiting, setTotalWaiting] = useState(47); // Starting with realistic number

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setTotalWaiting(prev => prev + Math.floor(Math.random() * 3));
    }, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPosition(totalWaiting + 1);
    setTotalWaiting(prev => prev + 1);
    setSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
        timestamp: new Date(),
      });
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Floating Waiting List Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 glass-refined grain-texture px-6 py-3 rounded-full hover:shadow-luxury hover-lift transition-luxury group"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Crown className="w-5 h-5 luxury-gold" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          </div>
          <div className="text-left">
            <div className="text-xs text-gray-400">Limited Spots</div>
            <div className="text-sm font-semibold text-white">
              {totalWaiting} Brands Waiting
            </div>
          </div>
        </div>
      </motion.button>

      {/* Waiting List Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass-refined grain-texture border border-luxury-gold/20 rounded-2xl p-8 shadow-luxury-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  className="inline-flex items-center px-4 py-2 gold-gradient rounded-full mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Lock className="w-4 h-4 text-black mr-2" />
                  <span className="text-black font-semibold text-sm">Elite Circle Access</span>
                </motion.div>
                
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-4">
                  Join the{' '}
                  <span className="luxury-gold">Elite Circle</span>
                </h2>
                
                <p className="text-gray-300 leading-relaxed">
                  We maintain the highest standards of excellence, accepting only distinguished brands that embody Gulf sophistication and global ambition.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <motion.div
                  className="glass-refined grain-texture rounded-lg p-4 text-center hover:shadow-luxury transition-luxury"
                  whileHover={{ scale: 1.05 }}
                >
                  <Users className="w-6 h-6 luxury-gold mx-auto mb-2" />
                  <div className="font-playfair text-2xl font-bold luxury-gold">{totalWaiting}</div>
                  <div className="text-xs text-gray-400">Brands Waiting</div>
                </motion.div>
                
                <motion.div
                  className="glass-refined grain-texture rounded-lg p-4 text-center hover:shadow-emerald transition-luxury"
                  whileHover={{ scale: 1.05 }}
                >
                  <Clock className="w-6 h-6 luxury-gold mx-auto mb-2" />
                  <div className="font-playfair text-2xl font-bold luxury-gold">2-3</div>
                  <div className="text-xs text-gray-400">Months Wait</div>
                </motion.div>
                
                <motion.div
                  className="glass-refined grain-texture rounded-lg p-4 text-center hover:shadow-midnight transition-luxury"
                  whileHover={{ scale: 1.05 }}
                >
                  <TrendingUp className="w-6 h-6 luxury-gold mx-auto mb-2" />
                  <div className="font-playfair text-2xl font-bold luxury-gold">85%</div>
                  <div className="text-xs text-gray-400">Acceptance Rate</div>
                </motion.div>
              </div>

              {/* Form or Success Message */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass-refined grain-texture border border-luxury-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-luxury-gold focus:shadow-luxury transition-luxury"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass-refined grain-texture border border-luxury-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-luxury-gold focus:shadow-luxury transition-luxury"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Company/Brand *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass-refined grain-texture border border-luxury-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-luxury-gold focus:shadow-luxury transition-luxury"
                        placeholder="Your luxury brand"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Monthly Budget *
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass-refined grain-texture border border-luxury-gold/30 rounded-lg text-white focus:outline-none focus:border-luxury-gold focus:shadow-luxury transition-luxury"
                      >
                        <option value="" className="bg-black">Select budget</option>
                        <option value="5k-15k" className="bg-black">$5,000 - $15,000</option>
                        <option value="15k-50k" className="bg-black">$15,000 - $50,000</option>
                        <option value="50k+" className="bg-black">$50,000+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm">
                      Share your brand's vision and heritage *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 glass-refined grain-texture border border-luxury-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-luxury-gold focus:shadow-luxury transition-luxury resize-none"
                      placeholder="Share your brand's story, heritage, and aspirations for the Gulf market..."
                    />
                  </div>
                  
                  <div className="glass-refined grain-texture rounded-lg p-4 flex items-start space-x-3 shadow-emerald">
                    <AlertCircle className="w-5 h-5 luxury-gold mt-0.5" />
                    <div className="text-sm text-gray-300">
                      <p className="font-semibold text-white mb-1">Excellence Standards:</p>
                      <ul className="space-y-1 text-xs">
                        <li>• Investment threshold: $5,000+ monthly</li>
                        <li>• Vision 2030 alignment and regional commitment</li>
                        <li>• Heritage respect and cultural authenticity</li>
                        <li>• Excellence-driven transformation mindset</li>
                      </ul>
                    </div>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full px-6 py-4 gold-gradient text-refined-black font-semibold rounded-lg hover:shadow-luxury-lg hover-magnetic transition-luxury"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply for Consideration
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    <CheckCircle className="w-16 h-16 luxury-gold mx-auto mb-4" />
                  </motion.div>
                  
                  <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                    Application Received
                  </h3>
                  
                  <div className="glass-refined grain-texture rounded-lg p-6 mb-6 shadow-luxury">
                    <p className="text-gray-300 mb-4">
                      Your position in the waiting list:
                    </p>
                    <div className="font-playfair text-5xl font-bold luxury-gold mb-2">
                      #{position}
                    </div>
                    <p className="text-sm text-gray-400">
                      Estimated wait time: 2-3 months
                    </p>
                  </div>
                  
                  <p className="text-gray-300 text-sm">
                    Our Gulf heritage committee reviews applications with cultural sensitivity and excellence standards. 
                    Selected brands join an exclusive circle of regional luxury leaders.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
