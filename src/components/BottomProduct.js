import React from 'react'
import '../style/Bottom_Product.css'
import '../style/Responsive.css'
import { Link } from 'react-router-dom'

const Bottom_Product = ({title, image}) => {
    return (
        <div className="main_wrapper">
            {/* <div className="image_div_with_4Cards">sdfj</div> */}
            
            <div className="bottom_content_wrapper">


                <div className="bottom_image_card">
                  <div className="bottom_image_div_title">
                          <h3>{title}</h3>
                  </div>

                       <div className="bottom_content_images_div">
                            <img className="bottom_content_images" src={image} alt=""  />
                       </div>

                       <div className="see_more_div">
                          <Link to="/addCart"> <p>See more</p></Link>
                       </div>
                </div>

            </div>
        </div>
    )
}

export default Bottom_Product
