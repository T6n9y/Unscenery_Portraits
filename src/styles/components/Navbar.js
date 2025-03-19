import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-xl">
          <Link to="/">Your Name</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link to="/portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</Link>
          <Link to="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
