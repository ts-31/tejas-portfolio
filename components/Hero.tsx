import React from 'react';
import Terminal from './Terminal';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-4 pb-16 md:pt-8 md:pb-24 flex flex-col gap-10 items-center">
      <div className="text-center space-y-6 w-full">
        <h1
          className={`text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-none font-silkscreen font-normal tracking-tight bg-clip-text uppercase whitespace-nowrap overflow-visible
            ${isDark
              ? 'bg-gradient-to-r from-[#bce6fa] to-[#e8eaed] text-transparent drop-shadow-[0_0_20px_rgba(188,230,250,0.4)]'
              : 'text-text-main-light drop-shadow-sm'
            }`}
        >
          TEJAS SONAWANE
        </h1>

        <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md
            ${isDark ? 'border-primary/30 bg-primary/5' : 'border-primary/30 bg-primary/10'}
        `}>
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-primary' : 'bg-primary-dark'}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-primary' : 'bg-primary-dark'}`}></span>
          </span>
          <h2 className={`text-xs md:text-sm font-medium tracking-wide uppercase font-mono ${isDark ? 'text-primary' : 'text-primary-dark'}`}>
            Open Source Developer | GSOC 2025 | Full-Stack Dev
          </h2>
        </div>
      </div>

      <Terminal isDark={isDark} />
    </div>
  );
};

export default Hero;