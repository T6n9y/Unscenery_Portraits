import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // State to control the sidebar menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 p-6 flex justify-between items-center text-white bg-transparent">
      {/* Business Name */}
      <div className="font-bold text-4xl">
        <Link to="/" className="text-white">
          Unscenery Portraits
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <button
        onClick={toggleMenu}
        className="text-white text-3xl focus:outline-none"
      >
        <span className="block w-6 h-1 bg-white mb-2"></span>
        <span className="block w-6 h-1 bg-white mb-2"></span>
        <span className="block w-6 h-1 bg-white"></span>
      </button>

      {/* Sidebar Menu */}
      <div
        className={`absolute top-0 right-0 w-64 h-full bg-black text-white p-6 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="mb-6 text-right">
          <button onClick={toggleMenu} className="text-white text-3xl">
            X
          </button>
        </div>
        <ul className="space-y-6 text-2xl font-semibold">
          <li>
            <Link to="/" className="block hover:text-yellow-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="block hover:text-yellow-400">About</Link>
          </li>
          <li>
            <Link to="/services" className="block hover:text-yellow-400">Services</Link>
          </li>
          <li>
            <Link to="/portfolio" className="block hover:text-yellow-400">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-yellow-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
