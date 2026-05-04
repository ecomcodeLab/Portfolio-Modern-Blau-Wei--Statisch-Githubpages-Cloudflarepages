import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants/content';

const Partners = () => {
  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = [...CONTENT.partners, ...CONTENT.partners];

  return (
    <section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 text-center">
          Zusammengearbeitet mit
        </h2>
      </div>
      
      <div className="relative flex">
        <motion.div 
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedPartners.map((partner, i) => (
            <div key={i} className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-8 md:h-12 w-auto object-contain"
              />
              <span className="text-[10px] font-bold text-slate-400">{partner.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;