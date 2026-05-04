import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { CONTENT } from '../constants/content';

const { FiExternalLink, FiArrowRight, FiArrowLeft } = FiIcons;

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-32 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter italic leading-[0.9]">
              AUSGEWÄHLTE<br />PROJEKTE
            </h2>
            <p className="text-xl text-slate-500">
              Ein Einblick in meine jüngsten Arbeiten – von Branding bis Full-Stack Apps.
            </p>
          </motion.div>

          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Nach links scrollen"
            >
              <SafeIcon icon={FiArrowLeft} className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Nach rechts scrollen"
            >
              <SafeIcon icon={FiArrowRight} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2))] pb-12 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CONTENT.projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex-none w-[85vw] md:w-[450px] lg:w-[550px] snap-start group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-[16/10] shadow-2xl">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-900">
                    <SafeIcon icon={FiExternalLink} className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-blue-600 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300 tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-slate-500 leading-relaxed line-clamp-2 font-medium">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;