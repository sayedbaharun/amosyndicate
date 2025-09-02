'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Crown, Building2, ShoppingBag, Hotel, Plane, Gem, Car, Home } from 'lucide-react';

// Mock brand data - replace with actual logos when available
const brands = [
  { 
    name: 'Majid Al Futtaim', 
    category: 'Retail & Lifestyle',
    icon: ShoppingBag,
    description: 'Leading shopping mall developer'
  },
  { 
    name: 'Emaar Properties', 
    category: 'Real Estate',
    icon: Building2,
    description: 'Dubai\'s premier property developer'
  },
  { 
    name: 'Jumeirah Group', 
    category: 'Hospitality',
    icon: Hotel,
    description: 'Luxury hotel management'
  },
  { 
    name: 'Emirates', 
    category: 'Aviation',
    icon: Plane,
    description: 'World-class airline'
  },
  { 
    name: 'Damac Properties', 
    category: 'Real Estate',
    icon: Home,
    description: 'Luxury property development'
  },
  { 
    name: 'Al Habtoor Group', 
    category: 'Conglomerate',
    icon: Crown,
    description: 'Diversified business empire'
  },
  { 
    name: 'Chalhoub Group', 
    category: 'Luxury Retail',
    icon: Gem,
    description: 'Luxury brand distributor'
  },
  { 
    name: 'Al-Futtaim Automotive', 
    category: 'Automotive',
    icon: Car,
    description: 'Premium automotive retailer'
  },
  { 
    name: 'Landmark Group', 
    category: 'Retail',
    icon: ShoppingBag,
    description: 'Retail and hospitality conglomerate'
  },
  { 
    name: 'Alshaya Group', 
    category: 'Retail',
    icon: Building2,
    description: 'International franchise operator'
  },
];

const categories = ['All', 'Retail & Lifestyle', 'Real Estate', 'Hospitality', 'Aviation', 'Conglomerate', 'Luxury Retail', 'Automotive', 'Retail'];

export default function BrandShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const filteredBrands = selectedCategory === 'All' 
    ? brands 
    : brands.filter(brand => brand.category === selectedCategory);

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying && filteredBrands.length > 4) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % Math.max(1, filteredBrands.length - 3));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, filteredBrands.length, currentIndex]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => prev === 0 ? Math.max(0, filteredBrands.length - 4) : prev - 1);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, filteredBrands.length - 3));
  };

  return (
    <section className="py-20 bg-refined-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-luxury-gold to-emerald-teal text-black'
                  : 'glass-refined text-pearl-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Brand Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 25}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {filteredBrands.map((brand, index) => {
                const IconComponent = brand.icon;
                return (
                  <motion.div
                    key={`${brand.name}-${index}`}
                    className="min-w-[calc(25%-1.5rem)] group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="glass-refined p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group-hover:shadow-luxury h-full">
                      <div className="flex flex-col items-center text-center">
                        {/* Icon placeholder for logo */}
                        <div className="w-24 h-24 mb-6 glass-refined rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <IconComponent className="w-12 h-12 luxury-gold" />
                        </div>
                        
                        <h3 className="font-playfair text-xl font-bold text-white mb-2 group-hover:luxury-gold transition-colors duration-300">
                          {brand.name}
                        </h3>
                        
                        <p className="text-sm text-emerald-teal mb-2">
                          {brand.category}
                        </p>
                        
                        <p className="text-xs text-gray-400">
                          {brand.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          {filteredBrands.length > 4 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 glass-refined rounded-full hover:bg-white/10 transition-all duration-300 hover-magnetic"
                onMouseEnter={() => setIsAutoPlaying(false)}
              >
                <ChevronLeft className="w-6 h-6 luxury-gold" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 glass-refined rounded-full hover:bg-white/10 transition-all duration-300 hover-magnetic"
                onMouseEnter={() => setIsAutoPlaying(false)}
              >
                <ChevronRight className="w-6 h-6 luxury-gold" />
              </button>
            </>
          )}
        </div>

        {/* Carousel Indicators */}
        {filteredBrands.length > 4 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.max(1, filteredBrands.length - 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-8 bg-gradient-to-r from-luxury-gold to-emerald-teal' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="font-playfair text-display font-bold luxury-gold mb-2">50+</div>
            <div className="text-gray-400">Premium Brands</div>
          </div>
          <div className="text-center">
            <div className="font-playfair text-display font-bold emerald-teal mb-2">15+</div>
            <div className="text-gray-400">Royal Families</div>
          </div>
          <div className="text-center">
            <div className="font-playfair text-display font-bold dubai-sand mb-2">8</div>
            <div className="text-gray-400">GCC Countries</div>
          </div>
          <div className="text-center">
            <div className="font-playfair text-display font-bold pearl-white mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}