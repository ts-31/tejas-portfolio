import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectsProps {
  isDark: boolean;
}

const projectsData: Project[] = [
  {
    title: 'BudgetBuddy',
    description: 'A full-stack finance management app that helps users track expenses, set budgets, and analyze spending with interactive charts. Features secure authentication, budget categorization, and real-time insights for better financial control.',
    image: '/budgetBuddy.png',
    tags: ['React', 'Node.js', 'Chart.js', 'Finance'],
    category: 'web',
    github: 'https://github.com/ts-31/budgetBuddy',
    live: 'https://budget-buddy-frontend-phi.vercel.app/',
  },
  {
    title: 'BookMyDoctor',
    description: 'BookMyDoctor is a full-stack MERN doctor appointment booking platform supporting Patients, Doctors, and Admins. Features JWT-based authentication, role-based dashboards, appointment booking & management, image uploads via Cloudinary, and a scalable REST API.',
    image: '/bookmydoctor.png',
    tags: ['MERN Stack', 'Redux', 'Cloudinary', 'JWT'],
    category: 'web',
    github: 'https://github.com/ts-31/BookMyDoctor',
    live: 'https://client-silk-six-29.vercel.app/',
  },
  {
    title: 'GIMP Extensions Website Generator',
    description: 'Multilingual static site generator for GIMP Extensions using Hugo. Parsed AppStream XML metadata into localized Markdown files with multi-language support and CI/CD integration.',
    image: '/gimp.png',
    tags: ['Hugo', 'Go', 'XML', 'CI/CD'],
    category: 'open-source',
    github: 'https://gitlab.gnome.org/Infrastructure/gimp-extensions-web/-/merge_requests/4',
    live: 'https://gimp-extensions-web-a83ffe.pages.gitlab.gnome.org/',
  },
  {
    title: 'MatchMyResume',
    description: 'Chrome Extension with a FastAPI backend that matches resumes to job descriptions using the Google Gemini API. Provides AI-based match scores and actionable suggestions.',
    image: '/matchmyresume.png',
    tags: ['FastAPI', 'Python', 'Gemini AI', 'Chrome Ext'],
    category: 'backend',
    github: 'https://github.com/ts-31/MatchMyResume',
  },
  {
    title: 'AgentHub',
    description: 'Minimal chatbot platform that allows users to create multiple AI agents and chat with them in real time using Gemini LLM.',
    image: '/agent-hub.png',
    tags: ['React', 'Gemini API', 'Node.js', 'AI'],
    category: 'web',
    github: 'https://github.com/ts-31/agent-hub',
    live: 'https://agent-hub-h9c8.onrender.com/',
  },
  {
    title: 'OpenAFS Client Manager',
    description: 'A GNOME Shell extension to manage the OpenAFS client on Linux desktops. Features a GUI for starting/stopping the client, toggling autostart, and real-time status updates.',
    image: '/gnome-shell-extension-openafs.png',
    tags: ['GNOME Shell', 'GJS', 'OpenAFS', 'Linux'],
    category: 'open-source',
    github: 'https://github.com/openafs-contrib/gnome-shell-extension-openafs',
  },
];

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Web', 'Backend', 'Open Source'];

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Web') return project.category === 'web';
    if (activeFilter === 'Backend') return project.category === 'backend';
    if (activeFilter === 'Open Source') return project.category === 'open-source';
    return false;
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 relative z-10" id="projects">
      <div className="flex items-center gap-4 mb-8">
        <span className={`text-2xl font-mono font-bold ${isDark ? 'text-primary' : 'text-primary-dark'}`}>./projects</span>
        <div className="h-px bg-primary/30 flex-grow"></div>
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`font-switzer font-medium text-sm sm:text-base tracking-wide pb-0.5 whitespace-nowrap transition-colors border-b-2 
                ${activeFilter === filter
                ? (isDark ? 'text-primary border-primary drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]' : 'text-primary-dark border-primary-dark')
                : (isDark ? 'text-slate-400 border-transparent hover:text-white hover:border-slate-600' : 'text-text-muted-light border-transparent hover:text-text-main-light hover:border-gray-400')
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="flex overflow-x-auto pb-8 gap-8 snap-x snap-mandatory">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={`flex-none w-[300px] md:w-[400px] snap-center group relative rounded-lg border overflow-hidden transition-all duration-300 
                ${isDark
                ? 'bg-card-dark border-zinc-800 hover:border-primary hover:shadow-neon-hover'
                : 'bg-card-light border-gray-300 hover:border-primary-dark hover:shadow-card'
              }`}
          >
            <div className={`aspect-video w-full overflow-hidden relative ${isDark ? 'bg-zinc-900' : 'bg-gray-100'}`}>
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${isDark ? 'opacity-60 group-hover:opacity-100' : 'opacity-90 group-hover:opacity-100'}`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black to-transparent opacity-80' : 'from-gray-900/50 to-transparent opacity-60'}`}></div>
            </div>

            <div className={`p-5 relative z-10 -mt-10 rounded-t-xl flex flex-col h-[calc(100%-aspect-video)] ${isDark ? '' : 'bg-white border-t border-gray-100'}`}>
              <div className="flex justify-between items-end mb-2">
                <h3 className={`text-xl font-bold transition-colors ${isDark ? 'text-white group-hover:text-primary' : 'text-text-main-light group-hover:text-primary-dark'}`}>
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-mono border px-2 py-1 rounded transition-all 
                    ${isDark
                        ? 'text-primary border-primary/30 bg-black/50 hover:bg-primary hover:text-black'
                        : 'text-primary-dark border-primary-dark/30 bg-gray-50 hover:bg-primary hover:text-black'
                      }`}>
                    git clone
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs font-mono border px-2 py-1 rounded transition-all 
                      ${isDark
                          ? 'text-primary border-primary/30 bg-black/50 hover:bg-primary hover:text-black'
                          : 'text-primary-dark border-primary-dark/30 bg-gray-50 hover:bg-primary hover:text-black'
                        }`}>
                      live demo
                    </a>
                  )}
                </div>
              </div>
              <p className={`text-sm mb-4 flex-grow ${isDark ? 'text-slate-400' : 'text-text-muted-light'}`}>
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded border 
                    ${isDark
                      ? 'bg-zinc-900 text-slate-300 border-zinc-800'
                      : 'bg-gray-100 text-text-muted-light border-gray-200'
                    }`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;