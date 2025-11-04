import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_0umtlsa";
    const templateID = "template_oe97mcj";
    const publicKey = "4ADdZk1z6mWphuyaC";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (err) => {
        console.log("FAILED...", err);
        setStatus("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Contact
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 text-center mb-8 lg:mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss!
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl">
            <form
            onSubmit={handleSubmit}  
            className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white mb-3 text-lg"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white mb-3 text-lg"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white mb-3 text-lg"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition duration-300 resize-vertical"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 font-bold text-white px-6 py-4 rounded-lg transition duration-300 transform hover:scale-105 text-lg"
              >
                Send Message
              </button>

              {status && (
                <p className="mt-4 text-center text-sm text-gray-600">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
