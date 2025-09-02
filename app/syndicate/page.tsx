'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import GalaxyHero from '@/components/syndicate/GalaxyHero';
import SocialProofMarquee from '@/components/syndicate/SocialProofMarquee';
import AnimatedCounters from '@/components/syndicate/AnimatedCounters';
import BentoServices from '@/components/syndicate/BentoServices';
import FloatingDock from '@/components/syndicate/FloatingDock';

export default function HomePage() {
  const scrollToForm = () => {
    document.getElementById('leadgen-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Floating Dock Navigation */}
      <FloatingDock />
      
      {/* Social Proof Marquee */}
      <div className="fixed top-[73px] left-0 right-0 z-40">
        <SocialProofMarquee />
      </div>
      
      {/* Galaxy Interactive Hero Section */}
      <div id="home" className="mt-[49px]">
        <GalaxyHero />
      </div>

      {/* Animated Counters Section */}
      <AnimatedCounters />
      
      {/* Services Bento Grid */}
      <div id="services">
        <BentoServices />
      </div>
      
      {/* Original Services Preview - Hidden for now */}
      <section className="relative py-24 px-4 bg-gray overflow-hidden hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=1000&fit=crop&q=90"
            alt="Digital circuits pattern"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray via-gray/95 to-gray" />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              We&apos;re not an agency.{' '}
              <span className="text-gold">We&apos;re your edge.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Content Ops',
                description: 'End-to-end content systems, ready to scale',
                icon: '⚙️',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&q=90'
              },
              {
                title: 'AI Agents',
                description: 'Custom GPTs for real estate, travel, marketing, and more',
                icon: '🤖',
                image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&q=90'
              },
              {
                title: 'Funnels & Automations',
                description: 'Lead machines that work while you sleep',
                icon: '🔄',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&q=90'
              },
              {
                title: 'Media Strategy',
                description: 'From virality to vanity, we move markets',
                icon: '📈',
                image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop&q=90'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-black syndicate-border overflow-hidden hover:syndicate-glow transition-all duration-300 group"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="relative p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gold">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/syndicate/services">
              <motion.span 
                className="text-gold text-lg uppercase tracking-wider hover:text-white transition-colors cursor-pointer inline-block"
                whileHover={{ x: 10 }}
              >
                Explore All Services →
              </motion.span>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 px-4 bg-black border-y border-gold/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-8">
              Built With Industry-Leading Technology
            </p>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {[
                'OpenAI GPT-4',
                'Meta Business', 
                'Google Cloud',
                'Shopify Plus',
                'HubSpot',
                'Stripe'
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="text-center"
                >
                  <div className="h-12 flex items-center justify-center">
                    <span className="text-gray-600 hover:text-gold transition-colors font-medium">
                      {tech}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section id="case-studies" className="relative py-24 px-4 overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=800&fit=crop&q=90"
            alt="Technology grid"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proven <span className="text-gold">Results</span>
            </h2>
            <p className="text-xl text-gray-400">Machines that deliver</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative syndicate-border overflow-hidden group"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop&q=90"
                  alt="Social media analytics"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray via-gray/90 to-gray/70" />
              </div>
              
              <div className="relative p-8">
                <h3 className="text-3xl font-bold mb-4 text-gold">ArabMoneyOfficial</h3>
                <p className="text-6xl font-bold mb-4">500K+</p>
                <p className="text-gray-400 mb-6">Followers revived through automation</p>
                <Link href="/syndicate/case-studies">
                  <span className="text-gold uppercase tracking-wider hover:text-white transition-colors cursor-pointer">
                    View Case →
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative syndicate-border overflow-hidden group"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=400&fit=crop&q=90"
                  alt="Dubai luxury travel"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray via-gray/90 to-gray/70" />
              </div>
              
              <div className="relative p-8">
                <h3 className="text-3xl font-bold mb-4 text-gold">GetMeToDubai</h3>
                <p className="text-6xl font-bold mb-4">7-Day</p>
                <p className="text-gray-400 mb-6">AI concierge MVP launched</p>
                <Link href="/syndicate/case-studies">
                  <span className="text-gold uppercase tracking-wider hover:text-white transition-colors cursor-pointer">
                    View Case →
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Generation Form */}
      <section id="leadgen-form" className="relative py-24 px-4 bg-navy overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&h=800&fit=crop&q=90"
            alt="Abstract gradient"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work with <span className="text-gold">AMO Syndicate</span>
            </h2>
            <p className="text-xl text-gray-300">
              Tell us where you want leverage. We&apos;ll build the machine.
            </p>
          </motion.div>

          <motion.form
            action="https://formspree.io/f/xpwzjrrg"
            method="POST"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                required
                className="bg-black/50 syndicate-border px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:syndicate-glow"
              />
              <input
                type="text"
                name="company"
                placeholder="COMPANY"
                className="bg-black/50 syndicate-border px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:syndicate-glow"
              />
            </div>
            
            <input
              type="url"
              name="website"
              placeholder="WEBSITE"
              className="w-full bg-black/50 syndicate-border px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:syndicate-glow"
            />
            
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              required
              className="w-full bg-black/50 syndicate-border px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:syndicate-glow"
            />
            
            <textarea
              name="scope"
              placeholder="SCOPE OF WORK"
              rows={4}
              required
              className="w-full bg-black/50 syndicate-border px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:syndicate-glow resize-none"
            />
            
            <motion.button
              type="submit"
              className="w-full bg-gold text-black py-4 text-lg font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Consultation
            </motion.button>
          </motion.form>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-400 mb-2">
              Not sure what you need?
            </p>
            <Link href="#" className="text-gold hover:text-white transition-colors">
              Book a 15-min strategy call →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-16 px-4 bg-black border-t border-gold/20 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=400&fit=crop&q=90"
            alt="Abstract gradient mesh"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black" />
        </div>
        
        <div className="relative max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Weekly Growth Dispatch</h3>
          <p className="text-gray-400 mb-6">Strategies that scale. Delivered weekly.</p>
          <form 
            action="https://formspree.io/f/xvgodjjq"
            method="POST"
            className="flex gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              required
              className="flex-1 bg-gray syndicate-border px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:syndicate-glow"
            />
            <button 
              type="submit"
              className="bg-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}