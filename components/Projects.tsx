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
        <div className="flex items-center gap-4 mb-8">
          <span
            className="text-2xl font-mono font-bold text-primary"
          >
            ./projects
          </span>
          <div className="h-px bg-primary/30 flex-grow" />
        </div>
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-switzer font-medium text-sm sm:text-base tracking-wide pb-0.5 whitespace-nowrap transition-colors border-b-2
                ${activeFilter === filter
                  ? 'text-primary border-primary drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]'
                  : 'text-slate-400 border-transparent hover:text-white hover:border-slate-600'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
        {/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              id={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative rounded-xl border overflow-hidden transition-all duration-500 w-full max-w-[340px] md:max-w-[400px] mx-auto flex flex-col h-full bg-black/40 border-zinc-800/80 hover:border-primary/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-primary/10 hover:-translate-y-1 backdrop-blur-sm"
            >
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden relative shrink-0 border-b border-zinc-800/80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                
                {/* Floating Actions on Hover */}
                <div className="absolute bottom-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                   {project.github && (
                     <a 
                       href={project.github} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="flex items-center justify-center w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700/50 text-white hover:text-primary hover:border-primary/50 transition-colors shadow-lg"
                       title="View Source"
                     >
                       <span className="material-symbols-outlined !text-[20px]">code</span>
                     </a>
                   )}
                   {project.live && (
                     <a 
                       href={project.live} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="flex items-center justify-center w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700/50 text-white hover:text-primary hover:border-primary/50 transition-colors shadow-lg"
                       title="View Live"
                     >
                       <span className="material-symbols-outlined !text-[20px]">rocket_launch</span>
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
                      className="text-[9px] sm:text-[10px] font-medium tracking-wide uppercase px-2 py-1 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800/80 group-hover:border-zinc-700 transition-colors"
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