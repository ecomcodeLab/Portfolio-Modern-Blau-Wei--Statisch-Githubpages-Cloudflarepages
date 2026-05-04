import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlus, FiMinus } = FiIcons;

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-8 rounded-[2.5rem] transition-all duration-300 flex items-center justify-between gap-4 ${isOpen ? 'bg-slate-900 text-white shadow-2xl' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}
      >
        <span className="text-xl font-bold tracking-tight">{question}</span>
        <div className={`p-2 rounded-full ${isOpen ? 'bg-blue-600' : 'bg-white shadow-sm'}`}>
          <SafeIcon icon={isOpen ? FiMinus : FiPlus} className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-blue-600'}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="px-8 py-6 text-slate-600 text-lg leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Was kostet der Spaß am Ende?",
      answer: "Ganz ehrlich: 'Kommt drauf an' ist die einzig wahre Antwort. Ein simples Portfolio ist schneller fertig als eine komplexe Web-App mit Backend-Anbindung und State-Management. Ich arbeite mit Festpreisen, damit du keine bösen Überraschungen erlebst. Wir quatschen kurz, ich schau mir den Scope an und du kriegst eine Zahl."
    },
    {
      question: "Mit was für Tech-Stack arbeitest du?",
      answer: "Ich bin kein Fan von überladenem WordPress-Baukasten-Müll. Ich baue auf Performance: React für das Frontend, Tailwind CSS für das Styling und Node.js, wenn wir Power im Backend brauchen. Das Ergebnis ist Clean Code, der auf jedem Device rennt und verdammt gut aussieht."
    },
    {
      question: "Wie lange hängen wir zusammen, bis die Seite live geht?",
      answer: "Wenn du deine Texte und Bilder am Start hast, dauert ein Standard-Projekt meistens 4 bis 6 Wochen. Wir gehen dabei iterativ vor – du kriegst regelmäßig Updates und wir feilen gemeinsam an den Details, bis das UX-Design perfekt sitzt."
    },
    {
      question: "Was passiert, wenn die Seite fertig ist?",
      answer: "Ich lass dich nicht im Regen stehen. Wenn du willst, kümmere ich mich um das Hosting, SSL-Zertifikate und regelmäßige Security-Patches. Eine Website ist wie ein Auto – ab und zu braucht sie mal einen Service, damit sie sicher auf der digitalen Straße bleibt."
    },
    {
      question: "Kannst du meine alte Seite aufpolieren?",
      answer: "Klar, Refactoring ist mein Ding. Ich analysiere deine bestehende Seite auf SEO-Performance und Core Web Vitals. Oft macht eine Migration auf einen modernen Stack mehr Sinn als an altem Code rumzuflicken, aber das entscheiden wir zusammen nach dem Audit."
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter italic">Fragen?<br />Antworten.</h1>
          <p className="text-xl text-slate-500 max-w-2xl">Hier gibts kein Marketing-Blabla, sondern direkte Antworten auf das, was dich wahrscheinlich gerade beschäftigt.</p>
        </div>

        <div className="mb-20">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>

        <div className="p-12 bg-blue-600 rounded-[3rem] text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-4 tracking-tight">Immer noch unsicher?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-md">Schreib mir einfach direkt bei WhatsApp oder per Mail. Ich beiße nicht und helfe dir gerne weiter.</p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:billykittt@gmail.com" className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-slate-100 transition-all">Mail schreiben</a>
              <a href="tel:+491629172941" className="px-8 py-4 bg-blue-700 text-white rounded-2xl font-bold hover:bg-blue-800 transition-all">+49 1629172941</a>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;