import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaDownload } from "react-icons/fa";
import { profile } from "../data/portfolio";
import { quickQuestions } from "../utils/assistant";
import { useTyping } from "../utils/hooks";

export default function Hero({ onAsk }) {
  const typed = useTyping(profile.typingRoles);
  const [query, setQuery] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onAsk(query.trim());
      setQuery("");
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <span className="badge">Welcome to my portfolio</span>
        <p className="hero-hello">Hi, I'm</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-typing">
          <span>{typed}</span>
          <span className="cursor" aria-hidden="true">|</span>
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
          {profile.resume && (
            <a href={profile.resume} download className="btn btn-outline">
              <FaDownload /> Resume
            </a>
          )}
        </div>

        {/* Assistant search box, inspired by the reference video */}
        <form className="ask-box" onSubmit={submit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask my portfolio assistant anything…"
            aria-label="Ask the portfolio assistant"
          />
          <button type="submit" aria-label="Send question">
            <FaPaperPlane />
          </button>
        </form>
        <div className="chips">
          {quickQuestions.map((q) => (
            <button key={q.label} className="chip" onClick={() => onAsk(q.question)}>
              {q.label}
            </button>
          ))}
        </div>

        <div className="socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
