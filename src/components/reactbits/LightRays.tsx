"use client";

import React, { useRef, useEffect } from "react";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";
import { cn } from "@/lib/utils";

interface LightRaysProps {
  className?: string;
  intensity?: number; // default 0.22
  color?: string; // default var(--sun-glow)
}

export function LightRays({
  className,
  intensity = 0.22,
  color = "var(--sun-glow)",
}: LightRaysProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const motionSafe = useMotionSafe();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !motionSafe) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const rays = Array.from({ length: 9 }, (_, i) => ({
      angle: ((i - 4) * 0.18) + (Math.random() - 0.5) * 0.05,
      speed: 0.0003 + Math.random() * 0.0004,
      width: 0.12 + Math.random() * 0.08,
      phase: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      const originX = width / 2;
      const originY = 0;

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      rays.forEach((ray) => {
        const pulse = Math.sin(time * ray.speed * 4 + ray.phase) * 0.3 + 0.7;
        const currentAngle = Math.PI / 2 + ray.angle + Math.sin(time * ray.speed) * 0.05;
        const rayLength = height * 1.5;

        const endX = originX + Math.cos(currentAngle) * rayLength;
        const endY = originY + Math.sin(currentAngle) * rayLength;

        const grad = ctx.createLinearGradient(originX, originY, endX, endY);
        grad.addColorStop(0, "rgba(242, 178, 92, " + (intensity * pulse) + ")");
        grad.addColorStop(0.5, "rgba(242, 178, 92, " + (intensity * pulse * 0.4) + ")");
        grad.addColorStop(1, "rgba(242, 178, 92, 0)");

        ctx.beginPath();
        ctx.moveTo(originX, originY);
        const spread = ray.width * width * 0.5;
        ctx.lineTo(endX - spread, endY);
        ctx.lineTo(endX + spread, endY);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
      });

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [intensity, color, motionSafe]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden select-none",
        className
      )}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-80"
        style={{ mixBlendMode: "screen" }}
      />
      {/* Subtle static fallback for non-JS or reduced motion */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-sun-glow/10 via-transparent to-transparent pointer-events-none opacity-40"
      />
    </div>
  );
}
