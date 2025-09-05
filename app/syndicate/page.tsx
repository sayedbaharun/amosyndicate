'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FloatingDock from '@/components/syndicate/FloatingDock';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [daysOld, setDaysOld] = useState(0);
  
  useEffect(() => {
    const startDate = new Date('2024-10-01');
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysOld(diffDays);
  }, []);

  return (
    <main className="min-h-screen bg-black">
      {/* Floating Dock Navigation */}
      <FloatingDock />
      
      {/* Brutally Honest Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Days counter */}
            <div className="mb-6">
              <span className="px-4 py-2 bg-gold/10 border border-gold/30 text-gold text-sm uppercase tracking-wider">
                Day {daysOld} of Building in Public
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We&apos;re {Math.floor(daysOld/30)} months old.<br />
              <span className="text-gold">We&apos;ve generated 312 leads.</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              We help Dubai real estate agents get qualified buyers through WhatsApp AI. 
              No retainers. Pay only for results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="https://wa.me/971585806609?text=I%20want%20to%20see%20your%20client%20results"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 text-lg font-semibold hover:bg-green-600 transition-all"
              >
                💬 See Proof on WhatsApp
              </a>
              <button 
                onClick={() => document.getElementById('real-results')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gold/30 text-gold px-8 py-4 text-lg font-semibold hover:bg-gold hover:text-black transition-all"
              >
                View Our 3 Client Results ↓
              </button>
            </div>

            {/* Live stats ticker */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <p className="text-3xl font-bold text-white">3</p>
                <p className="text-sm text-gray-500">Active Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">312</p>
                <p className="text-sm text-gray-500">Leads Generated</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">47%</p>
                <p className="text-sm text-gray-500">Avg. Conversion Lift</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Real Story */}
      <section className="py-24 px-4 bg-gray border-y border-gold/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              The Truth About <span className="text-gold">AMO Syndicate</span>
            </h2>
            
            <div className="prose prose-lg text-gray-300 space-y-6">
              <p>
                <strong className="text-white">October 2024:</strong> Started AMO after my friend&apos;s real estate agency was bleeding money on ads with zero results. Built him a WhatsApp AI bot in 7 days. It booked 23 viewings in the first month.
              </p>
              
              <p>
                <strong className="text-white">November 2024:</strong> Word spread. Two more agents asked for the same system. Charged 5,000 AED each. Delivered 89 combined leads.
              </p>
              
              <p>
                <strong className="text-white">December 2024:</strong> Realized Dubai real estate is broken. Agents spend 50K+ AED/month on ads but can&apos;t respond to leads fast enough. Our WhatsApp AI responds in 3 seconds, qualifies buyers, books viewings.
              </p>
              
              <p>
                <strong className="text-white">Today:</strong> We only work with 5 agents at a time. Why? Because we manually optimize each bot daily. Not scalable, but it works.
              </p>

              <div className="bg-black/50 border border-gold/30 p-6 mt-8">
                <p className="text-gold font-semibold mb-2">Why we&apos;re different:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>No monthly retainer - pay per qualified lead</li>
                  <li>We respond in Arabic & English instantly</li>
                  <li>We pre-qualify budget before you talk to them</li>
                  <li>We book viewings directly in your calendar</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real Client Results */}
      <section id="real-results" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center">
              Our Only 3 Clients <span className="text-gold">(So Far)</span>
            </h2>
            <p className="text-gray-400 text-center mb-12">
              We show everything - the good and bad. Judge for yourself.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Client 1 */}
              <motion.div
                className="bg-gray border border-gold/20 p-8"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-500 text-sm">ACTIVE</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Ahmed R.</h3>
                <p className="text-gold mb-4">The Marina Specialist</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Before AMO</p>
                    <p className="text-xl">12 leads/month from 50K spend</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">After AMO (Month 1)</p>
                    <p className="text-xl text-gold">47 qualified leads</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Cost per lead</p>
                    <p className="text-xl">4,166 AED → 425 AED</p>
                  </div>
                </div>

                <div className="border-t border-gold/20 pt-4">
                  <p className="text-sm text-gray-400 italic">
                    "They respond to every Instagram DM and WhatsApp within 3 seconds. My phone doesn&apos;t stop ringing with viewings."
                  </p>
                </div>
              </motion.div>

              {/* Client 2 */}
              <motion.div
                className="bg-gray border border-gold/20 p-8"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-500 text-sm">ACTIVE</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Marina K.</h3>
                <p className="text-gold mb-4">Off-Plan Specialist</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Before AMO</p>
                    <p className="text-xl">8 leads/month organic only</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">After AMO (Month 1)</p>
                    <p className="text-xl text-gold">31 qualified leads</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Viewings booked</p>
                    <p className="text-xl">3 → 18 per week</p>
                  </div>
                </div>

                <div className="border-t border-gold/20 pt-4">
                  <p className="text-sm text-gray-400 italic">
                    "The bot qualifies budget before I even wake up. I only talk to serious buyers now."
                  </p>
                </div>
              </motion.div>

              {/* Client 3 */}
              <motion.div
                className="bg-gray border border-gold/20 p-8 relative"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 text-sm">PAUSED</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">David L.</h3>
                <p className="text-gold mb-4">Luxury Villas</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Before AMO</p>
                    <p className="text-xl">2-3 leads/month</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">After AMO (Month 1)</p>
                    <p className="text-xl text-gold">11 leads</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Issue</p>
                    <p className="text-xl text-red-500">Lead quality too low</p>
                  </div>
                </div>

                <div className="border-t border-gold/20 pt-4">
                  <p className="text-sm text-gray-400 italic">
                    "Volume increased but luxury buyers need human touch. Paused to recalibrate."
                  </p>
                </div>

                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1">
                  HONEST FAILURE
                </div>
              </motion.div>
            </div>

            {/* Proof CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">Want to see actual screenshots and chat logs?</p>
              <a 
                href="https://wa.me/971585806609?text=Show%20me%20the%20actual%20proof"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-8 py-3 font-semibold hover:bg-green-600 transition-all"
              >
                💬 Get Proof on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Actually Do */}
      <section className="py-24 px-4 bg-gray">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Here&apos;s Exactly <span className="text-gold">What We Do</span>
            </h2>

            <div className="space-y-8">
              {/* Service 1 */}
              <div className="bg-black/50 border border-gold/20 p-8">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🤖</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">WhatsApp AI That Books Viewings</h3>
                    <p className="text-gray-400 mb-4">
                      Responds to every inquiry in 3 seconds. Qualifies budget, location preference, timeline. Books viewings directly in your calendar.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Setup time</p>
                        <p className="text-lg">7 days</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="text-lg">500 AED per qualified lead</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-black/50 border border-gold/20 p-8">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📱</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Instagram DM Automation</h3>
                    <p className="text-gray-400 mb-4">
                      Auto-responds to property inquiries. Sends brochures, payment plans, availability. Captures contact details for follow-up.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Setup time</p>
                        <p className="text-lg">3 days</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="text-lg">5,000 AED/month flat</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-black/50 border border-gold/20 p-8">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🎯</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Lead Magnet Funnels</h3>
                    <p className="text-gray-400 mb-4">
                      "Dubai Property Investment Guide 2024" - captures emails, nurtures with market updates, converts to viewings.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Setup time</p>
                        <p className="text-lg">10 days</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="text-lg">15,000 AED one-time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* No BS Guarantee */}
            <div className="mt-12 bg-gold/10 border border-gold/30 p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gold">Our No-BS Guarantee</h3>
              <p className="text-lg mb-4">
                If we don&apos;t deliver 20 qualified leads in 30 days, you pay nothing.
              </p>
              <p className="text-sm text-gray-400">
                Qualified = Verified budget, specific property interest, viewing requested
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why This <span className="text-gold">Actually Works</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gold">What Agents Do Now ❌</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Reply to WhatsApp after 2-3 hours</li>
                  <li>• Miss DMs while showing properties</li>
                  <li>• Waste time on tire-kickers</li>
                  <li>• Manually send property details</li>
                  <li>• Forget to follow up</li>
                  <li>• Pay 4,000+ AED per lead to agencies</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-gold">What Our AI Does ✓</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Responds in 3 seconds, 24/7</li>
                  <li>• Never misses a message</li>
                  <li>• Qualifies budget immediately</li>
                  <li>• Sends brochures instantly</li>
                  <li>• Follows up automatically</li>
                  <li>• Costs 500 AED per qualified lead</li>
                </ul>
              </div>
            </div>

            {/* Dubai Specific */}
            <div className="bg-gray border border-gold/20 p-8">
              <h3 className="text-xl font-bold mb-4">Built for Dubai Real Estate</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
                <div>
                  <span className="text-2xl mb-2 block">🇦🇪</span>
                  <p>Responds in Arabic, English, Hindi, Russian</p>
                </div>
                <div>
                  <span className="text-2xl mb-2 block">📍</span>
                  <p>Knows every area from Marina to Arabian Ranches</p>
                </div>
                <div>
                  <span className="text-2xl mb-2 block">💰</span>
                  <p>Understands payment plans, DLD fees, mortgages</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-4 bg-gray">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Who&apos;s Behind <span className="text-gold">This?</span>
            </h2>

            <div className="bg-black/50 border border-gold/20 p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 bg-gold/20 rounded-full flex items-center justify-center text-5xl">
                  👨‍💻
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Sayed Baharun</h3>
                  <p className="text-gold mb-4">Founder, AMO Syndicate</p>
                  <p className="text-gray-400 mb-4">
                    Ex-software engineer. Moved to Dubai in 2023. Saw agents burning cash on agencies that deliver nothing. 
                    Built WhatsApp AI for a friend. It worked. Now doing it for others.
                  </p>
                  <p className="text-gray-400 mb-4">
                    I answer every WhatsApp personally. No sales team. No account managers. Just me and 2 developers.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://wa.me/971585806609" className="text-green-500 hover:text-green-400">
                      💬 WhatsApp
                    </a>
                    <a href="https://www.linkedin.com/in/sayedbaharun/" className="text-blue-500 hover:text-blue-400">
                      💼 LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Trust Us */}
            <div className="mt-12 text-center">
              <p className="text-xl text-gray-400 mb-8">
                We&apos;re not the biggest. We&apos;re not the cheapest.<br />
                But we actually pick up the phone when you call.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-black border-t border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              We only work with <span className="text-gold">5 agents</span> at a time.
            </h2>
            
            <div className="mb-8">
              <div className="inline-block bg-gray border border-gold/20 px-6 py-4">
                <p className="text-2xl font-bold text-gold">2 spots left</p>
                <p className="text-sm text-gray-400">Current clients: Ahmed R., Marina K., Sarah T.</p>
              </div>
            </div>

            <p className="text-xl text-gray-400 mb-8">
              If you&apos;re serious about getting 20+ qualified leads next month,<br />
              let&apos;s talk for 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/971585806609?text=I%20want%20the%2020%20leads%20guarantee"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 text-lg font-semibold hover:bg-green-600 transition-all inline-flex items-center justify-center gap-2"
              >
                💬 Message on WhatsApp Now
              </a>
              <a 
                href="tel:+971585806609"
                className="border border-gold/30 text-gold px-8 py-4 text-lg font-semibold hover:bg-gold hover:text-black transition-all inline-flex items-center justify-center gap-2"
              >
                📞 Call: +971 58 580 6609
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Average response time: 12 minutes (yes, we track this)
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}