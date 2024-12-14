import React from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { LanguageSelector } from './LanguageSelector';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <Navigation />
            <LanguageSelector />
            <a 
              href="https://ody.lol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Войти
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="container mx-auto px-4 py-4">
            <Navigation />
            <div className="mt-4 flex flex-col space-y-4">
              <LanguageSelector />
              <a 
                href="https://ody.lol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-center"
              >
                Войти
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};