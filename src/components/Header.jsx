import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiArrowRight } = FiIcons;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Projekte', path: '/projekte' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter text-black flex items-center gap-1 group">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
            <span className="text-white text-lg">P</span>
          </div>
          <span>PORTFOLIO<span className="text-blue-600">.</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-all hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-500'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link to="/kontakt" className="px-6 py-2.5 bg-black text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all">
            Projekt starten
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden w-10 h-10 flex items-center justify-center bg-slate-100 rounded-xl text-black" onClick={() => setIsOpen(!isOpen)}>
          <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-white z-[90] md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-4" />
              <Link
                to="/kontakt"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl group"
              >
                <span className="text-xl font-bold">Projekt starten</span>
                <SafeIcon icon={FiArrowRight} className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;