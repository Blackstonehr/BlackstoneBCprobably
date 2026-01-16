import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Activity, Clock, MapPin } from "lucide-react";
import Container from "../../layout/Container";
import Button from "../../ui/Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaSecondaryText?: string;
  image: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export default function HeroEnhanced({
  title,
  subtitle,
  ctaText,
  ctaSecondaryText,
  image,
  stats
}: HeroProps) {
  const defaultStats = stats || [
    { value: "500+", label: "Installations", icon: MapPin },
    { value: "50+", label: "Municipalities", icon: Shield },
    { value: "15", label: "Years Experience", icon: Clock },
    { value: "99.9%", label: "Uptime", icon: Activity }
  ];

  return (
    <div className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-graphite">
      {/* Background Image with Enhanced Overlay */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={image}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          alt="Stormwater Management"
        />
      </motion.div>

      {/* Gradient Overlays - Enhanced for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/95 to-graphite/60 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/40 to-transparent z-0" />

      {/* Blueprint Grid Overlay */}
      <div className="blueprint-grid absolute inset-0 opacity-20 z-0" />

      <Container className="relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              <span className="text-sm font-medium text-white/80 tracking-widest uppercase">
                Engineered for Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-hero font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/90 max-w-2xl leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {ctaText && (
                <Button
                  className="text-lg px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-white shadow-lg hover:shadow-brand-accent/20 transition-all transform hover:-translate-y-1"
                  href="#features"
                >
                  {ctaText}
                </Button>
              )}
              {ctaSecondaryText && (
                <a
                  href="/product"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all group"
                >
                  {ctaSecondaryText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </motion.div>
          </div>

          {/* Stats / Visual Element */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-panel rounded-2xl p-8 border border-white/10 bg-white/5"
            >
              <div className="grid grid-cols-2 gap-8">
                {defaultStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-white/75 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
}
