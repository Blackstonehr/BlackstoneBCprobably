import { motion } from "framer-motion";
import Container from "./layout/Container";
import Button from "./ui/Button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-graphite relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-graphite via-graphite to-brand-accent/20" />
      <div className="blueprint-grid absolute inset-0 opacity-10" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            {title}
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={primaryButtonLink} variant="primary">
              {primaryButtonText}
            </Button>

            {secondaryButtonText && secondaryButtonLink && (
              <Button href={secondaryButtonLink} variant="outline">
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
