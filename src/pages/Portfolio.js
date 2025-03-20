import React, { useState, useEffect, useRef } from 'react';

function Portfolio() {
  // Sample portfolio projects
  const projects = [
    {
      id: 1,
      title: "Wedding Photography",
      thumbnail: "/images/assets/wedding_thumbnail.jpg",  // Thumbnail image
      images: [
        "/images/assets/wedding1.jpg",
        "/images/assets/wedding2.jpg",
        "/images/assets/wedding3.jpg"
      ]
    },
    {
      id: 2,
      title: "Portrait Photography",
      thumbnail: "/images/assets/portrait_thumbnail.jpg",  // Thumbnail image
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
      thumbnail: "/images/assets/event_thumbnail.jpg",  // Thumbnail image
      images: [
        "/images/assets/event1.jpg",
        "/images/assets/event2.jpg",
        "/images/assets/event3.jpg",
        "/images/assets/event4.jpg"
      ]
    }
  ];

  // State to track the selected project and carousel image
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ref to detect clicks outside the modal
  const modalRef = useRef(null);

  // Function to open the carousel
  const openCarousel = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset carousel to first image
  };

  // Function to handle next/previous image in carousel
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

  // Close carousel when clicking outside the modal
  const closeCarousel = () => {
    setSelectedProject(null);
  };

  // Detect click outside modal to close the carousel
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeCarousel(); // Close modal if click is outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // Listen for outside clicks

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up listener on unmount
    };
  }, []);

  return (
    <section className="pt-20 py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
        <p className="text-gray-600 mb-8">Explore some of my projects</p>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => openCarousel(project)}
            >
              <img
                src={project.thumbnail}  // Use the thumbnail image (imported)
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
              ref={modalRef} // Attach the modal ref here
              className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full"
            >
              {/* Carousel Image */}
              <div className="flex justify-center items-center relative">
                <button
                  onClick={prevImage}
                  className="text-white text-5xl absolute left-4 transition-transform transform hover:scale-125 hover:text-yellow-400"
                >
                  &#8592; {/* Left Arrow */}
                </button>
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`Carousel ${currentImageIndex}`}
                  className="w-full h-auto object-contain rounded-lg"
                />
                <button
                  onClick={nextImage}
                  className="text-white text-5xl absolute right-4 transition-transform transform hover:scale-125 hover:text-yellow-400"
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
