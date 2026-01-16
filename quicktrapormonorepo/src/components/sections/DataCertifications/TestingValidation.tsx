import { motion } from "framer-motion";
import { FlaskConical, Map } from "lucide-react";

export default function TestingValidation() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-graphite mb-6">
                            Testing & Validation
                        </h2>
                        <p className="text-lg text-steel leading-relaxed">
                            All Quicktrap products undergo rigorous testing protocols to ensure reliability and performance:
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-concrete/30 rounded-xl p-8 border border-concrete"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-white shadow-sm text-brand-accent">
                                    <FlaskConical className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-graphite">
                                    Laboratory Testing
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Hydraulic performance testing",
                                    "Structural load testing",
                                    "Material durability testing",
                                    "Sediment capture efficiency"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-steel">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-concrete/30 rounded-xl p-8 border border-concrete"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-white shadow-sm text-brand-accent">
                                    <Map className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-graphite">
                                    Field Validation
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Real-world installation monitoring",
                                    "Long-term performance tracking",
                                    "Environmental impact assessment",
                                    "Customer satisfaction surveys"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-steel">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
