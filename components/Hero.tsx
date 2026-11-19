'use client';

import React from 'react';

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    window.dispatchEvent(new CustomEvent('execute-resume'));
  };

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-12 pb-20 md:pt-20 md:pb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
      {/* LEFT COLUMN */}
      <div className="flex flex-col w-full lg:w-[55%]">
        {/* Badge pill */}
        <div
          className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-border-subtle bg-card-dark mb-6 animate-fade-up"
          style={{ animationDelay: '0ms' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          <span className="text-xs font-mono text-primary">GSoC 2025 · FlyYourTech</span>
        </div>

        {/* Heading */}
        <h1
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-up"
          style={{ animationDelay: '80ms' }}
        >
          Hi, I&apos;m Tejas
          <br />
          Sonawane
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl font-semibold text-primary mt-2 animate-fade-up"
          style={{ animationDelay: '160ms' }}
        >
          Full Stack &amp; Agentic AI Developer
        </p>

        {/* Bio */}
        <p
          className="text-text-muted-dark text-base md:text-lg mt-3 max-w-md animate-fade-up"
          style={{ animationDelay: '240ms' }}
        >
          Building production-grade web apps and intelligent AI agents.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4 mt-8 animate-fade-up"
          style={{ animationDelay: '320ms' }}
        >
          <button
            onClick={handleDownloadResume}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all"
          >
            Download Resume
          </button>
          <a
            href="https://github.com/ts-31"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border-subtle hover:border-primary text-text-muted-dark hover:text-white px-6 py-3 rounded-lg transition-all"
          >
            View GitHub
          </a>
        </div>

        {/* Social proof strip */}
        <div className="flex flex-wrap gap-3 mt-8">
          <span className="text-xs font-mono text-text-muted-dark px-3 py-1.5 rounded-full border border-border-subtle bg-card-dark flex items-center gap-1.5">
            <span className="text-green-400">✓</span> GSoC 2025 Contributor
          </span>
          <span className="text-xs font-mono text-text-muted-dark px-3 py-1.5 rounded-full border border-border-subtle bg-card-dark flex items-center gap-1.5">
            225+ DSA Problems
          </span>
          <span className="text-xs font-mono text-text-muted-dark px-3 py-1.5 rounded-full border border-border-subtle bg-card-dark flex items-center gap-1.5">
            Open Source
          </span>
        </div>
      </div>

      {/* RIGHT COLUMN — inline SVG illustration */}
      <div className="hidden lg:flex w-[45%] justify-center items-center">
        <div className="animate-float">
          <svg
            viewBox="0 0 400 400"
            width="400"
            height="400"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Abstract AI and code illustration"
          >
            {/* Background card — laptop body */}
            <rect x="60" y="180" width="280" height="175" rx="10" fill="#0E1120" />
            {/* Laptop screen bezel */}
            <rect x="75" y="190" width="250" height="140" rx="6" fill="#1E2340" />
            {/* Screen glow area */}
            <rect x="82" y="197" width="236" height="126" rx="4" fill="#0E1120" />
            {/* Code lines on screen */}
            <rect x="92" y="210" width="90" height="6" rx="3" fill="#6366F1" opacity="0.9" />
            <rect x="92" y="223" width="140" height="5" rx="2.5" fill="#A5B4FC" opacity="0.6" />
            <rect x="92" y="235" width="110" height="5" rx="2.5" fill="#A5B4FC" opacity="0.5" />
            <rect x="92" y="248" width="60" height="5" rx="2.5" fill="#6366F1" opacity="0.7" />
            <rect x="92" y="260" width="130" height="5" rx="2.5" fill="#A5B4FC" opacity="0.45" />
            <rect x="92" y="273" width="80" height="5" rx="2.5" fill="#6366F1" opacity="0.6" />
            <rect x="92" y="286" width="150" height="5" rx="2.5" fill="#A5B4FC" opacity="0.4" />
            <rect x="92" y="299" width="70" height="5" rx="2.5" fill="#6366F1" opacity="0.55" />
            {/* Laptop base / trackpad area */}
            <rect x="60" y="355" width="280" height="10" rx="5" fill="#1E2340" />
            <rect x="155" y="358" width="90" height="5" rx="2.5" fill="#2A2F50" />

            {/* AI Robot head — simple geometric */}
            <rect x="168" y="80" width="64" height="58" rx="10" fill="#1E2340" stroke="#6366F1" strokeWidth="2" />
            {/* Eyes */}
            <rect x="181" y="97" width="14" height="10" rx="3" fill="#6366F1" />
            <rect x="205" y="97" width="14" height="10" rx="3" fill="#6366F1" />
            {/* Mouth bar */}
            <rect x="183" y="118" width="34" height="5" rx="2.5" fill="#A5B4FC" opacity="0.7" />
            {/* Antenna */}
            <line x1="200" y1="80" x2="200" y2="66" stroke="#6366F1" strokeWidth="2" />
            <circle cx="200" cy="62" r="5" fill="#6366F1" />
            {/* Neck connector */}
            <rect x="193" y="138" width="14" height="20" rx="4" fill="#1E2340" stroke="#6366F1" strokeWidth="1.5" />
            {/* Body connector to laptop */}
            <line x1="200" y1="158" x2="200" y2="180" stroke="#6366F1" strokeWidth="2" strokeDasharray="4 3" />

            {/* Floating geometric shapes — neural network nodes */}
            <circle cx="48" cy="130" r="12" fill="#1E2340" stroke="#6366F1" strokeWidth="2" />
            <circle cx="352" cy="110" r="10" fill="#1E2340" stroke="#A5B4FC" strokeWidth="1.5" />
            <circle cx="340" cy="260" r="8" fill="#1E2340" stroke="#6366F1" strokeWidth="1.5" />
            <circle cx="48" cy="290" r="9" fill="#1E2340" stroke="#A5B4FC" strokeWidth="1.5" />

            {/* Hexagon top-right */}
            <polygon
              points="332,55 348,46 364,55 364,73 348,82 332,73"
              fill="#1E2340"
              stroke="#6366F1"
              strokeWidth="1.5"
            />
            {/* Hexagon bottom-left */}
            <polygon
              points="36,340 52,331 68,340 68,358 52,367 36,358"
              fill="#1E2340"
              stroke="#A5B4FC"
              strokeWidth="1.5"
            />

            {/* Neural network connecting lines */}
            <line x1="60" y1="130" x2="168" y2="109" stroke="#6366F1" strokeWidth="1" opacity="0.5" />
            <line x1="232" y1="109" x2="342" y2="110" stroke="#6366F1" strokeWidth="1" opacity="0.5" />
            <line x1="340" y1="120" x2="310" y2="190" stroke="#A5B4FC" strokeWidth="1" opacity="0.4" />
            <line x1="57" y1="139" x2="75" y2="265" stroke="#A5B4FC" strokeWidth="1" opacity="0.4" />
            <line x1="57" y1="290" x2="75" y2="310" stroke="#6366F1" strokeWidth="1" opacity="0.4" />
            <line x1="68" y1="349" x2="90" y2="345" stroke="#A5B4FC" strokeWidth="1" opacity="0.35" />
            <line x1="340" y1="260" x2="340" y2="290" stroke="#6366F1" strokeWidth="1" opacity="0.4" />

            {/* Floating code-bar snippets */}
            {/* Top left cluster */}
            <rect x="20" y="50" width="55" height="7" rx="3.5" fill="#6366F1" opacity="0.5" />
            <rect x="20" y="62" width="38" height="6" rx="3" fill="#A5B4FC" opacity="0.35" />
            {/* Top right cluster */}
            <rect x="295" y="30" width="50" height="7" rx="3.5" fill="#A5B4FC" opacity="0.45" />
            <rect x="310" y="42" width="35" height="6" rx="3" fill="#6366F1" opacity="0.4" />
            {/* Bottom right cluster */}
            <rect x="305" y="310" width="60" height="7" rx="3.5" fill="#6366F1" opacity="0.4" />
            <rect x="315" y="322" width="40" height="6" rx="3" fill="#A5B4FC" opacity="0.35" />

            {/* Small diamond accent */}
            <polygon points="200,22 208,30 200,38 192,30" fill="#6366F1" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
