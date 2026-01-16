export const Card: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="bg-surface rounded-lg shadow-lg p-md">
    {children}
  </div>
);
