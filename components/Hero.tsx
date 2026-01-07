
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-[#007AFF]/25 via-transparent to-transparent rounded-full blur-[120px] opacity-60 dark:opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <h1 className="text-7xl md:text-[11rem] font-bold tracking-tight mb-6 leading-none select-none">
          <span className="font-kanit bg-gradient-to-b from-sky-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(14,165,233,0.3)]">
            Kami
          </span>
          <span className="font-zen text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] dark:drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] ml-1">
            髪
          </span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-3xl font-bold text-slate-500 dark:text-slate-400 tracking-tight"
        >
          Mix / Music Arrange <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] dark:drop-shadow-none font-normal ml-1">Form Delta.▿</span>
        </motion.p>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-300 dark:text-slate-700"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </motion.div>
    </section>
  );
};
