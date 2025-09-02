'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BetaPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=600&fit=crop&q=90"
            alt="Exclusive opportunity"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-gold uppercase tracking-wider mb-4">Founding Partner Program</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Build With Us From <span className="text-gold">Day One</span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Get lifetime access to our systems at 50% off. Only 10 spots. Ever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Honest Pitch */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Here&apos;s the <span className="text-gold">Truth</span></h2>
            </div>

            <div className="bg-gray syndicate-border p-8 space-y-6">
              <p className="text-lg text-gray-300">
                <span className="text-gold font-bold">We&apos;re new.</span> AMO Syndicate launched 3 months ago.
              </p>
              
              <p className="text-lg text-gray-300">
                <span className="text-gold font-bold">We don&apos;t have 100 case studies.</span> We have 3 active clients and 2 completed projects.
              </p>
              
              <p className="text-lg text-gray-300">
                <span className="text-gold font-bold">We&apos;re not the safe choice.</span> Established agencies have more credentials.
              </p>
              
              <div className="border-t border-gold/20 pt-6">
                <p className="text-xl text-white font-semibold mb-4">But here&apos;s what we DO have:</p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span className="text-gray-300">
                      <strong>Fresh perspective.</strong> We&apos;re not recycling 2019 strategies.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span className="text-gray-300">
                      <strong>Hunger.</strong> Your success is our survival. We can&apos;t afford to fail.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span className="text-gray-300">
                      <strong>Direct access.</strong> You work with founders, not account managers.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">→</span>
                    <span className="text-gray-300">
                      <strong>Cutting-edge tech.</strong> We built on GPT-4 while others debate AI ethics.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Founding Partners Get */}
      <section className="py-24 px-4 bg-gray">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Founding Partner <span className="text-gold">Deal</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black syndicate-border p-8"
            >
              <h3 className="text-2xl font-bold text-gold mb-6">What You Pay</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span className="text-gray-400">Setup Fee</span>
                  <span className="text-white line-through">$5,000</span>
                  <span className="text-gold ml-2">$0</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Monthly Retainer</span>
                  <span className="text-white line-through">$7,500</span>
                  <span className="text-gold ml-2">$3,750</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Minimum Contract</span>
                  <span className="text-white line-through">6 months</span>
                  <span className="text-gold ml-2">30 days</span>
                </li>
                <li className="flex justify-between border-t border-gold/20 pt-4">
                  <span className="text-white font-bold">Total First Month</span>
                  <span className="text-2xl font-bold text-gold">$3,750</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black syndicate-border p-8"
            >
              <h3 className="text-2xl font-bold text-gold mb-6">What You Get</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-gray-300">Weekly 1-on-1 calls with founders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-gray-300">Custom AI agent for your business</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-gray-300">Full social media management (5 platforms)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-gray-300">Landing pages & funnel setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-gray-300">Lifetime 50% discount (even after we&apos;re huge)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-gray-300">Case study feature rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-gray-300">30-day money-back guarantee</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Risk Reversal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-navy syndicate-border p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-gold">Our Guarantee</h3>
            <p className="text-lg text-gray-300 mb-6">
              If we don&apos;t deliver measurable results in 30 days, you get 100% of your money back. 
              No questions. No hard feelings. We even let you keep the work we&apos;ve done.
            </p>
            <p className="text-sm text-gray-500">
              Why can we offer this? Because we only take clients we know we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Spots Remaining */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray syndicate-border p-12">
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                Founding Partner Program Status
              </p>
              <div className="text-6xl font-bold text-gold mb-4">3 / 10</div>
              <p className="text-xl text-white mb-2">Spots Remaining</p>
              <p className="text-gray-400 mb-8">
                Once these are gone, they&apos;re gone forever. 
                Future clients pay full price.
              </p>
              
              <div className="grid grid-cols-10 gap-2 mb-8">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i}
                    className={`h-2 ${i < 7 ? 'bg-gray-700' : 'bg-gold'}`}
                  />
                ))}
              </div>

              <Link href="/syndicate#leadgen-form">
                <motion.button
                  className="bg-gold text-black px-12 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Claim Your Spot
                </motion.button>
              </Link>
              
              <p className="text-sm text-gray-500 mt-6">
                Average decision time: 48 hours<br />
                Next spot likely gone by: {new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Common <span className="text-gold">Questions</span>
            </h2>

            <div className="space-y-8">
              <div className="syndicate-border p-6">
                <h3 className="text-xl font-bold mb-3 text-gold">
                  Why should I trust a new company?
                </h3>
                <p className="text-gray-400">
                  You shouldn&apos;t blindly. That&apos;s why we offer 30-day money-back guarantee, 
                  no contracts longer than 30 days, and weekly calls so you see exactly what we&apos;re doing. 
                  The risk is entirely on us.
                </p>
              </div>

              <div className="syndicate-border p-6">
                <h3 className="text-xl font-bold mb-3 text-gold">
                  What if you go out of business?
                </h3>
                <p className="text-gray-400">
                  Fair concern. All work is delivered weekly. You own everything we create. 
                  No proprietary lock-ins. If we disappear tomorrow, you keep all assets, 
                  accesses, and documentation.
                </p>
              </div>

              <div className="syndicate-border p-6">
                <h3 className="text-xl font-bold mb-3 text-gold">
                  Is the 50% discount really lifetime?
                </h3>
                <p className="text-gray-400">
                  Yes. Founding partners pay $3,750/month forever. When we charge $15,000/month 
                  in 2 years, you still pay $3,750. It&apos;s our way of rewarding early believers.
                </p>
              </div>

              <div className="syndicate-border p-6">
                <h3 className="text-xl font-bold mb-3 text-gold">
                  How do I know I&apos;ll get attention as you grow?
                </h3>
                <p className="text-gray-400">
                  Founding partners get lifetime priority support. You have founder phone numbers. 
                  Your Slack messages get answered first. Always. It&apos;s written into our operating agreement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-navy">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              This Opportunity <span className="text-gold">Expires</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              When 10 spots are filled, or January 31st, 2025. Whichever comes first.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/syndicate#leadgen-form">
                <motion.button
                  className="bg-gold text-black px-12 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                </motion.button>
              </Link>
              
              <Link href="/syndicate/operators">
                <motion.button
                  className="bg-transparent border-2 border-gold text-gold px-12 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Meet the Team
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}