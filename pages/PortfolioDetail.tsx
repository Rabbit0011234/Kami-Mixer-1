
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PortfolioCategory } from '../types';
import { generateMockPortfolio } from '../constants';

interface PortfolioDetailProps {
  category: PortfolioCategory;
  onBack: () => void;
}

const ITEMS_PER_PAGE = 10;
const TOTAL_PAGES = 20;

export const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ category, onBack }) => {
  const [page, setPage] = useState(1);
  const items = useMemo(() => generateMockPortfolio(category), [category]);

  const currentItems = items.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <button 
        onClick={onBack}
        className="flex items-center text-[#007AFF] font-medium mb-8 group"
      >
        <svg className="mr-2 group-hover:-translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Home
      </button>

      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{category}</h2>
        <p className="text-slate-500 dark:text-slate-400">Page {page} of {TOTAL_PAGES}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {currentItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="group"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-xl border border-black/5 dark:border-white/5">
              <iframe
                src={item.videoUrl}
                title={item.title}
                className="absolute inset-0 w-full h-full transition-all duration-500"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-[#007AFF]/20 rounded-3xl transition-colors"></div>
            </div>
            <h4 className="mt-4 text-xl font-bold text-slate-800 dark:text-white group-hover:text-[#007AFF] transition-colors">
              {item.title}
            </h4>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-16 flex flex-wrap justify-center gap-2">
        {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
              page === i + 1 
                ? 'bg-apple-blue text-white shadow-lg' 
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
