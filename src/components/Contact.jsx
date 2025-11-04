import React from "react";

const Contact = () => {
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
            <form className="space-y-6">
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
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-white mb-3 text-lg"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition duration-300"
                  placeholder="Project discussion"
                />
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
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition duration-300 resize-vertical"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-red-600 hover:bg-red-700 font-bold text-white px-6 py-4 rounded-lg transition duration-300 transform hover:scale-105 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
