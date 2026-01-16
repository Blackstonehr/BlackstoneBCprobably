const LoadingOverlay = () => (
  <div className="fixed inset-0 bg-graphite/80 flex items-center justify-center z-[9999]">
    <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default LoadingOverlay;
