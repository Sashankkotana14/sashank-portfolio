import Reveal from "./Reveal.jsx";

export default function SectionHeading({ title, subtitle }) {
  return (
    <Reveal className="section-heading">
      <h2>
        {title}
      </h2>
      <span className="heading-line" />
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}
