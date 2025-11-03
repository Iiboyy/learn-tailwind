import { useState } from "react";
import "./App.css";
import Logo from "./assets/img/Logo.png";
import Home from "./assets/img/Home.png";
import AboutImage from "./assets/img/About.png"; 

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-900 shadow-md border-b border-red-700">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <a href="#home" className="ml-6">
            <img src={Logo} alt="Logo" width={155} />
          </a>

          <div className="hidden md:flex flex-1 justify-center items-center space-x-4">
            <nav className="flex space-x-4">
              <a
                href="#home"
                className="text-lg font-semibold text-white hover:text-red-600"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-lg font-semibold text-white hover:text-red-600"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-lg font-semibold text-white hover:text-red-600"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="hidden md:flex items-center mr-6">
            <button className="bg-red-600 hover:bg-red-700 font-bold text-white px-4 py-2 rounded-md transition duration-300">
              Contact Us
            </button>
          </div>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden px-4 pb-4 space-y-2">
            <a
              href="#home"
              className="block text-lg font-semibold text-center text-white hover:text-red-600"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-lg font-semibold text-center text-white hover:text-red-600"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-lg font-semibold text-center text-white hover:text-red-600"
            >
              Contact
            </a>
            <button className="w-full bg-red-600 hover:bg-red-700 font-bold text-white px-4 py-2 rounded-md transition duration-300 mt-2">
              Contact Us
            </button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gray-900">
        <div className="container px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pl-9">
            <div>
              <p className="text-2xl font-light text-white mb-4">Hey, I'm a</p>
              <h1 className="text-6xl lg:text-8xl font-extrabold text-red-600 mb-4">
                3D Artist.
              </h1>
              <p className="text-2xl text-white mb-8">
                Need 3D assets for your project?
              </p>
              <a
                href="#contact"
                className="inline-block bg-red-600 hover:bg-red-700 font-bold text-white px-8 py-4 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Let's get in touch!
              </a>
            </div>

            <div className="flex justify-center lg:justify-end pr-9">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-linear-to-r from-red-600 to-orange-600 rounded-2xl opacity-20 blur"></div>
                <div className="relative">
                  <img
                    src={Home}
                    alt="3D Portfolio"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*About Section*/}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-linear-to-r from-red-600 to-orange-600 rounded-2xl opacity-20 blur"></div>
                <div className="relative">
                  <img
                    src={AboutImage}
                    alt="About Me"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="text-white pr-9">
              <h2 className="text-center text-4xl md:text-5xl font-bold text-red-600 mb-6">
                About
              </h2>
              <p className="text-lg text-justify mb-6">
                Volhouden Production is a 3D design studio focused on precision
                and detail in architectural and automotive visualization. We are
                your partner in creating stunning vehicle exteriors, ergonomic
                interiors, and realistic building renderings. We transform your
                blueprints into an unparalleled 3D reality.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-red-500 mb-4">
                  What I Do:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">✓</span>
                    3D Modeling
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">✓</span>
                    Texturing & Materials
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">✓</span>
                    Lighting & Rendering
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Contact Section*/}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Contact
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Have a project in mind? Let's discuss!
          </p>

          <div className="grid grid-cols-1">
            <div className="bg-gray-800 p-8 rounded-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-red-600 hover:bg-red-700 font-bold text-white px-6 py-4 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 ml-6 mb-8">
            <div className="md:col-span-2">
              <img src={Logo} alt="Logo" width={155} className="mb-4" />
              <p className="text-gray-400 text-sm max-w-md">
                Creating 3D assets with Blender.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-red-600 transition duration-300 block py-1"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-red-600 transition duration-300 block py-1"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-red-600 transition duration-300 block py-1"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <p className="text-gray-400 hover:text-red-600 transition duration-300 block py-1">
                    3D Modeling
                  </p>
                </li>
                <li>
                  <p className="text-gray-400 hover:text-red-600 transition duration-300 block py-1">
                    Texturing
                  </p>
                </li>
                <li>
                  <p className="text-gray-400 hover:text-red-600 transition duration-300 block py-1">
                    Rendering
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Iqblpra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
