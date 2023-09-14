import { createReducer } from "@reduxjs/toolkit";
import { get_itinerary_by_id } from "../actions/itineraryActions.js";

const initialState = {
    itinerary: {},
}

const itineraryReducer = createReducer(initialState,
    (builder) => builder
        .addCase(get_itinerary_by_id.fulfilled,
            (state, action)=>{
                return{
                    ...state,
                    itinerary: action.payload.itinerary
                }
        })
)
export default itineraryReducer;