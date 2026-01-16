import { motion } from "framer-motion";
import { Activity, Droplets, Shield, Leaf } from "lucide-react";

export default function PerformanceData() {
    const performanceClaims = [
        {
            category: 'Flow Performance',
            icon: Activity,
            claims: [
                'Maintains 95%+ flow capacity under normal operating conditions',
                'Handles peak flow rates up to 500 GPM (model dependent)',
                'Minimal head loss across all flow ranges',
                'Self-cleaning design reduces maintenance frequency',
            ],
        },
        {
            category: 'Debris Capture',
            icon: Droplets,
            claims: [
                'Captures 90%+ of sediment particles larger than 250 microns',
                'Traps leaves, trash, and organic debris effectively',
                'Prevents downstream pipe blockages',
                'Reduces pollutant loading to waterways by up to 80%',
            ],
        },
        {
            category: 'Structural Integrity',
            icon: Shield,
            claims: [
                'Load rated for H-20 traffic (16,000 lbs wheel load)',
                'Corrosion-resistant materials with 25+ year service life',
                'Withstands freeze-thaw cycles without degradation',
                'Seismic-resistant design for high-risk zones',
            ],
        },
        {
            category: 'Environmental Compliance',
            icon: Leaf,
            claims: [
                'Meets EPA stormwater management guidelines',
                'Complies with local MS4 permit requirements',
                'Supports LEED and green building certifications',
                'Reduces total suspended solids (TSS) by 75%+',
            ],
        },
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-graphite mb-6">
                            Performance Data
                        </h2>
                        <p className="text-lg text-steel leading-relaxed">
                            Quicktrap units have been extensively tested in both laboratory and field conditions
                            to verify performance claims. All data is available upon request for engineering review.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {performanceClaims.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-concrete/30 rounded-xl p-8 border border-concrete hover:border-brand-accent/30 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-white shadow-sm text-brand-accent">
                                        <section.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-graphite">
                                        {section.category}
                                    </h3>
                                </div>
                                <ul className="space-y-3">
                                    {section.claims.map((claim, claimIndex) => (
                                        <li key={claimIndex} className="flex items-start gap-3 text-steel text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                                            <span className="leading-relaxed">{claim}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
