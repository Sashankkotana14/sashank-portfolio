import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import GlowCard from "./GlowCard.jsx";
import Icon from "./Icons.jsx";
import { certificates } from "../data.js";

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Certifications"
          title="Certificates & Achievements"
          text="Credentials and milestones I've earned along the way."
        />

        <div className="cert-grid">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 3) * 100}>
              <GlowCard as="article" className="cert-card">
                <span className="cert-icon">
                  <Icon name={cert.icon} size={26} />
                </span>
                <span className="badge">{cert.type}</span>
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-text">{cert.text}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
