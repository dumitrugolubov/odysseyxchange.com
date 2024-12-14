import React from 'react';
import { Shield, Zap, Users, Rocket, Clock, Heart } from 'lucide-react';
import { translations } from '../i18n/ru';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: translations.features.spotFee,
    description: 'Торгуйте без комиссий на всех спот-парах',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: translations.features.security,
    description: 'Ваши активы под надёжной защитой',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: translations.features.support,
    description: 'Круглосуточная поддержка на русском языке',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: translations.features.launchpad,
    description: 'Эксклюзивный доступ к новым проектам',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: translations.features.liquidationReturn,
    description: 'Уникальная программа возврата при ликвидации',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: translations.features.memecoins,
    description: 'Самая большая коллекция мемкоинов',
  },
];

export const Features: React.FC = () => (
  <section className="py-24 bg-black/50 relative">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          {translations.features.title}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          {translations.features.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
);