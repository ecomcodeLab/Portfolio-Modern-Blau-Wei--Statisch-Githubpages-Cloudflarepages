// Version: 1.2.0 - Site Footer
import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { CONTENT } from '../constants/content';

const { FiMail, FiPhone } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-black tracking-tighter text-slate-900 mb-6 block italic">
              {CONTENT.personal.name}<span className="text-blue-600">.{CONTENT.personal.lastName.charAt(0)}</span>
            </Link>
            <p className="text-slate-500 text-lg max-w-md leading-relaxed">
              {CONTENT.personal.about}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs text-blue-600">Navigation</h4>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/faq" className="hover:text-blue-600 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs text-blue-600">Kontakt</h4>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-center gap-3">
                <SafeIcon icon={FiMail} className="text-blue-600" />
                <a href={`mailto:${CONTENT.personal.email}`} className="hover:text-blue-600 transition-colors">{CONTENT.personal.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <SafeIcon icon={FiPhone} className="text-blue-600" />
                <a href={`tel:${CONTENT.personal.phone}`} className="hover:text-blue-600 transition-colors">{CONTENT.personal.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-medium">
            © {currentYear} {CONTENT.personal.fullName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-8 text-sm font-bold text-slate-500">
            <Link to="/impressum" className="hover:text-slate-900 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-slate-900 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;