import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Logo from "./assets/img/Logo.png";
import HomeImg from "./assets/img/Home.png";
import AboutImage from "./assets/img/About.png";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="overflow-x-hidden">
        <header className="bg-gray-900 shadow-md border-b border-red-700 sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <a href="/" className="shrink-0">
              <img src={Logo} alt="Logo" className="w-32 sm:w-36 md:w-40" />
            </a>

            <div className="hidden md:flex flex-1 justify-center items-center">
              <nav className="flex space-x-6 lg:space-x-8">
                <a
                  href="/"
                  className="text-base lg:text-lg font-semibold text-white hover:text-red-600 transition duration-300"
                >
                  Home
                </a>
                <a
                  href="/#about"
                  className="text-base lg:text-lg font-semibold text-white hover:text-red-600 transition duration-300"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="text-base lg:text-lg font-semibold text-white hover:text-red-600 transition duration-300"
                >
                  Contact
                </a>
              </nav>
            </div>

            <div className="hidden md:flex items-center">
              <a
                href="/contact"
                className="bg-red-600 hover:bg-red-700 font-bold text-white px-5 py-2.5 rounded-md transition duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>

            <button
              className="md:hidden text-white text-2xl focus:outline-none p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>

          {isOpen && (
            <nav className="md:hidden px-6 pb-4 space-y-3 bg-gray-900 border-t border-gray-700">
              <a
                href="/"
                className="block text-lg font-semibold text-white hover:text-red-600 py-2 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="/#about"
                className="block text-lg font-semibold text-white hover:text-red-600 py-2 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="block text-lg font-semibold text-white hover:text-red-600 py-2 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <a
                href="/contact"
                className="block w-full bg-red-600 hover:bg-red-700 font-bold text-white px-4 py-3 rounded-md transition duration-300 mt-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </nav>
          )}
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="bg-gray-900">
                  <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      <div className="text-center lg:text-left px-4 sm:px-0">
                        <p className="text-xl sm:text-2xl font-light text-white mb-4">
                          Hey, I'm a
                        </p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-red-600 mb-4 lg:mb-6 leading-tight">
                          3D Artist.
                        </h1>
                        <p className="text-xl sm:text-2xl text-white mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0">
                          Need 3D assets for your project?
                        </p>
                        <a
                          href="/contact"
                          className="inline-block bg-red-600 hover:bg-red-700 font-bold text-white px-8 py-4 rounded-lg transition duration-300 transform hover:scale-105 text-lg"
                        >
                          Let's get in touch!
                        </a>
                      </div>

                      <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                          <div className="absolute -inset-3 sm:-inset-4 bg-linear-to-r from-red-600 to-orange-600 rounded-2xl opacity-20 blur"></div>
                          <div className="relative">
                            <img
                              src={HomeImg}
                              alt="3D Portfolio"
                              className="w-full h-auto rounded-lg shadow-2xl"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  id="about"
                  className="py-16 md:py-20 lg:py-24 bg-gray-800"
                >
                  <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                      <div className="flex justify-center order-2 lg:order-1">
                        <div className="relative w-full max-w-sm sm:max-w-md">
                          <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl opacity-20 blur"></div>
                          <div className="relative">
                            <img
                              src={AboutImage}
                              alt="About Me"
                              className="w-full h-auto rounded-lg shadow-2xl"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="text-white order-1 lg:order-2 px-4 sm:px-0">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-6 text-center lg:text-left">
                          About
                        </h2>
                        <p className="text-base sm:text-lg text-justify lg:text-left mb-6 leading-relaxed">
                          Volhouden Production is a 3D design studio focused on
                          precision and detail in architectural and automotive
                          visualization. We are your partner in creating
                          stunning vehicle exteriors, ergonomic interiors, and
                          realistic building renderings. We transform your
                          blueprints into an unparalleled 3D reality.
                        </p>

                        <div className="mb-8">
                          <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-4 text-center lg:text-left">
                            What I Do:
                          </h3>
                          <ul className="space-y-3">
                            <li className="flex items-center justify-center lg:justify-start">
                              <span className="text-red-500 mr-3 text-lg">
                                ✓
                              </span>
                              <span className="text-base sm:text-lg">
                                3D Modeling
                              </span>
                            </li>
                            <li className="flex items-center justify-center lg:justify-start">
                              <span className="text-red-500 mr-3 text-lg">
                                ✓
                              </span>
                              <span className="text-base sm:text-lg">
                                Texturing & Materials
                              </span>
                            </li>
                            <li className="flex items-center justify-center lg:justify-start">
                              <span className="text-red-500 mr-3 text-lg">
                                ✓
                              </span>
                              <span className="text-base sm:text-lg">
                                Lighting & Rendering
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            }
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="bg-gray-900 border-t border-gray-700 py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-8">
              <div className="md:col-span-2 text-center md:text-left">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-32 sm:w-36 mb-4 mx-auto md:mx-0"
                />
                <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto md:mx-0">
                  Creating 3D assets with Blender.
                </p>
              </div>

              <div className="text-center md:text-left">
                <h4 className="text-white font-bold text-lg mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-400 hover:text-red-600 transition duration-300 block py-1"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#about"
                      className="text-gray-400 hover:text-red-600 transition duration-300 block py-1"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-400 hover:text-red-600 transition duration-300 block py-1"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h4 className="text-white font-bold text-lg mb-4">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <span className="text-gray-400 hover:text-red-600 transition duration-300 block py-1 cursor-default">
                      3D Modeling
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-400 hover:text-red-600 transition duration-300 block py-1 cursor-default">
                      Texturing
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-400 hover:text-red-600 transition duration-300 block py-1 cursor-default">
                      Rendering
                    </span>
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
    </Router>
  );
}

export default App;
