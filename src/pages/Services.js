/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Services() {
  return (
    <section className="pt-20 py-20 bg-black text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-white">Services</h2>
        <p className="text-gray-300 mb-8">What I can do for you.</p>
        
        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/assets/event1.jpg" alt="Event Photography" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Event Photography</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Professional photography services for events, portraits, and more.</p>
              <ul className="list-disc list-inside text-left text-gray-600">
                <li>Weddings & Receptions</li>
                <li>Corporate Events</li>
                <li>Birthday & Anniversary Parties</li>
                <li>Concerts & Performances</li>
              </ul>
            </div>
          </a>

          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/assets/portrait_thumbnail.jpg" alt="Portrait Photography" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portrait Photography</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Capture timeless and professional portraits.</p>
              <ul className="list-disc list-inside text-left text-gray-600">
                <li>Individual Portraits</li>
                <li>Family Portraits</li>
                <li>Couple Portraits</li>
              </ul>
            </div>
          </a>

          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/assets/wedding1.jpg" alt="Lifestyle Photography" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lifestyle & Creative Shoots</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Create unique and personalized lifestyle content.</p>
              <ul className="list-disc list-inside text-left text-gray-600">
                <li>Social Media Content</li>
                <li>Personal Branding</li>
                <li>Business Shoot</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
