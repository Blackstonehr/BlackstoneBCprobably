import * as React from "react";
import { Globe } from "lucide-react";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900">
      <Container className="py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-zinc-500" />
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">LanguBridge</span>
          </div>
          <p className="text-sm text-zinc-500">Since 2004. Language opens doors.</p>
          <div className="flex gap-4">
            {/* Replace with actual social links and icons */}
            <a href="#" className="text-zinc-500 hover:text-zinc-700 dark:hover:text-white">
              FB
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-700 dark:hover:text-white">
              IG
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
