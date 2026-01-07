
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
        className="glass rounded-full px-8 py-2 flex items-center justify-between w-full max-w-5xl border border-slate-200/50 dark:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.3)] pointer-events-auto"
      >
        <div 
          onClick={onNavigateHome}
          className="cursor-pointer hover:opacity-80 transition-all active:scale-95 flex items-center select-none"
        >
          <img 
            src="https://media.discordapp.net/attachments/1299703906699575336/1458477742353027102/1111_00000.png?ex=695fc8be&is=695e773e&hm=9407bba6cfea05373b0fb2dd64f7782dca8b0fb5df45281e4dd0529d4ce6bb3c&=&format=webp&quality=lossless" 
            alt="Kami髪 Logo" 
            className="h-8 md:h-11 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
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
          <button className="text-[10px] uppercase tracking-widest font-bold px-5 py-2 bg-white text-black rounded-full active:scale-95 transition-transform shadow-lg">
            Menu
          </button>
        </div>
      </motion.div>
    </nav>
  );
};
