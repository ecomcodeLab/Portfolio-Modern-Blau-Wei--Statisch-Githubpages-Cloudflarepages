import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants/content';

const Partners = () => {
  // Triple the partners for a seamless infinite loop
  const duplicatedPartners = [...CONTENT.partners, ...CONTENT.partners, ...CONTENT.partners];

  return (
    <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4 block"
        >
          Referenzen
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight"
        >
          Zusammengearbeitet mit
        </motion.h2>
      </div>
      
      {/* 
          Container with max-width to center the slider 
          and prevent it from being "full-width" 
      */}
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Gradient overlays for smooth fading edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-12 md:gap-20 items-center whitespace-nowrap"
            animate={{ x: [0, -1200] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {duplicatedPartners.map((partner, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center gap-4 grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100 group min-w-[120px]"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-8 md:h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <span className="text-[9px] font-black text-slate-400 group-hover:text-blue-600 tracking-wider transition-colors uppercase">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;