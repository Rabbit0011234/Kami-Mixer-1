
import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const contacts = [
    {
      name: 'Twitter / X',
      id: '@kami_2376',
      url: 'https://x.com/kami_2376',
      color: 'bg-black text-white dark:bg-white dark:text-black',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Discord',
      id: 'kamipopolza1',
      url: 'https://discord.com/users/kamipopolza1',
      color: 'bg-[#5865F2] text-white',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01a13.525 13.525 0 0 0 12.045 0a.074.074 0 0 1 .078.01c.12.098.246.198.372.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      id: 'Kaitomusic12345@gmail.com',
      url: 'mailto:Kaitomusic12345@gmail.com',
      color: 'bg-white text-slate-900 border border-slate-200 dark:bg-black dark:text-white dark:border-slate-800',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto text-center">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let's Create Together</h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg font-bold max-w-xl mx-auto">
          Available for new commissions. Choose your preferred platform to start a conversation.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-32">
        {contacts.map((contact, idx) => (
          <motion.a
            key={contact.name}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full md:w-auto min-w-[280px] p-6 rounded-3xl flex flex-col items-center gap-4 shadow-xl transition-shadow hover:shadow-2xl ${contact.color}`}
          >
            <div className="p-3 bg-white/10 rounded-2xl">
              {contact.icon}
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest font-bold opacity-70 mb-1">{contact.name}</div>
              <div className="text-lg font-bold">{contact.id}</div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Reduced decorative section for a cleaner look */}
      <div className="flex justify-center items-center gap-12 opacity-5 select-none overflow-hidden py-10 pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <span key={i} className="text-xl md:text-3xl font-bold tracking-widest whitespace-nowrap">
            Form Delta <span className="text-lg">▿</span>
          </span>
        ))}
      </div>
    </section>
  );
};
