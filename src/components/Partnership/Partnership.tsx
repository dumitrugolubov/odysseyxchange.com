import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../../i18n/ru';
import { DollarSign, Zap, Wrench, Headphones } from 'lucide-react';
import { FeatureCard } from '../FeatureCard';

const benefits = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: translations.partnership.benefits.commission.title,
    description: translations.partnership.benefits.commission.description,
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: translations.partnership.benefits.instant.title,
    description: translations.partnership.benefits.instant.description,
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: translations.partnership.benefits.tools.title,
    description: translations.partnership.benefits.tools.description,
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: translations.partnership.benefits.support.title,
    description: translations.partnership.benefits.support.description,
  },
];

export const Partnership: React.FC = () => (
  <section id="partnership" className="py-24 bg-gradient-to-b from-black to-indigo-950/20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          {translations.partnership.title}
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          {translations.partnership.subtitle}
        </p>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg text-gray-300">
            {translations.partnership.contact}
          </p>
          <motion.a
            href={`https://${translations.partnership.telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>@t_dmi3</span>
          </motion.a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <FeatureCard key={index} {...benefit} />
        ))}
      </div>
    </div>
  </section>
);