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
      // Scroll by roughly 80% of the visible width
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-32 bg-white overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-tight">
            Ausgewählte Projekte
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl font-medium">
            Ein Einblick in meine jüngsten Arbeiten – von Branding bis Full-Stack Apps.
          </p>

          <div className="flex gap-3 mt-10">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              aria-label="Nach links scrollen"
            >
              <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              aria-label="Nach rechts scrollen"
            >
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Projects Slider - Now with margins and centering */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CONTENT.projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex-none w-[85vw] md:w-[450px] lg:w-[500px] snap-start group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[16/10] bg-slate-100">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl">
                    <SafeIcon icon={FiExternalLink} className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter"
                      >
                        # {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300 tracking-tight uppercase">
                  {project.title}
                </h3>
                <p className="text-slate-500 leading-relaxed line-clamp-2 text-sm">
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