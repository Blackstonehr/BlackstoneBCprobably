import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const navVariants = cva(
  'flex items-center justify-between p-4 w-full',
  {
    variants: {
      variant: {
        'obsidian-neon': 'bg-black/30 text-gray-300 backdrop-blur-md border-b border-white/10',
        'aether-light': 'bg-white/30 text-gray-700 backdrop-blur-md border-b border-black/10',
      },
    },
    defaultVariants: {
      variant: 'obsidian-neon',
    },
  }
);

export interface TopNavProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navVariants> {
  /**
   * Slot for the logo or brand mark, typically on the left.
   */
  logo?: React.ReactNode;
  /**
   * Slot for user profile, actions, or other controls, typically on the right.
   */
  userProfile?: React.ReactNode;
}

export const TopNav: React.FC<TopNavProps> = ({
  className,
  variant,
  logo,
  userProfile,
  children,
  ...props
}) => {
  return (
    <header className={navVariants({ variant, className })} {...props}>
      <div>{logo}</div>
      <div className="flex-1 flex justify-center">{children}</div>
      <div>{userProfile}</div>
    </header>
  );
};