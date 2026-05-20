import React from "react";

function About() {
  return (
    <section id="about" className="bg-[#C1C1C1] min-h-screen py-16 px-6">
      <div className="text-center py-5">
        <h1 className="text-4xl font-bold border-2 border-black inline-block px-6 py-2">
          About Me
        </h1>
      </div>

      <div className="max-w-4xl mx-auto py-10 text-gray-800 space-y-6">
        <p className="text-lg leading-8">
          I am Victor Ishola, a Computer Science student passionate about building
          modern digital products, especially mobile applications. I focus on
          creating intuitive user interfaces and seamless user experiences.
        </p>

        <p className="text-lg leading-8">
          I am currently learning Flutter while strengthening my skills in React,
          React Native, HTML, CSS, and JavaScript through hands-on projects. I
          lean toward mobile-first development because I believe mobile products
          create direct impact.
        </p>

        <p className="text-lg leading-8">
          I am refining my frontend engineering skills, building scalable
          applications, improving UI implementation, and preparing for
          professional opportunities where I can gain mentorship and real-world
          experience.
        </p>

        <p className="text-lg leading-8">
          Beyond coding, I am committed to growth, discipline, and building a
          long-term tech career that combines technical excellence with meaningful
          impact.
        </p>
      </div>
    </section>
  );
}

export default About;