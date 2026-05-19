import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCpu,
  FiCloud
} from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

const iconMap = {
  FiGithub,
  FiLinkedin,
  FiMail,
};

function ContactSection({ data }) {
  const candidate = data?.candidate || {};
  const contact = data?.contact || {
    email: "ayushrewatkar011@gmail.com",
    socials: candidate.socials || [
      { label: "GitHub", icon: "FiGithub", href: "https://github.com/AyushR-Tech" },
      { label: "LinkedIn", icon: "FiLinkedin", href: "https://www.linkedin.com/in/ayush-rewatkar-2026k/" },
      { label: "Email", icon: "FiMail", href: "mailto:ayushrewatkar011@gmail.com" }
    ]
  };

  const socials = (contact.socials || candidate.socials || []).map((item) => ({
    ...item,
    icon:
      typeof item.icon === "string"
        ? iconMap[item.icon] || FiMail
        : item.icon || FiMail,
  }));

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-spacing pt-10 relative overflow-hidden">
      <div className="container-shell relative">

        {/* 🔵 LEFT ICON CLUSTER */}
        <div className="hidden lg:block absolute left-0 top-0 h-full w-40 z-0 pointer-events-none">
          
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute top-24 left-6"
          >
            <FiCpu size={90} className="text-blue-400 opacity-40 drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute top-1/2 left-2"
          >
            <FiGithub size={70} className="text-blue-300 opacity-40" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
            className="absolute bottom-20 left-8"
          >
            <FiMail size={60} className="text-blue-500 opacity-35" />
          </motion.div>

        </div>

        {/* 🔵 RIGHT ICON CLUSTER */}
        <div className="hidden lg:block absolute right-0 top-0 h-full w-40 z-0 pointer-events-none">

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute top-32 right-6"
          >
            <FiCloud size={100} className="text-blue-400 opacity-40 drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute top-1/2 right-2"
          >
            <FiLinkedin size={70} className="text-blue-300 opacity-40" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
            className="absolute bottom-24 right-8"
          >
            <FiGithub size={60} className="text-blue-500 opacity-35" />
          </motion.div>

        </div>

        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something intelligent and useful"
          description="Whether it’s an internship, freelance collaboration, research opportunity, or product idea, the conversation can start here."
        />

        <div className="flex justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel rounded-[2rem] p-8 shadow-soft w-full max-w-xl"
          >
            <h3 className="font-display text-3xl font-bold text-white light:text-slate-950">
              Contact Channels
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 light:text-slate-700">
              Prefer a direct route? Use email or connect through professional social profiles.
            </p>

            <div className="mt-8 space-y-4">
              {socials.map((social) => {
                const Icon = social.icon || (() => null);
                const displayText = social.href.replace("mailto:", "");

                return (
                  <div
                    key={social.label}
                    className="flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-white light:text-slate-950">
                          {social.label}
                        </p>
                        <p className="text-sm text-slate-400 light:text-slate-600">
                          {displayText}
                        </p>
                      </div>
                    </div>

                    <span
                      onClick={() => navigator.clipboard.writeText(displayText)}
                      className="text-sm text-blue-200 light:text-blue-700 cursor-pointer hover:underline"
                    >
                      Copy
                    </span>
                  </div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;