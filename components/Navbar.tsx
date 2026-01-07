
import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onNavigateHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateHome }) => {
  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'How to Order', href: '#order' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (window.location.hash !== '') {
      onNavigateHome();
      // Small delay to allow home to mount before scrolling
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-center pointer-events-none">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-full px-8 py-3.5 flex items-center justify-between w-full max-w-5xl border border-slate-200/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.6)] pointer-events-auto"
      >
        <div 
          onClick={onNavigateHome}
          className="text-2xl md:text-3xl font-bold tracking-tight cursor-pointer hover:opacity-80 transition-opacity flex items-center select-none"
        >
          <span className="font-kanit bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(14,165,233,0.2)]">Kami</span>
          <span className="font-zen text-white ml-1 drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]">髪</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-bold text-white hover:text-sky-300 transition-all duration-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button className="text-xs font-bold px-4 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full active:scale-95 transition-transform">
            Menu
          </button>
        </div>
      </motion.div>
    </nav>
  );
};
