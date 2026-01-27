import { Experience, Project, SkillCategory } from './types';

export interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  description: string;
  gpa?: string;
}

export const BIO = "NYU Graduate student specializing in Computer Engineering and Machine Learning. I architect resilient ML infrastructure, evaluate LLM reliability, and optimize distributed systems for high-performance intelligence, bridging the gap between advanced model capabilities and scalable, production-ready software engineering.";

export const EDUCATION: Education[] = [
  {
    degree: "Master of Science in Computer Engineering",
    school: "New York University",
    location: "New York, NY",
    period: "Aug 2025 – May 2027",
    gpa: "3.7 / 4.0",
    description: "Second Prize Winner of NYC PULSE Hackathon (Jan 2025) for PeptideGo. Relevant Coursework: Efficient AI, Machine Learning Systems Engineering and Operations, Deep Learning, Machine Learning in Financial Engineering."
  },
  {
    degree: "Bachelor of Engineering in Electronics & Telecommunications",
    school: "Bhilai Institute of Technology (CSVTU)",
    location: "Durg, India",
    period: "Aug 2018 – May 2022",
    gpa: "9.5 / 10",
    description: "IEEE Creative Committee Head — Led creative and technical outreach activities. Recognized for academic excellence and leadership in technical outreach."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Associate Software Engineer",
    company: "Accenture",
    location: "India",
    period: "Dec 2022 – Jul 2024",
    description: [
      "Engineered an internal ML-based predictive maintenance solution using Python, detecting pipeline leaks and corrosion through anomaly detection with email alerts.",
      "Streamlined data operations for 100,000+ Infor asset records using SQL and Python, cutting operational overhead by 20%.",
      "Enhanced backend data integrity by customizing SQL-based validation and dynamic UI configurations for asset management workflows.",
      "Automated large-scale asset lifecycle management for 50,000+ records across Infor IAM, improving resource utilization by 40%.",
      "Led user enablement initiatives for 50+ Metrolinx end users, driving 35% higher system adoption."
    ]
  },
  {
    role: "Site Reliability Engineer",
    company: "JP Morgan Chase & Co.",
    location: "India",
    period: "Jul 2022 – Nov 2022",
    subrole: "Risk Management - Foreign Exchange (FX)",
    description: [
      "Developed Python automation scripts to monitor jobs and generate real-time failure alerts, improving operational efficiency by 30%.",
      "Supported EMEA traders on FX and commodity trading dashboards (pricing, P&L, risk) by validating trade data and ensuring accurate rate updates.",
      "Authored comprehensive support documentation and runbooks using JIRA, reducing onboarding time for new team members by 50%.",
      "Collaborated with cross-functional teams to resolve recurring FX trade issues, achieving 90% first-time resolution."
    ]
  },
  {
    role: "Production Support Intern",
    company: "mthree",
    location: "India",
    period: "Mar 2022 – Jun 2022",
    description: [
      "Completed intensive training in financial markets, cloud computing, Agile, SDLC, and ITIL frameworks.",
      "Gained hands-on expertise with SQL, Python, C++, Linux operations, DevOps tools, and CI/CD pipelines.",
      "Worked in client-specific modules using ReactJS, Kubernetes, AWS, and Hadoop to enhance readiness for SRE tasks."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "PeptideGo",
    period: "Jan 2025",
    tagline: "2nd Prize — NYC PULSE Hackathon",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=1200",
    description: [
      "Built an AI auditing system to evaluate LLM hallucinations in health-related products using Google AI Studio.",
      "Designed a LangChain-based multi-stage pipeline to orchestrate web scraping and authority-source verification (.gov, Mayo Clinic).",
      "Implemented claim verification to generate citation-backed, retrieval-optimized corrective content."
    ],
    tags: ["LLM Eval", "LangChain", "RAG", "Python"],
    github: "https://github.com/Vanshika2021/PeptideGo",
    live: "#"
  },
  {
    title: "Hybrid ML Volatility",
    period: "Oct - Dec 2025",
    tagline: "Econometric-Deep Learning Framework",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200",
    description: [
      "Designed a hybrid volatility forecasting framework for CME wheat futures integrating GARCH, EGARCH, and EWMA into LSTM architectures.",
      "Engineered statistically robust features (log-variance, macro signals) on a 7,800+ observation rolling futures dataset.",
      "Validated performance via Diebold–Mariano and Wilcoxon tests, achieving superior bias-variance trade-offs."
    ],
    tags: ["PyTorch", "GARCH", "Time-Series", "Finance"],
    github: "https://github.com/Vanshika2021/VolatilityForecasting",
    live: "#"
  },
  {
    title: "Logistics Analytics",
    period: "Feb - May 2022",
    tagline: "Credit Risk Classification",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    description: [
      "Developed a logistic regression-based credit risk classification model using repayment behavior and historical features.",
      "Performed end-to-end preprocessing and feature engineering on real-world banking datasets ensuring interpretability.",
      "Identified high-risk applicant segments, enabling risk-aware decision-making and reducing potential credit losses."
    ],
    tags: ["Logistic Regression", "Scikit-learn", "Banking", "Analytics"],
    github: "https://github.com/Vanshika2021/LogisticsAnalytics",
    live: "#"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "AI/ML & Data Science",
    items: ["LLM Evaluation", "RAG", "LangChain", "PyTorch", "TensorFlow", "Scikit-learn", "Similarity Search", "Hugging Face", "Pandas", "NumPy"]
  },
  {
    category: "Programming & Engineering",
    items: ["Python", "C++", "Java", "C", "SQL", "ReactJS", "ETL Pipelines"]
  },
  {
    category: "Tools & Platforms",
    items: ["Docker", "Kubernetes", "AWS Athena", "Hadoop", "Infor", "JIRA", "ITRS Geneos", "ServiceNow", "MATLAB", "LaTeX"]
  }
];