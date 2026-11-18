// All portfolio content lives here. Edit this file to update the website.

export const profile = {
  name: "Kotana Sashank",
  initials: "KS",
  role: "AI & Machine Learning Student",
  college: "Aditya University, Kakinada",
  degree: "B.Tech – Artificial Intelligence & Machine Learning",
  year: "2nd Year",
  graduation: "2029",
  email: "Sashankkotana@gmail.com",
  github: "https://github.com/Sashankkotana14",
  linkedin: "https://linkedin.com/in/sashank-kotana-550118390",
  tagline:
    "Building innovative projects and real-world solutions with AI and software development.",
  about:
    "I'm Kotana Sashank, an enthusiastic Artificial Intelligence and Machine Learning student passionate about building innovative projects, exploring emerging technologies, and developing real-world solutions using AI and software development.",
};

export const typedRoles = [
  "AI & Machine Learning Student",
  "Hackathon Participant",
  "Builder of Real-World Solutions",
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    skills: ["Python", "C++", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "AI & Machine Learning",
    icon: "cpu",
    skills: ["Machine Learning"],
  },
  {
    title: "Backend Frameworks",
    icon: "server",
    skills: ["FastAPI", "Flask"],
  },
  {
    title: "Tools & Workflow",
    icon: "wrench",
    skills: ["Git & GitHub"],
  },
];

export const education = [
  {
    title: "B.Tech – Artificial Intelligence & Machine Learning",
    place: "Aditya University, Kakinada",
    period: "2025 – 2029",
    badge: "Currently in 2nd Year",
    text: "Studying core computer science alongside AI and Machine Learning while building hands-on projects and taking part in hackathons.",
  },
  {
    title: "Expected Graduation",
    place: "Aditya University, Kakinada",
    period: "2029",
    badge: "Class of 2029",
    text: "Working towards a career in AI, Machine Learning and software development.",
  },
];

// Individual repository links are not available yet, so every project falls back
// to the GitHub profile. When a repo exists, set `repo: "https://github.com/..."`.
export const projects = [
  {
    title: "BhoomiDrishti",
    description:
      "An AI-driven project that turns land and earth-related data into clear, useful insights.",
    tags: ["Python", "Machine Learning"],
    repo: null,
    icon: "globe",
  },
  {
    title: "ScamShield AI",
    description:
      "An AI-powered tool that helps spot suspicious messages and scams so people can stay safe online.",
    tags: ["Python", "Machine Learning", "AI"],
    repo: null,
    icon: "shield",
  },
  {
    title: "TruthForge AI",
    description:
      "An AI project focused on checking the credibility of information and separating reliable content from misinformation.",
    tags: ["Python", "Machine Learning", "AI"],
    repo: null,
    icon: "search",
  },
  {
    title: "Campus Feedback Analyzer",
    description:
      "Collects student feedback and analyses it to surface the themes and insights that matter most to the campus.",
    tags: ["Python", "Machine Learning", "SQL"],
    repo: null,
    icon: "chat",
  },
  {
    title: "Student Management System",
    description:
      "A web application to manage student records with a clean dashboard and charts. Frontend first, with the backend to follow.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Chart.js"],
    repo: null,
    icon: "users",
  },
  {
    title: "AWS ML Hackathon",
    description:
      "A hackathon project exploring machine learning solutions built with AWS, created under tight deadlines.",
    tags: ["AWS", "Machine Learning", "Python"],
    repo: null,
    icon: "cloud",
  },
];

export const experience = {
  status: "Fresher",
  intro:
    "I'm just starting my career, so here is what I've built, competed in and earned so far.",
  columns: [
    {
      title: "Academic Projects",
      icon: "layers",
      items: [
        "BhoomiDrishti",
        "ScamShield AI",
        "TruthForge AI",
        "Campus Feedback Analyzer",
        "Student Management System",
      ],
    },
    {
      title: "Hackathon Participation",
      icon: "trophy",
      items: ["AWS ML Hackathon", "Smart India Hackathon (SIH)"],
    },
    {
      title: "Technical Achievements",
      icon: "award",
      items: [
        "AWS Certificate",
        "Cisco Certificate",
        "Python Certificate",
        "Smart Interns Certificate",
      ],
    },
  ],
};

export const certificates = [
  {
    title: "AWS Certificate",
    issuer: "Amazon Web Services",
    type: "Certificate",
    icon: "cloud",
    text: "Certification earned through Amazon Web Services.",
  },
  {
    title: "Smart India Hackathon (SIH)",
    issuer: "Smart India Hackathon",
    type: "Achievement",
    icon: "trophy",
    text: "Participated in India's nationwide hackathon, solving real-world problem statements.",
  },
  {
    title: "Smart Interns Certificate",
    issuer: "Smart Interns",
    type: "Certificate",
    icon: "award",
    text: "Certificate earned through the Smart Interns programme.",
  },
  {
    title: "Cisco Certificate",
    issuer: "Cisco",
    type: "Certificate",
    icon: "network",
    text: "Certification earned through Cisco.",
  },
  {
    title: "Python Certificate",
    issuer: "Python",
    type: "Certificate",
    icon: "code",
    text: "Certificate confirming Python programming skills.",
  },
];
