import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSend, FiCheckCircle, FiShield, FiMessageSquare } = FiIcons;

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', captcha: '' });
  const [captchaChallenge, setCaptchaChallenge] = useState({ a: 0, b: 0, result: 0 });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptchaChallenge({ a, b, result: a + b });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (parseInt(formData.captcha) !== captchaChallenge.result) {
      alert("Captcha ist falsch. Bitte rechnen Sie noch einmal.");
      generateCaptcha();
      setFormData({ ...formData, captcha: '' });
      return;
    }

    setStatus('submitting');
    // Simulation API Call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="bg-blue-600 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-blue-200"
      >
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <SafeIcon icon={FiCheckCircle} className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-3xl font-bold mb-4">Nachricht gesendet!</h3>
        <p className="text-blue-100 mb-8">Ich melde mich innerhalb von 24 Stunden bei Ihnen.</p>
        <button 
          onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', message: '', captcha: '' }); generateCaptcha(); }}
          className="px-8 py-3 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-colors"
        >
          Neue Nachricht
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <SafeIcon icon={FiMessageSquare} className="w-32 h-32 text-blue-600" />
      </div>
      
      <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
            <input 
              required
              type="text" 
              placeholder="Max Mustermann"
              className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">E-Mail</label>
            <input 
              required
              type="email" 
              placeholder="max@beispiel.de"
              className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1">Ihre Nachricht</label>
          <textarea 
            required
            rows="4" 
            placeholder="Erzählen Sie mir von Ihrem Projekt..."
            className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>

        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-3 text-slate-600 font-bold">
            <SafeIcon icon={FiShield} className="text-blue-600 w-5 h-5" />
            <span>Sicherheitscheck:</span>
            <span className="bg-white px-3 py-1 rounded-lg border border-slate-200">
              {captchaChallenge.a} + {captchaChallenge.b} = ?
            </span>
          </div>
          <input 
            required
            type="number" 
            placeholder="Ergebnis"
            className="w-full sm:w-32 px-4 py-2 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
            value={formData.captcha}
            onChange={(e) => setFormData({...formData, captcha: e.target.value})}
          />
        </div>

        <button 
          disabled={status === 'submitting'}
          className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Wird gesendet...' : 'Projektanfrage senden'}
          <SafeIcon icon={FiSend} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;