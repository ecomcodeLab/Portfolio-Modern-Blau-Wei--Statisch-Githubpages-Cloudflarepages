import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiCode, FiTarget, FiShoppingCart, FiMonitor, FiCpu } = FiIcons;

const Services = () => {
  const categories = [
    {
      title: "Fullstack Development",
      icon: FiCode,
      skills: ["React & Next.js", "Node.js Backend", "API Integrationen", "UI/UX Design", "Performance Optimierung"],
      description: "Ich entwickle skalierbare Webanwendungen, die nicht nur gut aussehen, sondern auch technisch auf höchstem Niveau performen."
    },
    {
      title: "Performance Marketing",
      icon: FiTarget,
      skills: ["Google & Meta Ads", "SEO Strategien", "Content Marketing", "Data Analytics", "Email Automation"],
      description: "Sichtbarkeit ist alles. Ich helfe Marken dabei, ihre Zielgruppe dort zu erreichen, wo sie sich aufhält – mit messbarem Erfolg."
    },
    {
      title: "Kaufmännische E-Commerce Beratung",
      icon: FiShoppingCart,
      skills: ["Marketplace Management", "Shopsysteme (Shopify/Shopware)", "Prozessoptimierung", "Bestandsmanagement", "Customer Journey"],
      description: "Als gelernter Kaufmann im E-Commerce verstehe ich die Prozesse hinter dem Warenkorb – von der Beschaffung bis zum Versand."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold mb-6">Meine Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ich biete eine einzigartige Kombination aus technischer Umsetzung, marketingstrategischer Planung und kaufmännischer Prozesssteuerung.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-12 p-8 md:p-16 rounded-[3rem] ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white border border-slate-100'}`}
            >
              <div className="md:w-1/2">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8">
                  <SafeIcon icon={cat.icon} className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-6">{cat.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">{cat.description}</p>
              </div>
              <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <SafeIcon icon={FiCheckCircle} className="text-green-500 flex-shrink-0" />
                    <span className="font-medium text-slate-800">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;