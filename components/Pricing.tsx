
import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_DATA } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Pricing & Services</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-bold max-w-2xl mx-auto">
            Transparent pricing for high-quality audio services.
          </p>
        </div>

        <div className="space-y-20">
          {PRICING_DATA.map((category, catIdx) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold mb-8 text-[#007AFF] tracking-tight border-b border-slate-200 dark:border-slate-800 pb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.tiers.map((tier, tierIdx) => (
                  <motion.div
                    key={tier.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: tierIdx * 0.1 }}
                    className="bg-white dark:bg-black p-8 rounded-3xl shadow-xl shadow-black/5 dark:shadow-white/5 border border-slate-100 dark:border-slate-800 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">{tier.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-bold mb-6">{tier.description}</p>
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-[#007AFF] mb-1">{tier.price}</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Base Rate</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
