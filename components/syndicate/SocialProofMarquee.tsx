'use client';

import { motion } from 'framer-motion';

export default function SocialProofMarquee() {
  const proofItems = [
    { icon: '🏛️', text: 'SHAMS License #2113788.01', highlight: true },
    { icon: '🤖', text: 'Powered by GPT-4 Turbo' },
    { icon: '⚡', text: '<2 Hour Response Time' },
    { icon: '🔒', text: 'Bank-Level Security' },
    { icon: '🌍', text: 'Serving MENA Region' },
    { icon: '✅', text: 'Meta Business Partner' },
    { icon: '☁️', text: 'Google Cloud Platform' },
    { icon: '💳', text: 'Stripe Verified' },
    { icon: '📱', text: 'WhatsApp Business API' },
    { icon: '🛡️', text: '30-Day Money Back' },
    { icon: '🚀', text: '99.9% Uptime SLA' },
    { icon: '👥', text: '24/7 Founder Access' },
    // Duplicate for seamless loop
    { icon: '🏛️', text: 'SHAMS License #2113788.01', highlight: true },
    { icon: '🤖', text: 'Powered by GPT-4 Turbo' },
    { icon: '⚡', text: '<2 Hour Response Time' },
    { icon: '🔒', text: 'Bank-Level Security' },
    { icon: '🌍', text: 'Serving MENA Region' },
    { icon: '✅', text: 'Meta Business Partner' },
    { icon: '☁️', text: 'Google Cloud Platform' },
    { icon: '💳', text: 'Stripe Verified' },
    { icon: '📱', text: 'WhatsApp Business API' },
    { icon: '🛡️', text: '30-Day Money Back' },
    { icon: '🚀', text: '99.9% Uptime SLA' },
    { icon: '👥', text: '24/7 Founder Access' },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black/50 backdrop-blur-sm border-y border-gold/20 py-3">
      {/* Gradient Masks for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
      
      {/* Marquee Content */}
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -50 + "%"],
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {proofItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <span className="text-gold text-lg">{item.icon}</span>
            <span 
              className={`text-sm uppercase tracking-wider font-medium ${
                item.highlight 
                  ? 'text-gold' 
                  : 'text-gray-400 hover:text-white transition-colors'
              }`}
            >
              {item.text}
            </span>
            {index < proofItems.length - 1 && (
              <span className="text-gold/30 mx-4">•</span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}