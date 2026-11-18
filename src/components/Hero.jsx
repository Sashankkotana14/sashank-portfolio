import { useEffect, useState } from "react";
import Icon from "./Icons.jsx";
import { profile, typedRoles } from "../data.js";

function useTypewriter(words) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIndex];
      setText(word.slice(0, charIndex));
      let delay = deleting ? 35 : 75;

      if (!deleting && charIndex === word.length) {
        deleting = true;
        delay = 1500;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 350;
      } else {
        charIndex += deleting ? -1 : 1;
      }
      timer = setTimeout(tick, delay);
    };

    tick();
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(typedRoles);

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="pulse-dot" /> Available for opportunities
          </span>
          <p className="hero-hello">Hi, I'm</p>
          <h1 className="hero-name">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="hero-role" aria-live="off">
            <span>{typed}</span>
            <span className="caret" aria-hidden="true" />
          </p>
          <p className="hero-text">{profile.tagline}</p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects <Icon name="arrowRight" size={18} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Icon name="github" size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Icon name="mail" size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="avatar-wrap">
            <div className="glow-orb" />
            <div className="orbit orbit-1">
              <span className="orbit-dot" />
            </div>
            <div className="orbit orbit-2">
              <span className="orbit-dot" />
            </div>
            <div className="avatar">
              <span className="avatar-text">{profile.initials}</span>
            </div>
            <span className="float-chip chip-a">Python</span>
            <span className="float-chip chip-b">Machine Learning</span>
            <span className="float-chip chip-c">C++</span>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to About">
        <Icon name="chevronDown" size={22} />
      </a>
    </section>
  );
}
