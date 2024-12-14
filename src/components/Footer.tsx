import React from 'react';
import { translations } from '../i18n/ru';
import { Logo } from './Header/Logo';

export const Footer: React.FC = () => (
  <footer className="bg-black/90 border-t border-white/10 pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <Logo />
          <p className="mt-4 text-gray-400 max-w-xs">
            Первая криптобиржа, специализирующаяся на мемкоинах и инновационных проектах
          </p>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">{translations.footer.company}</h3>
          <ul className="space-y-2">
            {['about', 'careers', 'blog', 'press'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {translations.footer[item]}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">{translations.footer.products}</h3>
          <ul className="space-y-2">
            {['exchange', 'launchpad', 'staking'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {translations.footer[item]}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">{translations.footer.support}</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {translations.footer.help}
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {translations.footer.fees}
              </a>
            </li>
            <li>
              <a 
                href="https://t.me/t_dmi3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {translations.footer.contact}
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {translations.footer.status}
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {translations.footer.copyright}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              {translations.footer.terms}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              {translations.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);