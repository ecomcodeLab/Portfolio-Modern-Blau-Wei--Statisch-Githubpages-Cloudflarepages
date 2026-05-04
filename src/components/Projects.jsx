import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiExternalLink, FiArrowRight, FiArrowLeft } = FiIcons;

const projects = [
  {
    title: 'Minimalistischer E-Commerce',
    category: 'Webentwicklung',
    description: 'Eine saubere, moderne E-Commerce-Plattform mit nahtloser Benutzererfahrung.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Stripe']
  },
  {
    title: 'Markenidentitätssystem',
    category: 'Branding',
    description: 'Vollständige Neugestaltung der Markenidentität für ein wachstumsstarkes Tech-Startup.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Identität', 'Strategie']
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Entwicklung',
    description: 'Intuitive Mobile-Banking-Anwendung mit fortschrittlichen Sicherheitsfunktionen.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'UX']
  },
  {
    title: 'SaaS Dashboard',
    category: 'Webanwendung',
    description: 'Umfassendes Dashboard für eine SaaS-Plattform mit Echtzeit-Analysen.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Charts']
  },
  {
    title: 'Urbane Architektur',
    category: 'Webentwicklung',
    description: 'High-End-Portfolio für ein Architekturbüro mit Fokus auf minimalistisches Design.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Portfolio', 'GSAP']
  }
];

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
    <section id="work" className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Ausgewählte Projekte
            </h2>
            <p className="text-xl text-gray-600">
              Ein Einblick in unsere jüngsten Arbeiten, die unser Engagement für Exzellenz und Innovation zeigen.
            </p>
          </motion.div>

          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              aria-label="Nach links scrollen"
            >
              <SafeIcon icon={FiArrowLeft} className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex-none w-[85vw] md:w-[450px] lg:w-[550px] snap-start group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[16/10]">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <SafeIcon icon={FiExternalLink} className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {project.description}
                </p>
                <motion.div 
                  className="inline-flex items-center gap-2 text-black font-medium group-hover:gap-4 transition-all duration-300"
                >
                  Fallstudie ansehen <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            className="flex-none w-[85vw] md:w-[450px] lg:w-[550px] snap-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: projects.length * 0.1 }}
            viewport={{ once: true }}
          >
            <Link to="/projects" className="block h-full">
              <div className="h-full min-h-[400px] border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center p-12 group hover:border-black transition-colors duration-500">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                  <SafeIcon icon={FiArrowRight} className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Alle Projekte</h3>
                <p className="text-gray-500 text-center">Entdecken Sie unser gesamtes Portfolio an digitalen Erlebnissen und Markenidentitäten.</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;