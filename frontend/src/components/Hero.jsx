import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/projects';

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
            <div className="space-y-3">
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
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4">
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

          {/* Right Column (5 cols): Framed Portrait & Role Card */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-[340px] rounded-2xl bg-zinc-950/80 border border-white/[0.1] p-3 shadow-2xl backdrop-blur-xl group">
              {/* Corner tech accents */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-400/50"></div>
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-400/50"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-cyan-400/50"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-400/50"></div>

              {/* Photo */}
              <div className="relative aspect-[4/4.5] w-full rounded-xl overflow-hidden bg-zinc-900 mb-3 border border-white/[0.06]">
                <img 
                  src="/images/profile.png" 
                  alt={profile.name}
                  className="w-full h-full object-cover grayscale-[25%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-semibold text-white text-sm">Mallikarjun Reddy</p>
                  <p className="font-mono text-[11px] text-zinc-300">IIT Roorkee · Class of 2023</p>
                </div>
              </div>

              {/* Role Snapshot info */}
              <div className="px-2 py-1.5 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-300 font-mono text-[11px]">Current Role</span>
                  <span className="text-zinc-200 font-medium">Kredily (Jun 2026 – Pres.)</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-300 font-mono text-[11px]">Core Stack</span>
                  <span className="text-zinc-200 font-mono text-[11px]">Python · RAG · GKE</span>
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
