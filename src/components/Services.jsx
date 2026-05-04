import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPenTool, FiMonitor, FiSmartphone, FiTrendingUp } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiPenTool,
      title: 'Markenidentität',
      description: 'Wir schaffen unverwechselbare Markenidentitäten, die Ihren Kern auffangen und bei Ihrer Zielgruppe ankommen.',
      features: ['Logo-Design', 'Brand Guidelines', 'Visuelle Identität', 'Markenstrategie']
    },
    {
      icon: FiMonitor,
      title: 'Webentwicklung',
      description: 'Moderne, reaktionsschnelle Websites, gebaut mit modernster Technologie und optimiert für Performance.',
      features: ['Individuelle Entwicklung', 'E-Commerce', 'CMS Integration', 'Performance-Optimierung']
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Apps',
      description: 'Native und plattformübergreifende mobile Anwendungen, die außergewöhnliche Nutzererfahrungen bieten.',
      features: ['iOS Entwicklung', 'Android Entwicklung', 'React Native', 'App Store Optimierung']
    },
    {
      icon: FiTrendingUp,
      title: 'Digitale Strategie',
      description: 'Umfassende digitale Strategien, um Ihr Geschäft auszubauen und Ihre Zielgruppe effektiv zu erreichen.',
      features: ['SEO-Optimierung', 'Content-Strategie', 'Analysen', 'Growth Hacking']
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir bieten umfassende digitale Lösungen, um Ihrem Unternehmen in der modernen Welt zum Erfolg zu verhelfen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              onClick={scrollToContact}
              className="group p-8 rounded-3xl bg-gray-50 hover:bg-black transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6">
                <SafeIcon icon={service.icon} className="w-12 h-12 text-black group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-black group-hover:text-white transition-colors duration-500 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-700 group-hover:text-gray-200 transition-colors duration-500 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full transition-colors duration-500"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;