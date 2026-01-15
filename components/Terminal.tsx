import React from 'react';

interface TerminalProps {
    isDark: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ isDark }) => {
  return (
    <div className="w-full max-w-4xl mx-auto transform hover:scale-[1.005] transition-transform duration-300">
      <div className={`rounded-lg border ${isDark ? 'border-primary/50 bg-black/80 shadow-neon' : 'border-primary/30 bg-terminal-light shadow-lg'} backdrop-blur-xl overflow-hidden flex flex-col transition-colors duration-300`}>
        {/* Terminal Header */}
        <div className={`flex items-center justify-between px-4 py-2 border-b border-primary/20 ${isDark ? 'bg-primary/5' : 'bg-gray-200/50'}`}>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className={`text-xs ${isDark ? 'text-primary/70' : 'text-text-muted-light'} font-mono flex items-center gap-1`}>
            <span className="material-symbols-outlined !text-[14px]">home</span>
            tejas@linux-box:~
          </div>
          <div className="w-12"></div>
        </div>

        {/* Terminal Content */}
        <div className={`p-6 font-mono text-sm md:text-base leading-relaxed space-y-4 min-h-[300px] flex flex-col ${isDark ? 'text-slate-300' : 'text-text-main-light'}`}>
          <div className="flex flex-col gap-1">
            <div className={`flex gap-2 ${isDark ? 'text-primary' : 'text-primary-dark font-bold'}`}>
              <span>tejas@linux-box:~$</span>
              <span className={isDark ? 'text-white' : 'text-text-main-light font-normal'}>neofetch</span>
            </div>
            
            <div className="pl-0 md:pl-4 flex flex-col md:flex-row gap-6 pt-2">
              <div className={`${isDark ? 'text-primary' : 'text-primary-dark font-bold'} hidden sm:block whitespace-pre text-[10px] leading-[10px] md:text-xs`}>
{`       .---.
      /     \\
      | (@) |
      \\     /
       \`---'
     __{   }__
    (  \`---'  )
     \`-------'`}
              </div>
              
              <div className={`border-l-0 md:border-l-2 border-primary/20 pl-0 md:pl-4 ${isDark ? 'text-slate-300' : 'text-text-muted-light'}`}>
                <div className="grid grid-cols-[100px_1fr] gap-x-2 gap-y-1">
                  <span className={`${isDark ? 'text-primary' : 'text-primary-dark'} font-bold`}>OS</span> <span>Arch Linux x86_64</span>
                  <span className={`${isDark ? 'text-primary' : 'text-primary-dark'} font-bold`}>Host</span> <span>GSOC 2025 Contributor</span>
                  <span className={`${isDark ? 'text-primary' : 'text-primary-dark'} font-bold`}>Kernel</span> <span>5.15.0-custom</span>
                  <span className={`${isDark ? 'text-primary' : 'text-primary-dark'} font-bold`}>Uptime</span> <span>21 years</span>
                  <span className={`${isDark ? 'text-primary' : 'text-primary-dark'} font-bold`}>Shell</span> <span>zsh 5.8</span>
                  <span className={`${isDark ? 'text-primary' : 'text-primary-dark'} font-bold`}>Role</span> <span>Full Stack Developer</span>
                  <span className={`${isDark ? 'text-primary' : 'text-primary-dark'} font-bold`}>Location</span> <span>India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-4">
            <div className={`flex gap-2 ${isDark ? 'text-primary' : 'text-primary-dark font-bold'}`}>
              <span>tejas@linux-box:~$</span>
              <span className={isDark ? 'text-white' : 'text-text-main-light font-normal'}>ls ./skills -la</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-2">
               {[
                 { name: 'MERN', icon: 'layers' },
                 { name: 'Python', icon: 'terminal' },
                 { name: 'Linux', icon: 'settings_system_daydream' },
                 { name: 'React', icon: 'data_object' },
                 { name: 'Java', icon: 'coffee' }
               ].map((skill) => (
                 <div key={skill.name} className={`group flex flex-col items-center justify-center gap-2 rounded-sm border p-3 transition-colors cursor-default
                    ${isDark 
                        ? 'bg-zinc-900 border-zinc-800 hover:border-primary hover:bg-primary/10' 
                        : 'bg-white border-gray-300 hover:border-primary-dark hover:bg-primary/10 shadow-sm'
                    }
                 `}>
                    <span className={`material-symbols-outlined group-hover:scale-110 transition-transform text-[28px] ${isDark ? 'text-primary' : 'text-primary-dark'}`}>
                        {skill.icon}
                    </span>
                    <span className={`text-xs font-bold ${isDark ? 'text-slate-300' : 'text-text-main-light'}`}>
                        {skill.name}
                    </span>
                 </div>
               ))}
            </div>
          </div>

          <div className={`flex gap-2 pt-2 ${isDark ? 'text-primary' : 'text-primary-dark font-bold'}`}>
            <span>tejas@linux-box:~$</span>
            <span className={`h-5 w-2.5 block animate-blink ${isDark ? 'bg-primary' : 'bg-primary-dark'}`}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;