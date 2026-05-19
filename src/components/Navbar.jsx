import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar({ links, activeSection, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-4 z-50 px-4"
    >
      <nav className="container-shell">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 shadow-soft">
          <a href="#home" className="font-display text-lg font-bold tracking-wide text-white light:text-slate-950">
            AR
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeSection === link.id
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                    : "text-slate-300 hover:bg-white/10 hover:text-white light:text-slate-700 light:hover:bg-slate-200"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
              aria-label="Open navigation"
            >
              <FiMenu size={18} />
            </button>
          </div>
        </div>

        {open ? (
          <div className="glass-panel mt-3 rounded-3xl p-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    activeSection === link.id
                      ? "bg-blue-500 text-white"
                      : "text-slate-300 hover:bg-white/10 hover:text-white light:text-slate-700 light:hover:bg-slate-200"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </nav>
    </motion.header>
  );
}

export default Navbar;
