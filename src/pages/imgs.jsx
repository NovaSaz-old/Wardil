import React, { useState } from 'react';

const PhotoAlbum = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    // Add the image URLs here or import images as required
    "https://cms.imgworlds.com/assets/9558de9d-1e49-437e-aa7b-b8bd4d999b00.jpg?key=home-gallery", // Replace with actual image paths
    "https://cms.imgworlds.com/assets/9558de9d-1e49-437e-aa7b-b8bd4d999b00.jpg?key=home-gallery",
    "https://cms.imgworlds.com/assets/9558de9d-1e49-437e-aa7b-b8bd4d999b00.jpg?key=home-gallery",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-12">
      <div className="flex justify-center items-center">
        <button onClick={prevSlide} className="p-2 rounded-full bg-gray-200">
          {/* Previous Icon (You can replace this with an arrow icon) */}
          ‹
        </button>

        {/* Display the images */}
        <div className="flex overflow-hidden justify-center w-full">
          <div
            className="flex transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="min-w-full flex justify-center items-center"
              >
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-80 h-auto rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <button onClick={nextSlide} className="p-2 rounded-full bg-gray-200">
          {/* Next Icon (You can replace this with an arrow icon) */}
          ›
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 mx-2 rounded-full ${
              currentIndex === index ? 'bg-black' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PhotoAlbum;
