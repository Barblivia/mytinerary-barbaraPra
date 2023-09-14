import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const get_itinerary_by_id = createAsyncThunk('get_itinerary_by_id', async (id) =>{
    try {
         const response = await axios.get(`http://localhost:3000/api/itineraries/${id}`)
        return {
            itinerary: response.data.itinerary
        }
    } catch (error) {
        return{ 
            itinerary: []
        }
    }
})