'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Clock, Crown, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Dubai Office',
    details: 'SHAMS Media City\nDubai, United Arab Emirates',
    action: 'Get Directions',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+971 XXX XXXX\nBusiness Hours: 9 AM - 6 PM GST',
    action: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'hello@arabmoneyofficial.com\nResponse within 2 hours',
    action: 'Send Email',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Sunday - Thursday: 9 AM - 6 PM\nSaturday: 10 AM - 4 PM GST',
    action: 'Schedule Meeting',
  },
];

const inquiryTypes = [
  'General Consultation',
  'Service Inquiry',
  'Partnership Opportunity',
  'Media & Press',
  'Client Support',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    budget: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
                Let's Connect
              </span>
            </motion.div>

            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Start Your{' '}
              <span className="luxury-gold">Transformation</span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to elevate your luxury brand? Let's discuss how Arab Money Official can transform your digital presence and drive exceptional results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-[#1A1A1A] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="glass-effect rounded-2xl p-6 hover:bg-[#D4AF37]/10 transition-all duration-500">
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 glass-effect rounded-2xl mb-4 group-hover:bg-[#D4AF37]/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent className="w-8 h-8 luxury-gold" />
                    </motion.div>
                    
                    <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:luxury-gold transition-colors duration-300">
                      {info.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line mb-4">
                      {info.details}
                    </p>

                    <button className="text-[#D4AF37] hover:text-[#B8941F] transition-colors duration-300 font-semibold text-sm">
                      {info.action}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6">
              Schedule Your{' '}
              <span className="luxury-gold">Consultation</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Tell us about your luxury brand and let's discuss how we can elevate your market presence
            </p>
          </motion.div>

          <motion.div
            className="glass-effect rounded-2xl p-8 lg:p-12 border border-[#D4AF37]/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Company/Brand
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
                    placeholder="Your company or brand name"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
                    placeholder="+971 XXX XXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
                  >
                    <option value="" className="bg-black text-gray-400">Select inquiry type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type} className="bg-black text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
                  >
                    <option value="" className="bg-black text-gray-400">Select budget range</option>
                    <option value="2k-5k" className="bg-black text-white">$2,000 - $5,000/month</option>
                    <option value="5k-15k" className="bg-black text-white">$5,000 - $15,000/month</option>
                    <option value="15k+" className="bg-black text-white">$15,000+/month</option>
                    <option value="project" className="bg-black text-white">Project-based</option>
                    <option value="discuss" className="bg-black text-white">Let's discuss</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors duration-300 resize-none"
                  placeholder="Describe your luxury brand, goals, and how we can help elevate your market presence..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 gold-gradient text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#D4AF37]/25 transition-all duration-300 text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Consultation Request
                <ArrowRight className="ml-3 w-5 h-5" />
              </motion.button>

              <p className="text-center text-gray-400 text-sm">
                We typically respond within 2 hours during business days
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-24 bg-gradient-to-br from-[#1A1A1A] to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-6">
              Prefer a Different{' '}
              <span className="luxury-gold">Approach?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="glass-effect rounded-2xl p-8 text-center hover:bg-[#D4AF37]/10 transition-all duration-500 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Calendar className="w-12 h-12 luxury-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:luxury-gold transition-colors duration-300">
                Book Direct Meeting
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Schedule a 30-minute strategy session to discuss your luxury marketing needs
              </p>
              <button className="text-[#D4AF37] hover:text-[#B8941F] transition-colors duration-300 font-semibold">
                Schedule Now →
              </button>
            </motion.div>

            <motion.div
              className="glass-effect rounded-2xl p-8 text-center hover:bg-[#D4AF37]/10 transition-all duration-500 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <MessageCircle className="w-12 h-12 luxury-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:luxury-gold transition-colors duration-300">
                Live Chat Support
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Get instant answers to your questions from our luxury marketing experts
              </p>
              <button className="text-[#D4AF37] hover:text-[#B8941F] transition-colors duration-300 font-semibold">
                Start Chat →
              </button>
            </motion.div>

            <motion.div
              className="glass-effect rounded-2xl p-8 text-center hover:bg-[#D4AF37]/10 transition-all duration-500 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Crown className="w-12 h-12 luxury-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:luxury-gold transition-colors duration-300">
                VIP Consultation
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Exclusive in-person meeting at our Dubai office or your preferred location
              </p>
              <button className="text-[#D4AF37] hover:text-[#B8941F] transition-colors duration-300 font-semibold">
                Request VIP →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl font-bold text-white mb-8">
                Visit Our{' '}
                <span className="luxury-gold">Dubai Office</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Located in the prestigious SHAMS Media City, our Dubai headquarters represents our commitment to excellence and accessibility for Middle East luxury brands.
                </p>
                
                <p>
                  Our office is designed as a creative space where luxury marketing strategies come to life, equipped with state-of-the-art technology and an atmosphere that inspires innovation.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 luxury-gold" />
                    <span className="text-white">SHAMS Media City, Dubai, UAE</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 luxury-gold" />
                    <span className="text-white">Sunday - Thursday: 9 AM - 6 PM GST</span>
                  </div>
                </div>
              </div>

              <motion.div
                className="mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="inline-flex items-center px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-lg">
                  Get Directions
                  <ArrowRight className="ml-3 w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Dubai Media City - Arab Money Official office location"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-[#D4AF37]/20" />
                
                <div className="absolute bottom-6 left-6 glass-effect rounded-xl p-4">
                  <div className="text-white font-semibold">SHAMS Media City</div>
                  <div className="text-gray-300 text-sm">Dubai, UAE</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}