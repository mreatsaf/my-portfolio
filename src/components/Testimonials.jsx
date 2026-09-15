function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-10 text-center text-4xl font-bold text-white">
          Testimonials and Education
        </h2>

        <div className="mx-auto max-w-3xl rounded-xl border border-slate-700 bg-slate-800 p-8">
          <p className="mb-6 text-center italic text-slate-300">
            “A dedicated student who shows creativity,
            willingness to learn, and interest in modern
            web development.”
          </p>

          <div className="text-center">
            <h3 className="text-xl font-bold text-sky-400">
              Bulacan State University
            </h3>

            <p className="text-slate-400">
              Bachelor of Science in Information Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;