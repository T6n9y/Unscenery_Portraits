import React from 'react';

function Portfolio() {
  // Sample portfolio projects with categories
  const projects = [
    {
      id: 1,
      title: "Wedding Photography",
      category: "Wedding",
      images: [
        "/images/assets/wedding1.jpg",
        "/images/assets/wedding2.jpg",
        "/images/assets/wedding3.jpg",
      ]
    },
    {
      id: 2,
      title: "Portrait Photography",
      category: "Portrait",
      images: [
        "/images/assets/portrait1.jpg",
        "/images/assets/portrait2.jpg",
        "/images/assets/portrait3.jpg",
        "/images/assets/portrait4.jpg",
      ]
    },
    {
      id: 3,
      title: "Event Photography",
      category: "Event",
      images: [
        "/images/assets/event1.jpg",
        "/images/assets/event2.jpg",
        "/images/assets/event3.jpg",
        "/images/assets/event4.jpg",
        "/images/assets/event5.jpg"
      ]
    }
  ];

  return (
    <section className="relative pt-20 pb-20 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
        <p className="text-gray-400 mb-8">Explore some of my projects</p>

        {/* Portfolio Grid - Masonry Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id}>
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <div className="grid gap-6">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`Project ${project.title} ${index}`}
                      className="w-full h-auto object-cover rounded-lg transition-all duration-500 ease-in-out"
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
