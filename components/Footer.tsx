import React from 'react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer className={`w-full border-t border-primary/20 relative z-20 ${isDark ? 'bg-zinc-950' : 'bg-gray-300'}`}>
      <div className={`max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between text-xs font-mono gap-4 md:gap-0 ${isDark ? 'text-primary/60' : 'text-text-main-light'}`}>
        
        <div className="flex items-center gap-6">
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-sm ${isDark ? 'bg-primary/10' : 'bg-white border border-gray-400'}`}>
            <span className={`material-symbols-outlined !text-[14px] ${isDark ? '' : 'text-text-main-light'}`}>dns</span>
            <span className={isDark ? '' : 'font-bold'}>NORMAL MODE</span>
          </div>
          <div className={`hidden sm:flex items-center gap-1.5 cursor-pointer transition-colors ${isDark ? 'hover:text-primary' : 'hover:text-primary-dark'}`}>
            <span className="material-symbols-outlined !text-[14px]">call_split</span>
            <span>main*</span>
          </div>
        </div>

        <div className={`flex items-center gap-6 ${isDark ? '' : 'text-text-main-light'}`} id="contact">
          <a href="#" aria-label="Github" className={`flex items-center gap-1 transition-colors ${isDark ? 'hover:text-primary' : 'hover:text-primary-dark'}`}>
            <span className="material-symbols-outlined !text-[18px]">code</span>
          </a>
          <a href="#" aria-label="LinkedIn" className={`flex items-center gap-1 transition-colors ${isDark ? 'hover:text-primary' : 'hover:text-primary-dark'}`}>
            <span className="material-symbols-outlined !text-[18px]">work</span>
          </a>
          <a href="#" aria-label="Twitter" className={`flex items-center gap-1 transition-colors ${isDark ? 'hover:text-primary' : 'hover:text-primary-dark'}`}>
            <span className="material-symbols-outlined !text-[18px]">chat_bubble</span>
          </a>
        </div>

        <div className={`flex items-center gap-6 text-right ${isDark ? '' : 'text-text-main-light'}`}>
          <span className="hidden sm:inline">Ln 120, Col 12</span>
          <span>UTF-8</span>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined !text-[14px]">schedule</span>
            <span>Uptime: 24yrs</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;