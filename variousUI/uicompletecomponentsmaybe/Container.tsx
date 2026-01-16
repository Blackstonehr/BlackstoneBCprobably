import * as React from "react";

export const Container = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
