import { FaChalkboardTeacher } from "react-icons/fa";
import { achievements } from "../data/portfolio";
import { certIcons } from "./Certifications.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const icons = { ...certIcons, teacher: <FaChalkboardTeacher /> };

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeading title="Achievements & Activities" subtitle="Hackathons, programs and learning" />
        <div className="grid grid-2">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="card achievement">
                <span className="icon-circle">{icons[a.icon]}</span>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
