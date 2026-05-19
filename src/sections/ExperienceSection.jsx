import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

function ExperienceSection({ data }) {
  return (
    <section id="experience" className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Industry Experience"
          description="Hands-on experience in developing and deploying machine learning models for real-world applications."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {data.experience.map((item, index) => (
              <motion.div
                key={`${item.role}-${item.company}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className={`relative sm:w-1/2 ${
                  index % 2 === 0 ? "sm:pr-8" : "sm:ml-auto sm:pl-8"
                }`}
              >
                <span className="absolute left-1 top-8 h-6 w-6 rounded-full border-4 border-slate-950 bg-blue-500 shadow-glow sm:left-auto sm:right-[-0.8rem]" />

                <div className="glass-panel ml-10 rounded-[1.75rem] p-6 sm:ml-0">
                  <p className="text-sm uppercase tracking-[0.32em] text-blue-300">
                    {item.period}
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-bold text-white light:text-slate-950">
                    {item.role}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-slate-300 light:text-slate-700">
                    {item.company}
                  </p>

                  {/* ✅ FIX: use details instead of summary */}
                  <p className="mt-4 text-sm leading-7 text-slate-300 light:text-slate-700">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;