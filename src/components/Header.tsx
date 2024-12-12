import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-full p-2"
            >
              <Wallet size={40} className="text-blue-600" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-blue-200 transition-colors">
                Busca Meu Crédito
              </span>
              <span className="text-sm md:text-base text-blue-200">
                Seu comparador de empréstimos
              </span>
            </div>
          </Link>

          {/* Rest of the header code remains the same */}
          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-blue-500 hover:bg-blue-400 p-2 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link 
                to="/about" 
                className="relative group py-2"
              >
                <span className="relative z-10">Como funciona</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                  whileHover={{ width: '100%' }}
                />
              </Link>
              <Link 
                to="/partners" 
                className="relative group py-2"
              >
                <span className="relative z-10">Parceiros</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                  whileHover={{ width: '100%' }}
                />
              </Link>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/simulator"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 hover:text-blue-700"
              >
                Simular agora
              </Link>
            </motion.div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-blue-700 rounded-lg mt-2 mb-4"
            >
              <div className="p-4 space-y-4">
                <Link
                  to="/about"
                  className="block py-3 px-4 hover:bg-blue-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Como funciona
                </Link>
                <Link
                  to="/partners"
                  className="block py-3 px-4 hover:bg-blue-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Parceiros
                </Link>
                <Link
                  to="/simulator"
                  className="block bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold text-center hover:bg-blue-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Simular agora
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};