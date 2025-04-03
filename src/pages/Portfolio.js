import React, { useState, useEffect, useRef } from 'react';

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

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reference for detecting outside clicks
  const modalRef = useRef(null);

  const openCarousel = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset to the first image when opening the carousel
  };

  const closeCarousel = () => {
    setSelectedProject(null); // Close the carousel
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  // Close the modal if user clicks outside of it or presses ESC
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeCarousel();
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        closeCarousel();
      }
    };

    // Add event listeners for ESC key and click outside the modal
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      // Clean up event listeners on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/photo9.jpg')` }}
    >
      <div className="container mx-auto px-4 py-20 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
        <p className="text-gray-400 mb-8">Explore some of my projects</p>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => openCarousel(project)} // Open the project in the carousel modal
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
            </div>
          ))}
        </div>

        {/* Carousel Modal for Selected Project */}
        {selectedProject && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div
              ref={modalRef}
              className="bg-black p-6 rounded-lg shadow-lg max-w-[480px] max-h-[720px] w-full relative" // Resizing the carousel to 480p by 720p
            >
              {/* Carousel Image */}
              <div className="flex justify-center items-center relative">
                <button
                  onClick={prevImage}
                  className="text-white text-5xl absolute left-4 transition-transform transform hover:scale-125"
                >
                  &#8592; {/* Left Arrow */}
                </button>
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`Carousel ${currentImageIndex}`}
                  className="w-full h-auto object-contain rounded-lg transition-opacity duration-500 ease-in-out opacity-100"
                />
                <button
                  onClick={nextImage}
                  className="text-white text-5xl absolute right-4 transition-transform transform hover:scale-125"
                >
                  &#8594; {/* Right Arrow */}
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={closeCarousel}
                className="text-red-500 text-lg absolute top-4 right-4"
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
