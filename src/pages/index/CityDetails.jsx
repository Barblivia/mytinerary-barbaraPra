import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card";

const CityDetails = () => {
    const { id } = useParams(); 
    const [cityDetails, setCityDetails] = useState(null);

    useEffect(() => {
        // Axios get city
        axios.get(`http://localhost:3000/api/cities/${id}`)
            .then(response => {
                setCityDetails(response.data.city);
            })
            .catch(error => {
                console.log(error);
                setCityDetails(null);
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

            <p className="text-center text-4xl my-4">Under construction</p>

            <div className="flex justify-center mt-4">
                <Link to="/cities" className="text-blue-50 text-xl hover:underline">
                    Back to Cities
                </Link>
            </div>
        </div>
    );
};

export default CityDetails;