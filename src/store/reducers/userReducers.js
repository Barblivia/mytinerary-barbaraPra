import { createReducer } from "@reduxjs/toolkit";
import { updateUserImage, signInUser, user_token, signInGoogle, signOutUser, signUpUser  } from '../actions/userAction.js';

const initialState = {
  img: '../../../public/ico/user.ico',
  user: null,
  token: null, 
  };

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateUserImage, (state, action) => {
      return {
        ...state,
        image: action.payload.image,
      };
    })
    .addCase(signInUser.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      };
    })
    .addCase(user_token, (state, action) => {
        return {
            ...state,
            user: action.payload.user
        };
    })
    .addCase(signInGoogle.fulfilled, (state, action)=>{
      return{
          ...state,
          user: action.payload.user,
          token: action.payload.token
      }
  })
    .addCase(signOutUser, () => {
      return {
        user: null,
        token: null, 
      };
    })
    .addCase(signUpUser.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      };
    })

});

export default userReducer;
