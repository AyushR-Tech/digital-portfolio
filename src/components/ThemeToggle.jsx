import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.94 }}
      whileHover={{ y: -1 }}
      onClick={onToggle}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 backdrop-blur-xl transition hover:border-blue-400/50 hover:text-blue-200 light:border-slate-300 light:bg-white/80 light:text-slate-900"
      aria-label="Toggle color theme"
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </motion.button>
  );
}

export default ThemeToggle;
