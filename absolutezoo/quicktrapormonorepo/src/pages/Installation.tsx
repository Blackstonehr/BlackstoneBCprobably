import Hero from '../components/sections/Hero/Hero';
import InstallationSection from '../components/sections/Installation/InstallationSection';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

const Installation = () => {
  return (
    <div>
      <SEO
        title="Installation Guide"
        description="Step-by-step installation instructions for Quicktrap catch basin filters. Fast, easy deployment in under 15 minutes."
        canonical="https://quicktrap.ca/installation"
      />

      <Hero
        title="Installation Guide"
        subtitle="Quicktrap is designed for rapid deployment with no heavy machinery required"
        image="/images/hero_concrete.png"
      />

      <InstallationSection />

      <CTASection
        title="Need Technical Support?"
        description="Our engineering team is available to assist with installation questions."
        primaryButtonText="Contact Support"
        primaryButtonLink="/contact"
      />
    </div>
  );
};

export default Installation;
