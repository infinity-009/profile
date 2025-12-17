import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Layers, Brain, Server, Shield, Eye, Sparkles, BarChart3, Cpu, Cog } from 'lucide-react';
import { projects } from '../data/projects';

const categoryIcons = {
  'AI/ML': Brain,
  'Generative AI': Sparkles,
  'Computer Vision': Eye,
  'Data Engineering': Layers,
  'Data Science': BarChart3,
  'Backend': Server,
  'Security': Shield,
  'Automation': Cog,
  'DevOps': Cpu,
};

const categoryColors = {
  'AI/ML': 'from-cyan-500 to-blue-500',
  'Generative AI': 'from-purple-500 to-pink-500',
  'Computer Vision': 'from-emerald-500 to-cyan-500',
  'Data Engineering': 'from-orange-500 to-amber-500',
  'Data Science': 'from-blue-500 to-indigo-500',
  'Backend': 'from-slate-500 to-zinc-500',
  'Security': 'from-red-500 to-rose-500',
  'Automation': 'from-amber-500 to-yellow-500',
  'DevOps': 'from-teal-500 to-emerald-500',
};

const ProjectCard = ({ project, index }) => {
  const Icon = categoryIcons[project.category] || Code;
  const gradientClass = categoryColors[project.category] || 'from-cyan-500 to-emerald-500';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      {/* Animated border gradient */}
      <div className={`absolute -inset-[1px] bg-gradient-to-r ${gradientClass} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`}></div>
      
      <div className="relative h-full bg-slate-950 border border-white/10 rounded-2xl overflow-hidden group-hover:border-transparent transition-all duration-300">
        {/* Top gradient line */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
        
        {/* Category badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent border border-white/10 rounded-full backdrop-blur-sm`}>
            {project.category}
          </span>
        </div>
        
        <div className="p-6 h-full flex flex-col">
          {/* Icon with animated background */}
          <motion.div 
            className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${gradientClass} p-[1px] mb-5`}
            whileHover={{ rotate: 5, scale: 1.1 }}
          >
            <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center">
              <Icon className="w-7 h-7 text-white" />
            </div>
          </motion.div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
            {project.description}
          </p>
          
          {/* Tech stack with stagger animation on hover */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0.8 }}
                whileHover={{ scale: 1.05, opacity: 1 }}
                className="px-2.5 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-md border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium bg-white/5 text-gray-500 rounded-md">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>
          
          {/* Link */}
          {project.link && project.link !== '#' && (
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
              whileHover={{ x: 5 }}
            >
              View Project <ExternalLink className="w-4 h-4 text-gray-400" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950"></div>
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Glowing orbs */}
      <motion.div 
        className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.1, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Code className="w-4 h-4" />
              Portfolio
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Production-grade AI systems—from computer vision pipelines to LLM-powered applications driving real business impact.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-emerald-400 text-sm font-medium">{projects.length} Projects</span>
            </div>
          </motion.div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
