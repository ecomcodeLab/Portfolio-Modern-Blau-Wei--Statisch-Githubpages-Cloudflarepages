import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants/content';

const Impressum = () => {
  const replacePlaceholders = (text) => {
    return text
      .replace(/{fullName}/g, CONTENT.personal.fullName)
      .replace(/{address}/g, CONTENT.personal.address)
      .replace(/{email}/g, CONTENT.personal.email)
      .replace(/{phone}/g, CONTENT.personal.phone)
      .replace(/{taxId}/g, CONTENT.personal.taxId);
  };

  return (
    <div className="pt-48 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-16 tracking-tighter italic uppercase leading-none">
            {CONTENT.legal.impressum.title}
          </h1>
          
          <div className="space-y-16">
            {CONTENT.legal.impressum.sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight italic">
                  {section.heading}
                </h2>
                <div className="text-slate-500 text-xl font-medium leading-relaxed whitespace-pre-line">
                  {replacePlaceholders(section.content)}
                </div>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Impressum;