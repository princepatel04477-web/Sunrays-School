import React from "react";
import { cn } from "@/lib/utils";

interface HairlineProps extends React.HTMLAttributes<HTMLHRElement> {
  accent?: boolean;
  className?: string;
}

export function Hairline({ accent = false, className, ...props }: HairlineProps) {
  return (
    <hr
      className={cn(
        "border-0 h-px w-full",
        accent ? "bg-sun" : "bg-[var(--line)]",
        className
      )}
      {...props}
    />
  );
}
