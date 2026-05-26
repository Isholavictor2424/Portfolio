import React from "react";
import updatedPic from "../assets/updatedPic.png";

function Section1() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-16">
      <div className="absolute top-0 right-0 hidden md:block w-1/2 h-full bg-[#C1C1C1] transform -skew-x-12 origin-top-right z-0"></div>

      <div className="relative z-10 w-full md:w-1/2 text-white text-center md:text-left mt-10 md:mt-0">
        <p className="text-lg md:text-xl mb-4">Hi, I am</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Victor Ishola
        </h1>
        <p className="mt-4 text-gray-400 text-lg md:text-xl">
          Mobile / Web Frontend Developer
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#portfolio"
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-sky-500 hover:text-white transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="relative z-10 w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={updatedPic}
          alt="Victor"
          className="max-h-[95vh] object-contain"
        />
      </div>
    </section>
  );
}

export default Section1;