import React, { useState, useEffect } from 'react';

interface OpenSourceProps {
  isDark: boolean;
}

interface GitHubData {
  total: {
    [key: string]: number;
  };
  contributions: Array<{
    date: string;
    count: number;
    level: number;
  }>;
}

const OpenSource: React.FC<OpenSourceProps> = ({ isDark }) => {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/github');
        if (!response.ok) throw new Error('Failed to fetch GitHub data');
        const data = await response.json();
        setGithubData(data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const years = githubData ? Object.keys(githubData.total).map(Number).sort((a, b) => b - a) : [2026, 2025, 2024];
  const currentCount = githubData?.total[selectedYear.toString()] || 0;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-24 relative z-10" id="gsoc">
      <div className="flex items-center gap-4 mb-10">
        <span className={`text-2xl font-mono font-bold ${isDark ? 'text-primary' : 'text-primary-dark'}`}>./open_source</span>
        <div className="h-px bg-primary/30 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* GSOC Card */}
        <div className={`md:col-span-2 rounded-lg border p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group 
            ${isDark
            ? 'border-primary bg-primary/5'
            : 'border-primary-dark/30 bg-white shadow-card'
          }`}>
          <div className={`absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 blur-[50px] rounded-full 
             ${isDark ? 'bg-primary/20' : 'bg-primary/10'}
          `}></div>

          <div className="flex-shrink-0 relative">
            <div className={`w-24 h-24 rounded-full border-2 flex items-center justify-center shadow-neon 
                ${isDark
                ? 'border-primary/50 bg-black'
                : 'border-primary-dark/50 bg-gray-50'
              }`}>
              <span className={`material-symbols-outlined text-[48px] animate-pulse ${isDark ? 'text-primary' : 'text-primary-dark'}`}>
                code_blocks
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mx-auto md:mx-0">
              <span className="bg-primary text-black text-xs font-bold px-2 py-0.5 rounded-sm">ACCEPTED</span>
              <h3 className={`text-2xl font-bold font-display ${isDark ? 'text-white' : 'text-text-main-light'}`}>
                Google Summer of Code 2025
              </h3>
            </div>
            <p className={`text-base font-semibold mb-1 ${isDark ? 'text-primary' : 'text-primary-dark'}`}>
              OpenAFS — Distributed File System
            </p>
            <p className={`text-sm leading-relaxed max-w-xl ${isDark ? 'text-slate-300' : 'text-text-muted-light'}`}>
              Built a production-grade GNOME Shell extension for managing distributed file systems in academic and research environments. Implemented async, non-blocking UI flows for system-level operations, designed modular components for live status indicators, and shipped features used by real Linux users including live updates, notifications, and failure handling.
            </p>
            <div className="flex gap-4 mt-2 justify-center md:justify-start">
              <a
                href="https://summerofcode.withgoogle.com/programs/2025/projects/dS7QYyMI"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-mono flex items-center gap-1 font-bold hover:underline ${isDark ? 'text-primary hover:text-white' : 'text-primary-dark hover:text-text-main-light'}`}
              >
                <span>view_project</span>
                <span className="material-symbols-outlined !text-[14px]">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>

        {/* GitHub Stats Card */}
        <div className={`rounded-lg border p-6 flex flex-col justify-center gap-4 transition-colors 
            ${isDark
            ? 'border-zinc-800 bg-zinc-900/50 hover:border-primary/50'
            : 'border-gray-300 bg-white hover:border-primary-dark/50 shadow-card'
          }`}>
          <div className="flex justify-between items-start">
            <h4 className={`font-mono text-sm uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-text-muted-light'}`}>
              GitHub Contributions
            </h4>
            <div className="flex gap-1">
              {years.slice(0, 3).map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`text-[10px] px-1.5 py-0.5 rounded font-mono transition-colors ${selectedYear === year
                      ? (isDark ? 'bg-primary text-black font-bold' : 'bg-primary-dark text-white font-bold')
                      : (isDark ? 'bg-zinc-800 text-slate-400 hover:text-white' : 'bg-gray-100 text-text-muted-light hover:text-text-main-light')
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-text-main-light'}`}>
              {isLoading ? '...' : currentCount}
            </span>
            <span className={`text-sm mb-1.5 font-mono ${isDark ? 'text-primary' : 'text-primary-dark'}`}>
              contributions in {selectedYear}
            </span>
          </div>
          <div className={`h-2 w-full rounded-full overflow-hidden ${isDark ? 'bg-zinc-800' : 'bg-gray-200'}`}>
            <div
              className={`h-full rounded-full shadow-[0_0_10px_rgba(57,255,20,0.5)] transition-all duration-500 ${isDark ? 'bg-primary' : 'bg-primary-dark'}`}
              style={{ width: `${Math.min(100, (currentCount / 500) * 100)}%` }}
            ></div>
          </div>
          <p className={`text-[10px] font-mono ${isDark ? 'text-slate-500' : 'text-text-muted-light'}`}>
            Real-time data from @ts-31
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;