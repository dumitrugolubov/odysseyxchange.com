import React from 'react';
import { Globe } from 'lucide-react';

export const LanguageSelector: React.FC = () => (
  <div className="relative group">
    <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
      <Globe className="w-4 h-4" />
      <span>RU</span>
    </button>
  </div>
);