import { createReducer } from "@reduxjs/toolkit";
import { updateUserImage, loginUser, logoutUser, fetchCurrentUser, signUpUser, user_token } from '../actions/userAction.js';

const initialState = {
  username: 'User',
  img: '../../../public/ico/user.ico',
  user: null,
  token: null, 
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateUserImage, (state, action) => {
      return {
        ...state,
        image: action.payload.image,
      };
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    })
    .addCase(user_token, (state, action) => {

        return {
            ...state,
            user: action.payload.user,
        };
    })
    .addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    })
    .addCase(logoutUser, (state) => {
      return {
        ...state,
        user: null,
        error: null,
        token: null, 
      };
    })
    .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload,
          error: null,
        };
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        return {
          ...state,
          user: null,
          error: action.payload,
        };
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    })
    .addCase(signUpUser.rejected, (state, action) => {
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    });
});

export default userReducer;
