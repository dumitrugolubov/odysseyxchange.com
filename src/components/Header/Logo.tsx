import React from 'react';

export const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transform hover:scale-105 transition-transform duration-300"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="url(#logoGradient)"
        opacity="0.1"
      />
      <circle
        cx="16"
        cy="16"
        r="12"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        filter="url(#glow)"
        className="transform-origin-center"
      />
      <circle
        cx="16"
        cy="16"
        r="8"
        fill="url(#logoGradient)"
        opacity="0.2"
      />
    </svg>
    <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
      Odyssey Exchange
    </span>
  </div>
);