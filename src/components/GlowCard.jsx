import { useRef } from "react";

// A card with a cursor-following glow and an optional subtle 3D tilt.
export default function GlowCard({
  as: Tag = "div",
  tilt = false,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    if (tilt) {
      el.style.setProperty("--rx", `${(y / rect.height - 0.5) * -7}deg`);
      el.style.setProperty("--ry", `${(x / rect.width - 0.5) * 7}deg`);
    }
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <Tag
      ref={ref}
      className={`glow-card ${tilt ? "tilt" : ""} ${className}`.trim()}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}
