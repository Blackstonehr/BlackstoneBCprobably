import type { Meta, StoryObj } from '@storybook/react';
import { GlossyMetricCard } from './GlossyMetricCard';

const meta: Meta<typeof GlossyMetricCard> = {
  title: 'Blocks/GlossyMetricCard',
  component: GlossyMetricCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['obsidian-neon', 'aether-light'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlossyMetricCard>;

export const ObsidianNeon: Story = {
  args: {
    label: 'Revenue',
    value: '$405,091.00',
    change: '+4.2% from last month',
    variant: 'obsidian-neon',
  },
};

export const AetherLight: Story = {
  args: {
    ...ObsidianNeon.args,
    variant: 'aether-light',
    change: '+20.1% from last month',
  },
};