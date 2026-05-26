import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    tech: "React, Tailwind CSS",
    github: "#",
    live: "#",
    isLive: True,
  },
  {
    title: "Brain dump App",
    description:
      "A clean and responsive note-taking application designed to help users capture and organize their thoughts efficiently.",
    tech: "React, JavaScript, CSS",
    github: "https://github.com/Isholavictor2424/BrainDump",
    live: "http://brain-dump-sigma.vercel.app/",
    isLive: True,
  },
 {
  title: "Duvic-Drop Commerce App",
  description:
    "Collaborated on the development of the Duvic-Drop Commerce mobile application, contributing to the user interface design and mobile experience with a focus on usability, responsiveness, and clean visual structure.",
  tech: "React Native, JavaScript, CSS",
  github: "https://github.com/cephas-digital/Duvic-Drop-Mobile-App",
  live: "Coming Soon",
  isLive: false,

},
];

function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-900 min-h-screen py-16 px-6 text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold border-2 border-white inline-block px-6 py-2">
          Portfolio
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <p className="text-sky-400 mb-6">{project.tech}</p>

            <div className="flex gap-4">
              <a
                href={project.github}
                className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-gray-900 transition"
              >
                GitHub
              </a>
              { project.isLive ? (
              <a
                href={project.live}
                className="bg-sky-500 px-4 py-2 rounded-full hover:bg-sky-600 transition"
              >
                Live Demo
              </a>) : (
                <span className="bg-gray-600 px-4 py-2 rounded-full cursor-not-allowed opacity-50">
                  Live Demo
                </span>
              )
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;