
import React from 'react';
import { motion } from 'framer-motion';
import { ORDER_STEPS } from '../constants';

export const HowToOrder: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">How to Order</h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg font-bold">
          Follow these simple steps to bring your music project to life.
        </p>
      </div>

      <div className="relative">
        {/* Line decoration */}
        <div className="absolute left-[27px] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden md:block"></div>

        <div className="space-y-12">
          {ORDER_STEPS.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex md:flex-row flex-col items-start gap-6 relative"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-black border border-slate-200 dark:border-slate-800 flex items-center justify-center text-xl font-bold text-[#007AFF] shadow-lg z-10 shrink-0">
                {idx + 1}
              </div>
              <div className="md:pt-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg font-bold leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 p-8 rounded-3xl bg-[#007AFF]/5 border border-[#007AFF]/10 dark:bg-[#007AFF]/10">
        <h4 className="font-bold text-xl mb-4 text-[#007AFF]">Required Checklist</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300">
          <li className="flex items-center gap-2 font-bold">
            <svg className="text-[#007AFF]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Audio Files (MP3 / WAV)
          </li>
          <li className="flex items-center gap-2 font-bold">
            <svg className="text-[#007AFF]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Karaoke / Off-vocal track
          </li>
          <li className="flex items-center gap-2 font-bold">
            <svg className="text-[#007AFF]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Project References
          </li>
          <li className="flex items-center gap-2 font-bold">
            <svg className="text-[#007AFF]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Desired Deadline
          </li>
          <li className="flex items-center gap-2 font-bold">
            <svg className="text-[#007AFF]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Project Budget
          </li>
          <li className="flex items-center gap-2 font-bold">
            <svg className="text-[#007AFF]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Specific Creative Details
          </li>
        </ul>
      </div>
    </section>
  );
};
