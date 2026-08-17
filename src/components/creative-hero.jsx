"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils"; // Adjust this if needed

export function CreativeHero({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let devicePixelRatio;

    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;

      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    });

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 1 + 0.5;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
        this.density = Math.random() * 20 + 1;
        this.distance = 0;

        const colors = [
          "rgba(100, 150, 255, 0.4)",
          "rgba(150, 200, 255, 0.4)",
          "rgba(100, 200, 200, 0.4)",
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        this.distance = Math.sqrt(dx * dx + dy * dy);

        const maxDistance = 100;
        if (this.distance < maxDistance) {
          const forceDirectionX = dx / this.distance;
          const forceDirectionY = dy / this.distance;
          const force = (maxDistance - this.distance) / maxDistance;

          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;

          this.x -= directionX;
          this.y -= directionY;
        }

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width / devicePixelRatio || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height / devicePixelRatio || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.1)");
        gradient.addColorStop(0.5, this.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.shadowColor = "transparent";
      }
    }

    const particlesArray = [];
    const particleCount = 100;

    function init() {
      particlesArray.length = 0;
      const canvasWidth = canvas.width / devicePixelRatio;
      const canvasHeight = canvas.height / devicePixelRatio;

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        particlesArray.push(new Particle(x, y));
      }
    }

    init();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;

      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const connectionDistance = 120;
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 150, 255, 0.08)`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", init);

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <motion.div
      className={cn("w-full h-full", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </motion.div>
  );
}
