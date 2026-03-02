import React from 'react';
import Terminal from './Terminal';

const Hero: React.FC = () => {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-4 pb-16 md:pt-8 md:pb-24 flex flex-col gap-10 items-center">
      <div className="text-center space-y-6 w-full">
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-none font-silkscreen font-normal tracking-tight bg-clip-text uppercase whitespace-nowrap overflow-visible bg-gradient-to-r from-[#bce6fa] to-[#e8eaed] text-transparent drop-shadow-[0_0_20px_rgba(188,230,250,0.4)]"
        >
          TEJAS SONAWANE
        </h1>

        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md border-primary/30 bg-primary/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-primary"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <h2 className="text-xs md:text-sm font-medium tracking-wide uppercase font-mono text-primary">
            Open Source Developer | GSOC 2025 | Full-Stack Dev
          </h2>
        </div>
      </div>

      <Terminal />
    </div>
  );
};

export default Hero;