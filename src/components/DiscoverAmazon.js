import React, {useState} from 'react'
import '../style/Discover_Amazon.css'
import '../style/Responsive.css'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const DiscoverAmazon = () => {

    const [showUp, carouselShowup] = useState(false);

    const showCarousel_btn = (e) => {
        const Btn = document.querySelector('.prev_btn');
        const Btn_next = document.querySelector('.next_btn');
        if(!showUp){
            Btn.style.display = "flex"
            Btn_next.style.display = "block"

        }
        else{
            console.log("done")
        }
        carouselShowup(true)

    }

    const hideCarousel_btn = (e) => {
        const Btn = document.querySelector('.prev_btn');
        const Btn_next = document.querySelector('.next_btn');
        if(showUp){
            Btn.style.display = "none"
            Btn_next.style.display = "none"
            carouselShowup(false)
        }
        else{
            console.log("done")
        }
    }


    
  
   let prev_click = () => {
    //    let prev_click = document.querySelector('.prev_btn');
       const animation =document.querySelector('.ulListImg')
       animation.animate([
        { transform: 'translateX(70px)' }
    ],{
        duration: 400,
    })

    }
    


    let next_click = () => {
        // let prev_click = document.querySelector('.next_btn');
        const animat =document.querySelector('.ulListImg')
        animat.animate([
         { transform: 'translateX(-70px)' }
     ],{
         duration: 400,
     })

   }
            
   
    return (
        <div className="discover">
          <div className="discover_wrapper">

          <div className="discover_amzon_title">
                <h3>Discover Amazon</h3> <Link> <p>Click to learn more</p></Link>
            </div>

            <div className="discover_amazon_carousel" onMouseEnter={showCarousel_btn} onMouseLeave={hideCarousel_btn}>

            <button onClick={prev_click} className="prev_btn">
                      <ArrowBackIosIcon/>
            </button>
               <ul className="ulListImg">
                  
                 <Link>  <li className="carousel_images"><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png" alt="" /></li>
                 </Link>

                   <li className="carousel_images"><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg" alt="" /></li>

                   <Link><li className="carousel_images"><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg" alt="" /></li>
                   </Link>

                   <Link>
                   <li className="carousel_images"><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg" alt="" /></li>
                   </Link>

                   <Link>
                   <li className="carousel_images"><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg" alt="" /></li>
                   </Link>

                   <Link>
                   <li className="carousel_images"><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg" alt="" /></li>
                   </Link>

               </ul>
               
               <button onClick={next_click} className="next_btn">
                     <ArrowForwardIosIcon/>
                </button>
            </div>



          </div>
            
        </div>
    )
}

export default DiscoverAmazon
