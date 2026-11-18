import { useState } from "react";
import { FaBars, FaTimes, FaRobot } from "react-icons/fa";
import { profile } from "../data/portfolio";
import { useActiveSection } from "../utils/hooks";

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certificates" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const ids = sections.map((s) => s.id);

export default function Navbar({ onOpenChat }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(ids);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
          {profile.initials}
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="chat-toggle" onClick={onOpenChat} aria-label="Open portfolio assistant">
            <FaRobot /> <span>Ask AI</span>
          </button>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
