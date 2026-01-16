import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import Container from "../../layout/Container";
import BeforeAfter from "./BeforeAfter";
import CaseStudyOutcome from "./CaseStudyOutcome";

export default function CaseStudiesSection() {
  const otherStudies = [
    {
      title: "Industrial Park Stormwater Retrofit",
      location: "Burnaby, BC",
      date: "August 2024",
      image: "/images/case_industrial.png" // Placeholder
    },
    {
      title: "Highway 1 Drainage Upgrade",
      location: "Surrey, BC",
      date: "June 2024",
      image: "/images/case_highway.png" // Placeholder
    },
    {
      title: "Downtown Urban Redevelopment",
      location: "Vancouver, BC",
      date: "March 2024",
      image: "/images/case_urban.png" // Placeholder
    }
  ];

  return (
    <section className="py-24 bg-concrete relative overflow-hidden">
      {/* Background Pattern */}
      <div className="blueprint-grid absolute inset-0 opacity-5" />

      <Container className="relative z-10">

        {/* Featured Case Study */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="bg-brand-accent text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
              Featured Project
            </span>
            <div className="h-px bg-steel/20 flex-1" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-graphite mb-6 leading-tight"
              >
                Municipal Drainage Improvement Project
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-steel text-lg mb-8 leading-relaxed"
              >
                Faced with recurring blockages and high maintenance costs, the City of Westview deployed Quicktrap units across 50 high-priority catch basins.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <CaseStudyOutcome
                  title="Key Outcomes"
                  points={[
                    "Reduced sediment entry into downstream systems by 85%",
                    "Eliminated emergency call-outs during heavy rainfall events",
                    "Lowered annual maintenance costs by 40%",
                    "Extended service life of municipal infrastructure"
                  ]}
                />
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <BeforeAfter
                before="/images/case_before.png"
                after="/images/case_after.png"
                caption="A severely obstructed catch basin was restored to optimal flow performance using the Quicktrap device."
              />
            </div>
          </div>
        </div>

        {/* Other Case Studies Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-graphite mb-10"
          >
            More Success Stories
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 cursor-pointer"
              >
                <div className="h-48 bg-concrete relative overflow-hidden">
                  <div className="absolute inset-0 bg-graphite/10 group-hover:bg-transparent transition-colors" />
                  {/* Placeholder Image Logic */}
                  <div className="absolute inset-0 flex items-center justify-center text-steel/20 font-bold text-4xl">
                    {index + 1}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-steel mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {study.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {study.date}
                    </span>
                  </div>
                  <h4 className="font-bold text-graphite text-lg mb-4 group-hover:text-brand-accent transition-colors">
                    {study.title}
                  </h4>
                  <div className="flex items-center text-brand-accent text-sm font-bold group/link">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
