import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';
import { COLORS } from '../constants/colors';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-[100] text-[${COLORS.quinoa}] py-4 px-4 transition-all duration-300 backdrop-blur-[1px] ${
        isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ChefHat size={24} className={`text-[${COLORS.quinoa}]`} aria-hidden="true" />
          <span className="text-xl font-semibold">Chef Luis Tello</span>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden md:flex justify-end"
          aria-label="Menu principal"
        >
          <ul className="flex gap-6">
            <li>
              <a href="#about" className={`hover:text-white transition-colors text-[${COLORS.quinoa}]`}>Sobre</a>
            </li>
            <li>
              <a href="#services" className={`hover:text-white transition-colors text-[${COLORS.quinoa}]`}>Serviços</a>
            </li>
            <li>
              <a href="#gallery" className={`hover:text-white transition-colors text-[${COLORS.quinoa}]`}>Galeria</a>
            </li>
            <li>
              <a href="#contact" className={`hover:text-white transition-colors text-[${COLORS.quinoa}]`}>Contato</a>
            </li>
          </ul>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header; 