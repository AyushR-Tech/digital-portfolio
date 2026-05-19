import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7 }}
      className="mb-12 max-w-3xl"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.38em] text-blue-300">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl light:text-slate-950">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300 light:text-slate-700">{description}</p>
    </motion.div>
  );
}

export default SectionHeading;
