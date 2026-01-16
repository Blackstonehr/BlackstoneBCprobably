import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SidebarNav, NavItem } from './SidebarNav';

// A simple placeholder icon component for the story
const PlaceholderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z"
    />
  </svg>
);

const sampleItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: <PlaceholderIcon /> },
  { label: 'Analytics', href: '/analytics', icon: <PlaceholderIcon /> },
  { label: 'Sites', href: '/sites', icon: <PlaceholderIcon /> },
  { label: 'Settings', href: '/settings', icon: <PlaceholderIcon /> },
];

const meta: Meta<typeof SidebarNav> = {
  title: 'Navigation/SidebarNav',
  component: SidebarNav,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarNav>;

export const ObsidianNeon: Story = {
  args: {
    items: sampleItems,
    activePath: '/analytics',
    variant: 'obsidian-neon',
  },
};

export const AetherLight: Story = {
  args: {
    ...ObsidianNeon.args,
    variant: 'aether-light',
  },
};