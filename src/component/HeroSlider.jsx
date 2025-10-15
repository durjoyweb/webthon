import React, { useState, useEffect } from "react";
import img1 from '../image/hero_1.jpg';
import img2 from '../image/hero_2.jpg';
const images = [img1, img2];

const HeroSlider = ({ autoPlay = true, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next slide function
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  if (!images || images.length === 0) {
    return <div className="text-center py-8">No images provided.</div>;
  }

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gray-200">
      {" "}
      {/* Hero height: adjust as needed */}
      {/* Sliding Images Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Optional overlay for text readability */}
            <div className="absolute inset-0 bg-gray-500 bg-opacity-30 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">
                  Hero Title {index + 1}
                </h2>
                <p className="text-lg">Description for slide {index + 1}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300 z-10"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300 z-10"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white"
                : "bg-white bg-opacity-50 hover:bg-opacity-80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
