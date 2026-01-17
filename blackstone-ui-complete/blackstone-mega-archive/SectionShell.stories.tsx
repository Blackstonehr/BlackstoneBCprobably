import type { Meta, StoryObj } from '@storybook/react';
import { SectionShell } from './SectionShell';

const meta: Meta<typeof SectionShell> = {
  title: 'Layout/SectionShell',
  component: SectionShell,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['obsidian-neon', 'aether-light', 'transparent'],
    },
    as: {
      control: { type: 'radio' },
      options: ['section', 'div'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SectionShell>;

export const Default: Story = {
  args: {
    children: (
      <div className="text-center">
        <h2 className="text-3xl font-bold">Contained Content</h2>
        <p>This content is inside the SectionShell.</p>
      </div>
    ),
    variant: 'aether-light',
  },
};