import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// User Image
export const updateUserImage = createAction('updateUserImage', (image) => {
    return {
        payload: {
            image
        }
    }
});

// Login user
export const loginUser = createAsyncThunk('loginUser', async (userData, thunkAPI) => {
    try {
        const { data } = await axios.post('http://localhost:3000/api/auth/signin', userData);
        localStorage.setItem('token', data.response.token);
        localStorage.setItem('user', JSON.stringify(data.response.user));
        return {
            user:data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error);
        return{
            user: null
        }
    }
});

// Log out
export const logoutUser = createAction('logoutUser');

// Fetch current user
export const fetchCurrentUser = createAsyncThunk('fetchCurrentUser', async (_, thunkAPI) => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            return null;
        }

        const { data } = await axios.post('http://localhost:3000/api/auth/token', {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data.user;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});

//Token
export const user_token = createAction('user_token', (user) => {
    return {
        payload: {
            user
        }
    }
});
// New User
export const signUpUser = createAsyncThunk('signUpUser', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:3000/api/auth/signup', obj.data);
        localStorage.setItem('token', data.response.token);
        localStorage.setItem('user', JSON.stringify(data.response.user));
        return {
            user:data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error);
        return{
            user: null
        }
    }
});


