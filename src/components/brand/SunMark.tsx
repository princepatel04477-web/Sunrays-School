import React from "react";
import { cn } from "@/lib/utils";

interface SunMarkProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function SunMark({ className, size = 48, ...props }: SunMarkProps) {
  // 13 rays fanned 180° across the horizon (from 0° to 180°, 15° step)
  const rays = Array.from({ length: 13 }, (_, i) => {
    const angleDeg = i * 15;
    const angleRad = (angleDeg * Math.PI) / 180;
    const cx = 50;
    const cy = 46;
    const rInner = 14;
    const rOuter = 40;
    const x1 = cx - Math.cos(angleRad) * rInner;
    const y1 = cy - Math.sin(angleRad) * rInner;
    const x2 = cx - Math.cos(angleRad) * rOuter;
    const y2 = cy - Math.sin(angleRad) * rOuter;
    return { x1, y1, x2, y2, angleDeg };
  });

  return (
    <svg
      viewBox="0 0 100 52"
      width={size}
      height={size ? Math.round(size * 0.52) : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-sun inline-block shrink-0", className)}
      aria-hidden="true"
      {...props}
    >
      {/* Central half-disc arc */}
      <path
        d="M 38 46 A 12 12 0 0 1 62 46"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      {/* 13 Fine Rays */}
      {rays.map((ray, index) => (
        <line
          key={index}
          x1={ray.x1.toFixed(2)}
          y1={ray.y1.toFixed(2)}
          x2={ray.x2.toFixed(2)}
          y2={ray.y2.toFixed(2)}
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          className="sun-ray"
          data-ray-index={index}
        />
      ))}
      {/* Horizon Hairline */}
      <line
        x1="2"
        y1="46"
        x2="98"
        y2="46"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        className="sun-horizon"
      />
    </svg>
  );
}
