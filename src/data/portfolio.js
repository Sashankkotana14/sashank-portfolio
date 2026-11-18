// =====================================================================
//  ALL YOUR PORTFOLIO CONTENT LIVES HERE.
//  Edit this one file to change text, links, projects, skills, etc.
//  The components in src/components just display what is in this file.
// =====================================================================

export const profile = {
  name: "Kotana Sashank",
  initials: "SK",
  title: "AI & Machine Learning Student",
  // These roles are shown with the typing animation in the hero section.
  typingRoles: ["AI & Machine Learning Student", "Python Developer", "Tech Enthusiast"],
  about:
    "I'm Kotana Sashank, an Artificial Intelligence and Machine Learning student at Aditya University. I am passionate about Python, machine learning, web development and building innovative solutions. I enjoy participating in hackathons and developing real-world projects while continuously improving my technical skills.",
  email: "Sashankkotana@gmail.com",
  github: "https://github.com/Sashankkotana14",
  linkedin: "https://www.linkedin.com/in/sashank-kotana-550118390",
  // To show a "Download Resume" button:
  //   1. put your PDF in the /public folder as resume.pdf
  //   2. change the line below to:  resume: "/resume.pdf",
  resume: null,
};

export const education = {
  degree: "B.Tech in Artificial Intelligence & Machine Learning (AIML)",
  college: "Aditya University",
  period: "2025 – 2029",
};

// Skills are grouped into cards. No proficiency percentages are shown.
// "icon" must match a key in src/components/Skills.jsx.
export const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: "python" },
      { name: "C", icon: "c" },
      { name: "C++", icon: "cpp" },
      { name: "Java", icon: "java" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "js" },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [{ name: "Machine Learning", icon: "ml" }],
  },
  {
    title: "Tools",
    skills: [{ name: "Git & GitHub", icon: "git" }],
  },
];

// Project "github" links: add the exact repository URL once you have it,
// e.g. github: "https://github.com/Sashankkotana14/ScamShield-AI"
// While it is null, the button opens your GitHub repositories page instead.
export const projects = [
  {
    title: "BhoomiDrishti",
    subtitle: "SIH Hackathon Project",
    description: "A project built for the Smart India Hackathon (SIH).",
    categories: ["Hackathon"],
    tags: ["SIH Hackathon"],
    github: null,
  },
  {
    title: "AWS ML Hackathon Project",
    subtitle: null,
    description: "A machine learning project built while participating in the AWS ML Hackathon.",
    categories: ["AI & ML", "Hackathon"],
    tags: ["AWS", "Machine Learning", "Hackathon"],
    github: null,
  },
  {
    title: "ScamShield AI",
    subtitle: "AI-Based Scam Message Detection System",
    description: "An AI-based system that detects scam messages.",
    categories: ["AI & ML"],
    tags: ["AI", "Scam Detection"],
    github: null,
  },
  {
    title: "Campus Feedback Analyzer",
    subtitle: null,
    description: "A project for analyzing campus feedback.",
    categories: [],
    tags: ["Project"],
    github: null,
  },
];

export const projectFilters = ["All", "AI & ML", "Hackathon"];

// To show a "View" button on a certificate, put the image or PDF in
// /public/certificates/ and add:  file: "/certificates/aws.pdf"
export const certificates = [
  { title: "AWS Certificate", issuer: "AWS", icon: "aws", file: null },
  { title: "SIH Hackathon Certificate", issuer: "Smart India Hackathon", icon: "trophy", file: null },
  { title: "Smart Interns Certificate", issuer: "Smart Interns", icon: "award", file: null },
  { title: "Cisco Certificate", issuer: "Cisco", icon: "network", file: null },
  { title: "Python Certificate", issuer: "Python", icon: "python", file: null },
];

export const achievements = [
  {
    title: "AWS ML Hackathon",
    text: "Participated in the AWS ML Hackathon.",
    icon: "aws",
  },
  {
    title: "SIH Hackathon",
    text: "Participated in the Smart India Hackathon (SIH).",
    icon: "trophy",
  },
  {
    title: "Smart Interns",
    text: "Received the Smart Interns certificate.",
    icon: "award",
  },
  {
    title: "Workshops & Masterclasses",
    text: "Attended technical workshops and masterclasses to keep improving my skills.",
    icon: "teacher",
  },
];
