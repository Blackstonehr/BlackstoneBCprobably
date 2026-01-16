import Hero from "../components/sections/Hero/Hero";
import CaseStudiesSection from "../components/sections/CaseStudies/CaseStudiesSection";

export default function CaseStudies() {
  return (
    <>
      <Hero
        title="Case Studies"
        subtitle="Real-world results demonstrating improved stormwater performance and reduced maintenance costs."
        image="/images/hero_concrete.png"
      />

      <CaseStudiesSection />
    </>
  );
}
