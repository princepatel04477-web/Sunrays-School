import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  tone?: "paper" | "paper-2" | "ink";
  spacing?: "default" | "tight" | "hero" | "none";
  className?: string;
  children: React.ReactNode;
}

export function Section({
  as: Component = "section",
  tone = "paper",
  spacing = "default",
  className,
  children,
  ...props
}: SectionProps) {
  const toneClasses = {
    paper: "bg-paper text-ink",
    "paper-2": "bg-paper-2 text-ink",
    ink: "bg-ink text-paper on-ink",
  };

  const spacingClasses = {
    none: "",
    default: "py-[clamp(96px,14vw,200px)]",
    tight: "py-[clamp(64px,8vw,120px)]",
    hero: "pt-[clamp(120px,16vw,220px)] pb-[clamp(96px,12vw,160px)]",
  };

  return (
    <Component
      className={cn(
        "relative w-full overflow-hidden transition-colors",
        toneClasses[tone],
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
