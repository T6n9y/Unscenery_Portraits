import React from 'react';
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa'; // Import social media icons

function About() {
  return (
    <section className="pt-20 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Column with Text */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl font-semibold mb-4">Hi, It’s Me Tanay</h2>
          <p className="text-xl text-gray-800 leading-relaxed">
            I am passionate about creating modern, clean, and engaging digital experiences.
            With a background in photography and technology, I blend creativity with technical skills to deliver unique projects.
          </p>
        </div>

        {/* Right Column with Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/Tanay/tanay1.jpg"  // Replace with your image path
            alt="Tanay's Portrait"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="text-center mt-8">
        <p className="text-2xl font-semibold mb-4">Let’s Come Together!</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.instagram.com/un_scenery" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl text-black hover:text-blue-600" />
          </a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-3xl text-black hover:text-blue-600" />
          </a>
          <a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaPinterestP className="text-3xl text-black hover:text-red-600" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
