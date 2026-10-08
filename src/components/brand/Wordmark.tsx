import React from "react";
import { cn } from "@/lib/utils";

interface WordmarkProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: "sm" | "base" | "lg";
}

export function Wordmark({ className, size = "base", ...props }: WordmarkProps) {
  const sizeClasses = {
    sm: {
      title: "text-lg md:text-xl",
      subtitle: "text-[9px] tracking-[0.24em]",
    },
    base: {
      title: "text-2xl md:text-3xl",
      subtitle: "text-[10px] md:text-[11px] tracking-[0.22em]",
    },
    lg: {
      title: "text-3xl md:text-5xl",
      subtitle: "text-[12px] md:text-[13px] tracking-[0.26em]",
    },
  };

  return (
    <div
      className={cn("flex flex-col leading-none select-none", className)}
      {...props}
    >
      <span
        className={cn(
          "font-display tracking-[0.22em] font-normal uppercase text-current",
          sizeClasses[size].title
        )}
      >
        SUNRAYS
      </span>
      <span
        className={cn(
          "font-sans uppercase font-medium text-sun-text mt-1",
          sizeClasses[size].subtitle
        )}
      >
        VIDHYALAYA · SURAT
      </span>
    </div>
  );
}
