
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-[#007AFF]/20 via-transparent to-transparent rounded-full blur-[120px] opacity-60 dark:opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <h1 className="text-[5.5rem] md:text-[11rem] font-bold tracking-tighter mb-4 leading-none select-none flex items-center justify-center">
          <span className="font-kanit bg-gradient-to-r from-[#40C9FF] via-[#4facfe] to-[#7b61ff] bg-clip-text text-transparent drop-shadow-[0_8px_16px_rgba(79,172,254,0.4)]">
            Kami
          </span>
          <span className="font-zen font-normal text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] ml-2 md:ml-4 translate-y-[-2%] md:translate-y-[-1%]">
            髪
          </span>
        </h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl tracking-tight flex items-center justify-center gap-2"
        >
          <span className="text-slate-500 dark:text-slate-500 font-medium">Mix / Music Arrange</span>
          <span className="text-slate-900 dark:text-white font-bold flex items-center gap-1.5">
            Form Delta. <span className="text-[0.7em] translate-y-[10%]">▿</span>
          </span>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-300 dark:text-slate-800"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent mx-auto opacity-50"></div>
      </motion.div>
    </section>
  );
};
