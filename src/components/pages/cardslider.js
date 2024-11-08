import React, { useState } from 'react';
import warehouseimg from '../images/warehouse.png';
import airfright from '../images/Air freight.png';
import cargo from '../images/cargo.png';
import waterfreight from '../images/water freight.png';
import train from '../images/train_img.jpeg';

function Card({ title, description, imgSrc }) {
  return (
    <div className="flex-shrink-0 w-full sm:w-72 md:w-80 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <a href="/">
        <img className="w-full h-48 object-cover" src={imgSrc} alt={title} />
      </a>
      <div className="p-5">
        <a href="/">
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">{description}</p>
        <a
          href="/"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

function CardSlider() {
  const cards = [
    { title: "Warehouse Service", description: "Warehousing is an extremely dynamic Logistics service, wherein each client demands a tailor made solution for his/her business model.", imgSrc: warehouseimg },
    { title: "Air Freight Services", description: "U.S. Handle Worldwide Trade, LLC. provides professional and comprehensive Air Freight services committed to the safe, reliable and cost effective delivery of your consignment.", imgSrc: airfright },
    { title: "Project Cargo Services", description: "Handling Project Cargo is a specialized job which calls for expertise and experience in this particular field.", imgSrc: cargo },
    { title: "Sea Freight Services", description: "U.S. Handle Worldwide Trade, LLC. provides a highly cost-effective method of transporting a range of large, heavy or normal loads.", imgSrc: waterfreight },
    { title: "Train Freight Services", description: "U.S. Handle Worldwide Trade, LLC. provides a highly cost-effective method of transporting a range of large, heavy or normal loads.", imgSrc: train },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle sliding left and right
  const slideLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 4 : prevIndex - 1));
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 4 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-green-50 py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
              <Card key={index} title={card.title} description={card.description} imgSrc={card.imgSrc} />
            ))}
          </div>

          {/* Left and Right Slide Buttons */}
          <button
            onClick={slideLeft}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full hover:bg-green-700 focus:outline-none"
          >
            &#8592; {/* Left Arrow */}
          </button>
          <button
            onClick={slideRight}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full hover:bg-green-700 focus:outline-none"
          >
            &#8594; {/* Right Arrow */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
