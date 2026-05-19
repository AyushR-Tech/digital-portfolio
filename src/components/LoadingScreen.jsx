import { motion } from "framer-motion";
import { useEffect } from "react";

function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 1800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          className="h-24 w-24 rounded-3xl border border-blue-400/40 bg-blue-500/10 shadow-glow"
          animate={{ rotate: 360, scale: [1, 1.08, 1] }}
          transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
        />
        <div className="text-center">
          <p className="font-display text-2xl font-bold text-white">Ayush Rewatkar</p>
          <p className="mt-2 text-sm uppercase tracking-[0.45em] text-blue-200">
            Loading Portfolio
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
