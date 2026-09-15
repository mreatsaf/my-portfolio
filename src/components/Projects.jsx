const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website built using React JS and Tailwind CSS.",
    technologies: "React JS, Tailwind CSS",
    link: "#",
  },
  {
    title: "Brgy. Guinhawa Portal",
    description:
      "A barangay information and service portal built to support local operations and public access.",
    technologies: "HTML, CSS, JavaScript, PHP",
    link: "https://brgyguinhawasystem.infinityfreeapp.com/",
  },
  {
    title: "ShelfSnap",
    description:
      "A Library Management System where users can borrow, return, and track books efficiently.",
    technologies: "React JS, Tailwind CSS, JavaScript",
    link: "#",
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

              <p className="mb-5 text-sm text-slate-400">
                {project.technologies}
              </p>

              <a
                href={project.link && project.link !== "#" ? project.link : "#"}
                target={project.link && project.link !== "#" ? "_blank" : undefined}
                rel={project.link && project.link !== "#" ? "noreferrer" : undefined}
                className="inline-block rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600"
              >
                View Project
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
