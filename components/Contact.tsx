import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-24 relative z-10" id="contact-section">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-2xl font-mono font-bold text-primary">./contact</span>
          <div className="h-px flex-grow bg-primary/30"></div>
        </div>

        <div className="flex flex-col gap-6 pl-4 font-mono text-lg">
          <div className="flex gap-2 font-bold text-primary">
            <span>tejas@linux-box:~$</span>
            <span className="text-white">ls ./socials</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 text-base">
            <a
              href="https://www.linkedin.com/in/tejas-266ba7364"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-fit font-semibold transition-all duration-300 hover:shadow-neon-text text-slate-300 hover:text-primary"
            >
              <span className="text-primary">&gt;</span> LinkedIn
            </a>
            <a
              href="https://github.com/ts-31"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-fit font-semibold transition-all duration-300 hover:shadow-neon-text text-slate-300 hover:text-primary"
            >
              <span className="text-primary">&gt;</span> GitHub
            </a>
            <a
              href="https://x.com/_Tejas_03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-fit font-semibold transition-all duration-300 hover:shadow-neon-text text-slate-300 hover:text-primary"
            >
              <span className="text-primary">&gt;</span> X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;