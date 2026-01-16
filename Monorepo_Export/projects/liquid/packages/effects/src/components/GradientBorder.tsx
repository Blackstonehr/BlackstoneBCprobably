import React from 'react';
import { colors } from '@liquid/tokens';

export function GradientBorderCard({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={`relative p-[1px] rounded-lg overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${colors.bonewhite}33 0%, ${colors.bonewhite}08 50%, ${colors.bonewhite}15 100%)`
      }}
    >
      <div
        className="relative h-full w-full rounded-[7px] p-8"
        style={{ backgroundColor: colors.surface.muted }}
      >
        {children}
      </div>
    </div>
  );
}

