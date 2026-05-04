import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants/content';

const Impressum = () => {
  return (
    <div className="pt-48 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate max-w-none"
        >
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-16 tracking-tighter italic uppercase leading-none">Impressum</h1>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight italic">Angaben gemäß § 5 TMG</h2>
              <p className="text-slate-500 leading-relaxed text-xl font-medium">
                {CONTENT.personal.fullName}<br />
                {CONTENT.personal.address}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight italic">Kontakt</h2>
              <p className="text-slate-500 leading-relaxed text-xl font-medium">
                Telefon: {CONTENT.personal.phone}<br />
                E-Mail: <a href={`mailto:${CONTENT.personal.email}`} className="text-blue-600 font-black hover:underline">{CONTENT.personal.email}</a>
              </p>
            </section>

            <section className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-inner">
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic">Streitbeilegung</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-600 font-bold underline">https://ec.europa.eu/consumers/odr/</a>.
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Impressum;