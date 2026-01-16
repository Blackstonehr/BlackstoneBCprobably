import { GlossyMetricCard } from "../ui/GlossyMetricCard";
import { SectionShell } from "../ui/SectionShell";
import { FaBolt, FaShieldAlt, FaUsers } from "react-icons/fa";

export function DirectiveGrid() {
  return (
    <SectionShell>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <GlossyMetricCard
          icon={<FaBolt />}
          title="Velocity"
          subtitle="Rapid deployment of human capital."
        />
        <GlossyMetricCard
          icon={<FaShieldAlt />}
          title="Compliance"
          subtitle="Adherence to all regulations."
        />
        <GlossyMetricCard
          icon={<FaUsers />}
          title="Utilization"
          subtitle="Optimal use of human resources."
        />
      </div>
    </SectionShell>
  );
}
