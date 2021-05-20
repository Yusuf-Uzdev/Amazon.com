import React, { useState } from 'react'
import '../style/LoginEmailPassword.css'
import '../style/Responsive.css'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useStateValue } from "../StateProvider";
import {auth, provider} from "../firebase";
import { Link, useHistory } from "react-router-dom"

function LoginEmailPassword() {
    const[user, dispatch] = useStateValue({});
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signInwithEmail = (e) => {
       auth.signInWithEmailAndPassword(email, password)
       .then((user) => {
           if(user){
               dispatch({
                   type: "Create_user",
                   user:{
                       user: user
                   }
               });
               history.push("/")
           }
       })
       .catch(err => alert(err.message));
        e.preventDefault();
    }

    const createAcoountwithEmail = (e) => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
            if(user){
                history.push("/")
            }
        })
        .catch(err => console.log(err));
         e.preventDefault();
    }

    const [needDrop, helpDrop] = useState(false)
    const need_help_click = (e) => {
        const help = document.querySelector('.problem')
      
        const downIcon = document.querySelector('.needIconDown')
        const rightIcon = document.querySelector('.needIcon')
        if (!needDrop) {
            help.style.display = "block"; 
            downIcon.style.display = "block";    
            rightIcon.style.display = "none"

            helpDrop(true);
          
            
        }
        else {
            help.style.display = "none";
            downIcon.style.display = "none";    
            rightIcon.style.display = "block"
            
            helpDrop(false);
        }
    }

    return (
        <div className="loginEmailPassword">
             <Link to="/">
             <img className="Email-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png" alt="Amazon Logo"/>
             </Link>

            <div className="LoginContainer">
                 <h1>Sign-In</h1>
              <form action="#" id="form">
                      <label htmlFor="email">Email or mobile phone number</label>
                       <input type="email" id="email" onChange={ e => setEmail(e.target.value)} />
      
                       <label htmlFor="password">Password</label>
                       <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
      
                       <button type="submit" className="continue" onClick={signInwithEmail}>Continue</button>

                       <div className="privacy_policy">
                           <p>By continuing, you agree to Amazon's <Link>Conditions of Use</Link> and <Link>Privacy Notice.</Link></p>
                       </div>

                    
                       <div onClick={need_help_click} className="Need_help">  

                            <div class="needIconDown"><ArrowDropDownIcon /> </div>                      
                            <div class="needIcon"> <ArrowRightIcon/> </div> 
                            
                            <span>Need help?</span>
                       </div>                        

                       <div className="problem">
                          <Link> <p>Forgot your password?</p></Link>
                          <Link> <p>Other issues with Sign-In</p></Link>
                       </div>
                       
              </form>

            </div>

            <button id="create_account" onClick={createAcoountwithEmail}>Create your Amazon Account</button>
        </div>
    )
}

export default LoginEmailPassword
