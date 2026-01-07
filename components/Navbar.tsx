
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
        className="glass rounded-full px-8 py-3 flex items-center justify-between w-full max-w-5xl border border-slate-200/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] pointer-events-auto"
      >
        <div 
          onClick={onNavigateHome}
          className="text-xl md:text-2xl font-bold tracking-tighter cursor-pointer hover:opacity-80 transition-opacity flex items-center select-none"
        >
          <span className="font-kanit bg-gradient-to-r from-[#40C9FF] to-[#7b61ff] bg-clip-text text-transparent">Kami</span>
          <span className="font-zen font-normal text-white ml-1 md:ml-1.5 translate-y-[-2%]">髪</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-bold text-slate-400 hover:text-white transition-colors duration-300 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button className="text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 bg-white text-black rounded-full active:scale-95 transition-transform">
            Menu
          </button>
        </div>
      </motion.div>
    </nav>
  );
};
