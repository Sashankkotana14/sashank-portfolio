import { FaJava, FaDatabase, FaBrain, FaHtml5, FaCss3Alt, FaJs, FaCode } from "react-icons/fa";
import { SiPython, SiC, SiCplusplus, SiGit } from "react-icons/si";
import { skillGroups } from "../data/portfolio";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

// Maps the "icon" names used in src/data/portfolio.js to real icons.
const icons = {
  python: <SiPython />,
  c: <SiC />,
  cpp: <SiCplusplus />,
  java: <FaJava />,
  sql: <FaDatabase />,
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <FaJs />,
  ml: <FaBrain />,
  git: <SiGit />,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading title="Skills & Technologies" subtitle="Technologies and tools I work with" />
        <div className="skill-groups">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 80}>
              <div className="card skill-group">
                <h3>{group.title}</h3>
                <div className="skill-grid">
                  {group.skills.map((s) => (
                    <div className="skill" key={s.name}>
                      <span className="skill-icon">{icons[s.icon] || <FaCode />}</span>
                      <span>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
