import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowUpRight } = FiIcons;

const LetsTalk = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative group cursor-pointer">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <span className="text-gray-500 text-lg md:text-xl font-medium mb-8 uppercase tracking-widest">
              Haben Sie ein Projekt im Kopf?
            </span>
            <a href="#contact" className="relative inline-block group">
              <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white leading-none transition-all duration-500 group-hover:text-gray-400">
                REDEN WIR <motion.span 
                  className="inline-block ml-4 align-middle"
                  animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <SafeIcon icon={FiArrowUpRight} className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" />
                </motion.span>
              </h2>
              <div className="absolute bottom-0 left-0 w-0 h-2 bg-white transition-all duration-500 group-hover:w-full"></div>
            </a>
          </motion.div>

          <div className="mt-20 grid md:grid-cols-3 gap-12 border-t border-gray-800 pt-12">
            <div>
              <p className="text-gray-500 mb-4 uppercase tracking-wider text-sm">Neue Anfragen</p>
              <p className="text-white text-xl hover:text-gray-300 transition-colors cursor-pointer">
                hallo@buildstudio.de
              </p>
            </div>
            <div>
              <p className="text-gray-500 mb-4 uppercase tracking-wider text-sm">Allgemeines</p>
              <p className="text-white text-xl hover:text-gray-300 transition-colors cursor-pointer">
                info@buildstudio.de
              </p>
            </div>
            <div>
              <p className="text-gray-500 mb-4 uppercase tracking-wider text-sm">Social Media</p>
              <div className="flex gap-6 text-white text-xl">
                {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="hover:text-gray-400 transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;