import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiAward, FiCoffee, FiHeart } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiUsers,
      title: 'Zusammenarbeit',
      description: 'Wir glauben an die enge Zusammenarbeit mit unseren Kunden, um die besten Ergebnisse zu erzielen.'
    },
    {
      icon: FiAward,
      title: 'Exzellenz',
      description: 'Wir streben nach Perfektion in jedem Projekt, egal wie groß oder klein es ist.'
    },
    {
      icon: FiCoffee,
      title: 'Innovation',
      description: 'Wir bleiben am Puls der Zeit mit den neuesten Technologien und Designtrends.'
    },
    {
      icon: FiHeart,
      title: 'Leidenschaft',
      description: 'Wir lieben, was wir tun, und das zeigt sich in jedem Projekt, das wir abliefern.'
    }
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">
              Über unser Studio
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Wir sind ein Team aus leidenschaftlichen Designern und Entwicklern mit Sitz in Amsterdam, das sich der Schaffung außergewöhnlicher digitaler Erlebnisse verschrieben hat.
            </p>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Gegründet im Jahr 2019, hatten wir das Privileg, mit Startups, etablierten Marken und allen dazwischen zusammenzuarbeiten. Unser Ansatz kombiniert strategisches Denken mit kreativer Ausführung.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-black mb-2">150+</div>
                <div className="text-gray-600">Projekte geliefert</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black mb-2">50+</div>
                <div className="text-gray-600">Glückliche Kunden</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black mb-2">15</div>
                <div className="text-gray-600">Teammitglieder</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black mb-2">5</div>
                <div className="text-gray-600">Jahre Erfahrung</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team Zusammenarbeit" 
              className="rounded-3xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-black text-white p-6 rounded-2xl">
              <div className="text-2xl font-bold mb-1">5 Jahre</div>
              <div className="text-gray-300">Exzellenz</div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-black mb-6">Unsere Werte</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diese Grundwerte leiten unser gesamtes Handeln und prägen die Zusammenarbeit mit unseren Kunden.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-xl font-bold text-black mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;