import Hero from "../components/sections/Hero/Hero";
import InstallationSection from "../components/sections/Installation/InstallationSection";

export default function Installation() {
  return (
    <>
      <Hero
        title="Installation Guide"
        subtitle="A detailed step-by-step process designed for fast, reliable deployment in municipal environments."
        image="/images/hero_grate.png"
      />

      <InstallationSection />
    </>
  );
}
