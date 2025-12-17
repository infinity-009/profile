import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Cpu, Eye, Database, Bot, Zap, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/projects';
import NeuralBackground from './NeuralBackground';

const skillIcons = {
  'AI/ML': Cpu,
  'Computer Vision': Eye,
  'Data Engineering': Database,
  'LLMs & RAG': Bot,
  'Automation': Zap,
};

const coreCapabilities = [
  { name: 'AI/ML', desc: 'Deep Learning & Model Deployment' },
  { name: 'Computer Vision', desc: 'Object Detection & Recognition' },
  { name: 'LLMs & RAG', desc: 'Retrieval Augmented Generation' },
  { name: 'Data Engineering', desc: 'ETL Pipelines & Analytics' },
  { name: 'Automation', desc: 'End-to-End Process Automation' },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Neural Network Background */}
      <NeuralBackground />
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left content - 7 cols */}
          <div className="lg:col-span-7">
            {/* Blurred background card for readability */}
            <div className="relative">
              <div className="absolute -inset-4 bg-black/40 backdrop-blur-md rounded-3xl"></div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative space-y-6 p-4"
              >
                {/* Status badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-emerald-300 text-sm font-medium">Open to opportunities</span>
                </motion.div>

                {/* Main intro */}
                <div className="flex items-center gap-6">
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                  >
                    <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_40px_rgba(34,211,238,0.4)] bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                      <img src="/profile/images/profile.png" alt={profile.name} className="w-full h-full object-cover" onError={(e) => {
                        e.target.style.display = 'none';
                      }} />
                      <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white" id="avatarFallback">
                        {profile.name.charAt(0)}{profile.name.split(' ')[1].charAt(0)}
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                    </div>
                  </motion.div>
                  
                  <div>
                    <motion.p 
                      className="text-cyan-400 text-sm font-semibold tracking-wider uppercase"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {profile.role}
                    </motion.p>
                    <motion.h1 
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {profile.name}
                    </motion.h1>
                    {/* Social links in hero */}
                    <motion.div 
                      className="flex items-center gap-3 mt-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.55 }}
                    >
                      <a
                        href={profile.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                        title="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={profile.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </motion.div>
                  </div>
                </div>

                {/* Description */}
                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed max-w-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Building production-grade AI systems that bridge the gap between research and real-world impact. 
                  Specialized in <span className="text-cyan-400">Generative AI</span>, <span className="text-emerald-400">Computer Vision</span>, 
                  and <span className="text-amber-400">scalable data pipelines</span>.
                </motion.p>

              {/* CTA buttons */}
              <motion.div 
                className="flex flex-wrap gap-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 font-semibold shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] transition-all hover:scale-105 hover:shadow-[0_15px_50px_-10px_rgba(16,185,129,0.6)]"
                >
                  Explore Projects
                  <ArrowDownRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 hover:border-cyan-400/50 transition-all backdrop-blur-sm"
                >
                  Let's Connect
                </a>
              </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right content - 5 cols - Capabilities Grid */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-3xl blur-xl"></div>
              
              <div className="relative p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Core Capabilities</h3>
                
                <div className="space-y-3">
                  {coreCapabilities.map((cap, idx) => {
                    const Icon = skillIcons[cap.name] || Cpu;
                    return (
                      <motion.div
                        key={cap.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        whileHover={{ x: 5, backgroundColor: 'rgba(34, 211, 238, 0.05)' }}
                        className="group flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-cyan-500/30 transition-all cursor-default"
                      >
                        <div className="p-2.5 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 text-cyan-400 group-hover:from-cyan-500/30 group-hover:to-emerald-500/30 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{cap.name}</p>
                          <p className="text-gray-500 text-sm">{cap.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Tech stack preview */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'PyTorch', 'FastAPI', 'React', 'Docker', 'GCP'].map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.05 }}
                        className="px-3 py-1.5 text-xs font-medium bg-white/5 text-gray-300 rounded-lg border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-2">
              <motion.div 
                className="w-1 h-2 bg-cyan-400 rounded-full"
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
