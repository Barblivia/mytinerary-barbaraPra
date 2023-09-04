import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card.jsx";
import ItineraryCard from "../../components/ItineraryCard.jsx";

const CityDetails = () => {
  const { id } = useParams();
  const [cityDetails, setCityDetails] = useState(null);
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    // Axios get city
    axios
      .get(`http://localhost:3000/api/cities/${id}`)
      .then((response) => {
        setCityDetails(response.data.city);
      })
      .catch((error) => {
        console.log(error);
        setCityDetails(null);
      });

    // Axios get itineraries for the city
    axios
      .get(`http://localhost:3000/api/itineraries/city/${id}`)
      .then((response) => {
        setItineraries(response.data.itineraries);
      })
      .catch((error) => {
        console.log(error);
        setItineraries([]);
      });
  }, [id]);

  return (
    <div>
      <h2 className=" bg-cyan-700/50 text-blue-50 text-3xl text-center mb-4 p-3">
        City Details: {cityDetails ? cityDetails.city : "Loading..."}
      </h2>
      <div className="mx-auto w-1/4">
        {cityDetails && (
          <Card
            title={cityDetails.city}
            country={cityDetails.country}
            imageUrl={cityDetails.image}
          />
        )}
      </div>

      <h3 className="bg-cyan-700/50 text-blue-50 text-center text-3xl my-4">Itineraries for {cityDetails ? cityDetails.city : "Loading..."}</h3>

      <div className="flex flex-wrap justify-center">
        {itineraries.map((itinerary) => (
          <ItineraryCard key={itinerary._id} itinerary={itinerary} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Link to="/cities" className="text-blue-50 text-xl hover:underline">
          Back to Cities
        </Link>
      </div>
    </div>
  );
};

export default CityDetails;
