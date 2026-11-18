import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import GlowCard from "./GlowCard.jsx";
import Icon from "./Icons.jsx";
import { education } from "../data.js";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="My academic journey."
          text="Where I'm studying and where I'm headed."
        />

        <div className="timeline">
          {education.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 120}
              className={`tl-item ${i % 2 === 0 ? "tl-left" : "tl-right"}`}
            >
              <span className="tl-node">
                <Icon name="gradCap" size={16} />
              </span>
              <GlowCard className="tl-card">
                <span className="tl-period">{item.period}</span>
                <h3>{item.title}</h3>
                <p className="tl-place">{item.place}</p>
                <p className="tl-text">{item.text}</p>
                <span className="badge">{item.badge}</span>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
