import { motion } from "framer-motion";
import { Search, Droplets, ArrowDown, Crosshair, CheckCircle2, Eye } from "lucide-react";
import Container from "../../layout/Container";
import InstallStep from "./InstallStep";

const steps = [
  {
    title: "Inspect Catch Basin",
    desc: "Confirm catch basin dimensions and ensure compatibility with Quicktrap. Check for structural damage or obstructions.",
    icon: Search
  },
  {
    title: "Clean & Prepare",
    desc: "Remove in-basin debris, sediment, and standing water. Ensure the base surface is clear for proper fitting.",
    icon: Droplets
  },
  {
    title: "Lower Quicktrap Device",
    desc: "Carefully lower the Quicktrap insert into the basin using gloved hands or lifting hooks if required.",
    icon: ArrowDown
  },
  {
    title: "Align Mounting Points",
    desc: "Adjust the device to ensure proper seating and alignment with the basin's internal contours.",
    icon: Crosshair
  },
  {
    title: "Seat the Device",
    desc: "Apply gentle downward pressure to fully seat the insert. Confirm the baffle and internal flow paths are unobstructed.",
    icon: CheckCircle2
  },
  {
    title: "Verify Clearance",
    desc: "Check that the device sits flush and does not interfere with the grate or cover. Perform a final visual inspection.",
    icon: Eye
  },
];

export default function InstallationSection() {
  return (
    <section className="py-24 bg-concrete relative overflow-hidden">
      {/* Background Pattern */}
      <div className="blueprint-grid absolute inset-0 opacity-5" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Steps Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-graphite mb-6">
                Installation Procedure
              </h2>
              <p className="text-steel text-lg leading-relaxed">
                Quicktrap is designed for rapid deployment. Follow these steps to ensure optimal performance and longevity.
              </p>
            </motion.div>

            <div className="space-y-2">
              {steps.map((s, i) => (
                <InstallStep
                  key={i}
                  number={i + 1}
                  title={s.title}
                  desc={s.desc}
                  icon={s.icon}
                  isLast={i === steps.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Visual Column (Sticky) */}
          <div className="hidden lg:block sticky top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-card relative overflow-hidden min-h-[600px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-concrete to-white z-0" />
              <div className="blueprint-grid absolute inset-0 opacity-10 z-0" />

              <div className="relative z-10 text-center">
                <div className="w-64 h-64 mx-auto bg-concrete rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-inner">
                  <span className="text-steel/30 font-bold text-lg">Diagram Placeholder</span>
                </div>
                <h3 className="text-xl font-bold text-graphite mb-2">Visual Guide</h3>
                <p className="text-steel text-sm">Refer to the technical manual for detailed diagrams.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
