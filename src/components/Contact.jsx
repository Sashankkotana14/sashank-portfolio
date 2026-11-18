import { useRef, useState } from "react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import GlowCard from "./GlowCard.jsx";
import Icon from "./Icons.jsx";
import { profile } from "../data.js";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");
  const timer = useRef(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Fallback for browsers without the async clipboard API
      const input = document.createElement("textarea");
      input.value = profile.email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  // No backend needed: the form opens the visitor's email app with the message filled in.
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email app…");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Talk"
          text="Feel free to reach out for opportunities, questions, or just to connect."
        />

        <div className="contact-grid">
          <Reveal className="contact-info">
            <GlowCard className="contact-card">
              <span className="card-icon">
                <Icon name="mail" size={22} />
              </span>
              <div className="contact-meta">
                <span className="fact-label">Email</span>
                <a href={`mailto:${profile.email}`} className="contact-link">
                  {profile.email}
                </a>
              </div>
              <button
                type="button"
                className="icon-btn"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                <Icon name={copied ? "check" : "copy"} size={18} />
              </button>
            </GlowCard>

            <GlowCard className="contact-card">
              <span className="card-icon">
                <Icon name="github" size={22} />
              </span>
              <div className="contact-meta">
                <span className="fact-label">GitHub</span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  github.com/Sashankkotana14
                </a>
              </div>
              <Icon name="arrowUpRight" size={18} className="muted" />
            </GlowCard>

            <GlowCard className="contact-card">
              <span className="card-icon">
                <Icon name="linkedin" size={22} />
              </span>
              <div className="contact-meta">
                <span className="fact-label">LinkedIn</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Sashank Kotana
                </a>
              </div>
              <Icon name="arrowUpRight" size={18} className="muted" />
            </GlowCard>

            <GlowCard className="contact-card">
              <span className="card-icon">
                <Icon name="mapPin" size={22} />
              </span>
              <div className="contact-meta">
                <span className="fact-label">Studying at</span>
                <span className="contact-link static">{profile.college}</span>
              </div>
            </GlowCard>
          </Reveal>

          <Reveal delay={120}>
            <GlowCard as="form" className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Your name</span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Jane Doe"
                />
              </label>
              <label>
                <span>Your email</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="jane@example.com"
                />
              </label>
              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Hi Sashank, I'd like to talk about…"
                />
              </label>
              <button type="submit" className="btn btn-primary">
                Send Message <Icon name="send" size={18} />
              </button>
              <p className="form-status" role="status">
                {status}
              </p>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
