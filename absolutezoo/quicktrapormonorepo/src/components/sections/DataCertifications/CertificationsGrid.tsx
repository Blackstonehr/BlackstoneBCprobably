import { motion } from "framer-motion";
import { Award, CheckCircle2, ShieldCheck, Globe, FileCheck, BadgeCheck } from "lucide-react";

export default function CertificationsGrid() {
    const certifications = [
        {
            name: 'ISO 9001:2015',
            description: 'Quality Management System Certification',
            icon: Award
        },
        {
            name: 'ASTM Standards',
            description: 'Compliant with ASTM D3034 and ASTM C478',
            icon: FileCheck
        },
        {
            name: 'EPA Verification',
            description: 'Environmental Technology Verification Program',
            icon: Globe
        },
        {
            name: 'AASHTO M306',
            description: 'Standard Specification for Drainage Pipe',
            icon: ShieldCheck
        },
        {
            name: 'NSF/ANSI 61',
            description: 'Drinking Water System Components',
            icon: CheckCircle2
        },
        {
            name: 'APWA Standards',
            description: 'American Public Works Association Compliance',
            icon: BadgeCheck
        },
    ];

    return (
        <section className="py-24 bg-concrete relative overflow-hidden">
            {/* Background Pattern */}
            <div className="blueprint-grid absolute inset-0 opacity-5" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-graphite mb-6">
                            Industry Certifications
                        </h2>
                        <p className="text-lg text-steel max-w-2xl mx-auto leading-relaxed">
                            Quicktrap products meet or exceed all relevant industry standards and certifications
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-card hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-accent/5 flex items-center justify-center text-brand-accent">
                                    <cert.icon className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-bold text-graphite mb-3">
                                    {cert.name}
                                </h3>
                                <p className="text-sm text-steel leading-relaxed">
                                    {cert.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
