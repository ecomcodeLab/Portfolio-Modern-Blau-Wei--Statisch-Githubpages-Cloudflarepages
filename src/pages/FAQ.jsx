import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { CONTENT } from '../constants/content';

const { FiPlus, FiMinus } = FiIcons;

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase italic group-hover:text-blue-600 transition-colors">
          {question}
        </span>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-blue-600 text-white rotate-45' : 'bg-slate-100 text-slate-900'}`}>
          <SafeIcon icon={FiPlus} className="text-2xl" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <span className="text-blue-600 font-black tracking-widest uppercase text-sm mb-6 block">FAQ</span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter italic uppercase leading-[0.8] mb-8">
              {CONTENT.faqs.title.split(' ')[0]}<br />
              <span className="text-slate-200">{CONTENT.faqs.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-tight">
              {CONTENT.faqs.description}
            </p>
          </div>
          
          <div className="lg:col-span-8">
            <div className="bg-slate-50 p-8 md:p-16 rounded-[4rem] border border-slate-100">
              {CONTENT.faqs.items.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;