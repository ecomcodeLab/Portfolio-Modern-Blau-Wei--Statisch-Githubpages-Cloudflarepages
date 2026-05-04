import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiArrowLeft } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Lassen Sie uns zusammenarbeiten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bereit, Ihr nächstes Projekt zu starten? Wir freuen uns darauf, von Ihnen zu hören und zu besprechen, wie wir Ihre Vision zum Leben erwecken können.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-black mb-8">Kontakt Details</h3>
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiMail} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-black">Email</div>
                  <div className="text-gray-600">hallo@buildstudio.de</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiPhone} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-black">Telefon</div>
                  <div className="text-gray-600">+49 30 123 4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiMapPin} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-black">Standort</div>
                  <div className="text-gray-600">Berlin, Deutschland</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-black mb-4">Öffnungszeiten</h4>
              <div className="text-gray-600 space-y-2">
                <div>Montag - Freitag: 09:00 - 18:00 Uhr</div>
                <div>Samstag: 10:00 - 16:00 Uhr</div>
                <div>Sonntag: Geschlossen</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative min-h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Unternehmen
                    </label>
                    <input 
                      type="text" 
                      name="company" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nachricht *
                    </label>
                    <textarea 
                      name="message" 
                      required 
                      rows={6} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200 resize-none"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Erzählen Sie uns von Ihrem Projekt..."
                      disabled={isSubmitting}
                    />
                  </div>
                  <motion.button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full bg-black text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'}`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Nachricht senden <SafeIcon icon={FiSend} className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  className="h-full flex flex-col items-center justify-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", damping: 12 }}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
                  >
                    <SafeIcon icon={FiCheckCircle} className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-black mb-4">Nachricht gesendet!</h3>
                  <p className="text-gray-600 mb-8 max-w-sm">
                    Vielen Dank für Ihre Nachricht. Wir haben sie erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
                  </p>
                  <button 
                    onClick={resetForm}
                    className="flex items-center gap-2 text-black font-semibold hover:gap-4 transition-all duration-300 group"
                  >
                    <SafeIcon icon={FiArrowLeft} className="w-4 h-4" /> Weitere Nachricht senden
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;