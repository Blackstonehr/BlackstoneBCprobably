import { useState } from 'react';
import Hero from '../components/Hero';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', organization: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team for product information, technical support, or project inquiries"
      />

      {/* Contact Form Section */}
      <section className="py-section lg:py-sectionLg bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-brand mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Whether you're planning a new installation, need technical support, or have
                  questions about our products, our team is here to help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-brand-accent text-2xl">📧</div>
                    <div>
                      <h3 className="font-semibold text-brand mb-1">Email</h3>
                      <p className="text-gray-700">info@quicktrap.ca</p>
                      <p className="text-gray-700">support@quicktrap.ca</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-brand-accent text-2xl">📞</div>
                    <div>
                      <h3 className="font-semibold text-brand mb-1">Phone</h3>
                      <p className="text-gray-700">Main: (555) 123-4567</p>
                      <p className="text-gray-700">Support: (555) 123-4568</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-brand-accent text-2xl">📍</div>
                    <div>
                      <h3 className="font-semibold text-brand mb-1">Address</h3>
                      <p className="text-gray-700">
                        123 Industrial Way<br />
                        Suite 100<br />
                        Anytown, ST 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-brand-accent text-2xl">🕐</div>
                    <div>
                      <h3 className="font-semibold text-brand mb-1">Business Hours</h3>
                      <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-700">Saturday - Sunday: Closed</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Emergency support available 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-concrete rounded-card shadow-card p-8">
                  <h3 className="text-2xl font-bold text-brand mb-6">
                    Send Us a Message
                  </h3>

                  {submitted ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                      <p className="font-semibold">Thank you for your message!</p>
                      <p className="text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  ) : null}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-brand mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-brand mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-semibold text-brand mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                        placeholder="Your company or organization"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-brand mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-accent text-brand px-6 py-3 rounded-lg font-semibold text-lg hover:bg-brand-accent/90 transition-colors"
                    >
                      Send Message
                    </button>

                    <p className="text-xs text-gray-600 text-center">
                      * Required fields
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Support Options */}
      <section className="py-section lg:py-sectionLg bg-concrete">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand mb-8 text-center">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-card shadow-card p-inner text-center hover:shadow-cardHover transition">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-brand mb-2">
                  Documentation
                </h3>
                <p className="text-gray-600 mb-4">
                  Access technical specs, CAD drawings, and installation guides
                </p>
                <a
                  href="/data-certifications"
                  className="text-brand-accent hover:underline font-semibold"
                >
                  View Resources →
                </a>
              </div>

              <div className="bg-white rounded-card shadow-card p-inner text-center hover:shadow-cardHover transition">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold text-brand mb-2">
                  Technical Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Get help with installation, maintenance, or troubleshooting
                </p>
                <a
                  href="mailto:support@quicktrap.ca"
                  className="text-brand-accent hover:underline font-semibold"
                >
                  Contact Support →
                </a>
              </div>

              <div className="bg-white rounded-card shadow-card p-inner text-center hover:shadow-cardHover transition">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-brand mb-2">
                  Sales Inquiry
                </h3>
                <p className="text-gray-600 mb-4">
                  Request a quote or discuss your project requirements
                </p>
                <a
                  href="mailto:sales@quicktrap.ca"
                  className="text-brand-accent hover:underline font-semibold"
                >
                  Contact Sales →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
