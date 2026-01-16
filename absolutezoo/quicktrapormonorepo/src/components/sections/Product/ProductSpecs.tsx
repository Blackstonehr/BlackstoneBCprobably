import { Ruler, Weight, Activity, Box, ShieldCheck, Thermometer, Clock, FileText } from "lucide-react";

export default function ProductSpecs() {
  const specs = [
    { label: "Material", value: "HDPE body with stainless steel internal baffle", icon: Box },
    { label: "Dimensions", value: '24" x 18" x 12" (standard catch-basin fit)', icon: Ruler },
    { label: "Weight", value: "14.2 lbs", icon: Weight },
    { label: "Flow Rating", value: "480 L/min (max tested throughput)", icon: Activity },
    { label: "Sediment Capacity", value: "8.5 kg retention volume", icon: ShieldCheck },
    { label: "Load Rating", value: "H-20 (AASHTO compliant)", icon: FileText },
    { label: "Temperature Resistance", value: "-40°C to 85°C", icon: Thermometer },
    { label: "Maintenance Interval", value: "Recommended inspection every 6 months", icon: Clock },
  ];

  return (
    <section id="specs" className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-brand-accent/10 text-brand-accent">
          <Activity className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-graphite">Technical Specifications</h2>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {specs.map((spec, index) => (
            <div
              key={index}
              className={`p-6 hover:bg-gray-50 transition-colors ${index < specs.length - 2 ? 'border-b border-gray-100' : ''
                }`}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-md bg-concrete text-steel">
                  <spec.icon className="w-5 h-5" />
                </div>
                <div>
                  <dt className="text-sm font-bold text-graphite mb-1 uppercase tracking-wide">
                    {spec.label}
                  </dt>
                  <dd className="text-steel text-sm leading-relaxed">
                    {spec.value}
                  </dd>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
