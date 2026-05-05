import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { CONTENT } from '../constants/content';

const { FiArrowRight, FiPlay } = FiIcons;

const Hero = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const { hero } = CONTENT.home;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
      {/* Dekorative Elemente für bessere Zentrierungs-Optik */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-[0.2em] inline-block"
          >
            {hero.badge}
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block">{hero.titleMain}</span>
            <span className="block text-blue-600">{hero.titleAccent}</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            {hero.description}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <motion.a 
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-blue-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {hero.ctaPrimary} <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            <motion.a 
              href="#work"
              onClick={(e) => scrollToSection(e, '#work')}
              className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-full text-lg font-bold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiPlay} className="w-5 h-5" /> {hero.ctaSecondary}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;