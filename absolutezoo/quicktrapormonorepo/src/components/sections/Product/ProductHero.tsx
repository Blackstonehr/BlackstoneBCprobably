import { motion } from "framer-motion";
import Container from "../../layout/Container";

interface ProductHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function ProductHero({ title, subtitle, image }: ProductHeroProps) {
  return (
    <div className="relative w-full min-h-[50vh] flex items-center border-b border-concrete overflow-hidden bg-graphite">
      {/* Background Image with Parallax-like effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />
      </motion.div>

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/60 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent z-0" />

      {/* Blueprint Grid */}
      <div className="blueprint-grid absolute inset-0 opacity-10 z-0" />

      {/* Content */}
      <Container className="relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
            <span className="text-xs font-bold text-white/90 tracking-widest uppercase">
              Product Series
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </Container>
    </div>
  );
}
