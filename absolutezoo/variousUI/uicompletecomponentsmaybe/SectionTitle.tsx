import * as React from "react";

export const SectionTitle = ({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) => {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-10 ${alignment}`}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif">{title}</h2>
      {subtitle && <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-lg">{subtitle}</p>}
    </div>
  );
};
