import React, { useState, useEffect } from 'react';

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

const OpenSource: React.FC = () => {
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
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 section-heading">
          Open Source
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* GSoC Card */}
          <div className="md:col-span-2 bg-card-dark border border-border-subtle rounded-xl p-6 md:p-8 card-hover-glow relative overflow-hidden">
            {/* Left indigo accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl" />

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Icon badge */}
              <div className="flex-shrink-0 w-16 h-16 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-display font-black text-primary">G</span>
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <span className="text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full w-fit">
                  Accepted
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mt-1">
                  Google Summer of Code 2025
                </h3>
                <p className="font-mono text-primary text-sm font-semibold mt-1">
                  OpenAFS — Distributed File System
                </p>
                <p className="text-text-muted-dark text-sm leading-relaxed mt-3 max-w-xl">
                  Built a production-grade GNOME Shell extension for managing distributed file systems in academic and research environments. Implemented async, non-blocking UI flows for system-level operations, designed modular components for live status indicators, and shipped features used by real Linux users including live updates, notifications, and failure handling.
                </p>
                <a
                  href="https://summerofcode.withgoogle.com/programs/2025/projects/dS7QYyMI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:text-primary-light mt-4 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>

          {/* GitHub Stats Card */}
          <div className="bg-card-dark border border-border-subtle rounded-xl p-6 card-hover-glow">
            <div className="flex justify-between items-start">
              <p className="text-xs font-mono text-text-muted-dark uppercase tracking-widest mb-2">
                GitHub Contributions
              </p>
              <div className="flex gap-1">
                {years.slice(0, 3).map(year => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`text-[10px] px-2 py-0.5 rounded font-mono transition-colors ${
                      selectedYear === year
                        ? 'bg-primary text-white font-bold'
                        : 'bg-background-dark text-text-muted-dark hover:text-white'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-end mt-4">
              <span className="text-4xl font-bold text-white">
                {isLoading ? '...' : currentCount}
              </span>
              <span className="text-sm font-mono text-primary ml-2 mb-1">
                contributions in {selectedYear}
              </span>
            </div>

            <div className="h-2 w-full rounded-full bg-background-dark mt-4">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${Math.min(100, (currentCount / 500) * 100)}%` }}
              />
            </div>

            <p className="text-[10px] font-mono text-text-muted-dark mt-2">
              Real-time data from @ts-31
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
