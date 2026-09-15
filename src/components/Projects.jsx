const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website built using React JS and Tailwind CSS.",
    technologies: "React JS, Tailwind CSS",
  },
  {
    title: "Student Management System",
    description:
      "A system for managing student records and information.",
    technologies: "HTML, CSS, JavaScript",
  },
  {
    title: "Task Management App",
    description:
      "A simple application for creating and tracking tasks.",
    technologies: "React JS",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          My Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-700 bg-slate-800 p-6 transition hover:-translate-y-2 hover:border-sky-400"
            >
              <h3 className="mb-4 text-2xl font-bold text-sky-400">
                {project.title}
              </h3>

              <p className="mb-5 text-slate-300">
                {project.description}
              </p>

              <p className="text-sm text-slate-400">
                {project.technologies}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;