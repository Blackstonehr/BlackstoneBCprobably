import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  blueprint?: boolean;
}

export default function Section({
  children,
  className = "",
  blueprint = false
}: SectionProps) {
  return (
    <section
      className={`
        py-24 lg:py-32 
        ${blueprint ? "blueprint-grid" : ""} 
        ${className}
      `}
    >
      {children}
    </section>
  );
}
