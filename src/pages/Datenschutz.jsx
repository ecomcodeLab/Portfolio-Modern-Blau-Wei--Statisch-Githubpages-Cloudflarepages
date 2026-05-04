import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants/content';

const Datenschutz = () => {
  return (
    <div className="pt-48 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate max-w-none"
        >
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-16 tracking-tighter italic uppercase leading-none">Datenschutz</h1>
          
          <p className="text-2xl text-slate-500 mb-16 leading-tight font-medium">
            Datenschutz muss nicht kompliziert sein. Hier erfährst du kurz und knapp, was mit deinen Daten passiert. Sicher, fair und transparent.
          </p>

          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight italic">1. Verantwortliche Stelle</h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                {CONTENT.personal.fullName}<br />
                {CONTENT.personal.address}<br />
                E-Mail: <a href={`mailto:${CONTENT.personal.email}`} className="text-blue-600 font-black">{CONTENT.personal.email}</a>
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight italic">2. Datenerfassung</h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed mb-6">
                Wenn du meine Website besuchst, werden automatisch technische Informationen (Logfiles) durch deinen Browser übermittelt. Dazu gehören IP-Adresse, Browsertyp und Uhrzeit. Dies dient der Sicherheit und Stabilität der Website.
              </p>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">
                Persönliche Daten wie Name oder E-Mail werden nur erfasst, wenn du mir diese freiwillig (z.B. per E-Mail oder Kontaktformular) mitteilst.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight italic">3. Deine Rechte</h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">
                Du hast jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck deiner gespeicherten personenbezogenen Daten. Du hast außerdem ein Recht auf Berichtigung oder Löschung dieser Daten.
              </p>
            </section>

            <div className="p-12 bg-blue-50 rounded-[3rem] border border-blue-100 shadow-sm">
              <p className="text-blue-900 text-lg italic font-bold">
                Kurz gesagt: Ich behandle deine Daten so, wie ich möchte, dass man mit meinen umgeht. Mit Respekt und höchster Sorgfalt.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Datenschutz;