import React, { useState } from 'react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'home', href: '#' },
    { name: 'projects', href: '#projects' },
    { name: 'gsoc', href: '#gsoc' },
    { name: 'contact', href: '#contact-section' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm transition-colors duration-300">
      <div className="flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="text-primary-dark dark:text-primary material-symbols-outlined !text-[24px]">terminal</span>
          <span className="text-text-main-light dark:text-white text-lg font-bold tracking-tight font-mono">
            <span className="text-primary-dark dark:text-primary">&gt;_</span> TS
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center gap-1 text-sm font-medium text-text-muted-light dark:text-slate-400 hover:text-primary-dark dark:hover:text-primary transition-colors"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-dark dark:text-primary">./</span>
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
            <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
            >
            <span className="material-symbols-outlined text-text-main-light dark:text-white !text-[20px]">
                {isDark ? 'light_mode' : 'dark_mode'}
            </span>
            </button>

          <button className="hidden md:flex cursor-pointer items-center justify-center rounded-sm border border-primary-dark dark:border-primary bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary-dark dark:text-primary hover:bg-primary hover:text-black transition-all shadow-[0_0_10px_rgba(57,255,20,0.15)] hover:shadow-neon font-mono">
            EXECUTE_RESUME.sh
          </button>

          <button 
            className="md:hidden text-text-main-light dark:text-white hover:text-primary-dark dark:hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-primary/20 bg-background-light dark:bg-background-dark p-4 flex flex-col gap-4 font-mono shadow-xl">
             {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-sm font-medium text-text-muted-light dark:text-slate-400 hover:text-primary-dark dark:hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-primary-dark dark:text-primary">./</span>
              {link.name}
            </a>
          ))}
           <button className="w-full mt-2 cursor-pointer items-center justify-center rounded-sm border border-primary-dark dark:border-primary bg-primary/10 px-4 py-2 text-xs font-bold text-primary-dark dark:text-primary hover:bg-primary hover:text-black transition-all shadow-neon font-mono">
            EXECUTE_RESUME.sh
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;