import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiMapPin, FiMessageSquare, FiSend } = FiIcons;

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-bold mb-8">Lass uns etwas <br /> <span className="text-blue-600">bewegen.</span></h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Egal ob technisches Projekt, Marketing-Strategie oder E-Commerce Optimierung – ich freue mich auf den Austausch.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiMail} className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Email</p>
                  <p className="text-lg font-bold">hallo@deinname.de</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiMessageSquare} className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">LinkedIn</p>
                  <p className="text-lg font-bold">/in/deinprofil</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Vorname</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nachname</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">E-Mail Adresse</label>
                <input type="email" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Deine Nachricht</label>
                <textarea rows="5" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Nachricht senden <SafeIcon icon={FiSend} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;