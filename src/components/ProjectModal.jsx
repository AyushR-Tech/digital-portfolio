import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/75 px-4 py-8 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="glass-panel max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] p-6 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-blue-300">{project.category}</p>
                <h3 className="mt-3 font-display text-3xl font-bold text-white light:text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 light:text-slate-700">
                  {project.longDescription}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                aria-label="Close project modal"
              >
                <FiX size={18} />
              </button>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <div className={`h-72 rounded-[1.75rem] ${project.previewClass}`} />
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.previewFrames.map((frame) => (
                    <div key={frame.title} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 light:bg-white/70">
                      <p className="text-sm font-semibold text-white light:text-slate-950">{frame.title}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300 light:text-slate-700">
                        {frame.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <h4 className="font-display text-xl font-semibold text-white light:text-slate-950">
                    Core Features
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-sm leading-7 text-slate-300 light:text-slate-700">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <h4 className="font-display text-xl font-semibold text-white light:text-slate-950">
                    Tech Stack
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-100 light:border-blue-300 light:bg-blue-50 light:text-blue-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-blue-400/50 hover:text-blue-200 light:border-slate-300 light:text-slate-900"
                  >
                    <FiGithub size={16} />
                    View Source
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default ProjectModal;
