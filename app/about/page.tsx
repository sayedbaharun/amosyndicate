'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Crown, Shield, Globe, Award, Users, Target, Lightbulb, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Ahmed Al-Rashid',
    title: 'Founder & CEO',
    description: 'Visionary leader with 10+ years in luxury brand marketing and digital strategy',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    specialties: ['Brand Strategy', 'Market Analysis', 'Executive Consulting'],
  },
  {
    name: 'Layla Hassan',
    title: 'Creative Director',
    description: 'Award-winning creative professional specializing in luxury lifestyle content',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    specialties: ['Content Creation', 'Visual Branding', 'Campaign Design'],
  },
  {
    name: 'Omar Abdullah',
    title: 'Digital Strategy Lead',
    description: 'Performance marketing expert with deep expertise in Middle East luxury markets',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    specialties: ['Performance Marketing', 'Analytics', 'Optimization'],
  },
];

const values = [
  {
    icon: Crown,
    title: 'Excellence',
    description: 'We deliver nothing less than exceptional results for every luxury brand we serve',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Transparent, honest partnerships built on trust and mutual respect',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every strategy is designed with measurable outcomes and ROI in mind',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Genuine enthusiasm for luxury brands and the Middle East market',
  },
];

const milestones = [
  {
    year: '2020',
    title: 'Brand Revival',
    description: 'Transformed dormant Instagram account into active luxury lifestyle platform',
  },
  {
    year: '2022',
    title: 'Market Recognition',
    description: 'Achieved 100K+ followers and established thought leadership position',
  },
  {
    year: '2023',
    title: 'Business License',
    description: 'Obtained SHAMS Media City license and launched full-service agency',
  },
  {
    year: '2024',
    title: 'Market Leadership',
    description: 'Became recognized authority in Middle East luxury marketing',
  },
  {
    year: '2025',
    title: 'Regional Expansion',
    description: 'Expanding operations across GCC with premium service offerings',
  },
];

export default function AboutPage() {
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
                Our Story
              </span>
            </motion.div>

            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Reviving Legacy,{' '}
              <span className="luxury-gold">Creating Future</span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From a dormant social media presence to the Middle East's premier luxury marketing authority - our journey embodies transformation, excellence, and unwavering commitment to luxury brand success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
                The Arab Money Official{' '}
                <span className="luxury-gold">Legacy</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  What began as a dormant Instagram account has evolved into the Middle East's most trusted luxury marketing authority. Our transformation story mirrors that of the brands we serve - from potential to prominence through strategic excellence.
                </p>
                
                <p>
                  Based in Dubai's prestigious SHAMS Media City, we've built our reputation on understanding the nuances of luxury marketing in the Middle East. Our SHAMS license represents more than compliance - it's a testament to our commitment to professional excellence and regulatory integrity.
                </p>
                
                <p>
                  Today, Arab Money Official stands as the bridge between traditional luxury values and innovative digital strategies, serving high-net-worth individuals, luxury brands, and premium service providers across the MENA region.
                </p>
              </div>
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
                  alt="Dubai skyline representing our premium location"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-[#D4AF37]/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-br from-[#1A1A1A] to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6">
              Our{' '}
              <span className="luxury-gold">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Key milestones in our evolution to becoming the region's luxury marketing leader
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#D4AF37] to-[#B8941F]" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="glass-effect rounded-xl p-6 hover:bg-[#D4AF37]/10 transition-all duration-300">
                    <div className="font-playfair text-2xl font-bold luxury-gold mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#D4AF37] rounded-full border-4 border-black" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet the{' '}
              <span className="luxury-gold">Experts</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our team combines deep market expertise with creative excellence to deliver unparalleled results for luxury brands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-black border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-playfair text-2xl font-bold text-white mb-2 group-hover:luxury-gold transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <p className="text-[#D4AF37] font-semibold mb-4">
                      {member.title}
                    </p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {member.description}
                    </p>

                    <div className="space-y-2">
                      {member.specialties.map((specialty) => (
                        <div key={specialty} className="inline-block mr-2 mb-2">
                          <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-sm rounded-full">
                            {specialty}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-3xl font-bold text-center text-white mb-12">
              Our{' '}
              <span className="luxury-gold">Core Values</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
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
                    
                    <h4 className="font-playfair text-xl font-bold text-white mb-3 group-hover:luxury-gold transition-colors duration-300">
                      {value.title}
                    </h4>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-black via-[#1A1A1A] to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Transform Your{' '}
              <span className="luxury-gold">Luxury Brand?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join the elite brands that trust Arab Money Official to elevate their market presence and drive exceptional results
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 gold-gradient text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#D4AF37]/25 transition-all duration-300 text-lg"
                >
                  Schedule Consultation
                  <Crown className="ml-3 w-5 h-5" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-lg"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}