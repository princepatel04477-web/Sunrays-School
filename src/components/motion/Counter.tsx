"use client";

import React, { useRef, useState } from "react";
import { gsap } from "@/lib/motion/gsap";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function Counter({
  from = 0,
  to,
  duration = 1.8,
  suffix = "",
  className,
  ...props
}: CounterProps) {
  const [displayValue, setDisplayValue] = useState(from);
  const elementRef = useRef<HTMLSpanElement>(null);
  const motionSafe = useMotionSafe();

  const formatter = new Intl.NumberFormat("en-IN");

  useGSAP(
    () => {
      if (!motionSafe || !elementRef.current) {
        setDisplayValue(to);
        return;
      }

      const counterObj = { val: from };

      gsap.to(counterObj, {
        val: to,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          setDisplayValue(Math.round(counterObj.val));
        },
      });
    },
    { scope: elementRef, dependencies: [from, to, duration, motionSafe] }
  );

  return (
    <span
      ref={elementRef}
      className={cn("tabular-nums inline-block font-sans", className)}
      {...props}
    >
      {formatter.format(displayValue)}
      {suffix}
    </span>
  );
}
