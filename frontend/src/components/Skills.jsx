import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    num: '01',
    title: 'Applied Generative AI',
    focus: 'Enterprise LLM Products & Agentic Workflows',
    items: [
      'RAG Architectures (Hybrid BM25 + Dense Vectors)',
      'Natural-Language Text-to-SQL Engines',
      'Multi-Agent Coordination & Persistent Memory',
      'Prompt Engineering & Structured Guardrails',
      'Vector Databases (Milvus, Chroma, pgvector)'
    ]
  },
  {
    num: '02',
    title: 'Distributed Systems & Scale',
    focus: 'High-Concurrency Cloud Architecture',
    items: [
      'High-Throughput Web Services (~20M req/day)',
      'Async Task Queues (Celery, Redis, RabbitMQ)',
      'Microservices Orchestration on Google GKE',
      'Performance Tuning & Compute Cost Reduction',
      'Production Root Cause Analysis & Zero-Downtime Releases'
    ]
  },
  {
    num: '03',
    title: 'Data Platforms & Database Engineering',
    focus: 'Streaming Pipelines & Storage Optimization',
    items: [
      'PostgreSQL (Native Partitioning, Vacuuming, Query Plans)',
      'High-Scale Connection Pooling (PgBouncer)',
      'Real-Time Streaming Pipelines (Apache Kafka → PySpark)',
      'Spill-to-Disk Remediation & High-Volume Caching',
      'ETL / ELT Data Transformation Workflows'
    ]
  },
  {
    num: '04',
    title: 'Model Adaptation & Computer Vision',
    focus: 'Inference Optimization & Lightweight Deployment',
    items: [
      'Parameter-Efficient Fine-Tuning (PEFT, LoRA, QLoRA)',
      'Model Evaluation on Domain Benchmarks (Spider)',
      'Object Detection & Document Parsing (YOLO, OCR)',
      'Real-Time Kinematics & Landmarks (MediaPipe, WebGL)',
      'CPU & GPU Inference Optimization (ONNX Runtime)'
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
              Technical Index
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Core Capabilities
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Architectural competencies spanning large language models, distributed streaming data, and mission-critical cloud backends.
          </p>
        </div>

        {/* 2x2 Clean Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-950/40 border border-white/[0.08] hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-sm font-bold text-zinc-300">
                  {cap.num}
                </span>
                <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
                  {cap.focus}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                {cap.title}
              </h3>

              <ul className="space-y-2">
                {cap.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
