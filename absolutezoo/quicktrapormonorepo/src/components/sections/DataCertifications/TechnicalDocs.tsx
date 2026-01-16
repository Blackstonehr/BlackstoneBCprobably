import { motion } from "framer-motion";
import { FileText, Download, FileCode, BookOpen, Shield } from "lucide-react";

export default function TechnicalDocs() {
    const docs = [
        {
            title: "Performance Test Reports",
            desc: "Detailed laboratory test results",
            icon: FileText
        },
        {
            title: "CAD Drawings",
            desc: "AutoCAD and Revit files",
            icon: FileCode
        },
        {
            title: "Installation Specifications",
            desc: "Complete installation guide",
            icon: BookOpen
        },
        {
            title: "Certification Documents",
            desc: "All compliance certificates",
            icon: Shield
        }
    ];

    return (
        <section className="py-24 bg-concrete relative overflow-hidden">
            {/* Background Pattern */}
            <div className="blueprint-grid absolute inset-0 opacity-5" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-graphite mb-6">
                            Technical Documentation
                        </h2>
                        <p className="text-lg text-steel leading-relaxed">
                            Comprehensive technical documentation is available for engineers and specifiers:
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {docs.map((doc, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-xl shadow-sm p-6 flex items-center justify-between hover:shadow-card transition-all duration-300 border border-gray-100 cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-brand-accent/5 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                                        <doc.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-graphite group-hover:text-brand-accent transition-colors">
                                            {doc.title}
                                        </h4>
                                        <p className="text-sm text-steel">
                                            {doc.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-concrete flex items-center justify-center text-steel group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-all">
                                    <Download className="w-5 h-5" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
