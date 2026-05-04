import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Projects from '../components/Projects';
import Partners from '../components/Partners';
import { CONTENT } from '../constants/content';

const { FiArrowRight, FiCode, FiZap, FiLayout } = FiIcons;

const Home = () => {
  const serviceIcons = [FiZap, FiCode, FiLayout];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-black tracking-widest uppercase mb-8">
              {CONTENT.hero.badge}
            </span>
            <h1 className="text-6xl md:text-[9rem] font-black text-slate-900 tracking-tighter leading-[0.8] mb-12 italic uppercase">
              {CONTENT.hero.titleMain.split(' ')[0]}<br />
              <span className="text-blue-600">{CONTENT.hero.titleMain.split(' ').slice(1).join(' ')}</span><br />
              <span className="text-slate-200">{CONTENT.hero.titleAccent}</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 max-w-2xl leading-tight mb-12 font-medium">
              {CONTENT.hero.description}
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href={`mailto:${CONTENT.personal.email}`}
                className="px-10 py-5 bg-slate-900 text-white rounded-[2rem] font-black text-lg hover:bg-blue-600 transition-all flex items-center gap-3 group shadow-2xl"
              >
                {CONTENT.hero.ctaPrimary} <SafeIcon icon={FiArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/faq"
                className="px-10 py-5 bg-slate-100 text-slate-900 rounded-[2rem] font-black text-lg hover:bg-slate-200 transition-all border border-slate-200"
              >
                {CONTENT.hero.ctaSecondary}
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute -right-40 top-40 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] -z-10 opacity-40"></div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Services/Philosophy */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4 block">Services</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter italic">WIE ICH DIR<br />HELFEN KANN.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CONTENT.services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-slate-50 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <SafeIcon icon={serviceIcons[i]} className="text-3xl" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase italic">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none uppercase italic">
              BEREIT FÜR<br />DAS NÄCHSTE LEVEL?
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
              Lass uns unverbindlich über dein Projekt sprechen und schauen, wie wir deine Vision Realität werden lassen.
            </p>
            <a 
              href={`mailto:${CONTENT.personal.email}`}
              className="inline-flex px-12 py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-blue-500 transition-all shadow-2xl active:scale-95"
            >
              Jetzt Projekt anfragen
            </a>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;