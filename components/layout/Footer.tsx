'use client';

import Link from 'next/link';
import { Crown, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  'Content Creation',
  'Campaign Management',
  'Brand Strategy',
  'Arabic Content Excellence',
  'Ramadan Campaigns',
  'Royal Family Marketing',
];

const insights = [
  'GCC Luxury Market Trends',
  'Cultural Marketing Insights',
  'Ramadan Campaign Strategy',
  'Dubai Business Intelligence',
  'Royal Family Branding',
  'Regional Event Marketing',
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-[#1A1A1A] to-black border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center">
                  <Crown className="w-7 h-7 text-black" />
                </div>
                <div>
                  <div className="font-playfair text-2xl font-bold text-white">
                    AMO Marketing
                  </div>
                  <div className="text-sm text-gray-400">
                    Part of Arab Money Official LLC
                  </div>
                </div>
              </Link>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
The Gulf region's premier luxury marketing atelier, where heritage meets digital excellence. We serve royal families, family offices, and visionary brands with cultural authenticity.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-pearl-white">
                  <MapPin className="w-5 h-5 text-emerald-teal" />
                  <span>SHAMS Media City, Dubai, UAE</span>
                </div>
                <div className="flex items-center space-x-3 text-pearl-white">
                  <Phone className="w-5 h-5 text-emerald-teal" />
                  <span>+971 4 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 text-pearl-white">
                  <Mail className="w-5 h-5 text-emerald-teal" />
                  <span>hello@arabmoneyofficial.com</span>
                </div>
                <div className="text-dubai-sand text-sm mt-4">
                  <div className="font-semibold mb-1">Operating Hours (GST)</div>
                  <div>Sunday - Thursday: 9:00 AM - 6:00 PM</div>
                  <div className="text-xs opacity-75 mt-1">*Adjusted for prayer times</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-xl font-semibold text-white mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:luxury-gold transition-colors duration-300 block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-xl font-semibold text-white mb-6">
              Insights
            </h3>
            <ul className="space-y-3">
              {insights.map((insight) => (
                <li key={insight}>
                  <Link
                    href="/insights"
                    className="text-gray-300 hover:luxury-gold transition-colors duration-300 block"
                  >
                    {insight}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Bottom Bar */}
        <motion.div
          className="border-t border-white/10 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <motion.a
                href="#"
                className="p-3 glass-effect rounded-lg hover:bg-[#D4AF37]/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 luxury-gold" />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 glass-effect rounded-lg hover:bg-[#D4AF37]/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 luxury-gold" />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 glass-effect rounded-lg hover:bg-[#D4AF37]/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5 luxury-gold" />
              </motion.a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 AMO Marketing. Part of Arab Money Official LLC. Licensed in SHAMS Media City, Dubai.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Reviving Legacy, Creating Future
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}