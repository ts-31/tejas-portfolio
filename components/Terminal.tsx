'use client';

import React, { useState, useRef, useEffect } from 'react';

type TerminalCommandType = 'neofetch' | 'skills' | 'projects' | 'opensource' | 'socials' | 'achievements' | 'resume' | 'help' | 'error' | 'ai_response' | 'experience';

interface HistoryEntry {
  command: string;
  type: TerminalCommandType;
  invalidCommand?: string;
  aiResponse?: string;
  isAiStreaming?: boolean;
}

const NeofetchOutput: React.FC = () => (
  <div className="pl-0 md:pl-4 flex flex-col md:flex-row gap-6 pt-2 animate-fadeIn">
    <div className="hidden sm:block group/avatar">
      <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-primary/20 bg-zinc-900 shadow-lg transition-all duration-500 ease-out hover:border-primary/50 hover:scale-[1.02] hover:shadow-neon group-hover/avatar:animate-profile-pulse">
        {/* Entrance Overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        <img
          src="/img1.png"
          alt="Profile"
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover/avatar:scale-110"
        />

        {/* Subtle Scanline Overlay for hover depth */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/avatar:opacity-10 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-scanline"></div>
      </div>
    </div>

    <div className="border-l-0 md:border-l-2 border-primary/20 pl-0 md:pl-4 text-slate-300">
      <div className="grid grid-cols-[100px_1fr] gap-x-2 gap-y-1">
        <span className="text-primary font-bold">OS</span> <span>Arch Linux x86_64</span>
        <span className="text-primary font-bold">Host</span> <span>GSOC 2025 Contributor</span>
        <span className="text-primary font-bold">Kernel</span> <span>5.15.0-custom</span>
        <span className="text-primary font-bold">Uptime</span> <span>21 years</span>
        <span className="text-primary font-bold">Shell</span> <span>zsh 5.8</span>
        <span className="text-primary font-bold">Role</span> <span>Full Stack Developer</span>
        <span className="text-primary font-bold">Location</span> <span>India</span>
      </div>
    </div>
  </div>
);

const SkillsOutput: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-1 text-slate-300 animate-fadeIn">
    {['JavaScript', 'React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'Linux', 'Python'].map(skill => (
      <div key={skill} className="flex items-center gap-2">
        <span className="text-primary">➜</span>
        {skill}
      </div>
    ))}
  </div>
);

const AchievementsOutput: React.FC = () => (
  <div className="flex flex-col gap-2 text-slate-300 animate-fadeIn">
    <div className="flex items-start gap-3">
      <span className="material-symbols-outlined !text-lg mt-0.5 text-yellow-400">trophy</span>
      <div>
        <div className="font-bold text-white">Google Summer of Code 2025</div>
        <div className="text-sm opacity-80">Contributor @ OpenAFS</div>
      </div>
    </div>
    <div className="flex items-start gap-3">
      <span className="material-symbols-outlined !text-lg mt-0.5 text-blue-400">code</span>
      <div>
        <div className="font-bold text-white">DSA Problem Solving</div>
        <div className="text-sm opacity-80">225+ Problems Solved</div>
        <div className="text-sm mt-1 flex flex-col gap-0.5">
          <div>
            GeeksforGeeks → <a href="https://geeksforgeeks.org/user/sonawanetejas031/" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@sonawanetejas031</a>
          </div>
          <div>
            LeetCode → <a href="https://leetcode.com/u/T03/" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@T03</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProjectsOutput: React.FC = () => (
  <div className="text-slate-300 animate-fadeIn">
    <div className="mb-2 italic opacity-80">Available Projects (Click to view):</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
      {[
        { title: 'BudgetBuddy', desc: 'Full-stack finance tracker', id: 'project-budgetbuddy' },
        { title: 'BookMyDoctor', desc: 'MERN appointment platform', id: 'project-bookmydoctor' },
        { title: 'GIMP Ext Site Gen', desc: 'Hugo static site generator', id: 'project-gimp-ext-site-generator' },
        { title: 'AgentDesk', desc: 'AI Support Platform', id: 'project-agentdesk' },
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
            className="text-left hover:underline w-fit font-bold font-mono text-primary"
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

const ExperienceOutput: React.FC = () => (
  <div className="text-slate-300 animate-fadeIn">
    <div className="text-primary font-bold mb-2">CURRENT</div>
    <div>Full Stack + Agentic AI Intern @ FlyYourTech</div>
    <div className="pl-4 border-l-2 border-primary/20 mt-1 space-y-1">
      <div>• specialized in LLM Integration (Gemini/GPT)</div>
      <div>• Streaming AI Responses</div>
      <div>• Backend AI Architecture & Context Management</div>
    </div>
  </div>
);

const OpenSourceOutput: React.FC = () => (
  <div className="text-slate-300 animate-fadeIn">
    <div className="text-primary font-bold mb-2">ACCEPTED</div>
    <div>GSoC 2025 — OpenAFS</div>
    <div className="pl-4 border-l-2 border-primary/20 mt-1 space-y-1">
      <div>• Built production GNOME Shell extension (GJS)</div>
      <div>• Implemented Async UI & System integrations</div>
      <div>• Shipped features to real Linux users</div>
    </div>
  </div>
);

const SocialsOutput: React.FC = () => (
  <div className="pl-0 font-mono text-slate-300 animate-fadeIn">
    <div>LinkedIn → <a href="https://www.linkedin.com/in/tejas-266ba7364" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">tejas-sonawane</a></div>
    <div>GitHub   → <a href="https://github.com/ts-31" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ts-31</a></div>
    <div>X        → <a href="https://x.com/_Tejas_03" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@_Tejas_03</a></div>
  </div>
);

const ResumeOutput: React.FC = () => (
  <div className="flex flex-col gap-2 text-slate-300 animate-fadeIn">
    <div className="mb-1">Resume generated successfully.</div>
    <a
      href="/DOWNLOAD_RESUME.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download="Tejas_Sonawane_Resume.pdf"
      className="flex items-center gap-2 w-fit px-4 py-2 rounded border transition-all border-primary text-primary hover:bg-primary hover:text-black"
    >
      <span className="material-symbols-outlined !text-lg">download</span>
      <span className="font-bold">DOWNLOAD_RESUME.pdf</span>
    </a>
  </div>
);

const HelpOutput: React.FC = () => (
  <div className="text-slate-300 animate-fadeIn">
    <div className="text-primary font-bold mb-2">Available commands:</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
      <div><span className="font-bold">skills</span>          - List technical skills</div>
      <div><span className="font-bold">achievements</span>    - GSoC & DSA stats</div>
      <div><span className="font-bold">experience</span>      - Current Internship</div>
      <div><span className="font-bold">projects</span>        - View projects</div>
      <div><span className="font-bold">open source</span>     - GSoC details</div>
      <div><span className="font-bold">socials</span>         - Social links</div>
      <div><span className="font-bold">resume</span>          - Download Resume</div>
      <div><span className="font-bold">clear</span>           - Clear terminal</div>
      <div><span className="font-bold">help</span>            - Show this message</div>
    </div>
  </div>
);

const ErrorOutput: React.FC<{ invalidCommand?: string }> = ({ invalidCommand }) => (
  <div className="text-red-400 animate-fadeIn">
    Command not found: {invalidCommand}. Type 'help' for available commands.
  </div>
);

const AITypingOutput: React.FC<{ text?: string; isStreaming?: boolean }> = ({ text, isStreaming }) => {
  // Simple markdown bold parser for terminal aesthetics
  const formatText = (input: string) => {
    if (!input) return null;
    const parts = input.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-white">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="text-teal-400 animate-fadeIn space-y-2 whitespace-pre-wrap font-mono">
      <div className="flex items-center gap-2 mb-2 font-bold opacity-80 border-b border-current pb-1 w-fit">
        <span className="material-symbols-outlined !text-[16px]">smart_toy</span>
        TejasOS Assistant
      </div>
      <div className="leading-relaxed">
        {formatText(text || '')}
        {(isStreaming && (!text || text.length === 0)) ? 'Thinking...' : ''}
        {isStreaming && text && text.length > 0 ? <span className="animate-pulse">_</span> : ''}
      </div>
    </div>
  );
};

const TerminalOutput: React.FC<{ type: TerminalCommandType; invalidCommand?: string; aiResponse?: string; isAiStreaming?: boolean }> = ({ type, invalidCommand, aiResponse, isAiStreaming }) => {
  switch (type) {
    case 'neofetch': return <NeofetchOutput />;
    case 'skills': return <SkillsOutput />;
    case 'achievements': return <AchievementsOutput />;
    case 'experience': return <ExperienceOutput />;
    case 'projects': return <ProjectsOutput />;
    case 'opensource': return <OpenSourceOutput />;
    case 'socials': return <SocialsOutput />;
    case 'resume': return <ResumeOutput />;
    case 'help': return <HelpOutput />;
    case 'error': return <ErrorOutput invalidCommand={invalidCommand} />;
    case 'ai_response': return <AITypingOutput text={aiResponse} isStreaming={isAiStreaming} />;
    default: return null;
  }
};

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isFocused, setIsFocused] = useState(true); // Auto-focus on load
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

    // Auto-focus input on mount
    inputRef.current?.focus();

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
    return () => {
      window.removeEventListener('execute-resume', handleExecuteResume);
    };
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
      { text: 'cat current_job.log', cmd: 'experience', delay: 900 },
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

  const handleCommand = async (cmd: string) => {
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
    } else if (trimmedCmd === 'experience' || trimmedCmd === 'cat current_job.log') {
      type = 'experience';
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
      type = 'ai_response';
    }

    if (trimmedCmd !== '') {
      setCommandHistory(prev => [...prev, trimmedCmd]);
      setHistoryIndex(-1);
      setHistory(prev => [...prev, {
        command: cmd,
        type,
        invalidCommand: type === 'error' ? cmd : undefined,
        aiResponse: '',
        isAiStreaming: type === 'ai_response'
      }]);
      setCurrentInput('');

      if (type === 'ai_response') {
        setIsTyping(true);
        try {
          const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userMessage: cmd,
              messages: []
            })
          });

          if (!response.ok) throw new Error('API Error');

          const reader = response.body?.getReader();
          const decoder = new TextDecoder();

          if (reader) {
            let aiText = '';
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;

              const chunk = decoder.decode(value, { stream: true });
              aiText += chunk;

              setHistory(prev => {
                const newHistory = [...prev];
                const lastIdx = newHistory.length - 1;
                if (newHistory[lastIdx].type === 'ai_response') {
                  newHistory[lastIdx] = { ...newHistory[lastIdx], aiResponse: aiText };
                }
                return newHistory;
              });
            }
          }
        } catch (error) {
          setHistory(prev => {
            const newHistory = [...prev];
            const lastIdx = newHistory.length - 1;
            if (newHistory[lastIdx].type === 'ai_response') {
              newHistory[lastIdx] = {
                ...newHistory[lastIdx],
                aiResponse: "System Error: Connection to TejasOS interrupted. Please check API Key."
              };
            }
            return newHistory;
          });
        } finally {
          setHistory(prev => {
            const newHistory = [...prev];
            const lastIdx = newHistory.length - 1;
            if (newHistory[lastIdx].type === 'ai_response') {
              newHistory[lastIdx] = { ...newHistory[lastIdx], isAiStreaming: false };
            }
            return newHistory;
          });
          setIsTyping(false);
        }
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isTyping) {
      e.preventDefault();
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(currentInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    } else if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
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
      <div className="rounded-lg border border-primary/50 bg-black/80 shadow-neon backdrop-blur-xl overflow-hidden flex flex-col transition-colors duration-300">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-primary/20 bg-primary/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-primary/70 font-mono flex items-center gap-1">
            <span className="material-symbols-outlined !text-[14px]">home</span>
            tejas@linux-box:~
          </div>
          <div className="w-12"></div>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalContentRef}
          className="p-6 font-mono text-sm md:text-base leading-relaxed space-y-4 h-[475px] overflow-y-auto flex flex-col text-slate-300"
          onClick={focusInput}
        >
          {/* Command History */}
          {history.map((entry, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex gap-2 text-primary">
                <span>tejas@linux-box:~$</span>
                <span className="text-white">{entry.command}</span>
              </div>
              <div className="pl-0 pt-1">
                <TerminalOutput type={entry.type} invalidCommand={entry.invalidCommand} aiResponse={entry.aiResponse} isAiStreaming={entry.isAiStreaming} />
              </div>
            </div>
          ))}

          {/* Current Input */}
          <div className="flex gap-2 text-primary">
            <span>tejas@linux-box:~$</span>
            <div className="flex-1 relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => !isTyping && setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                readOnly={isTyping}
                className="w-full bg-transparent outline-none border-0 ring-0 focus:ring-0 focus:outline-none focus-visible:outline-none caret-transparent cursor-default text-white"
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
                className={`absolute pointer-events-none w-2.5 h-5 ${isFocused ? 'animate-blink' : 'opacity-0'} bg-primary`}
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
