import React from "react";
import { cn } from "@/lib/utils";

interface Grid12Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function Grid12({ className, children, ...props }: Grid12Props) {
  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
