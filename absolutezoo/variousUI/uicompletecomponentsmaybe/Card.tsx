import * as React from "react";

export const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-black/50 ${className}`}
  >
    {children}
  </div>
);
