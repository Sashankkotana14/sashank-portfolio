import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import GlowCard from "./GlowCard.jsx";
import Icon from "./Icons.jsx";
import { profile, projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="My Projects"
          text="A selection of things I've built and explored so far."
        />

        <div className="projects-grid">
          {projects.map((project, i) => {
            const href = project.repo || profile.github;
            return (
              <Reveal key={project.title} delay={(i % 3) * 100}>
                <GlowCard as="article" tilt className="project-card">
                  <div className={`project-banner banner-${i % 3}`}>
                    <span className="project-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="project-icon">
                      <Icon name={project.icon} size={30} />
                    </span>
                  </div>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="tag-list">
                      {project.tags.map((tag) => (
                        <li key={tag} className="tag">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <Icon name="github" size={16} /> GitHub
                      <Icon name="arrowUpRight" size={15} />
                    </a>
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="center-row">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <Icon name="github" size={18} /> See more on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
