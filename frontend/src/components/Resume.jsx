import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Mail, Phone, Github, Linkedin, ChevronRight, Trophy, BookOpen, Rocket } from 'lucide-react';

const resumeData = {
  name: "Mallikarjun Reddy",
  title: "AI/ML Engineer",
  email: "hello@mallikarjunreddy.com",
  phone: "8688715349",
  linkedin: "https://www.linkedin.com/in/infinity09/",
  github: "https://github.com/infinity-009",
  location: "India",
  summary: "AI/ML Engineer with proven expertise in Natural Language Processing, Computer Vision, Generative AI, and Data Engineering. Experienced in delivering enterprise-grade conversational AI platforms, RAG systems, Text-to-SQL agents, and ATS solutions. Strong background in distributed data pipelines (Kafka, PySpark), cloud deployment (AWS, GCP, Azure), and scalable microservices (FastAPI, Docker, Linux). Skilled in finetuning open-source LLMs (Llama, Qwen, DeepSeek, Mistral) with LoRA, PEFT, SFT and deploying optimized GPU workloads. Passionate about bridging AI research and real-world applications while mentoring teams and leading startup initiatives.",
  
  experience: [
    {
      title: "AI/ML Engineer",
      company: "Isourse Technologies",
      location: "India",
      period: "Aug 2024 – Present",
      highlights: [
        "Built a conversational BI platform enabling SQL database interaction via natural language, generating interactive dashboards",
        "Developed a RAG-based support chatbot with persistent agentic memory to improve contextual conversations",
        "Finetuned & deployed open-source LLMs (Llama, Qwen, DeepSeek) for Text-to-SQL and chatbot solutions using SFT, PEFT, LoRA",
        "Trained & deployed YOLO + OCR for document text extraction and FaceNet for user authentication",
        "Contributed to real-time data warehousing pipeline: APIs → Kafka → PySpark for distributed transformations",
        "Developed an ATS system leveraging embeddings, semantic similarity, and custom scoring metrics",
        "Migrated ML services from Windows to Dockerized FastAPI with monitoring via Grafana & Prometheus",
        "Created synthetic datasets for vision & NLP models to improve performance and robustness",
        "Designed warehouse monitoring system using NVR camera streams processed by server-side object detection"
      ]
    },
    {
      title: "ML Researcher",
      company: "Independent/Freelance",
      location: "Remote",
      period: "Oct 2023 – Aug 2024",
      highlights: [
        "Chess-Bot: Created ML evaluator + MiniMax agent for autonomous chess playing",
        "Air Quality Prediction: Developed hybrid ensemble (LSTM, GRU, Prophet) with lower RMSE vs single models",
        "Text Summarization: Finetuned Longformer Encoder-Decoder (16k context length) using PEFT, QLoRA, SFT methods"
      ]
    },
    {
      title: "Co-Founder & Developer",
      company: "Coupondel",
      location: "IIT Roorkee Pre-incubated",
      period: "Jul 2022 – Mar 2023",
      highlights: [
        "Developed an e-commerce coupon discovery & cashback platform with affiliate marketing",
        "Led a team of 5 developers to build MVP and deployed live web app"
      ]
    }
  ],
  
  education: [
    {
      degree: "B.Tech",
      field: "Mechanical Engineering",
      institution: "IIT Roorkee",
      location: "Roorkee, Uttarakhand",
      period: "2019 – 2023",
      cgpa: "7.4/10",
      highlights: ["JEE Advanced Rank: 3015"]
    }
  ],
  
  skills: {
    "Languages & Frameworks": ["Python", "C++", "SQL", "FastAPI", "PyTorch", "TensorFlow", "LangChain", "NodeJS", "React"],
    "AI / ML": ["LLMs", "RAG", "Agentic Workflows", "Chatbots", "OCR", "CNNs", "Transformers", "LoRA/PEFT/SFT", "Text-to-SQL", "vLLM", "Diffusion Models", "GANs", "STT/TTS"],
    "Data & Cloud": ["Kafka", "PySpark", "PostgreSQL", "MS SQL", "Milvus", "ClickHouse", "TiDB", "Neo4j", "AWS", "GCP", "Azure", "Docker", "Linux", "Grafana", "Prometheus"],
    "Tools": ["Git/GitHub", "VS Code", "PyCharm", "Conda", "CI/CD", "Azure DevOps"]
  },
  
  certifications: [
    "Machine Learning Specialization — Coursera",
    "Deep Learning Specialization — Coursera",
    "Web Developer Bootcamp — Udemy",
    "Competitive Programming — NPTEL"
  ],

  selectedProjects: [
    { name: "Text-to-SQL Agent", tech: "Python, LangChain, Groq, FastAPI, Postgres/MS SQL" },
    { name: "Identity Verification Pipeline", tech: "PyTorch, YOLO, OCR, FaceNet" },
    { name: "Air Quality Hybrid Model", tech: "LSTM, GRU, Prophet" },
    { name: "ATS Resume Matcher", tech: "NLP, Embeddings, FAISS" }
  ]
};

const Resume = () => {
  const resumeRef = useRef(null);

  return (
    <section id="resume" className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Briefcase className="w-4 h-4" />
              Career
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              My <span className="text-emerald-400">Resume</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              A snapshot of my professional journey, skills, and achievements.
            </p>
          </motion.div>
        </div>

        {/* Resume Content */}
        <div ref={resumeRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Contact Card */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                Contact
              </h3>
              <div className="space-y-3 text-sm">
                <a href={`mailto:${resumeData.email}`} className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  {resumeData.email}
                </a>
                <a href={`tel:${resumeData.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  {resumeData.phone}
                </a>
                <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Skills */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                Skills
              </h3>
              <div className="space-y-4">
                {Object.entries(resumeData.skills).map(([category, skills], idx) => (
                  <motion.div 
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">{category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.slice(0, 6).map((skill, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-white/5 text-gray-300 rounded-md border border-white/10">
                          {skill}
                        </span>
                      ))}
                      {skills.length > 6 && (
                        <span className="px-2 py-1 text-xs bg-white/5 text-gray-500 rounded-md">
                          +{skills.length - 6}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                Certifications
              </h3>
              <div className="space-y-2">
                {resumeData.certifications.map((cert, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <ChevronRight className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    {cert}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Summary */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-white/10 backdrop-blur-xl">
              <p className="text-gray-300 leading-relaxed text-sm">{resumeData.summary}</p>
            </div>

            {/* Experience */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-amber-400" />
                Experience
              </h3>
              <div className="space-y-8">
                {resumeData.experience.map((job, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l-2 border-cyan-500/30"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900"></div>
                    
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{job.title}</h4>
                        <p className="text-cyan-400 text-sm">{job.company} • {job.location}</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <ChevronRight className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                Education
              </h3>
              {resumeData.education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l-2 border-emerald-500/30"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900"></div>
                  
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{edu.degree}, {edu.field}</h4>
                      <p className="text-emerald-400 text-sm">{edu.institution}</p>
                      <p className="text-gray-500 text-sm">{edu.location} • CGPA: {edu.cgpa}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {edu.highlights.map((h, i) => (
                      <span key={i} className="flex items-center gap-1 text-xs text-gray-400">
                        <Trophy className="w-3 h-3 text-amber-500" />
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selected Projects */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-purple-400" />
                Selected Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.selectedProjects.map((project, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
                  >
                    <h4 className="text-white font-medium mb-1">{project.name}</h4>
                    <p className="text-xs text-gray-500">{project.tech}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
