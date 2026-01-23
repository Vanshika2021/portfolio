import { Experience, Project, SkillCategory } from './types';

export interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  description: string;
}

export const BIO = "NYU Graduate student specializing in the intersection of Machine Learning Systems and Scalable Software. My work focuses on building robust ML pipelines, evaluating LLM reliability, and optimizing distributed systems for high-performance intelligence.";

export const EDUCATION: Education[] = [
  {
    degree: "MS in Computer Engineering",
    school: "New York University",
    location: "New York, NY",
    period: "2024 – 2026",
    description: "Coursework: Deep Learning, High-Performance ML, Distributed Systems, ML in Finance."
  },
  {
    degree: "Bachelor of Technology",
    school: "Bhilai Institute of Technology",
    location: "India",
    period: "2018 – 2022",
    description: "Focus on Electronics and Telecommunications."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Associate Software Engineer",
    company: "Accenture",
    location: "India",
    period: "2022 – 2024",
    description: [
      "Developed ML-based predictive maintenance systems using Python to monitor pipeline integrity.",
      "Optimized large-scale data workflows for 100k+ asset records using SQL and Python automation.",
      "Led end-user training for asset management systems, increasing technical adoption by 35%."
    ]
  },
  {
    role: "Site Reliability Engineer",
    company: "JP Morgan Chase & Co.",
    location: "India",
    period: "2022",
    subrole: "Risk Management - FX",
    description: [
      "Automated real-time failure alerting systems using Python, reducing manual monitoring time by 30%.",
      "Managed dashboard reliability for EMEA FX traders, ensuring data consistency across high-frequency environments.",
      "Optimized incident resolution workflows for trade-critical issues."
    ]
  },
  {
    role: "Production Support Analyst Intern",
    company: "mthree",
    location: "India",
    period: "2022",
    description: [
      "Completed training bridging technical expertise and financial domain knowledge, covering financial markets, cloud computing, Agile, SDLC, and ITIL frameworks.",
      "Gained hands-on expertise with SQL, Python, C++, linux operations, DevOps tools, CI/CD pipelines, and observability best practices.",
      "Worked in client-specific modules using ReactJS, Kubernetes, AWS, and Hadoop, enhancing readiness for production support and SRE tasks."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "PeptideGo",
    period: "2026",
    tagline: "LLM Hallucination Audit",
    image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=1200",
    description: [
      "Built an automated pipeline to detect hallucinations in biochemical LLM outputs.",
      "Integrated LangChain with UniProt/PubChem APIs for ground-truth verification."
    ],
    tags: ["LLM Eval", "LangChain", "RAG", "Python"]
  },
  {
    title: "Volatility Modeling",
    period: "2025",
    tagline: "Hybrid LSTM-GARCH",
    image: "https://images.unsplash.com/photo-1611974717482-95edcd799d65?auto=format&fit=crop&q=80&w=1200",
    description: [
      "Developed a hybrid framework for financial time-series prediction.",
      "Combined econometric models with Deep Learning for realized volatility forecasting."
    ],
    tags: ["PyTorch", "Finance", "Deep Learning"]
  },
  {
    title: "Credit Scoring System",
    period: "2024",
    tagline: "Financial Risk Intelligence",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=1200",
    description: [
      "Engineered an end-to-end ML pipeline to assess creditworthiness using historical lending data.",
      "Implemented advanced feature engineering and ensemble models to improve prediction accuracy by 22%."
    ],
    tags: ["XGBoost", "Python", "Finance", "MLOps"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Machine Learning",
    items: ["LLM Evaluation", "RAG", "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost"]
  },
  {
    category: "Engineering",
    items: ["Python", "C++", "SQL", "Docker", "Kubernetes", "AWS", "Hadoop", "ReactJS"]
  }
];