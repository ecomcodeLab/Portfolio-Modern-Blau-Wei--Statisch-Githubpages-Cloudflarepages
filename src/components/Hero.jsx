import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useContent } from '../context/ContentContext';

const { FiArrowRight, FiPlay } = FiIcons;

const Hero = () => {
  const { content, loading } = useContent();

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

  if (loading) return <div className="h-screen" />;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-black leading-tight mb-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {content.hero_title?.split(' ').slice(0, 2).join(' ')} <br /> 
            <span className="text-gray-400">{content.hero_title?.split(' ').slice(2).join(' ')}</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            {content.hero_subtitle}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <motion.a 
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.hero_cta_primary} <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            <motion.a 
              href="#work"
              onClick={(e) => scrollToSection(e, '#work')}
              className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiPlay} className="w-5 h-5" /> {content.hero_cta_secondary}
            </motion.a>
          </motion.div>
          {/* ... stats part remains static or can be added to CMS later ... */}
        </div>
      </div>
    </section>
  );
};

export default Hero;