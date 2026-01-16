import { Shield, Globe, Leaf, CheckCircle } from "lucide-react";

export default function ProductCerts() {
  const certs = [
    {
      label: "CSA",
      desc: "Conforms to applicable Canadian structural and materials standards.",
      icon: Shield
    },
    {
      label: "CE",
      desc: "Meets EU environmental and product performance guidelines.",
      icon: Globe
    },
    {
      label: "Environmental",
      desc: "Designed to reduce sediment and pollutant discharge into municipal storm systems.",
      icon: Leaf
    },
    {
      label: "Municipal Fit",
      desc: "Compatible with standard North American catch-basin dimensions and configurations.",
      icon: CheckCircle
    },
  ];

  return (
    <section id="certs" className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-brand-accent/10 text-brand-accent">
          <Shield className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-graphite">Certifications & Compliance</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="flex gap-4 p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all"
          >
            <div className="shrink-0">
              <div className="w-10 h-10 rounded-full bg-concrete flex items-center justify-center text-brand-accent">
                <cert.icon className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-graphite mb-1">{cert.label}</h3>
              <p className="text-sm text-steel leading-relaxed">
                {cert.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
