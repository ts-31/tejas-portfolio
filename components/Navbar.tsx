import React, { useState, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<number | null>(null);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Experience', href: '#experience' },
    { name: 'Open Source', href: '#gsoc' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact-section' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Cancel any existing animation
    if (scrollRef.current !== null) {
      cancelAnimationFrame(scrollRef.current);
    }

    const targetId = href.replace('#', '');
    const element = targetId ? document.getElementById(targetId) : null;
    const targetPosition = element ? element.getBoundingClientRect().top + window.scrollY : 0;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Increased to 1000ms for a more "gliding" feel
    let start: number | null = null;

    const easeInOutQuint = (t: number) => {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      const nextScrollY = startPosition + distance * easeInOutQuint(progress);
      window.scrollTo({
        top: nextScrollY,
        behavior: 'auto'
      });

      if (timeElapsed < duration) {
        scrollRef.current = requestAnimationFrame(animation);
      } else {
        scrollRef.current = null;
      }
    };

    scrollRef.current = requestAnimationFrame(animation);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-border-subtle bg-background-dark/90 backdrop-blur-md transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="w-full max-w-4xl mx-auto flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-white text-lg font-bold tracking-tight font-display border-l-[3px] border-primary pl-2">
              TS
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-slate-400 hover:text-primary transition-colors font-body border-b-2 border-transparent hover:border-primary pb-0.5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('execute-resume'))}
              className="hidden md:flex cursor-pointer items-center justify-center rounded-lg bg-primary text-white hover:bg-primary/90 px-4 py-2 text-sm font-semibold transition-all duration-200"
            >
              Download Resume
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border-subtle bg-card-dark p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-slate-400 hover:text-primary transition-colors font-body border-b-2 border-transparent hover:border-primary pb-0.5 w-fit"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              window.dispatchEvent(new CustomEvent('execute-resume'));
            }}
            className="w-full mt-2 cursor-pointer items-center justify-center rounded-lg bg-primary text-white hover:bg-primary/90 px-4 py-2 text-sm font-semibold transition-all duration-200"
          >
            Download Resume
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
