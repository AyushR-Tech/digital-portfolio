import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

function AboutSection({ data }) {
  const about = data?.about || {
    summary:
      "Final-year Computer Engineering student specializing in Artificial Intelligence and Machine Learning with experience in computer vision, NLP, and deep learning. Worked on building machine learning pipelines including data preprocessing, model training, evaluation, and deployment using Flask.",
    highlights: [
      "Built end-to-end ML pipelines from preprocessing to deployment",
      "Hands-on experience with CNNs, GANs, VAEs, and Transformers",
      "Developed real-world defect detection system during internship",
      "Experience with Flask APIs and MySQL for model deployment"
    ],
    skillMetrics: [
      { label: "Machine Learning", value: 85 },
      { label: "Deep Learning", value: 83 },
      { label: "Deployment", value: 80 }
    ]
  };

  return (
    <section id="about" className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About"
          title="Applied AI/ML with focus on real-world systems"
          description="Focused on building practical machine learning solutions with strong fundamentals in deep learning, backend integration, and deployment."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel rounded-[2rem] p-8 shadow-soft"
          >
            <p className="text-base leading-8 text-slate-300 light:text-slate-700">
              {about.summary}
            </p>

            {about.education?.length ? (
              <div className="mt-8 rounded-[2rem] border border-white/10 bg-slate-950/30 p-6 shadow-soft light:border-slate-200/70 light:bg-slate-100/80">
                <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
                  Education
                </p>
                <div className="mt-5 space-y-5">
                  {about.education.map((item) => (
                    <div key={item.institution}>
                      <p className="text-sm text-blue-200">{item.period}</p>
                      <h3 className="mt-2 text-lg font-semibold text-white light:text-slate-950">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-slate-300 light:text-slate-700">
                        {item.institution}
                      </p>
                      {item.details ? (
                        <p className="mt-2 text-sm text-slate-300 light:text-slate-700">
                          {item.details}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel rounded-[2rem] p-8 shadow-soft"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
                  Skills Overview
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-white light:text-slate-950">
                  Core competencies
                </h3>
              </div>
            </div>

            <div className="space-y-5">
              {about.skillMetrics.map((metric, index) => (
                <div key={metric.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-200 light:text-slate-800">
                      {metric.label}
                    </span>
                    <span className="text-blue-200 light:text-blue-700">
                      {metric.value}%
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-800/80 light:bg-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;