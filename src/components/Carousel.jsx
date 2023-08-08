import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const cities = [
  { name: 'Rio de Janeiro', image: '/img/city1_Rio.jpg' },
  { name: 'Paris', image: '/img/city2_Paris.jpg' },
  { name: 'Tokyo', image: '/img/city3_Tokyo.jpg' },
  { name: 'Dublin', image: '/img/city4_Dublin.jpg' },
  { name: 'Havana', image: '/img/city5_Havana.jpg' },
  { name: 'Florence', image: '/img/city6_Florence.jpg' },
  { name: 'Delhi', image: '/img/city7_Delhi.jpg' },
  { name: 'Copenhagen', image: '/img/city8_Copenhagen.jpg' },
  { name: 'New York', image: '/img/city9_NewYork.jpg' },
  { name: 'Berlin', image: '/img/city10_Berlin.jpg' },
  { name: 'Beijing', image: '/img/city11_Beijing.jpg' },
  { name: 'Dubai', image: '/img/city12_Dubai.jpg' },
];


const itemsPerSlide = 4;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(cities.length / itemsPerSlide));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="carousel p-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-white tracking-wider">Popular MyTineraries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {Array.from({ length: Math.ceil(cities.length / itemsPerSlide) }).map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`border border-black p-2 ${slideIndex === currentSlide ? 'block' : 'hidden'}`}
          >
            <div className="grid grid-cols-2 gap-4">
              {cities.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((city, cityIndex) => (
                <div key={cityIndex} className="mb-4 flex flex-col items-center">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-60 h-60 object-cover rounded-lg"
                  />
                  <p className="text-center mt-2">{city.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="dots flex justify-center mt-4">
        {Array.from({ length: Math.ceil(cities.length / itemsPerSlide) }).map((_, slideIndex) => (
          <span
            key={slideIndex}
            className={`dot inline-block w-2 h-2 rounded-full mx-1 ${
              slideIndex === currentSlide ? 'bg-black' : 'bg-black'
            }`}
            onClick={() => setCurrentSlide(slideIndex)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;