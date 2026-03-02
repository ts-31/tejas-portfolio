import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t relative z-20 border-primary/20 bg-zinc-950">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="w-full max-w-4xl mx-auto py-3 flex flex-col md:flex-row items-center justify-between text-xs font-mono gap-4 md:gap-0 text-primary/60">

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-sm bg-primary/10">
              <span className="material-symbols-outlined !text-[14px]">dns</span>
              <span>NORMAL MODE</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 cursor-pointer transition-colors hover:text-primary">
              <span className="material-symbols-outlined !text-[14px]">call_split</span>
              <span>main*</span>
            </div>
          </div>

          <div className="flex items-center gap-6" id="contact">
            <a href="https://github.com/ts-31" target="_blank" rel="noopener noreferrer" aria-label="Github" className="flex items-center gap-1 transition-colors hover:text-primary">
              <span className="material-symbols-outlined !text-[18px]">code</span>
            </a>
            <a href="https://www.linkedin.com/in/tejas-266ba7364" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center gap-1 transition-colors hover:text-primary">
              <span className="material-symbols-outlined !text-[18px]">work</span>
            </a>
            <a href="https://x.com/_Tejas_03" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex items-center gap-1 transition-colors hover:text-primary">
              <span className="material-symbols-outlined !text-[18px]">chat_bubble</span>
            </a>
          </div>

          <div className="flex items-center gap-6 text-right">
            <span className="hidden sm:inline">Ln 120, Col 12</span>
            <span>UTF-8</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined !text-[14px]">schedule</span>
              <span>Uptime: 24yrs</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;