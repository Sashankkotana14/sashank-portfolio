// A small rule-based "portfolio assistant".
// It answers ONLY from the data in src/data/portfolio.js, so it never invents anything.

import { profile, education, skillGroups, projects, certificates, achievements } from "../data/portfolio";

export const quickQuestions = [
  { label: "About me", question: "Tell me about Sashank" },
  { label: "Projects", question: "What projects has he built?" },
  { label: "Skills", question: "What are his skills?" },
  { label: "Education", question: "Where does he study?" },
  { label: "Certificates", question: "Which certificates does he have?" },
  { label: "Contact", question: "How can I contact him?" },
];

const rules = [
  {
    words: ["contact", "reach", "email", "mail", "hire", "linkedin", "github", "social", "connect"],
    answer: () => ({
      text: "You can reach Sashank here:",
      links: [
        { label: "Email", href: `mailto:${profile.email}` },
        { label: "LinkedIn", href: profile.linkedin },
        { label: "GitHub", href: profile.github },
      ],
    }),
  },
  {
    words: ["project", "built", "build", "work", "made"],
    answer: () => ({
      text: "Sashank's projects:",
      items: projects.map((p) => (p.subtitle ? `${p.title} – ${p.subtitle}` : p.title)),
    }),
  },
  {
    words: ["skill", "tech", "language", "stack", "know", "python", "java", "tools"],
    answer: () => ({
      text: "Technical skills:",
      items: skillGroups.map((g) => `${g.title}: ${g.skills.map((s) => s.name).join(", ")}`),
    }),
  },
  {
    words: ["education", "study", "college", "university", "degree", "graduat", "branch", "btech", "b.tech"],
    answer: () => ({
      text: `${education.degree} at ${education.college} (${education.period}).`,
    }),
  },
  {
    words: ["certificate", "certification", "certified", "course"],
    answer: () => ({
      text: "Certificates:",
      items: certificates.map((c) => c.title),
    }),
  },
  {
    words: ["achievement", "hackathon", "award", "intern", "workshop", "activity", "activities"],
    answer: () => ({
      text: "Achievements and activities:",
      items: achievements.map((a) => `${a.title} – ${a.text}`),
    }),
  },
  {
    words: ["about", "who", "intro", "yourself", "him", "sashank", "me"],
    answer: () => ({ text: profile.about }),
  },
];

export function getReply(question) {
  const q = question.toLowerCase();
  const match = rules.find((rule) => rule.words.some((w) => q.includes(w)));
  if (match) return match.answer();
  return {
    text: "I can only answer questions about Sashank's portfolio. Try asking about his projects, skills, education, certificates, achievements or contact details.",
  };
}
