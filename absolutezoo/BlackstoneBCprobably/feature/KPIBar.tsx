"use client";
import { motion } from "framer-motion";
import { GlossyCard } from "../ui/GlossyCard";
import { SectionShell } from "../ui/SectionShell";

const kpis = [
  { name: "Velocity", value: 95 },
  { name: "Risk Mitigation", value: 80 },
  { name: "Utilization", value: 92 },
];

export function KPIBar() {
  return (
    <SectionShell>
      <GlossyCard animated={false}>
        <div className="space-y-4">
          {kpis.map((kpi) => (
            <div key={kpi.name}>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-white">
                  {kpi.name}
                </span>
                <span className="text-sm font-medium text-white">
                  {kpi.value}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-neon-blue h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${kpi.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </GlossyCard>
    </SectionShell>
  );
}
