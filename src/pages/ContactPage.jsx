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

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 px-6 py-16 text-white sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl bg-slate-800 p-6 shadow-lg sm:p-8"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-medium text-white"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full rounded-md border border-slate-600 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-white"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full rounded-md border border-slate-600 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-white"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="5"
              required
              className="w-full resize-none rounded-md border border-slate-600 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-600"
          >
            Submit
          </button>

          {submitted && (
            <p
              role="status"
              className="rounded-md bg-green-100 p-3 text-center font-medium text-green-700"
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