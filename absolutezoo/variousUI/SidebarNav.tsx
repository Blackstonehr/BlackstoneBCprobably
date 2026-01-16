import React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';

const navVariants = cva('h-full p-4', {
  variants: {
    variant: {
      'obsidian-neon': 'bg-gray-900/70 text-gray-300 backdrop-blur-md border-r border-white/10',
      'aether-light': 'bg-gray-100/70 text-gray-700 backdrop-blur-md border-r border-black/10',
    },
  },
  defaultVariants: {
    variant: 'obsidian-neon',
  },
});

const linkVariants = cva(
  'flex items-center w-full p-3 rounded-lg transition-colors text-sm font-medium',
  {
    variants: {
      variant: {
        'obsidian-neon': 'hover:bg-white/10',
        'aether-light': 'hover:bg-black/10',
      },
      active: {
        true: '',
      },
    },
    compoundVariants: [
      { variant: 'obsidian-neon', active: true, className: 'bg-purple-500/20 text-white' },
      { variant: 'aether-light', active: true, className: 'bg-blue-500/20 text-black' },
    ],
  }
);

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface SidebarNavProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navVariants> {
  items: NavItem[];
  activePath: string;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  className,
  variant,
  items,
  activePath,
  ...props
}) => {
  return (
    <nav className={navVariants({ variant, className })} {...props}>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className={linkVariants({ variant, active: activePath === item.href })}>
              {item.icon && <span className="mr-3 h-5 w-5">{item.icon}</span>}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};