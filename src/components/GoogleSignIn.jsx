//import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from "react";
import { signInGoogle } from '../store/actions/userAction.js'

const GoogleSignIn = () => {
    
    const googleButton = useRef();
   
    const store = useSelector(store => store.userReducer)
    //console.log(store);
    const dispatch = useDispatch();
    
    const handleCredentialResponse= async(response)=> {
        const data= {
        token_id : response.credential
    }
     try {
        dispatch(signInGoogle({
          data
        })) 
      } catch (error) {
        console.log(error);
      } 
   /*  console.log("JWT Google " + response.credential); 
    const userResponse = await axios.post('http://localhost:3000/api/auth/google', data) */
    //console.log(userResponse); 
  }
    useEffect (() => {
        if(window.google) {
        window.google.accounts.id.initialize({
                client_id: "742751650147-udj5q26lbjce269jm98uset3sq76h5ta.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'pill', theme: "outline", size: "medium", text: 'signin_with' }  // customization attributes
            );
       }
    },[])
    return (
        <div ref={googleButton}></div> 
    )
}
export default GoogleSignIn;

// window.google.accounts.id.prompt(); // also display the One Tap dialog