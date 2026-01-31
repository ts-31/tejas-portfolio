'use client';

import React, { useState, useRef, useEffect } from 'react';

interface TerminalProps {
  isDark: boolean;
}

type TerminalCommandType = 'neofetch' | 'skills' | 'projects' | 'opensource' | 'socials' | 'achievements' | 'resume' | 'help' | 'error';

interface HistoryEntry {
  command: string;
  type: TerminalCommandType;
  invalidCommand?: string;
}

const NeofetchOutput: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className="pl-0 md:pl-4 flex flex-col md:flex-row gap-6 pt-2 animate-fadeIn">
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
  <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-1 ${isDark ? 'text-slate-300' : 'text-text-main-light'} animate-fadeIn`}>
    {['JavaScript', 'React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'Linux', 'Python'].map(skill => (
      <div key={skill} className="flex items-center gap-2">
        <span className={`${isDark ? 'text-primary' : 'text-primary-dark'}`}>➜</span>
        {skill}
      </div>
    ))}
  </div>
);

const AchievementsOutput: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`flex flex-col gap-2 ${isDark ? 'text-slate-300' : 'text-text-main-light'} animate-fadeIn`}>
    <div className="flex items-start gap-3">
      <span className={`material-symbols-outlined !text-lg mt-0.5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>trophy</span>
      <div>
        <div className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>Google Summer of Code 2025</div>
        <div className="text-sm opacity-80">Contributor @ OpenAFS</div>
      </div>
    </div>
    <div className="flex items-start gap-3">
      <span className={`material-symbols-outlined !text-lg mt-0.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>code</span>
      <div>
        <div className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>DSA Problem Solving</div>
        <div className="text-sm opacity-80">225+ Problems Solved</div>
        <div className="text-sm mt-1 flex flex-col gap-0.5">
          <div>
            GeeksforGeeks → <a href="https://geeksforgeeks.org/user/sonawanetejas031/" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-primary hover:underline' : 'text-primary-dark hover:underline'}`}>@sonawanetejas031</a>
          </div>
          <div>
            LeetCode → <a href="https://leetcode.com/u/T03/" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-primary hover:underline' : 'text-primary-dark hover:underline'}`}>@T03</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProjectsOutput: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`${isDark ? 'text-slate-300' : 'text-text-main-light'} animate-fadeIn`}>
    <div className="mb-2 italic opacity-80">Available Projects (Click to view):</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
      {[
        { title: 'BudgetBuddy', desc: 'Full-stack finance tracker', id: 'project-budgetbuddy' },
        { title: 'BookMyDoctor', desc: 'MERN appointment platform', id: 'project-bookmydoctor' },
        { title: 'GIMP Ext Site Gen', desc: 'Hugo static site generator', id: 'project-gimp-ext-site-generator' },
        { title: 'MatchMyResume', desc: 'AI Resume matching tool', id: 'project-matchmyresume' },
        { title: 'AgentHub', desc: 'Multi-agent AI chat platform', id: 'project-agenthub' },
        { title: 'OpenAFS Client', desc: 'GNOME Shell extension', id: 'project-openafs-client-manager' },
      ].map((proj) => (
        <div key={proj.id} className="flex flex-col xl:flex-row xl:items-center gap-1 xl:gap-2">
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('set-project-filter', { detail: 'All' }));
              setTimeout(() => {
                const el = document.getElementById(proj.id);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  el.classList.add('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-black');
                  setTimeout(() => el.classList.remove('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-black'), 2000);
                }
              }, 100);
            }}
            className={`text-left hover:underline w-fit font-bold font-mono ${isDark ? 'text-primary' : 'text-primary-dark'}`}
          >
            ./{proj.title.toLowerCase().replace(/\s+/g, '_')}
          </button>
          <span className="text-xs opacity-70 border-l xl:border-l-0 border-primary/20 pl-2 xl:pl-0 hidden sm:inline-block">
            - {proj.desc}
          </span>
        </div>
      ))}
    </div>
  </div>

);

const OpenSourceOutput: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`${isDark ? 'text-slate-300' : 'text-text-main-light'} animate-fadeIn`}>
    <div className={`${isDark ? 'text-primary' : 'text-primary-dark'} font-bold mb-2`}>ACCEPTED</div>
    <div>GSoC 2025 — OpenAFS</div>
    <div className="pl-4 border-l-2 border-primary/20 mt-1 space-y-1">
      <div>• Built production GNOME Shell extension (GJS)</div>
      <div>• Implemented Async UI & System integrations</div>
      <div>• Shipped features to real Linux users</div>
    </div>
  </div>
);

const SocialsOutput: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`pl-0 font-mono ${isDark ? 'text-slate-300' : 'text-text-main-light'} animate-fadeIn`}>
    <div>LinkedIn → <a href="https://www.linkedin.com/in/tejas-266ba7364" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-primary hover:underline' : 'text-primary-dark hover:underline'}`}>tejas-sonawane</a></div>
    <div>GitHub   → <a href="https://github.com/ts-31" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-primary hover:underline' : 'text-primary-dark hover:underline'}`}>ts-31</a></div>
    <div>X        → <a href="https://x.com/_Tejas_03" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-primary hover:underline' : 'text-primary-dark hover:underline'}`}>@_Tejas_03</a></div>
  </div>
);

const ResumeOutput: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`flex flex-col gap-2 ${isDark ? 'text-slate-300' : 'text-text-main-light'} animate-fadeIn`}>
    <div className="mb-1">Resume generated successfully.</div>
    <a
      href="/DOWNLOAD_RESUME.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download="Tejas_Sonawane_Resume.pdf"
      className={`flex items-center gap-2 w-fit px-4 py-2 rounded border transition-all ${isDark
        ? 'border-primary text-primary hover:bg-primary hover:text-black'
        : 'border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white'
        }`}
    >
      <span className="material-symbols-outlined !text-lg">download</span>
      <span className="font-bold">DOWNLOAD_RESUME.pdf</span>
    </a>
  </div>
);

const HelpOutput: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`${isDark ? 'text-slate-300' : 'text-text-main-light'} animate-fadeIn`}>
    <div className={`${isDark ? 'text-primary' : 'text-primary-dark'} font-bold mb-2`}>Available commands:</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
      <div><span className="font-bold">skills</span>          - List technical skills</div>
      <div><span className="font-bold">achievements</span>    - GSoC & DSA stats</div>
      <div><span className="font-bold">projects</span>        - View projects</div>
      <div><span className="font-bold">open source</span>     - GSoC details</div>
      <div><span className="font-bold">socials</span>         - Social links</div>
      <div><span className="font-bold">resume</span>          - Download Resume</div>
      <div><span className="font-bold">clear</span>           - Clear terminal</div>
      <div><span className="font-bold">help</span>            - Show this message</div>
    </div>
  </div>
);

const ErrorOutput: React.FC<{ isDark: boolean; invalidCommand?: string }> = ({ isDark, invalidCommand }) => (
  <div className={`${isDark ? 'text-red-400' : 'text-red-600'} animate-fadeIn`}>
    Command not found: {invalidCommand}. Type 'help' for available commands.
  </div>
);

const TerminalOutput: React.FC<{ type: TerminalCommandType; isDark: boolean; invalidCommand?: string }> = ({ type, isDark, invalidCommand }) => {
  switch (type) {
    case 'neofetch': return <NeofetchOutput isDark={isDark} />;
    case 'skills': return <SkillsOutput isDark={isDark} />;
    case 'achievements': return <AchievementsOutput isDark={isDark} />;
    case 'projects': return <ProjectsOutput isDark={isDark} />;
    case 'opensource': return <OpenSourceOutput isDark={isDark} />;
    case 'socials': return <SocialsOutput isDark={isDark} />;
    case 'resume': return <ResumeOutput isDark={isDark} />;
    case 'help': return <HelpOutput isDark={isDark} />;
    case 'error': return <ErrorOutput isDark={isDark} invalidCommand={invalidCommand} />;
    default: return null;
  }
};

const Terminal: React.FC<TerminalProps> = ({ isDark }) => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial commands
    setHistory([
      { command: 'neofetch', type: 'neofetch' },
      { command: 'skills', type: 'skills' }
    ]);

    // Listener for Navbar Event
    const handleExecuteResume = () => {
      // Scroll to terminal with offset for navbar
      if (containerRef.current) {
        const navbarHeight = 72; // 64px navbar + 20px padding
        const elementPosition = containerRef.current.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      runStory();
    };

    window.addEventListener('execute-resume', handleExecuteResume);
    return () => window.removeEventListener('execute-resume', handleExecuteResume);
  }, []);

  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  }, [history, currentInput]); // Scroll on history update OR typing

  const runStory = async () => {
    // Clear terminal first
    setHistory([]);

    // Story script
    const script = [
      { text: './identify.sh', cmd: 'neofetch', delay: 800 },
      { text: 'cat skills.txt', cmd: 'skills', delay: 800 },
      { text: 'cat achievements.txt', cmd: 'achievements', delay: 1000 },
      { text: 'ls -l projects', cmd: 'projects', delay: 1200 },
      { text: 'cat social_impact.log', cmd: 'opensource', delay: 1000 },
      { text: 'cat contacts.md', cmd: 'socials', delay: 800 },
      { text: 'download_resume', cmd: 'resume', delay: 500 },
    ];

    setIsTyping(true);

    for (const step of script) {
      // Typing animation
      for (let i = 0; i <= step.text.length; i++) {
        setCurrentInput(step.text.slice(0, i));
        await new Promise(r => setTimeout(r, 50)); // Typing speed
      }

      await new Promise(r => setTimeout(r, 300)); // Pause before enter

      // Execute command
      handleCommand(step.text);

      // Pause before next command
      await new Promise(r => setTimeout(r, step.delay));
    }

    setIsTyping(false);
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === 'clear') {
      setHistory([]);
      setCurrentInput('');
      return;
    }

    let type: TerminalCommandType = 'error';
    let invalidCommand: string | undefined = undefined;

    if (trimmedCmd === 'skills' || trimmedCmd === 'cat skills.txt') {
      type = 'skills';
    } else if (trimmedCmd === 'achievements' || trimmedCmd === 'cat achievements.txt') {
      type = 'achievements';
    } else if (trimmedCmd === 'projects' || trimmedCmd === 'ls projects' || trimmedCmd === 'ls -l projects') {
      type = 'projects';
    } else if (trimmedCmd === 'open source' || trimmedCmd === 'cat social_impact.log') {
      type = 'opensource';
    } else if (['socials', 'social', 'contact', 'cat contacts.md'].includes(trimmedCmd)) {
      type = 'socials';
    } else if (trimmedCmd === 'resume' || trimmedCmd === 'download_resume') {
      type = 'resume';
    } else if (trimmedCmd === 'help') {
      type = 'help';
    } else if (trimmedCmd === 'neofetch' || trimmedCmd === './identify.sh') {
      type = 'neofetch';
    } else if (trimmedCmd !== '') {
      type = 'error';
      invalidCommand = cmd;
    }

    if (trimmedCmd !== '') {
      setHistory(prev => [...prev, { command: cmd, type, invalidCommand }]);
    }
    setCurrentInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isTyping) {
      e.preventDefault();
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(currentInput);
    } else if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.stopPropagation();
    }
  };

  const focusInput = (e?: React.MouseEvent) => {
    const target = e?.target as HTMLElement;
    if (target?.closest('a') || target?.closest('button')) return;

    e?.preventDefault();
    inputRef.current?.focus();
  };

  return (
    <div
      ref={containerRef}
      className="w-full max-w-4xl mx-auto transform hover:scale-[1.005] transition-transform duration-300"
    >
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
          className={`p-6 font-mono text-sm md:text-base leading-relaxed space-y-4 h-[475px] overflow-y-auto flex flex-col ${isDark ? 'text-slate-300' : 'text-text-main-light'}`}
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
                onChange={(e) => !isTyping && setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                readOnly={isTyping}
                className={`w-full bg-transparent outline-none border-0 ring-0 focus:ring-0 focus:outline-none focus-visible:outline-none caret-transparent cursor-default ${isDark ? 'text-white' : 'text-text-main-light'}`}
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
