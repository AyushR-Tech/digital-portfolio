import { motion } from "framer-motion";
import { FiAward, FiShield, FiBookOpen } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

const certIconMap = {
  FiAward,
  FiShield,
  FiBookOpen
};

function CertificationsSection({ data }) {
  return (
    <section id="certifications" className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning, applied with intent"
          description="Certifications here are positioned as proof of structured learning across AI, computer vision, and cloud deployment workflows."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {(data.certifications || []).map((item, index) => {
            const Icon = certIconMap[item.icon] || FiAward;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, rotate: -1 }}
                className="glass-panel rounded-[1.8rem] p-6 shadow-soft"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white light:text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-blue-200 light:text-blue-700">{item.issuer}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300 light:text-slate-700">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;
