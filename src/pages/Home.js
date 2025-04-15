import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/images/photo9.jpg')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for contrast */}

      {/* Left-side navigation, positioned at bottom-left */}
      <div className="absolute bottom-0 left-0 p-6 text-white z-20">
        <ul className="space-y-6 text-6xl font-bold"> {/* Larger font size */}
          <li className="transform hover:scale-110 transition-all duration-300">
            <Link to="/" className="block hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li className="transform hover:scale-110 transition-all duration-300">
            <Link to="/about" className="block hover:text-yellow-400">
              About
            </Link>
          </li>
          <li className="transform hover:scale-110 transition-all duration-300">
            <Link to="/services" className="block hover:text-yellow-400">
              Services
            </Link>
          </li>
          <li className="transform hover:scale-110 transition-all duration-300">
            <Link to="/portfolio" className="block hover:text-yellow-400">
              Portfolio
            </Link>
          </li>
          <li className="transform hover:scale-110 transition-all duration-300">
            <Link to="/contact" className="block hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
