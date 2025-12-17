import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Cloud, Code2, Cpu, Eye, Sparkles, Server, Workflow, Boxes } from 'lucide-react';
import { profile } from '../data/projects';

const skillCategories = [
  {
    name: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-cyan-500 to-blue-500',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'ONNX Runtime', 'Hugging Face']
  },
  {
    name: 'Generative AI',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
    skills: ['LLMs', 'RAG', 'Gemini', 'LangChain', 'Vector DBs']
  },
  {
    name: 'Computer Vision',
    icon: Eye,
    color: 'from-emerald-500 to-cyan-500',
    skills: ['OpenCV', 'YOLO', 'InsightFace', 'OCR', 'Image Processing']
  },
  {
    name: 'Backend Development',
    icon: Server,
    color: 'from-orange-500 to-amber-500',
    skills: ['FastAPI', 'Python', 'PostgreSQL', 'Redis', 'REST APIs']
  },
  {
    name: 'Data Engineering',
    icon: Workflow,
    color: 'from-blue-500 to-indigo-500',
    skills: ['Apache Spark', 'Kafka', 'Airflow', 'ETL/ELT', 'Streamlit']
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-teal-500 to-emerald-500',
    skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD']
  }
];

const SkillCard = ({ category, index }) => {
  const Icon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow effect */}
      <div className={`absolute -inset-[1px] bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500`}></div>
      
      <div className="relative h-full bg-slate-950 border border-white/10 rounded-2xl p-6 group-hover:border-transparent transition-all">
        {/* Header */}
        <div className="flex items-center gap-4 mb-5">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-[1px]`}>
            <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center group-hover:bg-transparent transition-all">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" 
              style={{ '--tw-gradient-from': 'white', '--tw-gradient-to': '#cbd5e1' }}>
            {category.name}
          </h3>
        </div>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1.5 text-sm font-medium bg-white/5 text-gray-300 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Cpu className="w-4 h-4" />
            Expertise
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Arsenal</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technologies and frameworks I leverage to architect and deploy cutting-edge AI systems.
          </motion.p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </div>
        
        {/* All skills marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden py-8"
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <motion.div 
            className="flex gap-4 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...profile.skills, ...profile.skills].map((skill, i) => (
              <span 
                key={i} 
                className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-gray-300 font-medium"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
