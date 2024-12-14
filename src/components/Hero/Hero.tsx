import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../../i18n/ru';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => (
  <section className="pt-32 pb-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/50 to-black" />
    
    <motion.div 
      className="absolute inset-0 opacity-30"
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />

    <div className="container mx-auto px-4 relative">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {translations.hero.title}
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {translations.hero.subtitle}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a 
            href="https://ody.lol" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {translations.hero.cta}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a 
            href="#partnership"
            className="px-8 py-4 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {translations.hero.partner}
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);