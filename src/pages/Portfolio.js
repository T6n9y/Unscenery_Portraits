import React, { useState, useEffect } from 'react';

function Portfolio() {
  // Sample portfolio projects with categories
  const projects = [
    {
      id: 1,
      title: "Wedding Photography",
      category: "Wedding",
      thumbnail: "/images/assets/wedding_thumbnail.jpg",
      images: [
        "/images/assets/wedding1.jpg",
        "/images/assets/wedding2.jpg",
        "/images/assets/wedding3.jpg"
      ]
    },
    {
      id: 2,
      title: "Portrait Photography",
      category: "Portrait",
      thumbnail: "/images/assets/portrait_thumbnail.jpg",
      images: [
        "/images/assets/portrait1.jpg",
        "/images/assets/portrait2.jpg",
        "/images/assets/portrait3.jpg",
        "/images/assets/portrait4.jpg"
      ]
    },
    {
      id: 3,
      title: "Event Photography",
      category: "Event",
      thumbnail: "/images/assets/event_thumbnail.jpg",
      images: [
        "/images/assets/event1.jpg",
        "/images/assets/event2.jpg",
        "/images/assets/event3.jpg",
        "/images/assets/event4.jpg",
        "/images/assets/event5.jpg"
      ]
    }
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterByCategory = (category) => {
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <section className="pt-20 py-20 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
        <p className="text-gray-400 mb-8">Explore some of my projects</p>

        {/* Filter Buttons */}
        <div className="mb-8">
          <button
            onClick={() => filterByCategory("All")}
            className="px-4 py-2 bg-gray-700 text-white rounded mr-4 hover:bg-gray-600"
          >
            Show All
          </button>
          <button
            onClick={() => filterByCategory("Wedding")}
            className="px-4 py-2 bg-gray-700 text-white rounded mr-4 hover:bg-gray-600"
          >
            Wedding Photography
          </button>
          <button
            onClick={() => filterByCategory("Portrait")}
            className="px-4 py-2 bg-gray-700 text-white rounded mr-4 hover:bg-gray-600"
          >
            Portrait Photography
          </button>
          <button
            onClick={() => filterByCategory("Event")}
            className="px-4 py-2 bg-gray-700 text-white rounded mr-4 hover:bg-gray-600"
          >
            Event Photography
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id}>
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`Project ${project.title} ${index}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
