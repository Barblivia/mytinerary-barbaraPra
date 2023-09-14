import { useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'

const GoogleSignIn = () => {
    
    const googleButton = useRef();
    
    const handleCredentialResponse = async (response) => {
       // console.info('JWT GOOGLE:', response.credential);
       const data = {
        token_id: response.credential
       }
       const userResponse = await axios.post(`http://localhost:3000/api/auth/google`, data);
       console.log(userResponse)
    }
    useEffect (() => {
        if(window.google) {
            window.google.accounts.id.initialize({
                client_id: "1048062830252-ckdg0mtlls0i4km5qeorr395jq9cv15l.apps.googleusercontent.com",
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