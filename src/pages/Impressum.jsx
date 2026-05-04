import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants/content';

const Impressum = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
        >
          <h1 className="text-4xl font-bold mb-8">Impressum</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Angaben gemäß § 5 TMG</h2>
            <p className="text-gray-600 leading-relaxed">
              {CONTENT.personal.fullName}<br />
              {CONTENT.personal.address.split(',')[0]}<br />
              {CONTENT.personal.address.split(',')[1]?.trim()}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Kontakt</h2>
            <p className="text-gray-600 leading-relaxed">
              Telefon: {CONTENT.personal.phone}<br />
              E-Mail: {CONTENT.personal.email}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Umsatzsteuer-ID</h2>
            <p className="text-gray-600 leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              {CONTENT.personal.taxId}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Streitbeilegung</h2>
            <p className="text-gray-600 leading-relaxed">
              {CONTENT.personal.disputeResolution}
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Impressum;