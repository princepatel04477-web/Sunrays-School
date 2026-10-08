"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MasonryProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  columns?: { default: number; sm?: number; md?: number; lg?: number };
  gap?: number;
  className?: string;
}

export function Masonry<T>({
  items,
  renderItem,
  columns = { default: 1, sm: 2, md: 3, lg: 3 },
  gap = 24,
  className,
}: MasonryProps<T>) {
  const [colCount, setColCount] = useState(columns.default);

  useEffect(() => {
    const updateCols = () => {
      const width = window.innerWidth;
      if (width >= 1024 && columns.lg) {
        setColCount(columns.lg);
      } else if (width >= 768 && columns.md) {
        setColCount(columns.md);
      } else if (width >= 640 && columns.sm) {
        setColCount(columns.sm);
      } else {
        setColCount(columns.default);
      }
    };

    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, [columns]);

  const columnBuckets: T[][] = Array.from({ length: colCount }, () => []);
  items.forEach((item, index) => {
    columnBuckets[index % colCount]?.push(item);
  });

  return (
    <div
      className={cn("flex w-full items-start", className)}
      style={{ gap: `${gap}px` }}
    >
      {columnBuckets.map((bucket, colIdx) => (
        <div
          key={colIdx}
          className="flex flex-1 flex-col"
          style={{ gap: `${gap}px` }}
        >
          {bucket.map((item, itemIdx) => (
            <React.Fragment key={itemIdx}>
              {renderItem(item, itemIdx * colCount + colIdx)}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}
