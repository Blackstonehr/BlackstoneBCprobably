interface FeatureCardProps {
  title: string;
  desc: string;
  icon: string;
}

export default function FeatureCard({ title, desc, icon }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-card p-inner border border-concrete shadow-card hover:shadow-cardHover transition">
      <div className="h-14 w-14 rounded-md bg-brand-accent/20 flex items-center justify-center mb-6">
        <img src={icon} className="h-7 w-7 opacity-90" alt="" />
      </div>
      <h3 className="text-h3 font-semibold text-graphite mb-1">{title}</h3>
      <p className="text-steel text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
