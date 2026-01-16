import ProductHero from '../components/sections/Product/ProductHero';
import ProductLayout from '../components/sections/Product/ProductLayout';
import ProductSidebar from '../components/sections/Product/ProductSidebar';
import ProductRender from '../components/sections/Product/ProductRender';
import ProductSpecs from '../components/sections/Product/ProductSpecs';
import ProductCerts from '../components/sections/Product/ProductCerts';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

const Product = () => {
  return (
    <div>
      <SEO
        title="Quicktrap Series 1 - Product Details"
        description="Explore the technical specifications and features of the Quicktrap Series 1 catch basin filter."
        canonical="https://quicktrap.ca/product"
      />

      <ProductHero
        title="Quicktrap Series 1"
        subtitle="Premium catch basin filter engineered for maximum performance and reliability"
        image="/images/hero_grate.png"
      />

      <ProductLayout
        sidebar={
          <ProductSidebar />
        }
      >
        <section id="overview" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-brand mb-6">Product Overview</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The Quicktrap Series 1 is our flagship catch basin filter, designed for maximum debris retention
            without compromising flow rates. Engineered for municipal and commercial applications, it features
            a durable stainless steel construction and a patented bypass system.
          </p>
          <ProductRender />
        </section>

        <ProductSpecs />

        <ProductCerts />

        <section id="installation" className="scroll-mt-24 mb-12">
          <h2 className="text-3xl font-bold text-brand mb-6">Installation</h2>
          <p className="text-lg text-gray-700 mb-6">
            Quicktrap is designed for rapid deployment. Most units can be installed in under 15 minutes
            without the need for heavy machinery or specialized tools.
          </p>
          <div className="bg-concrete p-6 rounded-lg border border-gray-200">
            <p className="font-semibold text-brand mb-2">Installation Guide Available</p>
            <a href="/installation" className="text-brand-accent hover:underline">
              View full installation instructions →
            </a>
          </div>
        </section>
      </ProductLayout>

      <CTASection
        title="Ready to Order?"
        description="Contact our sales team for pricing and bulk order discounts."
        primaryButtonText="Get a Quote"
        primaryButtonLink="/contact"
      />
    </div>
  );
};

export default Product;
