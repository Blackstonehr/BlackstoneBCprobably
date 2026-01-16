import Hero from "../components/sections/Hero/Hero";
import FeaturesSection from "../components/sections/Features/FeaturesSection";

export default function Home() {
  return (
    <>
      <Hero
        title="Keep Storm Lines Open"
        subtitle="Advanced stormwater management solutions engineered to protect your infrastructure."
        ctaText="Learn More"
        image="/images/hero_aerial.png"
      />

      <FeaturesSection />
    </>
  );
}
