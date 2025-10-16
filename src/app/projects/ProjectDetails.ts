export type ProjectCategory = 'software' | 'aiml' | 'datascience' | 'research'

export type ProjectStatus = 'Completed' | 'WorkInProgress' | 'CompleteWithScope'

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  categories: ProjectCategory[]
  status?: ProjectStatus
  github?: string
  demo?: string
  monthYear?: string
  detailedDescription?: {
    problemStatement?: string
    overview?: string
    keyFeatures?: string[]
    challenges?: string[]
    additionalInfo?: string
  }
}


export const projectDetails: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Interactive personal branding website built with modern React stack and animation libraries.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'ShadCN UI', 'Framer Motion'],
    image: '/images/projects/portfolio.png',
    categories: ['software'],
    status: 'Completed',
    github: 'https://github.com/your-username/portfolio',
    demo: 'https://your-portfolio.com',
    monthYear: 'April 2025',
    detailedDescription: {
      problemStatement: "Create a personal branding platform to showcase skills, projects, and experience.",
      overview: "A full-stack, responsive portfolio using Next.js 14, Tailwind CSS, and Framer Motion. Focused on elegant UI, smooth transitions, and accessibility.",
      keyFeatures: [
        "Reusable component architecture",
        "Animated skill badges and section transitions",
        "Dynamic routing, scroll-based reveals",
        "Vertical timeline for education",
        "Responsive and accessible UI"
      ],
      challenges: [
        "Balancing animation complexity with performance",
        "Maintaining a cohesive brand aesthetic across devices",
        "Ensuring scalability for future content and projects"
      ],
      additionalInfo: "Serves as a central hub for recruiters and collaborators, with business value tied to personal branding."
    }
  },
  {
    id: 'clip-retrieval',
    title: 'Cache-Optimized Vision-Language Retrieval System',
    description: 'CLIP + FAISS + CAG based fast image-text search for multimodal applications.',
    technologies: ['Python', 'CLIP', 'FAISS', 'Transformers', 'PyTorch'],
    image: '/images/projects/cag.png',
    categories: ['aiml', 'research'],
    status: 'Completed',
    github: 'https://github.com/your-username/vision-retrieval',
    demo: 'https://your-demo-link.com',
    monthYear: 'May 2025',
    detailedDescription: {
      problemStatement: "Enable fast and accurate cross-modal (image-text) search for large datasets in domains like e-commerce and digital libraries.",
      overview: "Developed a cross-modal retrieval system using CLIP embeddings, FAISS indexing, and smart caching (CAG) to optimize latency and scalability.",
      keyFeatures: [
        "CLIP-based vision-language embeddings",
        "FAISS for high-speed similarity search",
        "Caching frequent queries using CAG",
        "Performance benchmarking (Recall@K, mAP)",
        "Dataset handling with MS-COCO, Flickr30k"
      ],
      challenges: [
        "Managing large-scale vector indexing efficiently",
        "Designing robust caching mechanism for multimodal queries",
        "Balancing retrieval accuracy and latency"
      ],
      additionalInfo: "End-to-end implementation from dataset integration to technical documentation using HuggingFace, Matplotlib, and Pandas."
    }
  },
  {
    id: 'tax-assistant',
    title: 'AI-Powered Tax Assistant',
    description: 'End-to-end intelligent assistant for extracting and understanding Form 16 tax documents using OCR, NLP, and local LLMs.',
    technologies: ['Python', 'FastAPI', 'React.js', 'Tailwind CSS', 'Ollama', 'pdfplumber', 'Tesseract OCR', 'NLP', 'HuggingFace'],
    image: '/images/projects/taxmate1.png',
    categories: ['software', 'aiml'],
    status: 'Completed',
    github: 'https://github.com/your-username/tax-assistant',
    demo: 'https://your-demo-link.com',
    monthYear: 'June 2025',
    detailedDescription: {
        problemStatement: "Build an offline-capable assistant to automate parsing and natural language understanding of Indian Form 16 PDFs.",
        overview: "A full-stack system to extract structured tax data from Form 16 documents using a hybrid of pdfplumber and OCR, with fallback logic. The extracted fields are parsed via custom NLP rules and served through a FastAPI backend with an LLM-powered natural language interface via Ollama (Phi).",
        keyFeatures: [
        "Hybrid PDF parsing using pdfplumber and Tesseract OCR",
        "Structured JSON output of key fields: PAN, salary, deductions, tax, refund",
        "Local LLM integration with Phi via Ollama for offline Q&A",
        "React + Tailwind frontend for upload and real-time chat",
        "Fallback logic for scanned vs. digital documents"
        ],
        challenges: [
        "Handling variable PDF formats (scanned vs. digital)",
        "Designing robust field extraction logic for financial data",
        "Enabling fast, cost-free, and private local inference with LLMs"
        ],
        additionalInfo: "Helps individuals and financial platforms simplify tax comprehension with offline, secure, and scalable tech."
    }
  },
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation Model',
    description: 'Machine learning model to segment customers based on RFM metrics and uncover high-value user groups.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Power BI'],
    image: '/images/projects/csegmentation.png',
    categories: ['datascience'],
    status: 'Completed',
    github: 'https://github.com/your-username/customer-segmentation',
    demo: 'https://your-demo-link.com',
    monthYear: 'January 2025',
    detailedDescription: {
        problemStatement: "Identify high-value customer segments and top-performing products to improve marketing efficiency.",
        overview: "Used RFM analysis and K-Means clustering on retail customer data to identify behavioral segments. Insights were visualized in Power BI for actionable business decisions.",
        keyFeatures: [
        "RFM (Recency, Frequency, Monetary) feature engineering",
        "K-Means clustering with Silhouette Score validation",
        "Customer segmentation and demographic analysis",
        "Top 3 product identification based on profitability",
        "Power BI dashboards for business stakeholders"
        ],
        challenges: [
        "Selecting optimal clusters for interpretable insights",
        "Balancing cluster quality with marketing relevance",
        "Dealing with data sparsity and inconsistent transactions"
        ],
        additionalInfo: "Supported targeted promotions and product placement decisions with customer-first segmentation."
    }
  },
  {
    id: 'rag-assistant',
    title: 'RAG-Based Document Assistant',
    description: 'Offline-compatible Retrieval-Augmented Generation (RAG) system for querying Wikipedia and user documents.',
    technologies: ['Python', 'Streamlit', 'FAISS', 'SentenceTransformers', 'HuggingFace Transformers', 'PyMuPDF', 'wikipedia-api'],
    image: '/images/projects/rag.png',
    categories: ['aiml', 'software'],
    status: 'Completed',
    github: 'https://github.com/your-username/rag-assistant',
    demo: 'https://your-demo-link.com',
    monthYear: 'July 2025',
    detailedDescription: {
        problemStatement: "Build a fully offline RAG system for contextual document understanding and natural language querying.",
        overview: "Created an end-to-end document assistant with ingestion, chunking, embedding, vector search (FAISS), and local HuggingFace-based LLM generation. Built for Wikipedia and user-uploaded files with full offline capability.",
        keyFeatures: [
        "Support for Wikipedia and user files (PDF, DOCX, TXT)",
        "Custom token-aware chunking and cleaning pipeline",
        "Semantic embeddings via SentenceTransformers",
        "Local generation with Flan-T5 / Mistral using HuggingFace",
        "Streamlit UI with upload, query, and summarization modes"
        ],
        challenges: [
        "Designing reusable and modular ingestion logic",
        "Maintaining context integrity in long documents",
        "Balancing memory and performance for local inference"
        ],
        additionalInfo: "Offline, open-source knowledge retrieval system ideal for academic and enterprise document QA scenarios."
    }
  },
  {
    id: 'image-classification-model',
    title: 'Image Classification Model (Imagenette)',
    description: 'FastAI-powered high-accuracy classifier using AlexNet and advanced training strategies.',
    technologies: ['Python', 'PyTorch', 'FastAI', 'Torchvision'],
    image: '/images/projects/alexnet.png',
    categories: ['aiml'],
    status: 'Completed',
    github: 'https://github.com/your-username/image-classification',
    demo: 'https://colab.research.google.com/your-notebook-link',
    monthYear: 'November 2024',
    detailedDescription: {
        problemStatement: "Build a robust image classification system capable of accurate real-time predictions in constrained environments.",
        overview: "Implemented an end-to-end FastAI-based pipeline using a fine-tuned AlexNet with transfer learning on the Imagenette dataset. Integrated optimization techniques like One-Cycle Policy, MixUp, Label Smoothing, and Test-Time Augmentation (TTA) to maximize generalization and performance.",
        keyFeatures: [
        "AlexNet-based transfer learning on Imagenette",
        "Automated data augmentation using FastAI’s DataBlock API",
        "MixUp, Label Smoothing, and Early Stopping",
        "Validation using TTA, confusion matrix, and F1-score",
        "Achieved 93.25% macro-averaged accuracy"
        ],
        challenges: [
        "Balancing model complexity with training time",
        "Fine-tuning pretrained layers for small dataset",
        "Ensuring high accuracy without overfitting"
        ],
        additionalInfo: "Optimized for use in visual recognition domains like smart retail, diagnostics, and surveillance."
    }
  },
  {
    id: 'nas-framework',
    title: 'Neural Architecture Search Framework',
    description: 'AutoML system using NAS techniques to optimize neural networks for drug response prediction.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn'],
    image: '/images/projects/nas.png',
    categories: ['aiml', 'research'],
    status: 'Completed',
    github: 'https://github.com/your-username/nas-framework',
    demo: 'https://colab.research.google.com/your-nas-notebook-link',
    monthYear: 'October 2024',
    detailedDescription: {
        problemStatement: "Automate neural network design for predicting cancer drug responses to accelerate personalized medicine research.",
        overview: "Built a NAS framework combining Random Search, Q-Learning, and Bayesian Optimization to optimize architectures on GDSC’s PANCANCER_ANOVA dataset. Deployed the best model via a Flask API for real-time inference.",
        keyFeatures: [
        "Search space with dynamic layers, activations, and dropout rates",
        "Integrated Q-Learning, Bayesian Optimization, and Random Search",
        "Data preprocessing with feature selection and normalization",
        "Evaluation with MSE, MAE, RMSE, and R² metrics",
        "Q-Learning yielded best R² and prediction accuracy"
        ],
        challenges: [
        "Designing a rich yet efficient search space",
        "Balancing search time vs model performance",
        "Validating robustness across diverse drug response profiles"
        ],
        additionalInfo: "Published in ScienceDirect and presented at ICECMSN 2024; contributes to AI in pharmacogenomics."
    }
  },
  {
    id: 'machine-unlearning',
    title: 'Machine Unlearning Methodology',
    description: 'ResNet-based selective forgetting model to defend against Membership Inference Attacks.',
    technologies: ['Python', 'PyTorch', 'Torchvision', 'scikit-learn'],
    image: '/images/projects/unlearning.png',
    categories: ['aiml', 'research'],
    status: 'Completed',
    github: 'https://github.com/your-username/machine-unlearning',
    demo: 'https://colab.research.google.com/your-unlearning-notebook-link',
    monthYear: 'July 2024',
    detailedDescription: {
        problemStatement: "Defend against Membership Inference Attacks (MIA) by enabling neural networks to forget specific training samples.",
        overview: "Trained and fine-tuned a ResNet-18 model on CIFAR-10 using selective unlearning techniques. The Forget set was excluded during fine-tuning to simulate forgetting while evaluating privacy and performance trade-offs.",
        keyFeatures: [
        "ResNet-18 based model fine-tuned on Retain set",
        "Reduction in MIA success rate on Forget set",
        "Evaluation using loss distributions and MIA accuracy",
        "Comparison with full retraining approach",
        "Visual analytics of retained vs forgotten performance"
        ],
        challenges: [
        "Achieving privacy without sacrificing retained accuracy",
        "Measuring privacy impact with meaningful MIA metrics",
        "Fine-tuning without catastrophic forgetting"
        ],
        additionalInfo: "Demonstrates unlearning as a practical and lightweight tool for privacy compliance in AI systems."
    }
  },
  {
    id: 'face-stylization',
    title: 'Face Stylization Model (StyloMorph)',
    description: 'One-shot facial stylization using GAN inversion and StyleGAN2 for real-time artistic rendering.',
    technologies: ['Python', 'StyleGAN2', 'e4e', 'DLib', 'PyTorch'],
    image: '/images/projects/stylomorph1.png',
    categories: ['aiml', 'research'],
    status: 'Completed',
    github: 'https://github.com/your-username/face-stylization',
    demo: 'https://colab.research.google.com/your-stylomorph-notebook',
    monthYear: 'March 2024',
    detailedDescription: {
        problemStatement: "Enable personalized and high-quality facial stylization using a single style reference image with minimal data.",
        overview: "StyloMorph is a one-shot stylization pipeline leveraging StyleGAN2, e4e encoder, and DLib landmark detection to map source and style images into a shared latent space for identity-preserving transformation.",
        keyFeatures: [
        "Pretrained StyleGAN2 backbone with e4e GAN inversion",
        "DLib 68-point facial landmark mapping",
        "Alpha-tunable stylization with color-preserving options",
        "Supports multi-shot stylization and OOD generalization",
        "Evaluation via IS (1.8), FID (109.9), and LPIPS (0.18)"
        ],
        challenges: [
        "Maintaining facial identity during extreme stylization",
        "Optimizing GAN inversion for real-time performance",
        "Balancing visual quality vs inference efficiency"
        ],
        additionalInfo: "Applicable in creative tools, social media filters, and digital avatars. Trained on FFHQ with adversarial loss, R1 regularization, and progressive growing."
    }
  },
  {
    id: 'devoptix',
    title: 'DevOptiX – DevOps Productivity Analyzer',
    description: 'ML-driven analytics system for measuring DORA metrics, identifying CI/CD bottlenecks, and recommending improvements.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
    image: '/images/projects/devoptix.png',
    categories: ['software', 'aiml'],
    status: 'Completed',
    github: 'https://github.com/your-username/devoptix',
    demo: 'https://colab.research.google.com/your-devoptix-notebook',
    monthYear: 'July 2025',
    detailedDescription: {
        problemStatement: "Analyze and improve software delivery performance using engineering metrics and anomaly detection in CI/CD workflows.",
        overview: "Built a modular analytics system to simulate task workflows, compute DORA metrics, detect stage bottlenecks using Isolation Forest, and generate actionable insights via visualizations and recommendations.",
        keyFeatures: [
        "Synthetic CI/CD task data generator",
        "Metric computation for DORA and workflow stages",
        "Bottleneck detection using percentile heuristics and ML (Isolation Forest)",
        "Recommendation engine for review, coding, and deployment improvements",
        "Exportable insights via heatmaps, CSV/JSON reports, and trend plots"
        ],
        challenges: [
        "Simulating realistic CI/CD workflow data",
        "Accurate anomaly detection on temporal metrics",
        "Presenting insights in a developer-actionable format"
        ],
        additionalInfo: "Designed to assist engineering teams and SREs in reducing lead time, improving MTTR, and scaling delivery performance."
    }
  },
  {
    id: 'sweetspot-app',
    title: 'SweetSpot – Doorstep Delight Web App',
    description: 'Full-stack React app for online cake ordering with real-time order tracking and responsive UI.',
    technologies: ['React.js', 'Tailwind CSS', 'Vite', 'JavaScript'],
    image: '/images/projects/sweetspot.png',
    categories: ['software'],
    status: 'Completed',
    github: 'https://github.com/your-username/sweetspot',
    demo: 'https://your-sweetspot-app-link.com',
    monthYear: 'July 2025',
    detailedDescription: {
        problemStatement: "Develop a seamless online ordering and delivery tracking experience for a bakery business.",
        overview: "Built a modular full-stack platform using React.js and Tailwind CSS. Implemented dynamic order status updates, responsive layout, and reusable components to streamline the customer journey.",
        keyFeatures: [
        "Real-time order tracking interface",
        "Reusable UI components (Navbar, Footer)",
        "Responsive design with Tailwind CSS",
        "React Router-based navigation",
        "Team collaboration via GitHub and version control"
        ],
        challenges: [
        "Maintaining consistent design across devices",
        "Integrating mock backend with real-time UI updates",
        "Collaborative feature development in a team-based workflow"
        ],
        additionalInfo: "Project provided hands-on experience with modern frontend development, emphasizing speed, interactivity, and teamwork in a real-world business context."
    }
  }
]
