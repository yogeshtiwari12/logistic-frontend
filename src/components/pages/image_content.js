import React, { useState, useEffect } from 'react';

import img1 from '../images/lg_website_1.jpg';
import img2 from '../images/vehicle.jpeg';
import img3 from '../images/us_web_img2.jpg';

const ImageContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Increased to 5000ms for slower sliding

    return () => clearInterval(interval);
  }, [images.length]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="carousel" className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform ease-in-out duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-white'}`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageContent;
