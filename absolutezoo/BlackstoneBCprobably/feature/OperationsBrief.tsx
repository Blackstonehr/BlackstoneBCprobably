import { SectionShell } from "../ui/SectionShell";
import { GlossyCard } from "../ui/GlossyCard";

export function OperationsBrief() {
  return (
    <SectionShell>
      <GlossyCard animated={false}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Operations Brief
            </h2>
            <p className="text-gray-300 mb-4">
              Blackstone enables rapid labor deployment, ensuring full compliance and maximizing human capital efficiency. Our advanced analytics and strategic foresight provide a decisive advantage in any operational theatre.
            </p>
            <p className="text-gray-400">
              We operate at the intersection of technology and human potential, delivering solutions that are both powerful and precise.
            </p>
          </div>
          <div className="text-center">
            {/* Placeholder for a more complex visual */}
            <div className="w-64 h-64 mx-auto border-4 border-neon-blue rounded-full flex items-center justify-center">
              <p className="text-lg font-bold text-neon-blue">BS-HC-A.I.</p>
            </div>
          </div>
        </div>
      </GlossyCard>
    </SectionShell>
  );
}
