
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { PortfolioDetail } from './pages/PortfolioDetail';
import { Pricing } from './components/Pricing';
import { HowToOrder } from './components/HowToOrder';
import { Contact } from './components/Contact';
import { PortfolioCategory } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'portfolio'>('home');
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#portfolio/')) {
        const cat = hash.split('/')[1];
        if (cat === 'arrangement') {
          setActiveCategory(PortfolioCategory.ARRANGEMENT);
          setCurrentPage('portfolio');
        } else if (cat === 'mixing') {
          setActiveCategory(PortfolioCategory.MIXING);
          setCurrentPage('portfolio');
        }
      } else {
        setCurrentPage('home');
        setActiveCategory(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPortfolio = (category: PortfolioCategory) => {
    const path = category === PortfolioCategory.ARRANGEMENT ? 'arrangement' : 'mixing';
    window.location.hash = `portfolio/${path}`;
  };

  const navigateHome = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigateHome={navigateHome} />
      
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <div id="portfolio">
                <Portfolio onSelectCategory={navigateToPortfolio} />
              </div>
              <div id="pricing">
                <Pricing />
              </div>
              <div id="order">
                <HowToOrder />
              </div>
              <div id="contact">
                <Contact />
              </div>
              <footer className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">
                <p>© {new Date().getFullYear()} Kami髪. All Rights Reserved.</p>
                <p className="mt-2">Inspired by the pursuit of sound excellence.</p>
              </footer>
            </motion.div>
          ) : (
            <motion.div
              key="portfolio-detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, type: 'spring', damping: 25 }}
            >
              {activeCategory && (
                <PortfolioDetail 
                  category={activeCategory} 
                  onBack={navigateHome} 
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
