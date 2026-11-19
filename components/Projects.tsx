import React, { useState, useEffect } from 'react';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    title: 'BudgetBuddy',
    description:
      'A full-stack finance management app that helps users track expenses, set budgets, and analyze spending with interactive charts. Features secure authentication, budget categorization, and real-time insights for better financial control.',
    image: '/budgetBuddy.png',
    tags: ['React', 'Node.js', 'Chart.js', 'Finance'],
    category: 'web',
    github: 'https://github.com/ts-31/budgetBuddy',
    live: 'https://budget-buddy-frontend-phi.vercel.app/',
  },
  {
    title: 'BookMyDoctor',
    description:
      'A full-stack MERN appointment booking platform featuring a production-style agentic AI assistant. Built with LangGraph, the ReAct agent allows patients to find doctors, check availability, and book appointments entirely through natural language chat.',
    image: '/bookmydoctor.png',
    tags: ['MERN', 'LangGraph', 'Agentic AI', 'React'],
    category: 'web',
    github: 'https://github.com/ts-31/bookmydoctor',
    live: 'https://bookmydocker-client.vercel.app/',
  },
  {
    title: 'GIMP Ext site Generator',
    description:
      'Multilingual static site generator for GIMP Extensions using Hugo. Parsed AppStream XML metadata into localized Markdown files with multi-language support and CI/CD integration.',
    image: '/gimp.png',
    tags: ['Hugo', 'Python', 'XML', 'CI/CD'],
    category: 'open-source',
    github:
      'https://gitlab.gnome.org/Infrastructure/gimp-extensions-web/-/merge_requests/4',
    live: 'https://gimp-extensions-web-a83ffe.pages.gitlab.gnome.org/',
  },
  {
    title: 'AgentDesk',
    description:
      'A full-stack, production-grade agentic AI application for customer support. Features a LangGraph-orchestrated ReAct agent that answers questions from a knowledge base and interacts with live CRM data.',
    image: '/agentdesk.png',
    tags: ['LangGraph', 'LangSmith', 'FastAPI', 'pgvector', 'Grok', 'LangChain'],
    category: 'agentic-ai',
    github: 'https://github.com/ts-31/AgentDesk',
  },
  {
    title: 'AgentHub',
    description:
      'Minimal chatbot platform that allows users to create multiple AI agents and chat with them in real time using Gemini LLM.',
    image: '/agent-hub.png',
    tags: ['React', 'Gemini API', 'Node.js', 'AI'],
    category: 'web',
    github: 'https://github.com/ts-31/agent-hub',
    live: 'https://agent-hub-h9c8.onrender.com/',
  },
  {
    title: 'OpenAFS Client Manager',
    description:
      'A GNOME Shell extension to manage the OpenAFS client on Linux desktops. Features a GUI for starting/stopping the client, toggling autostart, and real-time status updates.',
    image: '/gnome-shell-extension-openafs.png',
    tags: ['GNOME Shell', 'GJS', 'OpenAFS', 'Linux'],
    category: 'open-source',
    github:
      'https://github.com/openafs-contrib/gnome-shell-extension-openafs',
  },
];

const thumbnailGradient: Record<string, string> = {
  web: 'bg-gradient-to-br from-indigo-900/40 to-blue-900/30',
  'agentic-ai': 'bg-gradient-to-br from-violet-900/40 to-purple-900/30',
  'open-source': 'bg-gradient-to-br from-emerald-900/30 to-teal-900/20',
};

const categoryPillStyle: Record<string, string> = {
  web: 'border-indigo-500/40 text-indigo-400 bg-indigo-900/30',
  'agentic-ai': 'border-violet-500/40 text-violet-400 bg-violet-900/30',
  'open-source': 'border-emerald-500/40 text-emerald-400 bg-emerald-900/30',
};

const categoryLabel: Record<string, string> = {
  web: 'Web',
  'agentic-ai': 'Agentic AI',
  'open-source': 'Open Source',
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Web', 'Agentic AI', 'Open Source'];
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const toggleExpand = (title: string, e: React.MouseEvent) => {
    e.preventDefault();
    setExpandedProjects(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Web') return project.category === 'web';
    if (activeFilter === 'Agentic AI') return project.category === 'agentic-ai';
    if (activeFilter === 'Open Source')
      return project.category === 'open-source';
    return false;
  });

  useEffect(() => {
    const handleFilterChange = (e: any) => {
      setActiveFilter(e.detail);
    };
    window.addEventListener('set-project-filter', handleFilterChange);
    return () => window.removeEventListener('set-project-filter', handleFilterChange);
  }, []);

  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 py-16 relative z-10"
      id="projects"
    >
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 section-heading">
          Projects
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? 'bg-primary text-white font-semibold text-sm px-4 py-1.5 rounded-full transition-all'
                  : 'bg-card-dark text-text-muted-dark border border-border-subtle hover:border-primary/50 hover:text-white text-sm px-4 py-1.5 rounded-full transition-all'
              }
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              id={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative rounded-xl border overflow-hidden transition-all duration-300 w-full max-w-[340px] md:max-w-[400px] mx-auto flex flex-col h-full bg-card-dark border-border-subtle card-hover-glow"
            >
              {/* Thumbnail */}
              <div
                className={`aspect-video w-full relative flex items-center justify-center border-b border-border-subtle ${thumbnailGradient[project.category] ?? ''}`}
              >
                {/* Large letter icon */}
                <span className="font-display text-5xl font-black text-white/20 select-none">
                  {project.title.charAt(0)}
                </span>

                {/* Category pill */}
                <div className="absolute bottom-3 left-3">
                  <span
                    className={`text-[9px] uppercase font-mono px-2 py-0.5 rounded-full border ${categoryPillStyle[project.category] ?? ''}`}
                  >
                    {categoryLabel[project.category] ?? project.category}
                  </span>
                </div>

                {/* Floating action buttons on hover */}
                <div className="absolute bottom-3 right-3 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-card-dark/90 border border-border-subtle text-text-muted-dark hover:text-primary hover:border-primary/50 transition-colors"
                      title="View Source"
                    >
                      <span className="text-sm font-mono leading-none">&lt;/&gt;</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-card-dark/90 border border-border-subtle text-text-muted-dark hover:text-primary hover:border-primary/50 transition-colors"
                      title="View Live"
                    >
                      <span className="text-sm leading-none">↗</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative flex flex-col flex-grow">
                {/* Title */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="mb-6 flex-grow flex flex-col">
                  <p className={`text-sm leading-relaxed text-zinc-400 ${!expandedProjects[project.title] ? 'line-clamp-3' : ''}`}>
                    {project.description}
                  </p>
                  {project.description.length > 100 && (
                    <button
                      onClick={(e) => toggleExpand(project.title, e)}
                      className="text-xs font-mono text-primary/80 hover:text-primary self-start mt-1.5 transition-colors"
                    >
                      {expandedProjects[project.title] ? 'Show less' : 'Read more...'}
                    </button>
                  )}
                </div>

                {/* Tags */}
                <div className="flex gap-1.5 flex-wrap items-start">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-[10px] font-medium tracking-wide uppercase px-2 py-1 rounded-full bg-background-dark text-text-muted-dark border border-border-subtle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
