import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { filter_cities, get_cities } from '../../store/actions/cityActions.js';


const Cities = () => {
    
    const cities = useSelector((store) => store.cityReducer.cities)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(get_cities()) 
    },[]);

    const handleInputChange = (city) => {
        const searchTerm = city.target.value.toLowerCase();
        dispatch(filter_cities({ city: searchTerm }));
      };
      

    return (
        <div className='flex flex-col items-center text-center mb-8'>
            <input onChange={handleInputChange} className='border-2 border-gray-700 rounded-md py-1 px-2 mt-3' type="text" placeholder='Search City' />
            <h2 className='text-5xl my-4'>Cities</h2>
            {cities?.length === 0 ? ( 
                <p className="text-3xl bg-cyan-700/30 text-blue-50 font-bold mt-4">Oops! No cities found. Keep exploring other destinations!</p>
            ) : (
                cities?.map(city => (
                    <Link key={city._id} to={`/cities/${city._id}`}>
                        <Card
                            title={city.city}
                            description={city.description}
                            country={city.country}
                            imageUrl={city.image}
                        />
                    </Link>
                ))
            )}
        </div>
    );
};

export default Cities;
