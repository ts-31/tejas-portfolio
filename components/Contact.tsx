import React from 'react';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-24 relative z-10" id="contact-section">
      <div className="flex items-center gap-4 mb-10">
        <span className={`text-2xl font-mono font-bold ${isDark ? 'text-primary' : 'text-primary-dark'}`}>./contact</span>
        <div className="h-px bg-primary/30 flex-grow"></div>
      </div>

      <div className="flex flex-col gap-6 pl-4 font-mono text-lg">
        <div className={`flex gap-2 font-bold ${isDark ? 'text-primary' : 'text-primary-dark'}`}>
          <span>tejas@linux-box:~$</span>
          <span className={isDark ? 'text-white' : 'text-text-main-light'}>ls ./socials</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 text-base">
          {['LinkedIn', 'GitHub', 'X (Twitter)'].map((social) => (
            <a 
                key={social}
                href="#" 
                className={`flex items-center gap-2 w-fit font-semibold transition-all duration-300 hover:shadow-neon-text
                    ${isDark 
                        ? 'text-slate-300 hover:text-primary' 
                        : 'text-text-muted-light hover:text-primary-dark'
                    }`}
            >
              <span className={isDark ? 'text-primary' : 'text-primary-dark'}>&gt;</span> {social}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;