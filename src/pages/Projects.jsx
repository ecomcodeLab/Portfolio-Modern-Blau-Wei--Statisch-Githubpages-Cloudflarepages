import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiExternalLink, FiCode, FiTarget, FiShoppingBag } = FiIcons;

const projects = [
  {
    id: 1,
    title: "E-Commerce Framework",
    category: "Coding",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    desc: "Entwicklung eines Headless-Storefront-Systems.",
    tags: ["React", "Shopify API"]
  },
  {
    id: 2,
    title: "Marketing Analytics Dashboard",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    desc: "Custom Dashboard zur Aggregation von Werbedaten.",
    tags: ["Data Viz", "Node.js"]
  },
  {
    id: 3,
    title: "Shopify Store Automation",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    desc: "Automatisierung von Bestellprozessen via API.",
    tags: ["Automation", "Node.js"]
  }
];

const categories = [
  { id: 'Alle', label: 'Alle Projekte', icon: null },
  { id: 'Coding', label: 'Coding', icon: FiCode },
  { id: 'Marketing', label: 'Marketing', icon: FiTarget },
  { id: 'E-Commerce', label: 'E-Commerce', icon: FiShoppingBag }
];

const Projects = () => {
  const [filter, setFilter] = useState('Alle');
  const filteredProjects = filter === 'Alle' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
            Portfolio<span className="text-blue-600">.</span>
          </h1>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${filter === cat.id ? 'bg-black text-white shadow-xl scale-105' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
            >
              {cat.icon && <SafeIcon icon={cat.icon} className="w-4 h-4" />}
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-xs font-black uppercase text-slate-900 shadow-sm">
                      {proj.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{proj.title}</h3>
                  <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">{proj.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;