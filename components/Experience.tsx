import React from 'react';

interface ExperienceProps {
    isDark: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 pb-24 relative z-10" id="experience">
            <div className="w-full max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <span className={`text-2xl font-mono font-bold ${isDark ? 'text-primary' : 'text-primary-dark'}`}>./experience</span>
                    <div className="h-px bg-primary/30 flex-grow"></div>
                </div>

                <div className={`rounded-lg border p-6 md:p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden group 
            ${isDark
                        ? 'border-primary bg-primary/5'
                        : 'border-primary-dark/30 bg-white shadow-card'
                    }`}>

                    {/* Glow effect */}
                    <div className={`absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 blur-[60px] rounded-full 
                ${isDark ? 'bg-primary/20' : 'bg-primary/10'}
            `}></div>

                    {/* Icon / Date col */}
                    <div className="flex flex-col items-center md:items-start flex-shrink-0 gap-4">
                        <div className={`w-20 h-20 rounded-xl border-2 flex items-center justify-center shadow-neon 
                    ${isDark
                                ? 'border-primary/50 bg-black'
                                : 'border-primary-dark/50 bg-gray-50'
                            }`}>
                            <span className={`material-symbols-outlined text-[40px] ${isDark ? 'text-primary' : 'text-primary-dark'}`}>
                                work
                            </span>
                        </div>

                        <div className={`text-sm font-mono font-bold tracking-tight text-center md:text-left ${isDark ? 'text-slate-400' : 'text-text-muted-light'}`}>
                            Dec 2025 — Present
                        </div>
                    </div>

                    {/* Content Col */}
                    <div className="flex flex-col gap-3 flex-grow text-center md:text-left z-10">
                        <div className="inline-flex items-center gap-2 mx-auto md:mx-0">
                            <span className="bg-primary text-black text-xs font-bold px-2 py-0.5 rounded-sm animate-pulse">CURRENT</span>
                            <h3 className={`text-2xl font-bold font-display ${isDark ? 'text-white' : 'text-text-main-light'}`}>
                                Full Stack + GenAI Intern
                            </h3>
                        </div>
                        <p className={`text-lg font-semibold font-mono ${isDark ? 'text-primary' : 'text-primary-dark'}`}>
                            @ FlyYourTech
                        </p>

                        <div className={`mt-2 text-sm leading-relaxed space-y-3 ${isDark ? 'text-slate-300' : 'text-text-muted-light'}`}>
                            <p>
                                Engineering production-focused applications by merging robust Full Stack development with advanced Generative AI capabilities.
                            </p>
                            <ul className="list-none space-y-2 text-left mx-auto md:mx-0 max-w-2xl">
                                <li className="flex items-start gap-2">
                                    <span className={`material-symbols-outlined !text-[18px] mt-0.5 ${isDark ? 'text-primary' : 'text-primary-dark'}`}>arrow_right</span>
                                    <span><strong>LLM Integration:</strong> Seamlessly embedding Gemini and GPT models into application logic natively.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className={`material-symbols-outlined !text-[18px] mt-0.5 ${isDark ? 'text-primary' : 'text-primary-dark'}`}>arrow_right</span>
                                    <span><strong>Advanced Prompting:</strong> Designing complex system prompts and managing context for deterministic outputs.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className={`material-symbols-outlined !text-[18px] mt-0.5 ${isDark ? 'text-primary' : 'text-primary-dark'}`}>arrow_right</span>
                                    <span><strong>Backend Architecture:</strong> Building optimized API routes, context generation layers, and executing basic RAG architecture.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className={`material-symbols-outlined !text-[18px] mt-0.5 ${isDark ? 'text-primary' : 'text-primary-dark'}`}>arrow_right</span>
                                    <span><strong>Frontend & Streaming:</strong> Connecting React/Next.js frontends to handle text-streaming for low-latency user experiences.</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
