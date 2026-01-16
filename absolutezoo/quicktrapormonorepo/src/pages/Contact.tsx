import Hero from '../components/sections/Hero/Hero';
import Container from '../components/layout/Container';
import ContactInfo from '../components/sections/Contact/ContactInfo';
import ContactForm from '../components/sections/Contact/ContactForm';
import AdditionalResources from '../components/sections/Contact/AdditionalResources';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <div>
      <SEO
        title="Contact Us"
        description="Get in touch with Quicktrap for product inquiries, technical support, or to request a quote."
        canonical="https://quicktrap.ca/contact"
      />

      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team for product information, technical support, or project inquiries"
        image="/images/hero_pipe.png"
      />

      {/* Contact Form Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0 opacity-5 pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <ContactInfo />

            {/* Contact Form */}
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Additional Support Options */}
      <AdditionalResources />
    </div>
  );
};

export default Contact;
