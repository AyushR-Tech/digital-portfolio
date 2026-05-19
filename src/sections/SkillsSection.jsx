import { motion } from "framer-motion";
import { FiCpu, FiServer, FiCloud, FiCode } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

const iconMap = {
  FiCpu,
  FiServer,
  FiCloud,
  FiCode
};

function SkillsSection({ data }) {
  return (
    <section id="skills" className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills and Tools"
          description="Core programming, machine learning, deep learning, backend development, and cloud technologies."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {(data.skillGroups || []).map((group, index) => {
            const Icon = iconMap[group.icon] || FiCode;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass-panel rounded-[1.8rem] p-6 shadow-soft"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold text-white light:text-slate-950">
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 light:border-slate-300 light:bg-white light:text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;