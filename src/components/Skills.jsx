const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React JS",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "Responsive Web Design",
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-10 text-center text-4xl font-bold text-white">
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-sky-400 px-5 py-3 text-sky-300 transition hover:bg-sky-400 hover:text-slate-900"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;