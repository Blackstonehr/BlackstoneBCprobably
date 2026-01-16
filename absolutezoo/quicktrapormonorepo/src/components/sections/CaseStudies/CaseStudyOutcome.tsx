import { CheckCircle2 } from "lucide-react";

interface OutcomeProps {
  title: string;
  points: string[];
}

export default function CaseStudyOutcome({ title, points }: OutcomeProps) {
  return (
    <div className="bg-white rounded-xl p-8 border border-brand-accent/10 shadow-sm relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />

      <h3 className="font-bold text-graphite text-lg mb-6 flex items-center gap-2">
        <span className="w-1 h-6 bg-brand-accent rounded-full" />
        {title}
      </h3>

      <ul className="space-y-4">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-3 text-steel text-sm group">
            <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 group-hover:scale-110 transition-transform" />
            <span className="leading-relaxed">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
