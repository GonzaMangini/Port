import React, { useRef, useEffect } from "react";

const STAR_COUNT = 120;
const STAR_COLORS = ["#fff", "#bfcfff", "#e6e6fa", "#dbeafe"];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = Math.max(window.innerHeight, document.documentElement.scrollHeight);
    let animationId: number;

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = Math.max(window.innerHeight, document.documentElement.scrollHeight);
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: STAR_COUNT }).map(() => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      r: randomBetween(0.4, 1.6),
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      alpha: randomBetween(0.5, 1),
      twinkle: randomBetween(0.002, 0.015) * (Math.random() > 0.5 ? 1 : -1),

    }));

    function drawBackground() {
      if (!ctx) return;
      // Night gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#05080f");
      gradient.addColorStop(1, "#141929");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    function drawStars() {
      if (!ctx) return;
      for (const star of stars) {
        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }
    }


    type ShootingStar = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      length: number;
      alpha: number;
      life: number;
      maxLife: number;
      color: string;
    };
    const shootingStars: ShootingStar[] = [];
    let lastShootingStar = Date.now();
    let nextShootingStar = randomBetween(1000, 3000);

    function spawnShootingStar() {

      const direction = Math.random() > 0.5 ? 1 : -1;
      const y = randomBetween(40, height * 0.7);
      const length = randomBetween(120, 200);
      const speed = randomBetween(7, 14) * direction;
      const angle = randomBetween(-0.20, 0.20); // un poco inclinado
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      const x = direction === 1 ? -length : width + length;
      const color = Math.random() > 0.5 ? "#fff" : Math.random() > 0.5 ? "#87ceeb" : "#c7b8ea";
      shootingStars.push({
        x,
        y,
        vx,
        vy,
        length,
        alpha: 1,
        life: 0,
        maxLife: randomBetween(800, 1200),
        color,
      });
    }

    function drawShootingStars() {
      if (!ctx) return;
      for (const s of shootingStars) {
        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.strokeStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 20;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 7, s.y - s.vy * 7);
        ctx.stroke();

        // Estela con gradiente de color
        const gradient = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 7, s.y - s.vy * 7);
        gradient.addColorStop(0, s.color);
        gradient.addColorStop(1, "#fff");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 7, s.y - s.vy * 7);
        ctx.stroke();

        // Cabeza brillante
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, 2 * Math.PI);
        ctx.fill();

        ctx.restore();
      }
    }

    function updateShootingStars(dt: number) {
      for (const s of shootingStars) {
        s.x += s.vx;
        s.y += s.vy;
        s.life += dt;
        if (s.life > s.maxLife) s.alpha -= 0.05;
      }

      for (let i = shootingStars.length - 1; i >= 0; --i) {
        if (
          shootingStars[i].alpha <= 0 ||
          shootingStars[i].x < -250 ||
          shootingStars[i].x > width + 250 ||
          shootingStars[i].y < -100 ||
          shootingStars[i].y > height + 100
        ) {
          shootingStars.splice(i, 1);
        }
      }
    }

    let lastTime = Date.now();
    function animate() {
      drawBackground();
      for (const star of stars) {
        star.alpha += star.twinkle;
        if (star.alpha > 1) {
          star.alpha = 1;
          star.twinkle *= -1;
        }
        if (star.alpha < 0.4) {
          star.alpha = 0.4;
          star.twinkle *= -1;
        }
      }
      drawStars();

      const now = Date.now();
      const dt = now - lastTime;
      lastTime = now;
      if (now - lastShootingStar > nextShootingStar) {
        spawnShootingStar();
        lastShootingStar = now;
        nextShootingStar = randomBetween(1000, 3000);
      }
      updateShootingStars(dt);
      drawShootingStars();
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
};

export default StarBackground;
