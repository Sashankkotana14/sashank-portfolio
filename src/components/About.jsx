import { FaCode, FaBrain, FaTrophy } from "react-icons/fa";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const highlights = [
  { icon: <FaBrain />, title: "AI & ML", text: "Studying Artificial Intelligence and Machine Learning" },
  { icon: <FaCode />, title: "Development", text: "Python, web development and real-world projects" },
  { icon: <FaTrophy />, title: "Hackathons", text: "AWS ML Hackathon and Smart India Hackathon" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading title="About Me" subtitle="A little about who I am" />
        <Reveal>
          <p className="about-text">{profile.about}</p>
        </Reveal>
        <div className="grid grid-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 100}>
              <div className="card highlight">
                <span className="icon-circle">{h.icon}</span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
