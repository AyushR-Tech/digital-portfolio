import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

function ProjectsSection({ data, onProjectSelect }) {
  return (
    <section id="projects" className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Machine Learning and Deep Learning Projects"
          description="Projects focused on computer vision, NLP, and predictive modeling, covering data preprocessing, model development, and deployment."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {data.projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onSelect={onProjectSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;