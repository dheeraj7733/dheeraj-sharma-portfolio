export const personalInfo = {
  name: "Dheeraj Sharma",
  role: "AI & Full-Stack Developer",
  tagline:
    "Building scalable full-stack web applications and intelligent AI-driven solutions from backend architecture to modern frontend interfaces.",
  availability: "Open to Full-Stack & AI Developer Roles",
  location: "Jaipur, India",
  github: "https://github.com/dheeraj7733",
  linkedin: "https://www.linkedin.com/in/dheeraj-sharma-b0074a308/", 
  email: "djsharma2189t@gmail.com", 
  resumePath: "/resume/Dheeraj_Sharma_Resume.pdf",
};

export const featuredProjects = [
  {
    title: "VELoop Rewards",
    subtitle: "Full-Stack Rewards & Loyalty Platform",
    description:
      "End-to-end rewards management system built during the VLoop internship featuring secure JWT authentication, RESTful API architecture, and a responsive dashboard deployed on cloud infrastructure.",
    highlights: [
      "Engineered Node.js & Express backend APIs connected to MongoDB Atlas",
      "Built responsive React + Vite frontend with automated environment routing",
      "Deployed production builds seamlessly across Render and Vercel",
    ],
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB Atlas", "Render", "Vercel"],
    liveUrl: "#", // अपना Vercel live link यहाँ डाल लेना
    githubUrl: "https://github.com/dheeraj7733",
    featured: true,
  },
  {
    title: "AI Document & Knowledge Assistant",
    subtitle: "Generative AI & RAG API Service",
    description:
      "Intelligent context-aware assistant powered by Python, FastAPI, and Generative AI pipelines capable of answering queries over custom technical documentation.",
    highlights: [
      "Built high-throughput asynchronous REST endpoints using FastAPI",
      "Containerized backend services with Docker for reproducible deployment",
      "Integrated structured prompt orchestration and vector similarity retrieval",
    ],
    tech: ["Python", "FastAPI", "Generative AI", "Docker", "React"],
    liveUrl: "#",
    githubUrl: "https://github.com/dheeraj7733",
    featured: false,
  },
];

export const skills = [
  {
    category: "AI & Backend Engineering",
    items: ["Python", "FastAPI", "Node.js", "Express", "Generative AI", "REST APIs", "JWT Auth"],
  },
  {
    category: "Frontend Development",
    items: ["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "Motion", "HTML5 / CSS3"],
  },
  {
    category: "Databases, DevOps & Cloud",
    items: ["MongoDB", "MongoDB Atlas", "Docker", "Vercel", "Render", "Git & GitHub"],
  },
];

export const experience = [
  {
    role: "Full-Stack & AI Developer Intern",
    company: "VLoop",
    period: "2026",
    location: "Remote / India",
    description:
      "Architected, built, and deployed the full-stack VELoop Rewards platform from database schema design to cloud hosting.",
    achievements: [
      "Developed RESTful backend services using Node.js, Express, and MongoDB Atlas with secure JWT authentication.",
      "Built and debugged a responsive React.js + Vite frontend, resolving environment routing and API integration issues.",
      "Configured production CI/CD deployments on Render (backend) and Vercel (frontend).",
    ],
  },
];