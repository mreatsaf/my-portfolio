function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950"
    >
      <div className="mx-auto flex w-full max-w-4xl items-center justify-center px-6 py-24 text-center">
        <div>
          <p className="mb-3 text-lg text-sky-400">
            Hello, I am
          </p>

          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            Eliazha Pasion
          </h1>

          <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-300">
            I am an aspiring web developer who creates
            modern, responsive, and user-friendly websites
            using React JS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;