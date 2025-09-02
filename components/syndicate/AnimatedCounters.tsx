'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import Link from 'next/link';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

function Counter({ from, to, duration = 2, suffix = '', prefix = '', decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const rounded = useTransform(motionValue, (latest) => {
    return decimals > 0 
      ? latest.toFixed(decimals)
      : Math.round(latest).toLocaleString();
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const animation = animate(motionValue, to, {
        duration,
        ease: "easeOut",
      });
      return animation.stop;
    }
  }, [isInView, motionValue, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function AnimatedCounters() {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const startDate = new Date('2024-10-01'); // 3 months ago
  
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = Math.floor((now.getTime() - startDate.getTime()) / 1000);
      setTimeElapsed(diff);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${days}d ${hours}h ${mins}m`;
  };

  const counters = [
    {
      label: 'Founding Partners',
      value: <><Counter from={0} to={7} duration={1.5} />/10</>,
      urgent: true,
      subtext: '3 spots remaining'
    },
    {
      label: 'Systems Built',
      value: <Counter from={0} to={23} duration={2} suffix="+" />,
      subtext: 'This month'
    },
    {
      label: 'Avg Response Time',
      value: <><Counter from={24} to={2} duration={1.5} /> hrs</>,
      subtext: 'Founder direct'
    },
    {
      label: 'Success Rate',
      value: <Counter from={0} to={94} duration={2} suffix="%" />,
      subtext: 'Client satisfaction'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray border-y border-gold/20">
      <div className="max-w-7xl mx-auto">
        {/* Live Timer */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-wider text-gold mb-2">
            Building Since Day One
          </p>
          <div className="text-3xl font-bold text-white">
            {formatTime(timeElapsed)}
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Time since AMO Syndicate launched
          </p>
        </motion.div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative">
                {counter.urgent && (
                  <motion.div
                    className="absolute -top-3 -right-3"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <div className="w-3 h-3 bg-gold rounded-full animate-pulse" />
                  </motion.div>
                )}
                
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {counter.value}
                </p>
                <p className="text-sm uppercase tracking-wider text-gold mb-1">
                  {counter.label}
                </p>
                {counter.subtext && (
                  <p className="text-xs text-gray-500">
                    {counter.subtext}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Urgency Banner */}
        <motion.div 
          className="mt-12 p-6 bg-black/50 backdrop-blur-sm border border-gold/30 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <span className="text-3xl">⏰</span>
              </motion.div>
              <div className="text-left">
                <p className="text-gold font-bold">Limited Time Offer</p>
                <p className="text-sm text-gray-400">50% off for founding partners ends soon</p>
              </div>
            </div>
            
            <Link href="/syndicate#leadgen-form">
              <motion.button
                className="bg-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Claim Your Spot
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}