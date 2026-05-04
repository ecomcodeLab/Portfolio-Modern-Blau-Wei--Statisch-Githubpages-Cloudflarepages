import React from 'react';
import { motion } from 'framer-motion';

const Datenschutz = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate max-w-none"
        >
          <h1 className="text-5xl font-black text-slate-900 mb-12 tracking-tighter italic">Datenschutz</h1>
          
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Ehrlichkeit gewinnt. Hier erfährst du kurz und knapp, was mit deinen Daten passiert, wenn du auf meiner Seite abhängst. Kein Juristen-Deutsch, sondern Tacheles.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Wer ist verantwortlich?</h2>
            <p className="text-slate-600">
              Das bin ich: Billy Kittler, Demminer Str. 17, 13059 Berlin. Bei Fragen zum Datenschutz schreib mir einfach an <a href="mailto:billykittt@gmail.com" className="text-blue-600">billykittt@gmail.com</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Was wird geloggt?</h2>
            <p className="text-slate-600 mb-4">
              Wenn du die Seite aufrufst, schickt dein Browser automatisch Infos an meinen Provider (Server-Logs). Dazu gehören IP-Adresse, Browsertyp und die Zeit. Das ist technisch notwendig, damit die Seite bei dir überhaupt lädt und sicher bleibt.
            </p>
            <p className="text-slate-600">
              Wenn du mir über das <strong>Kontaktformular</strong> schreibst, speichere ich deine Mail und deinen Namen, um dir antworten zu können. Ich verkaufe deine Daten nicht und spamme dich auch nicht voll. Versprochen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Deine Rechte</h2>
            <p className="text-slate-600">
              Du hast das Sagen. Du kannst jederzeit wissen wollen, was ich über dich gespeichert habe, oder verlangen, dass ich alles lösche. Schreib mir eine kurze Mail und ich kümmere mich drum.
            </p>
          </section>

          <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100">
            <p className="text-blue-900 text-sm italic">
              Zusammengefasst: Ich behandle deine Daten so, wie ich möchte, dass man mit meinen umgeht. Fair und sicher.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Datenschutz;