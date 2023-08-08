import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="call-to-action py-8 px-4 text-center">
    <h3 className="text-grey text-2xl font-bold mb-2 animate-bounce">Explore amazing cities around the world</h3>
       <Link
      to="/cities"
      className="btn btn-primary text-white hover:bg-blue-950"
      style={{ backgroundColor: '#ffcb00', color: '#072448' }}
    >
      Discover Cities
    </Link>
    <p className="text-white font-semibold text-lg mb-2">Start planning your dream itinerary today.</p>
  </div>
  );
};

export default CallToAction;