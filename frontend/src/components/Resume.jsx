import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowUpRight, GraduationCap, Award, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior GenAI Engineer | AI Systems',
    company: 'Kredily',
    location: 'Bengaluru, India',
    period: 'Jun 2026 – Present',
    highlights: [
      'Architected enterprise GenAI agents & RAG workflows for HR/payroll intelligence, enabling natural language querying and automated report generation.',
      'Scaled core platform supporting roughly ~20M requests/day and ~20k daily active users, reducing evening peak compute demand by about 40% (10 → 6 vCPU).',
      'Delivered Attendance Regularisation V2 fleet-wide (cutting query volume by ~99%) and took the core statutory payroll arrears calculation engine from design to general availability.',
      'Improved database read efficiency, remediated month-end disk spills, and hardened Celery workers with non-blocking retries across millions of daily keys.'
    ]
  },
  {
    role: 'AI and ML Engineer',
    company: 'Isourse Technologies',
    location: 'India',
    period: 'Aug 2024 – May 2026',
    highlights: [
      'Built a conversational BI platform for exploring relational SQL databases through natural-language questions, replacing manual dashboard authoring.',
      'Developed a RAG support assistant with persistent agentic memory and evaluated open-source foundation models (Llama, Qwen, DeepSeek) on reasoning benchmarks.',
      'Delivered distributed stream processing pipelines (Kafka → PySpark) and deployed containerized microservices on GKE and Cloud SQL with sub-200ms inference.'
    ]
  },
  {
    role: 'ML Researcher',
    company: 'Independent / Freelance',
    location: 'Remote',
    period: 'Oct 2023 – Aug 2024',
    highlights: [
      'Developed autonomous Chess-Bot engine combining custom PyTorch positional board evaluator with alpha-beta pruned MiniMax search.',
      'Engineered hybrid time-series ensemble (LSTM, GRU, Prophet) for multi-factor air quality prediction with lower RMSE than single baseline models.',
      'Fine-tuned Longformer Encoder-Decoder models (16k context window) for long-document summarization using PEFT and QLoRA.'
    ]
  }
];

const Resume = () => {
  return (
    <section id="experience" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (4 cols): Overview, Education, Resume Download */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
                Career History
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
                Experience
              </h2>
              <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                3+ years taking complex machine learning models, agentic systems, and distributed platforms to high-concurrency production.
              </p>
            </div>

            {/* Resume Download Action */}
            <div className="p-5 rounded-xl bg-zinc-950/60 border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Complete Curriculum Vitae</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Verified single-page and detailed 2-page formats available for review.
              </p>
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href="/Mallikarjun_Reddy_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Mallikarjun_Reddy_Resume.pdf"
                  className="inline-flex items-center justify-between text-xs font-semibold bg-white text-zinc-950 px-3.5 py-2 rounded-lg hover:bg-zinc-200 transition-colors"
                >
                  <span>Download Résumé (PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-700" />
                </a>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-5 rounded-xl bg-zinc-950/40 border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>Education</span>
              </div>
              <p className="text-xs font-medium text-zinc-200">
                B.Tech in Mechanical Engineering
              </p>
              <p className="text-xs text-zinc-400">
                Indian Institute of Technology Roorkee
              </p>
              <div className="font-mono text-[11px] text-zinc-300 pt-1 flex items-center gap-2">
                <span>2019 – 2023</span>
                <span>•</span>
                <span>CGPA: 7.4/10</span>
                <span>•</span>
                <span>JEE Adv: 3015</span>
              </div>
            </div>
          </div>

          {/* Right Column (8 cols): Chronological Roles */}
          <div className="lg:col-span-8 space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-950/60 border border-white/[0.08] hover:border-zinc-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3 pb-3 border-b border-white/[0.06]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-medium text-zinc-400 mt-0.5">
                      <span className="text-zinc-200">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-zinc-400 mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5 mt-4">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Resume;
