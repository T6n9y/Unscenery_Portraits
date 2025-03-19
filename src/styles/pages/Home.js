import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="pt-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-2xl mb-8">I’m [Your Name], a creative professional blending tech with art.</p>
        <Link to="/portfolio" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
          See My Work
        </Link>
      </div>
    </section>
  );
}

export default Home;
