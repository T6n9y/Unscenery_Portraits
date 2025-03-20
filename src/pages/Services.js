import React from 'react';

function Services() {
  return (
    <section className="pt-20 py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p className="text-gray-600 mb-8">What I can do for you.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Event Photograph</h3>
            <p className="text-gray-600">Professional photography services for events, portraits, and more.</p>
            <ul className="list-disc list-inside text-left text-gray-600">
          <li>Weddings & Receptions</li>
          <li>Corporate Events</li>
          <li>Birthday & Anniversary Parties</li>
          <li>Concerts & Performances</li>
        </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Portrait Photography</h3>
            <p className="text-gray-600">Modern, responsive website design and development to showcase your brand.</p>
            <ul className="list-disc list-inside text-left text-gray-600">
          <li>Indivdual Portraits</li>
          <li>Family Portraits</li>
          <li>Couple Portraits</li>
        </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Lifestyle & Creative Shoots </h3>
            <p className="text-gray-600">Expert advice and solutions to elevate your digital projects.</p>
            <ul className="list-disc list-inside text-left text-gray-600">
          <li>Social Media Content</li>
          <li>Personal Branding</li>
          <li>Business shoot</li>
        </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
