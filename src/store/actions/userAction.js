import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// User Image
export const updateUserImage = createAction('updateUserImage', (obj) => {
    console.log(obj)
    return {
        payload: {
            image: obj.image
        }
    }
});

// Sign in 
export const signInUser = createAsyncThunk('signInUser', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:3000/api/auth/signin', obj.data);
        console.log(data);
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

//Token
export const user_token = createAction('user_token', (user) => {
    return {
        payload: {
            user
        }
    }
});

// Sign in Google
export const signInGoogle = createAsyncThunk('signInGoogle', async (obj) =>{
    try {
        const { data }= await axios.post('http://localhost:3000/api/auth/google', obj.data)
        console.log(data)
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user',JSON.stringify(data.response.user)) 
        window.location.reload()
        return {
            user:data.data.response.user,
            token: data.data.response.token
        }
    } catch (error) {
        console.log(error);
        return{
            user: null
        }
    }
});
// Sign up
export const signUpUser = createAsyncThunk('signUpUser', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:3000/api/auth/signup', obj.data);
        console.log(data);
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

// Sign out
export const signOutUser = createAction('signOutUser', async (token) =>{
    try {
        localStorage.getItem('token')
        await axios.post('http://localhost:3000/api/auth/signout', {}, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        localStorage.removeItem('token');
        localStorage.removeItem('user');

        return {
            user: null,
            token: null
        }
    } catch (error) {
        console.log(error);
    }
});






