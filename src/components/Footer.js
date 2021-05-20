import React from 'react'
import '../style/Footer.css'
import '../style/Responsive.css'
import { Link } from 'react-router-dom'
import lang from '../assets/us.svg'
import LanguageIcon from '@material-ui/icons/Language';
import TelegramIcon from '@material-ui/icons/Telegram';
import { BackTop } from 'antd';

// const handleClick = (event) => {
//   const anchor = document.querySelector('.header_part');

//   if (anchor) {
//     anchor.scrollIntoView({ behavior: 'smooth', block: 'center'});
//   }
// }


const Footer = () => {
    return (
        <div className="footer">

          <BackTop><button className="back_to_top"><p>Back to top   </p> </button></BackTop>
          
         
          
          
         
            <div className="footer_upper_content">

              <div className="footer_upper_content_wrapper">
                

                  <div className="footer_colums">
                  <div className="list_category">
                      <h3>Get To Know Us</h3>
                 </div>
                    <ul>
                          <Link>  <li className="footer_colums_list"><p>Careers</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Blog</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>About Amazon</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Investor Relations</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Amazon Devices</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Amazon Tours</p></li> </Link>
                    </ul>
                  </div>

                  
                  <div className="footer_colums">
                      <div className="list_category">
                      <h3>Make Money with Us</h3>
                      </div>
                    <ul>
                          <Link>  <li className="footer_colums_list"><p>Sell products on Amazon</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Sell on Amazon Business</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Sell apps on Amazon </p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Become an Affiliate</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Advertise Your Products</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Self-Publish with Us</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Host an Amazon Hub</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>›See More Make Money with Us</p></li> </Link>
                    </ul>
                  </div>

                  
                  <div className="footer_colums">
                  <div className="list_category">
                      <h3>Amazon Payment Products</h3>
                 </div>
                    <ul>
                          <Link>  <li className="footer_colums_list"><p>Amazon Business Card</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Shop with Points</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Reload Your Balance</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Amazon Currency Converter</p></li> </Link>
                    
                    </ul>
                  </div>

                  
                  <div className="footer_colums">
                  <div className="list_category">
                      <h3>Let Us Help You</h3>
                 </div>
                    <ul>
                          <Link>  <li className="footer_colums_list"><p>Amazon and COVID-19</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Your Account</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Your Orders</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Shipping Rates & Policies</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Returns & Replacements</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Manage Your Content and Devices</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Amazon Assistant</p></li> </Link>
                          <Link>  <li className="footer_colums_list"><p>Help</p></li> </Link>

                    </ul>
                  </div>

              </div>

             
            </div>

            <div className="money_currency">
                  
                  
                  <div className="currency_wrapper">
                     <div className="footer_logo">
                       <Link to="/">
                           <img className="footer-logo" src="https://www.persuadersindia.com/wp-content/uploads/2020/06/Slide-2_Amazon.png" alt="Amazon Logo"/>
                       </Link>
                     </div>

                      <div className="footer_language_bar">
                          <LanguageIcon/>
                          <p>English</p>
                      </div>

                      <div className="money_exchange">
                    
                          <p> $ USD-US.Dollar</p>

                      </div>

                      <div className="country_flags">
                         
                      <img src={lang} alt="" /> <span>United States</span>
                      </div>
                  </div>
              </div>


            <div className="footer_bottom_content">
                <div className="footer_bottom_wrapper">
                         <div className="bottom_footer_rows">
                             <ul>
                               <Link> <li><h5>Amazon music</h5> <p>Stream millions of songs</p></li></Link>
                               <Link> <li><h5>Sell on Amazon</h5> <p>Start a Selling Account</p></li></Link>
                               <Link> <li><h5>Book Depository</h5> <p>Books With Free delivery Worldwide</p></li></Link>
                               <Link> <li><h5>IMDb</h5> <p>Movies, TV & Celebrities</p></li></Link>
                               <Link> <li><h5>Ring</h5> <p>Smart Home Security Sytmes</p></li></Link>
                             </ul>
                         </div>

                         <div className="bottom_footer_rows">
                         <ul>
                               <Link> <li><h5>Amazon Advertising</h5> <p>Find, attract, and engage customers</p></li></Link>
                               <Link> <li><h5>Amazon Business</h5> <p>Everything For Your Business</p></li></Link>
                               <Link> <li><h5>Box Office Mojo</h5> <p>Find Movie Box Office Data</p></li></Link>
                               <Link> <li><h5>IMDbPro</h5> <p>Get info Entertainment Professionals Need</p></li></Link>
                               <Link> <li><h5>eero WiFi</h5> <p>Stream 4K Video in Every Room</p></li></Link>
                             </ul>
                         </div>

                         <div className="bottom_footer_rows">
                         <ul>
                               <Link> <li><h5>Amazon Drive</h5> <p>Cloud Storage from Amazon</p></li></Link>
                               <Link> <li><h5>Amazon Global</h5> <p>Ship Orders Internationally</p></li></Link>
                               <Link> <li><h5>ComiXology</h5> <p>Thousands og Digital Comics</p></li></Link>
                               <Link> <li><h5>Kindle Direct Piblishing</h5> <p>indie digital & Print Publishing Made Easy</p></li></Link>
                               <Link> <li><h5>Blink</h5> <p>Smart Security for Every Home</p></li></Link>
                             </ul>
                         </div>

                         <div className="bottom_footer_rows">
                         <ul>
                               <Link> <li><h5>6pm</h5> <p>Score deals on fashion brands</p></li></Link>
                               <Link> <li><h5>Home Services</h5> <p>Experienced Pros Happines Guarantee</p></li></Link>
                               <Link> <li><h5>DPReview</h5> <p>Digital photography</p></li></Link>
                               <Link> <li><h5>Prime video Direct</h5> <p>Video Distribution Made easy</p></li></Link>
                               <Link> <li><h5>Neighbors App</h5> <p>Real-Time Crime & Safety Alerts</p></li></Link>
                             </ul>
                         </div>

                         <div className="bottom_footer_rows">
                         <ul>
                               <Link> <li><h5>AbeBooks</h5> <p>Books, art & collections</p></li></Link>
                               <Link> <li><h5>Amazon Ignite</h5> <p>Sell Your original degiatl Resourses</p></li></Link>
                               <Link> <li><h5>East Dane</h5> <p>Designer Men's Fashion</p></li></Link>
                               <Link> <li><h5>Shopbop</h5> <p>Designer Fashion Brands</p></li></Link>
                               <Link> <li><h5>Amazon Subscription Boxes</h5> <p>Top subscription boxes-right to your door</p></li></Link>
                             </ul>
                         </div>

                         <div className="bottom_footer_rows">
                         <ul>
                               <Link> <li><h5>ACX</h5> <p>Audiobook Publishing made Easy</p></li></Link>
                               <Link> <li><h5>Amazon Web Services</h5> <p>Scalable Cloud Computing Services</p></li></Link>
                               <Link> <li><h5>Fabric</h5> <p>Sewing, Quilting & Knitting </p></li></Link>
                               <Link> <li><h5>Woot!</h5> <p>Deals and Shenanigans</p></li></Link>
                               <Link> <li><h5>PillPack</h5> <p>Pharmacy Simplified</p></li></Link>
                             </ul>
                         </div>

                         <div className="bottom_footer_rows">
                         <ul>
                               <Link> <li><h5>Alexa</h5> <p>Actionable Analytics for web</p></li></Link>
                               <Link> <li><h5>Audible</h5> <p>Listen books & Original Audio Performances</p></li></Link>
                               <Link> <li><h5>Goodreads</h5> <p>Book reviews & recommendations</p></li></Link>
                               <Link> <li><h5>Zappos</h5> <p>Shoes & Clothing</p></li></Link>
                               <Link> <li><h5>AmazonSecond Chance </h5> <p>Pass it on, trade it in, give it a second life</p></li></Link>
                             </ul>
                         </div>
                         
                    </div>
                
            </div>
                  <div className="contact_me">
                   <h3>Contact me </h3>  <TelegramIcon id="telegram"/>
                  </div>
        </div>
    )
}

export default Footer
