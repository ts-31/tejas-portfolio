export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-7xl mx-auto px-4 pb-24 relative z-10">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 section-heading">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative pl-8 border-l-2 border-border-subtle space-y-10">

          {/* Entry 1 — FlyYourTech */}
          <div className="relative">
            <span className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-primary border-2 border-background-dark" />
            <div className="bg-card-dark border border-border-subtle rounded-xl p-6 md:p-8 card-hover-glow ml-4">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-mono text-text-muted-dark uppercase tracking-widest">
                  Dec 2025 — Present
                </span>
                <span className="text-xs font-bold bg-primary/10 text-primary border border-primary/30 px-2 py-0.5 rounded-full">
                  Current
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mt-1">
                Full Stack + Agentic AI Developer
              </h3>
              <p className="font-mono text-primary text-base font-semibold mt-1">
                @ FlyYourTech
              </p>
              <p className="text-text-muted-dark text-sm leading-relaxed mt-3">
                Engineering production-focused applications by merging robust Full Stack development with advanced Agentic AI capabilities.
              </p>
              <ul className="mt-3 space-y-1.5">
                <li className="flex items-start">
                  <span className="text-primary mr-2">·</span>
                  <span className="text-text-muted-dark text-sm">Backend Architecture: Built production FastAPI backends with AWS CI/CD and Docker.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">·</span>
                  <span className="text-text-muted-dark text-sm">AI &amp; Data Integration: Integrated external AI APIs, PostgreSQL, and Qdrant vector search.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">·</span>
                  <span className="text-text-muted-dark text-sm">Security &amp; APIs: Implemented secure JWT/OAuth authentication, RBAC, and third-party API integrations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">·</span>
                  <span className="text-text-muted-dark text-sm">Full-Stack Features: Shipped responsive frontend dashboards and components using React, TypeScript, and Tailwind CSS.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Entry 2 — GSoC 2025 */}
          <div className="relative">
            <span className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-primary border-2 border-background-dark" />
            <div className="bg-card-dark border border-border-subtle rounded-xl p-6 md:p-8 card-hover-glow ml-4">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-mono text-text-muted-dark uppercase tracking-widest">
                  May 2025 — Aug 2025
                </span>
                <span className="text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  GSoC 2025
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mt-1">
                Open Source Contributor
              </h3>
              <p className="font-mono text-primary text-base font-semibold mt-1">
                @ Google Summer of Code · OpenAFS
              </p>
              <p className="text-text-muted-dark text-sm leading-relaxed mt-3">
                Built a production GNOME Shell extension for managing distributed file systems. Shipped features used by real Linux users.
              </p>
              <ul className="mt-3 space-y-1.5">
                <li className="flex items-start">
                  <span className="text-primary mr-2">·</span>
                  <span className="text-text-muted-dark text-sm">GNOME Shell Extension: Built using GJS with async, non-blocking UI for system-level operations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">·</span>
                  <span className="text-text-muted-dark text-sm">Live Features: Implemented live status indicators, notifications, and failure handling.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">·</span>
                  <span className="text-text-muted-dark text-sm">Open Source: Contributed to real users in academic and research environments.</span>
                </li>
              </ul>
              <a
                href="https://summerofcode.withgoogle.com/programs/2025/projects/dS7QYyMI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:text-primary-light mt-3 transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
