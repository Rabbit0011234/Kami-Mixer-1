
import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioCategory } from '../types.ts';

interface PortfolioProps {
  onSelectCategory: (category: PortfolioCategory) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      type: PortfolioCategory.ARRANGEMENT,
      image: 'https://picsum.photos/seed/arrange/1200/800',
      description: 'Professional music production and creative arrangements.'
    },
    {
      type: PortfolioCategory.MIXING,
      image: 'https://picsum.photos/seed/mix/1200/800',
      description: 'Crystal clear vocal mixing and industry-standard mastering.'
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Portfolio</h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg font-bold max-w-2xl mx-auto">
          Experience a collection of works crafted with precision and passion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
            onClick={() => onSelectCategory(cat.type)}
          >
            <img 
              src={cat.image} 
              alt={cat.type}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-colors"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="inline-block px-3 py-1 bg-[#007AFF] text-white text-xs font-bold rounded-full mb-4">Featured</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{cat.type}</h3>
              <p className="text-slate-300 font-bold max-w-xs">{cat.description}</p>
              
              <div className="mt-8 flex items-center text-white font-bold group-hover:translate-x-2 transition-transform">
                View Collection
                <svg className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
