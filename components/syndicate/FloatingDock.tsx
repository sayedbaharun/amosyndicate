'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function FloatingDock() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Detect active section
      const sections = ['home', 'services', 'case-studies', 'leadgen-form'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dockItems = [
    {
      id: 'whatsapp',
      icon: '💬',
      label: 'WhatsApp',
      href: 'https://wa.me/971585806609', // AMO WhatsApp Business
      color: 'from-green-500 to-green-600',
      pulse: true,
    },
    {
      id: 'calendar',
      icon: '📅',
      label: 'Book Call',
      href: '/syndicate#leadgen-form',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'pricing',
      icon: '💰',
      label: 'Pricing',
      href: '/syndicate/services',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 'portfolio',
      icon: '🎯',
      label: 'Results',
      href: '/syndicate/case-studies',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 'vault',
      icon: '🔐',
      label: 'Vault',
      href: '/syndicate/playbook-vault',
      color: 'from-red-500 to-red-600',
    },
  ];

  const mainAction = {
    id: 'main',
    icon: '⚡',
    label: 'Quick Actions',
    color: 'from-gold to-yellow-400',
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-[73px] left-0 right-0 h-[2px] bg-black/20 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-gold to-yellow-400"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Dock */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div
          className={`relative bg-black/90 backdrop-blur-xl border border-gold/30 rounded-full p-2 shadow-[0_0_40px_rgba(255,215,0,0.2)]`}
          animate={{
            width: isExpanded ? 'auto' : '70px',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute -inset-4 bg-gold/20 blur-2xl rounded-full"
            animate={{
              opacity: isExpanded ? 0.4 : 0.2,
              scale: isExpanded ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />

          <div className="relative flex items-center gap-2">
            {/* Main Toggle Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${mainAction.color} flex items-center justify-center shadow-lg group`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                rotate: isExpanded ? 180 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-2xl text-black">{mainAction.icon}</span>
              
              {/* Pulse Animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gold/30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              />
              
              {/* Tooltip */}
              <motion.div
                className="absolute bottom-full mb-2 px-3 py-1 bg-black/90 text-white text-xs rounded-md whitespace-nowrap pointer-events-none"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                {isExpanded ? 'Close' : mainAction.label}
              </motion.div>
            </motion.button>

            {/* Dock Items */}
            <AnimatePresence>
              {isExpanded && (
                <>
                  {dockItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link href={item.href} target={item.id === 'whatsapp' ? '_blank' : '_self'}>
                        <motion.button
                          className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group`}
                          whileHover={{ scale: 1.15, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-xl text-white">{item.icon}</span>
                          
                          {/* Pulse for WhatsApp */}
                          {item.pulse && (
                            <motion.div
                              className="absolute inset-0 rounded-full bg-green-400/30"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 0, 0.5],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                              }}
                            />
                          )}
                          
                          {/* Tooltip */}
                          <motion.div
                            className="absolute bottom-full mb-2 px-3 py-1 bg-black/90 text-white text-xs rounded-md whitespace-nowrap pointer-events-none"
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{ opacity: 1, y: 0 }}
                          >
                            {item.label}
                          </motion.div>
                        </motion.button>
                      </Link>
                    </motion.div>
                  ))}
                </>
              )}
            </AnimatePresence>

            {/* Quick Stats (when expanded) */}
            {isExpanded && (
              <motion.div
                className="flex items-center gap-3 ml-2 pr-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.2 }}
              >
                <div className="h-8 w-[1px] bg-gold/30" />
                <div className="text-xs">
                  <p className="text-gold font-semibold">3 Spots Left</p>
                  <p className="text-gray-400">Founding Partners</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Mobile Swipe Hint */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2 }}
            >
              <motion.span
                animate={{ x: [-3, 3, -3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ← Tap →
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Section Indicators (Desktop Only) */}
      <div className="hidden md:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col gap-4">
          {['home', 'services', 'results', 'contact'].map((section) => (
            <motion.button
              key={section}
              onClick={() => {
                const element = document.getElementById(
                  section === 'results' ? 'case-studies' : 
                  section === 'contact' ? 'leadgen-form' : section
                );
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative group"
              whileHover={{ scale: 1.2 }}
            >
              <div 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === (section === 'results' ? 'case-studies' : 
                                   section === 'contact' ? 'leadgen-form' : section)
                    ? 'bg-gold w-8' 
                    : 'bg-gray-600 hover:bg-gold/50'
                }`}
              />
              
              {/* Label on Hover */}
              <motion.span
                className="absolute right-full mr-3 px-2 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap pointer-events-none"
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.span>
            </motion.button>
          ))}
        </div>
      </div>
    </>
  );
}