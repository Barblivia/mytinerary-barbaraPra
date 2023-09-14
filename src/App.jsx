import { RouterProvider } from 'react-router-dom';
import router from './routers/router';
import axios from "axios"
import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import { user_token } from "./store/actions/userAction.js"
import './App.css';


function App() {
   let dispatch = useDispatch();
 
   useEffect(() => {
     let url = `http://localhost:3000/api/auth/token`
     let token = localStorage.getItem('token')
 
     //console.log(token)
 
     if (token) {
       let configs = { headers: { 'Authorization': `Bearer ${token}` } }
 
       axios.post(url, null, configs)
         .then(response => dispatch(user_token(response.data.user)))
         .catch(err => console.log(err))
     }
 
   }, [])
 
 
   return (
     <RouterProvider router={router} />
   )
 }
 
 export default App;