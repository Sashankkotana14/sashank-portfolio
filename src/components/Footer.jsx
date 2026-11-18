import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "../data/portfolio";
import { sections } from "./Navbar.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a href="#home" className="logo">{profile.initials}</a>
          <p>{profile.name} · {profile.title}</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>{s.label}</a>
          ))}
        </nav>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  );
}
