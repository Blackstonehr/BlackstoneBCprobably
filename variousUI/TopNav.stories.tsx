import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TopNav } from './TopNav';

const LogoPlaceholder = () => (
  <div className="font-bold text-xl tracking-wider">BLACKSTONE</div>
);

const UserProfilePlaceholder = () => (
  <div className="flex items-center space-x-4">
    <span className="text-sm">Jane Doe</span>
    <div className="h-8 w-8 rounded-full bg-purple-500" />
  </div>
);

const NavLinksPlaceholder = () => (
  <div className="flex items-center space-x-6 text-sm font-medium">
    <a href="#" className="hover:text-white">
      Overview
    </a>
    <a href="#" className="hover:text-white">
      Customers
    </a>
    <a href="#" className="hover:text-white">
      Products
    </a>
  </div>
);

const meta: Meta<typeof TopNav> = {
  title: 'Navigation/TopNav',
  component: TopNav,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TopNav>;

export const ObsidianNeon: Story = {
  args: {
    logo: <LogoPlaceholder />,
    userProfile: <UserProfilePlaceholder />,
    children: <NavLinksPlaceholder />,
    variant: 'obsidian-neon',
  },
};

export const AetherLight: Story = {
  args: {
    ...ObsidianNeon.args,
    variant: 'aether-light',
  },
};