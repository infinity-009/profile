export const projects = [
  {
    title: "VisualML Video Generator",
    description: "Turns a topic prompt into a narrated, multi-scene video. Gemini writes scripts and storyboards; Remotion renders animation, visual checks refine scenes, and FFmpeg assembles the MP4.",
    tech: ["Gemini API", "Remotion", "FFmpeg", "Google Cloud TTS", "Python"],
    category: "Generative AI",
    link: "https://github.com/infinity-009/VideoGen"
  },
  {
    title: "Document AI Chatbot",
    description: "Privacy-first question-answering assistant over local documents, retrieving relevant passages before generating an answer while keeping source material on device.",
    tech: ["RAG", "Local LLMs", "Document Retrieval", "LangChain", "Python"],
    category: "Generative AI",
    link: "https://github.com/infinity-009/localGPT"
  },
  {
    title: "Text-to-SQL Model Fine-Tuning",
    description: "Trains and evaluates open-source language models to translate complex natural-language questions into SQL, including parameter-efficient fine-tuning (LoRA/PEFT) experiments.",
    tech: ["PEFT", "LoRA", "Language Models", "Evaluation", "Spider Benchmark"],
    category: "AI/ML",
    link: "https://github.com/infinity-009/text2sql"
  },
  {
    title: "Image Colorization",
    description: "Uses a conditional GAN to infer plausible color from grayscale input, featuring an end-to-end training pipeline and high-fidelity visual synthesis.",
    tech: ["Conditional GANs", "Computer Vision", "PyTorch", "Deep Learning"],
    category: "Computer Vision",
    link: "https://github.com/infinity-009/image-colorization"
  },
  {
    title: "3D Avatar Motion Capture",
    description: "Real-time 3D avatar that mirrors your movements using standard webcam with full body, hand, and 468-point facial landmark tracking.",
    tech: ["MediaPipe", "Three.js", "WebGL", "Face Mesh", "Hand Tracking"],
    category: "Computer Vision",
    link: "/edge_ai"
  },
  {
    title: "Enterprise AI Chatbot",
    description: "Next-generation company assistant featuring hybrid retrieval (keyword + semantic), real-time voice interaction, and persistent agentic memory.",
    tech: ["Gemini 2.0", "Llama 3.1", "FastRTC", "Hybrid Search", "Python"],
    category: "AI/ML",
    link: "https://github.com/infinity-009"
  },
  {
    title: "Identity Verification API",
    description: "High-throughput CPU-optimized Computer Vision microservice extracting structured data from Indian Identity Documents with sub-200ms latency.",
    tech: ["YOLO", "OCR", "FastAPI", "ONNX Runtime", "Python"],
    category: "Computer Vision",
    link: "https://github.com/infinity-009"
  },
  {
    title: "Logistics Data Pipeline",
    description: "Robust distributed streaming ELT pipeline ingesting and transforming high-velocity logistics data streams for real-time analytics.",
    tech: ["Apache Spark", "Kafka", "PostgreSQL", "PySpark", "Python"],
    category: "Data Engineering",
    link: "https://github.com/infinity-009"
  },
  {
    title: "Intelligent ATS API",
    description: "AI-powered resume evaluation engine extracting candidate credentials and scoring relevance against job descriptions using vector embeddings.",
    tech: ["FastAPI", "Gemini 2.0", "Vector Embeddings", "Python"],
    category: "Backend",
    link: "https://github.com/infinity-009"
  },
  {
    title: "Face Recognition System",
    description: "Asynchronous, high-performance face recognition microservice utilizing InsightFace and ONNX Runtime for low-latency identity matching.",
    tech: ["FastAPI", "InsightFace", "ONNX Runtime", "OpenCV"],
    category: "Computer Vision",
    link: "https://github.com/infinity-009"
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
