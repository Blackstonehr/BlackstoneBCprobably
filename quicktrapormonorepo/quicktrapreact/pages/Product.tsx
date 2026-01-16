import ProductLayout from "../components/sections/Product/ProductLayout";
import ProductSidebar from "../components/sections/Product/ProductSidebar";
import ProductHero from "../components/sections/Product/ProductHero";
import ProductRender from "../components/sections/Product/ProductRender";
import ProductSpecs from "../components/sections/Product/ProductSpecs";
import ProductCerts from "../components/sections/Product/ProductCerts";

export default function Product() {
  return (
    <>
      <ProductHero
        title="Quicktrap Stormwater Device"
        subtitle="Engineered for high-flow performance and municipal-grade reliability."
        image="/images/hero_concrete.png"
      />

      <ProductLayout sidebar={<ProductSidebar />}>
        
        <section id="overview" className="mb-20">
          <h2 className="text-2xl font-bold text-graphite mb-4">Overview</h2>
          <p className="text-steel leading-relaxed text-sm max-w-2xl">
            Quicktrap is a high-performance stormwater management insert designed 
            to reduce sediment flow, prevent blockage, and increase the lifespan 
            of municipal drainage systems.
          </p>
        </section>

        <ProductRender />
        <ProductSpecs />
        <ProductCerts />

        <section id="install" className="mb-20">
          <h2 className="text-2xl font-bold text-graphite mb-4">Installation</h2>
          <p className="text-steel text-sm leading-relaxed max-w-xl">
            Installs directly into standard catch-basin structures with minimal 
            tooling. A full installation guide will be provided in Phase 4.
          </p>
        </section>
      </ProductLayout>
    </>
  );
}
