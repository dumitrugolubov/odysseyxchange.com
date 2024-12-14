import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <motion.div 
    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
      <motion.div 
        className="text-indigo-400 group-hover:text-indigo-300 transition-colors"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-indigo-400 transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
      {description}
    </p>
  </motion.div>
);