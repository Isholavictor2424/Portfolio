import React, { useState } from "react";
import axios from "axios";
import { response } from "express";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function Handlechange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message");
      console.log(error);
    }
  };

  return (
    <section id="contact" className="bg-[#C1C1C1] min-h-screen py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold border-2 border-black inline-block px-6 py-2">
          Contact
        </h1>
      </div>

      <div className="max-w-2xl mx-auto">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="p-4 border-2 border-black outline-none bg-transparent"
            value={formData.name}
            onChange={Handlechange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="p-4 border-2 border-black outline-none bg-transparent"
            value={formData.email}
            onChange={Handlechange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            className="p-4 border-2 border-black outline-none bg-transparent resize-none"
            value={formData.message}
            onChange={Handlechange}
            required
          ></textarea>

          <button
            type="submit"
            className="border-2 border-black py-3 px-6 font-semibold hover:bg-black hover:text-white transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center space-y-2">
          <p>Email: yourmail@example.com</p>
          <p>GitHub: github.com/yourusername</p>
          <p>LinkedIn: linkedin.com/in/yourusername</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;