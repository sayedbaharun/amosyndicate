'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SyndicateHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navLinks = [
    { href: '/syndicate', label: 'Home' },
    { href: '/syndicate/services', label: 'Services' },
    { href: '/syndicate/case-studies', label: 'Case Studies' },
    { href: '/syndicate/operators', label: 'Operators' },
    { href: '/syndicate/playbook-vault', label: 'Vault' },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-gold/30 shadow-[0_0_40px_rgba(255,215,0,0.15)]">
      {/* Tubelight Glow Effect - Multiple Layers */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-100"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 215, 0, 0.25), transparent 35%)`,
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-75"
        style={{
          background: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 0, 0.3), transparent 25%)`,
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-50"
        style={{
          background: `radial-gradient(150px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 215, 0, 0.4), transparent 15%)`,
        }}
      />
      
      <nav className="relative max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/syndicate">
            <motion.div 
              className="relative text-2xl font-bold group"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10 text-white">AMO</span>
              <span className="relative z-10 text-gold">SYNDICATE</span>
              
              {/* Logo Glow Effect */}
              <motion.div
                className="absolute -inset-4 bg-gold/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.div
                  className="relative px-5 py-2 cursor-pointer group"
                  onHoverStart={() => setActiveLink(link.label)}
                  onHoverEnd={() => setActiveLink('')}
                >
                  {/* Tubelight Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
                    initial={false}
                    animate={{
                      opacity: activeLink === link.label ? 1 : 0,
                      scale: activeLink === link.label ? [1, 1.05, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Extra Glow Layer */}
                  <motion.div
                    className="absolute -inset-y-1 -inset-x-2 bg-gold/20 blur-lg"
                    initial={false}
                    animate={{
                      opacity: activeLink === link.label ? 0.5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Glow Effect */}
                  {activeLink === link.label && (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-gold/20 blur-xl"
                        layoutId="navbar-glow"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6
                        }}
                      />
                      <motion.div
                        className="absolute -inset-2 bg-gold/10 blur-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </>
                  )}
                  
                  {/* Text */}
                  <span className="relative z-10 text-white/70 group-hover:text-white text-sm uppercase tracking-wider font-medium transition-all duration-300 group-hover:text-shadow-gold">
                    {link.label}
                  </span>
                  
                  {/* Bottom Line Animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeLink === link.label ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Top Line Animation */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeLink === link.label ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </motion.div>
              </Link>
            ))}
            
            <Link href="/syndicate#leadgen-form">
              <motion.button
                className="relative ml-6 px-6 py-2 overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold via-yellow-400 to-gold"
                  animate={{
                    x: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ width: "200%" }}
                />
                
                {/* Button Border */}
                <div className="absolute inset-0 bg-black m-[1px]" />
                
                {/* Button Text */}
                <span className="relative z-10 text-gold group-hover:text-white font-semibold uppercase tracking-wider text-sm transition-colors duration-300">
                  Work With Us
                </span>
                
                {/* Hover Glow */}
                <motion.div
                  className="absolute -inset-4 bg-gold/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-8 h-8 text-white"
          >
            <motion.div
              className="absolute inset-0 bg-gold/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
            <svg
              className="relative z-10 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-6 pb-6 border-t border-gold/20 pt-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="text-white/80 hover:text-gold uppercase tracking-wider text-sm transition-colors">
                    {link.label}
                  </span>
                </Link>
              ))}
              
              <Link href="/syndicate#leadgen-form">
                <button className="bg-gold text-black px-6 py-2 font-semibold uppercase tracking-wider text-sm hover:bg-white transition-all duration-300 w-full mt-4">
                  Work With Us
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}