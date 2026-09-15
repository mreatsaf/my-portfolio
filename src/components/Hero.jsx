function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950"
    >
      <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr]">
        <div className="text-left">
          <p className="mb-4 text-lg font-medium tracking-[0.2em] text-sky-400 uppercase">
            Hello, I am
          </p>

          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            Eliazha Pasion
          </h1>

          <div className="mb-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-sky-400/50 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300">
              Web Developer
            </span>
            <span className="rounded-full border border-slate-600 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-200">
              UI Designer
            </span>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-slate-300">
            I am an aspiring web developer who creates modern, responsive,
            and user-friendly websites using React JS and modern design
            principles.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-sm rounded-[2rem] border border-slate-700 bg-slate-800/60 p-4 shadow-2xl shadow-sky-900/20 backdrop-blur-sm">
            <img
              src="/src/1x1 pic.jpg"
              alt="Eliazha Pasion"
              className="aspect-square w-full rounded-[1.5rem] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
