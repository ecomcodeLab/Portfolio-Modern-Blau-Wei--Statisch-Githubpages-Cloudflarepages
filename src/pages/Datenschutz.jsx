import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants/content';

const Datenschutz = () => {
  const replacePlaceholders = (text) => {
    return text
      .replace(/{fullName}/g, CONTENT.personal.fullName)
      .replace(/{address}/g, CONTENT.personal.address)
      .replace(/{email}/g, CONTENT.personal.email);
  };

  return (
    <div className="pt-48 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate max-w-none"
        >
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-16 tracking-tighter italic uppercase leading-none">
            {CONTENT.legal.datenschutz.title}
          </h1>
          
          <p className="text-2xl text-slate-500 mb-16 leading-tight font-medium">
            {CONTENT.legal.datenschutz.intro}
          </p>

          <div className="space-y-16">
            {CONTENT.legal.datenschutz.sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight italic">
                  {section.heading}
                </h2>
                <div className="text-slate-500 text-xl font-medium leading-relaxed whitespace-pre-line">
                  {replacePlaceholders(section.content)}
                </div>
              </section>
            ))}

            <div className="p-12 bg-blue-50 rounded-[3rem] border border-blue-100 shadow-sm">
              <p className="text-blue-900 text-lg italic font-bold">
                {CONTENT.legal.datenschutz.footerNote}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Datenschutz;