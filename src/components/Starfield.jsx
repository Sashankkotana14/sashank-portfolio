import { useEffect, useRef } from "react";

// Full-screen twinkling starfield with mouse parallax and occasional shooting stars.
export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let stars = [];
    let shooting = null;
    let raf = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const build = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(260, Math.floor((w * h) / 6500));
      stars = Array.from({ length: count }, () => {
        const depth = Math.random();
        const tint = Math.random();
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: depth * 1.2 + 0.3,
          depth,
          phase: Math.random() * Math.PI * 2,
          speed: 0.5 + Math.random() * 1.5,
          color:
            tint < 0.15
              ? "196, 170, 255"
              : tint < 0.3
              ? "160, 200, 255"
              : "255, 255, 255",
        };
      });
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, w, h);
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      for (const s of stars) {
        const twinkle = reduceMotion
          ? 0.8
          : 0.35 + 0.65 * Math.abs(Math.sin(time * 0.001 * s.speed + s.phase));
        const x = s.x + mouseX * s.depth * 22;
        const y = s.y + mouseY * s.depth * 22;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${s.color}, ${twinkle})`;
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) {
        if (!shooting && Math.random() < 0.004) {
          shooting = {
            x: Math.random() * w * 0.8,
            y: Math.random() * h * 0.4,
            vx: 9,
            vy: 4.5,
            life: 1,
          };
        }
        if (shooting) {
          const tail = 90;
          const grad = ctx.createLinearGradient(
            shooting.x,
            shooting.y,
            shooting.x - shooting.vx * (tail / 10),
            shooting.y - shooting.vy * (tail / 10)
          );
          grad.addColorStop(0, `rgba(255,255,255,${shooting.life})`);
          grad.addColorStop(1, "rgba(124,58,237,0)");
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(shooting.x, shooting.y);
          ctx.lineTo(
            shooting.x - shooting.vx * (tail / 10),
            shooting.y - shooting.vy * (tail / 10)
          );
          ctx.stroke();
          shooting.x += shooting.vx;
          shooting.y += shooting.vy;
          shooting.life -= 0.012;
          if (shooting.life <= 0 || shooting.x > w || shooting.y > h) {
            shooting = null;
          }
        }
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    const onMouse = (e) => {
      targetX = e.clientX / w - 0.5;
      targetY = e.clientY / h - 0.5;
    };

    build();
    draw(0);
    if (!reduceMotion) raf = requestAnimationFrame(draw);

    const onResize = () => {
      build();
      if (reduceMotion) draw(0);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <div className="space-bg" aria-hidden="true">
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />
      <div className="nebula nebula-c" />
      <canvas ref={canvasRef} className="starfield" />
    </div>
  );
}
