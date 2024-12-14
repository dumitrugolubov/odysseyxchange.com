import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../../i18n/ru';

export const Navigation: React.FC = () => (
  <nav className="flex md:flex-row flex-col md:items-center md:space-x-6 md:space-y-0 space-y-4">
    <motion.a 
      href="https://ody.lol" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {translations.nav.exchange}
    </motion.a>
    <motion.a 
      href="#launchpad" 
      className="text-gray-300 hover:text-white transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {translations.nav.launchpad}
    </motion.a>
    <motion.a 
      href="#partnership" 
      className="text-gray-300 hover:text-white transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {translations.nav.partnership}
    </motion.a>
  </nav>
);