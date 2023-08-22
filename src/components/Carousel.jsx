import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const cities = [
  { name: 'Rio de Janeiro - Brazil', image: '/img/city1_Rio.jpg' },
  { name: 'Paris - France', image: '/img/city2_Paris.jpg' },
  { name: 'Tokyo - Japan', image: '/img/city3_Tokyo.jpg' },
  { name: 'Dublin - Ireland', image: '/img/city4_Dublin.jpg' },
  { name: 'Havana - Cuba', image: '/img/city5_Havana.jpg' },
  { name: 'Florence - Italy', image: '/img/city6_Florence.jpg' },
  { name: 'Delhi - India', image: '/img/city7_Delhi.jpg' },
  { name: 'Copenhagen - Denmark', image: '/img/city8_Copenhagen.jpg' },
  { name: 'New York - USA', image: '/img/city9_NewYork.jpg' },
  { name: 'Berlin - Germany', image: '/img/city10_Berlin.jpg' },
  { name: 'Beijing - China', image: '/img/city11_Beijing.jpg' },
  { name: 'Dubai - UAE', image: '/img/city12_Dubai.jpg' },
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
      <h2 className="bg-sky-800/30 text-3xl font-bold mb-2 text-white p-3 tracking-wider">Popular MyTineraries</h2>
      
      <div className="flex justify-center w-4/6 min-h-[40vh]">
        {Array.from({ length: Math.ceil(cities.length / itemsPerSlide) }).map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`${slideIndex === currentSlide ? 'block' : 'hidden'}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cities.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((city, cityIndex) => (
                <div key={cityIndex} className="mb-4 flex flex-col items-center">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <p className="bg-sky-800/30 text-center mt-2">
    <span className="text-xl font-bold tracking-wide text-blue-950 hover:text-blue-600">
    {city.name}
  </span>
</p>
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
              slideIndex === currentSlide ? 'bg-white' : 'bg-white'
            }`}
            onClick={() => setCurrentSlide(slideIndex)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;