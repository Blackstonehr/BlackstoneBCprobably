import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { SectionShell } from '../components/SectionShell/SectionShell';
import { GlossyMetricCard } from '../components/GlossyMetricCard/GlossyMetricCard';

const meta: Meta = {
  title: 'Previews/Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Dashboard = () => (
  <div className="bg-black">
    <HeroSection
      title="Project Dashboard"
      subtitle="An overview of key metrics and performance indicators for the Blackstone ecosystem."
      ctaText="View Full Report"
      ctaLink="#"
      variant="obsidian-neon"
    />
    <SectionShell variant="obsidian-neon">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlossyMetricCard
          label="Active Users"
          value="1.2M"
          change="+5.2% this month"
          intent="positive"
        />
        <GlossyMetricCard
          label="Revenue"
          value="$405,091"
          change="+2.1% this month"
          intent="positive"
        />
        <GlossyMetricCard
          label="Bounce Rate"
          value="48.2%"
          change="+3.5% this month"
          intent="negative"
        />
        <GlossyMetricCard
          label="Server Latency"
          value="120ms"
          change="-15ms"
          intent="neutral"
        />
      </div>
    </SectionShell>
  </div>
);

export const Default: StoryObj = {
  render: () => <Dashboard />,
};