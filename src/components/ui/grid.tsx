import React from "react";

type GridProps = {
  children: React.ReactNode;
  columns?: string; // Tailwind grid-cols value (e.g., "1 sm:grid-cols-2 md:grid-cols-3")
  gap?: string; // Tailwind gap value (e.g., "4")
};

const Grid: React.FC<GridProps> = ({ children, columns = "1 sm:grid-cols-2 md:grid-cols-3", gap = "6" }) => {
  return (
    <div className={`grid grid-cols-${columns} gap-${gap} w-full max-w-5xl mx-auto`}>{children}</div>
  );
};

export default Grid;
