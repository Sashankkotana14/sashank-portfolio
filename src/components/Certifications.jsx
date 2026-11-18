import { FaAws, FaTrophy, FaAward, FaNetworkWired, FaPython, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { certificates } from "../data/portfolio";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export const certIcons = {
  aws: <FaAws />,
  trophy: <FaTrophy />,
  award: <FaAward />,
  network: <FaNetworkWired />,
  python: <FaPython />,
};

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading title="Certifications" subtitle="Certificates I have earned" />
        <div className="grid grid-3">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="card cert-card">
                <div className="cert-preview">
                  <span className="cert-icon">{certIcons[c.icon] || <FaCertificate />}</span>
                  <span className="cert-label">Certificate</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.issuer}</p>
                {c.file && (
                  <a className="btn btn-outline btn-small" href={c.file} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> View
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
