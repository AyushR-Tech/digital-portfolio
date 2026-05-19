import { motion } from "framer-motion";
import { FiArrowUpRight, FiEye, FiGithub } from "react-icons/fi";

function ProjectCard({ project, onSelect }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      className="glass-panel group flex h-full flex-col rounded-[2rem] p-6 shadow-soft"
    >
      <div className={`mb-6 h-48 overflow-hidden rounded-[1.5rem] ${project.previewClass}`}>
        <div className="flex h-full w-full items-end justify-between bg-gradient-to-t from-slate-950/60 to-transparent p-6">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/90">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="font-display text-2xl font-bold text-white light:text-slate-950">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-700">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-100 light:border-blue-300 light:bg-blue-50 light:text-blue-700"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-blue-400/50 hover:text-blue-200 light:border-slate-300 light:text-slate-900"
          >
            <FiGithub size={16} />
            GitHub
          </a>
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-200 light:border-slate-300 light:text-slate-900"
          >
            <FiEye size={16} />
            View Details
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
