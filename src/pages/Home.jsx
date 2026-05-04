import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiCode, FiZap, FiLayout } = FiIcons;

const Home = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-black tracking-widest uppercase mb-6">
              Senior Web Developer
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8 italic">
              ICH BAUE<br />
              <span className="text-blue-600">WEB-STUFF,</span><br />
              DER PERFORMT.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed mb-10">
              Vergiss langsame Baukasten-Seiten. Ich entwickle High-End Interfaces mit React & Node.js – Clean Code, krasse UX und messbare Ergebnisse.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:billykittt@gmail.com"
                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all flex items-center gap-3 group"
              >
                Projekt anfragen <SafeIcon icon={FiArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/faq"
                className="px-8 py-4 bg-slate-100 text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all"
              >
                Wie ich arbeite
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute -right-20 top-40 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] -z-10 opacity-60"></div>
      </section>

      {/* Services/Philosophy */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FiZap, title: "Performance First", text: "Deine Seite muss rennen. Ich optimiere bis zum letzten Byte, damit die Core Web Vitals im grünen Bereich sind." },
              { icon: FiCode, title: "Modern Stack", text: "React, Tailwind, Node.js. Kein veralteter Kram, sondern zukunftssichere Tech-Lösungen für maximale Scalability." },
              { icon: FiLayout, title: "UX-Driven", text: "Design ist nicht nur Deko. Ich baue Interfaces, die intuitiv sind und deine User wirklich abholen." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <SafeIcon icon={item.icon} className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;