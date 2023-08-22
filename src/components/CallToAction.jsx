import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="bg-sky-800/30 call-to-action py-4
     px-4 text-center">
    <h3 className="text-slate-800 text-2xl font-bold mb-2 p-3 animate-bounce">Find your perfect trip, designed by insiders who know and love their cities!</h3>
       <Link
      to="/cities"
      className="btn"
      style={{ backgroundColor: '#2884a4', color: '#072448' }}
    > Discover Cities
      </Link>
    <p className="text-white font-bold text-lg m-2 p-2">Start planning your dream itinerary today.</p>
  </div>
  );
};

export default CallToAction;