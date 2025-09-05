'use client';

import { motion } from 'framer-motion';

export default function SocialProofMarquee() {
  const proofItems = [
    { icon: '🆕', text: '3 Months Old', highlight: true },
    { icon: '🎯', text: '3 Active Clients' },
    { icon: '📊', text: '312 Leads Generated' },
    { icon: '⚡', text: '3 Second Response Time' },
    { icon: '🇦🇪', text: 'Dubai Real Estate Focus' },
    { icon: '💬', text: 'WhatsApp AI' },
    { icon: '📱', text: 'Instagram Automation' },
    { icon: '💰', text: '500 AED Per Lead' },
    { icon: '🤝', text: 'No Retainers' },
    { icon: '⏱️', text: '7-Day Setup' },
    { icon: '📞', text: 'Direct Founder Access' },
    { icon: '✅', text: '20 Lead Guarantee' },
    // Duplicate for seamless loop
    { icon: '🆕', text: '3 Months Old', highlight: true },
    { icon: '🎯', text: '3 Active Clients' },
    { icon: '📊', text: '312 Leads Generated' },
    { icon: '⚡', text: '3 Second Response Time' },
    { icon: '🇦🇪', text: 'Dubai Real Estate Focus' },
    { icon: '💬', text: 'WhatsApp AI' },
    { icon: '📱', text: 'Instagram Automation' },
    { icon: '💰', text: '500 AED Per Lead' },
    { icon: '🤝', text: 'No Retainers' },
    { icon: '⏱️', text: '7-Day Setup' },
    { icon: '📞', text: 'Direct Founder Access' },
    { icon: '✅', text: '20 Lead Guarantee' },
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