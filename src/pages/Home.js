import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // State to track selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Ref to detect clicks outside of the modal
  const modalRef = useRef(null);

  // Array of images for the collage (you can replace these with your own images)
  const images = [
    { id: 1, src: 'images/image1.jpg', alt: 'Image 1' },
    { id: 2, src: 'images/photo2.jpg', alt: 'Image 2' },
    { id: 3, src: '/images/photo3.jpg', alt: 'Image 3' },
    { id: 4, src: '/images/photo4.jpg', alt: 'Image 4' },
    { id: 5, src: '/images/photo5.jpg', alt: 'Image 5' },
    { id: 6, src: '/images/photo6.jpg', alt: 'Image 6' },
  ];

  // Close the modal if the user clicks outside of the card
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedImage(null); // Close modal if click is outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // Listen for outside clicks

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up listener on unmount
    };
  }, []);

  return (
    <section
      className="pt-20 text-black text-center"
      style={{ backgroundColor: '		#ffffba' }}
    >
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-2xl mb-8">
          Hi, I’m Tanay. I capture moments, emotions, and stories through my lens. From portraits to events,
          every shot is crafted to create lasting memories.
          <br />
          Have a look at my work — let’s turn your special moments into timeless frames.
        </p>

        {/* Collage of images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg bg-[	#faebd7]"
              onClick={() => setSelectedImage(image.src)} // Set the selected image on click
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Conditional Card View for Selected Image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div
              ref={modalRef} // Attach the modal ref here
              className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2"
            >
              <button
                onClick={() => setSelectedImage(null)} // Close the card view
                className="text-red-500 text-lg absolute top-4 right-4"
              >
                X
              </button>
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        <Link
          to="/portfolio"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          See My Work
        </Link>
      </div>
    </section>
  );
}

export default Home;
