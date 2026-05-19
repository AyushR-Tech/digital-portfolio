import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowDownRight, FiMapPin } from "react-icons/fi";

const roles = [
  "AI/ML Engineer",
  "Computer Vision Enthusiast",
  "NLP Practitioner",
  "ML Systems Builder"
];

function HeroSection({ data }) {
  const ta = data?.candidate || {};

  const hero = {
    name: ta.name || "Ayush Rewatkar",
    role: ta.role || "AI/ML Engineer",
    tagline:
      ta.summary ||
      "Building end-to-end machine learning systems with a focus on computer vision, NLP, and deployment.",
    location: ta.location || "Nagpur, Maharashtra, India",
    ctas: [
      { label: "View Projects", href: "#projects", primary: true },
      { label: "Download Resume", href: "https://drive.google.com/file/d/1hR5dQ-qRGJZfVChCvtdFyzr3UN02lmqu/view?usp=sharing", primary: false }
    ]
  };

  const floatingCards = [
    { icon: FiMapPin, label: "AI/ML Systems" },
    { icon: FiArrowDownRight, label: "Model Deployment" },
    { icon: FiArrowDownRight, label: "Real-world Applications" }
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pb-14 pt-14 sm:pb-20">
      <div className="container-shell">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-100 light:border-blue-300 light:bg-blue-50 light:text-blue-700">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to AI/ML opportunities
            </div>

            <p className="text-sm uppercase tracking-[0.45em] text-slate-400 light:text-slate-600">
              {hero.role}
            </p>

            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl light:text-slate-950">
              {hero.name}
            </h1>

            <div className="mt-5 flex min-h-[3.5rem] items-center">
              <motion.p
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-semibold text-gradient sm:text-3xl"
              >
                {roles[roleIndex]}
              </motion.p>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg light:text-slate-700">
              {hero.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-300 light:text-slate-700">
              <span className="inline-flex items-center gap-2">
                <FiMapPin />
                {hero.location}
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {hero.ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                    cta.primary
                      ? "bg-blue-500 text-white shadow-glow hover:bg-blue-400"
                      : "border border-white/10 bg-white/5 text-slate-100 hover:border-cyan-400/50 hover:text-cyan-200 light:border-slate-300 light:bg-white/80 light:text-slate-900"
                  }`}
                >
                  {cta.label}
                  <FiArrowDownRight />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CONTENT - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute -left-12 top-8 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />

            <img
              src="/src/assets/profile.jpeg"
              alt="Profile Photo"
              className="relative h-80 w-80 rounded-[2rem] object-cover border-2 border-blue-400/20 shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;