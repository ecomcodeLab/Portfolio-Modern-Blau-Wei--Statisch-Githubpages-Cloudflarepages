import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { CONTENT } from '../constants/content';

const { FiPlus, FiMinus } = FiIcons;

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-8 rounded-[2.5rem] transition-all duration-500 flex items-center justify-between gap-4 ${isOpen ? 'bg-slate-900 text-white shadow-2xl scale-[1.02]' : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-transparent hover:border-slate-200'}`}
      >
        <span className="text-xl font-black tracking-tight italic uppercase">{question}</span>
        <div className={`p-2 rounded-full transition-colors duration-500 ${isOpen ? 'bg-blue-600' : 'bg-white shadow-sm'}`}>
          <SafeIcon icon={isOpen ? FiMinus : FiPlus} className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-blue-600'}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="px-10 py-8 text-slate-500 text-lg leading-relaxed font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="pt-48 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-24">
          <span className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4 block">Knowledge Base</span>
          <h1 className="text-6xl md:text-[8rem] font-black text-slate-900 mb-10 tracking-tighter leading-[0.8] italic uppercase">
            FRAGEN?<br />ANTWORTEN.
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
            Hier findest du direkte Antworten auf die häufigsten Fragen. Kein Marketing-Blabla, sondern Tacheles.
          </p>
        </div>

        <div className="mb-24">
          {CONTENT.faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>

        <div className="p-12 md:p-20 bg-blue-600 rounded-[4rem] text-white overflow-hidden relative shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter italic uppercase leading-none">Immer noch<br />unsicher?</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-md font-medium">Schreib mir einfach direkt per Mail oder ruf an. Ich helfe dir gerne weiter.</p>
            <div className="flex flex-wrap gap-6">
              <a href={`mailto:${CONTENT.personal.email}`} className="px-10 py-5 bg-white text-blue-600 rounded-[2rem] font-black text-lg hover:bg-slate-100 transition-all shadow-xl">Mail schreiben</a>
              <a href={`tel:${CONTENT.personal.phone}`} className="px-10 py-5 bg-blue-700 text-white rounded-[2rem] font-black text-lg hover:bg-blue-800 transition-all border border-blue-500/30">{CONTENT.personal.phone}</a>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-400 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;