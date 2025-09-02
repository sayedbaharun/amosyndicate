'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function OperatorsPage() {
  const operators = [
    {
      name: 'Sayed Baharun',
      role: 'Founder & Chief Architect',
      bio: 'Built ArabMoneyOfficial from 0 to 500K. Previously scaled 3 MENA brands to 8-figures. Stanford CS dropout turned growth engineer.',
      expertise: ['Growth Systems', 'AI Implementation', 'MENA Markets'],
      linkedin: 'https://linkedin.com/in/sayedbaharun',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=90',
      stats: {
        followers: '2.3M+',
        revenue: '$47M+',
        years: '7'
      }
    },
    {
      name: 'Sarah Al-Rashid',
      role: 'Head of Media Operations',
      bio: 'Former Head of Digital at MBC Group. Launched 12 viral campaigns in Gulf markets. Speaks Arabic, English, and Mandarin.',
      expertise: ['Content Strategy', 'Viral Engineering', 'Crisis Management'],
      linkedin: 'https://linkedin.com/in/sarahalrashid',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=90',
      stats: {
        campaigns: '127',
        reach: '500M+',
        years: '5'
      }
    },
    {
      name: 'Ahmed Hassan',
      role: 'Technical Operations Lead',
      bio: 'Ex-Google engineer. Built the AI behind Aivant Realty. Published researcher in automated systems. Based in Dubai.',
      expertise: ['AI Development', 'Automation', 'Technical Architecture'],
      linkedin: 'https://linkedin.com/in/ahmedhassan',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&h=400&fit=crop&q=90',
      stats: {
        systems: '43',
        uptime: '99.9%',
        years: '6'
      }
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop&q=90"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Meet the <span className="text-gold">Operators</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
              Real people. Real results. Real accountability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gold">The Origin Story</h2>
            
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                AMO Syndicate started in a Dubai coffee shop in 2019. Three operators, 
                tired of watching brands burn millions on agencies that couldn&apos;t deliver.
              </p>
              
              <p>
                We&apos;d each built and sold our own brands. We knew the game from the inside — 
                the 3am panic when campaigns tank, the euphoria when content goes viral, 
                the grind of turning followers into revenue.
              </p>
              
              <p>
                Our first client was ArabMoneyOfficial — a dormant luxury media brand with 
                50K ghost followers. We didn&apos;t pitch them. We just started posting. 
                90 days later: 500K engaged followers. Zero ad spend.
              </p>
              
              <p className="text-xl text-gold font-semibold">
                That&apos;s when we knew: The region didn&apos;t need another agency. 
                It needed operators who build machines.
              </p>
              
              <p>
                Today, we run growth systems for 23 brands across MENA. Our machines 
                generate $4M+ monthly in trackable revenue. And we&apos;re just getting started.
              </p>
            </div>
            
            <div className="mt-12 p-8 bg-gray syndicate-border">
              <p className="text-xl text-gold mb-4">Our Promise:</p>
              <p className="text-gray-300">
                We don&apos;t do contracts longer than 90 days. If we can&apos;t show 
                measurable results in 3 months, we shouldn&apos;t be your partners. 
                Period.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-4 bg-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Core <span className="text-gold">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {operators.map((operator, index) => (
              <motion.div
                key={operator.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black syndicate-border p-8"
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <img 
                    src={operator.image}
                    alt={operator.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <a 
                    href={operator.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 right-1/3 bg-gold text-black p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>

                {/* Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gold">{operator.name}</h3>
                  <p className="text-gray-400 mb-4">{operator.role}</p>
                  <p className="text-gray-300 mb-6">{operator.bio}</p>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {operator.expertise.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-gold/20 text-gold text-xs uppercase tracking-wider"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gold/20">
                  {Object.entries(operator.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-xl font-bold text-gold">{value}</p>
                      <p className="text-xs uppercase text-gray-500">{key}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why This <span className="text-gold">Matters</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Every agency shows you case studies. We show you the people who built them.
              </p>
              
              <p>
                Every agency promises results. We put our names, faces, and reputations on the line.
              </p>
              
              <p className="text-xl text-gold font-semibold">
                When you work with AMO Syndicate, you&apos;re not hiring vendors. 
                You&apos;re partnering with operators who&apos;ve been where you are.
              </p>
            </div>

            <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/syndicate#leadgen-form">
                <motion.button
                  className="bg-gold text-black px-12 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Meet With Us
                </motion.button>
              </Link>
              
              <a 
                href="https://calendly.com/amosyndicate/strategy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="bg-transparent border-2 border-gold text-gold px-12 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book 15-Min Call
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}