import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
    const contactDetails = [
        {
            icon: Mail,
            title: "Email",
            lines: ["info@quicktrap.ca", "support@quicktrap.ca"]
        },
        {
            icon: Phone,
            title: "Phone",
            lines: ["Main: (555) 123-4567", "Support: (555) 123-4568"]
        },
        {
            icon: MapPin,
            title: "Address",
            lines: ["123 Industrial Way", "Suite 100", "Anytown, ST 12345"]
        },
        {
            icon: Clock,
            title: "Business Hours",
            lines: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday - Sunday: Closed", "Emergency support available 24/7"]
        }
    ];

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-3xl font-bold text-graphite mb-6">
                    Get In Touch
                </h2>
                <p className="text-lg text-steel leading-relaxed">
                    Whether you're planning a new installation, need technical support, or have
                    questions about our products, our team is here to help.
                </p>
            </motion.div>

            <div className="space-y-8">
                {contactDetails.map((detail, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 shrink-0">
                            <detail.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-graphite text-lg mb-1 group-hover:text-brand-accent transition-colors">
                                {detail.title}
                            </h3>
                            {detail.lines.map((line, i) => (
                                <p key={i} className="text-steel text-base leading-relaxed">
                                    {line}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
