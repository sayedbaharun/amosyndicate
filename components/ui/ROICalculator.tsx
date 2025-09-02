'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Users, Target, ArrowRight, Zap } from 'lucide-react';

interface ROIMetrics {
  currentRevenue: number;
  currentLeads: number;
  currentConversion: number;
  investmentAmount: number;
}

interface ROIResults {
  projectedRevenue: number;
  projectedLeads: number;
  projectedConversion: number;
  roi: number;
  revenueIncrease: number;
  leadIncrease: number;
}

export default function ROICalculator() {
  const [metrics, setMetrics] = useState<ROIMetrics>({
    currentRevenue: 100000,
    currentLeads: 100,
    currentConversion: 2,
    investmentAmount: 10000,
  });

  const [showResults, setShowResults] = useState(false);

  const calculateROI = (): ROIResults => {
    // Based on actual client results
    const leadMultiplier = 3.4; // 340% increase average
    const conversionMultiplier = 2.5; // 250% conversion improvement
    const revenueMultiplier = 4.2; // 420% revenue increase average

    const projectedLeads = Math.round(metrics.currentLeads * leadMultiplier);
    const projectedConversion = metrics.currentConversion * conversionMultiplier;
    const projectedRevenue = metrics.currentRevenue * revenueMultiplier;
    
    const revenueIncrease = projectedRevenue - metrics.currentRevenue;
    const roi = ((revenueIncrease - (metrics.investmentAmount * 12)) / (metrics.investmentAmount * 12)) * 100;

    return {
      projectedRevenue,
      projectedLeads,
      projectedConversion,
      roi: Math.round(roi),
      revenueIncrease,
      leadIncrease: projectedLeads - metrics.currentLeads,
    };
  };

  const results = calculateROI();

  const handleInputChange = (field: keyof ROIMetrics, value: string) => {
    const numValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    setMetrics({
      ...metrics,
      [field]: numValue,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-gradient-to-br from-black to-[#1A1A1A] rounded-2xl border border-[#D4AF37]/30 p-8">
      <div className="text-center mb-8">
        <motion.div
          className="inline-flex items-center px-4 py-2 gold-gradient rounded-full mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Calculator className="w-4 h-4 text-black mr-2" />
          <span className="text-black font-semibold text-sm">ROI Calculator</span>
        </motion.div>
        
        <h2 className="font-playfair text-3xl font-bold text-white mb-4">
          Calculate Your{' '}
          <span className="luxury-gold">Potential ROI</span>
        </h2>
        
        <p className="text-gray-300 max-w-2xl mx-auto">
          See how AMO's Gulf-focused strategies can transform your luxury brand's performance based on real client results and cultural expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="font-semibold text-white mb-4">Current Metrics</h3>
          
          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              <DollarSign className="inline w-4 h-4 mr-1" />
              Current Monthly Revenue
            </label>
            <input
              type="text"
              value={formatCurrency(metrics.currentRevenue)}
              onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              <Users className="inline w-4 h-4 mr-1" />
              Monthly Leads/Inquiries
            </label>
            <input
              type="number"
              value={metrics.currentLeads}
              onChange={(e) => handleInputChange('currentLeads', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              <Target className="inline w-4 h-4 mr-1" />
              Current Conversion Rate (%)
            </label>
            <input
              type="number"
              value={metrics.currentConversion}
              onChange={(e) => handleInputChange('currentConversion', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              <Zap className="inline w-4 h-4 mr-1" />
              Monthly Marketing Investment
            </label>
            <select
              value={metrics.investmentAmount}
              onChange={(e) => handleInputChange('investmentAmount', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
            >
              <option value="5000" className="bg-black">$5,000 - Content Mastery</option>
              <option value="10000" className="bg-black">$10,000 - Campaign Excellence</option>
              <option value="25000" className="bg-black">$25,000 - Luxury Authority</option>
              <option value="50000" className="bg-black">$50,000+ - Black Card</option>
            </select>
          </div>
          
          <motion.button
            onClick={() => setShowResults(true)}
            className="w-full px-6 py-4 gold-gradient text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#D4AF37]/25 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Calculate ROI
            <ArrowRight className="inline ml-2 w-5 h-5" />
          </motion.button>
        </div>

        {/* Results Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: showResults ? 1 : 0.3, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-semibold text-white mb-4">Projected Results (12 Months)</h3>
          
          <div className="space-y-4">
            <motion.div
              className="glass-effect rounded-lg p-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-sm">Projected Revenue</span>
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <div className="font-playfair text-2xl font-bold luxury-gold">
                {formatCurrency(results.projectedRevenue)}
              </div>
              <div className="text-green-500 text-sm mt-1">
                +{formatCurrency(results.revenueIncrease)} increase
              </div>
            </motion.div>
            
            <motion.div
              className="glass-effect rounded-lg p-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-sm">Projected Leads</span>
                <Users className="w-4 h-4 text-blue-500" />
              </div>
              <div className="font-playfair text-2xl font-bold luxury-gold">
                {results.projectedLeads.toLocaleString()}
              </div>
              <div className="text-blue-500 text-sm mt-1">
                +{results.leadIncrease} new leads/month
              </div>
            </motion.div>
            
            <motion.div
              className="glass-effect rounded-lg p-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-sm">Conversion Rate</span>
                <Target className="w-4 h-4 text-purple-500" />
              </div>
              <div className="font-playfair text-2xl font-bold luxury-gold">
                {results.projectedConversion.toFixed(1)}%
              </div>
              <div className="text-purple-500 text-sm mt-1">
                +{(results.projectedConversion - metrics.currentConversion).toFixed(1)}% improvement
              </div>
            </motion.div>
            
            <motion.div
              className="glass-effect rounded-lg p-4 border-2 border-[#D4AF37]/50"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">Return on Investment</span>
                <DollarSign className="w-5 h-5 luxury-gold" />
              </div>
              <div className="font-playfair text-4xl font-bold luxury-gold">
                {results.roi}%
              </div>
              <div className="text-gray-300 text-sm mt-2">
                Based on actual client performance data
              </div>
            </motion.div>
          </div>
          
          <div className="glass-effect rounded-lg p-4 bg-[#D4AF37]/10">
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Note:</span> These projections are based on average results from our luxury brand clients. Individual results may vary based on market conditions and implementation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
