import React from 'react'
import '../style/Login.css';
import '../style/Responsive.css'
import {auth, provider} from "../firebase";

function Login() {
    const signIn = () =>{
        auth.signInWithPopup(provider)
            .then(user => console.log(user))
            .catch(err => console.log(err))
    }
    return (
        <div className="login">
            <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png" alt=""/>
          
            <p>Buy your products in low price in Amazon.com</p>
            <button className="sign_btn" onClick={signIn} >Sign In</button>
        </div>
    )
}

export default Login
