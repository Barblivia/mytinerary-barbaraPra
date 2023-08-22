import React from 'react';

const Card = ({ title, description, country, imageUrl }) => {
    return (
        <article className="relative overflow-hidden rounded-lg shadow transition max-w-[500px] hover:shadow-lg my-4">
            <img
                alt={`City: ${title}`}
                src={imageUrl}
                className="absolute inset-0 h-full w-full object-cover"
            />
                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                    <span className="block text-xs text-white/90">
                        {country}
                    </span>

                    <h3 className="mt-0.5 text-lg text-white">
                        {title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default Card;
       
