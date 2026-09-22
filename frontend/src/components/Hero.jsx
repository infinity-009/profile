import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  const metrics = [
    { value: '~20M', label: 'Daily requests scaled' },
    { value: '40%', label: 'Peak compute reduction' },
    { value: 'IIT Roorkee', label: 'B.Tech Mechanical (2023)' },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-subtle-grid">
      {/* Subtle radial vignette - eliminates harsh borders without glowing orbs */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090a0f] via-transparent to-[#090a0f] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(14,165,233,0.06),transparent_80%)] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols): Editorial Typography */}
          <motion.div 
            className="lg:col-span-7 space-y-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs text-zinc-300 tracking-wide">
                Senior GenAI Engineer · Bengaluru, India
              </span>
            </div>

            {/* Main Headline */}
            <div 
              className="space-y-3"
              data-gaze-target="Mallikarjun Reddy"
              data-gaze-label="Mallikarjun Reddy · Senior GenAI Engineer"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Mallikarjun Reddy
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-300 leading-snug">
                Architecting autonomous <span className="text-white font-semibold">Generative AI products</span> and high-scale <span className="text-white font-semibold">AI Systems</span>.
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
              3+ years taking AI systems from research to production. Deep focus on <strong>RAG pipelines</strong>, <strong>Text-to-SQL agents</strong>, <strong>parameter-efficient fine-tuning (LoRA)</strong>, and <strong>high-throughput distributed cloud services</strong> across GKE, PostgreSQL, Kafka, and Celery.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-all shadow-md shadow-black/30"
              >
                <span>Featured Projects</span>
                <ArrowDown className="w-4 h-4 text-zinc-700" />
              </a>
              <a
                href="/Mallikarjun_Reddy_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Mallikarjun_Reddy_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.12] text-zinc-200 font-medium text-sm hover:bg-white/[0.08] hover:text-white transition-all"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                <span>Download Résumé</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>

            {/* Proof Points */}
            <div 
              className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4"
              data-gaze-target="Production Scale Metrics"
              data-gaze-label="Scale: ~20M req/day & 40% compute cut"
            >
              {metrics.map((m, i) => (
                <div key={i} className="space-y-1">
                  <div className="font-mono text-lg sm:text-xl font-bold text-white tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-zinc-400 leading-tight">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column (5 cols): Obsidian System Spec Terminal (No photo) */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div 
              className="relative w-full max-w-[390px] rounded-2xl bg-zinc-950/90 border border-white/[0.1] shadow-2xl backdrop-blur-xl overflow-hidden group"
              data-gaze-target="System Architecture Spec"
              data-gaze-label="IIT Roorkee '23 · Kredily GenAI Stack"
            >
              {/* Corner tech accents */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-400/50 z-10"></div>
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-400/50 z-10"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-cyan-400/50 z-10"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-400/50 z-10"></div>

              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-zinc-900/50">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></div>
                  <span className="ml-2 font-mono text-[11px] text-zinc-400">system_spec.json</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  NOMINAL
                </span>
              </div>

              {/* Code / Spec Body */}
              <div className="p-4 sm:p-5 font-mono text-xs space-y-3.5 leading-relaxed bg-[#0c0d12]/95">
                <div>
                  <span className="text-zinc-400 font-semibold">// credentials & identity</span>
                  <div className="text-zinc-200 mt-1">
                    <span className="text-cyan-400 font-medium">engineer</span> = &quot;Mallikarjun Reddy&quot;
                  </div>
                  <div className="text-zinc-400">
                    <span className="text-cyan-400 font-medium">education</span> = &quot;IIT Roorkee · Class of 2023&quot;
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.06]">
                  <span className="text-zinc-400 font-semibold">// current production environment</span>
                  <div className="text-zinc-200 mt-1">
                    <span className="text-cyan-400 font-medium">role</span> = &quot;Senior GenAI Engineer | AI Systems&quot;
                  </div>
                  <div className="text-zinc-400">
                    <span className="text-cyan-400 font-medium">org</span> = &quot;Kredily · Bengaluru, India&quot;
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.06]">
                  <span className="text-zinc-400 font-semibold">// core engineering domains</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {['Agentic RAG', 'Text-to-SQL', 'LoRA / PEFT', 'Distributed Celery', 'GKE / Kafka', 'PostgreSQL Scale'].map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                  <span className="text-zinc-400">production_traffic</span>
                  <span className="text-emerald-400 font-bold tracking-tight">~20M req / day</span>
                </div>

                <div className="pt-2 border-t border-white/[0.06] text-[11px] text-zinc-400 flex items-center gap-2">
                  <span className="text-emerald-400">&gt;</span>
                  <span>status: <span className="text-zinc-200">production_verified</span></span>
                  <span className="w-1.5 h-3 bg-cyan-400/80 animate-pulse ml-auto"></span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
