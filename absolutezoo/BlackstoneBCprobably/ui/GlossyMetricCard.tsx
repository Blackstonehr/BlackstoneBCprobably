import { GlossyCard } from "./GlossyCard";

export function GlossyMetricCard({
  icon,
  title,
  subtitle,
  animated = true,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  animated?: boolean;
}) {
  return (
    <GlossyCard animated={animated}>
      <div className="flex flex-col items-center text-center">
        <div className="text-neon-blue text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{subtitle}</p>
      </div>
    </GlossyCard>
  );
}
