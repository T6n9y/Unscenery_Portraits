import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  // State to control the sidebar menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use useLocation hook to track the current route
  const location = useLocation();

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu whenever the location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 p-6 flex justify-between items-center text-white bg-transparent">
      {/* Business Name */}
      <div className="flex-grow text-center font-bold text-2xl">
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
        className={`absolute top-0 right-0 w-64 h-full bg-black bg-opacity-50 backdrop-blur-md text-white p-6 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="mb-6 text-right">
          <button onClick={toggleMenu} className="text-white text-3xl">
            X
          </button>
        </div>
        <ul className="space-y-6 text-2xl font-semibold">
          <li>
            <Link to="/" className="block hover:text-yellow-400" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block hover:text-yellow-400" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="block hover:text-yellow-400" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="block hover:text-yellow-400" onClick={toggleMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-yellow-400" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
