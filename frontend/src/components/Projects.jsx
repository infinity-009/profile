import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, FolderGit2 } from 'lucide-react';

const featuredProjects = [
  {
    index: '01',
    title: 'VisualML Video Generator',
    category: 'Generative AI & Multimodal',
    tagline: 'Autonomous prompt-to-video production pipeline',
    description: 'Translates high-level technical concepts into narrated, multi-scene motion graphics videos. Gemini generates structured storyboards and voice scripts; Remotion programmatically executes animation frames, and FFmpeg handles multi-track audio/video compilation.',
    tech: ['Gemini API', 'Remotion', 'FFmpeg', 'Google Cloud TTS', 'Python'],
    link: 'https://github.com/infinity-009/VideoGen',
    linkText: 'View on GitHub',
  },
  {
    index: '02',
    title: 'Document AI Chatbot (localGPT)',
    category: 'RAG & Edge AI',
    tagline: 'Zero-data-leakage enterprise document intelligence',
    description: 'Privacy-first retrieval-augmented assistant designed to interrogate confidential internal PDFs and docs entirely on-device, employing local quantized LLMs, vector search, and hybrid semantic retrieval without outbound API requests.',
    tech: ['RAG', 'Local LLMs', 'ChromaDB', 'LangChain', 'Python'],
    link: 'https://github.com/infinity-009/localGPT',
    linkText: 'View on GitHub',
  },
  {
    index: '03',
    title: 'Text-to-SQL Model Fine-Tuning',
    category: 'Model Adaptation & Evaluation',
    tagline: 'Domain-adapted LLMs for relational database querying',
    description: 'Fine-tuning pipeline training open-source foundation models to translate complex natural-language questions into multi-table SQL queries. Employs parameter-efficient LoRA adapters, AST schema pruning, and rigorous benchmark validation.',
    tech: ['PEFT / LoRA', 'Llama 3', 'Hugging Face', 'Spider Benchmark', 'PyTorch'],
    link: 'https://github.com/infinity-009/text2sql',
    linkText: 'View on GitHub',
  },
  {
    index: '04',
    title: 'Deep Image Colorization',
    category: 'Computer Vision & Deep Learning',
    tagline: 'Conditional GAN framework for chromatic synthesis',
    description: 'Deep generative framework that reconstructs plausible, high-fidelity color distributions from grayscale imagery. Formulated with conditional GAN architecture, perceptual loss regularization, and high-throughput evaluation scripts.',
    tech: ['Conditional GANs', 'PyTorch', 'OpenCV', 'Computer Vision'],
    link: 'https://github.com/infinity-009/image-colorization',
    linkText: 'View on GitHub',
  }
];

const secondaryProjects = [
  {
    title: '3D Avatar Motion Capture',
    category: 'Computer Vision & WebGL',
    description: 'Real-time browser-based avatar system mirroring 468 facial landmarks and skeletal kinematics via standard webcam.',
    tech: ['MediaPipe', 'Three.js', 'WebGL'],
    link: '/edge_ai',
    isExternal: false,
    linkText: 'Live Demo'
  },
  {
    title: 'Enterprise AI Assistant',
    category: 'Conversational Systems',
    description: 'Corporate assistant featuring reciprocal rank fusion hybrid search (BM25 + vector) and persistent session memory.',
    tech: ['Gemini 2.0', 'FastRTC', 'Milvus'],
    link: 'https://github.com/infinity-009',
    isExternal: true,
    linkText: 'Codebase'
  },
  {
    title: 'Identity Verification API',
    category: 'High-Throughput Vision',
    description: 'Sub-200ms CPU-optimized microservice extracting structured ID data from document images using YOLO and ONNX.',
    tech: ['YOLO', 'OCR', 'FastAPI', 'ONNX'],
    link: 'https://github.com/infinity-009',
    isExternal: true,
    linkText: 'Microservice'
  },
  {
    title: 'Logistics Stream Pipeline',
    category: 'Data Engineering',
    description: 'High-throughput stream processing pipeline ingesting and transforming telemetry feeds for real-time analytics.',
    tech: ['Apache Spark', 'Kafka', 'PostgreSQL'],
    link: 'https://github.com/infinity-009',
    isExternal: true,
    linkText: 'Pipeline Spec'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
              Selected Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Production-grade generative AI, model fine-tuning experiments, and distributed computing systems with public repositories.
          </p>
        </div>

        {/* Featured Projects: Editorial alternating rows */}
        <div className="space-y-6 mb-20">
          {featuredProjects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group p-6 sm:p-8 rounded-2xl bg-zinc-950/60 border border-white/[0.08] hover:border-zinc-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/40"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left meta (4 cols) */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-zinc-300 font-semibold px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.08]">
                      {p.index}
                    </span>
                    <span className="font-mono text-xs text-zinc-300">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                    {p.tagline}
                  </p>
                </div>

                {/* Right content & stack (8 cols) */}
                <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-5">
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {p.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span 
                          key={t}
                          className="font-mono text-[11px] text-zinc-300 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-cyan-400 hover:underline transition-colors ml-auto"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{p.linkText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Archive Grid */}
        <div className="pt-12 border-t border-white/[0.08]">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Additional Systems & Infrastructure
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Microservices, pipelines, and internal tools engineered for production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {secondaryProjects.map((item, i) => (
              <div 
                key={i}
                className="p-5 rounded-xl bg-zinc-950/40 border border-white/[0.06] hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] text-zinc-300">
                      {item.category}
                    </span>
                    <a 
                      href={item.link}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
                    >
                      <span>{item.linkText}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04]">
                  {item.tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-white/[0.03]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
