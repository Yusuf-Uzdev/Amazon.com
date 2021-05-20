import React  from 'react'
import '../style/Nav_shop.css';
import '../style/Responsive.css'
import { Link } from 'react-router-dom'
import lang from '../assets/us.svg'
// import cart from '../assets/cart.svg'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "../StateProvider";




function Nav_shop() {
    // const [basket, dispatch] = useStateValue(); 
    const[user] = useStateValue(); 
    //  let id = null
    const openNav =(e) => {
        const openNav = document.getElementById("myNav")
        openNav.style.display = "flex";
        
        document.body.style.overflow = "hidden";

        const animat = document.querySelector('.nav_menu_content')
        animat.animate([
            { transform: 'translateX(-400px)' },
            { transform: 'translateX(0px)' }
        ],{
            duration: 250,
        });


        // let animate = document.querySelector('.overlay');
        // let pos = -400;
        // clearInterval(id);
        // id = setInterval(frame, 0);
        // function frame() {
        //     if (pos == 0){
        //         clearInterval(id);
        //     }
        //     else {
        //         pos++;
        //         animate.style.top = pos - 'px'
        //         animate.style.left = pos + 'px'
        //     }
        // }

    }

    document.body.addEventListener('click', () => {
           document.body.style.overflow = "scroll"
    });
    const exitNav =(e) => {
        const exitNav = document.getElementById("myNav")
        exitNav.style.display = "none";
       
        document.body.style.overflow ="scroll"
    }


    const right_nav_menu =(e) => {
        const myu = document.querySelector('.red')
        myu.style.display = "block";
        // myu.classList.add("red")
        const animate = document.querySelector('.red')
        animate.animate([
            { transform: 'translateX(300px)' },
            { transform: 'translateX(100px)' },
            { transform: 'translateX(0px)' }
        ],{
            duration: 100,
        });

        const allLists = document.querySelector('.ulList');
        allLists.style.display = "none"
    }

    const exit_music_nav =(e) => {
        const exit = document.querySelector('.red')
        exit.style.display = "none";
        // myu.classList.add("red")
        const animate = document.querySelector('.nav_menu_content_items')
        animate.animate([
            { transform: 'translateX(-300px)' },
            { transform: 'translateX(-100px)' },
            { transform: 'translateX(0px)' }
        ],{
            duration: 100,
        });


        const allLists = document.querySelector('.ulList');
        allLists.style.display = "block"
    }

    // var acc = document.getElementsByClassName("accordion");
    // var i;

    //    for (  i = 0; i < acc.length;  i++) {
    //     acc[i].addEventListener("click", function() {
    //         console.log("done")
        //   this.classList.toggle("active");
    //       var panel = this.nextElementSibling;
    //       if (panel.style.display === "block") {
    //         panel.style.display = "none"
    //       } 
    //       else {
    //         panel.style.display = "block";
    //       }
    //     });

    //    }

    //      const [dropped, setDropped] = useState(false);
    //      const seeAllclick = (e) => {
          
    //      const dropLinks = document.querySelector(".seeAllset");
    //      const activeClass = document.querySelector(".seeAllactive")     
    //      if (!dropped) {
    //        dropLinks.style.display = "block";
    //        activeClass.classList.add("activeSeeAll")
    //        setDropped(true);
    //      } else {
    //        dropLinks.style.display = "none";
    //        setDropped(false);
    //      }
    //    };

    //    const [dropped2, setDropped2] = useState(false);
    //    const seeAllclick2 = (e) => {
    //    const dropLinks = document.querySelector(".seeAllset2");
    //    const activeClass = document.querySelector(".seeAllactive2")          
    //    if (!dropped) {   
    //     activeClass.classList.add("activeSeeAll") 

    //      dropLinks.style.display = "block";
        
    //      setDropped(true);
    //    } else {
    //      dropLinks.style.display = "none";
         
    //      setDropped(false);
    //    }
    //  };


    const seeAllclick = (e) => {
        const seeAllnone = document.querySelector('.seeAllclose')
        seeAllnone.style.display = "none";
        const seeAllshow = document.querySelector('.seeAllset')
        seeAllshow.style.display = "block"
    }

    
    const Seelessclick = (e) => {
        // console.log("done")
        const seeLessnone = document.querySelector('.seeAllset')
        seeLessnone.style.display = "none";
        const seeLesshow = document.querySelector('.seeAllclose')
        seeLesshow.style.display = "flex"
        // const seeAllsetclose = document.querySelector('.seeAllset').style.display = "none"
    }


    
    const seeAllclick2 = (e) => {
        const seeAllnone = document.querySelector('.seeAllclose2')
        seeAllnone.style.display = "none";
        const seeAllshow = document.querySelector('.seeAllset2')
        seeAllshow.style.display = "block"
    }

    
    const Seelessclick2 = (e) => {
        // console.log("done")
        const seeLessnone = document.querySelector('.seeAllset2')
        seeLessnone.style.display = "none";
        const seeLesshow = document.querySelector('.seeAllclose2')
        seeLesshow.style.display = "flex"
        // const seeAllsetclose = document.querySelector('.seeAllset').style.display = "none"
    }






    return (
        <div>

          <div className="nav_shop">
             <div className="nav_shop_container">
                <div  onClick={openNav} className="All_menu">
                    <MenuIcon/>
                    <p className="all">All</p>
                </div>
                {/* <div className="responsive_menu">
                   <Link to="/Cart" className="cartLink">
                      <div className="responsive_cart">
                          <div className="responsive_counter">
                            {basket.basket?.length}
                      </div>
                          <img src={cart} alt="" id="responsive_cartimg"/>
                       <h4>Cart</h4>
                    
                    </div>
                </Link>
                </div> */}

                <div className="nav_menu_list_wrapper">
                    <ul className="nav_menu_list">
                        <li><p>Today's Deals</p></li>
                        <li><p>Customer Service</p></li>
                        <li><p>Gift Cards</p></li>
                        <li><p>Registery</p></li>
                        <li><p>Sell</p></li>
                    </ul>
                </div>

                <div className="nav_shop_covidSection">
                    <p>Amazon response to Covid-19</p>
                </div>
          </div> {/* nav_shop_container_div */}
        
        </div>  {/* nav_shop_close_div */}


           
  <div id="myNav" className="overlay">

       <div className="nav_menu_content">

             <div className="nav_menu_header">

                <div className="nav_menu_header_container">
                     <AccountCircleIcon id="nav_menu_header_profile-icon"/>
                      <h2>Hello, {user?. user?.user?.user ? user?.user?.user?.user?.email : "Sign in"}</h2>
                </div>

            </div>
         
             <div className="nav_menu_content_items">
                    <ul className="ulList">
                        <li className="nav_menu_content_item_name" ><h4>Digital Content & Devices</h4></li>
         
                        <li className="nav_list"  onClick={right_nav_menu}><p>Amazon Music</p> <ChevronRightIcon/>
                        
                        </li>
         
                        <li className="nav_list"><p>Kindle E-readers & Books  </p> <ChevronRightIcon/></li>
         
                        <li className="nav_list"><p>Appstore for Android</p>
                        <ChevronRightIcon/> </li>
         
                        <li className="line"></li>
         
                        <li className="nav_menu_content_item_name "><h4>Shop By Department</h4></li>
         
                        <li className="nav_list"><p>Electroncs</p> <ChevronRightIcon/></li>
         
                        <li className="nav_list"><p>Computers</p> <ChevronRightIcon/></li>
         
                        <li className="nav_list"><p>Smart Home</p> <ChevronRightIcon/></li>
         
                        <li className="nav_list"><p>Arts & Crafts</p> <ChevronRightIcon/></li>
         
                             <li className="nav_list seeAllclose"  onClick={seeAllclick} ><p>See All</p> <ExpandMoreIcon/> </li>
                               <div className="seeAllset">

                                   <li className="nav_list"><p>Automative</p> <ChevronRightIcon/></li>
                                   
                                   <li className="nav_list"><p>Baby</p> <ChevronRightIcon/></li>
                   
                                   <li className="nav_list"><p>Beauty and Personal Care</p> <ChevronRightIcon/></li>

                                   <li className="nav_list"><p>Women's Fashion</p> <ChevronRightIcon/></li>
                                   
                                   <li className="nav_list"><p>Men's Fashion</p> <ChevronRightIcon/></li>
                   
                                   <li className="nav_list"><p>Luggage</p> <ChevronRightIcon/></li>

                                   <li className="nav_list seeAllLess" onClick={Seelessclick} ><p>See Less</p> <ExpandLessIcon/> </li>
                                   
                               </div>
                                 
                        <li className="line"></li>
         
                        <li className="nav_menu_content_item_name "><h4>Shop By Department</h4></li>
         
                        <li className="nav_list"><p>Electroncs</p> <ChevronRightIcon/></li>
         
                        <li className="nav_list"><p>Computers</p> <ChevronRightIcon/></li>
         
                        <li className="nav_list"><p>Smart Home</p> <ChevronRightIcon/></li>
         
                        <li className="nav_list"><p>Arts & Crafts</p> <ChevronRightIcon/></li>
         
                            <li className="nav_list seeAllclose2"  onClick={seeAllclick2} ><p>See All</p> <ExpandMoreIcon/> </li>

                                 <div className="seeAllset2">
                                    
                                    <li className="nav_list" ><p>Amazon Second Chance</p> <ChevronRightIcon/></li>
                                    
                                    <li className="nav_list seeAllLess"  onClick={Seelessclick2}><p>See less</p> <ExpandLessIcon/></li>
                                                                     
                                 </div>
         
                        <li className="line"></li>

                        <li className="nav_menu_content_item_name "><h4>Help & Settings</h4></li>
         
                        <li className="nav_list"><p>Your Account</p></li>
         
                        <li className="nav_list"><p>English</p></li>
         
                        <li className="Helps_part_US"><img src={lang} alt="" className=" langImgUs" /><p> United States</p></li>
         
                        <li className="nav_list"><p>Customer Service</p></li>

                        <li className="nav_list"><Link to="/login"><p>Sign Out</p></Link></li>
         
             
                  </ul>
         
                     <div id="right_bar" className="right_nav-menu red" >
                          <ul>
                              <li className="exit_nav_music" onClick={exit_music_nav}><ArrowBackIcon id="backIcon" /><h3>Main Menu</h3></li>
                              <li className="nav_menu_content_item_name"><h4>Stream Music</h4></li>
                              <li className="Music_nav_list"><p>Amazon Music Unlimited</p></li>
                              <li className="Music_nav_list"><p>Amazon Music HD</p></li>
                              <li className="Music_nav_list"><p>Amazon Music Prime</p></li>
                              <li className="Music_nav_list"><p>Free Streaming Music</p></li>

                          </ul>
                    </div>

           </div>  {/*nav_menu_content_items*/}

       </div> {/*nav_menu_content*/}

              <div className="nav_menu_exit" onClick={exitNav}>
                  <ClearIcon id="exitNav"/>
              </div>

 </div> {/*overlay div*/}

        </div>
    )
}

export default Nav_shop
