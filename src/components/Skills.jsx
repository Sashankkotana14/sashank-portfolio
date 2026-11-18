import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import GlowCard from "./GlowCard.jsx";
import Icon from "./Icons.jsx";
import { skillGroups } from "../data.js";

const allSkills = skillGroups.flatMap((group) => group.skills);

function monogram(name) {
  const clean = name.replace(/[^A-Za-z+]/g, "");
  return clean.slice(0, 2);
}

export default function Skills() {
  // Repeat the list so the marquee loops seamlessly.
  const marquee = [...allSkills, ...allSkills, ...allSkills, ...allSkills];

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Building the future"
          title="Skills & technologies."
          text="A glance at the core technologies that shape my development journey."
        />
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {marquee.map((skill, i) => (
            <span className="marquee-chip" key={`${skill}-${i}`}>
              <span className="chip-mono">{monogram(skill)}</span>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="container skills-grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 90}>
            <GlowCard className="skill-card">
              <div className="card-head">
                <span className="card-icon">
                  <Icon name={group.icon} size={22} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <ul className="pill-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="pill">
                    <span className="chip-mono">{monogram(skill)}</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
