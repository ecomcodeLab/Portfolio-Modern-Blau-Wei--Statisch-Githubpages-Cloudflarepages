import React from 'react';
import { motion } from 'framer-motion';

const Impressum = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate max-w-none"
        >
          <h1 className="text-5xl font-black text-slate-900 mb-12 tracking-tighter italic">Impressum</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Wer ich bin & wo ich stecke</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Billy Kittler<br />
                Demminer Str. 17<br />
                13059 Berlin
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Direkter Draht</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Telefon: +49 1629172941<br />
                E-Mail: <a href="mailto:billykittt@gmail.com" className="text-blue-600 font-medium">billykittt@gmail.com</a>
              </p>
            </section>

            <section className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 italic text-slate-500">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Rechtlicher Kram (muss sein)</h3>
              <p className="text-sm">
                Verantwortlich für den Inhalt nach § 5 TMG ist Billy Kittler. 
                Die EU bietet eine Plattform zur Online-Streitbeilegung an, die du hier findest: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="ml-1 underline">https://ec.europa.eu/consumers/odr/</a>.
                Ich bin nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen – wir klären das lieber direkt unter uns.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Impressum;