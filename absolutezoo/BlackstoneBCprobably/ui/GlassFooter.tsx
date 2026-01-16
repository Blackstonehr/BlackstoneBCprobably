export function GlassFooter() {
  return (
    <footer className="w-full bg-black border-t border-neon-blue mt-20">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Blackstone Advanced Human Capital. All rights reserved. Precision. Efficiency. Dominance.
        </p>
      </div>
    </footer>
  );
}
