import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import GlowCard from "./GlowCard.jsx";
import Icon from "./Icons.jsx";
import { experience } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Experience"
          text={experience.intro}
        />

        <Reveal className="center-row">
          <span className="fresher">
            <span className="pulse-dot" /> {experience.status}
          </span>
        </Reveal>

        <div className="exp-grid">
          {experience.columns.map((column, i) => (
            <Reveal key={column.title} delay={i * 100}>
              <GlowCard className="exp-card">
                <div className="card-head">
                  <span className="card-icon">
                    <Icon name={column.icon} size={22} />
                  </span>
                  <h3>{column.title}</h3>
                </div>
                <ul className="check-list">
                  {column.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
