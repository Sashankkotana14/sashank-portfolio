import Icon from "./Icons.jsx";
import { navLinks, profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">{profile.initials}</span>
          <p>{profile.role}</p>
        </div>

        <ul className="footer-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="footer-socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Icon name="github" size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Icon name="linkedin" size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Icon name="mail" size={18} />
          </a>
        </div>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
