'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Globe, Award, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const advantages = [
  {
    icon: Shield,
    title: 'SHAMS Licensed',
    description: 'Officially licensed in Dubai Media City with full regulatory compliance',
  },
  {
    icon: Globe,
    title: 'Local Expertise',
    description: 'Deep understanding of Middle East luxury market dynamics and culture',
  },
  {
    icon: Award,
    title: 'Proven Legacy',
    description: 'Revived dormant brand into thriving full-service marketing authority',
  },
  {
    icon: Users,
    title: 'Elite Network',
    description: 'Exclusive connections with luxury influencers and high-net-worth individuals',
  },
];

export default function AboutPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-[#1A1A1A] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <motion.div
                className="inline-flex items-center px-4 py-2 glass-effect rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-[#D4AF37] text-sm font-semibold">
                  Reviving Legacy, Creating Future
                </span>
              </motion.div>

              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Where Luxury Meets{' '}
                <span className="luxury-gold">Strategic Excellence</span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                From a dormant Instagram account to the Middle East's premier luxury marketing authority. Our journey represents the perfect blend of heritage, innovation, and uncompromising excellence.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <span className="text-gray-300">
                    <strong className="text-white">Licensed Authority:</strong> SHAMS Media City, Dubai
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <span className="text-gray-300">
                    <strong className="text-white">Market Focus:</strong> Middle East luxury lifestyle and high-end brands
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <span className="text-gray-300">
                    <strong className="text-white">Unique Position:</strong> Content creation meets full-service marketing
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-lg"
              >
                Discover Our Story
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual */}
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
                alt="Dubai skyline representing Arab Money Official's luxury market presence"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-[#D4AF37]/20" />
              
              {/* Floating Stats */}
              <div className="absolute top-6 right-6 glass-effect rounded-xl p-4">
                <div className="text-center">
                  <div className="font-playfair text-2xl font-bold luxury-gold">85%</div>
                  <div className="text-xs text-gray-300">Client Retention</div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 glass-effect rounded-xl p-4">
                <div className="text-center">
                  <div className="font-playfair text-2xl font-bold luxury-gold">12.8B</div>
                  <div className="text-xs text-gray-300">Market Size (USD)</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Advantages Grid */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-playfair text-3xl font-bold text-center text-white mb-12">
            Our{' '}
            <span className="luxury-gold">Competitive Advantages</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <motion.div
                  key={advantage.title}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 glass-effect rounded-2xl mb-6 group-hover:bg-[#D4AF37]/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="w-8 h-8 luxury-gold" />
                  </motion.div>
                  
                  <h4 className="font-semibold text-white mb-3 group-hover:luxury-gold transition-colors duration-300">
                    {advantage.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}