import { motion } from "framer-motion";
import { BookOpen, Wrench, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdditionalResources() {
    const resources = [
        {
            icon: BookOpen,
            title: "Documentation",
            desc: "Access technical specs, CAD drawings, and installation guides",
            link: "/data-certifications",
            linkText: "View Resources"
        },
        {
            icon: Wrench,
            title: "Technical Support",
            desc: "Get help with installation, maintenance, or troubleshooting",
            link: "mailto:support@quicktrap.ca",
            linkText: "Contact Support"
        },
        {
            icon: Briefcase,
            title: "Sales Inquiry",
            desc: "Request a quote or discuss your project requirements",
            link: "mailto:sales@quicktrap.ca",
            linkText: "Contact Sales"
        }
    ];

    return (
        <section className="py-24 bg-concrete relative overflow-hidden">
            {/* Background Pattern */}
            <div className="blueprint-grid absolute inset-0 opacity-5" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-graphite mb-12 text-center"
                    >
                        Additional Resources
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {resources.map((res, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-card hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand-accent/5 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                                    <res.icon className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-graphite mb-3">
                                    {res.title}
                                </h3>
                                <p className="text-steel mb-6 leading-relaxed text-sm">
                                    {res.desc}
                                </p>

                                {res.link.startsWith('mailto') ? (
                                    <a href={res.link} className="inline-flex items-center text-brand-accent font-bold text-sm hover:text-brand-accent/80 transition-colors">
                                        {res.linkText} <ArrowRight className="w-4 h-4 ml-1" />
                                    </a>
                                ) : (
                                    <Link to={res.link} className="inline-flex items-center text-brand-accent font-bold text-sm hover:text-brand-accent/80 transition-colors">
                                        {res.linkText} <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
