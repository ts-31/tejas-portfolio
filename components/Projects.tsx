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
      'BookMyDoctor is a full-stack MERN doctor appointment booking platform supporting Patients, Doctors, and Admins. Features JWT-based authentication, role-based dashboards, appointment booking & management, image uploads via Cloudinary, and a scalable REST API.',
    image: '/bookmydoctor.png',
    tags: ['MERN Stack', 'Redux', 'Cloudinary', 'JWT'],
    category: 'web',
    github: 'https://github.com/ts-31/BookMyDoctor',
    live: 'https://client-silk-six-29.vercel.app/',
  },
  {
    title: 'GIMP Ext site Generator',
    description:
      'Multilingual static site generator for GIMP Extensions using Hugo. Parsed AppStream XML metadata into localized Markdown files with multi-language support and CI/CD integration.',
    image: '/gimp.png',
    tags: ['Hugo', 'Go', 'XML', 'CI/CD'],
    category: 'open-source',
    github:
      'https://gitlab.gnome.org/Infrastructure/gimp-extensions-web/-/merge_requests/4',
    live: 'https://gimp-extensions-web-a83ffe.pages.gitlab.gnome.org/',
  },
  {
    title: 'MatchMyResume',
    description:
      'Chrome Extension with a FastAPI backend that matches resumes to job descriptions using the Google Gemini API. Provides AI-based match scores and actionable suggestions.',
    image: '/matchmyresume.png',
    tags: ['FastAPI', 'Python', 'Gemini AI', 'Chrome Ext'],
    category: 'backend',
    github: 'https://github.com/ts-31/MatchMyResume',
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
  const filters = ['All', 'Web', 'Backend', 'Open Source'];
  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Web') return project.category === 'web';
    if (activeFilter === 'Backend') return project.category === 'backend';
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
              className="group relative rounded-lg border overflow-hidden transition-all duration-300 w-full max-w-[340px] md:max-w-[400px] mx-auto flex flex-col h-full bg-card-dark border-zinc-800 hover:border-primary hover:shadow-neon-hover"
            >
              {/* Blur Container Wrapper */}
              <div className="flex flex-col h-full transition-all duration-500 group-hover:blur-sm group-hover:opacity-30">
                {/* Image */}
                <div
                  className="aspect-video w-full overflow-hidden rounded-t-lg relative shrink-0 bg-zinc-900"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"
                  />
                </div>
                {/* Content */}
                <div
                  className="px-5 pt-5 pb-4 relative z-10 -mt-10 rounded-t-xl rounded-b-lg flex flex-col flex-grow"
                >
                  {/* Title + Links */}
                  <div className="flex justify-between items-center gap-3 mb-4">
                    <h3
                      className="text-xl font-bold leading-tight truncate text-white"
                    >
                      {project.title}
                    </h3>
                    <div className="flex gap-2 shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] sm:text-xs font-mono border px-2 py-1 rounded transition-all text-primary border-primary/30 bg-black/50"
                      >
                        github
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] sm:text-xs font-mono border px-2 py-1 rounded transition-all text-primary border-primary/30 bg-black/50"
                        >
                          live
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed line-clamp-3 mb-6 text-slate-400"
                  >
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap items-start mt-auto">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase font-mono px-2 py-0.5 rounded border bg-zinc-900 text-slate-300 border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Centered Premium Overlay */}
              <div className="absolute inset-0 z-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none px-6 text-center">
                <div className="px-4 py-2 rounded-lg border backdrop-blur-md shadow-2xl bg-black/40 border-primary/50 text-primary shadow-primary/20">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-current animate-pulse shadow-[0_0_10px_currentColor]"></span>
                    <h3 className="text-2xl font-bold tracking-wider font-mono uppercase drop-shadow-sm">
                      {project.title}
                    </h3>
                  </div>
                  <div className="h-0.5 w-full mt-2 bg-gradient-to-r from-transparent via-current to-transparent opacity-50"></div>
                </div>
                <p className="mt-4 text-xs font-mono tracking-widest uppercase text-primary/70">
                  View Details
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;