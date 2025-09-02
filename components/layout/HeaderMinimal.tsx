'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HeaderMinimal() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="text-lg font-medium tracking-tight">
            AMO
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link href="/about" className="hover:opacity-60 transition-opacity">
              About
            </Link>
            <Link href="/services" className="hover:opacity-60 transition-opacity">
              Services
            </Link>
            <Link href="/portfolio" className="hover:opacity-60 transition-opacity">
              Portfolio
            </Link>
            <Link href="/case-studies" className="hover:opacity-60 transition-opacity">
              Cases
            </Link>
            <Link href="/contact" className="text-[#B8A06A] hover:opacity-60 transition-opacity">
              Contact
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-6 h-6 flex flex-col justify-center space-y-1"
          >
            <span className={`block w-full h-[1px] bg-black transition-transform ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`block w-full h-[1px] bg-black transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-full h-[1px] bg-black transition-transform ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            <Link href="/about" className="block py-2">About</Link>
            <Link href="/services" className="block py-2">Services</Link>
            <Link href="/portfolio" className="block py-2">Portfolio</Link>
            <Link href="/case-studies" className="block py-2">Cases</Link>
            <Link href="/contact" className="block py-2 text-[#B8A06A]">Contact</Link>
          </div>
        </nav>
      )}
    </header>
  );
}