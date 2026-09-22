import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Layers, GitBranch, Terminal } from 'lucide-react';
import { projects } from '../data/projects';

const categories = [
  'All Systems',
  'Generative AI & Multimodal',
  'Systems & Architecture',
  'Edge AI & Computer Vision',
  'Robotics & Embedded Systems'
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All Systems');

  const filteredProjects = activeCategory === 'All Systems'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-300 mb-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>// SYSTEMS_CATALOG.v2</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems & Codebases
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            Autonomous multimodal engines, model fine-tuning frameworks, and distributed cloud architectures designed and deployed for scale.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-8 mb-8 border-b border-white/[0.06]">
          {categories.map((cat) => {
            const count = cat === 'All Systems' 
              ? projects.length 
              : projects.filter(p => p.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-white text-zinc-950 font-bold shadow-sm'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-zinc-800 text-zinc-200' : 'bg-white/[0.06] text-zinc-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Stream */}
        <div className="space-y-6">
          {filteredProjects.map((p, idx) => (
            <article
              key={p.slug || p.title}
              id={p.slug}
              data-gaze-target={p.title}
              data-gaze-label={p.title}
              className="group relative rounded-2xl bg-zinc-950/70 border border-white/[0.08] hover:border-zinc-500/80 transition-all duration-300 p-6 sm:p-8 backdrop-blur-sm overflow-hidden"
            >
              {/* Subtle corner highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/[0.02] rounded-bl-full pointer-events-none group-hover:bg-cyan-500/[0.05] transition-colors duration-500"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Index & Meta (4 cols) */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-800/40">
                        {p.index || `0${idx + 1}`}
                      </span>
                      <span className="font-mono text-[11px] text-zinc-300 uppercase tracking-wider">
                        {p.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                      {p.title}
                    </h3>

                    <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                      {p.tagline}
                    </p>

                    {/* Quick Link on Left for desktop */}
                    <div className="pt-2">
                      <a
                        href={p.link}
                        target={p.link.startsWith('http') ? '_blank' : undefined}
                        rel={p.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-white/[0.2] text-zinc-200 hover:text-white transition-all"
                      >
                        {p.link.includes('github') ? (
                          <Github className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                        ) : (
                          <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                        )}
                        <span>{p.linkText}</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Deep Description, Architecture & Tech Stack (8 cols) */}
                  <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-5">
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {p.description}
                    </p>

                    {/* Architecture Trace Box */}
                    {p.architecture && (
                      <div className="p-3 rounded-xl bg-[#0c0d13] border border-white/[0.06] font-mono text-[11px] text-zinc-300 flex items-start gap-2.5">
                        <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-zinc-500 font-semibold block text-[10px] uppercase tracking-wider mb-0.5">
                            Dataflow & Pipeline
                          </span>
                          <span className="text-zinc-300">{p.architecture}</span>
                        </div>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.05]">
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mr-1">
                        Stack
                      </span>
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] text-zinc-300 px-2.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.07]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </article>
            ))}
        </div>

        {/* GitHub Anchor Footer */}
        <div className="mt-16 p-6 rounded-2xl bg-zinc-950/40 border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300">
              <GitBranch className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <p className="font-semibold text-sm text-white">Full Repositories & Experimental Repos</p>
              <p className="font-mono text-xs text-zinc-400">Explore open source codebases, models, and scripts on GitHub</p>
            </div>
          </div>
          <a
            href="https://github.com/infinity-009"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-semibold text-white transition-all shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>github.com/infinity-009</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
