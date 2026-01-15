import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectsProps {
  isDark: boolean;
}

const projectsData: Project[] = [
  {
    title: 'Neural Net Viz',
    description: 'A visualization tool for neural networks built with Python and React. Visualize layers in real-time.',
    image: 'https://picsum.photos/600/340?random=1',
    tags: ['Python', 'React', 'TensorFlow'],
    category: 'web',
  },
  {
    title: 'Linux Kernel Mod',
    description: 'Custom kernel module for optimized process scheduling. Deep dive into OS architecture.',
    image: 'https://picsum.photos/600/340?random=2',
    tags: ['C', 'Linux', 'Kernel'],
    category: 'backend',
  },
  {
    title: 'Cloud Dashboard',
    description: 'Full stack MERN dashboard for monitoring cloud resources across AWS and Azure.',
    image: 'https://picsum.photos/600/340?random=3',
    tags: ['MongoDB', 'Express', 'React'],
    category: 'web',
  },
];

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Web', 'Backend', 'Open Source', 'GSOC'];

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div 
            key={index}
            className={`group relative rounded-lg border overflow-hidden transition-all duration-300 
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
            
            <div className={`p-5 relative z-10 -mt-10 rounded-t-xl ${isDark ? '' : 'bg-white border-t border-gray-100'}`}>
              <div className="flex justify-between items-end mb-2">
                <h3 className={`text-xl font-bold transition-colors ${isDark ? 'text-white group-hover:text-primary' : 'text-text-main-light group-hover:text-primary-dark'}`}>
                    {project.title}
                </h3>
                <a href="#" className={`text-xs font-mono border px-2 py-1 rounded transition-all 
                    ${isDark 
                        ? 'text-primary border-primary/30 bg-black/50 hover:bg-primary hover:text-black' 
                        : 'text-primary-dark border-primary-dark/30 bg-gray-50 hover:bg-primary hover:text-black'
                    }`}>
                    git clone
                </a>
              </div>
              <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-text-muted-light'}`}>
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
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