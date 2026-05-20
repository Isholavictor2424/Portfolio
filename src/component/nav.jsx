import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-900 px-6 md:px-10 py-5 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-white text-2xl font-bold tracking-wide">
        Decodius
      </h1>

      <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
        <li>
          <a href="#about" className="hover:text-sky-400 transition duration-300">
            About me
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-sky-400 transition duration-300">
            Skills
          </a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-sky-400 transition duration-300">
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-sky-500 hover:text-white transition duration-300"
          >
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;