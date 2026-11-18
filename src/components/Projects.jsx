import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects, projectFilters, profile } from "../data/portfolio";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = projects.filter((p) => filter === "All" || p.categories.includes(filter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading title="Projects" subtitle="A showcase of my recent work" />

        <div className="filters" role="tablist" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={`filter ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-2">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="card project-card">
                <div className="project-banner">
                  <span>{p.title.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  {p.subtitle && <p className="project-sub">{p.subtitle}</p>}
                  <p>{p.description}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <a
                    className="btn btn-outline btn-small"
                    href={p.github || `${profile.github}?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.github ? <FaGithub /> : <FaExternalLinkAlt />}
                    {p.github ? "View Code" : "GitHub Repositories"}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
