'use client';

import React, { useState, useRef, useEffect } from 'react';

interface TerminalProps {
  isDark: boolean;
}

type TerminalCommandType = 'neofetch' | 'skills' | 'projects' | 'opensource' | 'socials' | 'help' | 'error';

interface HistoryEntry {
  command: string;
  type: TerminalCommandType;
  invalidCommand?: string;
}

const NeofetchOutput: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className="pl-0 md:pl-4 flex flex-col md:flex-row gap-6 pt-2">
    <div className="hidden sm:block">
      <div className="relative w-32 h-32">
        <img
          src="/img1.png"
          alt="Profile"
          className={`absolute inset-0 w-full h-full rounded-lg object-cover shadow-md transition-all duration-500 ease-in-out transform ${isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
        />
        <img
          src="/img2.png"
          alt="Profile"
          className={`absolute inset-0 w-full h-full rounded-lg object-cover shadow-md transition-all duration-500 ease-in-out transform ${!isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
        />
      </div>
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
);

const SkillsOutput: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-1 ${isDark ? 'text-slate-300' : 'text-text-main-light'}`}>
    {['Reactjs', 'Nextjs', 'Expressjs', 'Nodejs', 'Python', 'FastAPI', 'Linux'].map(skill => (
      <div key={skill}>./{skill.toLowerCase()}</div>
    ))}
  </div>
);

const ProjectsOutput: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`${isDark ? 'text-slate-300' : 'text-text-main-light'}`}>
    <div className="mb-2 italic opacity-80">Available Projects (Click to view):</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
      {[
        { title: 'BudgetBuddy', id: 'project-budgetbuddy' },
        { title: 'BookMyDoctor', id: 'project-bookmydoctor' },
        { title: 'GIMP Ext site Generator', id: 'project-gimp-ext-site-generator' },
        { title: 'MatchMyResume', id: 'project-matchmyresume' },
        { title: 'AgentHub', id: 'project-agenthub' },
        { title: 'OpenAFS Client Manager', id: 'project-openafs-client-manager' },
      ].map((proj) => (
        <button
          key={proj.id}
          onClick={() => {
            const el = document.getElementById(proj.id);
            if (el) {
              document.querySelectorAll('.terminal-highlight').forEach(node =>
                node.classList.remove('terminal-highlight')
              );
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              el.classList.add('terminal-highlight');
              setTimeout(() => {
                el.classList.remove('terminal-highlight');
              }, 2000);
            }
          }}
          className={`text-left hover:underline w-fit font-bold ${isDark ? 'text-primary' : 'text-primary-dark'}`}
        >
          ./{proj.title.toLowerCase().replace(/\s+/g, '_')}
        </button>
      ))}
    </div>
    <div className="mt-2 text-xs opacity-50"># Tip: You can also use the filter UI below the terminal</div>
  </div>
);

const OpenSourceOutput: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`${isDark ? 'text-slate-300' : 'text-text-main-light'}`}>
    <div className={`${isDark ? 'text-primary' : 'text-primary-dark'} font-bold mb-2`}>ACCEPTED</div>
    <div>GSoC 2025 — OpenAFS</div>
    <div>Production GNOME Shell extension (GJS)</div>
    <div>Async UI • System integrations • Real users</div>
  </div>
);

const SocialsOutput: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`pl-0 font-mono ${isDark ? 'text-slate-300' : 'text-text-main-light'}`}>
    <div>LinkedIn → <a href="https://www.linkedin.com/in/tejas-266ba7364" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-primary hover:underline' : 'text-primary-dark hover:underline'}`}>https://www.linkedin.com/in/tejas-266ba7364</a></div>
    <div>GitHub   → <a href="https://github.com/ts-31" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-primary hover:underline' : 'text-primary-dark hover:underline'}`}>https://github.com/ts-31</a></div>
    <div>X        → <a href="https://x.com/_Tejas_03" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-primary hover:underline' : 'text-primary-dark hover:underline'}`}>https://x.com/_Tejas_03</a></div>
  </div>
);

const HelpOutput: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`${isDark ? 'text-slate-300' : 'text-text-main-light'}`}>
    <div className={`${isDark ? 'text-primary' : 'text-primary-dark'} font-bold mb-2`}>Available commands:</div>
    <div>skills          - List technical skills</div>
    <div>projects        - Navigate to projects section</div>
    <div>open source     - View open source contributions</div>
    <div>socials         - Display social media links</div>
    <div>clear           - Clear terminal history</div>
    <div>help            - Show this help message</div>
  </div>
);

const ErrorOutput: React.FC<{ isDark: boolean; invalidCommand?: string }> = ({ isDark, invalidCommand }) => (
  <div className={`${isDark ? 'text-red-400' : 'text-red-600'}`}>
    Command not found: {invalidCommand}. Type 'help' for available commands.
  </div>
);

const TerminalOutput: React.FC<{ type: TerminalCommandType; isDark: boolean; invalidCommand?: string }> = ({ type, isDark, invalidCommand }) => {
  switch (type) {
    case 'neofetch': return <NeofetchOutput isDark={isDark} />;
    case 'skills': return <SkillsOutput isDark={isDark} />;
    case 'projects': return <ProjectsOutput isDark={isDark} />;
    case 'opensource': return <OpenSourceOutput isDark={isDark} />;
    case 'socials': return <SocialsOutput isDark={isDark} />;
    case 'help': return <HelpOutput isDark={isDark} />;
    case 'error': return <ErrorOutput isDark={isDark} invalidCommand={invalidCommand} />;
    default: return null;
  }
};

const Terminal: React.FC<TerminalProps> = ({ isDark }) => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (history.length === 0) {
      setHistory([
        { command: 'neofetch', type: 'neofetch' },
        { command: 'skills', type: 'skills' }
      ]);
    }
  }, []);

  useEffect(() => {
    if (terminalContentRef.current && terminalEndRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === 'clear') {
      setHistory([]);
      setCurrentInput('');
      return;
    }

    let type: TerminalCommandType = 'error';
    let invalidCommand: string | undefined = undefined;

    if (trimmedCmd === 'skills' || trimmedCmd === 'ls ./skills') {
      type = 'skills';
    } else if (trimmedCmd === 'projects' || trimmedCmd === 'cd ./projects') {
      type = 'projects';
    } else if (trimmedCmd === 'open source' || trimmedCmd === 'cd ./open_source') {
      type = 'opensource';
    } else if (trimmedCmd === 'socials' || trimmedCmd === 'contact' || trimmedCmd === 'ls ./socials') {
      type = 'socials';
    } else if (trimmedCmd === 'help') {
      type = 'help';
    } else if (trimmedCmd === 'neofetch') {
      type = 'neofetch';
    } else if (trimmedCmd !== '') {
      type = 'error';
      invalidCommand = cmd;
    }

    if (trimmedCmd !== '') {
      setHistory([...history, { command: cmd, type, invalidCommand }]);
    }
    setCurrentInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(currentInput);
    } else if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.stopPropagation();
    }
  };

  const focusInput = (e?: React.MouseEvent) => {
    // Don't focus if clicking a link
    if (e?.target instanceof HTMLAnchorElement) return;

    e?.preventDefault();
    inputRef.current?.focus();
  };

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
        <div
          ref={terminalContentRef}
          className={`p-6 font-mono text-sm md:text-base leading-relaxed space-y-4 h-[500px] overflow-y-auto flex flex-col ${isDark ? 'text-slate-300' : 'text-text-main-light'}`}
          onClick={focusInput}
        >
          {/* Command History */}
          {history.map((entry, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className={`flex gap-2 ${isDark ? 'text-primary' : 'text-primary-dark font-bold'}`}>
                <span>tejas@linux-box:~$</span>
                <span className={isDark ? 'text-white' : 'text-text-main-light font-normal'}>{entry.command}</span>
              </div>
              <div className="pl-0 pt-1">
                <TerminalOutput type={entry.type} isDark={isDark} invalidCommand={entry.invalidCommand} />
              </div>
            </div>
          ))}

          {/* Current Input */}
          <div className={`flex gap-2 ${isDark ? 'text-primary' : 'text-primary-dark font-bold'}`}>
            <span>tejas@linux-box:~$</span>
            <div className="flex-1 relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className={`w-full bg-transparent outline-none border-0 ring-0 focus:ring-0 focus:outline-none focus-visible:outline-none caret-transparent ${isDark ? 'text-white' : 'text-text-main-light'}`}
                style={{
                  padding: 0,
                  margin: 0,
                  border: 'none',
                  boxShadow: 'none',
                  minWidth: '50px'
                }}
                spellCheck={false}
                autoComplete="off"
              />
              <span
                className={`absolute pointer-events-none w-2.5 h-5 animate-blink ${isDark ? 'bg-primary' : 'bg-primary-dark'}`}
                style={{
                  left: `calc(${currentInput.length}ch)`,
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
            </div>
          </div>

          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;