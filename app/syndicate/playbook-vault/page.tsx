'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PlaybookVaultPage() {
  const [email, setEmail] = useState('');
  const [hasAccess, setHasAccess] = useState(false);

  const playbooks = [
    {
      title: 'The 500K Revival System',
      description: 'How we revived ArabMoneyOfficial to 500K+ followers',
      category: 'Growth',
      pages: '47',
      icon: '📈',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop&q=90'
    },
    {
      title: 'AI Agent Blueprint',
      description: 'Build custom GPTs that convert leads 24/7',
      category: 'Automation',
      pages: '32',
      icon: '🤖',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&q=90'
    },
    {
      title: 'MENA Market Domination',
      description: 'Positioning strategies for luxury brands in Gulf markets',
      category: 'Strategy',
      pages: '28',
      icon: '🌍',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop&q=90'
    },
    {
      title: 'Content Machine Framework',
      description: 'Zero-to-viral content systems that scale',
      category: 'Content',
      pages: '35',
      icon: '⚙️',
      image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=400&h=300&fit=crop&q=90'
    },
    {
      title: 'Lead Funnel Architecture',
      description: 'High-converting funnels for premium services',
      category: 'Conversion',
      pages: '41',
      icon: '🔄',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=90'
    },
    {
      title: 'Crisis & Reputation Playbook',
      description: 'Managing brand crises and market corrections',
      category: 'Defense',
      pages: '23',
      icon: '🛡️',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&q=90'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setHasAccess(true);
    }
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-navy overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=600&fit=crop&q=90"
            alt="Library vault"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              The <span className="text-gold">Playbook Vault</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300">
              Strategies that built empires
            </p>
          </motion.div>
        </div>
      </section>

      {!hasAccess ? (
        /* Gate Section */
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=800&fit=crop&q=90"
              alt="Security pattern"
              className="w-full h-full object-cover opacity-5"
            />
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray syndicate-border p-12"
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🔐</div>
                <h2 className="text-3xl font-bold mb-4">
                  Vault Access Required
                </h2>
                <p className="text-gray-400">
                  Get instant access to our proven playbooks and frameworks.
                  No spam, just leverage.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="YOUR EMAIL"
                  required
                  className="w-full bg-black syndicate-border px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:syndicate-glow"
                />
                
                <motion.button
                  type="submit"
                  className="w-full bg-gold text-black py-4 text-lg font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Unlock Vault
                </motion.button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-6">
                Join 2,347+ operators who leverage our systems
              </p>
            </motion.div>
          </div>
        </section>
      ) : (
        /* Playbooks Grid */
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Background Texture */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1000&fit=crop&q=90"
              alt="Knowledge grid"
              className="w-full h-full object-cover opacity-5"
            />
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 p-6 bg-gold/10 syndicate-border text-center"
            >
              <p className="text-gold">
                ✓ Access granted. Download links sent to {email}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {playbooks.map((playbook, index) => (
                <motion.div
                  key={playbook.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-gray syndicate-border overflow-hidden hover:syndicate-glow transition-all duration-300 cursor-pointer group"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={playbook.image}
                      alt={playbook.title}
                      className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray via-gray/90 to-gray/70" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-4xl">{playbook.icon}</div>
                      <span className="px-3 py-1 bg-gold/20 text-gold text-xs uppercase tracking-wider">
                        {playbook.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gold">
                      {playbook.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4">
                      {playbook.description}
                    </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {playbook.pages} pages
                    </span>
                    <motion.span 
                      className="text-gold cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      Download →
                    </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bonus Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-24"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                Bonus <span className="text-gold">Resources</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black syndicate-border p-6">
                  <h3 className="text-xl font-bold mb-2 text-gold">Templates</h3>
                  <p className="text-gray-400 mb-4">Campaign templates, email sequences, and content calendars</p>
                  <span className="text-gold cursor-pointer">Access →</span>
                </div>
                
                <div className="bg-black syndicate-border p-6">
                  <h3 className="text-xl font-bold mb-2 text-gold">Tools</h3>
                  <p className="text-gray-400 mb-4">ROI calculators, automation scripts, and tracking sheets</p>
                  <span className="text-gold cursor-pointer">Access →</span>
                </div>
                
                <div className="bg-black syndicate-border p-6">
                  <h3 className="text-xl font-bold mb-2 text-gold">Case Studies</h3>
                  <p className="text-gray-400 mb-4">Deep dives into our most successful client campaigns</p>
                  <span className="text-gold cursor-pointer">Access →</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-navy overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&h=600&fit=crop&q=90"
            alt="Office space"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        </div>
        
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for <span className="text-gold">implementation</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Playbooks are powerful. Execution is everything.
            </p>
            <motion.button
              onClick={() => window.location.href = '/syndicate#leadgen-form'}
              className="bg-gold text-black px-12 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Work With Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}