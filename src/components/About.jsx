import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import GlowCard from "./GlowCard.jsx";
import Icon from "./Icons.jsx";
import { profile, projects, certificates } from "../data.js";

function useCountUp(target, duration = 1400) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setValue(target);
      return undefined;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(target * eased));
          if (t < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return [ref, value];
}

function Stat({ target, suffix = "", label }) {
  const [ref, value] = useCountUp(target);
  return (
    <GlowCard className="stat">
      <span ref={ref} className="stat-value gradient-text">
        {value}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </GlowCard>
  );
}

export default function About() {
  const facts = [
    { icon: "gradCap", label: "College", value: profile.college },
    { icon: "layers", label: "Degree", value: profile.degree },
    { icon: "mapPin", label: "Current Year", value: profile.year },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About Me"
          title="Turning curiosity into code."
          text="A quick look at who I am and what I'm working towards."
        />

        <div className="about-grid">
          <Reveal className="about-text">
            <p>{profile.about}</p>
            <ul className="fact-list">
              {facts.map((fact) => (
                <li key={fact.label}>
                  <span className="fact-icon">
                    <Icon name={fact.icon} size={18} />
                  </span>
                  <span>
                    <span className="fact-label">{fact.label}</span>
                    <span className="fact-value">{fact.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="stats-grid">
            <Stat target={projects.length} label="Projects" />
            <Stat target={certificates.length} label="Certificates & Achievements" />
            <Stat target={2} suffix="nd" label="Year of B.Tech" />
            <Stat target={Number(profile.graduation)} label="Graduation Year" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
