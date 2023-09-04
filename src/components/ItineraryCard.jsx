import React from 'react';

const ItineraryCard = ({ itinerary }) => {
  return (
    <div className="relative block overflow-hidden rounded-lg border bg-blue-300 border-gray-100 p-4 sm:p-6 lg:p-8">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-950 to-cyan-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {itinerary.title}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600">
            By {itinerary.author.fullName}
          </p>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <img
            alt={itinerary.author.fullName}
            src={itinerary.author.profilePhoto}
            className="h-16 w-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="max-w-[40ch] text-sm text-gray-500">{itinerary.description}</p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Price</dt>
          <dd className="text-xs text-gray-500">{`${itinerary.price} patacones`}</dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Duration</dt>
          <dd className="text-xs text-gray-500">{`${itinerary.duration} hours`}</dd>
        </div>
      </dl>

      <div className="mt-4">
        <p className="text-sm font-medium text-gray-600">Likes: {itinerary.likes || 0}</p>
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium text-gray-600">Hashtags: {itinerary.hashTags.join(', ')}</p>
      </div>

      <button className="mt-4 bg-blue-500 hover:bg-blue-850 text-white font-bold py-2 px-4 rounded">
        View More (Under Construction)
      </button>
    </div>
  );
};

export default ItineraryCard;
