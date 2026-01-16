import { motion } from "framer-motion";
import { CheckCircle, Award, Shield, Building2 } from "lucide-react";
import Container from "../../layout/Container";

interface CertificationBadge {
  name: string;
  description: string;
  icon?: any;
}

interface TrustSectionProps {
  certifications?: CertificationBadge[];
}

export default function TrustSection({ certifications }: TrustSectionProps) {
  const defaultCertifications = certifications || [
    {
      name: "AASHTO",
      description: "Compliant with American Association of State Highway and Transportation Officials standards",
      icon: Shield
    },
    {
      name: "ISO 9001",
      description: "Quality Management System Certified",
      icon: CheckCircle
    },
    {
      name: "EPA",
      description: "Environmental Protection Agency Approved",
      icon: Award
    },
    {
      name: "Municipal",
      description: "Meets Municipal Engineering Standards",
      icon: Building2
    }
  ];

  return (
    <section className="py-20 bg-concrete border-y border-steel/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="blueprint-grid absolute inset-0 opacity-5" />

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-graphite mb-4"
          >
            Trusted by Municipalities Nationwide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-steel text-lg max-w-2xl mx-auto"
          >
            Our solutions meet the highest industry standards and certifications
          </motion.p>
        </div>

        {/* Certification Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {defaultCertifications.map((cert, index) => {
            const Icon = cert.icon || CheckCircle;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                {/* Badge Icon/Circle */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-accent/5 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 text-brand-accent">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>

                {/* Badge Name */}
                <h3 className="text-xl font-bold text-graphite text-center mb-3 group-hover:text-brand-accent transition-colors">
                  {cert.name}
                </h3>

                {/* Badge Description */}
                <p className="text-sm text-steel text-center leading-relaxed">
                  {cert.description}
                </p>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </motion.div>
            );
          })}
        </div>

        {/* Optional: Client Logos Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-steel/10"
        >
          <p className="text-center text-xs font-bold text-steel/60 tracking-widest uppercase mb-10">
            Serving Leading Municipalities
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder for client logos - replace with actual logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-12 w-32 bg-steel/10 rounded flex items-center justify-center text-steel/40 text-xs font-medium hover:bg-steel/20 transition-colors cursor-pointer"
              >
                Client Logo {i}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
