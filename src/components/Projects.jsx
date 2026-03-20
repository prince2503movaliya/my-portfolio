import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section section-alt p-6 sm:p-10 scroll-mt-24"
    >
      <h2 className="text-2xl sm:text-3xl text-center text-blue-400 mb-10">
        Projects
      </h2>

      {/* ✅ CENTERED + CONTROLLED WIDTH */}
      <div className="flex flex-col gap-8 items-center">
        {projects.map((project, index) => (
          <div className="w-full md:w-[75%] lg:w-[50%]" key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
