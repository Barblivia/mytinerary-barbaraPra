import { useEffect } from "react"

export const GoogleSignIn = () => {

    const handleCredentialResponse = (response) => {
        console.log("JWT GOOGLE: ", response.credential);
    }
    useEffect (() => {
        window.onload = function () {
            window.google.accounts.id.initialize({
                cliente_id: "",
                callback: handleCredentialResponse
            });
           // window.
        }
    })
}