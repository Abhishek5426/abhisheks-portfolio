export const RESUME_PDF = "/resume/Abhishek_Benni_Resume.pdf";
export const AVATAR = "/images/abhishek.png";

export const profile = {
  name: "Abhishek Ningappa Benni",
  brand: "<Abhishek />",
  firstName: "Abhishek",
  location: "Bengaluru, Karnataka, India",
  phone: "+91-8867348037",
  email: "abhishekbenni01@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhishek-benni-a9196a371",
  linkedinLabel: "linkedin.com/in/abhishek-benni-a9196a371",
  github: "https://github.com/Abhishek5426",
  githubLabel: "github.com/Abhishek5426",
  hackerrank: "https://www.hackerrank.com/profile/abhishekbenni01",
  hackerrankLabel: "hackerrank.com/profile/abhishekbenni01",
  heroTitleTop: "Building intelligent",
  heroTitleAccent: "AI solutions",
  heroRole: "AI/ML Enthusiast",
  heroRole2: "Python Developer",
  heroLead:
    "Computer Science & Engineering student specializing in Artificial Intelligence and Machine Learning — building practical LLM, NLP, OCR and ASR based solutions with a strong foundation in data structures and problem-solving.",
  footerTagline: "AI/ML • NLP • LLM Solutions",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
  {
    pre: "I enjoy building practical applications that turn ",
    strong: "text, images and speech into intelligent, usable software",
    post: " — from multi-modal diary systems to predictive analytics for agriculture.",
  },
  {
    pre: "I work with ",
    strong: "Python, C++ and SQL",
    post: ", and have hands-on experience across Machine Learning, NLP, OCR and ASR, together with frameworks like FastAPI and Flask and deep-learning tools like PyTorch and TensorFlow.",
  },
  {
    pre: "I am familiar with ",
    strong: "LLM fundamentals, Git and GitHub",
    post: ", and I am keen to work with open-source AI systems, integrate models, debug Python code and ship practical LLM-based solutions. My goal is to contribute to real products while growing into a strong AI engineer.",
  },
];

export const aboutHeadline =
  "I'm a Computer Science & Engineering student specializing in Artificial Intelligence and Machine Learning.";

export interface EducationItem {
  degree: string;
  period: string;
  institution: string;
  board?: string;
  result: string;
}

export const education: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering (AIML)",
    period: "2023 — 2027",
    institution: "Alliance University, Bengaluru",
    result: "CGPA: 8.0/10",
  },
  {
    degree: "12th Grade — PUC",
    period: "2021 — 2023",
    institution: "SPDCL COMP RES PU College, K. Chandargi",
    board: "Department of Pre-University Education, Karnataka",
    result: "Percentage: 89.00%",
  },
  {
    degree: "10th Grade — SSLC",
    period: "2011 — 2021",
    institution: "V D S Govt High School, K. Chandargi",
    board: "Karnataka Secondary Education Examination Board",
    result: "Percentage: 98.24%",
  },
];

export const experience = {
  role: "Artificial Intelligence Intern",
  org: "IBM SkillsBuild",
  period: "Dec 2025 — Jan 2026",
  location: "Remote, India",
  summary:
    "Completed a structured, industry-oriented Artificial Intelligence internship combining hands-on activities with practical AI/ML workflows.",
  bullets: [
    "Gained practical exposure to Artificial Intelligence and Machine Learning concepts through structured learning and hands-on activities.",
    "Developed an understanding of AI/ML workflows including data preparation, model development, and evaluation.",
    "Applied problem-solving and analytical skills to understand real-world AI applications and their implementation.",
    "Strengthened technical knowledge through practical exercises, industry-oriented learning resources, and AI-focused projects.",
  ],
};

export interface Skill {
  name: string;
  category: string;
  img?: string;
  icon?: "brain" | "chat" | "scan" | "mic" | "sparkles" | "database" | "network" | "boxes";
}

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const skills: Skill[] = [
  { name: "Python", category: "LANGUAGE", img: `${DEVICON}/python/python-original.svg` },
  { name: "C++", category: "LANGUAGE", img: `${DEVICON}/cplusplus/cplusplus-original.svg` },
  { name: "SQL", category: "LANGUAGE", icon: "database" },
  { name: "FastAPI", category: "BACKEND", img: `${DEVICON}/fastapi/fastapi-original.svg` },
  { name: "Flask", category: "BACKEND", img: `${DEVICON}/flask/flask-original.svg` },
  { name: "Machine Learning", category: "AI/ML", icon: "brain" },
  { name: "NLP", category: "AI/ML", icon: "chat" },
  { name: "OCR", category: "AI/ML", icon: "scan" },
  { name: "ASR", category: "AI/ML", icon: "mic" },
  { name: "LLM Fundamentals", category: "AI/ML", icon: "sparkles" },
  { name: "PyTorch", category: "DEEP LEARNING", img: `${DEVICON}/pytorch/pytorch-original.svg` },
  { name: "TensorFlow", category: "DEEP LEARNING", img: `${DEVICON}/tensorflow/tensorflow-original.svg` },
  { name: "Scikit-learn", category: "MACHINE LEARNING", img: `${DEVICON}/scikitlearn/scikitlearn-original.svg` },
  { name: "NumPy", category: "AI/ML", img: `${DEVICON}/numpy/numpy-original.svg` },
  { name: "Pandas", category: "AI/ML", img: `${DEVICON}/pandas/pandas-original.svg` },
  { name: "MySQL", category: "DATABASE", img: `${DEVICON}/mysql/mysql-original.svg` },
  { name: "Git", category: "TOOLS", img: `${DEVICON}/git/git-original.svg` },
  { name: "GitHub", category: "TOOLS", img: `${DEVICON}/github/github-original.svg` },
  { name: "VS Code", category: "TOOLS", img: `${DEVICON}/vscode/vscode-original.svg` },
  { name: "Google Colab", category: "TOOLS", img: `${DEVICON}/googlecolab/googlecolab-original.svg` },
  { name: "Data Structures & Algorithms", category: "CORE CS", icon: "network" },
  { name: "Object-Oriented Programming", category: "CORE CS", icon: "boxes" },
];

export interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkNote: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "AI Diary System",
    description:
      "A digital diary application supporting text, image and voice-based entries. Integrates OCR and ASR to convert image and voice entries into text, then applies NLP and machine learning techniques to analyze, summarize and generate meaningful insights from diary entries.",
    tags: ["Python", "OCR", "ASR", "NLP", "Machine Learning"],
    link: "https://github.com/Abhishek5426",
    linkNote: "GitHub implementation",
  },
  {
    number: "02",
    title: "Crop Yield Prediction",
    description:
      "A machine learning system that predicts crop yield using climatic and chemical parameters. Prepared and analyzed datasets covering temperature, rainfall and pesticide usage, then applied regression models to identify relationships between environmental factors and crop yield for data-driven agricultural insights.",
    tags: ["Python", "Machine Learning", "Regression Analysis"],
    link: "https://github.com/Abhishek5426",
    linkNote: "GitHub implementation",
  },
];

export const certifications = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    detail: "Validates foundational knowledge of AI workloads, machine learning principles and Azure AI services.",
  },
  {
    title: "Data Analysis and Visualization with Power BI",
    issuer: "Microsoft / Power BI",
    detail: "Certified in analyzing datasets and building clear, decision-ready dashboards and visual reports.",
  },
  {
    title: "Artificial Intelligence Internship",
    issuer: "IBM SkillsBuild",
    detail: "Completed a structured AI internship (Dec 2025 — Jan 2026) covering data preparation, model development and evaluation.",
  },
];

export interface Achievement {
  number: string;
  eyebrow: string;
  title: string;
  org: string;
  date: string;
  description: string;
  highlight: string;
  icon: "trophy" | "briefcase" | "cloud" | "chart" | "star" | "graduation";
}

export const achievements: Achievement[] = [
  {
    number: "01",
    eyebrow: "AI INTERNSHIP",
    title: "IBM SkillsBuild AI Internship",
    org: "Artificial Intelligence Intern — Remote, India",
    date: "Dec 2025 — Jan 2026",
    description:
      "Selected for and completed an industry-oriented AI internship covering AI/ML workflows from data preparation to model evaluation.",
    highlight: "IBM SKILLSBUILD",
    icon: "briefcase",
  },
  {
    number: "02",
    eyebrow: "MICROSOFT CERTIFIED",
    title: "Azure AI Fundamentals",
    org: "Microsoft",
    date: "Certified",
    description:
      "Earned the Microsoft Azure AI Fundamentals credential, validating foundational knowledge of AI and Azure AI services.",
    highlight: "AZURE AI",
    icon: "cloud",
  },
  {
    number: "03",
    eyebrow: "DATA SKILLS",
    title: "Power BI Data Analysis",
    org: "Data Analysis and Visualization with Power BI",
    date: "Certified",
    description:
      "Certified in turning raw datasets into clear dashboards and decision-ready visual insights using Power BI.",
    highlight: "POWER BI",
    icon: "chart",
  },
  {
    number: "04",
    eyebrow: "ACADEMIC RECORD",
    title: "CGPA 8.0/10 in B.Tech",
    org: "B.Tech CSE (AIML) — Alliance University, Bengaluru",
    date: "2023 — 2027",
    description:
      "Maintaining a strong academic record in Computer Science & Engineering with a specialization in AI and Machine Learning.",
    highlight: "8.0/10",
    icon: "graduation",
  },
  {
    number: "05",
    eyebrow: "SSLC EXCELLENCE",
    title: "98.24% in 10th Grade",
    org: "V D S Govt High School, K. Chandargi",
    date: "2021",
    description:
      "Scored 98.24% in the SSLC board examinations, ranking among the top performers with distinction-level results.",
    highlight: "98.24%",
    icon: "star",
  },
  {
    number: "06",
    eyebrow: "PUC DISTINCTION",
    title: "89.00% in 12th Grade",
    org: "SPDCL COMP RES PU College, K. Chandargi",
    date: "2023",
    description:
      "Completed Pre-University education with 89.00%, building strong fundamentals in mathematics, physics and computer science.",
    highlight: "89.00%",
    icon: "trophy",
  },
];

export const stat = {
  value: "8.0",
  label: "CGPA / 10 — B.Tech CSE (AIML)",
};
