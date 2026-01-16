import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Wrench, Leaf, ArrowRight } from "lucide-react";
import HeroEnhanced from "../components/sections/Hero/HeroEnhanced";
import FeatureCardEnhanced from "../components/sections/Features/FeatureCardEnhanced";
import TrustSection from "../components/sections/TrustSection/TrustSection";
import SEO from "../components/SEO";

const HomeEnhanced = () => {
  const features = [
    {
      title: "95% Flow Capacity",
      description: "Maintains optimal drainage performance even during peak flow events.",
      icon: Droplets,
    },
    {
      title: "Rapid Installation",
      description: "Installs in under 15 minutes with no heavy machinery required.",
      icon: Wrench,
    },
    {
      title: "Eco-Friendly",
      description: "Prevents pollutants and debris from entering natural waterways.",
      icon: Leaf,
    },
    {
      title: "Durable Design",
      description: "Constructed from high-grade materials for long-lasting performance.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-concrete min-h-screen font-sans text-graphite">
      <SEO
        title="Advanced Catch Basin Filters"
        description="Quicktrap provides premium catch basin filters for effective stormwater management and debris control."
        canonical="https://quicktrap.ca/"
      />

      <HeroEnhanced
        title="Keep Storm Lines Open"
        subtitle="Advanced stormwater management solutions engineered to protect your infrastructure and ensure reliable drainage performance."
        ctaText="Request a Quote"
        ctaSecondaryText="View Products"
        image="/images/hero_aerial.png"
      />

      <TrustSection />

      {/* Features Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0 opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-graphite tracking-tight">
              Engineered for <span className="text-brand-accent">Excellence</span>
            </h2>
            <p className="text-xl text-steel max-w-2xl mx-auto leading-relaxed">
              Our patented design combines superior flow rates with exceptional debris retention.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCardEnhanced
                key={index}
                title={feature.title}
                desc={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-graphite text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-graphite via-graphite to-brand-accent/20" />

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
          >
            Ready to Upgrade Your Infrastructure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-12 leading-relaxed"
          >
            Join municipalities and businesses across North America trusting Quicktrap for their stormwater solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a
              href="/contact"
              className="group bg-brand-accent hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-brand-accent/25 flex items-center justify-center"
            >
              Get a Quote <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/product"
              className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-graphite px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center"
            >
              View Products
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeEnhanced;
