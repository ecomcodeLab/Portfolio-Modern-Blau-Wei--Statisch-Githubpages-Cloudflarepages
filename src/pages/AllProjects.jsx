import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiExternalLink, FiX, FiInfo, FiTag, FiClock, FiMaximize2 } = FiIcons;

const projects = [
  { id: 1, title: 'Minimalistischer E-Commerce', category: 'Webentwicklung', description: 'Eine saubere, moderne E-Commerce-Plattform mit nahtloser Benutzererfahrung.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', tags: ['React', 'Node.js', 'Stripe'], client: 'Nordic Goods', year: '2023' },
  { id: 2, title: 'Markenidentitätssystem', category: 'Branding', description: 'Vollständige Neugestaltung der Markenidentität für ein Tech-Startup.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', tags: ['Identität', 'Strategie'], client: 'Vortex AI', year: '2023' },
  { id: 3, title: 'Mobile Banking App', category: 'Mobile Entwicklung', description: 'Intuitive Mobile-Banking-Anwendung mit fortschrittlicher Sicherheit.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', tags: ['React Native', 'UX'], client: 'SwiftBank', year: '2024' },
  { id: 4, title: 'SaaS Dashboard', category: 'Webanwendung', description: 'Umfassendes Dashboard mit Echtzeit-Analysen.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', tags: ['Dashboard', 'Next.js'], client: 'DataFlow', year: '2024' },
  { id: 5, title: 'Urbane Architektur', category: 'Webentwicklung', description: 'High-End-Portfolio für ein Architekturbüro.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', tags: ['GSAP', 'React'], client: 'Studio Amsterdam', year: '2023' },
  { id: 6, title: 'Lifestyle Magazin', category: 'Branding', description: 'Digitales und gedrucktes Editorial-Design.', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', tags: ['Editorial', 'UI/UX'], client: 'Currents Mag', year: '2023' }
];

const categories = ['Alle', 'Webentwicklung', 'Branding', 'Mobile Entwicklung', 'Webanwendung'];

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);
  
  const filteredProjects = selectedCategory === 'Alle' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="bg-white min-h-screen overflow-hidden flex flex-col pt-24">
      <div className="px-6 lg:px-12 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-6 group">
            <SafeIcon icon={FiArrowLeft} className="group-hover:-translate-x-1 transition-transform" /> Zurück zur Startseite
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">Unser Portfolio</h1>
              <p className="text-lg text-gray-600 max-w-xl">Kuratierte digitale Erlebnisse und Markenidentitäten.</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    selectedCategory === cat 
                      ? 'bg-black text-white border-black' 
                      : 'bg-transparent text-gray-500 border-gray-200 hover:border-black hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative flex-1 flex flex-col min-h-0">
        <div 
          ref={scrollRef}
          className="flex-1 flex overflow-x-auto gap-8 px-6 lg:px-12 items-center no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex-none w-[80vw] md:w-[500px] lg:w-[650px] snap-center group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-gray-100">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                      <SafeIcon icon={FiMaximize2} className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="flex-none w-12 h-1" />
        </div>

        <div className="px-6 lg:px-12 py-12 flex items-center gap-6">
          <div className="h-[2px] flex-1 bg-gray-100 relative rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-black origin-left"
              style={{ scaleX }}
            />
          </div>
          <div className="text-sm font-mono text-gray-400">
            SCROLLEN ZUM ENTDECKEN
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[3rem] w-full max-w-6xl max-h-[90vh] overflow-hidden relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-50 w-12 h-12 bg-gray-100 hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 h-[40vh] md:h-auto overflow-hidden">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8 md:p-16 overflow-y-auto">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 block">{selectedProject.category}</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">{selectedProject.title}</h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-12">{selectedProject.description}</p>
                  
                  <div className="grid grid-cols-2 gap-8 mb-12 border-t border-gray-100 pt-8">
                    <div>
                      <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mb-2"><SafeIcon icon={FiInfo} className="w-3 h-3"/> Kunde</div>
                      <div className="font-bold text-black text-lg">{selectedProject.client}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mb-2"><SafeIcon icon={FiClock} className="w-3 h-3"/> Jahr</div>
                      <div className="font-bold text-black text-lg">{selectedProject.year}</div>
                    </div>
                  </div>

                  <div className="mb-12">
                    <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mb-4"><SafeIcon icon={FiTag} className="w-3 h-3"/> Technologien</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-xl text-sm font-medium border border-gray-100">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <button className="group w-full bg-black text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all">
                    Projekt besuchen <SafeIcon icon={FiExternalLink} className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllProjects;