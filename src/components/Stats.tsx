import React from 'react';
import { translations } from '../i18n/ru';
import { useInView } from '../hooks/useInView';
import { CountUp } from '../components/CountUp';

const stats = [
  { value: 50000, label: translations.stats.users, suffix: '+' },
  { value: 100, label: translations.stats.volume, prefix: '$', suffix: 'M' },
  { value: 150, label: translations.stats.pairs, suffix: '+' },
  { value: 99.9, label: translations.stats.uptime, suffix: '%' },
];

export const Stats: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-indigo-900/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2 gradient-text">
                {isInView && (
                  <CountUp
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                )}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};