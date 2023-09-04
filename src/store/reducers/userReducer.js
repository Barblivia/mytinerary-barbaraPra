import { createReducer } from "@reduxjs/toolkit";
import { user_img } from '../actions/userActions';

const initialState = {
    username: 'User',
    img: '../../../public/ico/user.ico'
}

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_img, (state, action) => {
            return {
                ...state,
                img: action.payload.img
            }
        })
)

export default userReducer