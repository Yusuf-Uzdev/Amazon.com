import React, { useState } from 'react'
import '../style/Header.css';
import '../style/Responsive.css'
import lang from '../assets/us.svg'
import cart from '../assets/cart.svg'
import Navshop from './Navshop'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ReorderIcon from '@material-ui/icons/Reorder';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom'
import { useStateValue } from "../StateProvider";

function Header() {
    const [basket] = useStateValue(); 
    const[user] = useStateValue(); 
    console.log(user)  
    const [showUp, setshowUp] = useState(false);

  
    const showTheLanguageBar =(e) => {
        const languageBar = document.querySelector('.language_bar');
        if(!showUp){
            languageBar.classList.add("active")
        }
        else{
            console.log("done")
        }
         setshowUp(true)
    }

    
     const hideTheLanguageBar =(e) => {
        const languageBar = document.querySelector('.language_bar')

         if(showUp){
            languageBar.classList.remove("active");
            setshowUp(false)
        }
        else{
            console.log("done")
        }
     }
     

    const createLine = (e) => {
        if(!showUp){
            e.target.parentElement.classList.add("createLine");
            setshowUp(true)
        }
        else {
            e.target.parentElement.classList.remove("createLine");
            setshowUp(false)
        }
    }


    const [showUpSign, setshowUpSign] = useState(false);

    const showSignInPart = (e) => {
        const signinpart = document.querySelector('.sign_active')

        if(!showUpSign){
            signinpart.classList.add("active_sign");
            setshowUpSign(true)
        }
        else{
            console.log("done")
        }
    }

    const hideSignInPart = (e) => {
        const hideSignPart = document.querySelector(".sign_active")

        if(showUpSign){
            hideSignPart.classList.remove("active_sign")
            setshowUpSign(false)
        }
      
        else{
            console.log("done")
        }
    }
   
    // const openNav =(e) => {
    //     const openNav = document.getElementById("myNav").style.width = "100%";
    // }

    // const exitNav =(e) => {
    //     const exitNav = document.getElementById("myNav").style.width = "0px";
    // }

    


    return (
       
        <div className="header_part">
      

        <div className="header">
          <div className="header_logo1">
          <Link to="/"> <img className="header-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Amazon Logo"/>
           </Link>
          </div>

            <div className="delivery">
                <LocationOnOutlinedIcon/>
                <div className="delivery_info">
                    <span>Delivery to</span>
                    <h4>Uzbekistan</h4>
                </div>
            </div>
            <div className="search_bar">
                <select id="category">
                    <option value="all">All</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Smartphones">Smartphone</option>
                    <option value="watches">Watches</option>
                    <option value="laptops">Laptops</option>
                </select>

                <input id="search" type="search" placeholder="search" onClick={createLine}/>

               <div className="search_icon">
               <SearchOutlinedIcon style={{fontSize:'30px'}}/>
               </div>
            </div>

            <div className="account">
                <div className="language" onMouseEnter={showTheLanguageBar} onMouseLeave={hideTheLanguageBar}>
                    <img src={lang} alt="" className="langImg"/>
                    <ArrowDropDownIcon/>
                    <div className="language_bar">
                       <p>Change language  <span>learn more</span></p>
                       
                       <input type="radio" name="Languages" value="English"  id="eng_lang" />
                       <label htmlFor="eng_lang">English - EN</label> <hr/>

                       <input type="radio" name="Languages" value="Espanol" id="Espanol_lang"/>
                       <label htmlFor="Espanol_lang">Espanol - ES</label> <br/>

                       <input type="radio" name="Languages" value="Chinease" id="Chinease_lang"/>
                       <label htmlFor="Chinease_lang">Chinease - CH</label> <br/>

                       <input type="radio" name="Languages" value="Korean" id="Korean_lang"/>
                       <label htmlFor="Korean_lang">Korean - KR</label> <br/>

                       <input type="radio" name="Languages" value="Uzbek" id="Uzbek_lang"/>
                       <label htmlFor="Uzbek_lang">Uzbek - UZ</label> <br/>

                       <input type="radio" name="Languages" value="Russian" id="Russian_lang"/>
                       <label htmlFor="Russian_lang">Russian - Rus</label> <br/>

                       <input type="radio" name="Languages" value="Deutsch" id="Deutsch_lang"/>
                       <label htmlFor="Deutsch_lang">Deutsch - DE</label>
                    </div>
                </div>


                
                <Link to="/login" className="signLink">
                <div className="sign_in_out" onMouseEnter={showSignInPart} onMouseLeave={hideSignInPart}>
                    <div className="sign">
                        <span>Hello,{user?.user?.user?.user?user?.user?.user?.user?.email: "Sign in"}</span>
                        <h4>Account&Lists</h4>
                    </div>
                    <ArrowDropDownIcon style={{color: 'gray'}}/>

                    <div className="sign_active">

                    </div>

                </div>
              
                </Link>
               

                <div className="Orders">
                    <div className="sign">
                        <span>Returns</span>
                        <h4>&Orders</h4>
                    </div>
                    
                </div>

                <Link to="/Cart" className="cartLink">
                <div className="cart">
                    <div className="counter">
                        {basket.basket?.length}
                    </div>
                    <img src={cart} alt="" id="cartimg"/>
                    <h4>Cart</h4>
                    
                </div>
                </Link>
                
            </div>
            <div className="hamburger_menu">
                        <ReorderIcon/>
                    </div>
        </div>

            <Navshop/>
     
        </div> 
        

        

    );
}

export default Header
