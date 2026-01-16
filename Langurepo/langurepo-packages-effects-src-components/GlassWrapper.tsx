import React from 'react';
import { glass } from '@liquid/tokens';

export const GlassWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div
    className="rounded-lg shadow-md"
    style={{
      backgroundColor: glass.surface.medium,
      backdropFilter: `blur(${glass.blur.card})`,
      WebkitBackdropFilter: `blur(${glass.blur.card})`,
    }}
  >
    {children}
  </div>
);
