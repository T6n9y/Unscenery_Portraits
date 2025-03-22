import React from 'react';
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa'; // Importing social media icons

function Contact() {
  return (
    <section className="pt-20 py-20 bg-gray-100 text-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section - Contact Details in a Card */}
        <div className="w-full md:w-1/3 text-left">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
            <p className="text-xl text-gray-800 mb-4">Tanay Dalwadi</p>
            <p className="text-xl text-gray-800 mb-4">Phone: +1-437-450-6434</p>
            <p className="text-xl text-gray-800 mb-4">
              {/* Email with mailto: */}
              Email: <a href="mailto:unscenerypotraits@gmail.com" className="text-red-600">unscenerypotraits@gmail.com</a>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8">
            <p className="text-xl font-semibold mb-4">Follow Me</p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
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
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-2/3 max-w-lg mx-auto">
          <form className="bg-white p-6 rounded shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-3 py-2 mb-4 rounded-none border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 mb-4 rounded-none border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-3 py-2 mb-4 rounded-none border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
