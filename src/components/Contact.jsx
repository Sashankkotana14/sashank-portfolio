import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name (at least 2 characters).";
  if (!emailPattern.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // This site has no server, so a valid form opens the visitor's email app
    // with the message already filled in, addressed to you.
    const subject = encodeURIComponent(`Portfolio message from ${values.name.trim()}`);
    const body = encodeURIComponent(`${values.message.trim()}\n\nFrom: ${values.name.trim()} (${values.email.trim()})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading title="Contact Me" subtitle="Let's connect and build something together" />
        <div className="contact-grid">
          <Reveal>
            <div className="card contact-info">
              <h3>Get in touch</h3>
              <a className="contact-link" href={`mailto:${profile.email}`}>
                <FaEnvelope /> {profile.email}
              </a>
              <a className="contact-link" href={profile.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a className="contact-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <FaEnvelope /> Send an Email
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form className="card contact-form" onSubmit={handleSubmit} noValidate>
              <label>
                Name
                <input name="name" value={values.name} onChange={handleChange} placeholder="Your name"
                  aria-invalid={!!errors.name} />
                {errors.name && <span className="error" role="alert">{errors.name}</span>}
              </label>
              <label>
                Email
                <input name="email" type="email" value={values.email} onChange={handleChange}
                  placeholder="you@example.com" aria-invalid={!!errors.email} />
                {errors.email && <span className="error" role="alert">{errors.email}</span>}
              </label>
              <label>
                Message
                <textarea name="message" rows="5" value={values.message} onChange={handleChange}
                  placeholder="Write your message…" aria-invalid={!!errors.message} />
                {errors.message && <span className="error" role="alert">{errors.message}</span>}
              </label>
              <button type="submit" className="btn btn-primary">Send Message</button>
              {sent && (
                <p className="success" role="status">
                  Your email app should now open with the message ready to send.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
