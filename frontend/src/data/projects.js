export const projects = [
  {
    index: "01",
    title: "VisualML Video Generator",
    slug: "videogen",
    category: "Generative AI & Multimodal",
    tagline: "Autonomous prompt-to-video production pipeline with Gemini & Remotion",
    description: "Transforms natural language topics into fully narrated, multi-scene motion videos. Orchestrates Gemini for script generation and scene storyboard planning, executes programmatic animation rendering via React/Remotion, synthesizes multi-voice narration with Cloud TTS, and assembles broadcast-ready MP4s with FFmpeg.",
    architecture: "Gemini 2.0 (Scripting & Timing) → Remotion (React Canvas) → Cloud TTS → FFmpeg (Muxing)",
    tech: ["Gemini 2.0", "Remotion", "React", "FFmpeg", "Google Cloud TTS", "Python"],
    link: "https://github.com/infinity-009/VideoGen",
    linkText: "GitHub Repo",
    featured: true
  },
  {
    index: "02",
    title: "Text-to-SQL Model Fine-Tuning",
    slug: "text2sql",
    category: "LLM Adaptation & PEFT",
    tagline: "Parameter-efficient adaptation of open-source LLMs for relational databases",
    description: "End-to-end fine-tuning and evaluation harness training open-source foundation models to translate complex natural-language analytical questions into multi-table SQL queries. Implements parameter-efficient LoRA adapters, AST-based schema pruning, and rigorous evaluation against the Spider benchmark.",
    architecture: "Spider Dataset → Tokenizer & AST Pruning → LoRA / PEFT Training → Automated SQL Validation",
    tech: ["PEFT / LoRA", "Llama 3", "PyTorch", "Hugging Face", "Spider Benchmark", "vLLM"],
    link: "https://github.com/infinity-009/text2sql",
    linkText: "GitHub Repo",
    featured: true
  },
  {
    index: "03",
    title: "Distributed System Design Platform",
    slug: "system-design",
    category: "Systems & Architecture",
    tagline: "100+ interactive architectural rigs simulating consensus, storage & scale",
    description: "An interactive distributed systems engineering hub built to visualize and benchmark foundational architectures in real-time. Features interactive simulators for Raft/Paxos consensus, write-ahead logging (WAL), distributed lock managers, cache-invalidation strategies, and streaming watermarks.",
    architecture: "Astro SSG → Interactive Canvas Rigs → Deterministic Event Loops → WebGL Visuals",
    tech: ["Astro", "TypeScript", "Distributed Systems", "Canvas API", "Algorithms"],
    link: "/system-design",
    linkText: "Explore Live Systems",
    isExternal: false,
    featured: true
  },
  {
    index: "04",
    title: "Real-time 3D Edge AI & Neural Motion",
    slug: "edge_ai",
    category: "Edge AI & Computer Vision",
    tagline: "Client-side 60 FPS neural motion tracking & 3D avatar kinematics",
    description: "Zero-latency in-browser neural computer vision system. Extracts 468 facial mesh landmarks, hand articulations, and skeletal pose keypoints directly from standard webcam video using MediaPipe, driving real-time 3D avatar kinematics rendered on WebGL canvas without server-side compute.",
    architecture: "Webcam Input → MediaPipe Tensors → Kinematic Solver → Three.js WebGL Renderer (60 FPS)",
    tech: ["MediaPipe", "Three.js", "WebGL", "TensorFlow.js", "Kinematics"],
    link: "/edge_ai",
    linkText: "Launch Live App",
    isExternal: false,
    featured: true
  },
  {
    index: "05",
    title: "MicroDuck — Autonomous Biped Robot",
    slug: "microduck",
    category: "Robotics & Embedded Systems",
    tagline: "Tiny bipedal robot with active balance and kinematic trajectory planning",
    description: "Hardware and embedded software implementation of a miniature bipedal locomotion robot. Developed inverse kinematics equations, center-of-mass balance algorithms, dynamic gait state machines, and micro-servo motor trajectory coordination rooted in IIT Roorkee mechanical robotics foundations.",
    architecture: "Kinematics Model → Gait State Machine → Sensor Feedback Loop → Hardware Actuation",
    tech: ["Embedded C++", "Inverse Kinematics", "Robotics Control", "Microcontrollers", "CAD"],
    link: "https://github.com/infinity-009/microduck",
    linkText: "GitHub Repo",
    featured: true
  },
  {
    index: "06",
    title: "High-Throughput Document Vision API",
    slug: "document-vision",
    category: "Vision & Microservices",
    tagline: "Sub-200ms CPU-optimized identity document extraction microservice",
    description: "Production-ready Computer Vision service engineered for high-volume document ingestion. Leverages YOLO and InsightFace for automated region detection, text extraction, and anti-spoofing verification with sub-200ms p95 latency executed on cost-effective CPU instances via ONNX Runtime optimization.",
    architecture: "FastAPI Gateway → ONNX Runtime (CPU Quantized) → OCR & Bounding Box Extraction",
    tech: ["FastAPI", "ONNX Runtime", "YOLO", "InsightFace", "Docker", "OpenCV"],
    link: "https://github.com/infinity-009",
    linkText: "Architecture & Code",
    featured: false
  },
  {
    index: "07",
    title: "Hybrid OLAP+OLTP Analytical Engine Research",
    slug: "manusai-research",
    category: "Data Systems & Benchmarking",
    tagline: "Comparative latency & execution analysis across hybrid database engines",
    description: "Comprehensive empirical research comparing query latency, memory consumption, and concurrency throughput across modern vectorized analytical engines (DuckDB, ClickHouse) against relational OLTP engines (PostgreSQL). Includes automated synthetic load generators and visualization testbeds.",
    architecture: "Synthetic TPC-H Benchmark Harness → Columnar / Row Engine Profiles → Latency Telemetry",
    tech: ["DuckDB", "ClickHouse", "PostgreSQL", "Python", "Data Modeling", "Benchmarking"],
    link: "https://github.com/infinity-009/ManusAI-Research",
    linkText: "GitHub Research",
    featured: false
  },
  {
    index: "08",
    title: "Distributed Logistics Streaming Pipeline",
    slug: "streaming-pipeline",
    category: "Distributed Data Systems",
    tagline: "High-throughput real-time spatial telemetry processing & ETL",
    description: "Fault-tolerant distributed stream processing pipeline built to ingest, deduplicate, and aggregate continuous spatial vehicle telemetry. Uses Kafka for partitioned event ingestion, PySpark for sliding-window stream processing, and PostgreSQL for materialized read storage.",
    architecture: "Kafka Event Broker → PySpark Structured Streaming → PostgreSQL Materialized Views",
    tech: ["Apache Spark", "Kafka", "PySpark", "PostgreSQL", "Docker", "Python"],
    link: "https://github.com/infinity-009",
    linkText: "Pipeline Spec",
    featured: false
  }
];

export const profile = {
  name: "Mallikarjun Reddy",
  role: "Senior GenAI Engineer | AI Systems",
  location: "Bengaluru, India",
  about: "Senior GenAI engineer with 3+ years building AI products and high-scale backend systems. Experience spans RAG, text-to-SQL, model evaluation, distributed data pipelines, and production cloud services.",
  contact: {
    email: "hello@mallikarjunreddy.com",
    phone: "+91 8688715349",
    github: "https://github.com/infinity-009",
    linkedin: "https://www.linkedin.com/in/infinity09/", 
    website: "https://www.mallikarjunreddy.com"
  },
  skills: [
    "Python", "LLMs", "RAG", "Prompt Engineering", "Model Evaluation", "Text-to-SQL", "PEFT/LoRA", "PyTorch", "FastAPI", "Kafka", "PySpark", "PostgreSQL", "Celery", "Redis", "Docker", "Kubernetes (GKE)", "Cloud SQL", "Computer Vision", "NLP", "ONNX Runtime"
  ]
};
