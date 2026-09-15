import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Contact Me</h2>

        <p className="mt-5 text-base text-slate-300 sm:text-lg">
          Have a project in mind or want to say hello? I’d love to hear from
          you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-4 text-left"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-4 text-white placeholder-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-4 text-white placeholder-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            required
            className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-4 py-4 text-white placeholder-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
          ></textarea>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-500 px-6 py-4 text-lg font-semibold text-white transition hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Submit
          </button>

          {submitted && (
            <p
              role="status"
              className="rounded-lg bg-green-100 px-4 py-3 text-center font-medium text-green-700"
            >
              Message submitted successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
