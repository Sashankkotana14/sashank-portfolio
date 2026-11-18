import { FaGraduationCap } from "react-icons/fa";
import { education } from "../data/portfolio";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading title="Education" subtitle="My academic journey" />
        <div className="timeline">
          <Reveal>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div className="card education-card">
                <span className="icon-circle">
                  <FaGraduationCap />
                </span>
                <div>
                  <span className="period">{education.period}</span>
                  <h3>{education.degree}</h3>
                  <p>{education.college}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
