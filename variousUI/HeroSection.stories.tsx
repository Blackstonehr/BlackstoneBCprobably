import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'Blocks/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['obsidian-neon', 'aether-light'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hero-Section>;

export const ObsidianNeon: Story = {
  args: {
    title: 'Build the Future, Faster',
    subtitle:
      'Our unified platform provides the building blocks for creating consistent, high-quality digital experiences across all Blackstone properties.',
    ctaText: 'Get Started',
    ctaLink: '#',
    variant: 'obsidian-neon',
    animated: true,
  },
};

export const AetherLight: Story = {
  args: {
    ...ObsidianNeon.args,
    variant: 'aether-light',
  },
};