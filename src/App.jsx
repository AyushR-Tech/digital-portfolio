import { lazy, Suspense, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import ProjectModal from "./components/ProjectModal";
import ScrollProgress from "./components/ScrollProgress";
import SectionLoader from "./components/SectionLoader";
import { portfolioData, sectionIds } from "./data/portfolio";
import useActiveSection from "./hooks/useActiveSection";
import useTheme from "./hooks/useTheme";

const HeroSection = lazy(() => import("./sections/HeroSection"));
const AboutSection = lazy(() => import("./sections/AboutSection"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection"));
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"));
const SkillsSection = lazy(() => import("./sections/SkillsSection"));
const CertificationsSection = lazy(() => import("./sections/CertificationsSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));

const sectionComponents = [
  HeroSection,
  AboutSection,
  ProjectsSection,
  ExperienceSection,
  SkillsSection,
  CertificationsSection,
  ContactSection,
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);

  const sections = useMemo(
    () =>
      sectionComponents.map((Component, index) => (
        <Suspense key={sectionIds[index]} fallback={<SectionLoader />}>
          <Component data={portfolioData} onProjectSelect={setSelectedProject} />
        </Suspense>
      )),
    [setSelectedProject],
  );

  return (
    <div className={theme}>
      <AnimatePresence mode="wait">
        {isLoading ? <LoadingScreen key="loader" onFinish={() => setIsLoading(false)} /> : null}
      </AnimatePresence>

      <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-500 light:bg-slate-50 light:text-slate-950">
        <div
          className={`fixed inset-0 -z-20 ${theme === "dark"
              ? "bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),transparent_28%),linear-gradient(180deg,#020617_0%,#020617_35%,#0f172a_100%)]"
              : "bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_24%),linear-gradient(180deg,#eff6ff_0%,#f8fafc_35%,#e2e8f0_100%)]"
            }`}
        />
        <ScrollProgress />
        <Navbar
          links={portfolioData.navigation}
          activeSection={activeSection}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <main className="overflow-x-hidden">
          {sections}
          <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-400 light:border-slate-200">
            © {new Date().getFullYear()} Ayush Rewatkar. All rights reserved.
          </footer>
        </main>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </div>
  );
}

export default App;
