import React from "react";
import images from "./images";

function Skill() {
  return (
    <section id="skills" className="bg-[#C1C1C1] min-h-screen py-16 px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold border-2 border-black inline-block px-6 py-2">
          Skills
        </h1>
      </div>

      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-8">Using now:</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white/40 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={image.src}
                alt={image.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <h3 className="text-center mt-3 font-medium">{image.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;