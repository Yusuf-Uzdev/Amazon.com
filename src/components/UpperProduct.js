import React from 'react'
import '../style/UpperProduct.css'
import '../style/Responsive.css'
import { Link } from 'react-router-dom'


const UpperProduct = ({title, image}) => {
    return (
        <div className="main_content_images_wrapper">
           <div className="content_images_wrapper">
               
           <div className="content_images_part">
                       <div className="image_div_title">
                          <h3>{title}</h3>
                       </div>

                       <div className="content_images_div">
                            <img className="content_images" src={image} alt=""  />
                       </div>

                       <div className="see_more_div">
                          <Link to="/addCart"> <p>See more</p></Link>
                       </div>
                      
            </div>

           </div>       
        </div>
    )
}

export default UpperProduct
