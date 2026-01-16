import { useState } from 'react';
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import Button from "../../ui/Button";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [focused, setFocused] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, this would send data to a backend
        console.log('Form submitted:', formData);
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', email: '', organization: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    const InputField = ({ label, name, type = "text", required = false }: { label: string, name: string, type?: string, required?: boolean }) => (
        <div className="relative">
            <input
                type={type}
                id={name}
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused(null)}
                required={required}
                className="peer w-full px-4 py-3 border-2 border-concrete rounded-lg bg-white/50 focus:border-brand-accent focus:ring-0 outline-none transition-all placeholder-transparent"
                placeholder={label}
            />
            <label
                htmlFor={name}
                className={`absolute left-4 transition-all duration-200 pointer-events-none
          ${focused === name || formData[name as keyof typeof formData]
                        ? '-top-2.5 text-xs bg-white px-1 text-brand-accent font-bold'
                        : 'top-3.5 text-steel'
                    }`}
            >
                {label} {required && '*'}
            </label>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-card border border-white p-8 md:p-10 relative overflow-hidden"
        >
            <div className="blueprint-grid absolute inset-0 opacity-5 pointer-events-none" />

            <h3 className="text-2xl font-bold text-graphite mb-8 relative z-10">
                Send Us a Message
            </h3>

            {submitted ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 text-green-800 px-6 py-8 rounded-xl text-center mb-6"
                >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <p className="font-bold text-lg mb-2">Message Sent!</p>
                    <p className="text-sm opacity-80">We'll get back to you within 24 hours.</p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <InputField label="Name" name="name" required />
                    <InputField label="Email" name="email" type="email" required />
                    <InputField label="Organization" name="organization" />

                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocused('message')}
                            onBlur={() => setFocused(null)}
                            required
                            rows={5}
                            className="peer w-full px-4 py-3 border-2 border-concrete rounded-lg bg-white/50 focus:border-brand-accent focus:ring-0 outline-none transition-all placeholder-transparent resize-none"
                            placeholder="Message"
                        />
                        <label
                            htmlFor="message"
                            className={`absolute left-4 transition-all duration-200 pointer-events-none
                ${focused === 'message' || formData.message
                                    ? '-top-2.5 text-xs bg-white px-1 text-brand-accent font-bold'
                                    : 'top-3.5 text-steel'
                                }`}
                        >
                            Message *
                        </label>
                    </div>

                    <Button className="w-full justify-center group">
                        Send Message
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <p className="text-xs text-steel text-center mt-4">
                        * Required fields
                    </p>
                </form>
            )}
        </motion.div>
    );
}
